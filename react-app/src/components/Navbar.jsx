import { useApp } from '../contexts/AppContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const {
    darkMode, setDarkMode,
    currentCompany, setCurrentCompany,
    apiKey,
    view, setView,
    setSettingsOpen,
    setSidebarOpen,
    setTutorialOpen,
    T,
  } = useApp();

  const handleGoHome = () => {
    setView('home');
    setCurrentCompany(null);
  };

  return (
    <nav className="nav">
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(true)}
        aria-label="Menu"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <button
        className="nav-sq"
        onClick={handleGoHome}
        title="Go to Home"
      >
        O
      </button>

      <div className="nav-brand" onClick={handleGoHome} title="Go to Home">
        <span>Orange</span> Business
      </div>

      <div className="nav-div" />

      <div className="nav-title">{T('nav.title')}</div>

      <div className="nav-right">
        <button
          className={`nav-breadcrumb${view === 'profile' ? ' visible' : ''}`}
          onClick={handleGoHome}
        >
          {T('nav.home')}
        </button>

        <div className={`ai-status ${apiKey ? 'ready' : 'demo'}`}>
          <div className="ai-status-dot" />
          <span>{apiKey ? T('nav.aiready') : T('nav.demo')}</span>
        </div>

        <div
          className="nav-badge"
          style={{ fontWeight: 500, opacity: 0.65 }}
        >
          {T('nav.proto')}
        </div>

        <LanguageToggle />

        <button
          className="nav-icon-btn nav-help-btn"
          onClick={() => setTutorialOpen(true)}
          title={T('tut.help.title')}
          aria-label={T('tut.help.title')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>

        <button
          className="nav-icon-btn"
          onClick={() => setSettingsOpen(true)}
          title="API Settings"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93A10 10 0 0 0 19.07 19.07" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>

        <button
          className="nav-icon-btn"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark mode"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {darkMode ? (
              <>
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
