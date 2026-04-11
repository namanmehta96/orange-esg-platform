import { SEED_DATA } from '../data/seedData';
import { CATALOG } from '../data/catalog';
import { PREFAB_TALKING_POINTS } from '../data/prefabTalkingPoints';

export function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

export function getMatchScore(product, company) {
  let score = 1;
  for (const topic of company.topics) {
    const tl = topic.name.toLowerCase();
    const matched = product.matchKeys.some(k => tl.includes(k.toLowerCase()));
    if (matched) {
      if (topic.badge === 'Critical' || topic.badge === 'Critique') return 5;
      if (topic.badge === 'High' || topic.badge === 'Élevé') score = Math.max(score, 4);
      if (topic.badge === 'Medium' || topic.badge === 'Moyen') score = Math.max(score, 3);
    }
  }
  return score;
}

export function getOrangeDiff(pillar, lang) {
  if (lang === 'fr') {
    const d = {
      'IT for Green':'Orange Business détient le statut EcoVadis Platine (top 1 % mondial) et s\'est engagé sur un objectif net zéro aligné SBTi d\'ici 2040 — ce qui en fait l\'un des rares fournisseurs IT disposant de références développement durable vérifiées de manière indépendante, auxquelles les équipes achats ESG les plus exigeantes peuvent se fier.',
      'IT for Society':'Orange Business a réalisé sa propre déclaration CSRD Vague 1 et accompagne plus de 28 000 clients entreprises — nous apportons une expérience de praticien et des outils éprouvés face aux défis de données ESG. Notre plateforme a été conçue sur l\'infrastructure que nous avons d\'abord construite pour nous-mêmes.',
      'Frugal AI & Eco-Design':'Orange Business est l\'un des seuls fournisseurs technologiques mondiaux à avoir formellement appliqué le référentiel d\'éco-conception RGESN à ses propres applications internes, avec des résultats audités publiquement. Nous pratiquons ce que nous vendons — un partenaire crédible, pas un simple conseiller.',
      'Strategic Decarbonisation':'Orange Business dispose d\'une feuille de route de décarbonation validée et alignée SBTi, avec un reporting public de ses progrès — ce qui nous confère une expérience de praticien que les cabinets de conseil pur ne possèdent pas. Nos 28 000+ clients entreprises fournissent des données de benchmark en décarbonation inégalées dans tous les secteurs.'
    };
    return d[pillar] || d['IT for Green'];
  }
  const d = {
    'IT for Green':'Orange Business holds EcoVadis Platinum status (top 1% globally) and has committed to SBTi-aligned net-zero by 2040 — making us one of the few IT vendors with independently verified sustainability credentials that the most discerning ESG procurement teams can trust.',
    'IT for Society':'Orange Business completed its own CSRD Wave 1 disclosure and serves 28,000+ enterprise customers — we bring practitioner experience and proven tooling to ESG data challenges. Our platform was built on the infrastructure we built for ourselves first.',
    'Frugal AI & Eco-Design':'Orange Business is one of the only global technology vendors to have formally applied the RGESN eco-design framework to its own internal applications, with publicly audited results. We practise what we sell — a credible partner, not just an adviser.',
    'Strategic Decarbonisation':'Orange Business has a validated, SBTi-aligned corporate decarbonisation roadmap and reports publicly against it — giving us practitioner experience that pure advisory firms lack. Our 28,000+ enterprise customers provide unmatched decarbonisation benchmark data across industries.'
  };
  return d[pillar] || d['IT for Green'];
}

export function getRiskOfInaction(company, lang) {
  const critical = company.topics.find(t => t.badge === 'Critical' || t.badge === 'Critique');
  if (lang === 'fr') {
    if (critical) {
      return `Sans action sur <strong>${critical.name.toLowerCase()}</strong> dans les 12 prochains mois, ${company.name.split(' ')[0]} risque de prendre du retard sur les exigences de déclaration CSRD, de faire face à la pression des investisseurs lors de la prochaine AG, et de perdre la fenêtre pour établir des indicateurs de progrès crédibles et auditables avant que la pression réglementaire et des agences de notation ne s'intensifie en 2025–26.`;
    }
    return `Sans action dans les 12 prochains mois, l'écart entre les engagements publics de développement durable de ${company.name.split(' ')[0]} et son infrastructure de données interne va se creuser — créant un risque réglementaire, une exposition réputationnelle et un désavantage concurrentiel face à des pairs qui accélèrent leurs programmes ESG.`;
  }
  if (critical) {
    return `Without addressing <strong>${critical.name.toLowerCase()}</strong> in the next 12 months, ${company.name.split(' ')[0]} risks falling behind on CSRD disclosure requirements, facing investor scrutiny at the next AGM, and losing the window to establish credible, auditable progress metrics before regulatory and ratings agency pressure intensifies in 2025–26.`;
  }
  return `Without action in the next 12 months, the gap between ${company.name.split(' ')[0]}'s public sustainability commitments and its internal data infrastructure will widen — creating regulatory risk, reputational exposure, and competitive disadvantage as more sophisticated peers accelerate their ESG programmes.`;
}

export function genExecSummary(d, lang, T) {
  const maturityKey = d.score >= 85 ? 'maturity.leader' : d.score >= 75 ? 'maturity.advanced' : d.score >= 65 ? 'maturity.advancing' : 'maturity.transition';
  const maturity = T(maturityKey);
  const critTopic = d.topics.find(t => t.badge === 'Critical' || t.badge === 'Critique');
  const solution1 = d.solutions[0];
  const solution2 = d.solutions[1];
  if (lang === 'fr') {
    return [
      `<strong>${d.name}</strong> est ${maturity} avec un score de maturité ESG de ${d.score}/100. L'entreprise a pris des engagements majeurs en matière de durabilité — notamment des objectifs de ${d.esg[0].title.toLowerCase()} à ${d.esg[0].value} et des objectifs de ${d.esg[1].title.toLowerCase()} à ${d.esg[1].value}. En tant que déclarant CSRD Vague 1, ${d.name.split(' ')[0]} fait face à une pression significative à court terme pour transformer ces ambitions en données vérifiées et auditables d'ici l'exercice 2024.`,
      `L'enjeu ESG le plus matériel pour ${d.name.split(' ')[0]} est <strong>${critTopic ? critTopic.name.toLowerCase() : 'la qualité et le reporting des données ESG'}</strong>, qui représente ${critTopic ? critTopic.pct + '% de pondération prioritaire' : 'le domaine de plus haute priorité'} dans notre évaluation de double matérialité. Cela crée directement une demande pour les compétences d'Orange Business en <strong>${solution1.offer}</strong> et <strong>${solution2.offer}</strong>. L'infrastructure de données actuelle de l'entreprise ne peut probablement pas répondre aux exigences de granularité et d'auditabilité imposées par l'ESRS — créant un problème urgent et budgétisé à résoudre.`,
      `L'approche d'engagement recommandée par Orange Business est d'ouvrir le dialogue via le/la <strong>${d.stakeholders[0].role.split('·')[0].trim()}</strong> — le/la principal(e) décideur(se) ESG — avec un cadrage axé sur les lacunes d'infrastructure de données plutôt qu'un argumentaire produit. Mettez en avant les références propres d'Orange : statut EcoVadis Platine et expérience CSRD Vague 1 pour établir la crédibilité. Les solutions prioritaires sont <strong>${solution1.offer}</strong> et <strong>${solution2.offer}</strong>, avec un pilote sur une seule unité métier comme périmètre initial recommandé.`
    ];
  }
  return [
    `<strong>${d.name}</strong> is ${maturity} with an ESG maturity score of ${d.score}/100. The company has made headline commitments across its sustainability agenda — including ${d.esg[0].title.toLowerCase()} targets of ${d.esg[0].value} and ${d.esg[1].title.toLowerCase()} goals of ${d.esg[1].value}. As a CSRD Wave 1 reporter, ${d.name.split(' ')[0]} faces significant near-term pressure to translate these ambitions into verified, auditable data disclosures by FY2024.`,
    `The most material ESG gap for ${d.name.split(' ')[0]} is <strong>${critTopic ? critTopic.name.toLowerCase() : 'ESG data quality and reporting'}</strong>, which represents ${critTopic ? critTopic.pct + '% priority weighting' : 'the highest-priority area'} in our double-materiality assessment. This directly creates demand for Orange Business capabilities in <strong>${solution1.offer}</strong> and <strong>${solution2.offer}</strong>. The company's current data infrastructure is unlikely to meet the granularity and auditability requirements ESRS mandates — creating an urgent, budgeted problem to solve.`,
    `Orange Business's recommended engagement approach is to open through the <strong>${d.stakeholders[0].role.split('·')[0].trim()}</strong> — the primary ESG decision-maker — with a discovery framing around data infrastructure gaps rather than a product pitch. Lead with Orange's own EcoVadis Platinum credentials and CSRD Wave 1 experience to establish credibility. The priority solutions are <strong>${solution1.offer}</strong> and <strong>${solution2.offer}</strong>, with a proof-of-concept in a single business unit as the recommended initial scope.`
  ];
}

export function getCompanyKey(d) {
  if (!d) return null;
  for (const [key, val] of Object.entries(SEED_DATA)) {
    if (val === d || val.name === d.name) return key;
  }
  return null;
}

export function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; setTimeout(() => el.remove(), 300); }, 2400);
}
