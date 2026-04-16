import { useState, useEffect, useRef, useCallback } from 'react';
import { useApp } from '../contexts/AppContext';
import { esc } from '../utils/helpers';
import { exportCSV, exportPPT, copyCRMRecord } from '../utils/exports';
import ExecSummary from './tabs/ExecSummary';
import OrangeBridge from './tabs/OrangeBridge';
import SolutionCatalog from './tabs/SolutionCatalog';
import MeetingIntel from './tabs/MeetingIntel';
import KeyContacts from './tabs/KeyContacts';
import CrmExport from './tabs/CrmExport';
import FAQ from './tabs/FAQ';

const TAB_KEYS = ['exec-summary', 'bridge', 'catalog', 'meeting', 'contacts', 'crm', 'faq'];

export default function CompanyProfile({ company }) {
  const { currentLang, T, getSourceUrl, locale } = useApp();
  const [activeTab, setActiveTab] = useState('exec-summary');
  const [scoreAnimated, setScoreAnimated] = useState(0);
  const scoreRingRef = useRef(null);
  const animFrameRef = useRef(null);

  // Animate score ring and number on mount / company change
  useEffect(() => {
    setActiveTab('exec-summary');
    setScoreAnimated(0);
    const target = company.score;
    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setScoreAnimated(current);

      if (scoreRingRef.current) {
        const offset = Math.round(164 - (eased * target / 100) * 138);
        scoreRingRef.current.style.strokeDashoffset = offset;
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [company]);

  const switchTab = useCallback((name) => {
    setActiveTab(name);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleExportCSV = useCallback(() => {
    exportCSV(company, currentLang, T);
  }, [company, currentLang, T]);

  const handleCopyCRM = useCallback(() => {
    copyCRMRecord(company, locale, T);
  }, [company, locale, T]);

  const handleExportPPT = useCallback(() => {
    exportPPT(company, currentLang, T);
  }, [company, currentLang, T]);

  const sourceUrl = getSourceUrl(company, 'companyUrl');

  return (
    <div id="profile-area" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '20px 24px', overflowY: 'auto', position: 'absolute', inset: 0 }}>
      {/* Print Header */}
      <div className="print-header" id="print-header">
        <h1>{T('print.title')}</h1>
        <p>{T('print.battlecard')} {new Date().toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      {/* Company Header */}
      <div className="co-hdr">
        <div className="co-logo" style={{ background: company.color, color: company.textColor }}>{company.initials}</div>
        <div className="co-meta">
          <div className="co-name">
            {sourceUrl ? (
              <a href={esc(sourceUrl)} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '2px solid var(--ob)' }}>
                {esc(company.name)}
              </a>
            ) : esc(company.name)}
          </div>
          <div className="co-sub">{company.size} · {company.hq}</div>
          <div className="co-tags">
            {company.tags.map((tag, i) => (
              <span key={i} className={`tag ${company.tagClasses[i] || 'ts3'}`}>{tag}</span>
            ))}
            {company._enrichedDocName && (
              <span className="tag tag-enriched" title={company._enrichedDocName}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                {T('upload.badge')}
              </span>
            )}
          </div>
        </div>
        <div className="mat-blk">
          <div className="mat-lbl">
            {T('profile.maturity')}
            <span className="mat-info" tabIndex="0" aria-label={T('maturity.tooltip.title')}>
              i
              <div className="mat-tooltip" role="tooltip">
                <div className="mat-tt-title">{T('maturity.tooltip.title')}</div>
                <div className="mat-tt-intro">{T('maturity.tooltip.intro')}</div>
                <div className="mat-tt-section">{T('maturity.tooltip.calc')}</div>
                <ul className="mat-tt-list">
                  <li>{T('maturity.tooltip.r1')}</li>
                  <li>{T('maturity.tooltip.r2')}</li>
                  <li>{T('maturity.tooltip.r3')}</li>
                  <li>{T('maturity.tooltip.r4')}</li>
                  <li>{T('maturity.tooltip.r5')}</li>
                </ul>
                <div className="mat-tt-src">{T('maturity.tooltip.src')}</div>
              </div>
            </span>
          </div>
          <div className="mat-ring">
            <svg viewBox="0 0 66 66">
              <circle cx="33" cy="33" r="27" fill="none" stroke="var(--line)" strokeWidth="5.5" />
              <circle
                ref={scoreRingRef}
                cx="33" cy="33" r="27" fill="none" stroke="#FF7900" strokeWidth="5.5"
                strokeDasharray="138 169" strokeDashoffset="164"
                strokeLinecap="round" transform="rotate(-90 33 33)"
                style={{ transition: 'none' }}
              />
            </svg>
            <div className="mat-score">{scoreAnimated}</div>
          </div>
        </div>
      </div>

      {/* Tabbed Interface */}
      <div className="full-box">
        <div className="tabs" id="main-tabs">
          {TAB_KEYS.map((key, i) => {
            const labels = ['tab.exec', 'tab.bridge', 'tab.catalog', 'tab.meeting', 'tab.contacts', 'tab.crm', 'tab.faq'];
            return (
              <button
                key={key}
                className={`tab-btn${activeTab === key ? ' active' : ''}`}
                onClick={() => switchTab(key)}
              >
                {T(labels[i])}
              </button>
            );
          })}
        </div>

        {activeTab === 'exec-summary' && <ExecSummary company={company} />}
        {activeTab === 'bridge' && <OrangeBridge company={company} />}
        {activeTab === 'catalog' && <SolutionCatalog company={company} />}
        {activeTab === 'meeting' && <MeetingIntel company={company} />}
        {activeTab === 'contacts' && <KeyContacts company={company} />}
        {activeTab === 'crm' && <CrmExport company={company} />}
        {activeTab === 'faq' && <FAQ />}
      </div>

      {/* Action Buttons */}
      <div className="actions-row">
        <button className="action-btn ap" onClick={handlePrint}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
          {T('action.print')}
        </button>
        <button className="action-btn asec" onClick={handleExportCSV}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          {T('action.csv')}
        </button>
        <button className="action-btn asec" onClick={handleCopyCRM}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          {T('action.copy.crm')}
        </button>
        <button className="action-btn asec" onClick={handleExportPPT}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          {T('action.ppt')}
        </button>
      </div>
    </div>
  );
}
