import { useState, useRef } from 'react';
import { useApp } from '../contexts/AppContext';
import { SEED_DATA } from '../data/seedData';
import { SEED_DATA_FR } from '../data/seedDataFr';
import { analyzeCompany as apiAnalyze } from '../utils/api';
import { esc, showToast, readUploadedDocument } from '../utils/helpers';

const DEMO_KEYS = ['bnp', 'unilever', 'renault', 'lvmh', 'schneider', 'total', 'axa', 'danone', 'airbus'];

const SCORE_BADGES = {
  bnp: { label: 'A', cls: 'sp-h' },
  unilever: { label: 'A+', cls: 'sp-h' },
  renault: { label: 'B+', cls: 'sp-m' },
  lvmh: { label: 'B+', cls: 'sp-m' },
  schneider: { label: 'A+', cls: 'sp-h' },
  total: { label: 'B+', cls: 'sp-m' },
  axa: { label: 'B+', cls: 'sp-m' },
  danone: { label: 'A', cls: 'sp-h' },
  airbus: { label: 'B+', cls: 'sp-m' },
};

export default function Sidebar() {
  const {
    apiKey,
    currentCompany, setCurrentCompany,
    currentLang,
    view, setView,
    setLoadingOverlay,
    sidebarOpen, setSidebarOpen,
    searchHistory, addToHistory, removeFromHistory,
    uploadedDoc, setUploadedDoc,
    T, getLocalizedData,
  } = useApp();

  const [searchVal, setSearchVal] = useState('');
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const lower = file.name.toLowerCase();
    if (!lower.endsWith('.pdf') && !lower.endsWith('.docx')) {
      showToast(T('upload.invalid'));
      e.target.value = '';
      return;
    }
    try {
      const content = await readUploadedDocument(file);
      setUploadedDoc({ name: file.name, content });
    } catch (err) {
      showToast(T('upload.invalid'));
    }
    e.target.value = '';
  };

  const removeUpload = () => setUploadedDoc(null);

  const hasKey = !!apiKey;

  const loadSeed = (key) => {
    const data = SEED_DATA[key];
    if (!data) return;
    setCurrentCompany(data);
    setView('profile');
    setSidebarOpen(false);
  };

  const handleAnalyze = async () => {
    const val = searchVal.trim();
    if (!val) return;
    if (!apiKey) return;

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAnalyze();
  };

  const handleHistoryClick = (name) => {
    setSearchVal(name);
    if (inputRef.current) inputRef.current.value = name;
    // Trigger analyze with this name
    if (!apiKey) return;
    addToHistory(name);
    setView('profile');
    setLoadingOverlay({ companyName: name, step: 0, error: null });
    apiAnalyze(name, apiKey, currentLang, uploadedDoc)
      .then((result) => {
        setCurrentCompany(result);
        addToHistory(result.name || name);
        setLoadingOverlay(null);
      })
      .catch((err) => {
        setLoadingOverlay({ companyName: name, step: -1, error: err.message || 'Unknown error' });
      });
  };

  const handleRemoveHistory = (name, e) => {
    e.stopPropagation();
    removeFromHistory(name);
  };

  const getIndustry = (key) => {
    if (currentLang === 'fr' && SEED_DATA_FR[key]) {
      return SEED_DATA_FR[key].industry;
    }
    return SEED_DATA[key].industry;
  };

  const isActive = (key) => {
    if (!currentCompany) return false;
    const seed = SEED_DATA[key];
    return seed && (currentCompany === seed || currentCompany.name === seed.name);
  };

  return (
    <>
      <div
        className={`sidebar-overlay${sidebarOpen ? ' active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />
      <div className={`sidebar${sidebarOpen ? ' open' : ''}`} id="sidebar">
        <div className="sb-sec">
          <div className="sb-lbl">{T('sidebar.analyze')}</div>
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder={hasKey ? T('sidebar.placeholder') : T('sidebar.nokey')}
              disabled={!hasKey}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="analyze-row">
            <button
              className="analyze-btn"
              disabled={!hasKey}
              onClick={handleAnalyze}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              {T('sidebar.generate')}
            </button>
            <button
              type="button"
              className="upload-btn"
              disabled={!hasKey}
              onClick={handleUploadClick}
              title={T('upload.tooltip')}
              aria-label={T('upload.tooltip')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
          {uploadedDoc && (
            <div className="upload-chip" title={uploadedDoc.name}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="upload-chip-name">{uploadedDoc.name}</span>
              <button
                type="button"
                className="upload-chip-x"
                onClick={removeUpload}
                title={T('upload.remove')}
                aria-label={T('upload.remove')}
              >&times;</button>
            </div>
          )}
        </div>

        {searchHistory.length > 0 && (
          <div className="history-row" style={{ display: 'flex' }}>
            {searchHistory.map((name) => (
              <div
                key={name}
                className="hist-chip"
                onClick={() => handleHistoryClick(name)}
              >
                {name}
                <span
                  className="hist-chip-x"
                  onClick={(e) => handleRemoveHistory(name, e)}
                  title="Remove"
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="sb-div" />

        <div className="sb-sec" style={{ paddingBottom: '4px' }}>
          <div className="sb-lbl">{T('sidebar.demo')}</div>
        </div>

        <div className="acct-list" id="acct-list">
          {DEMO_KEYS.map((key) => {
            const d = SEED_DATA[key];
            if (!d) return null;
            const badge = SCORE_BADGES[key];
            return (
              <div
                key={key}
                className={`acct${isActive(key) ? ' active' : ''}`}
                onClick={() => loadSeed(key)}
              >
                <div
                  className="av"
                  style={{ background: d.color, color: d.textColor }}
                >
                  {d.initials}
                </div>
                <div className="ai">
                  <div className="an">{d.name.split(' ').slice(0, 2).join(' ')}</div>
                  <div className="as2">{getIndustry(key)}</div>
                </div>
                <div className={`sp ${badge.cls}`}>{badge.label}</div>
              </div>
            );
          })}
        </div>

        <div className="sb-footer">
          <div className="sb-footer-logo">
            <div className="sb-footer-sq">O</div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ink)' }}>
              Orange Business
            </span>
          </div>
          <p>
            {T('sidebar.powered')}
            <br />
            <a
              href="https://namanmehta96.github.io/orange-esg-platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              EDHEC GMBA SIC 2025/26
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
