import { useEffect, useRef, useState, useCallback } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useApp } from '../../contexts/AppContext';
import { esc, genExecSummary } from '../../utils/helpers';
import { copyToClipboard } from '../../utils/exports';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function ExecSummary({ company }) {
  const { currentLang, T, getSourceUrl, getSources, locale } = useApp();
  const [copyLabel, setCopyLabel] = useState(null);
  const esgFillRefs = useRef([]);
  const topicFillRefs = useRef([]);

  const paras = genExecSummary(company, currentLang, T);
  const summaryText = paras.join('\n\n').replace(/<[^>]+>/g, '');
  const bd = company.benchmarkData;
  const sources = getSources(company);

  // Animate fill bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      esgFillRefs.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => {
            el.style.width = el.dataset.fill + '%';
          }, 50 + i * 50);
        }
      });
      topicFillRefs.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => {
            el.style.width = el.dataset.fill + '%';
          }, 100 + i * 60);
        }
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [company]);

  const handleCopySummary = useCallback((e) => {
    const btn = e.currentTarget;
    copyToClipboard(summaryText, btn, T('exec.copy.summary'), T);
  }, [summaryText, T]);

  // Chart data
  const leaderName = bd.sectorLeaderName || 'Sector Leader';
  const isDarkMode = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  const textColor = isDarkMode ? '#c0c0c0' : '#666';

  const chartData = {
    labels: [company.name.split(' ')[0], bd.industryLabel, leaderName, T('chart.ob')],
    datasets: [{
      data: [company.score, bd.industryAvg, bd.sectorLeaderScore || bd.sectorLeader, bd.obScore],
      backgroundColor: ['#FF7900', '#888888', '#1a7a4a', '#003087'],
      borderRadius: 6,
      borderSkipped: false
    }]
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => T('chart.scorelabel') + ` ${ctx.raw}/100` } }
    },
    scales: {
      x: {
        min: 0, max: 100,
        grid: { color: gridColor },
        ticks: { color: textColor, font: { size: 11 } },
        title: { display: true, text: T('chart.score'), color: textColor, font: { size: 11 } }
      },
      y: {
        grid: { display: false },
        ticks: { color: textColor, font: { size: 12, weight: '600' } }
      }
    }
  };

  // Chart interpretation
  const pos = company.score > bd.industryAvg ? T('chart.ahead') : company.score === bd.industryAvg ? T('chart.inline') : T('chart.behind');
  const gap = Math.abs(company.score - bd.obScore);
  let interpText;
  if (currentLang === 'fr') {
    interpText = `${company.name.split(' ')[0]} obtient ${company.score}/100 \u2014 ${pos} la moyenne sectorielle (${bd.industryLabel}) de ${bd.industryAvg}. ${gap <= 5 ? 'Cela les place au niveau du benchmark Orange Business, sugg\u00e9rant un partenariat d\u0027\u00e9gal \u00e0 \u00e9gal plut\u00f4t qu\u0027une d\u00e9marche corrective.' : `Avec un \u00e9cart de ${gap} points par rapport au benchmark d'Orange Business, il existe un argumentaire clair et cr\u00e9dible sur la mani\u00e8re dont l'expertise d'Orange peut acc\u00e9l\u00e9rer le programme ESG de l'entreprise.`}`;
  } else {
    interpText = `${company.name.split(' ')[0]} scores ${company.score}/100 \u2014 ${pos} the ${bd.industryLabel} of ${bd.industryAvg}. ${gap <= 5 ? 'This puts them close to Orange Business benchmark standards, suggesting a partnership of equals rather than a remediation sell.' : `With a ${gap}-point gap to Orange Business\u0027s own benchmark, there is a clear and credible narrative around how Orange\u0027s expertise can accelerate the company\u0027s ESG programme.`}`;
  }

  // CDP Badge
  const cdpUrl = getSourceUrl(company, 'cdpUrl');
  const sustainabilityUrl = getSourceUrl(company, 'sustainabilityUrl');

  return (
    <div className="tab-panel active" id="tab-exec-summary">
      {/* ESG Commitments */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
        <div className="sec-title">{T('exec.commitments')}</div>
        <div className="sec-sub">{T('exec.from.report')}</div>
      </div>
      <div className="esg-grid">
        {company.esg.map((e, i) => (
          <div key={i} className={`esg-card stagger-${i + 1}`} style={{ animation: `cardFadeIn .4s ease both ${i * 80}ms` }}>
            <div className="esg-ct">{e.title}</div>
            <div className="esg-cv">{e.value}</div>
            <div className="esg-cd">{e.desc}</div>
            <div className="esg-bar">
              <div
                className="esg-fill"
                ref={el => esgFillRefs.current[i] = el}
                data-fill={e.fill}
                style={{ background: e.fillColor, width: '0%', transition: 'width .8s ease-out' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CDP Badge */}
      {company.cdpScore && (
        <div className="cdp-badge-wrap">
          {cdpUrl ? (
            <a href={esc(cdpUrl)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="cdp-badge">
                <div className="cdp-badge-letter">{esc(company.cdpScore)}</div>
                <div className="cdp-badge-label">{T('exec.cdp')}</div>
                <div className="cdp-tooltip">{T('exec.cdp.source')}</div>
              </div>
            </a>
          ) : (
            <div className="cdp-badge">
              <div className="cdp-badge-letter">{esc(company.cdpScore)}</div>
              <div className="cdp-badge-label">{T('exec.cdp')}</div>
              <div className="cdp-tooltip">{T('exec.cdp.source')}</div>
            </div>
          )}
          <div className="cdp-badge-note">{esc(company.cdpNote || '')}</div>
        </div>
      )}

      <div className="divider" />

      {/* Material Topics */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
        <div className="sec-title">{T('exec.topics')}</div>
      </div>
      <div className="topics-list">
        {company.topics.map((t, i) => (
          <div key={i} className="topic-row">
            <div className="topic-name">{t.name}</div>
            <div className="topic-track">
              <div
                className="topic-fill"
                ref={el => topicFillRefs.current[i] = el}
                data-fill={t.pct}
                style={{ width: '0%', transition: 'width .8s ease-out' }}
              />
            </div>
            <div className="topic-pct">{t.pct}%</div>
            <div className="topic-badge" style={{ background: t.badgeBg, color: t.badgeColor }}>{t.badge}</div>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* Benchmark Chart */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
        <div className="sec-title">{T('exec.industry.benchmark')}</div>
      </div>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="chart-interp">{interpText}</div>

      {/* Sector Leader Story */}
      {bd.sectorLeaderStory && (
        <div className="sector-leader-card">
          <div className="sector-leader-title">&#127941; {T('exec.benchmark.title')} {esc(bd.sectorLeaderName || 'Sector Leader')}</div>
          <div className="sector-leader-story">{esc(bd.sectorLeaderStory)}</div>
          {bd.orangeRole && (
            <div className="sector-leader-orange"><strong>{T('exec.orange.role')}</strong> {esc(bd.orangeRole)}</div>
          )}
          <div className="sector-leader-disclaimer">{T('exec.benchmark.disclaimer')}</div>
        </div>
      )}

      {/* Leader Quotes */}
      {company.leaderQuotes && company.leaderQuotes.length > 0 && (
        <>
          <div className="divider" />
          <div className="sec-hdr">
            <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
            <div className="sec-title">{T('exec.leaders')}</div>
          </div>
          <div className="quotes-grid">
            {company.leaderQuotes.map((q, i) => (
              <div key={i} className="quote-card">
                <div className="quote-exec-name">{esc(q.name)}</div>
                <div className="quote-exec-title">{esc(q.title)}</div>
                <div className="quote-text">{esc(q.quote)}</div>
                <div className="quote-source">
                  {T('misc.source')}{' '}
                  {sustainabilityUrl ? (
                    <a href={esc(sustainabilityUrl)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ob)' }}>{esc(q.source)}</a>
                  ) : esc(q.source)}
                </div>
                <div className="quote-opportunity">
                  <div className="quote-opp-label">{T('exec.opportunity')}</div>
                  <div className="quote-opp-text">{esc(q.orangeOpportunity)}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="divider" />

      {/* Executive Summary */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
        <div className="sec-title">{T('exec.summary.title')}</div>
      </div>
      <div className="exec-summary">
        {paras.map((p, i) => (
          <div key={i} className="exec-para" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        <button className="copy-btn" onClick={handleCopySummary}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          {T('exec.copy.summary')}
        </button>
      </div>

      {/* Case Studies (for lower-scoring companies) */}
      {company.score < 75 && (
        <>
          <div className="divider" />
          <div className="sec-hdr">
            <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg></div>
            <div className="sec-title">{T('exec.case.title')} {esc(company.name.split(' ')[0])} {T('exec.case.title2')}</div>
          </div>
          <div className="two-col">
            <div className="case-card">
              <div className="case-label">&#9889; {T('exec.case.label')}</div>
              <div className="case-type">Mid-size {company.industry} company, ESG score ~{company.score - 5}</div>
              <div className="case-row"><div className="case-field">{T('exec.case.challenge')}</div><div className="case-val">Manual CSRD data collection across 40+ sites taking 6 FTE months per year; significant risk of ESRS non-compliance</div></div>
              <div className="case-row"><div className="case-field">{T('exec.case.solution')}</div><div className="case-val">Orange ESG Data Platform + Carbon Calculator for IT vendor emissions</div></div>
              <div className="case-metric">&#10003; 58% reduction in reporting overhead &middot; 100% ESRS E1 data completeness</div>
              <div className="case-disclaimer">{T('exec.case.disclaimer')}</div>
            </div>
            <div className="case-card">
              <div className="case-label">&#9889; {T('exec.case.label')}</div>
              <div className="case-type">{company.industry} operator, 80,000+ employees</div>
              <div className="case-row"><div className="case-field">{T('exec.case.challenge')}</div><div className="case-val">No real-time energy monitoring at manufacturing/operational sites; Scope 1&amp;2 targets at risk due to data gaps</div></div>
              <div className="case-row"><div className="case-field">{T('exec.case.solution')}</div><div className="case-val">Orange Smart Eco-Energy IoT deployment across 12 key facilities</div></div>
              <div className="case-metric">&#10003; 11% energy cost reduction &middot; Scope 1&amp;2 tracking now real-time and CSRD-ready</div>
              <div className="case-disclaimer">{T('exec.case.disclaimer')}</div>
            </div>
          </div>
        </>
      )}

      <div className="divider" />

      {/* News Section */}
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" /><path d="M4 18h2v4H4z" /></svg></div>
        <div className="sec-title">{T('exec.news')}</div>
        <span className="news-badge">{T('exec.news.badge')}</span>
      </div>
      <div className="news-grid">
        {[
          { src: 'FT', srcName: 'Financial Times', headline: `${company.name.split(' ')[0]} sets new Scope 3 data transparency standard ahead of CSRD filing`, date: 'Mar 2026', summary: 'The company disclosed full ESRS E1 data including third-party verified Scope 3 Category 1 figures for the first time.' },
          { src: 'ESG', srcName: 'ESG Today', headline: `Investors press ${company.name.split(' ')[0]} on ESG rating improvement plans at AGM`, date: 'Feb 2026', summary: 'Shareholder resolution on climate data quality passed with 67% majority, signalling growing investor scrutiny.' },
          { src: 'BI', srcName: 'Bloomberg', headline: `${company.industry} sector faces CSRD compliance gap as Wave 1 deadline approaches`, date: 'Jan 2026', summary: 'Analysis shows 40% of Wave 1 reporters in the sector lack the ESG data infrastructure required for ESRS compliance.' },
          { src: 'FE', srcName: 'Forbes', headline: `Orange Business launches ESG data platform for ${company.industry} sector clients`, date: 'Dec 2025', summary: 'New sector-specific CSRD reporting module includes pre-built ESRS taxonomy and automated supplier data collection.' }
        ].map((n, i) => (
          <div key={i} className="news-card">
            <div className="news-src"><div className="news-src-logo">{n.src}</div><div className="news-src-name">{n.srcName}</div></div>
            <div className="news-headline">{n.headline}</div>
            <div className="news-date">{n.date}</div>
            <div className="news-summary">{n.summary}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '11px', color: 'var(--ink3)', textAlign: 'center', marginTop: '10px', fontStyle: 'italic' }}>{T('exec.news.disclaimer')}</div>

      {/* Sources & References */}
      {sources.length > 0 && (
        <>
          <div className="divider" />
          <div className="sec-hdr">
            <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
            <div className="sec-title">{currentLang === 'fr' ? 'Sources et R\u00e9f\u00e9rences' : 'Sources & References'}</div>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r)', padding: '14px 18px' }}>
            {sources.map((s, i) => (
              <div key={i} style={{ padding: '5px 0', borderBottom: '1px solid var(--line)', fontSize: '12px' }}>
                <a href={esc(s.url)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ob)', fontWeight: 600 }}>{esc(s.label)}</a>
                <span style={{ color: 'var(--ink3)', marginLeft: '8px' }}>({s.date})</span>
              </div>
            ))}
            {sustainabilityUrl && (
              <div style={{ padding: '8px 0 0', fontSize: '11px', color: 'var(--ink3)' }}>
                {currentLang === 'fr' ? 'Rapport d\u00e9veloppement durable' : 'Sustainability Report'}:{' '}
                <a href={esc(sustainabilityUrl)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ob)' }}>{esc(sustainabilityUrl)}</a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
