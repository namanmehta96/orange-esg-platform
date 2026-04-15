import { useEffect, useState, useMemo } from 'react';
import { useApp } from '../contexts/AppContext';
import { SEED_DATA } from '../data/seedData';

const LS_KEY = 'ob_esg_tutorial_done';

function buildSteps(hasCompany, T) {
  if (hasCompany) {
    return [
      { title: T('tut.p1.title'), body: T('tut.p1.body'), target: '#main-tabs' },
      { title: T('tut.p2.title'), body: T('tut.p2.body'), target: '#main-tabs .tab-btn:nth-child(1)' },
      { title: T('tut.p3.title'), body: T('tut.p3.body'), target: '#main-tabs .tab-btn:nth-child(2)' },
      { title: T('tut.p4.title'), body: T('tut.p4.body'), target: '#main-tabs .tab-btn:nth-child(4)' },
      { title: T('tut.p5.title'), body: T('tut.p5.body'), target: '#chatbot-btn' },
    ];
  }
  return [
    { title: T('tut.h1.title'), body: T('tut.h1.body'), target: '.home-search-wrap' },
    { title: T('tut.h2.title'), body: T('tut.h2.body'), target: '.home-demo-grid', cta: 'bnp' },
    { title: T('tut.h3.title'), body: T('tut.h3.body'), preview: 'exec' },
    { title: T('tut.h4.title'), body: T('tut.h4.body'), preview: 'bridge' },
    { title: T('tut.h5.title'), body: T('tut.h5.body'), preview: 'chat' },
  ];
}

export default function Tutorial() {
  const { tutorialOpen, setTutorialOpen, currentCompany, setCurrentCompany, setView, T } = useApp();
  const [stepIdx, setStepIdx] = useState(0);
  const [highlightRect, setHighlightRect] = useState(null);

  const steps = useMemo(() => buildSteps(!!currentCompany, T), [currentCompany, T]);
  const step = steps[stepIdx];
  const total = steps.length;

  // Auto-open on first visit
  useEffect(() => {
    const done = localStorage.getItem(LS_KEY);
    if (!done) {
      const t = setTimeout(() => setTutorialOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, [setTutorialOpen]);

  // Reset step when opened or when company context changes
  useEffect(() => {
    if (tutorialOpen) setStepIdx(0);
  }, [tutorialOpen, !!currentCompany]);

  // Compute highlight rect for current step target, and lift the element above the overlay.
  useEffect(() => {
    if (!tutorialOpen || !step || !step.target) {
      setHighlightRect(null);
      return;
    }

    let liftedEl = null;
    let prev = { position: '', zIndex: '', boxShadow: '', borderRadius: '', transition: '' };

    const lift = (el) => {
      if (!el || liftedEl === el) return;
      // Restore previous target first
      if (liftedEl) {
        liftedEl.style.position = prev.position;
        liftedEl.style.zIndex = prev.zIndex;
        liftedEl.style.boxShadow = prev.boxShadow;
        liftedEl.style.borderRadius = prev.borderRadius;
        liftedEl.style.transition = prev.transition;
      }
      liftedEl = el;
      prev = {
        position: el.style.position,
        zIndex: el.style.zIndex,
        boxShadow: el.style.boxShadow,
        borderRadius: el.style.borderRadius,
        transition: el.style.transition,
      };
      const cs = window.getComputedStyle(el);
      if (cs.position === 'static') el.style.position = 'relative';
      el.style.zIndex = '10000';
      el.style.boxShadow = '0 0 0 4px #FF7900, 0 0 24px rgba(255,121,0,0.55)';
      el.style.borderRadius = cs.borderRadius && cs.borderRadius !== '0px' ? cs.borderRadius : '8px';
      el.style.transition = 'box-shadow .2s ease';
    };

    const update = () => {
      const el = document.querySelector(step.target);
      if (!el) {
        setHighlightRect(null);
        return;
      }
      const r = el.getBoundingClientRect();
      setHighlightRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      lift(el);
    };

    update();
    const onResize = () => update();
    const int = setInterval(update, 300);
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(int);
      window.removeEventListener('resize', onResize);
      if (liftedEl) {
        liftedEl.style.position = prev.position;
        liftedEl.style.zIndex = prev.zIndex;
        liftedEl.style.boxShadow = prev.boxShadow;
        liftedEl.style.borderRadius = prev.borderRadius;
        liftedEl.style.transition = prev.transition;
      }
    };
  }, [tutorialOpen, step]);

  if (!tutorialOpen) return null;

  const next = () => setStepIdx(i => Math.min(total - 1, i + 1));
  const prev = () => setStepIdx(i => Math.max(0, i - 1));

  const finish = () => {
    localStorage.setItem(LS_KEY, 'true');
    setTutorialOpen(false);
  };

  const skip = () => finish();

  const loadBnpAndContinue = () => {
    const bnp = SEED_DATA.bnp;
    if (bnp) {
      setCurrentCompany(bnp);
      setView('profile');
      // After state update, the `currentCompany` changes, steps will rebuild.
      // Reset to first profile-state step.
      setTimeout(() => setStepIdx(0), 100);
    }
  };

  // Decide placement, try to place tooltip below the highlighted element; if it would go off-screen, place above.
  const tipStyle = {};
  if (highlightRect) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tipWidth = Math.min(380, vw - 32);
    const preferredLeft = Math.max(16, Math.min(highlightRect.left + highlightRect.width / 2 - tipWidth / 2, vw - tipWidth - 16));
    tipStyle.left = preferredLeft + 'px';
    tipStyle.width = tipWidth + 'px';
    const belowSpace = vh - (highlightRect.top + highlightRect.height);
    if (belowSpace > 220 || belowSpace > highlightRect.top) {
      tipStyle.top = (highlightRect.top + highlightRect.height + 14) + 'px';
    } else {
      tipStyle.bottom = (vh - highlightRect.top + 14) + 'px';
    }
  } else {
    // Center
    tipStyle.left = '50%';
    tipStyle.top = '50%';
    tipStyle.transform = 'translate(-50%, -50%)';
    tipStyle.width = 'min(420px, calc(100vw - 32px))';
  }

  return (
    <div className="tutorial-root">
      {/* Darkened overlay, the real highlighted element is lifted above this via z-index */}
      <div className="tutorial-backdrop" onClick={skip} />

      {/* Tooltip */}
      <div className="tutorial-tip" style={tipStyle} onClick={(e) => e.stopPropagation()}>
        <div className="tutorial-step">{T('tut.step', { n: stepIdx + 1, total })}</div>
        <div className="tutorial-title">{step.title}</div>
        <div className="tutorial-body">{step.body}</div>

        {step.preview && (
          <div className="tutorial-preview">
            {step.preview === 'exec' && (
              <div className="tutorial-preview-card">
                <div className="tp-label">{T('tab.exec')}</div>
                <div className="tp-bars"><span style={{ width: '78%' }} /><span style={{ width: '62%' }} /><span style={{ width: '85%' }} /></div>
              </div>
            )}
            {step.preview === 'bridge' && (
              <div className="tutorial-preview-card">
                <div className="tp-label">{T('tab.bridge')}</div>
                <div className="tp-dots"><span /><span /><span /></div>
              </div>
            )}
            {step.preview === 'chat' && (
              <div className="tutorial-preview-card">
                <div className="tp-label">{T('chat.title')}</div>
                <div className="tp-chat">
                  <div className="tp-chat-msg" />
                  <div className="tp-chat-msg short" />
                </div>
              </div>
            )}
          </div>
        )}

        {step.cta === 'bnp' && (
          <button className="tutorial-cta" onClick={loadBnpAndContinue}>
            {T('tut.try')}
          </button>
        )}

        <div className="tutorial-controls">
          <button className="tutorial-skip" onClick={skip}>{T('tut.skip')}</button>
          <div className="tutorial-nav">
            {stepIdx > 0 && (
              <button className="tutorial-btn-secondary" onClick={prev}>{T('tut.prev')}</button>
            )}
            {stepIdx < total - 1 ? (
              <button className="tutorial-btn-primary" onClick={next}>{T('tut.next')}</button>
            ) : (
              <button className="tutorial-btn-primary" onClick={finish}>{T('tut.done')}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
