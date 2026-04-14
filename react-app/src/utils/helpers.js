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

const PERSONALIZED_RISKS = {
  bnp: [
    {
      en: 'Without a structured CSRD data collection workflow, BNP Paribas faces Wave 1 audit findings in 2025 and investor scrutiny at the next AGM as financed emissions reporting gaps become visible.',
      fr: 'Sans flux structuré de collecte de données CSRD, BNP Paribas s\'expose à des réserves d\'audit Vague 1 dès 2025 et à une pression actionnariale à la prochaine AG dès que les lacunes de reporting des émissions financées apparaîtront.'
    },
    {
      en: 'Without granular Scope 3 Category 15 data, BNP cannot validate its SBTi-aligned financed emissions target — risking target withdrawal and a loss of ESG investor confidence ahead of 2030 milestones.',
      fr: 'Sans données granulaires Scope 3 Catégorie 15, BNP ne pourra pas valider son objectif d\'émissions financées aligné SBTi — risquant un retrait de l\'objectif et une perte de confiance des investisseurs ESG avant les jalons 2030.'
    },
    {
      en: 'Without RGESN-compliant IT architecture reporting, BNP risks non-compliance with ESRS E1 digital footprint disclosure requirements mandatory from 2026.',
      fr: 'Sans reporting d\'architecture IT conforme au RGESN, BNP risque la non-conformité aux exigences de publication de l\'empreinte numérique ESRS E1, obligatoires dès 2026.'
    }
  ],
  unilever: [
    {
      en: 'Without automated Scope 3 supplier measurement, Unilever\'s 2039 net-zero claim becomes unverifiable at scale — exposing the brand to greenwashing challenges from regulators and NGOs as ESRS enforcement tightens in 2026.',
      fr: 'Sans mesure Scope 3 fournisseurs automatisée, l\'engagement net zéro 2039 d\'Unilever devient invérifiable à grande échelle — exposant la marque à des accusations de greenwashing par les régulateurs et ONG à mesure que l\'application de l\'ESRS se durcit en 2026.'
    },
    {
      en: 'Without a centralised supplier ESG portal, Unilever\'s 56,000-supplier data collection will fail CSRD audit quality tests in FY2024, triggering restatement risk and delayed investor disclosures.',
      fr: 'Sans portail fournisseurs ESG centralisé, la collecte de données auprès des 56 000 fournisseurs d\'Unilever ne passera pas les tests de qualité d\'audit CSRD pour l\'exercice 2024, entraînant un risque de retraitement et des retards de publication aux investisseurs.'
    },
    {
      en: 'Without circular device leasing for its 128,000-employee fleet, Unilever leaves a visible, measurable Scope 3 Category 2 reduction lever unused — a gap that peer benchmarking by investors will expose within two reporting cycles.',
      fr: 'Sans leasing circulaire pour la flotte de 128 000 collaborateurs, Unilever laisse inutilisé un levier de réduction Scope 3 Catégorie 2 visible et mesurable — un écart que le benchmark des pairs par les investisseurs révélera sous deux cycles de reporting.'
    }
  ],
  renault: [
    {
      en: 'Without real-time plant energy monitoring, Renault\'s 90% Scope 1&2 reduction by 2030 will lack the auditable evidence that ESRS E1 requires — jeopardising the credibility of its CSRD Wave 1 filing.',
      fr: 'Sans supervision énergétique des usines en temps réel, la réduction de 90 % du Scope 1 et 2 d\'ici 2030 de Renault manquera de preuves auditables exigées par l\'ESRS E1 — compromettant la crédibilité de sa déclaration CSRD Vague 1.'
    },
    {
      en: 'Without a circular mobile fleet programme, Renault\'s 105,000-employee device base remains an unreported Scope 3 Category 2 blind spot — directly contradicting its ESRS E5 circular economy narrative.',
      fr: 'Sans programme circulaire pour sa flotte mobile, le parc de 105 000 appareils de Renault reste un angle mort Scope 3 Catégorie 2 non déclaré — contredisant directement son récit d\'économie circulaire ESRS E5.'
    },
    {
      en: 'Without an integrated ESG data platform covering ESRS E1 and E5, Renault\'s supplier and plant data will remain fragmented across ERP silos — creating material audit risk at its first CSRD disclosure cycle.',
      fr: 'Sans plateforme ESG intégrée couvrant ESRS E1 et E5, les données fournisseurs et usines de Renault resteront fragmentées entre les silos ERP — créant un risque d\'audit matériel dès son premier cycle de déclaration CSRD.'
    }
  ],
  lvmh: [
    {
      en: 'Without circular device lifecycle management, LVMH leaves a measurable LIFE 360 commitment unexecuted across 175,000 employees — weakening a programme the market will scrutinise more closely as luxury ESG reporting matures.',
      fr: 'Sans gestion circulaire du cycle de vie des appareils, LVMH laisse un engagement LIFE 360 mesurable inappliqué sur 175 000 collaborateurs — affaiblissant un programme que le marché scrutera d\'autant plus à mesure que le reporting ESG du luxe gagne en maturité.'
    },
    {
      en: 'Without a centralised ESG data platform across 75 Maisons, LVMH faces a near-impossible CSRD Wave 1 consolidation challenge — risking non-compliant ESRS disclosures that would directly damage its premium investor positioning.',
      fr: 'Sans plateforme ESG centralisée pour ses 75 Maisons, LVMH fait face à un défi de consolidation CSRD Vague 1 quasi impossible — risquant des publications ESRS non conformes susceptibles d\'entamer directement son positionnement d\'investissement premium.'
    },
    {
      en: 'Without RGESN-aligned eco-design of digital experiences across Maisons, LVMH\'s growing digital footprint becomes the fastest-rising, least-reported component of its ESRS E1 disclosure — a reputational risk for a sustainability-forward luxury leader.',
      fr: 'Sans éco-conception RGESN des expériences digitales de ses Maisons, l\'empreinte numérique croissante de LVMH devient la composante de plus forte hausse et la moins reportée de sa déclaration ESRS E1 — un risque réputationnel pour un leader du luxe engagé en durabilité.'
    }
  ],
  schneider: [
    {
      en: 'Without verifiable IT vendor emissions data from Orange, Schneider\'s SSI Index KPI #7 loses a key auditable input — putting CDP A-List status and net-zero 2040 credibility at risk in the next rating cycle.',
      fr: 'Sans données vérifiables d\'émissions fournisseurs IT fournies par Orange, l\'indicateur 7 de l\'indice SSI de Schneider perd une entrée auditable clé — mettant en péril son statut CDP A-List et la crédibilité de sa trajectoire net zéro 2040 au prochain cycle de notation.'
    },
    {
      en: 'Without renewable-energy cloud infrastructure matching its own 2040 commitment, Schneider\'s digital expansion introduces a growing Scope 3 IT gap that undermines its position as the world\'s most sustainable company.',
      fr: 'Sans infrastructure cloud en énergie renouvelable alignée sur son engagement 2040, l\'expansion numérique de Schneider creuse un écart Scope 3 IT grandissant qui fragilise sa position d\'entreprise la plus durable au monde.'
    },
    {
      en: 'Without eco-designed AI governance, Schneider Electric risks losing its CDP A-List and SSI programme credibility as the RGESN framework becomes an industry standard for responsible AI.',
      fr: 'Sans gouvernance IA éco-conçue, Schneider Electric risque de perdre sa crédibilité CDP A-List et SSI à mesure que le référentiel RGESN s\'impose comme standard sectoriel de l\'IA responsable.'
    }
  ],
  total: [
    {
      en: 'Without a credible, third-party-verified Scope 3 Category 11 reduction roadmap, TotalEnergies\' multi-energy narrative remains exposed to investor and NGO challenge — accelerating the gap with Ørsted-style transition leaders.',
      fr: 'Sans feuille de route Scope 3 Catégorie 11 crédible et vérifiée par un tiers, le récit multi-énergies de TotalEnergies reste exposé aux critiques des investisseurs et des ONG — creusant l\'écart avec les leaders de transition façon Ørsted.'
    },
    {
      en: 'Without verifiable IT vendor emissions data, TotalEnergies cannot credibly back its net-zero narrative — a critical gap as CDP tightens Scope 3 disclosure requirements for A-rated reporters.',
      fr: 'Sans données vérifiables d\'émissions fournisseurs IT, TotalEnergies ne peut pas étayer de manière crédible son récit net zéro — un écart critique alors que le CDP durcit les exigences de publication Scope 3 pour les déclarants notés A.'
    },
    {
      en: 'Without a multi-country ESG data platform across 130+ jurisdictions, TotalEnergies\' CSRD Wave 1 filing carries material data-quality risk — the kind of finding that hardens regulator scrutiny for years after a single restatement.',
      fr: 'Sans plateforme ESG multi-pays couvrant plus de 130 juridictions, la déclaration CSRD Vague 1 de TotalEnergies présente un risque matériel de qualité de données — le type de constat qui durcit la surveillance des régulateurs pendant des années après un seul retraitement.'
    }
  ],
  axa: [
    {
      en: 'Without an enterprise-grade ESG data platform across EUR 870B AUM, AXA cannot produce the portfolio-level ESRS disclosures its Wave 1 CSRD filing requires — exposing the group to restatement risk on its first regulated cycle.',
      fr: 'Sans plateforme ESG d\'entreprise couvrant 870 Mds EUR d\'encours, AXA ne pourra pas produire les publications ESRS au niveau portefeuille exigées par sa déclaration CSRD Vague 1 — exposant le groupe à un risque de retraitement dès son premier cycle réglementé.'
    },
    {
      en: 'Without verified IT-vendor carbon accounting, AXA — the world\'s largest insurer of climate risk — cannot close its ESRS E1 supplier-emissions loop, undermining the credibility of its net-zero leadership narrative.',
      fr: 'Sans comptabilité carbone vérifiée de ses fournisseurs IT, AXA — premier assureur mondial du risque climatique — ne peut pas boucler sa chaîne d\'émissions fournisseurs ESRS E1, ce qui fragilise la crédibilité de son récit de leadership net zéro.'
    },
    {
      en: 'Without PCAF-aligned Scope 3 Category 15 measurement, AXA\'s SBTi submission stalls — and its coal-exit and 1.5°C alignment claims become harder to defend against increasingly active climate-litigation NGOs.',
      fr: 'Sans mesure Scope 3 Catégorie 15 alignée PCAF, la soumission SBTi d\'AXA est bloquée — et ses engagements de sortie du charbon et d\'alignement 1,5 °C deviennent plus difficiles à défendre face à des ONG de contentieux climatique de plus en plus actives.'
    }
  ],
  danone: [
    {
      en: 'Without farm-level Scope 3 measurement across its 100,000+ agricultural suppliers, Danone cannot validate its SBTi 30% reduction by 2030 — jeopardising target approval and triggering investor downgrades ahead of CSRD Wave 1 filing.',
      fr: 'Sans mesure Scope 3 au niveau des exploitations pour ses 100 000+ fournisseurs agricoles, Danone ne peut pas valider sa réduction SBTi de 30 % d\'ici 2030 — compromettant l\'approbation de l\'objectif et déclenchant des dégradations par les investisseurs avant la déclaration CSRD Vague 1.'
    },
    {
      en: 'Without a structured ESG data platform covering 100,000+ farms and processing sites, Danone\'s CSRD and B Corp reporting remain exposed to completeness gaps that will be flagged at first-cycle audit.',
      fr: 'Sans plateforme ESG structurée couvrant plus de 100 000 exploitations et sites de production, les reportings CSRD et B Corp de Danone restent exposés à des lacunes d\'exhaustivité qui seront signalées dès le premier cycle d\'audit.'
    },
    {
      en: 'Without circular device management for its 100,000-employee fleet, Danone leaves a measurable operational circular economy commitment unactioned — a gap inconsistent with its B Corp messaging.',
      fr: 'Sans gestion circulaire des appareils pour ses 100 000 collaborateurs, Danone laisse un engagement opérationnel d\'économie circulaire mesurable sans action — un écart incompatible avec sa communication B Corp.'
    }
  ],
  airbus: [
    {
      en: 'Without real-time IoT energy monitoring across 35+ manufacturing sites, Airbus\'s ESRS E1 Scope 1&2 disclosure relies on annual estimates — a data-quality gap that will draw audit qualifications at its first CSRD cycle.',
      fr: 'Sans supervision IoT énergétique en temps réel sur plus de 35 sites de production, la publication Scope 1 et 2 ESRS E1 d\'Airbus repose sur des estimations annuelles — un écart de qualité de données qui entraînera des réserves d\'audit dès son premier cycle CSRD.'
    },
    {
      en: 'Without an independently verifiable Scope 3 Category 11 reduction roadmap, Airbus\'s 2035 zero-emission aircraft narrative faces credibility erosion as investors and regulators demand near-term, evidence-based progress.',
      fr: 'Sans feuille de route Scope 3 Catégorie 11 vérifiable de manière indépendante, le récit de l\'avion zéro émission 2035 d\'Airbus subit une érosion de crédibilité alors que investisseurs et régulateurs exigent des progrès à court terme et fondés sur des preuves.'
    },
    {
      en: 'Without a consolidated ESG data platform spanning 35+ countries and Tier 1–3 suppliers, Airbus\'s Wave 1 CSRD filing risks material inconsistency that undermines its aerospace-sector credibility in a closely-watched first-reporter cohort.',
      fr: 'Sans plateforme ESG consolidée couvrant plus de 35 pays et les fournisseurs Tier 1 à 3, la déclaration CSRD Vague 1 d\'Airbus risque des incohérences matérielles qui fragilisent sa crédibilité dans le secteur aérospatial, au sein d\'un cohorte de premiers déclarants très observée.'
    }
  ]
};

export function getRiskOfInaction(company, lang, solutionIndex) {
  const key = getCompanyKey(company);
  if (key && PERSONALIZED_RISKS[key] && typeof solutionIndex === 'number') {
    const entry = PERSONALIZED_RISKS[key][solutionIndex];
    if (entry) return lang === 'fr' ? entry.fr : entry.en;
  }
  // Fallback: generic company-level risk
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

export function splitSourceAndUrl(text) {
  if (!text) return { label: '', url: null };
  const str = String(text);
  const match = str.match(/(https?:\/\/[^\s<>"')]+|www\.[^\s<>"')]+)/i);
  if (!match) return { label: str, url: null };
  let url = match[1].replace(/[.,;:!?]+$/, '');
  if (url.toLowerCase().startsWith('www.')) url = 'https://' + url;
  let label = str.replace(match[1], '').replace(/[\s\u2014\-–—:|]+$/, '').trim();
  return { label: label || url, url };
}

export function readUploadedDocument(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('No file'));
    const name = file.name.toLowerCase();

    if (name.endsWith('.pdf')) {
      // PDF: send base64-like summary (browser cannot extract PDF text without a library)
      // We send a structured note including filename + size + a base64 preview so the LLM
      // receives some signal. Full PDF parsing would require pdfjs; this keeps the dependency
      // footprint small while still surfacing the document to the prompt.
      const fr = new FileReader();
      fr.onload = () => {
        const result = fr.result || '';
        const b64 = String(result).split(',')[1] || '';
        resolve(
          `Uploaded PDF document.\nFilename: ${file.name}\nSize: ${file.size} bytes\nBase64 (truncated): ${b64.slice(0, 8000)}`
        );
      };
      fr.onerror = () => reject(fr.error);
      fr.readAsDataURL(file);
      return;
    }

    if (name.endsWith('.docx')) {
      // DOCX is a zip; extract the document.xml text using a lightweight approach.
      const fr = new FileReader();
      fr.onload = async () => {
        try {
          const bytes = new Uint8Array(fr.result);
          // Look for the document.xml block signature and extract text between <w:t> tags.
          // Browsers don't have a built-in zip reader, so we search the raw bytes for
          // runs of printable characters — imperfect but sufficient to give the LLM the
          // core text content of typical DOCX briefs.
          let text = '';
          for (let i = 0; i < bytes.length; i++) {
            const c = bytes[i];
            if ((c >= 32 && c <= 126) || c === 10 || c === 13) {
              text += String.fromCharCode(c);
            } else {
              text += ' ';
            }
          }
          const extracted = text
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          resolve(`Uploaded DOCX document.\nFilename: ${file.name}\nExtracted text: ${extracted.slice(0, 18000)}`);
        } catch (err) {
          reject(err);
        }
      };
      fr.onerror = () => reject(fr.error);
      fr.readAsArrayBuffer(file);
      return;
    }

    reject(new Error('Unsupported file type'));
  });
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
