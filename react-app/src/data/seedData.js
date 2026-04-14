export const SEED_DATA = {
  bnp:{
    name:'BNP Paribas SA', industry:'Financial Services', hq:'Paris, France',
    size:'183,000 employees · EUR 11.2B net revenue · CAC 40',
    score:85, initials:'BP', color:'#003087', textColor:'white',
    cdpScore:'A-', cdpNote:'Source: CDP 2024 disclosure',
    tags:['Financial Services','Scope 3 Financed Emissions','CSRD Wave 1','Large Enterprise'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:68, sectorLeader:92, sectorLeaderScore:92, sectorLeaderName:'HSBC (Peer)', obScore:88, industryLabel:'Financial Services Avg',
      sectorLeaderStory:'HSBC has built one of the most comprehensive financed emissions measurement frameworks in banking, tracking Category 15 emissions across its lending book using PCAF methodology. Their quarterly portfolio carbon intensity reports — verified by a Big Four auditor — set the transparency benchmark for the sector. Orange\'s ESG Data Platform enables similar structured data collection and quarterly verification workflows, giving your sustainability team the same infrastructure that makes HSBC\'s disclosures credible to investors and regulators.',
      orangeRole:'ESG Data Management Platform + Scope 3 Financed Emissions Estimator'},
    leaderQuotes:[
      {name:'Jean-Laurent Bonnafé',title:'CEO, BNP Paribas',quote:'In the current geopolitical context, it is even more essential that we maintain an ambitious course towards a net-zero economy and finance the acceleration of renewable energies.',source:'BNP Paribas CSR Strategy April 2025 — https://invest.bnpparibas/document/bnp-paribas-strategy-rse-avril-2025',orangeOpportunity:'Scope 3 Financed Emissions Estimator — BNP needs auditable Scope 3 data to back this commitment with verified numbers.'},
      {name:'Jean-Laurent Bonnafé',title:'CEO, BNP Paribas',quote:'Our responsibility is to contribute to the emergence and implementation of solutions for a sustainable future.',source:'LinkedIn / Corporate communications',orangeOpportunity:'ESG Data Management Platform — translating this commitment into CSRD-compliant data workflows is where Orange can add immediate value.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'Portfolio alignment to 1.5°C with interim 2030 reduction targets across all financed sectors.',fill:72,fillColor:'#1a7a4a'},
      {title:'CSRD Status',value:'Wave 1',desc:'Full ESRS disclosure required FY2024. TCFD-aligned since 2020, double materiality assessment completed.',fill:88,fillColor:'#0056b3'},
      {title:'Carbon Scope',value:'1–3',desc:'Active Scope 3 financed emissions tracking across lending and investment portfolios. SBTi validation in progress.',fill:60,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Financed emissions',pct:92,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'ESG data & reporting',pct:85,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Digital carbon footprint',pct:74,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Supply chain traceability',pct:65,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'},
      {name:'Building energy use',pct:50,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Centralised ESG KPI collection and CSRD-ready reporting workflows. Pre-built ESRS data taxonomy reduces compliance overhead for Wave 1 reporters.',
        why:'BNP Paribas faces mandatory CSRD Wave 1 disclosure for FY2024 and has flagged data aggregation across business lines as a key pain point.',fit:4},
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Scope 3 Financed Emissions Estimator',
        desc:'IoT-enabled measurement and automated Scope 3 category tracking across financed portfolios. Integrates PCAF methodology for financial institutions.',
        why:'BNP Paribas has committed to SBTi-aligned financed emissions targets by 2030 but lacks granular portfolio-level carbon data to validate progress.',fit:5},
      {pillar:'Frugal AI & Eco-Design',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'RGESN-Compliant IT Architecture',
        desc:'Audit and right-size digital infrastructure using the RGESN eco-design framework. Reduce the bank\'s operational digital carbon footprint reported under ESRS E1.',
        why:'BNP Paribas reports Scope 1–2 IT emissions and faces internal pressure to reduce its technology footprint ahead of ESRS E1 disclosure.',fit:3}
    ],
    frugal:{title:'Document extraction for CSRD disclosure automation',
      desc:'Lightweight NLP models extract ESG data points from existing BNP Paribas sustainability reports and supplier documents — avoiding costly new data infrastructure. Aligns with Orange\'s responsible AI principles.',
      saving:'Est. 60–70% reduction in manual ESG data entry · No new digital infrastructure required'},
    stakeholders:[
      {init:'LP',bg:'#e8f0fb',tc:'#0056b3',name:'Laurence Pessez',role:'Global Head of CSR · BNP Paribas',why:'Owns net-zero strategy & CSRD reporting',priority:'Priority 1',ph:true},
      {init:'CTO',bg:'#fff3e8',tc:'#e06800',name:'Technology & Transformation Director',role:'CTO Office (via existing CIO relationship)',why:'Digital carbon & IT architecture',priority:'Priority 1',ph:true},
      {init:'ESG',bg:'#edf7f1',tc:'#1a7a4a',name:'Head of ESG Reporting & Data',role:'Finance Division · BNP Paribas',why:'CSRD data workflows & tooling gaps',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"How are you currently tracking financed emissions across your portfolio, and where are the biggest data gaps ahead of your 2030 SBTi interim targets?"',persona:'For: Chief Sustainability Officer'},
      {text:'"As a Wave 1 CSRD reporter, what is your current process for collecting ESG data points across business lines — and how much of that remains manual today?"',persona:'For: Head of ESG Reporting'},
      {text:'"What visibility do you have on the carbon footprint of your own digital infrastructure — and has RGESN eco-design come up internally as a priority?"',persona:'For: CTO / IT Leadership'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'CSRD Wave 1',cls:'csrd'},{label:'Scope 3 Priority',cls:'scope3'},{label:'IT for Society',cls:'itgreen'}],
    crmRows:[['Account','BNP Paribas SA','Public record'],['Industry','Financial Services','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','85 / 100 (Advanced)','ESG analysis'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Primary solution fit','ESG Data Mgmt Platform · Scope 3 Estimator','Orange mapping'],['Priority CSR contact','Chief Sustainability Officer','Public filings'],['Net zero commitment','2050 (1.5°C aligned)','Sustainability report'],['Next action','Schedule discovery call — CSO + IT','Recommended']]
  },

  unilever:{
    name:'Unilever PLC', industry:'FMCG', hq:'London / Rotterdam',
    size:'128,000 employees · EUR 60.1B revenue · FTSE 100',
    score:91, initials:'UL', color:'#1f3c88', textColor:'white',
    cdpScore:'A', cdpNote:'CDP Climate Score 2024',
    tags:['FMCG','Scope 3 Packaging','CSRD Wave 1','Net Zero 2039'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:65, sectorLeader:91, sectorLeaderScore:91, sectorLeaderName:'Unilever (Sector Leader)', obScore:88, industryLabel:'FMCG Sector Avg',
      sectorLeaderStory:'Unilever itself is the FMCG sector leader — its Climate Transition Action Plan and 56,000-supplier data collection framework set the global standard for supply chain ESG transparency. The key lesson from Unilever\'s journey: structured supplier portals with automated anomaly detection reduced their data collection FTE burden by 65% while improving data quality scores. Orange\'s ESG Data Platform replicates this infrastructure for companies at earlier stages of the same journey.',
      orangeRole:'Scope 3 Supplier Carbon Estimator + ESG Data Platform Supplier Portal'},
    leaderQuotes:[
      {name:'Hein Schumacher',title:'Former CEO, Unilever',quote:'We have too many long-term commitments that failed to make sufficient short-term impact, and the latter is what the world really needs right now.',source:'Q3 2023 Financial Update',orangeOpportunity:'Scope 3 Supplier Carbon Estimator — Unilever needs fast, measurable short-term supplier emissions reductions, not more long-term pledges.'},
      {name:'Rebecca Marmot',title:'Chief Sustainability Officer, Unilever',quote:'Our Climate Transition Action Plan enables us to understand where our emissions sit across our business and our value chain.',source:'Unilever Climate Transition Action Plan 2024 — https://www.unilever.com/files/8b5df5f6-cb90-40fd-9691-38d06905d81d/unilever-climate-transition-action-plan-updated-2024.pdf',orangeOpportunity:'ESG Data Platform Supplier Portal — real-time supplier emissions tracking is the missing piece between ambition and verified CTAP progress.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2039',desc:'One of the world\'s most ambitious net-zero commitments — full value chain decarbonisation including Scope 3 supplier emissions.',fill:85,fillColor:'#1a7a4a'},
      {title:'Packaging Goal',value:'100%',desc:'100% reusable, recyclable or compostable packaging by 2025. Halving virgin plastic usage vs 2019 baseline.',fill:78,fillColor:'#0056b3'},
      {title:'Supplier Scope 3',value:'Tier 1–3',desc:'Mandatory supplier ESG data collection across 56,000+ suppliers. Nature-positive commitments across agricultural sourcing.',fill:65,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Scope 3 supply chain',pct:95,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Packaging & plastics',pct:88,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Supplier ESG data',pct:80,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Deforestation & nature',pct:72,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Water & livelihoods',pct:58,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Scope 3 Supplier Carbon Estimator',
        desc:'Automated Scope 3 category 1 & 4 tracking across Unilever\'s 56,000+ supplier network. IoT-enabled product carbon footprint (PCF) estimation by SKU.',
        why:'Unilever\'s 2039 net-zero target hinges on Scope 3 supplier emissions representing 70%+ of its total footprint. Current supplier data collection is largely manual.',fit:5},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Platform — Supplier Portal',
        desc:'Centralised ESG KPI collection from suppliers with CSRD-compliant ESRS data taxonomy. Validated self-reporting with automated anomaly detection.',
        why:'Unilever collects sustainability data from 56,000+ suppliers but faces quality and completeness challenges that risk CSRD non-compliance.',fit:4},
      {pillar:'IT for Green',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'Circular Mobility & Device Leasing',
        desc:'Orange mobile leasing with circular recovery targets for Unilever\'s global mobile fleet. Reduces Scope 3 category 2 (capital goods) emissions.',
        why:'Unilever has committed to circular economy principles across operations — circular mobile leasing applies directly to its 128,000-employee device fleet.',fit:3}
    ],
    frugal:{title:'Frugal AI for supplier ESG document extraction & validation',
      desc:'Lightweight NLP models extract and cross-validate ESG data from supplier self-assessments and third-party audit reports — no large-model overhead. Processes PDFs from 56,000+ suppliers at scale with minimal compute footprint.',
      saving:'Est. 75% reduction in manual supplier data validation · Aligns with Unilever\'s responsible sourcing commitments'},
    stakeholders:[
      {init:'RM',bg:'#edf7f1',tc:'#1a7a4a',name:'Rebecca Marmot',role:'Chief Sustainability Officer · Unilever',why:'Owns 2039 net-zero & supplier strategy',priority:'Priority 1',ph:true,verify:true},
      {init:'SC',bg:'#e8f0fb',tc:'#0056b3',name:'Supply Chain Director',role:'Global Operations (via CIO relationship)',why:'Scope 3 data & supplier traceability',priority:'Priority 1',ph:true},
      {init:'PS',bg:'#fff3e8',tc:'#e06800',name:'Head of Sustainable Sourcing',role:'Procurement Division · Unilever',why:'Supplier ESG data collection gaps',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"Your 2039 net-zero target relies on Scope 3 — how are you currently collecting and validating carbon data from your 56,000+ suppliers at scale?"',persona:'For: Chief Sustainability Officer'},
      {text:'"What percentage of your CSRD supplier data collection is still manual today — and where are the biggest quality gaps in your Tier 1 reporting?"',persona:'For: Supply Chain Director'},
      {text:'"Have you explored circular leasing for your global device fleet as a route to reducing Scope 3 capital goods emissions and progressing circular economy commitments?"',persona:'For: Head of Sustainable Sourcing'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'Scope 3 Critical',cls:'scope3'},{label:'Supplier ESG Data',cls:'csrd'},{label:'IT for Green',cls:'itgreen'}],
    crmRows:[['Account','Unilever PLC','Public record'],['Industry','FMCG','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','91 / 100 (Leader)','ESG analysis'],['Net zero commitment','2039 (full value chain)','Sustainability report'],['Primary solution fit','Scope 3 Estimator · Supplier ESG Portal','Orange mapping'],['Priority CSR contact','Chief Sustainability Officer','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Scope 3 data discovery session — CSO + Supply Chain','Recommended']]
  },

  renault:{
    name:'Renault Group SA', industry:'Automotive', hq:'Boulogne-Billancourt, France',
    size:'105,000 employees · EUR 52.4B revenue · CAC 40',
    score:72, initials:'RN', color:'#f0c000', textColor:'#1a1a1a',
    cdpScore:'B', cdpNote:'CDP Climate Score 2024',
    tags:['Automotive','EV Transition','CSRD Wave 1','Circular Mobility'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:62, sectorLeader:78, sectorLeaderScore:78, sectorLeaderName:'Volkswagen Group', obScore:88, industryLabel:'Automotive Sector Avg',
      sectorLeaderStory:'Volkswagen Group leads the automotive sector in structured manufacturing emissions monitoring, having deployed real-time energy IoT across all major European plants by 2023. Their plant-level carbon KPI dashboards — updated hourly and feeding directly into CSRD ESRS E1 — reduced their reporting overhead by 55% and helped validate a credible Scope 1&2 reduction trajectory with investors. Orange\'s Smart Eco-Energy platform delivers the same capability for Renault\'s 15 manufacturing sites.',
      orangeRole:'Smart Eco-Energy for Manufacturing Plants + ESG Data Platform'},
    leaderQuotes:[
      {name:'Luca de Meo',title:'CEO, Renault Group',quote:'The automotive industry is living through a radical transformation. Renault Group has decided to be at the forefront of this revolution — electrification, software, and sustainability are at the core of our strategy.',source:'Renault Group Annual Report 2024 — https://www.renaultgroup.com/en/finance/',orangeOpportunity:'Smart Eco-Energy for Manufacturing — Renault\'s 90% Scope 1&2 reduction target by 2030 requires real-time plant energy monitoring across 15 manufacturing sites.'},
      {name:'Sylvie Gillet',title:'VP Sustainability, Renault Group',quote:'Our circular economy ambitions go beyond our vehicles — they extend to how we run our operations, manage our devices, and engage our entire supply chain.',source:'Renault Sustainability Report 2024 — https://www.renaultgroup.com/en/responsability/environment/',orangeOpportunity:'Circular Mobility Fleet Programme — Renault\'s 105,000-employee device fleet is a direct, measurable circular economy opportunity Orange can deliver immediately.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'Carbon neutral across full lifecycle by 2050. 90% reduction in Scope 1&2 by 2030, EV mix target of 100% passenger cars in Europe.',fill:68,fillColor:'#1a7a4a'},
      {title:'EV Share',value:'39%',desc:'39% of European sales were electric in 2024. Ampere EV division carved out. Battery remanufacturing at Flins Circularity Hub operational.',fill:55,fillColor:'#0056b3'},
      {title:'Circular Economy',value:'Tier 1–2',desc:'Battery second-life programme, 80% recycled content in vehicle parts by 2030. Re-Factory model at Flins facility.',fill:60,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'EV lifecycle emissions',pct:90,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Battery circularity',pct:82,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Supply chain Scope 3',pct:75,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Manufacturing energy',pct:68,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Digital carbon footprint',pct:45,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Smart Eco-Energy — Manufacturing Plants',
        desc:'IoT-based energy management across Renault\'s 15 manufacturing sites. Real-time consumption monitoring and carbon KPI dashboards aligned to ESRS E1.',
        why:'Renault has committed to 90% Scope 1&2 reduction by 2030 across manufacturing. Smart energy monitoring is the fastest lever to evidence progress in CSRD filings.',fit:5},
      {pillar:'IT for Green',cls:'bc-green',pcls:'bp-green',pillarColor:'#1a7a4a',offer:'Circular Mobility Fleet Programme',
        desc:'Orange device leasing with circular recovery for Renault\'s 105,000-employee mobile fleet. Certified refurbishment and end-of-life recycling with fleet carbon reporting.',
        why:'Renault\'s circular economy commitments apply to its own operations. A circular mobile fleet is a visible, measurable sustainability action.',fit:4},
      {pillar:'IT for Society',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#0056b3',offer:'ESG Data Platform + CSRD Reporting',
        desc:'CSRD-compliant data collection across Renault\'s Tier 1–2 supplier network. Automated ESRS E1 and E5 reporting covering manufacturing emissions and circular economy KPIs.',
        why:'Renault\'s Wave 1 CSRD obligations require detailed ESRS E1 and E5 disclosures. Existing data collection is fragmented across ERP and plant systems.',fit:4}
    ],
    frugal:{title:'Right-sized AI for manufacturing energy anomaly detection',
      desc:'Deploy lightweight on-premise AI models to detect energy anomalies across Renault\'s plant IoT sensor networks in real time — with full transparency on the model\'s own carbon cost. Aligned to Orange\'s RGESN framework.',
      saving:'Est. 8–12% plant energy waste reduction · On-premise deployment minimises AI carbon footprint · Fully auditable'},
    stakeholders:[
      {init:'TP',bg:'#fff3e8',tc:'#e06800',name:'Thierry Piéton',role:'Chief Financial Officer (ESG co-owner) · Renault',why:'CSRD financial materiality & net-zero investment',priority:'Priority 1',ph:true,verify:true},
      {init:'VP',bg:'#edf7f1',tc:'#1a7a4a',name:'VP Sustainability & CSR',role:'Group Sustainability Division · Renault',why:'Owns EV lifecycle & circular economy strategy',priority:'Priority 1',ph:true},
      {init:'MF',bg:'#e8f0fb',tc:'#0056b3',name:'Manufacturing IT Director',role:'Industrial Systems (via CIO relationship)',why:'Plant IoT & energy management systems',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"Your 2030 Scope 1&2 target requires 90% reduction — how are you currently monitoring and reporting energy consumption at plant level in real time?"',persona:'For: VP Sustainability / CFO'},
      {text:'"You\'ve committed to 80% recycled content by 2030 — are your current CSRD supplier data workflows capturing the circularity metrics ESRS E5 requires you to disclose?"',persona:'For: Head of Supply Chain'},
      {text:'"Renault\'s 105,000-employee device fleet is a circular economy opportunity — has circular mobile leasing been evaluated against your Scope 3 capital goods targets?"',persona:'For: Manufacturing IT Director'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'Manufacturing Energy',cls:'itgreen'},{label:'CSRD Wave 1',cls:'csrd'},{label:'Circular Economy',cls:'scope3'}],
    crmRows:[['Account','Renault Group SA','Public record'],['Industry','Automotive','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','72 / 100 (Advancing)','ESG analysis'],['Net zero commitment','2050 (Scope 1–3, full lifecycle)','Sustainability report'],['Primary solution fit','Smart Eco-Energy · Circular Fleet · ESG Data Platform','Orange mapping'],['Priority CSR contact','VP Sustainability & CSR','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Discovery session: plant energy monitoring + CSRD data gaps','Recommended']]
  },

  lvmh:{
    name:'LVMH Moët Hennessy Louis Vuitton', industry:'Luxury & Fashion', hq:'Paris, France',
    size:'175,000 employees · EUR 86.2B revenue · CAC 40',
    score:78, initials:'LV', color:'#1a1a1a', textColor:'white',
    cdpScore:'B', cdpNote:'CDP Climate Score 2024',
    tags:['Luxury & Fashion','Scope 3 Supply Chain','CSRD Wave 1','LIFE 360 Program'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:60, sectorLeader:85, sectorLeaderScore:85, sectorLeaderName:'Kering Group', obScore:88, industryLabel:'Luxury & Fashion Avg',
      sectorLeaderStory:'Kering Group leads luxury sector ESG with the world\'s first Environmental Profit & Loss account applied across all Maisons. Their centralised ESG data platform aggregates impact data from 8 luxury houses quarterly, feeding into CSRD disclosures and investor presentations. The key to Kering\'s advantage: a single data taxonomy applied consistently across all brands, enabling like-for-like comparison. Orange\'s ESG Data Management Platform delivers this multi-Maison data infrastructure for LVMH.',
      orangeRole:'ESG Data Management Platform + Frugal AI for Supply Chain Traceability'},
    leaderQuotes:[
      {name:'Bernard Arnault',title:'Chairman & CEO, LVMH',quote:'LIFE 360 is LVMH\'s roadmap for the future — a comprehensive programme that reflects our commitment to making luxury and sustainability inseparable.',source:'LVMH LIFE 360 Programme — https://www.lvmh.com/en/commitment-in-action/for-the-environment',orangeOpportunity:'ESG Data Management Platform — LVMH needs to aggregate LIFE 360 sustainability data across 75 Maisons for CSRD Wave 1 disclosure.'},
      {name:'Marie-Claire Daveu',title:'Chief Sustainability Officer, LVMH',quote:'Traceability is not optional for luxury — our customers and regulators demand to know the origin of every material we use.',source:'LVMH Sustainability Report 2024 — https://www.lvmh.com/en/investors/esg',orangeOpportunity:'Frugal AI for Supply Chain Traceability — lightweight AI models can automate supplier ESG verification across LVMH\'s complex multi-tier supply chain.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'LIFE 360 environmental programme covers climate, biodiversity, circular economy and traceability across all 75 Maisons.',fill:72,fillColor:'#1a7a4a'},
      {title:'Circular Design',value:'100%',desc:'Target for products designed with sustainability principles. Repair, resale and rental programmes expanding across key Maisons.',fill:80,fillColor:'#0056b3'},
      {title:'Supplier Traceability',value:'Tier 1-3',desc:'Full supply chain traceability programme for raw materials including leather, cotton, gold and diamonds.',fill:65,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Scope 3 supply chain',pct:92,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Luxury circularity & repair',pct:85,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Biodiversity & raw materials',pct:78,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Social compliance & livelihoods',pct:72,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Digital carbon footprint',pct:60,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Circular Device Lifecycle Management',
        desc:'End-to-end sustainable mobile device programme for LVMH\'s 175,000 employees globally — leasing, certified refurbishment, secure data wiping, and end-of-life recycling.',
        why:'LVMH\'s 175,000 employees generate significant device waste; circular leasing directly supports the LIFE 360 circular economy pillar with measurable, reportable outcomes.',fit:4},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Centralised ESG KPI collection from all 75 Maisons and thousands of suppliers for CSRD Wave 1 compliance — with ESRS-aligned data taxonomy and audit trail.',
        why:'LVMH must collect verified ESG data from 75 Maisons and thousands of suppliers for CSRD Wave 1 — a centralised platform is the only scalable approach.',fit:5},
      {pillar:'Frugal AI & Eco-Design',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'Eco-Design (RGESN Framework)',
        desc:'Applying RGESN eco-design standards to LVMH\'s digital experiences across Maisons — reducing the digital carbon footprint of luxury digital products and services.',
        why:'LVMH is expanding digital experiences across Maisons; eco-designed digital products reduce the digital carbon footprint linked to LIFE 360 climate targets.',fit:3}
    ],
    frugal:{title:'Lightweight AI for luxury product authentication and supply chain traceability',
      desc:'Replacing manual audit processes with efficient, low-carbon automated verification for LVMH\'s raw material supply chains — supporting LIFE 360 traceability commitments across leather, gold and diamond sourcing.',
      saving:'Est. 70% reduction in manual supply chain audit time · Supports LIFE 360 traceability · Low-carbon AI deployment'},
    stakeholders:[
      {init:'HG',bg:'#e8f0fb',tc:'#0056b3',name:'Hélène Gauthier',role:'Chief Sustainability Officer · LVMH Group',why:'LIFE 360 programme owner — ESG & CSRD',priority:'Priority 1',ph:true,verify:true},
      {init:'CD',bg:'#fff3e8',tc:'#e06800',name:'Chief Digital Officer',role:'Group Digital & Innovation · LVMH',why:'Digital sustainability & eco-design',priority:'Priority 1',ph:true},
      {init:'SR',bg:'#edf7f1',tc:'#1a7a4a',name:'Head of Supplier Responsibility',role:'Operations & Supply Chain · LVMH',why:'Traceability & CSRD supply chain data',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"LIFE 360 commits to full traceability across your supply chain — how are you currently collecting ESG data from 75 Maisons at the cadence CSRD Wave 1 requires?"',persona:'For: Chief Sustainability Officer'},
      {text:'"Your circular economy pillar targets repair and resale — have you evaluated a circular mobile device programme for your 175,000 employees as a measurable, quick-win contribution?"',persona:'For: Chief Digital Officer'},
      {text:'"Which of your Maisons has the biggest gap between their sustainability ambition and their current data infrastructure — and how are you addressing it at group level?"',persona:'For: Head of Supplier Responsibility'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'LIFE 360 Programme',cls:'csrd'},{label:'Scope 3 Supply Chain',cls:'scope3'},{label:'IT for Society',cls:'itgreen'}],
    crmRows:[['Account','LVMH Moët Hennessy Louis Vuitton','Public record'],['Industry','Luxury & Fashion','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','78 / 100 (Advancing)','ESG analysis'],['Net zero commitment','2050 (LIFE 360 programme)','Sustainability report'],['Primary solution fit','ESG Data Platform · Circular Device Lifecycle','Orange mapping'],['Priority CSR contact','Chief Sustainability Officer (LIFE 360 owner)','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Discovery call: CSRD data infrastructure across 75 Maisons','Recommended']]
  },

  schneider:{
    name:'Schneider Electric SE', industry:'Energy Management', hq:'Rueil-Malmaison, France',
    size:'135,000 employees · EUR 35.9B revenue · CAC 40',
    score:94, initials:'SE', color:'#3dcd58', textColor:'white',
    cdpScore:'A', cdpNote:'9 consecutive years on CDP A-List; World\'s Most Sustainable Company 2024 per TIME/Statista',
    tags:['Energy Management','ESG Leader','CSRD Wave 1','SSI Index Pioneer'],
    tagClasses:['ti','tcsrd','tcsrd','ts3'],
    benchmarkData:{industryAvg:72, sectorLeader:94, sectorLeaderScore:94, sectorLeaderName:'Schneider Electric (Leader)', obScore:88, industryLabel:'Energy Mgmt Sector Avg',
      sectorLeaderStory:'Schneider Electric IS the sector leader — ranked the World\'s Most Sustainable Company by TIME/Statista 2024. Their SSI Index tracks 11 ESG KPIs quarterly, publicly disclosed and independently verified. The next frontier for Schneider is ensuring its own AI-powered digital products (EcoStruxure) carry minimal carbon overhead — eco-designing the tools that help others decarbonise. Orange\'s RGESN eco-design framework and Carbon Calculator support exactly this next phase.',
      orangeRole:'Orange Carbon Calculator + RGESN Eco-Design Framework'},
    leaderQuotes:[
      {name:'Peter Herweck',title:'Former CEO, Schneider Electric',quote:'We are incredibly honoured to be recognised as the world\'s most sustainable company. We helped customers reduce their carbon emissions — 553 million tonnes of CO2 saved and avoided since 2018.',source:'TIME/Statista World\'s Most Sustainable Companies 2024',orangeOpportunity:'Orange Carbon Calculator — Schneider needs verifiable IT vendor emissions data to maintain its CDP A-List status and SSI Index credibility.'},
      {name:'Chris Leong',title:'Chief Sustainability Officer, Schneider Electric',quote:'We are determined to continue transforming ambition into action. There is still work ahead, but with the support of our extensive ecosystem and all our Impact Makers, we will succeed.',source:'Schneider SSI Q4 2024 Results — https://www.se.com/ww/en/assets/564/document/505452/schneider-sustainability-impact-q4-2024-results.pdf',orangeOpportunity:'Frugal AI & RGESN Eco-Design — ensuring Schneider\'s own digital products are eco-designed is the next frontier of their SSI programme.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2040',desc:'Most ambitious net-zero target in the energy sector. Full Scope 1, 2 and 3 coverage including customer use of sold products (Category 11).',fill:95,fillColor:'#1a7a4a'},
      {title:'Supplier Programme',value:'1,000',desc:'Mandatory supplier decarbonisation — 1,000 strategic suppliers required to set science-based targets by 2025.',fill:82,fillColor:'#0056b3'},
      {title:'SSI Index',value:'11 KPIs',desc:'Schneider Sustainability Impact index tracks 11 ESG KPIs quarterly, publicly disclosed, independently verified.',fill:90,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Energy efficiency for customers',pct:98,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Scope 3 customer product use',pct:90,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Digital sustainability tools',pct:85,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Supplier decarbonisation',pct:80,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Circular economy & end-of-life',pct:75,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Orange Carbon Calculator',
        desc:'Provides Schneider Electric with verified, auditable IT vendor emissions data for their own Scope 3 reporting — aligned to ESRS E1 and their SSI Index disclosure requirements.',
        why:'Schneider needs verified IT vendor emissions data for their own Scope 3 reporting — Orange\'s Carbon Calculator provides the auditable supplier data the SSI Index requires.',fit:5},
      {pillar:'IT for Green',cls:'bc-green',pcls:'bp-green',pillarColor:'#1a7a4a',offer:'Sustainable Cloud Infrastructure',
        desc:'Energy-efficient cloud with renewable energy commitments, PUE-optimised data centres, and carbon-neutral hosting — matching Schneider\'s own 2040 net-zero commitment.',
        why:'Schneider\'s digital expansion requires cloud infrastructure that matches their own net-zero 2040 commitment — Orange\'s renewable-energy cloud aligns with SSI Index targets.',fit:4},
      {pillar:'Frugal AI & Eco-Design',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'Eco-Design (RGESN Framework)',
        desc:'Applying RGESN eco-design standards to Schneider\'s EcoStruxure platform ensures their own AI-powered energy management tools have minimal digital carbon overhead.',
        why:'Schneider builds digital energy management products — eco-designed architecture reduces the footprint of the tools they sell to help their customers decarbonise.',fit:4}
    ],
    frugal:{title:'Right-sized AI models for EcoStruxure platform analytics',
      desc:'Ensuring Schneider\'s own AI-powered energy management tools have minimal carbon overhead, consistent with their 2040 net-zero commitment. On-premise deployment eliminates cloud data transfer emissions.',
      saving:'Est. 40–60% reduction in AI infrastructure energy use · Consistent with SSI Index KPI #7 (digital efficiency) · Fully auditable'},
    stakeholders:[
      {init:'GH',bg:'#edf7f1',tc:'#1a7a4a',name:'Gilles Huguenin',role:'Chief Sustainability Officer · Schneider Electric',why:'SSI Index & net-zero 2040 programme owner',priority:'Priority 1',ph:true,verify:true},
      {init:'CTO',bg:'#fff3e8',tc:'#e06800',name:'CTO / Head of Digital',role:'EcoStruxure Platform · Schneider Electric',why:'Digital product sustainability & AI efficiency',priority:'Priority 1',ph:true},
      {init:'DS',bg:'#e8f0fb',tc:'#0056b3',name:'Head of Digital Energy Solutions',role:'Customer Sustainability Tools · Schneider',why:'Customer-facing sustainability tools',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"Your SSI Index tracks 11 sustainability KPIs quarterly — how much of that data collection is still manual, and where are the biggest accuracy risks in your current process?"',persona:'For: Chief Sustainability Officer'},
      {text:'"Schneider\'s own net-zero target includes Scope 3 from IT vendors — have you assessed Orange Business against your supplier sustainability requirements?"',persona:'For: Chief Sustainability Officer'},
      {text:'"Your EcoStruxure platform helps thousands of customers decarbonise — are the AI components within EcoStruxure itself designed to RGESN eco-design standards?"',persona:'For: CTO / Digital Leadership'}
    ],
    crmTags:[{label:'ESG Leader',cls:'sustainability'},{label:'Scope 3 Verification',cls:'scope3'},{label:'Sustainable Cloud',cls:'csrd'},{label:'Frugal AI Match',cls:'itgreen'}],
    crmRows:[['Account','Schneider Electric SE','Public record'],['Industry','Energy Management','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','94 / 100 (ESG Leader)','ESG analysis'],['Net zero commitment','2040 (Scope 1-3, SSI Index)','Sustainability report'],['Primary solution fit','Carbon Calculator · Sustainable Cloud · RGESN Eco-Design','Orange mapping'],['Priority CSR contact','Chief Sustainability Officer','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Supplier ESG assessment + EcoStruxure eco-design audit','Recommended']]
  },

  total:{
    name:'TotalEnergies SE', industry:'Oil & Gas / Energy Transition', hq:'Courbevoie, France',
    size:'101,000 employees · USD 218B revenue · CAC 40',
    score:65, initials:'TE', color:'#e5003a', textColor:'white',
    cdpScore:'A-', cdpNote:'Held A- since 2017; opted out of 2025 rating — declined B cap from new oil & gas criteria',
    tags:['Oil & Gas Transition','Renewables Scale-Up','CSRD Wave 1','Scope 3 Challenge'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:55, sectorLeader:96, sectorLeaderScore:96, sectorLeaderName:'Ørsted (Energy Transition)', obScore:88, industryLabel:'Oil & Gas Sector Avg',
      sectorLeaderStory:'Ørsted — formerly a Danish oil & gas company — executed the most credible energy transition in the sector, achieving CDP A-List status with a 96 ESG score by divesting fossil assets and becoming the world\'s largest offshore wind developer. Their verified Scope 3 Category 11 reduction was built on granular, auditable energy product data that enabled investor confidence through the transition. Orange\'s ESG Data Platform and Carbon Calculator can provide TotalEnergies with the same measurement credibility Ørsted built its investor story on.',
      orangeRole:'Corporate Decarbonisation Roadmap + ESG Data Platform Multi-Country'},
    leaderQuotes:[
      {name:'Patrick Pouyanné',title:'CEO, TotalEnergies',quote:'TotalEnergies is not an oil company — we are a multi-energy company. Our ambition is to be a major player in the energy transition.',source:'TotalEnergies Annual Financial Reports — https://totalenergies.com/investors/publications-and-regulated-information/regulated-information/annual-financial-reports',orangeOpportunity:'Corporate Decarbonisation Roadmap — TotalEnergies needs a credible Scope 3 Category 11 reduction plan that goes beyond narrative to verified action.'},
      {name:'TotalEnergies',title:'Corporate disclosure',quote:'TotalEnergies received an A- score since 2017. However, we decided to respond to the 2025 questionnaire without requesting a rating, as a score capped to B would not fully reflect our integrated and balanced multi-energy strategy.',source:'TotalEnergies Sustainability & Climate 2025 Progress Report — https://totalenergies.com/news/press-releases/totalenergies-publishes-its-sustainability-climate-2025-progress-report-and',orangeOpportunity:'Carbon Emissions Calculator — TotalEnergies needs precise, auditable IT vendor emissions data to separate genuine climate leadership from perception management.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'Net zero across all operations and energy products sold. Interim target: 30% reduction in Scope 1+2 by 2030. Methane intensity target <0.2% by 2025.',fill:62,fillColor:'#1a7a4a'},
      {title:'Renewables Target',value:'100GW',desc:'100 gigawatts of renewable energy capacity by 2030. Currently at 39GW. Requires significant digital infrastructure investment.',fill:55,fillColor:'#0056b3'},
      {title:'Scope 3 Challenge',value:'Cat. 11',desc:'Use of energy products sold (Category 11) represents 90%+ of TotalEnergies\' total carbon footprint — the hardest Scope 3 category to address.',fill:40,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Scope 3 product emissions credibility',pct:95,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Renewable energy transition pace',pct:88,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Methane & flaring reduction',pct:82,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'ESG reporting credibility',pct:70,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Digital infrastructure carbon',pct:55,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'Strategic Decarbonisation',cls:'bc-dark',pcls:'bp-dark',pillarColor:'#444',offer:'Corporate Decarbonisation Roadmap',
        desc:'End-to-end consulting and implementation support for TotalEnergies\' net-zero 2050 commitment — credible, independently verifiable Scope 3 Category 11 reduction planning.',
        why:'TotalEnergies\' net-zero 2050 commitment requires a credible, independently verifiable implementation plan — particularly for Category 11 which faces intense investor scrutiny.',fit:5},
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Orange Carbon Calculator',
        desc:'Transparent, auditable data on TotalEnergies\' IT vendor emissions as part of Scope 1+2 reduction — demonstrating credible measurement practices to ESG rating agencies.',
        why:'TotalEnergies needs transparent, auditable data on its IT vendor emissions as part of Scope 1+2 reduction and to demonstrate credible measurement to ESG rating agencies.',fit:4},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Platform — Multi-Country',
        desc:'Managing ESG data across 130+ countries, multiple energy segments, and CSRD Wave 1 obligations requires a centralised, verified platform that reduces manual reporting risk.',
        why:'Managing ESG data across 130+ countries and multiple energy segments for CSRD Wave 1 requires a centralised platform that eliminates manual reporting risk.',fit:4}
    ],
    frugal:{title:'Lightweight AI for renewable energy asset monitoring and predictive maintenance',
      desc:'Supporting the 100GW renewables buildout with efficient, on-premise AI models for wind and solar asset monitoring — avoiding cloud data transfer emissions. On-site deployment at wind/solar facilities minimises digital carbon footprint.',
      saving:'Est. 15–20% reduction in renewable asset downtime · On-premise = zero cloud emissions · Frugal AI aligns with RGESN principles'},
    stakeholders:[
      {init:'AH',bg:'#edf7f1',tc:'#1a7a4a',name:'Aurélien Hamelle',role:'President, Strategy & Sustainability · TotalEnergies',why:'Net-zero & Scope 3 credibility',priority:'Priority 1',ph:true},
      {init:'CD',bg:'#e8f0fb',tc:'#0056b3',name:'Chief Digital & Innovation Officer',role:'Digital Transformation · TotalEnergies',why:'Digital transformation & ESG data',priority:'Priority 1',ph:true},
      {init:'EC',bg:'#fff3e8',tc:'#e06800',name:'Head of Climate & Energy Transition',role:'100GW Renewables Programme · TotalEnergies',why:'100GW renewables programme',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"TotalEnergies\' Scope 3 Category 11 represents 90% of your footprint — what is your current strategy for demonstrating credible reduction progress to investors and ESG rating agencies?"',persona:'For: SVP Strategy & Sustainability'},
      {text:'"As you scale from 39GW to 100GW of renewables by 2030, what data infrastructure are you putting in place to monitor, report and optimise that asset base?"',persona:'For: Chief Digital & Innovation Officer'},
      {text:'"Your CSRD Wave 1 filing covers operations across 130+ countries — how confident are you in the consistency and auditability of ESG data coming from each region?"',persona:'For: Head of Climate & Energy Transition'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'Scope 3 Critical',cls:'scope3'},{label:'Energy Transition',cls:'csrd'},{label:'Strategic Decarbonisation',cls:'itgreen'}],
    crmRows:[['Account','TotalEnergies SE','Public record'],['Industry','Oil & Gas / Energy Transition','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','65 / 100 (Advancing)','ESG analysis'],['Net zero commitment','2050 (Scope 1-3, product use)','Sustainability report'],['Primary solution fit','Corporate Decarbonisation Roadmap · ESG Data Platform','Orange mapping'],['Priority CSR contact','SVP Strategy & Sustainability','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Scope 3 credibility audit + CSRD multi-country data gap review','Recommended']]
  },

  axa:{
    name:'AXA Group', industry:'Insurance & Finance', hq:'Paris, France',
    size:'145,000 employees · EUR 102.4B revenue · CAC 40',
    score:76, initials:'AX', color:'#00008f', textColor:'white',
    cdpScore:'A-', cdpNote:'CDP Climate Score 2024',
    tags:['Insurance & Finance','Climate Risk','CSRD Wave 1','Green Investment'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:65, sectorLeader:86, sectorLeaderScore:86, sectorLeaderName:'Zurich Insurance Group', obScore:88, industryLabel:'Insurance Sector Avg',
      sectorLeaderStory:'Zurich Insurance Group leads insurance-sector ESG with a transparent climate risk framework covering its entire EUR 200B+ investment portfolio. Their quarterly portfolio carbon intensity reports — PCAF-verified — give investors precise, auditable emissions data on every asset class. The key differentiator: Zurich invested in centralised ESG data infrastructure before CSRD mandated it, giving them a 2-year head start on data quality. Orange\'s ESG Data Platform delivers this infrastructure for AXA\'s EUR 870B AUM.',
      orangeRole:'ESG Data Management Platform + Scope 3 Carbon Estimator'},
    leaderQuotes:[
      {name:'Thomas Buberl',title:'CEO, AXA',quote:'Climate change is the most systemic risk we face as an insurer and investor. AXA\'s role is to accelerate the transition — not just manage the risk.',source:'AXA 2024 Climate and Biodiversity Report — https://www-axa-com.cdn.axa-contento-118412.eu/www-axa-com/8b8dfa69-13e3-4c34-bae3-8fb939102a2d_axa_climate_and_biodiversity_report_2024_va.pdf',orangeOpportunity:'Scope 3 Carbon Estimator — AXA\'s investment portfolio emissions require granular, asset-level carbon tracking to support its net-zero underwriting commitments.'},
      {name:'AXA Group',title:'Corporate commitment',quote:'AXA has committed to aligning its investment portfolio with a 1.5°C pathway and exiting coal underwriting by 2030 in OECD countries.',source:'AXA Climate & Biodiversity Report 2024 — https://www-axa-com.cdn.axa-contento-118412.eu/www-axa-com/8b8dfa69-13e3-4c34-bae3-8fb939102a2d_axa_climate_and_biodiversity_report_2024_va.pdf',orangeOpportunity:'ESG Data Platform — managing and reporting on climate alignment across AXA\'s multi-trillion euro investment portfolio requires enterprise-grade ESG data infrastructure.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'Net zero across investment portfolio (EUR 870B AUM) and own operations. EUR 26B green investment target achieved by 2023. TCFD-aligned since 2019.',fill:74,fillColor:'#1a7a4a'},
      {title:'Coal Exit',value:'2030/2040',desc:'Phase out coal underwriting and investments by 2030 (OECD countries) and 2040 globally. Strengthened thermal coal exclusion policy.',fill:78,fillColor:'#0056b3'},
      {title:'Green AUM',value:'EUR 26B',desc:'EUR 26B in green investment target achieved. ESG integration across 100% of investment decisions. Climate risk scenarios embedded in all underwriting models.',fill:68,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Climate risk in investment portfolio',pct:90,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'ESG data for AUM reporting',pct:85,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Financed Scope 3 emissions',pct:80,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Carbon footprint of IT operations',pct:70,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Sustainable insurance products',pct:55,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Centralised ESG data collection and aggregation across AXA\'s EUR 870B investment portfolio for CSRD and TCFD disclosure — with automated ESRS data taxonomy.',
        why:'AXA needs to collect and aggregate ESG data across EUR 870B of investments for CSRD and TCFD disclosure — a data challenge requiring enterprise-grade infrastructure.',fit:5},
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Orange Carbon Calculator',
        desc:'Verified, auditable data on the carbon footprint of all Orange Business services consumed by AXA — essential for ESRS E1 IT emissions disclosure and supplier Scope 3.',
        why:'AXA\'s own digital operations need verified carbon accounting for ESRS E1 disclosure — and to lead by example as the world\'s largest insurer of climate risk.',fit:4},
      {pillar:'Strategic Decarbonisation',cls:'bc-dark',pcls:'bp-dark',pillarColor:'#444',offer:'Scope 3 Carbon Estimator & Supplier Engagement',
        desc:'IoT-enabled measurement and automated tracking of AXA\'s financed Scope 3 emissions (Category 15) across its investment portfolio. Integrates PCAF methodology.',
        why:'AXA\'s investment portfolio financed emissions (Category 15) represent the bulk of its climate impact — without credible measurement, SBTi validation is impossible.',fit:5}
    ],
    frugal:{title:'Lightweight AI for climate risk assessment in insurance underwriting',
      desc:'Right-sized NLP models analyse climate exposure in underwriting decisions without the carbon overhead of large foundation models — supporting AXA\'s ambition to embed climate risk in every pricing decision at scale with minimal digital footprint.',
      saving:'Est. 50% reduction in climate risk data processing costs · On-premise option available · Minimal digital carbon footprint'},
    stakeholders:[
      {init:'AC',bg:'#edf7f1',tc:'#1a7a4a',name:'Amanda Clack',role:'Group Chief Sustainability Officer · AXA',why:'Net-zero investment strategy & CSRD reporting',priority:'Priority 1',ph:true,verify:true},
      {init:'CIO',bg:'#e8f0fb',tc:'#0056b3',name:'Chief Investment Officer',role:'AXA Investment Managers',why:'ESG integration across EUR 870B AUM',priority:'Priority 1',ph:true},
      {init:'CTO',bg:'#fff3e8',tc:'#e06800',name:'Group Chief Technology Officer',role:'AXA Group Technology',why:'IT carbon footprint & digital sustainability',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"AXA\'s TCFD alignment commits to portfolio-level climate risk disclosure — how are you currently collecting verified ESG data from investee companies at the scale CSRD now requires?"',persona:'For: Chief Sustainability Officer'},
      {text:'"Your Category 15 financed emissions represent the majority of your Scope 3 footprint — what is your current methodology for measuring and validating this data ahead of SBTi submission?"',persona:'For: Chief Investment Officer'},
      {text:'"AXA\'s own IT operations are an ESRS E1 disclosure requirement — have you assessed your IT vendor carbon footprints, including Orange Business, as part of your digital Scope 3 accounting?"',persona:'For: Group CTO'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'CSRD Wave 1',cls:'csrd'},{label:'Financed Scope 3',cls:'scope3'},{label:'IT for Society',cls:'itgreen'}],
    crmRows:[['Account','AXA Group','Public record'],['Industry','Insurance & Finance','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','76 / 100 (Advancing)','ESG analysis'],['Net zero commitment','2050 (full AUM + operations)','Sustainability report'],['Primary solution fit','ESG Data Platform · Scope 3 Estimator · Carbon Calculator','Orange mapping'],['Priority CSR contact','Group Chief Sustainability Officer','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Portfolio ESG data infrastructure assessment + IT carbon audit','Recommended']]
  },

  danone:{
    name:'Danone SA', industry:'Food & Beverage', hq:'Paris, France',
    size:'100,000 employees · EUR 27.6B revenue · CAC 40',
    score:83, initials:'DA', color:'#009fe3', textColor:'white',
    cdpScore:'A', cdpNote:'CDP Climate Score 2024',
    tags:['Food & Beverage','Regenerative Agriculture','CSRD Wave 1','Nature Positive'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:62, sectorLeader:80, sectorLeaderScore:80, sectorLeaderName:'Nestlé', obScore:88, industryLabel:'Food & Beverage Avg',
      sectorLeaderStory:'Nestlé has built the food & beverage sector\'s most structured agricultural Scope 3 measurement programme, using IoT-based monitoring on 500,000+ farms to track emissions from milk, cocoa, and coffee sourcing. Their farm-level carbon intensity data — updated quarterly — gives investors credible evidence of the 30% Scope 3 reduction trajectory. Orange\'s Scope 3 Estimator delivers equivalent farm-level measurement capability for Danone\'s 100,000+ agricultural suppliers.',
      orangeRole:'Scope 3 Supplier Carbon Estimator + ESG Data Management Platform'},
    leaderQuotes:[
      {name:'Antoine de Saint-Affrique',title:'CEO, Danone',quote:'Danone was built on the idea that business success and social progress are not only compatible — they are inseparable. We are doubling down on that belief.',source:'Danone Annual Integrated Report 2024 — https://www.danone.com/content/dam/corp/global/danonecom/investors/en-sustainability/reports-and-data/cross-topic/danoneiar2024.pdf',orangeOpportunity:'ESG Data Collection Platform — Danone\'s B Corp certification across its portfolio requires continuous ESG data collection across all markets and product lines.'},
      {name:'Danone',title:'Corporate commitment',quote:'We are committed to becoming fully carbon neutral across our entire value chain by 2050, with a 30% absolute reduction in emissions by 2030.',source:'Danone Sustainability — https://www.danone.com/sustainability.html',orangeOpportunity:'Scope 3 Supplier Carbon Estimator — Danone\'s dairy supply chain represents 60%+ of its Scope 3 footprint and requires automated supplier emissions tracking.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'SBTi-validated science-based targets — 50% Scope 1&2 reduction and 30% Scope 3 by 2030. Agricultural supply chain is 90% of total footprint.',fill:82,fillColor:'#1a7a4a'},
      {title:'Regenerative Ag',value:'50%',desc:'50% regenerative ingredients sourced by 2030. Over 100,000 farms engaged globally across dairy, water, and plant-based businesses.',fill:70,fillColor:'#0056b3'},
      {title:'Packaging',value:'100% recyclable',desc:'100% recyclable, reusable or compostable packaging by 2025. 50% reduction in virgin plastic versus 2019 baseline.',fill:75,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Agricultural Scope 3 emissions',pct:92,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Packaging & plastics reduction',pct:85,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Water stewardship',pct:78,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Supply chain ESG data quality',pct:72,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Digital carbon footprint',pct:48,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Scope 3 Carbon Estimator & Supplier Engagement',
        desc:'IoT-enabled measurement and automated tracking of Danone\'s agricultural Scope 3 emissions across 100,000+ farms, with supplier engagement portal for verified data collection.',
        why:'Danone\'s 90% Scope 3 footprint sits in the agricultural supply chain — IoT monitoring of farm-level emissions is critical to SBTi validation and CSRD disclosure.',fit:5},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Centralised ESG KPI collection from 100,000+ farms and processing facilities for CSRD compliance and SBTi progress reporting — with automated anomaly detection.',
        why:'Collecting verified ESG data from 100,000+ farms for CSRD and SBTi validation is a massive data challenge — a structured platform eliminates quality risks.',fit:5},
      {pillar:'IT for Green',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'Circular Device Lifecycle Management',
        desc:'End-to-end sustainable mobile device programme for Danone\'s 100,000 employees — circular leasing with certified refurbishment reduces Scope 3 category 2 emissions.',
        why:'Danone\'s circular economy commitments extend to its own operational devices — circular mobile leasing directly reduces Scope 3 capital goods emissions.',fit:3}
    ],
    frugal:{title:'Lightweight AI for agricultural emissions estimation from satellite imagery',
      desc:'Replacing costly ground-truth farm surveys with efficient satellite-based AI emissions estimation — covering 100,000+ farms globally with minimal compute footprint. Supports Danone\'s SBTi validation and CSRD agricultural Scope 3 data.',
      saving:'Est. 80% reduction in agricultural data collection cost · Covers 100,000+ farms · Aligns with RGESN responsible AI principles'},
    stakeholders:[
      {init:'CV',bg:'#edf7f1',tc:'#1a7a4a',name:'Cécile Cabanis',role:'Chief Sustainability Officer · Danone',why:'SBTi targets & agricultural Scope 3 strategy',priority:'Priority 1',ph:true,verify:true},
      {init:'VP',bg:'#fff3e8',tc:'#e06800',name:'VP Agricultural Sourcing',role:'Global Procurement · Danone',why:'Farm-level ESG data & regenerative agriculture',priority:'Priority 1',ph:true},
      {init:'CTO',bg:'#e8f0fb',tc:'#0056b3',name:'Chief Technology Officer',role:'Group Digital · Danone',why:'Digital infrastructure & ESG data platform',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"Danone\'s SBTi targets require 30% Scope 3 reduction by 2030 — how are you currently collecting and verifying carbon data from your 100,000+ agricultural suppliers at the cadence SBTi validation requires?"',persona:'For: Chief Sustainability Officer'},
      {text:'"Your CSRD Wave 1 disclosure requires ESRS E1 data from across your entire value chain — what percentage of your agricultural Scope 3 data is currently based on estimation rather than verified measurement?"',persona:'For: VP Agricultural Sourcing'},
      {text:'"As Danone scales its regenerative agriculture programme, what digital infrastructure are you putting in place to capture, verify and report environmental outcomes to investors and regulators?"',persona:'For: Chief Technology Officer'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'Scope 3 Critical',cls:'scope3'},{label:'CSRD Wave 1',cls:'csrd'},{label:'IT for Green',cls:'itgreen'}],
    crmRows:[['Account','Danone SA','Public record'],['Industry','Food & Beverage','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','83 / 100 (Advanced)','ESG analysis'],['Net zero commitment','2050 (SBTi-validated, 2030 interim)','Sustainability report'],['Primary solution fit','Scope 3 Estimator · ESG Data Platform','Orange mapping'],['Priority CSR contact','Chief Sustainability Officer','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Agricultural Scope 3 data infrastructure discovery session','Recommended']]
  },

  airbus:{
    name:'Airbus SE', industry:'Aerospace & Defence', hq:'Toulouse, France',
    size:'135,000 employees · EUR 65.4B revenue · CAC 40',
    score:68, initials:'AB', color:'#003070', textColor:'white',
    cdpScore:'B', cdpNote:'Stopped public CDP reporting in 2025',
    tags:['Aerospace','Sustainable Aviation','Net Zero 2050','Supply Chain Scope 3'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:58, sectorLeader:79, sectorLeaderScore:79, sectorLeaderName:'Safran Group', obScore:88, industryLabel:'Aerospace Sector Avg',
      sectorLeaderStory:'Safran Group leads aerospace sector ESG with a comprehensive manufacturing emissions monitoring programme across 28 production sites, feeding ESRS E1-compliant CSRD disclosures with real-time plant data. Their supplier ESG engagement programme — covering 700 strategic suppliers with quarterly carbon data submissions — sets the aerospace standard for Scope 3 Category 1 transparency. Orange\'s Smart Eco-Energy and ESG Data Platform replicate this capability for Airbus\'s larger and more complex manufacturing footprint.',
      orangeRole:'Smart Eco-Energy for Manufacturing + Corporate Decarbonisation Roadmap'},
    leaderQuotes:[
      {name:'Guillaume Faury',title:'CEO, Airbus',quote:'Decarbonising aviation is the defining challenge of our generation. Airbus is committed to bringing a zero-emission commercial aircraft to market by 2035.',source:'Airbus Summit 2024',orangeOpportunity:'Corporate Decarbonisation Roadmap — Airbus needs a credible interim decarbonisation plan for its manufacturing operations while hydrogen aircraft technology matures.'},
      {name:'Julie Kitcher',title:'Chief Sustainability Officer, Airbus',quote:'Our suppliers represent a significant portion of our carbon footprint. Engaging them on decarbonisation is not optional — it is central to our net-zero pathway.',source:'Airbus Annual Report 2024 — https://www.airbus.com/sites/g/files/jlcbta136/files/2025-04/Airbus%20Annual%20Report%202024.pdf',orangeOpportunity:'Scope 3 Supplier Carbon Estimator — Airbus needs automated Scope 3 category 1 data from its complex aerospace supply chain for credible net-zero reporting.'}
    ],
    esg:[
      {title:'Net Zero Target',value:'2050',desc:'Carbon-neutral aircraft by 2035 programme. Full Scope 1-3 net-zero by 2050 with 2030 interim targets for operations. Hydrogen and SAF investment accelerating.',fill:65,fillColor:'#1a7a4a'},
      {title:'SAF Commitment',value:'10% by 2030',desc:'10% SAF blending target by 2030 across commercial aviation. Working with airlines, governments, and fuel producers to accelerate SAF supply chain development.',fill:55,fillColor:'#0056b3'},
      {title:'Lifecycle Scope 3',value:'Category 11',desc:'75%+ of total emissions come from aircraft use phase (Scope 3 Category 11). Supplier responsible sourcing programme covers Tier 1 and Tier 2 suppliers.',fill:60,fillColor:'#1a7a4a'}
    ],
    topics:[
      {name:'Product use-phase emissions (Scope 3)',pct:95,badge:'Critical',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Supply chain decarbonisation',pct:85,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Manufacturing energy & Scope 1/2',pct:70,badge:'High',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Circular economy & end-of-life',pct:60,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'},
      {name:'Digital carbon footprint',pct:52,badge:'Medium',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Smart Eco-Energy for Manufacturing Sites',
        desc:'IoT-based energy management across Airbus\'s 35+ manufacturing sites in France, Germany, Spain, and UK — real-time monitoring and ESRS E1-aligned carbon KPI dashboards.',
        why:'Airbus\'s 35+ manufacturing sites generate significant Scope 1&2 emissions; smart energy monitoring is the fastest lever to evidence progress in CSRD filings.',fit:4},
      {pillar:'Strategic Decarbonisation',cls:'bc-dark',pcls:'bp-dark',pillarColor:'#444',offer:'Corporate Decarbonisation Roadmap',
        desc:'End-to-end consulting for Airbus\'s Scope 3 reduction planning — credible, independently verifiable implementation plan for Category 11 (product use) emissions.',
        why:'Airbus needs a credible, independently verifiable Scope 3 reduction plan for Category 11 which faces intense investor and regulatory scrutiny.',fit:5},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'CSRD-compliant data collection across Airbus\'s Tier 1-2 supplier network and 35+ countries — consolidated ESRS E1 and E2 reporting across manufacturing and supply chain.',
        why:'CSRD Wave 1 requires consolidated ESG reporting across 135,000 employees and Tier 1-3 suppliers in 35+ countries — a data challenge Orange is positioned to address.',fit:4}
    ],
    frugal:{title:'Lightweight AI for predictive maintenance energy optimisation at manufacturing sites',
      desc:'Deploy on-premise AI models at Airbus manufacturing sites to detect energy anomalies and optimise maintenance schedules — minimising digital carbon overhead while reducing manufacturing energy waste. RGESN-compliant, transparent model selection.',
      saving:'Est. 8–15% manufacturing energy waste reduction · On-premise = zero cloud data transfer emissions · RGESN compliant'},
    stakeholders:[
      {init:'EL',bg:'#edf7f1',tc:'#1a7a4a',name:'Edouard Lauga',role:'VP Sustainability & Environment · Airbus',why:'Net-zero strategy & Scope 3 product emissions',priority:'Priority 1',ph:true,verify:true},
      {init:'IS',bg:'#e8f0fb',tc:'#0056b3',name:'Head of Industrial Systems',role:'Manufacturing IT & Operations · Airbus',why:'Plant energy monitoring & IoT infrastructure',priority:'Priority 1',ph:true},
      {init:'SC',bg:'#fff3e8',tc:'#e06800',name:'Head of Supply Chain ESG',role:'Global Procurement · Airbus',why:'Supplier Scope 3 data & CSRD compliance',priority:'Priority 2',ph:false}
    ],
    questions:[
      {text:'"Airbus\'s 35+ manufacturing sites generate significant Scope 1&2 emissions — how are you currently monitoring and reporting energy consumption at site level in real time for your CSRD E1 disclosure?"',persona:'For: VP Sustainability & Environment'},
      {text:'"Scope 3 Category 11 (aircraft use-phase) represents 75%+ of your total footprint — what is your strategy for demonstrating credible reduction progress to investors and ESG rating agencies?"',persona:'For: VP Sustainability'},
      {text:'"Your CSRD Wave 1 filing covers operations across 35+ countries — how confident are you in the consistency and auditability of ESG data coming from each manufacturing region?"',persona:'For: Head of Supply Chain ESG'}
    ],
    crmTags:[{label:'Sustainability Opportunity',cls:'sustainability'},{label:'Manufacturing Energy',cls:'itgreen'},{label:'CSRD Wave 1',cls:'csrd'},{label:'Scope 3 Critical',cls:'scope3'}],
    crmRows:[['Account','Airbus SE','Public record'],['Industry','Aerospace & Defence','Public record'],['Opportunity type','Sustainability Solution','Auto-tagged'],['ESG maturity score','68 / 100 (Advancing)','ESG analysis'],['Net zero commitment','2050 (carbon-neutral aircraft by 2035)','Sustainability report'],['Primary solution fit','Smart Eco-Energy · Corporate Decarbonisation Roadmap · ESG Platform','Orange mapping'],['Priority CSR contact','VP Sustainability & Environment','Public filings'],['CSRD status','Wave 1 — FY2024 filing','Annual report'],['Next action','Manufacturing energy monitoring pilot + CSRD data gap assessment','Recommended']]
  }
};

