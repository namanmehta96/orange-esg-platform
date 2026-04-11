import { useEffect, useState, useRef } from 'react';
import { useApp } from '../contexts/AppContext';

const STEP_KEYS = [
  'loading.step1',
  'loading.step2',
  'loading.step3',
  'loading.step4',
  'loading.step5',
];

export default function LoadingOverlay() {
  const { loadingOverlay, setLoadingOverlay, T } = useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!loadingOverlay) {
      setCurrentStep(0);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // If error, don't run timer
    if (loadingOverlay.error) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Reset and start stepping
    setCurrentStep(0);
    let step = 0;

    intervalRef.current = setInterval(() => {
      step += 1;
      if (step >= STEP_KEYS.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentStep(step);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [loadingOverlay?.companyName, loadingOverlay?.error]);

  if (!loadingOverlay) return null;

  const isError = !!loadingOverlay.error;

  const getStepClass = (idx) => {
    if (idx < currentStep) return 'loading-step done';
    if (idx === currentStep && !isError) return 'loading-step active';
    return 'loading-step pending';
  };

  const getIconClass = (idx) => {
    if (idx < currentStep) return 'step-icon done';
    if (idx === currentStep && !isError) return 'step-icon active';
    return 'step-icon pending';
  };

  const getIconContent = (idx) => {
    if (idx < currentStep) return '\u2713';
    if (idx === currentStep && !isError) return '';
    return String(idx + 1);
  };

  const handleClose = () => {
    setLoadingOverlay(null);
  };

  return (
    <div className="loading-overlay" style={{ display: 'flex' }}>
      <div className="loading-box">
        <div className="loading-ob-logo">
          <div className="loading-ob-sq">O</div>
          <div className="loading-ob-name">
            <span>Orange</span> Business
          </div>
        </div>

        {!isError && (
          <>
            <div className="loading-spinner" />
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '18px',
              }}
            >
              {T('loading.generating')} {loadingOverlay.companyName}
            </div>
            <div className="loading-steps">
              {STEP_KEYS.map((key, idx) => (
                <div key={key} className={getStepClass(idx)}>
                  <div className={getIconClass(idx)}>
                    {getIconContent(idx)}
                  </div>
                  <div className="step-text">{T(key)}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {isError && (
          <div className="loading-error" style={{ display: 'block' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>&#9888;</div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--red)',
                marginBottom: '4px',
                fontWeight: 600,
              }}
            >
              {typeof loadingOverlay.error === 'object' && loadingOverlay.error.msg
                ? loadingOverlay.error.msg
                : `${T('loading.error')} "${loadingOverlay.companyName}"`}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ink3)' }}>
              {typeof loadingOverlay.error === 'object'
                ? loadingOverlay.error.detail || loadingOverlay.error.msg
                : loadingOverlay.error}
            </div>
            <button className="retry-btn" onClick={handleClose}>
              {T('loading.close')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
