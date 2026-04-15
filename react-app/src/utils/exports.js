import { getOrangeDiff } from './helpers';
import { showToast } from './helpers';

export function exportCRM(d, lang, T, getSourceUrl, getSources) {
  const record = {
    meta: { exportedAt: new Date().toISOString(), platform: 'Orange Business ESG Sales Intelligence', language: lang },
    company: { name: d.name, industry: d.industry, headquarters: d.hq, size: d.size, esgScore: d.score, cdpScore: d.cdpScore || null, cdpNote: d.cdpNote || null },
    esgCommitments: d.esg.map(e => ({ title: e.title, value: e.value, description: e.desc, progressPct: e.fill })),
    materialTopics: d.topics.map(t => ({ name: t.name, priorityPct: t.pct, severity: t.badge })),
    recommendedSolutions: d.solutions.map(s => ({ pillar: s.pillar, offer: s.offer, description: s.desc, rationale: s.why, fitScore: s.fit })),
    frugalAI: { title: d.frugal.title, description: d.frugal.desc, estimatedSaving: d.frugal.saving },
    stakeholders: d.stakeholders.map(s => ({ name: s.name, role: s.role, relevance: s.why, priority: s.priority })),
    conversationStarters: d.questions.map(q => ({ question: q.text, targetPersona: q.persona })),
    talkingPoints: d.solutions.map(s => ({ solution: s.offer, why: s.why, differentiator: getOrangeDiff(s.pillar, lang) })),
    crmFields: Object.fromEntries(d.crmRows.map(r => [r[0], { value: r[1], source: r[2] }])),
    tags: d.crmTags.map(t => t.label)
  };
  const json = JSON.stringify(record, null, 2);
  const a = document.createElement('a');
  a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(json);
  a.download = `orange-crm-${(d.name || 'profile').replace(/\s+/g, '-').toLowerCase()}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  showToast(lang === 'fr' ? 'Export CRM téléchargé' : 'CRM export downloaded');
}

export function exportCSV(d, lang, T) {
  const locale = lang === 'fr' ? 'fr-FR' : 'en-GB';
  const rows = [];
  rows.push(['=== COMPANY OVERVIEW ===', '', '']);
  rows.push(['Company Name', d.name, '']);
  rows.push(['Industry', d.industry, '']);
  rows.push(['Headquarters', d.hq, '']);
  rows.push(['Size', d.size, '']);
  rows.push(['ESG Maturity Score', d.score + ' / 100', '']);
  rows.push(['CDP Climate Score', d.cdpScore || 'N/A', d.cdpNote || '']);
  rows.push(['']);
  rows.push(['=== ESG COMMITMENTS ===', '', '', '']);
  rows.push(['Commitment', 'Target', 'Description', 'Progress %']);
  d.esg.forEach(e => rows.push([e.title, e.value, e.desc, e.fill + '%']));
  rows.push(['']);
  rows.push(['=== MATERIAL ESG TOPICS ===', '', '']);
  rows.push(['Topic', 'Priority %', 'Severity']);
  d.topics.forEach(t => rows.push([t.name, t.pct + '%', t.badge]));
  rows.push(['']);
  rows.push(['=== RECOMMENDED ORANGE SOLUTIONS ===', '', '', '', '']);
  rows.push(['Solution', 'Pillar', 'Description', 'Rationale', 'Fit Score']);
  d.solutions.forEach(s => rows.push([s.offer, s.pillar, s.desc, s.why, s.fit + '/5']));
  rows.push(['']);
  rows.push(['=== FRUGAL AI RECOMMENDATION ===', '', '']);
  rows.push(['Title', d.frugal.title, '']);
  rows.push(['Description', d.frugal.desc, '']);
  rows.push(['Estimated Saving', d.frugal.saving, '']);
  rows.push(['']);
  rows.push(['=== KEY STAKEHOLDERS ===', '', '', '']);
  rows.push(['Name', 'Role', 'Relevance', 'Priority']);
  d.stakeholders.forEach(s => rows.push([s.name, s.role, s.why, s.priority]));
  rows.push(['']);
  rows.push(['=== CONVERSATION STARTERS ===', '']);
  rows.push(['Question', 'Target Persona']);
  d.questions.forEach(q => rows.push([q.text.replace(/[""]/g, '"'), q.persona]));
  rows.push(['']);
  rows.push(['=== KEY TALKING POINTS ===', '', '']);
  d.solutions.forEach(s => rows.push([s.offer + ', Differentiator', getOrangeDiff(s.pillar, lang), '']));
  rows.push(['']);
  rows.push(['=== CRM RECORD ===', '', '']);
  rows.push(['Field', 'Value', 'Source']);
  d.crmRows.forEach(r => rows.push(r));
  rows.push(['Profile generated', new Date().toLocaleString(locale), 'System']);
  rows.push(['Platform', 'Orange Business ESG Sales Intelligence', '']);
  const csv = rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n');
  const bom = '\uFEFF';
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(bom + csv);
  a.download = `orange-esg-${(d.name || 'profile').replace(/\s+/g, '-').toLowerCase()}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  showToast(T('toast.csv'));
}

export function exportPPT(d, lang, T) {
  if (typeof window.PptxGenJS === 'undefined') {
    // Dynamic import fallback
    import('pptxgenjs').then(mod => {
      const PptxGenJS = mod.default;
      generatePPT(new PptxGenJS(), d, lang, T);
    });
    return;
  }
  generatePPT(new window.PptxGenJS(), d, lang, T);
}

function generatePPT(pptx, d, lang, T) {
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Orange Business ESG Intelligence';
  const OB = 'FF7900', BLACK = '000000', WHITE = 'FFFFFF', GRAY = '666666', LIGHT = 'F6F4F1', GREEN = '1A7A4A', BLUE = '0056B3';

  // Slide 1: Title
  let slide = pptx.addSlide();
  slide.background = { color: BLACK };
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.6, fill: { color: OB } });
  slide.addText('Orange Business', { x: 0.6, y: 0.1, fontSize: 18, bold: true, color: WHITE, fontFace: 'Arial' });
  slide.addText(T('nav.title'), { x: 0.6, y: 2.2, w: 8, fontSize: 32, bold: true, color: WHITE, fontFace: 'Arial' });
  slide.addText(d.name, { x: 0.6, y: 3.2, w: 8, fontSize: 24, color: OB, fontFace: 'Arial', bold: true });
  slide.addText(d.industry + ' · ' + d.hq, { x: 0.6, y: 3.9, fontSize: 14, color: GRAY, fontFace: 'Arial' });
  slide.addText(d.size, { x: 0.6, y: 4.3, fontSize: 12, color: GRAY, fontFace: 'Arial' });
  const dateLocale = lang === 'fr' ? 'fr-FR' : 'en-GB';
  slide.addText(new Date().toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' }), { x: 0.6, y: 5.5, fontSize: 11, color: GRAY, fontFace: 'Arial' });

  // Slide 2: ESG Overview
  slide = pptx.addSlide();
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: OB } });
  slide.addText((lang === 'fr' ? 'Aperçu ESG' : 'ESG Overview') + ', ' + d.name.split(' ')[0], { x: 0.5, y: 0.05, fontSize: 14, bold: true, color: WHITE, fontFace: 'Arial' });
  slide.addText(lang === 'fr' ? 'Score de Maturité ESG' : 'ESG Maturity Score', { x: 0.5, y: 0.8, fontSize: 12, bold: true, color: BLACK, fontFace: 'Arial' });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.15, w: 2, h: 0.5, fill: { color: OB }, rectRadius: 0.1 });
  slide.addText(d.score + ' / 100', { x: 0.5, y: 1.15, w: 2, h: 0.5, fontSize: 20, bold: true, color: WHITE, fontFace: 'Arial', align: 'center', valign: 'middle' });
  slide.addText('CDP: ' + (d.cdpScore || 'N/A'), { x: 3, y: 1.15, w: 1.5, h: 0.5, fontSize: 14, bold: true, color: GREEN, fontFace: 'Arial', align: 'center', valign: 'middle', fill: { color: 'EDF7F1' }, rectRadius: 0.1 });
  d.esg.forEach((e, i) => {
    const y = 2.0 + i * 0.85;
    slide.addText(e.title, { x: 0.5, y, fontSize: 12, bold: true, color: BLACK, fontFace: 'Arial' });
    slide.addText(e.value, { x: 3.5, y, fontSize: 12, bold: true, color: OB, fontFace: 'Arial' });
    slide.addText(e.desc, { x: 0.5, y: y + 0.3, w: 12, fontSize: 9, color: GRAY, fontFace: 'Arial' });
  });

  // Slide 3: Material Topics
  slide = pptx.addSlide();
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: OB } });
  slide.addText(T('exec.topics'), { x: 0.5, y: 0.05, fontSize: 14, bold: true, color: WHITE, fontFace: 'Arial' });
  slide.addChart(pptx.ChartType.bar, [{ name: lang === 'fr' ? 'Priorité %' : 'Priority %', labels: d.topics.map(t => t.name), values: d.topics.map(t => t.pct) }], { x: 0.5, y: 0.8, w: 12, h: 4.5, showValue: true, valueFontSize: 10, chartColors: [OB], barDir: 'bar', barGapWidthPct: 80, catAxisLabelFontSize: 10, valAxisLabelFontSize: 9, showTitle: false });

  // Slide 4: Solutions
  slide = pptx.addSlide();
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: OB } });
  slide.addText(lang === 'fr' ? 'Solutions Orange Recommandées' : 'Recommended Orange Solutions', { x: 0.5, y: 0.05, fontSize: 14, bold: true, color: WHITE, fontFace: 'Arial' });
  d.solutions.forEach((s, i) => {
    const y = 0.8 + i * 1.6;
    const pillColor = s.pillar.includes('Green') ? GREEN : s.pillar.includes('Society') ? BLUE : OB;
    slide.addShape(pptx.ShapeType.rect, { x: 0.5, y, w: 12, h: 1.4, fill: { color: LIGHT }, rectRadius: 0.1, line: { color: 'E2DDD7', width: 0.5 } });
    slide.addShape(pptx.ShapeType.rect, { x: 0.5, y, w: 0.12, h: 1.4, fill: { color: pillColor } });
    slide.addText(s.pillar.toUpperCase(), { x: 0.9, y: y + 0.08, fontSize: 8, bold: true, color: pillColor, fontFace: 'Arial' });
    slide.addText(s.offer, { x: 0.9, y: y + 0.35, fontSize: 13, bold: true, color: BLACK, fontFace: 'Arial' });
    slide.addText(s.desc, { x: 0.9, y: y + 0.7, w: 7, fontSize: 9, color: GRAY, fontFace: 'Arial' });
    slide.addText((lang === 'fr' ? 'Pertinence:' : 'Fit:') + ' ' + s.fit + '/5', { x: 10.5, y: y + 0.35, fontSize: 11, bold: true, color: OB, fontFace: 'Arial' });
  });

  // Slide 5: Stakeholders
  slide = pptx.addSlide();
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: OB } });
  slide.addText(T('contacts.stakeholders'), { x: 0.5, y: 0.05, fontSize: 14, bold: true, color: WHITE, fontFace: 'Arial' });
  const stakeRows = [[lang === 'fr' ? 'Nom' : 'Name', lang === 'fr' ? 'Rôle' : 'Role', lang === 'fr' ? 'Pertinence' : 'Relevance', lang === 'fr' ? 'Priorité' : 'Priority']];
  d.stakeholders.forEach(s => stakeRows.push([s.name, s.role, s.why, s.priority]));
  slide.addTable(stakeRows, { x: 0.5, y: 0.8, w: 12, fontSize: 10, fontFace: 'Arial', colW: [3, 4, 3.5, 1.5], border: { type: 'solid', color: 'E2DDD7', pt: 0.5 }, rowH: 0.5, autoPage: false, headerRow: true, color: BLACK, headerRowFill: { color: OB }, headerRowColor: WHITE });

  // Slide 6: Meeting Agenda
  slide = pptx.addSlide();
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: OB } });
  slide.addText(T('meeting.agenda') + ', ' + d.name.split(' ')[0], { x: 0.5, y: 0.05, fontSize: 14, bold: true, color: WHITE, fontFace: 'Arial' });
  const agendaItems = [
    { time: T('meeting.open.time'), title: T('meeting.open.title') },
    { time: T('meeting.disc.time'), title: T('meeting.disc.title') },
    { time: T('meeting.sol.time'), title: T('meeting.sol.title') },
    { time: T('meeting.next.time'), title: T('meeting.next.title') }
  ];
  agendaItems.forEach((item, i) => {
    const y = 0.9 + i * 0.8;
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.6, y: y + 0.1, w: 0.2, h: 0.2, fill: { color: OB } });
    if (i < agendaItems.length - 1) slide.addShape(pptx.ShapeType.rect, { x: 0.68, y: y + 0.3, w: 0.04, h: 0.5, fill: { color: 'E2DDD7' } });
    slide.addText(item.time, { x: 1.0, y, fontSize: 10, bold: true, color: OB, fontFace: 'Arial' });
    slide.addText(item.title, { x: 1.0, y: y + 0.25, fontSize: 12, bold: true, color: BLACK, fontFace: 'Arial' });
  });
  d.questions.forEach((q, i) => {
    slide.addText((i + 1) + '. ' + q.text.replace(/[""«»]/g, '"'), { x: 1.0, y: 4.2 + i * 0.45, w: 11, fontSize: 9, color: GRAY, fontFace: 'Arial' });
  });

  // Slide 7: Talking Points
  slide = pptx.addSlide();
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.5, fill: { color: OB } });
  slide.addText(lang === 'fr' ? 'Arguments Clés' : 'Key Talking Points', { x: 0.5, y: 0.05, fontSize: 14, bold: true, color: WHITE, fontFace: 'Arial' });
  d.solutions.forEach((s, i) => {
    const y = 0.8 + i * 1.5;
    slide.addText(s.offer, { x: 0.5, y, fontSize: 12, bold: true, color: OB, fontFace: 'Arial' });
    slide.addText(getOrangeDiff(s.pillar, lang), { x: 0.5, y: y + 0.35, w: 12, fontSize: 9, color: GRAY, fontFace: 'Arial', lineSpacing: 14 });
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.5, w: 12, h: 0.5, fill: { color: BLACK }, rectRadius: 0.08 });
  slide.addText('EcoVadis Platinum · SBTi Net-Zero 2040 · CSRD Wave 1 · 28,000+ Enterprise Customers', { x: 0.5, y: 5.5, w: 12, h: 0.5, fontSize: 10, color: OB, fontFace: 'Arial', align: 'center', valign: 'middle' });

  pptx.writeFile({ fileName: `orange-esg-${(d.name || 'profile').replace(/\s+/g, '-').toLowerCase()}.pptx` });
  showToast(lang === 'fr' ? 'PowerPoint téléchargé' : 'PowerPoint downloaded');
}

export function copyCRMRecord(d, locale, T) {
  const text = `ORANGE BUSINESS ESG CRM RECORD\n${'='.repeat(40)}\n${d.crmRows.map(r => `${r[0].padEnd(28)} ${r[1]}`).join('\n')}\nProfile generated: ${new Date().toLocaleString(locale)}`;
  copyToClipboard(text, null, null, T);
}

export function copyToClipboard(text, btn, resetLabel, T) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(T('toast.copied'));
    if (btn) {
      const orig = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;"><polyline points="20 6 9 17 4 12"/></svg> ' + T('misc.copied');
      setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = orig; }, 2000);
    }
  }).catch(() => showToast(T('toast.copyfail')));
}
