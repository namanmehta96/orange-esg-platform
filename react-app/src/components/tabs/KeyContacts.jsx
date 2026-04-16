import { useState, useMemo } from 'react';
import { useApp } from '../../contexts/AppContext';
import { esc, showToast, getMatchScore, getCompanyKey } from '../../utils/helpers';
import { generateOutreachEmail } from '../../utils/api';
import { sampleEmails, stakeholderDefaultSolution } from '../../data/sampleEmails';

function computeTopPicks(company, catalog, n = 3) {
  const scored = catalog.map(sol => ({ sol, score: getMatchScore(sol, company) }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, n).map(x => x.sol.id);
}

function pickDefaultSolutionId(companyKey, stakeholderInitLower, stakeholder, catalog, topPickIds) {
  const defaults = (companyKey && stakeholderDefaultSolution[companyKey]) || null;
  if (defaults && defaults[stakeholderInitLower]) return defaults[stakeholderInitLower];

  const focus = stakeholder.emailFocus;
  const matchById = (id) => catalog.find(c => c.id === id);

  if (focus === 'technology') {
    const techIds = ['rgesn', 'frugal-ai', 'carbon-calc', 'ecodesign-cert', 'genai-gov', 'sustainable-cloud'];
    for (const id of techIds) if (matchById(id) && topPickIds.includes(id)) return id;
    for (const id of techIds) if (matchById(id)) return id;
  }
  if (focus === 'sustainability') {
    const susIds = ['esg-platform', 'scope3-estimator', 'csrd-accel', 'decarb-roadmap', 'ecovadis'];
    for (const id of susIds) if (matchById(id) && topPickIds.includes(id)) return id;
    for (const id of susIds) if (matchById(id)) return id;
  }
  // executive: prefer top pick #1 or decarb-roadmap
  return topPickIds[0] || 'decarb-roadmap';
}

export default function KeyContacts({ company }) {
  const { T, apiKey, currentLang, getLocalizedCatalog } = useApp();
  // { stakeholder, stakeholderKey, step: 'select'|'loading'|'ready'|'error', selectedSolutionId, email, error, fromSample }
  const [modalState, setModalState] = useState(null);

  const catalog = useMemo(() => getLocalizedCatalog(), [getLocalizedCatalog]);
  const companyKey = useMemo(() => getCompanyKey(company), [company]);
  const topPickIds = useMemo(() => computeTopPicks(company, catalog, 3), [company, catalog]);

  const orderedCatalog = useMemo(() => {
    const tops = topPickIds
      .map(id => catalog.find(c => c.id === id))
      .filter(Boolean);
    const rest = catalog.filter(c => !topPickIds.includes(c.id));
    return [...tops, ...rest];
  }, [catalog, topPickIds]);

  const openSolutionPicker = (stakeholder) => {
    const key = (stakeholder.init || '').toLowerCase();
    const defaultId = pickDefaultSolutionId(companyKey, key, stakeholder, catalog, topPickIds);
    setModalState({
      stakeholder,
      stakeholderKey: key,
      step: 'select',
      selectedSolutionId: defaultId,
      email: null,
      error: null,
      fromSample: false,
    });
  };

  const selectSolution = (id) => {
    setModalState(prev => prev ? { ...prev, selectedSolutionId: id } : prev);
  };

  const getSolutionById = (id) => catalog.find(c => c.id === id);

  const generateEmail = async () => {
    if (!modalState) return;
    const selectedSolution = getSolutionById(modalState.selectedSolutionId);
    const defaultForStakeholder = (companyKey && stakeholderDefaultSolution[companyKey])
      ? stakeholderDefaultSolution[companyKey][modalState.stakeholderKey]
      : null;

    // No API key path: show hardcoded sample if the user kept the default solution
    if (!apiKey) {
      const sample = companyKey && sampleEmails[companyKey] && sampleEmails[companyKey][modalState.stakeholderKey];
      if (sample) {
        const keptDefault = defaultForStakeholder && defaultForStakeholder === modalState.selectedSolutionId;
        setModalState({
          ...modalState,
          step: 'ready',
          email: { subject: sample.subject, body: sample.body },
          fromSample: true,
          sampleIsDefault: keptDefault,
          error: null,
        });
        return;
      }
    }

    // API key path: call live API
    setModalState({ ...modalState, step: 'loading', email: null, error: null });
    try {
      const email = await generateOutreachEmail(
        modalState.stakeholder,
        company,
        apiKey,
        currentLang,
        selectedSolution
      );
      setModalState(prev => prev ? { ...prev, step: 'ready', email, fromSample: false, error: null } : prev);
    } catch (err) {
      setModalState(prev => prev ? { ...prev, step: 'error', email: null, error: err.message || String(err) } : prev);
    }
  };

  const regenerate = () => generateEmail();

  const goBackToSelector = () => {
    setModalState(prev => prev ? { ...prev, step: 'select', email: null, error: null } : prev);
  };

  const closeModal = () => setModalState(null);

  const backdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const copyDraft = async () => {
    if (!modalState?.email) return;
    const text = `Subject: ${modalState.email.subject}\n\n${modalState.email.body}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast(T('contacts.email.copied'));
    } catch {
      showToast(T('toast.copyfail'));
    }
  };

  const selectedSolution = modalState ? getSolutionById(modalState.selectedSolutionId) : null;
  const selectedName = selectedSolution?.name || '';

  return (
    <div className="tab-panel active" id="tab-contacts">
      {/* Stakeholder Map */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
        <div className="sec-title">{T('contacts.stakeholders')}</div>
      </div>
      <div className="stake-list">
        {company.stakeholders.map((s, i) => {
          const liQuery = encodeURIComponent(s.name + ' ' + company.name.split(' ')[0]);
          const liUrl = `https://www.linkedin.com/search/results/people/?keywords=${liQuery}`;
          return (
            <div key={i} className="stake-row">
              <div className="sav" style={{ background: s.bg, color: s.tc }}>{s.init}</div>
              <div className="si2">
                <div className="sn">{s.name}</div>
                <div className="sr">{s.role}</div>
              </div>
              <div className="sw">{s.why}</div>
              <div className={`spr ${s.ph ? 'ph' : 'pm'}`}>{s.priority}</div>
              <a
                href={liUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="li-btn"
                title={T('contacts.linkedin.title')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <button
                type="button"
                className="email-draft-btn"
                onClick={() => openSolutionPicker(s)}
                title={T('contacts.email.title')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                {T('contacts.email.generate')}
              </button>
            </div>
          );
        })}
      </div>

      <div className="divider" />

      {/* Conversation Starters */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
        <div className="sec-title">{T('contacts.starters')} {esc(company.name.split(' ')[0])}{T('contacts.starters2')}</div>
      </div>
      <div className="q-list">
        {company.questions.map((q, i) => (
          <div key={i} className="q-item">
            <div className="q-num">{i + 1}</div>
            <div>
              <div className="q-text">{q.text}</div>
              <div className="q-per">{q.persona}</div>
            </div>
          </div>
        ))}
      </div>

      {modalState && (
        <div className="modal-overlay" style={{ position:'fixed', inset:0, zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,0,0,0.7)', padding:'16px' }} onClick={backdropClick}>
          <div className="modal-box email-modal" style={{ display:'flex', flexDirection:'column', width:'100%', maxWidth:'620px', maxHeight:'85vh', background:'var(--card)', borderRadius:'12px', overflow:'hidden' }}>
            <div className="modal-head" style={{ flexShrink:0, padding:'20px 20px 0' }}>
              <div className="modal-title">
                <div className="modal-title-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                {T('contacts.email.modalTitleFor', { name: modalState.stakeholder.name })}
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="email-recipient" style={{ flexShrink:0, padding:'12px 20px 0' }}>
              <strong>{modalState.stakeholder.name}</strong>
              <span>{modalState.stakeholder.role}</span>
            </div>

            {modalState.step === 'select' && (
              <>
                <div className="email-modal-fixed-top" style={{ flexShrink:0, padding:'0 20px 6px' }}>
                  <div className="email-selector-label">{T('contacts.email.pickSolution')}</div>
                </div>
                <div className="email-modal-scroll" style={{ flex:1, minHeight:0, overflowY:'auto', padding:'0 20px 20px' }}>
                  <div className="email-solution-grid">
                    {orderedCatalog.map((sol) => {
                      const active = modalState.selectedSolutionId === sol.id;
                      const isTopPick = topPickIds.includes(sol.id);
                      return (
                        <button
                          key={sol.id}
                          type="button"
                          className={`solution-chip${active ? ' active' : ''}${isTopPick ? ' top-pick' : ''}`}
                          onClick={() => selectSolution(sol.id)}
                        >
                          <span className="solution-chip-name">{sol.name}</span>
                          <span className="solution-chip-pillar" style={{ color: sol.pillarColor }}>{sol.pillar}</span>
                          {isTopPick && (
                            <span className="solution-chip-topbadge">{T('contacts.email.topPick')}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="email-modal-footer" style={{ flexShrink:0, padding:'12px 20px 16px', borderTop:'1px solid var(--line)', display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  <button
                    className="modal-save"
                    onClick={generateEmail}
                    disabled={!modalState.selectedSolutionId}
                  >
                    {T('contacts.email.generateWith', { name: selectedName })}
                  </button>
                  <button className="modal-clear" onClick={closeModal}>
                    {T('contacts.email.close')}
                  </button>
                </div>
              </>
            )}

            {modalState.step === 'loading' && (
              <div className="email-modal-scroll" style={{ flex:1, minHeight:0, overflowY:'auto', padding:'0 20px 20px' }}>
                <div className="email-loading">
                  <div className="spinner-sm" />
                  {T('contacts.email.loading.personalised', { name: modalState.stakeholder.name.split(' ')[0] })}
                </div>
              </div>
            )}

            {modalState.step === 'error' && (
              <>
                <div className="email-modal-scroll" style={{ flex:1, minHeight:0, overflowY:'auto', padding:'0 20px 20px' }}>
                  <div style={{ color: 'var(--red)', padding: 12 }}>{modalState.error}</div>
                </div>
                <div className="email-modal-footer" style={{ flexShrink:0, padding:'12px 20px 16px', borderTop:'1px solid var(--line)', display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  <button className="modal-save" onClick={regenerate}>{T('contacts.email.regenerate')}</button>
                  <button className="modal-clear" onClick={goBackToSelector}>{T('contacts.email.changeSolution')}</button>
                  <button className="modal-clear" onClick={closeModal}>{T('contacts.email.close')}</button>
                </div>
              </>
            )}

            {modalState.step === 'ready' && modalState.email && (
              <>
                <div style={{ flexShrink:0, padding:'12px 20px 0' }}>
                  {modalState.fromSample && (
                    <div className="email-sample-banner">
                      {modalState.sampleIsDefault
                        ? T('contacts.email.sampleBanner')
                        : T('contacts.email.sampleMismatch')}
                    </div>
                  )}
                  <div className="email-featuring">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <span>
                      <strong>{T('contacts.email.featuring')}</strong> {selectedName}
                    </span>
                  </div>
                  <div className="email-subject">
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '.6px' }}>
                      {T('contacts.email.subject')}
                    </span>
                    <br />
                    <strong>{modalState.email.subject}</strong>
                  </div>
                </div>
                <div style={{ flex:1, minHeight:0, overflowY:'auto', padding:'0 20px 20px' }}>
                  <div className="email-body-text">{modalState.email.body}</div>
                </div>
                <div style={{ flexShrink:0, padding:'12px 20px 16px', borderTop:'1px solid var(--line)', display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  <button className="modal-save" onClick={copyDraft}>
                    {T('contacts.email.copy')}
                  </button>
                  <button
                    className="modal-clear"
                    onClick={regenerate}
                    disabled={!apiKey}
                    title={!apiKey ? T('contacts.email.regenerate.nokey') : ''}
                  >
                    {T('contacts.email.regenerate')}
                  </button>
                  <button className="modal-clear" onClick={goBackToSelector}>
                    {T('contacts.email.changeSolution')}
                  </button>
                  <button className="modal-clear" onClick={closeModal}>
                    {T('contacts.email.close')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
