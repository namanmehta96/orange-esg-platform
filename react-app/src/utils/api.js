export function buildPrompt(val, lang, uploadedDoc) {
  const docBlock = uploadedDoc && uploadedDoc.content
    ? `\n\nIn addition to publicly available ESG data, the following internal document has been provided by the Orange Business sales team (filename: ${uploadedDoc.name}). Use this information to enrich the profile where relevant and flag any insights from it:\n\n<internal-document>\n${uploadedDoc.content.slice(0, 20000)}\n</internal-document>\n`
    : '';
  return `You are an Orange Business ESG Sales Intelligence system. Analyze the company "${val}" and return ONLY valid JSON with no markdown, no explanation, no backticks — just raw JSON.${docBlock}

Use this exact structure:
{
  "name": "Full legal company name",
  "industry": "Industry sector (2-3 words)",
  "hq": "City, Country",
  "size": "Xk employees · EUR/USD XB revenue · Stock exchange if applicable",
  "score": <integer 40-97>,
  "initials": "2 capital letters",
  "color": "#hexcode (brand color)",
  "textColor": "white or #1a1a1a",
  "tags": ["Industry tag","ESG focus tag","Regulatory tag","Size tag"],
  "tagClasses": ["ti","tsc","tcsrd","ts3"],
  "benchmarkData": {"industryAvg": <int>, "sectorLeader": <int>, "sectorLeaderScore": <int>, "sectorLeaderName": "Name", "obScore": 88, "industryLabel": "Sector Avg label"},
  "esg": [
    {"title":"Short commitment title","value":"Key metric or year","desc":"2 sentences.","fill":<20-95>,"fillColor":"#1a7a4a or #0056b3 or #FF7900"},
    {"title":"...","value":"...","desc":"...","fill":<int>,"fillColor":"..."},
    {"title":"...","value":"...","desc":"...","fill":<int>,"fillColor":"..."}
  ],
  "topics": [
    {"name":"Material topic","pct":<40-98>,"badge":"Critical or High or Medium","badgeBg":"#fdecea or #FFF3E8 or #fef3e2","badgeColor":"#c0392b or #E06800 or #944d00"},
    {"name":"...","pct":<int>,"badge":"...","badgeBg":"...","badgeColor":"..."},
    {"name":"...","pct":<int>,"badge":"...","badgeBg":"...","badgeColor":"..."},
    {"name":"...","pct":<int>,"badge":"...","badgeBg":"...","badgeColor":"..."},
    {"name":"...","pct":<int>,"badge":"...","badgeBg":"...","badgeColor":"..."}
  ],
  "solutions": [
    {"pillar":"IT for Green or IT for Society or Frugal AI & Eco-Design or Strategic Decarbonisation","cls":"bc-orange or bc-green or bc-blue or bc-dark","pcls":"bp-orange or bp-green or bp-blue or bp-dark","pillarColor":"#FF7900 or #0056b3 or #1a7a4a or #444","offer":"Specific Orange solution","desc":"2 sentences.","why":"1-2 sentences WHY for this company.","fit":<3-5>},
    {"pillar":"...","cls":"...","pcls":"...","pillarColor":"...","offer":"...","desc":"...","why":"...","fit":<int>},
    {"pillar":"...","cls":"...","pcls":"...","pillarColor":"...","offer":"...","desc":"...","why":"...","fit":<int>}
  ],
  "frugal": {"title":"Specific frugal AI use case","desc":"2-3 sentences.","saving":"Quantified benefit estimate"},
  "stakeholders": [
    {"init":"2L","bg":"#edf7f1","tc":"#1a7a4a","name":"Verified CSO or Head of Sustainability — use real public name where possible, else describe role and append (unverified)","role":"Full title · Company","why":"Why relevant","priority":"Priority 1","emailFocus":"sustainability","ph":true},
    {"init":"2L","bg":"#fff3e8","tc":"#e06800","name":"Verified CEO or Board-level executive with ESG mandate — append (unverified) if not confirmed","role":"...","why":"...","priority":"Priority 1","emailFocus":"executive","ph":true},
    {"init":"2L","bg":"#e8f0fb","tc":"#0056b3","name":"Verified CTO / CIO / Chief Technology leader — append (unverified) if not confirmed","role":"...","why":"...","priority":"Priority 2","emailFocus":"technology","ph":true}
  ],
  "questions": [
    {"text":"Specific question tied to this company's ESG commitment","persona":"For: Role"},
    {"text":"...","persona":"For: Role"},
    {"text":"...","persona":"For: Role"}
  ],
  "crmTags": [
    {"label":"Tag label","cls":"sustainability or csrd or scope3 or itgreen"},
    {"label":"...","cls":"..."},
    {"label":"...","cls":"..."},
    {"label":"...","cls":"..."}
  ],
  "crmRows": [
    ["Account","${val}","Public record"],
    ["Industry","<industry>","Public record"],
    ["Opportunity type","Sustainability Solution","Auto-tagged"],
    ["ESG maturity score","<score> / 100","ESG analysis"],
    ["Primary ESG commitment","<commitment>","Sustainability report"],
    ["Primary solution fit","<solution 1> · <solution 2>","Orange mapping"],
    ["Priority CSR contact","<role>","Public filings"],
    ["CSRD / ESG regulation","<status>","Annual report"],
    ["Next action","<specific next step>","Recommended"]
  ],
  "leaderQuotes": [
    {"name":"Executive name","title":"Title, Company","quote":"Verified public quote from this executive","source":"Source document or speech with date","orangeOpportunity":"1 sentence on which Orange solution this signals a need for"},
    {"name":"...","title":"...","quote":"...","source":"...","orangeOpportunity":"..."}
  ]
}

Use ONLY Orange Business's actual pillars:
- IT for Green: IoT building energy (Smart Eco-energy), circular device leasing, Scope 3 carbon estimators, Carbon Calculator, Sustainable Cloud
- IT for Society: ESG data management platforms, CSRD compliance tools, digital inclusion
- Frugal AI & Eco-Design: RGESN framework, right-sized AI models, GenAI governance, eco-design certification
- Strategic Decarbonisation: Corporate Decarbonisation Roadmap, Scope 3 Estimator, CSRD Acceleration, EcoVadis Programme
- Orange credentials: EcoVadis Platinum, SBTi-aligned net-zero 2040, RGESN certified, 28,000+ enterprise customers

For the "stakeholders" array, return EXACTLY 3 entries in this order: (1) sustainability owner — CSO / Head of Sustainability / Environmental Director (emailFocus: "sustainability"); (2) executive sponsor — CEO, Chairman or a Board-level executive with ESG accountability (emailFocus: "executive"); (3) technology leader — CTO, CIO or Chief Technology/Digital Officer (emailFocus: "technology"). Use real, publicly verifiable names wherever possible. If you cannot verify a specific incumbent with high confidence, use a role-based description (e.g. "Chief Sustainability Officer") and append "(unverified)" at the end of the role field. Never fabricate specific names.

Use your knowledge of ${val}'s actual published ESG strategy. Where possible, include real source URLs for ESG claims and ratings.

The "leaderQuotes" array is REQUIRED and must contain 2-3 entries with real, verifiable executive quotes from published sources (annual reports, press releases, earnings calls, conference speeches, LinkedIn posts). Each entry must include the executive's name, title and company, the verbatim quote, the source document with date, and a one-sentence orangeOpportunity mapping the quote to a specific Orange Business solution.

For the "source" field, ALWAYS include the full public URL of the cited document or page when one exists, using the exact format: "Document Name, Year — https://full.url/to/source". Example: "BNP Paribas Universal Registration Document 2024 — https://invest.bnpparibas/en/search/reports/documents/csr". Only omit the URL when the source is genuinely a non-indexable event (private earnings call, closed-door speech) and leave the source as plain text in that case. Never invent a URL — only cite URLs you have actually seen.

If you cannot find verified public quotes for this company, return an empty array [] rather than fabricating quotes.${lang === 'fr' ? ' IMPORTANT: All text values in the JSON must be written in natural, professional business French suitable for a French executive audience. Keep proper nouns in their original form.' : ''} Return ONLY the raw JSON object.`;
}

export async function analyzeCompany(val, apiKey, lang, uploadedDoc) {
  const prompt = buildPrompt(val, lang, uploadedDoc);
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 4000, messages: [{ role: 'user', content: prompt }] })
  });
  if (!res.ok) throw new Error('API error ' + res.status + ' — check your API key has credits.');
  const data = await res.json();
  let raw = data.content[0].text.trim();
  raw = raw.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '').trim();
  const parsed = JSON.parse(raw);
  if (!parsed.benchmarkData) parsed.benchmarkData = { industryAvg: 60, sectorLeader: 85, sectorLeaderScore: 85, obScore: 88, industryLabel: 'Sector Avg' };
  if (uploadedDoc && uploadedDoc.name) parsed._enrichedDocName = uploadedDoc.name;
  return parsed;
}

const FULL_CATALOG_SUMMARY = `Orange Business 14-solution catalog:
IT for Green: (1) Orange Carbon Calculator — verified IT vendor emissions for CSRD ESRS E1; (2) Smart Eco-Energy for Commercial Buildings — IoT energy management to cut Scope 1/2; (3) Circular Economy & Device Lifecycle — circular mobile leasing reducing Scope 3 Cat.2; (4) Sustainable Cloud Infrastructure — PUE-optimised carbon-neutral hosting.
IT for Society: (5) ESG Data Collection & CSRD Reporting Platform — ESRS-aligned data workflows; (6) Ethical AI & Digital Inclusion Framework — AI Act compliance & governance.
Frugal AI & Eco-Design: (7) Frugal AI — right-sized models cutting compute cost 40–70%; (8) Eco-Design (RGESN Framework) — French eco-design standard across digital lifecycle; (9) Sustainability-Driven GenAI Governance — carbon-aware GenAI deployment; (10) Orange Eco-Design Certification — audit & certify digital products.
Strategic Decarbonisation: (11) Corporate Decarbonisation Roadmap — end-to-end SBTi/net-zero planning; (12) Scope 3 Carbon Estimator & Supplier Engagement — PCAF/GHG Protocol aligned Scope 3 measurement; (13) CSRD & Regulatory Compliance Acceleration — double materiality, ESRS mapping, audit prep; (14) EcoVadis & ESG Rating Improvement Programme — ratings uplift methodology.`;

export function buildChatSystemPrompt(currentCompany, lang) {
  const langName = lang === 'fr' ? 'French' : 'English';
  const co = currentCompany;

  if (!co) {
    return `You are an expert Orange Business ESG sales coach embedded in the ESG Sales Intelligence Platform. No customer is currently loaded.

${FULL_CATALOG_SUMMARY}
Orange credentials: EcoVadis Platinum (top 1% globally), SBTi-aligned net-zero by 2040, RGESN eco-design framework, CDP A-List, CSRD Wave 1 reporter (FY2024), 28,000+ enterprise customers.

Your role: answer general questions about Orange Business ESG solutions, sustainability frameworks, and sales coaching best practice. When asked for customer-specific advice, remind the user to load a company profile first. Be concise (3–4 sentences max per response) and specific. Respond in ${langName}.`;
  }

  const commitments = (co.esg || []).map(e => `${e.title} ${e.value}`).join(' · ');
  const topics = (co.topics || []).map(t => `${t.name} (${t.badge}, ${t.pct}%)`).join('; ');
  const solutions = (co.solutions || []).map((s, i) => `(${i + 1}) ${s.offer} — ${s.why}`).join('\n');
  const quotes = Array.isArray(co.leaderQuotes) && co.leaderQuotes.length
    ? co.leaderQuotes.map(q => `"${q.quote}" — ${q.name}, ${q.title} → Opportunity: ${q.orangeOpportunity}`).join('\n')
    : 'No verified quotes available.';
  const stakeholders = (co.stakeholders || []).map(s => `${s.name || s.role} (${s.role}) — ${s.why}`).join('; ');

  return `You are an expert Orange Business ESG sales coach embedded in the ESG Sales Intelligence Platform. You have full context on the current customer and the complete Orange Business solution catalog.

Current customer: ${co.name} (${co.industry})
ESG Maturity Score: ${co.score}/100 | CDP Score: ${co.cdpScore || 'n/a'}
HQ: ${co.hq} | Size: ${co.size}
Key commitments: ${commitments}
Material ESG topics: ${topics}
Top matched Orange solutions:
${solutions}
Senior leader quotes:
${quotes}
Key stakeholders: ${stakeholders}

${FULL_CATALOG_SUMMARY}
Orange credentials: EcoVadis Platinum (top 1% globally), SBTi-aligned net-zero by 2040, RGESN eco-design framework, CDP A-List, CSRD Wave 1 reporter (FY2024), 28,000+ enterprise customers.

Your role: Help the Orange Business salesperson prepare for their meeting. Answer questions about the customer's ESG strategy, suggest opening lines, handle objections, explain which solution fits best and why, reference specific leader quotes, and provide meeting coaching. Be concise (3–4 sentences max per response), specific, and always reference actual customer context — never give generic answers. Respond in ${langName}.`;
}

export async function sendChatToAPI(apiKey, systemPrompt, messages) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 600, system: systemPrompt, messages })
  });
  if (!res.ok) throw new Error('API error ' + res.status);
  const data = await res.json();
  return data.content[0].text;
}

export async function analyseNotes(notes, companyName, apiKey) {
  const prompt = `Analyse these meeting notes from a meeting with ${companyName || 'a company'}. Return a structured analysis as JSON with no markdown:
{"commitments":["ESG commitment mentioned..."],"painPoints":["Pain point raised..."],"followUps":["Follow-up action agreed..."],"solutions":["Solution recommendation based on discussion..."]}

Meeting notes:
${notes}

Return ONLY raw JSON.`;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
    body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1500, messages: [{ role: 'user', content: prompt }] })
  });
  if (!res.ok) throw new Error('API error ' + res.status);
  const data = await res.json();
  let raw = data.content[0].text.trim().replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '').trim();
  return JSON.parse(raw);
}

export async function generateOutreachEmail(stakeholder, company, apiKey, lang, selectedSolution) {
  const sol = selectedSolution || company.solutions?.[0] || { name: 'ESG Data Platform', desc: '' };
  const solName = sol.name || sol.offer || 'Orange Business solution';
  const solDesc = sol.desc || sol.description || '';
  const langName = lang === 'fr' ? 'French' : 'English';

  if (apiKey) {
    const commitments = (company.esg || []).map(e => `${e.title} ${e.value}`).join(' · ');
    const topQuote = Array.isArray(company.leaderQuotes) && company.leaderQuotes[0]
      ? `"${company.leaderQuotes[0].quote}" — ${company.leaderQuotes[0].name}, ${company.leaderQuotes[0].title}`
      : 'No public quote available — reference the published ESG commitments instead.';

    const systemPrompt = `You are an expert Orange Business sales writer. Generate a personalised cold outreach email.

Recipient: ${stakeholder.name}, ${stakeholder.role} at ${company.name}
Their focus area: ${stakeholder.why}
Selected Orange solution to feature: ${solName} — ${solDesc}
Company ESG context: ${commitments}
Relevant company leader quote: ${topQuote}
Orange credentials: EcoVadis Platinum (top 1% globally), SBTi-aligned net-zero by 2040, RGESN eco-design certified.

Write a cold email that:
1. Opens with ONE specific reference to ${company.name}'s public ESG commitment or a leader statement — make it show you've done your research
2. Identifies the specific gap or pressure point most relevant to ${stakeholder.role} and ${stakeholder.why}
3. Positions ${solName} as the precise answer to that gap — be specific about what it does
4. References Orange Business's own ESG credentials as proof of credibility — we practice what we sell
5. Closes with a clear low-friction CTA: a 15-minute call to share how we helped a similar company

Rules: Under 200 words. No em dashes. No generic phrases like "I hope this finds you well". Professional and direct. Respond in ${langName}.

Return ONLY a JSON object with this exact shape, nothing else: {"subject":"email subject line","body":"full email body with line breaks"}`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 700, messages: [{ role: 'user', content: systemPrompt }] })
    });
    if (!res.ok) throw new Error('API error ' + res.status);
    const data = await res.json();
    let raw = data.content[0].text.trim().replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '').trim();
    const parsed = JSON.parse(raw);
    parsed._solution = solName;
    return parsed;
  }

  // Template fallback (no API key) — still solution-aware
  const fallbackSol = selectedSolution || company.solutions?.[0] || { name: 'ESG Data Platform', offer: 'ESG Data Platform', pillar: 'IT for Society', desc: '' };
  const fallbackName = fallbackSol.name || fallbackSol.offer || 'ESG Data Platform';
  const critical = company.topics?.find(t => t.badge === 'Critical' || t.badge === 'Critique') || company.topics?.[0];
  const csrdEsg = company.esg?.find(e => /csrd|wave/i.test(e.title + ' ' + e.value));
  const ind = (company.industry || 'sector').toLowerCase();

  let postscript;
  if (csrdEsg && critical) {
    const wave = /wave/i.test(csrdEsg.value) ? csrdEsg.value : 'Wave 1';
    postscript = `As a CSRD ${wave} reporter, ${company.name}'s ${critical.name.toLowerCase()} data (${critical.pct}% materiality) will face external audit this reporting cycle, and that is precisely where organisations most regret not having the right infrastructure in place sooner.`;
  } else if (critical && critical.pct >= 88) {
    postscript = `With ${critical.name.toLowerCase()} at ${critical.pct}% on ${company.name}'s materiality matrix, this is the pressure point where reactive management becomes a liability, and where we have delivered the fastest measurable impact for comparable ${ind} clients.`;
  } else if (critical) {
    postscript = `${company.name} has flagged ${critical.name.toLowerCase()} as a critical material issue, and ${fallbackName} is built specifically for organisations at exactly this stage of their ESG journey.`;
  } else {
    postscript = `${company.name}'s ESG disclosures show the kind of ambition where execution infrastructure, not strategy, becomes the limiting factor.`;
  }

  return {
    _solution: fallbackName,
    subject: `${company.name.split(' ')[0]} × Orange Business — ${fallbackName}`,
    body: `Dear ${stakeholder.name.split(' ')[0]},

I am reaching out from Orange Business about ${fallbackName}, specifically in relation to ${company.name}'s public ${company.topics?.[0]?.name?.toLowerCase() || 'sustainability'} commitments.

Given your role as ${stakeholder.role.split('·')[0].trim()} and the ${stakeholder.why.toLowerCase()}, ${fallbackName} offers a direct way to close the gap between commitment and verified, auditable data.

Orange Business holds EcoVadis Platinum status (top 1% globally), is SBTi-aligned to net zero by 2040, and was a CSRD Wave 1 reporter. We practise what we sell.

Could we find 15 minutes next week to share how we have helped a comparable ${company.industry} organisation operationalise exactly this?

Best regards,
[Your name]
Orange Business ESG Sales
[Your email] | [Your phone]

P.S. ${postscript}`
  };
}
