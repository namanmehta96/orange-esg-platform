import { useCallback } from 'react';
import { useApp } from '../../contexts/AppContext';
import { exportCRM, exportCSV, copyCRMRecord } from '../../utils/exports';
import { DOT_COLORS } from '../../data/crmStyles';

// Parse CSS_TAGS string format into React style objects
const TAG_STYLES = {
  sustainability: { background: '#edf7f1', color: '#1a7a4a' },
  csrd: { background: '#e8f0fb', color: '#0056b3' },
  scope3: { background: '#fef3e2', color: '#944d00' },
  itgreen: { background: '#FFF3E8', color: '#E06800' }
};

export default function CrmExport({ company }) {
  const { currentLang, T, locale, getSourceUrl, getSources } = useApp();

  const now = new Date();
  const dateStr = now.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

  const handleExportCRM = useCallback(() => {
    exportCRM(company, currentLang, T, getSourceUrl, getSources);
  }, [company, currentLang, T, getSourceUrl, getSources]);

  const handleExportCSV = useCallback(() => {
    exportCSV(company, currentLang, T);
  }, [company, currentLang, T]);

  const handleCopyCRM = useCallback(() => {
    copyCRMRecord(company, locale, T);
  }, [company, locale, T]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="tab-panel active" id="tab-crm">
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg></div>
        <div className="sec-title">{T('crm.title')}</div>
        <div className="sec-sub">{T('crm.sub')}</div>
      </div>

      {/* CRM Tags */}
      <div className="crm-tags-row">
        {company.crmTags.map((t, i) => (
          <div key={i} className="crm-tag" style={TAG_STYLES[t.cls] || {}}>
            <div className="crm-tag-dot" style={{ background: DOT_COLORS[t.cls] || '#888' }} />
            {t.label}
          </div>
        ))}
      </div>

      {/* CRM Table */}
      <table className="crm-table">
        <thead>
          <tr>
            <th>{T('crm.field')}</th>
            <th>{T('crm.value')}</th>
            <th>{T('crm.source')}</th>
          </tr>
        </thead>
        <tbody>
          {company.crmRows.map((r, i) => (
            <tr key={i}>
              <td className="crm-field">{r[0]}</td>
              <td>{r[1]}</td>
              <td style={{ color: 'var(--ink3)' }}>{r[2]}</td>
            </tr>
          ))}
          <tr>
            <td className="crm-field">{T('crm.generated')}</td>
            <td>{dateStr}</td>
            <td style={{ color: 'var(--ink3)' }}>System</td>
          </tr>
        </tbody>
      </table>

      {/* CRM Buttons */}
      <div className="crm-btns">
        <button className="crm-btn crm-btn-primary" onClick={handleExportCRM}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          {T('crm.export.btn')}
        </button>
        <button className="crm-btn crm-btn-secondary" onClick={handleExportCSV}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          {T('crm.download')}
        </button>
        <button className="crm-btn crm-btn-secondary" onClick={handleCopyCRM}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          {T('crm.clipboard')}
        </button>
        <button className="crm-btn crm-btn-secondary" onClick={handlePrint}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
          {T('crm.print')}
        </button>
      </div>
    </div>
  );
}
