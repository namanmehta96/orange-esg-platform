import { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import { esc, showToast } from '../../utils/helpers';
import { generateOutreachEmail } from '../../utils/api';

export default function KeyContacts({ company }) {
  const { T, apiKey, currentLang } = useApp();
  const [modalState, setModalState] = useState(null); // null | { stakeholder, loading, email, error }

  const openEmailDraft = async (stakeholder) => {
    setModalState({ stakeholder, loading: true, email: null, error: null });
    try {
      const email = await generateOutreachEmail(stakeholder, company, apiKey, currentLang);
      setModalState({ stakeholder, loading: false, email, error: null });
    } catch (err) {
      setModalState({ stakeholder, loading: false, email: null, error: err.message || String(err) });
    }
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
      showToast(T('contacts.email.copied') || 'Email copied to clipboard');
    } catch {
      showToast('Copy failed');
    }
  };

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
                title={T('contacts.linkedin.title') || 'Search on LinkedIn'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <button
                type="button"
                className="email-draft-btn"
                onClick={() => openEmailDraft(s)}
                title={T('contacts.email.title') || 'Generate outreach email'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                {T('contacts.email.generate') || 'Generate Email'}
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
        <div className="modal-overlay" style={{ display: 'flex' }} onClick={backdropClick}>
          <div className="modal-box" style={{ maxWidth: 560 }}>
            <div className="modal-head">
              <div className="modal-title">
                <div className="modal-title-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                {T('contacts.email.modalTitle') || 'Outreach Email Draft'}
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <div style={{ fontSize: 12, color: 'var(--ink3)', marginBottom: 12 }}>
              <strong style={{ color: 'var(--ink)' }}>{modalState.stakeholder.name}</strong> · {modalState.stakeholder.role}
            </div>

            {modalState.loading && (
              <div className="email-loading">
                <div className="spinner-sm" />
                {T('contacts.email.loading') || 'Generating personalised email…'}
              </div>
            )}

            {modalState.error && (
              <div style={{ color: 'var(--red)', padding: 12 }}>{modalState.error}</div>
            )}

            {modalState.email && (
              <>
                <div className="email-subject">
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '.6px' }}>
                    {T('contacts.email.subject') || 'Subject'}:
                  </span>
                  <br />
                  {modalState.email.subject}
                </div>
                <div className="email-body-text">{modalState.email.body}</div>
                <div className="modal-btns">
                  <button className="modal-save" onClick={copyDraft}>
                    {T('contacts.email.copy') || 'Copy to clipboard'}
                  </button>
                  <button className="modal-clear" onClick={closeModal}>
                    {T('contacts.email.close') || 'Close'}
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
