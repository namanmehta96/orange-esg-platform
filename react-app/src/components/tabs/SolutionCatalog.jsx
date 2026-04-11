import { useState, useMemo, useCallback } from 'react';
import { useApp } from '../../contexts/AppContext';
import { esc, getMatchScore } from '../../utils/helpers';
import { CATALOG } from '../../data/catalog';

function MatchDots({ score, T }) {
  const colors = { 5: '#1a7a4a', 4: '#FF7900', 3: '#944d00', 2: '#aaa', 1: '#aaa' };
  const labelKeys = { 5: 'match.critical', 4: 'match.strong', 3: 'match.moderate', 2: 'match.low', 1: 'match.low' };
  const c = colors[score] || '#aaa';

  return (
    <div className="prod-match">
      <div className="prod-match-dots">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="prod-match-dot" style={{ background: i < score ? c : 'var(--line)' }} />
        ))}
      </div>
      <span className="prod-match-label" style={{ color: c }}>{T(labelKeys[score])}</span>
    </div>
  );
}

export default function SolutionCatalog({ company }) {
  const { T, getLocalizedCatalog } = useApp();
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const localCatalog = getLocalizedCatalog();

  const filteredCards = useMemo(() => {
    const q = searchText.toLowerCase();
    return localCatalog.map((p, i) => {
      const score = getMatchScore(CATALOG[i], company);
      const pillarMatch = activeFilter === 'all' || p.pillarKey === activeFilter;
      const nameMatch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || (p.whyMatters && p.whyMatters.toLowerCase().includes(q));
      return { ...p, score, visible: pillarMatch && nameMatch, index: i };
    });
  }, [localCatalog, company, searchText, activeFilter]);

  const handleFilterClick = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  const filters = [
    { key: 'all', label: `${T('catalog.all')} (${localCatalog.length})` },
    { key: 'green', label: T('catalog.green') },
    { key: 'society', label: T('catalog.society') },
    { key: 'frugal', label: T('catalog.frugal') },
    { key: 'decarb', label: T('catalog.decarb') }
  ];

  return (
    <div className="tab-panel active" id="tab-catalog">
      <div className="sec-hdr">
        <div className="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></div>
        <div className="sec-title">{T('catalog.title')}</div>
        <div className="sec-sub">{localCatalog.length} {T('catalog.solutions')} &middot; {T('catalog.scored')} {esc(company.name.split(' ')[0])}</div>
      </div>

      <div className="catalog-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
        <input
          type="text"
          placeholder={T('catalog.search')}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="catalog-filters">
        {filters.map(f => (
          <button
            key={f.key}
            className={`filter-pill${activeFilter === f.key ? ' active' : ''}`}
            onClick={() => handleFilterClick(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {filteredCards.map((p) => (
          <div
            key={p.id || p.index}
            className={`prod-card${!p.visible ? ' prod-hidden' : ''}`}
            style={{
              display: p.visible ? '' : 'none',
              animationDelay: `${(p.index % 6) * 60}ms`
            }}
          >
            <div className="prod-pillar-bar" style={{ background: p.pillarColor }} />
            <div className="prod-body">
              <div className="prod-pillar-label" style={{ color: p.pillarColor }}>{p.pillar}</div>
              <div className="prod-name">{p.name}</div>
              <div className="prod-desc">{p.desc}</div>
              <div className="prod-why-box">
                <div className="prod-why-label">{T('catalog.whymatters')}</div>
                {p.whyMatters}
              </div>
            </div>
            <div className="prod-footer">
              <MatchDots score={p.score} T={T} />
              {p.url ? (
                <a href={p.url} className="prod-link" target="_blank" rel="noopener noreferrer">{T('catalog.readmore')} &#8594;</a>
              ) : (
                <span style={{ color: 'var(--ink3)', fontSize: '11px' }}>{T('catalog.comingsoon')}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
