export function buildPrompt(val, lang) {
  return `You are an Orange Business ESG Sales Intelligence system. Analyze the company "${val}" and return ONLY valid JSON with no markdown, no explanation, no backticks — just raw JSON.

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
    {"init":"2L","bg":"#e8f0fb","tc":"#0056b3","name":"Name or role","role":"Full title · Company","why":"Why relevant","priority":"Priority 1","ph":true},
    {"init":"2L","bg":"#fff3e8","tc":"#e06800","name":"...","role":"...","why":"...","priority":"Priority 1","ph":true},
    {"init":"2L","bg":"#edf7f1","tc":"#1a7a4a","name":"...","role":"...","why":"...","priority":"Priority 2","ph":false}
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
  ]
}

Use ONLY Orange Business's actual pillars:
- IT for Green: IoT building energy (Smart Eco-energy), circular device leasing, Scope 3 carbon estimators, Carbon Calculator, Sustainable Cloud
- IT for Society: ESG data management platforms, CSRD compliance tools, digital inclusion
- Frugal AI & Eco-Design: RGESN framework, right-sized AI models, GenAI governance, eco-design certification
- Strategic Decarbonisation: Corporate Decarbonisation Roadmap, Scope 3 Estimator, CSRD Acceleration, EcoVadis Programme
- Orange credentials: EcoVadis Platinum, SBTi-aligned net-zero 2040, RGESN certified, 28,000+ enterprise customers

Use your knowledge of ${val}'s actual published ESG strategy. Where possible, include real source URLs for ESG claims and ratings. Add a "leaderQuotes" array with real executive quotes from published sources — include the source name and URL where available.${lang === 'fr' ? ' IMPORTANT: All text values in the JSON must be written in natural, professional business French suitable for a French executive audience. Keep proper nouns in their original form.' : ''} Return ONLY the raw JSON object.`;
}

export async function analyzeCompany(val, apiKey, lang) {
  const prompt = buildPrompt(val, lang);
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
  return parsed;
}

export function buildChatSystemPrompt(currentCompany, lang) {
  const langInstruction = lang === 'fr' ? '\n\nIMPORTANT: Respond entirely in French. Use natural, professional business French suitable for a French executive audience.' : '';
  let ctx = `You are an expert ESG Sales Coach for Orange Business sales representatives. Orange Business is a global IT and telecom services company with:
- EcoVadis Platinum status (top 1% globally)
- SBTi-aligned net-zero 2040 commitment
- CSRD Wave 1 reporter (FY2024)
- 28,000+ enterprise customers
- Solutions: ESG Data Platform, Carbon Calculator, Smart Eco-Energy IoT, Circular Device Leasing, Sustainable Cloud, Frugal AI, RGESN Eco-Design, Corporate Decarbonisation Roadmap

You provide concise, actionable sales coaching. Keep responses under 150 words unless asked for something longer.${langInstruction}`;

  if (currentCompany) {
    const co = currentCompany;
    ctx += `\n\nCurrent account context: ${co.name} (${co.industry}, score ${co.score}/100, HQ: ${co.hq}). Top ESG topics: ${co.topics.slice(0, 3).map(t => t.name).join(', ')}. Recommended solutions: ${co.solutions.map(s => s.offer).join(', ')}. Key stakeholder: ${co.stakeholders[0].name || co.stakeholders[0].role}.`;
  }
  return ctx;
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
