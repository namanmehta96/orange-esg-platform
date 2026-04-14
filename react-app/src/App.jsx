import { useCallback, useRef, useState, useEffect } from 'react';
import { useApp } from './contexts/AppContext';
import { SEED_DATA } from './data/seedData';
import { analyzeCompany as apiAnalyzeCompany } from './utils/api';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import CompanyProfile from './components/CompanyProfile';
import Chatbot from './components/Chatbot';
import LoadingOverlay from './components/LoadingOverlay';
import SettingsModal from './components/SettingsModal';
import Tutorial from './components/Tutorial';

export default function App() {
  const {
    currentLang,
    currentCompany, setCurrentCompany,
    view, setView,
    apiKey,
    loadingOverlay, setLoadingOverlay,
    settingsOpen, setSettingsOpen,
    sidebarOpen, setSidebarOpen,
    uploadedDoc,
    addToHistory, getLocalizedData, T,
  } = useApp();

  const loadingIntervalRef = useRef(null);
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const isTransitioning = useRef(false);
  const prevViewRef = useRef(view);

  // Track which views should be rendered (kept in DOM during transitions)
  const [rendered, setRendered] = useState({ home: true, profile: false });

  // Handle view changes: ensure both views are rendered before animating
  useEffect(() => {
    if (view === prevViewRef.current) return;
    if (isTransitioning.current) return;

    if (view === 'profile') {
      setRendered({ home: true, profile: true });
    } else if (view === 'home') {
      setRendered({ home: true, profile: true });
    }
  }, [view]);

  // Animate after rendered state ensures both views are in DOM
  useEffect(() => {
    if (view === prevViewRef.current) return;
    if (isTransitioning.current) return;

    const homeEl = homeRef.current;
    const profileEl = profileRef.current;

    if (view === 'profile' && rendered.profile && profileEl) {
      isTransitioning.current = true;
      prevViewRef.current = view;

      const animateIn = () => {
        if (profileEl) {
          gsap.fromTo(profileEl,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', clearProps: 'opacity,y,transform',
              onComplete: () => {
                setRendered({ home: false, profile: true });
                isTransitioning.current = false;
              }
            }
          );
        } else {
          isTransitioning.current = false;
        }
      };

      if (homeEl) {
        gsap.to(homeEl, {
          opacity: 0, scale: 0.97, duration: 0.28, ease: 'power2.in',
          onComplete: () => {
            gsap.set(homeEl, { clearProps: 'opacity,scale,transform' });
            animateIn();
          }
        });
      } else {
        animateIn();
      }
    } else if (view === 'home' && rendered.home && homeEl) {
      isTransitioning.current = true;
      prevViewRef.current = view;

      const animateIn = () => {
        homeEl.style.display = 'flex';
        gsap.fromTo(homeEl,
          { opacity: 0, scale: 1.02 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out', clearProps: 'opacity,scale,transform',
            onComplete: () => {
              setRendered({ home: true, profile: false });
              isTransitioning.current = false;
            }
          }
        );
      };

      if (profileEl) {
        gsap.to(profileEl, {
          opacity: 0, scale: 0.97, duration: 0.28, ease: 'power2.in',
          onComplete: () => {
            gsap.set(profileEl, { clearProps: 'opacity,scale,transform' });
            animateIn();
          }
        });
      } else {
        animateIn();
      }
    }
  }, [view, rendered]);

  const loadSeedCompany = useCallback((key) => {
    const data = SEED_DATA[key];
    if (!data) return;
    setCurrentCompany(data);
    setView('profile');
    setSidebarOpen(false);
  }, [setCurrentCompany, setView, setSidebarOpen]);

  const analyzeCompany = useCallback(async (name) => {
    if (!name) return;
    if (!apiKey) { setSettingsOpen(true); return; }
    addToHistory(name);
    setView('profile');

    setLoadingOverlay({ companyName: name, step: 0, error: null });
    let stepIdx = 0;
    loadingIntervalRef.current = setInterval(() => {
      stepIdx++;
      if (stepIdx < 5) {
        setLoadingOverlay(prev => prev ? { ...prev, step: stepIdx } : null);
      }
    }, 2000);

    try {
      const parsed = await apiAnalyzeCompany(name, apiKey, currentLang, uploadedDoc);
      clearInterval(loadingIntervalRef.current);
      setLoadingOverlay(null);
      setCurrentCompany(parsed);
    } catch (e) {
      clearInterval(loadingIntervalRef.current);
      setLoadingOverlay({
        companyName: name,
        step: -1,
        error: { msg: `${T('loading.error')} "${name}"`, detail: e.message || String(e) }
      });
    }
  }, [apiKey, currentLang, uploadedDoc, addToHistory, setView, setLoadingOverlay, setCurrentCompany, setSettingsOpen, T]);

  const goHome = useCallback(() => {
    setView('home');
    setCurrentCompany(null);
  }, [setView, setCurrentCompany]);

  const localizedCompany = currentCompany ? getLocalizedData(currentCompany) : null;

  return (
    <div id="app-wrap">
      <div className="shimmer-line" />
      <Navbar goHome={goHome} />
      <StatusBar />
      <div className="app">
        <Sidebar />
        <div className="content" id="main-content">
          {rendered.home && (
            <div ref={homeRef} style={{ display: view === 'home' || isTransitioning.current ? 'flex' : 'none', flexDirection: 'column', width: '100%', height: '100%', position: 'relative' }}>
              <HomePage
                loadSeedCompany={loadSeedCompany}
                analyzeCompany={analyzeCompany}
              />
            </div>
          )}
          {rendered.profile && localizedCompany && (
            <div ref={profileRef} style={{ display: view === 'profile' || isTransitioning.current ? 'flex' : 'none', flexDirection: 'column', width: '100%', height: '100%', position: 'relative' }}>
              <CompanyProfile company={localizedCompany} />
            </div>
          )}
        </div>
      </div>
      <Chatbot />
      {loadingOverlay && (
        <LoadingOverlay
          companyName={loadingOverlay.companyName}
          step={loadingOverlay.step}
          error={loadingOverlay.error}
          onClose={() => {
            clearInterval(loadingIntervalRef.current);
            setLoadingOverlay(null);
          }}
        />
      )}
      {settingsOpen && <SettingsModal />}
      <Tutorial />
    </div>
  );
}
