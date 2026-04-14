import { useState, useEffect, useRef, useCallback } from 'react';
import { useApp } from '../contexts/AppContext';
import { SEED_DATA } from '../data/seedData';
import { SEED_DATA_FR } from '../data/seedDataFr';
import { analyzeCompany as apiAnalyze } from '../utils/api';
import gsap from 'gsap';

const DEMO_KEYS = ['bnp', 'unilever', 'renault', 'lvmh', 'schneider', 'total', 'axa', 'danone', 'airbus'];

export default function HomePage() {
  const {
    apiKey, currentLang, darkMode,
    setCurrentCompany, setView, setLoadingOverlay, setSettingsOpen,
    uploadedDoc,
    addToHistory, T,
  } = useApp();

  const [searchVal, setSearchVal] = useState('');
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const headlineRef = useRef(null);
  const particleRAF = useRef(null);
  const logoFloatTween = useRef(null);
  const logoGlowHandler = useRef(null);
  const headlineShineHandler = useRef(null);
  const mousePos = useRef({ x: -9999, y: -9999 });

  // ═══════════════════════════════════════════════════════
  // PARTICLE SYSTEM
  // ═══════════════════════════════════════════════════════
  const startParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.display = 'block';

    const resize = () => {
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    resize();
    window._particleResize = resize;
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mousePos.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mousePos.current = { x: -9999, y: -9999 }; };
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    canvas._moveH = onMove;
    canvas._leaveH = onLeave;

    const N = 115;
    let W = canvas.width, H = canvas.height;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1.8 + Math.random() * 1.8
    }));

    const ATTRACT_R = 210, CONNECT_D = 145, CURSOR_GLOW_R = 90;
    const ctx = canvas.getContext('2d');

    function tick() {
      W = canvas.width; H = canvas.height;
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.clearRect(0, 0, W, H);

      const mx = mousePos.current.x, my = mousePos.current.y;
      const hasM = mx > -999;

      // Cursor ambient glow
      if (hasM) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, CURSOR_GLOW_R);
        grad.addColorStop(0, dark ? 'rgba(255,121,0,0.22)' : 'rgba(255,121,0,0.14)');
        grad.addColorStop(0.5, dark ? 'rgba(255,121,0,0.08)' : 'rgba(255,121,0,0.05)');
        grad.addColorStop(1, 'rgba(255,121,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mx, my, CURSOR_GLOW_R, 0, 6.28318);
        ctx.fill();
      }

      // Update positions
      for (const p of pts) {
        if (hasM) {
          const dx = mx - p.x, dy = my - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < ATTRACT_R * ATTRACT_R && d2 > 0) {
            const d = Math.sqrt(d2);
            const f = (ATTRACT_R - d) / ATTRACT_R * 0.055;
            p.vx += dx / d * f;
            p.vy += dy / d * f;
          }
        }
        p.vx *= 0.972; p.vy *= 0.972;
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 2.8) { p.vx = p.vx / spd * 2.8; p.vy = p.vy / spd * 2.8; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x += W; if (p.x > W) p.x -= W;
        if (p.y < 0) p.y += H; if (p.y > H) p.y -= H;
      }

      // Draw connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_D) {
            const base = (1 - d / CONNECT_D) * (dark ? 0.26 : 0.30);
            let boost = 0;
            if (hasM) {
              const da = Math.hypot(mx - a.x, my - a.y);
              const db = Math.hypot(mx - b.x, my - b.y);
              boost = Math.max(0, 1 - Math.min(da, db) / 200) * 0.52;
            }
            const alpha = Math.min(0.88, base + boost);
            ctx.strokeStyle = `rgba(255,121,0,${alpha.toFixed(2)})`;
            ctx.lineWidth = alpha > 0.4 ? 1.1 : 0.75;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of pts) {
        let dotA = dark ? 0.62 : 0.75;
        if (hasM) {
          const pd = Math.hypot(mx - p.x, my - p.y);
          dotA = Math.min(1.0, dotA + Math.max(0, 1 - pd / 130) * 0.35);
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.28318);
        ctx.fillStyle = `rgba(255,121,0,${dotA.toFixed(2)})`;
        ctx.fill();
      }

      particleRAF.current = requestAnimationFrame(tick);
    }

    particleRAF.current = requestAnimationFrame(tick);
  }, []);

  const stopParticles = useCallback(() => {
    if (particleRAF.current) { cancelAnimationFrame(particleRAF.current); particleRAF.current = null; }
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.display = 'none';
    if (window._particleResize) { window.removeEventListener('resize', window._particleResize); window._particleResize = null; }
    if (canvas._moveH) { document.removeEventListener('mousemove', canvas._moveH); canvas._moveH = null; }
    if (canvas._leaveH) { document.removeEventListener('mouseleave', canvas._leaveH); canvas._leaveH = null; }
  }, []);

  // ═══════════════════════════════════════════════════════
  // LOGO FLOAT + GLOW
  // ═══════════════════════════════════════════════════════
  const initLogoFloat = useCallback(() => {
    const logo = logoRef.current;
    if (!logo) return;
    if (logoFloatTween.current) logoFloatTween.current.kill();
    logoFloatTween.current = gsap.to(logo, { y: -9, duration: 2.2, ease: 'sine.inOut', repeat: -1, yoyo: true });
  }, []);

  const initLogoGlow = useCallback(() => {
    if (logoGlowHandler.current) document.removeEventListener('mousemove', logoGlowHandler.current);
    const logo = logoRef.current;
    if (!logo) return;
    logoGlowHandler.current = (e) => {
      const rect = logo.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 320;
      const proximity = Math.max(0, 1 - dist / maxDist);
      const spread = Math.round(8 + proximity * 52);
      const blur = Math.round(40 + proximity * 80);
      const alpha1 = (0.18 + proximity * 0.5).toFixed(2);
      const alpha2 = (0.12 + proximity * 0.3).toFixed(2);
      const alpha3 = (0.4 + proximity * 0.25).toFixed(2);
      logo.style.boxShadow = [
        `0 8px 32px rgba(255,121,0,${alpha3})`,
        `0 0 0 4px rgba(255,121,0,${alpha2})`,
        `0 0 ${blur}px ${spread}px rgba(255,121,0,${alpha1})`
      ].join(', ');
    };
    document.addEventListener('mousemove', logoGlowHandler.current, { passive: true });
  }, []);

  // ═══════════════════════════════════════════════════════
  // HEADLINE SHINE (mouse-tracking gradient)
  // ═══════════════════════════════════════════════════════
  const initHeadlineShine = useCallback(() => {
    if (headlineShineHandler.current) document.removeEventListener('mousemove', headlineShineHandler.current);
    const hl = headlineRef.current;
    if (!hl) return;
    headlineShineHandler.current = (e) => {
      const rect = hl.getBoundingClientRect();
      if (!rect.width) return;
      const x = (e.clientX - rect.left) / rect.width * 100;
      hl.style.setProperty('--shine-x', x.toFixed(1) + '%');
    };
    document.addEventListener('mousemove', headlineShineHandler.current, { passive: true });
  }, []);

  // ═══════════════════════════════════════════════════════
  // HERO ENTRANCE ANIMATION (GSAP timeline)
  // ═══════════════════════════════════════════════════════
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(el.querySelector('.home-logo'),
      { opacity: 0, scale: 0.72, y: -12 },
      { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.7)' })
      .fromTo(el.querySelector('.home-headline'),
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.58 }, '-=0.18')
      .fromTo(el.querySelector('.home-subheadline'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45 }, '-=0.28')
      .fromTo(el.querySelector('.home-search-wrap'),
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.42 }, '-=0.22')
      .fromTo(el.querySelector('.home-demo-label'),
        { opacity: 0 },
        { opacity: 1, duration: 0.38 }, '-=0.15');

    const cards = el.querySelectorAll('.home-demo-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.6 + i * 0.05 });
    });

    // Start all interactive effects
    startParticles();
    initLogoFloat();
    initLogoGlow();
    initHeadlineShine();

    return () => {
      stopParticles();
      if (logoFloatTween.current) logoFloatTween.current.kill();
      if (logoGlowHandler.current) { document.removeEventListener('mousemove', logoGlowHandler.current); logoGlowHandler.current = null; }
      if (headlineShineHandler.current) { document.removeEventListener('mousemove', headlineShineHandler.current); headlineShineHandler.current = null; }
    };
  }, [startParticles, stopParticles, initLogoFloat, initLogoGlow, initHeadlineShine]);

  // ═══════════════════════════════════════════════════════
  // HANDLERS
  // ═══════════════════════════════════════════════════════
  const handleSearch = async () => {
    const val = searchVal.trim();
    if (!val) return;
    if (!apiKey) { setSettingsOpen(true); return; }
    addToHistory(val);
    setView('profile');
    setLoadingOverlay({ companyName: val, step: 0, error: null });
    try {
      const result = await apiAnalyze(val, apiKey, currentLang, uploadedDoc);
      setCurrentCompany(result);
      addToHistory(result.name || val);
      setLoadingOverlay(null);
    } catch (err) {
      setLoadingOverlay({ companyName: val, step: -1, error: err.message || 'Unknown error' });
    }
  };

  const handleKeyDown = (e) => { if (e.key === 'Enter') handleSearch(); };

  const loadSeed = (key) => {
    const data = SEED_DATA[key];
    if (!data) return;
    setCurrentCompany(data);
    setView('profile');
  };

  const getIndustry = (key) => {
    if (currentLang === 'fr' && SEED_DATA_FR[key]) return SEED_DATA_FR[key].industry;
    return SEED_DATA[key].industry;
  };

  // ═══════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════
  return (
    <div className="home-page" ref={containerRef}>
      <canvas id="home-particles" ref={canvasRef} />
      <div className="home-mesh" />

      <div className="home-hero">
        <div className="home-logo" ref={logoRef}>O</div>
        <h1 className="home-headline" ref={headlineRef}>{T('home.headline')}</h1>
        <p className="home-subheadline">{T('home.sub')}</p>

        <div className="home-search-wrap">
          <input
            type="text"
            className="home-search-input"
            placeholder={T('home.search.placeholder')}
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="home-search-btn" onClick={handleSearch}>
            {T('home.search.btn')}
          </button>
        </div>

        <div className="home-demo-label">{T('home.demo.label')}</div>

        <div className="home-demo-grid" id="home-demo-grid">
          {DEMO_KEYS.map((key) => {
            const d = SEED_DATA[key];
            if (!d) return null;
            return (
              <div key={key} className="home-demo-card" onClick={() => loadSeed(key)}>
                <div className="home-card-top">
                  <div className="home-card-av" style={{ background: d.color, color: d.textColor }}>{d.initials}</div>
                  <div>
                    <div className="home-card-name">{d.name.split(' ').slice(0, 2).join(' ')}</div>
                    <div className="home-card-industry">{getIndustry(key)}</div>
                  </div>
                </div>
                <div className="home-card-score">
                  <div className="home-score-badge">{d.score}/100</div>
                  <div className="home-score-bar">
                    <div className="home-score-fill" style={{ width: d.score + '%' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="home-footer">{T('home.footer')}</div>
    </div>
  );
}
