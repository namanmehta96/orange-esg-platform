import { useApp } from '../../contexts/AppContext';
import { esc } from '../../utils/helpers';

export default function KeyContacts({ company }) {
  const { T } = useApp();

  return (
    <div className="tab-panel active" id="tab-contacts">
      {/* Stakeholder Map */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
        <div className="sec-title">{T('contacts.stakeholders')}</div>
      </div>
      <div className="stake-list">
        {company.stakeholders.map((s, i) => (
          <div key={i} className="stake-row">
            <div className="sav" style={{ background: s.bg, color: s.tc }}>{s.init}</div>
            <div className="si2">
              <div className="sn">{s.name}</div>
              <div className="sr">{s.role}</div>
            </div>
            <div className="sw">{s.why}</div>
            <div className={`spr ${s.ph ? 'ph' : 'pm'}`}>{s.priority}</div>
          </div>
        ))}
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
    </div>
  );
}
