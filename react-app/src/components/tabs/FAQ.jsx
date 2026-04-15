import { useState } from 'react';
import { useApp } from '../../contexts/AppContext';

const FAQ_KEYS = ['1','2','3','4','5','6','7','8','9','10','11','12'];

export default function FAQ() {
  const { T } = useApp();
  const [openFaq, setOpenFaq] = useState('1');

  return (
    <div className="tab-panel active" id="tab-faq">
      <div className="sec-hdr">
        <div className="sec-ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div className="sec-title">{T('faq.title')}</div>
      </div>

      <div className="faq-list">
        {FAQ_KEYS.map((k) => {
          const isOpen = openFaq === k;
          return (
            <div key={k} className={`faq-item${isOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenFaq(prev => prev === k ? null : k)}
                aria-expanded={isOpen}
              >
                <span>{T('faq.q' + k)}</span>
                <svg className="faq-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isOpen && <div className="faq-a">{T('faq.a' + k)}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
