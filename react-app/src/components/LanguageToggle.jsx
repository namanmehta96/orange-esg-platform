import { useApp } from '../contexts/AppContext';

export default function LanguageToggle() {
  const { currentLang, setCurrentLang, T } = useApp();

  return (
    <div
      className="lang-toggle"
      style={{
        display: 'flex',
        gap: 0,
        border: '1.5px solid var(--line)',
        borderRadius: '6px',
        overflow: 'hidden',
        height: '30px',
      }}
    >
      <button
        className={`lang-btn${currentLang === 'en' ? ' active' : ''}`}
        onClick={() => setCurrentLang('en')}
        style={{
          border: 'none',
          background: 'transparent',
          padding: '0 10px',
          fontSize: '11px',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'inherit',
          color: 'var(--ink2)',
          transition: 'all .15s',
          height: '100%',
        }}
      >
        {T('lang.en')}
      </button>
      <button
        className={`lang-btn${currentLang === 'fr' ? ' active' : ''}`}
        onClick={() => setCurrentLang('fr')}
        style={{
          border: 'none',
          borderLeft: '1.5px solid var(--line)',
          background: 'transparent',
          padding: '0 10px',
          fontSize: '11px',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'inherit',
          color: 'var(--ink2)',
          transition: 'all .15s',
          height: '100%',
        }}
      >
        {T('lang.fr')}
      </button>
    </div>
  );
}
