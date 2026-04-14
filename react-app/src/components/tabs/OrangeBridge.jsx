import { useState, useCallback, useRef } from 'react';
import { useApp } from '../../contexts/AppContext';
import { esc, getOrangeDiff, getRiskOfInaction } from '../../utils/helpers';

export default function OrangeBridge({ company }) {
  const { currentLang, T } = useApp();
  const [openPitches, setOpenPitches] = useState({});
  const pitchContentRefs = useRef({});

  const togglePitch = useCallback((idx) => {
    setOpenPitches(prev => {
      const isOpen = !!prev[idx];
      const next = { ...prev, [idx]: !isOpen };

      // Animate max-height
      setTimeout(() => {
        const el = pitchContentRefs.current[idx];
        if (el) {
          if (!isOpen) {
            el.style.maxHeight = el.scrollHeight + 'px';
          } else {
            el.style.maxHeight = '0px';
          }
        }
      }, 0);

      return next;
    });
  }, []);

  return (
    <div className="tab-panel active" id="tab-bridge">
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
        <div className="sec-title">{T('bridge.title')} {esc(company.name.split(' ')[0])}{T('bridge.title2')}</div>
        <div className="sec-sub">{T('bridge.sub')}</div>
      </div>

      <div className="bridge-grid">
        {company.solutions.map((s, i) => (
          <div key={i} className={`bridge-card ${s.cls}`} style={{ animation: `cardFadeIn .4s ease ${i * 80}ms both` }}>
            <div className={`bp ${s.pcls}`}>{s.pillar}</div>
            <div className="bo">{s.offer}</div>
            <div className="bd">{s.desc}</div>
            <div className="bf">
              {Array.from({ length: 5 }, (_, j) => (
                <div key={j} className={`fd ${j < s.fit ? 'fd-on' : 'fd-off'}`} />
              ))}
              <div className="fl">
                {s.fit === 5 ? T('bridge.critical') : s.fit >= 4 ? T('bridge.strong') : T('bridge.good')}
              </div>
            </div>
            <div
              className="pitch-toggle"
              onClick={() => togglePitch(i)}
            >
              {openPitches[i] ? T('bridge.seeless') : T('bridge.seepitch')}
            </div>
            <div
              className="pitch-content"
              ref={el => pitchContentRefs.current[i] = el}
              style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height .35s ease' }}
            >
              <div className="pitch-inner">
                <div>
                  <div className="pitch-label">{T('bridge.whyfits')}</div>
                  <div className="pitch-row">{s.why}</div>
                </div>
                <div>
                  <div className="pitch-label">{T('bridge.diff')}</div>
                  <div className="pitch-row">{getOrangeDiff(s.pillar, currentLang)}</div>
                </div>
                <div className="pitch-action-box">
                  <div className="pitch-label">{T('bridge.talking')}</div>
                  <div className="pitch-row">{T('bridge.talkingpoint', { name: esc(company.name.split(' ')[0]), offer: s.offer.toLowerCase() })}</div>
                </div>
                <div className="pitch-risk-box">
                  <div className="pitch-label">{T('bridge.risk')}</div>
                  <div className="pitch-row" dangerouslySetInnerHTML={{ __html: getRiskOfInaction(company, currentLang, i) }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why these solutions box */}
      <div className="why-box" style={{ marginTop: '14px' }}>
        <div className="why-box-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
          {T('bridge.whythese')} {esc(company.name.split(' ')[0])} ?
        </div>
        {company.solutions.map((s, i) => (
          <div key={i} className="why-entry"><strong>{s.offer}:</strong> {s.why}</div>
        ))}
      </div>

      {/* Frugal AI Recommendation */}
      <div className="frugal-card">
        <div className="frugal-ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FF7900" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        </div>
        <div style={{ flex: 1 }}>
          <div className="frugal-lbl">{T('bridge.frugal')}</div>
          <div className="frugal-title">{company.frugal.title}</div>
          <div className="frugal-desc">{company.frugal.desc}</div>
          <div className="frugal-saving">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            {company.frugal.saving}
          </div>
        </div>
      </div>
    </div>
  );
}
