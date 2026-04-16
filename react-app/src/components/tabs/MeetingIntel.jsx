import { useState, useCallback, useRef } from 'react';
import { useApp } from '../../contexts/AppContext';
import { esc, getOrangeDiff, getRiskOfInaction, getCompanyKey } from '../../utils/helpers';
import { copyToClipboard } from '../../utils/exports';
import { analyseNotes } from '../../utils/api';
import { CATALOG } from '../../data/catalog';
import { PREFAB_TALKING_POINTS } from '../../data/prefabTalkingPoints';

function TalkingPointsPanel({ offer, company, companyKey, currentLang, T }) {
  let tp = null;
  if (companyKey && PREFAB_TALKING_POINTS[companyKey] && PREFAB_TALKING_POINTS[companyKey][offer]) {
    tp = PREFAB_TALKING_POINTS[companyKey][offer];
  }

  if (tp) {
    return (
      <div className="talking-point-block">
        <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.hook')}</div><div className="tp-text">{esc(tp.hook)}</div></div>
        <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.fit')}</div><div className="tp-text">{esc(tp.fit)}</div></div>
        <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.diff')}</div><div className="tp-text">{esc(tp.diff)}</div></div>
        <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.risk')}</div><div className="tp-text">{esc(tp.risk)}</div></div>
        <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.close')}</div><div className="tp-text">{esc(tp.close)}</div></div>
      </div>
    );
  }

  // Generic fallback
  const sol = company.solutions.find(s => s.offer === offer) || company.solutions[0];
  const diff = sol ? getOrangeDiff(sol.pillar, currentLang) : getOrangeDiff('IT for Society', currentLang);
  const risk = getRiskOfInaction(company, currentLang).replace(/<[^>]+>/g, '');
  const hook = sol ? sol.why : `${offer} is directly relevant to this company's ESG agenda.`;
  const fitText = sol ? sol.desc : `${offer} addresses key ESG measurement and reporting needs.`;

  return (
    <div className="talking-point-block">
      <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.hook')}</div><div className="tp-text">{esc(hook)}</div></div>
      <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.fit')}</div><div className="tp-text">{esc(fitText)}</div></div>
      <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.diff')}</div><div className="tp-text">{esc(diff)}</div></div>
      <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.risk')}</div><div className="tp-text">{esc(risk)}</div></div>
      <div className="tp-item"><div className="tp-label-chip">{T('meeting.tp.close')}</div><div className="tp-text">{T('close.discovery', { offer: esc(offer) })}</div></div>
    </div>
  );
}

export default function MeetingIntel({ company }) {
  const { currentLang, T, apiKey } = useApp();
  const companyKey = getCompanyKey(company);
  const allOffers = CATALOG.map(c => c.name);
  const topOffers = company.solutions.map(s => s.offer);

  const [selectedOffer, setSelectedOffer] = useState(topOffers[0] || allOffers[0]);
  const [meetingNotes, setMeetingNotes] = useState('');
  const [analysing, setAnalysing] = useState(false);
  const [notesResult, setNotesResult] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({});
  const accordionBodyRefs = useRef({});

  const hasKey = !!apiKey;

  const handleSelectSolution = useCallback((offer) => {
    setSelectedOffer(offer);
  }, []);

  const agendaText = `ORANGE BUSINESS MEETING AGENDA \u2014 ${company.name}\n\nOpening (2 min): Introductions & context setting\n\nESG Discovery (5 min):\n  1. ${company.questions[0].text}\n  2. ${company.questions[1].text}\n  3. ${company.questions[2].text}\n\nSolution Presentation (10 min):\n  \u2192 ${company.solutions[0].offer}: ${company.solutions[0].why}\n  \u2192 ${company.solutions[1].offer}: ${company.solutions[1].why}\n  \u2192 ${company.solutions[2].offer}: ${company.solutions[2].why}\n\nNext Steps (3 min):\n  \u2192 Agree proof-of-concept scope\n  \u2192 Identify internal champion\n  \u2192 Schedule technical deep-dive`;

  const handleCopyAgenda = useCallback((e) => {
    copyToClipboard(agendaText, e.currentTarget, T('meeting.copy.agenda'), T);
  }, [agendaText, T]);

  const handleAnalyseNotes = useCallback(async () => {
    if (!meetingNotes.trim()) return;
    setAnalysing(true);
    setNotesResult(null);
    try {
      const result = await analyseNotes(meetingNotes, company.name, apiKey);
      setNotesResult(result);
    } catch (e) {
      setNotesResult({ error: e.message || String(e) });
    }
    setAnalysing(false);
  }, [meetingNotes, company.name, apiKey]);

  const toggleAccordion = useCallback((idx) => {
    setOpenAccordions(prev => {
      const wasOpen = !!prev[idx];
      // Close all, then toggle this one
      const next = {};
      if (!wasOpen) next[idx] = true;

      setTimeout(() => {
        Object.keys(accordionBodyRefs.current).forEach(k => {
          const el = accordionBodyRefs.current[k];
          if (el) {
            if (next[k]) {
              el.style.maxHeight = el.scrollHeight + 'px';
            } else {
              el.style.maxHeight = '0px';
            }
          }
        });
      }, 0);

      return next;
    });
  }, []);

  return (
    <div className="tab-panel active" id="tab-meeting">
      {/* Talking Points Section */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
        <div className="sec-title">{T('meeting.talking')}</div>
        <div className="sec-sub">{T('meeting.select.sub')}</div>
      </div>

      <div className="solution-selector-wrap">
        <div className="solution-selector-label">{T('meeting.select.label')}</div>
        <div className="solution-pills-wrap">
          {allOffers.map(offer => (
            <button
              key={offer}
              className={`sol-pill${selectedOffer === offer ? ' active' : ''}`}
              onClick={() => handleSelectSolution(offer)}
            >
              {esc(offer)}
            </button>
          ))}
        </div>
      </div>

      <div id="talking-points-panel">
        <TalkingPointsPanel
          offer={selectedOffer}
          company={company}
          companyKey={companyKey}
          currentLang={currentLang}
          T={T}
        />
      </div>

      <div className="divider" />

      {/* Meeting Agenda */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
        <div className="sec-title">{T('meeting.agenda')}</div>
        <div className="sec-sub">{T('meeting.agenda.auto')} {esc(company.name.split(' ')[0])}</div>
      </div>

      <div className="agenda-timeline">
        {/* Opening */}
        <div className="agenda-item">
          <div className="agenda-dot-col"><div className="agenda-dot" /><div className="agenda-line" /></div>
          <div className="agenda-content">
            <div className="agenda-time-label">{T('meeting.open.time')}</div>
            <div className="agenda-section-title">{T('meeting.open.title')}</div>
            <div className="agenda-bullets">
              <div className="agenda-bullet">{T('meeting.open.bullet1')}</div>
              <div className="agenda-bullet">{T('meeting.open.bullet2a')} {esc(company.name.split(' ')[0])}{T('meeting.open.bullet2b')}</div>
            </div>
          </div>
        </div>

        {/* Discovery */}
        <div className="agenda-item">
          <div className="agenda-dot-col"><div className="agenda-dot" /><div className="agenda-line" /></div>
          <div className="agenda-content">
            <div className="agenda-time-label">{T('meeting.disc.time')}</div>
            <div className="agenda-section-title">{T('meeting.disc.title')}</div>
            <div className="agenda-bullets">
              {company.questions.map((q, i) => (
                <div key={i} className="agenda-bullet">
                  {q.text} <em style={{ fontSize: '11px', color: 'var(--ink3)' }}> &mdash; {q.persona}</em>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="agenda-item">
          <div className="agenda-dot-col"><div className="agenda-dot" /><div className="agenda-line" /></div>
          <div className="agenda-content">
            <div className="agenda-time-label">{T('meeting.sol.time')}</div>
            <div className="agenda-section-title">{T('meeting.sol.title')}</div>
            <div className="agenda-bullets">
              {company.solutions.map((s, i) => (
                <div key={i} className="agenda-bullet"><strong>{s.offer}</strong> &mdash; {s.why}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="agenda-item">
          <div className="agenda-dot-col"><div className="agenda-dot" /></div>
          <div className="agenda-content">
            <div className="agenda-time-label">{T('meeting.next.time')}</div>
            <div className="agenda-section-title">{T('meeting.next.title')}</div>
            <div className="agenda-bullets">
              <div className="agenda-bullet">{T('meeting.next.champion')}</div>
              <div className="agenda-bullet">{T('meeting.next.poc')}</div>
              <div className="agenda-bullet">{T('meeting.next.deepdive')}</div>
            </div>
          </div>
        </div>
      </div>

      <button className="copy-btn" onClick={handleCopyAgenda}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        {T('meeting.copy.agenda')}
      </button>

      <div className="divider" />

      {/* Meeting Notes AI Analysis */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></div>
        <div className="sec-title">{T('meeting.notes.title')}</div>
      </div>
      <textarea
        className="notes-area"
        placeholder={T('meeting.notes.placeholder')}
        value={meetingNotes}
        onChange={(e) => setMeetingNotes(e.target.value)}
      />
      {!hasKey && (
        <div className="notes-api-notice">&#9881; {T('meeting.notes.nokey')}</div>
      )}
      <button
        className="notes-btn"
        onClick={handleAnalyseNotes}
        disabled={!hasKey || analysing}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        {analysing ? T('meeting.notes.analysing') : T('meeting.notes.btn')}
      </button>

      {notesResult && !notesResult.error && (
        <div className="notes-result" style={{ display: 'block' }}>
          {notesResult.commitments && notesResult.commitments.length > 0 && (
            <div className="notes-result-section">
              <div className="notes-result-title">{T('meeting.notes.commitments')}</div>
              {notesResult.commitments.map((c, i) => (
                <div key={i} className="notes-result-item">{c}</div>
              ))}
            </div>
          )}
          {notesResult.painPoints && notesResult.painPoints.length > 0 && (
            <div className="notes-result-section">
              <div className="notes-result-title">{T('meeting.notes.pains')}</div>
              {notesResult.painPoints.map((p, i) => (
                <div key={i} className="notes-result-item">{p}</div>
              ))}
            </div>
          )}
          {notesResult.followUps && notesResult.followUps.length > 0 && (
            <div className="notes-result-section">
              <div className="notes-result-title">{T('meeting.notes.followups')}</div>
              {notesResult.followUps.map((f, i) => (
                <div key={i} className="notes-result-item">{f}</div>
              ))}
            </div>
          )}
          {notesResult.solutions && notesResult.solutions.length > 0 && (
            <div className="notes-result-section">
              <div className="notes-result-title">{T('meeting.notes.solutions')}</div>
              {notesResult.solutions.map((s, i) => (
                <div key={i} className="notes-result-item">{s}</div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="divider" />

      {/* Sales Talking Points Accordion */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
        <div className="sec-title">{T('meeting.credentials')}</div>
      </div>
      <div className="talking-accordion">
        {company.solutions.map((s, i) => {
          const diff = getOrangeDiff(s.pillar, currentLang);
          const pts = [
            T('cred.ecovadis'),
            T('cred.scale', { name: company.name.split(' ')[0] }),
            T('cred.proof', { industry: company.industry, offer: s.offer })
          ];
          const isOpen = !!openAccordions[i];

          return (
            <div key={i} className="ta-item">
              <div
                className={`ta-header${isOpen ? ' open' : ''}`}
                onClick={() => toggleAccordion(i)}
              >
                <div className="ta-pillar-dot" style={{ background: s.pillarColor || '#FF7900' }} />
                <div className="ta-offer">{s.offer}</div>
                <div className="ta-chevron">▼</div>
              </div>
              <div
                className="ta-body"
                ref={el => accordionBodyRefs.current[i] = el}
                style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height .3s ease' }}
              >
                <div className="ta-body-inner">
                  {pts.map((p, j) => (
                    <div key={j} className="ta-point">
                      <div className="ta-point-num">{j + 1}</div>
                      <div>{p}</div>
                    </div>
                  ))}
                  <div className="ta-differentiator">
                    <div className="ta-diff-label">{T('meeting.whyorange')}</div>
                    {diff}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
