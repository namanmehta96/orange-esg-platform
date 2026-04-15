import { useEffect, useState, useMemo, useRef } from 'react';
import { useApp } from '../contexts/AppContext';
import { SEED_DATA } from '../data/seedData';

const LS_KEY = 'ob_esg_tutorial_done';

function buildSteps(hasCompany, T) {
  if (hasCompany) {
    return [
      { title: T('tut.p1.title'), body: T('tut.p1.body'), target: '.tabs', tabIndex: 0 },
      { title: T('tut.p2.title'), body: T('tut.p2.body'), target: '.tabs', tabIndex: 0 },
      { title: T('tut.p3.title'), body: T('tut.p3.body'), target: '.tabs', tabIndex: 1 },
      { title: T('tut.p4.title'), body: T('tut.p4.body'), target: '.tabs', tabIndex: 3 },
      { title: T('tut.p5.title'), body: T('tut.p5.body'), target: '#chatbot-btn', openChatbot: true },
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
  const {
    tutorialOpen, setTutorialOpen,
    currentCompany, setCurrentCompany,
    setView, T,
    chatbotOpen, setChatbotOpen,
  } = useApp();

  const [stepIdx, setStepIdx] = useState(0);
  const [rect, setRect] = useState(null);
  const [vp, setVp] = useState(() => ({ w: typeof window !== 'undefined' ? window.innerWidth : 1280, h: typeof window !== 'undefined' ? window.innerHeight : 720 }));
  const chatbotOpenedByTutorial = useRef(false);

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

  // Side effects per step: switch tabs, open chatbot
  useEffect(() => {
    if (!tutorialOpen || !step) return;

    // Switch to the requested tab (profile state)
    if (typeof step.tabIndex === 'number') {
      const btns = document.querySelectorAll('.tabs .tab-btn');
      if (btns && btns[step.tabIndex]) btns[step.tabIndex].click();
    }

    // Open chatbot for the chatbot step; close it again when leaving
    if (step.openChatbot) {
      if (!chatbotOpen) {
        setChatbotOpen(true);
        chatbotOpenedByTutorial.current = true;
      }
    } else if (chatbotOpenedByTutorial.current) {
      setChatbotOpen(false);
      chatbotOpenedByTutorial.current = false;
    }
  }, [tutorialOpen, step, setChatbotOpen, chatbotOpen]);

  // Compute rect for current step target
  useEffect(() => {
    if (!tutorialOpen || !step || !step.target) {
      setRect(null);
      return;
    }
    const update = () => {
      const el = document.querySelector(step.target);
      if (!el) { setRect(null); return; }
      const r = el.getBoundingClientRect();
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };
    // Give the tab click/chatbot open a tick to render, then measure
    const t0 = setTimeout(update, 80);
    const onResize = () => { setVp({ w: window.innerWidth, h: window.innerHeight }); update(); };
    const int = setInterval(update, 350);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', update, true);
    return () => {
      clearTimeout(t0);
      clearInterval(int);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', update, true);
    };
  }, [tutorialOpen, step]);

  // Clean up chatbot state on tutorial close
  useEffect(() => {
    if (!tutorialOpen && chatbotOpenedByTutorial.current) {
      setChatbotOpen(false);
      chatbotOpenedByTutorial.current = false;
    }
  }, [tutorialOpen, setChatbotOpen]);

  if (!tutorialOpen) return null;

  const next = () => setStepIdx(i => Math.min(total - 1, i + 1));
  const prev = () => setStepIdx(i => Math.max(0, i - 1));

  const finish = () => {
    localStorage.setItem(LS_KEY, 'true');
    if (chatbotOpenedByTutorial.current) {
      setChatbotOpen(false);
      chatbotOpenedByTutorial.current = false;
    }
    setTutorialOpen(false);
  };

  const skip = () => finish();

  const loadBnpAndContinue = () => {
    const bnp = SEED_DATA.bnp;
    if (bnp) {
      setCurrentCompany(bnp);
      setView('profile');
      setTimeout(() => setStepIdx(0), 120);
    }
  };

  // Compute tip position
  const tipStyle = {};
  if (rect) {
    const tipWidth = Math.min(380, vp.w - 32);
    const preferredLeft = Math.max(16, Math.min(rect.left + rect.width / 2 - tipWidth / 2, vp.w - tipWidth - 16));
    tipStyle.left = preferredLeft + 'px';
    tipStyle.width = tipWidth + 'px';
    const belowSpace = vp.h - (rect.top + rect.height);
    if (belowSpace > 260 || belowSpace > rect.top) {
      tipStyle.top = Math.min(vp.h - 260, rect.top + rect.height + 14) + 'px';
    } else {
      tipStyle.bottom = Math.max(16, vp.h - rect.top + 14) + 'px';
    }
  } else {
    tipStyle.left = '50%';
    tipStyle.top = '50%';
    tipStyle.transform = 'translate(-50%, -50%)';
    tipStyle.width = 'min(420px, calc(100vw - 32px))';
  }

  // Build the 4-panel cutout mask around the rect so the highlighted element
  // is naturally uncovered (no z-index battles with backdrop-filter / stacking contexts).
  let maskPanels = null;
  let glowStyle = null;
  if (rect) {
    const pad = 8;
    const t = Math.max(0, rect.top - pad);
    const l = Math.max(0, rect.left - pad);
    const w = Math.min(vp.w - l, rect.width + pad * 2);
    const h = Math.min(vp.h - t, rect.height + pad * 2);
    maskPanels = (
      <>
        <div className="tutorial-mask" style={{ top: 0, left: 0, width: '100vw', height: t }} onClick={skip} />
        <div className="tutorial-mask" style={{ top: t, left: 0, width: l, height: h }} onClick={skip} />
        <div className="tutorial-mask" style={{ top: t, left: l + w, width: Math.max(0, vp.w - (l + w)), height: h }} onClick={skip} />
        <div className="tutorial-mask" style={{ top: t + h, left: 0, width: '100vw', height: Math.max(0, vp.h - (t + h)) }} onClick={skip} />
      </>
    );
    glowStyle = { top: t, left: l, width: w, height: h };
  }

  return (
    <div className="tutorial-root">
      {rect ? maskPanels : <div className="tutorial-mask tutorial-mask-full" onClick={skip} />}
      {glowStyle && <div className="tutorial-glow" style={glowStyle} />}

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
