import { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { showToast } from '../utils/helpers';

export default function SettingsModal() {
  const {
    apiKey, setApiKey,
    settingsOpen, setSettingsOpen,
    T,
  } = useApp();

  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    if (settingsOpen) {
      setInputVal(apiKey || '');
    }
  }, [settingsOpen, apiKey]);

  if (!settingsOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSettingsOpen(false);
    }
  };

  const handleSave = () => {
    const val = inputVal.trim();
    if (!val) {
      showToast(T('settings.enter'));
      return;
    }
    setApiKey(val);
    localStorage.setItem('ob_esg_apikey', val);
    showToast(T('settings.saved'));
    setTimeout(() => setSettingsOpen(false), 800);
  };

  const handleClear = () => {
    setApiKey('');
    setInputVal('');
    localStorage.removeItem('ob_esg_apikey');
    showToast(T('settings.cleared'));
  };

  return (
    <div
      className="modal-overlay"
      style={{ display: 'flex' }}
      onClick={handleBackdropClick}
    >
      <div className="modal-box">
        <div className="modal-head">
          <div className="modal-title">
            <div className="modal-title-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07" />
                <path d="M4.93 4.93A10 10 0 0 0 19.07 19.07" />
              </svg>
            </div>
            {T('settings.title')}
          </div>
          <button className="modal-close" onClick={() => setSettingsOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <label className="modal-label" htmlFor="api-key-input">
          {T('settings.label')}
        </label>
        <input
          type="password"
          id="api-key-input"
          className="modal-input"
          placeholder="sk-ant-api03-..."
          autoComplete="off"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div className="modal-hint">{T('settings.hint')}</div>

        <div className="modal-btns">
          <button className="modal-save" onClick={handleSave}>
            {T('settings.save')}
          </button>
          <button className="modal-clear" onClick={handleClear}>
            {T('settings.clear')}
          </button>
        </div>

        <div className={`modal-status ${apiKey ? 'set' : 'none'}`}>
          {apiKey ? (
            <>&#10003; {T('settings.set')}</>
          ) : (
            T('settings.none')
          )}
        </div>
      </div>
    </div>
  );
}
