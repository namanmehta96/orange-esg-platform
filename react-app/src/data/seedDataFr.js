export const SEED_DATA_FR = {
  bnp:{
    name:'BNP Paribas SA', industry:'Services Financiers', hq:'Paris, France',
    size:'183 000 collaborateurs · 11,2 Mds EUR de revenu net · CAC 40',
    score:85, initials:'BP', color:'#003087', textColor:'white',
    cdpScore:'A-', cdpNote:'Source : déclaration CDP 2024',
    tags:['Services Financiers','Émissions Financées Scope 3','CSRD Vague 1','Grande Entreprise'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:68, sectorLeader:92, sectorLeaderScore:92, sectorLeaderName:'HSBC (Pair)',obScore:88, industryLabel:'Moy. Services Financiers',
      sectorLeaderStory:'HSBC a développé l\'un des cadres de mesure des émissions financées les plus complets du secteur bancaire, suivant les émissions de Catégorie 15 sur l\'ensemble de son portefeuille de prêts selon la méthodologie PCAF. Ses rapports trimestriels d\'intensité carbone du portefeuille — vérifiés par un cabinet d\'audit Big Four — établissent la référence de transparence du secteur. La plateforme de données ESG d\'Orange permet une collecte de données structurée et des workflows de vérification trimestriels similaires, offrant à votre équipe développement durable la même infrastructure qui rend les déclarations de HSBC crédibles auprès des investisseurs et des régulateurs.',
      orangeRole:'ESG Data Management Platform + Scope 3 Financed Emissions Estimator'},
    leaderQuotes:[
      {name:'Jean-Laurent Bonnafé',title:'CEO, BNP Paribas',quote:'Dans le contexte géopolitique actuel, il est d\'autant plus essentiel de maintenir un cap ambitieux vers une économie et une finance net zéro et de financer l\'accélération des énergies renouvelables.',source:'BNP Paribas Green Bond Framework, 2024',orangeOpportunity:'Scope 3 Financed Emissions Estimator — BNP a besoin de données Scope 3 auditables pour étayer cet engagement avec des chiffres vérifiés.'},
      {name:'Jean-Laurent Bonnafé',title:'CEO, BNP Paribas',quote:'Notre responsabilité est de contribuer à l\'émergence et à la mise en œuvre de solutions pour un avenir durable.',source:'LinkedIn / Communications corporate',orangeOpportunity:'ESG Data Management Platform — transformer cet engagement en flux de données conformes à la CSRD est le domaine où Orange peut apporter une valeur immédiate.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Alignement du portefeuille sur 1,5°C avec des objectifs de réduction intermédiaires à 2030 dans tous les secteurs financés.',fill:72,fillColor:'#1a7a4a'},
      {title:'Statut CSRD',value:'Vague 1',desc:'Déclaration ESRS complète requise pour l\'exercice 2024. Aligné TCFD depuis 2020, évaluation de double matérialité finalisée.',fill:88,fillColor:'#0056b3'},
      {title:'Périmètre Carbone',value:'1–3',desc:'Suivi actif des émissions financées Scope 3 sur les portefeuilles de prêts et d\'investissements. Validation SBTi en cours.',fill:60,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Émissions financées',pct:92,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Données et reporting ESG',pct:85,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Empreinte carbone numérique',pct:74,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Traçabilité chaîne d\'approvisionnement',pct:65,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'},
      {name:'Consommation énergétique des bâtiments',pct:50,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Collecte centralisée des KPI ESG et workflows de reporting prêts pour la CSRD. Taxonomie de données ESRS préconfigurée réduisant la charge de conformité pour les déclarants de Vague 1.',
        why:'BNP Paribas fait face à la déclaration obligatoire CSRD Vague 1 pour l\'exercice 2024 et a identifié l\'agrégation des données entre lignes de métier comme un point de friction majeur.',fit:4},
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#FF7900',offer:'Scope 3 Financed Emissions Estimator',
        desc:'Mesure par IoT et suivi automatisé des émissions Scope 3 par catégorie sur les portefeuilles financés. Intègre la méthodologie PCAF pour les institutions financières.',
        why:'BNP Paribas s\'est engagée sur des objectifs d\'émissions financées alignés SBTi d\'ici 2030 mais manque de données carbone granulaires au niveau du portefeuille pour valider ses progrès.',fit:5},
      {pillar:'Frugal AI & Eco-Design',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#FF7900',offer:'RGESN-Compliant IT Architecture',
        desc:'Audit et dimensionnement optimisé de l\'infrastructure numérique selon le référentiel d\'éco-conception RGESN. Réduction de l\'empreinte carbone numérique opérationnelle de la banque déclarée sous ESRS E1.',
        why:'BNP Paribas déclare ses émissions IT Scope 1–2 et fait face à une pression interne pour réduire son empreinte technologique avant la déclaration ESRS E1.',fit:3}
    ],
    frugal:{title:'Extraction documentaire pour l\'automatisation des déclarations CSRD',
      desc:'Des modèles NLP légers extraient les données ESG des rapports de développement durable et des documents fournisseurs existants de BNP Paribas — évitant une infrastructure de données coûteuse. Conforme aux principes d\'IA responsable d\'Orange.',
      saving:'Réduction estimée de 60–70 % de la saisie manuelle de données ESG · Aucune nouvelle infrastructure numérique requise'},
    stakeholders:[
      {init:'LM',bg:'#e8f0fb',tc:'#0056b3',name:'Laurent Mignon',role:'Directeur Général Développement Durable · BNP Paribas',why:'Pilote la stratégie net zéro et le reporting CSRD',priority:'Priorité 1',ph:true},
      {init:'CTO',bg:'#fff3e8',tc:'#e06800',name:'Directeur Technologie & Transformation',role:'Direction CTO (via relation DSI existante)',why:'Carbone numérique et architecture IT',priority:'Priorité 1',ph:true},
      {init:'ESG',bg:'#edf7f1',tc:'#1a7a4a',name:'Responsable Reporting & Données ESG',role:'Division Finance · BNP Paribas',why:'Workflows de données CSRD et lacunes d\'outillage',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Comment suivez-vous actuellement les émissions financées de votre portefeuille, et quelles sont les principales lacunes de données avant vos objectifs intermédiaires SBTi 2030 ? »',persona:'Pour : Directeur Développement Durable'},
      {text:'« En tant que déclarant CSRD Vague 1, quel est votre processus actuel de collecte des données ESG entre les lignes de métier — et quelle part reste manuelle aujourd\'hui ? »',persona:'Pour : Responsable Reporting ESG'},
      {text:'« Quelle visibilité avez-vous sur l\'empreinte carbone de votre propre infrastructure numérique — et l\'éco-conception RGESN a-t-elle été identifiée en interne comme une priorité ? »',persona:'Pour : DSI / Direction IT'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'CSRD Vague 1',cls:'csrd'},{label:'Priorité Scope 3',cls:'scope3'},{label:'IT for Society',cls:'itgreen'}],
    crmRows:[['Compte','BNP Paribas SA','Données publiques'],['Secteur','Services Financiers','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','85 / 100 (Avancé)','Analyse ESG'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Solution principale','ESG Data Mgmt Platform · Scope 3 Estimator','Mapping Orange'],['Contact RSE prioritaire','Directeur Développement Durable','Documents publics'],['Engagement net zéro','2050 (aligné 1,5°C)','Rapport développement durable'],['Prochaine action','Planifier un appel découverte — DSE + IT','Recommandé']]
  },

  unilever:{
    name:'Unilever PLC', industry:'Grande Consommation', hq:'London / Rotterdam',
    size:'128 000 collaborateurs · 60,1 Mds EUR de chiffre d\'affaires · FTSE 100',
    score:91, initials:'UL', color:'#1f3c88', textColor:'white',
    cdpScore:'A', cdpNote:'Score CDP Climat 2024',
    tags:['Grande Consommation','Scope 3 Emballage','CSRD Vague 1','Net Zéro 2039'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:65, sectorLeader:91, sectorLeaderScore:91, sectorLeaderName:'Unilever (Leader sectoriel)', obScore:88, industryLabel:'Moy. Secteur Grande Consommation',
      sectorLeaderStory:'Unilever est lui-même le leader sectoriel en grande consommation — son Plan d\'Action pour la Transition Climatique et son dispositif de collecte de données auprès de 56 000 fournisseurs établissent la référence mondiale en matière de transparence ESG de la chaîne d\'approvisionnement. La leçon clé du parcours d\'Unilever : des portails fournisseurs structurés avec détection automatisée des anomalies ont réduit de 65 % la charge de collecte de données en ETP tout en améliorant les scores de qualité des données. La plateforme de données ESG d\'Orange réplique cette infrastructure pour les entreprises aux stades antérieurs du même parcours.',
      orangeRole:'Scope 3 Supplier Carbon Estimator + ESG Data Platform Supplier Portal'},
    leaderQuotes:[
      {name:'Hein Schumacher',title:'Ancien CEO, Unilever',quote:'Nous avons trop d\'engagements long terme qui n\'ont pas produit un impact suffisant à court terme — or c\'est bien de cela que le monde a besoin maintenant.',source:'Q3 2023 Financial Update',orangeOpportunity:'Scope 3 Supplier Carbon Estimator — Unilever a besoin de réductions d\'émissions fournisseurs mesurables et rapides, pas de promesses supplémentaires à long terme.'},
      {name:'Rebecca Marmot',title:'Directrice Développement Durable, Unilever',quote:'Notre Plan d\'Action pour la Transition Climatique nous permet de comprendre où se situent nos émissions dans notre activité et notre chaîne de valeur.',source:'Unilever CTAP Launch, 2024',orangeOpportunity:'ESG Data Platform Supplier Portal — le suivi en temps réel des émissions fournisseurs est la pièce manquante entre l\'ambition et un suivi vérifié du CTAP.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2039',desc:'L\'un des engagements net zéro les plus ambitieux au monde — décarbonation de l\'ensemble de la chaîne de valeur incluant les émissions Scope 3 des fournisseurs.',fill:85,fillColor:'#1a7a4a'},
      {title:'Objectif Emballages',value:'100%',desc:'Emballages 100 % réutilisables, recyclables ou compostables d\'ici 2025. Réduction de moitié du plastique vierge par rapport à la base 2019.',fill:78,fillColor:'#0056b3'},
      {title:'Scope 3 Fournisseurs',value:'Tier 1–3',desc:'Collecte obligatoire de données ESG fournisseurs auprès de 56 000+ fournisseurs. Engagements nature positive dans l\'approvisionnement agricole.',fill:65,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Scope 3 chaîne d\'approvisionnement',pct:95,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Emballages et plastiques',pct:88,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Données ESG fournisseurs',pct:80,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Déforestation et nature',pct:72,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Eau et moyens de subsistance',pct:58,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#FF7900',offer:'Scope 3 Supplier Carbon Estimator',
        desc:'Suivi automatisé des catégories Scope 3 1 et 4 sur le réseau de 56 000+ fournisseurs d\'Unilever. Estimation de l\'empreinte carbone produit (PCF) par SKU via IoT.',
        why:'L\'objectif net zéro 2039 d\'Unilever repose sur les émissions Scope 3 fournisseurs représentant plus de 70 % de son empreinte totale. La collecte de données fournisseurs reste largement manuelle.',fit:5},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Platform — Supplier Portal',
        desc:'Collecte centralisée de KPI ESG auprès des fournisseurs avec taxonomie de données ESRS conforme à la CSRD. Auto-déclaration validée avec détection automatisée des anomalies.',
        why:'Unilever collecte des données de développement durable auprès de 56 000+ fournisseurs mais fait face à des problèmes de qualité et d\'exhaustivité risquant la non-conformité CSRD.',fit:4},
      {pillar:'IT for Green',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'Circular Mobility & Device Leasing',
        desc:'Location de mobiles Orange avec objectifs de récupération circulaire pour la flotte mondiale d\'Unilever. Réduit les émissions Scope 3 catégorie 2 (biens d\'équipement).',
        why:'Unilever s\'est engagé sur les principes d\'économie circulaire dans ses opérations — la location circulaire de mobiles s\'applique directement à sa flotte de 128 000 collaborateurs.',fit:3}
    ],
    frugal:{title:'IA frugale pour l\'extraction et la validation de documents ESG fournisseurs',
      desc:'Des modèles NLP légers extraient et croisent les données ESG des auto-évaluations fournisseurs et des rapports d\'audit tiers — sans surcoût de modèles lourds. Traitement des PDF de 56 000+ fournisseurs à grande échelle avec une empreinte de calcul minimale.',
      saving:'Réduction estimée de 75 % de la validation manuelle des données fournisseurs · Conforme aux engagements d\'approvisionnement responsable d\'Unilever'},
    stakeholders:[
      {init:'RM',bg:'#edf7f1',tc:'#1a7a4a',name:'Rebecca Marmot',role:'Directrice Développement Durable · Unilever',why:'Pilote la stratégie net zéro 2039 et fournisseurs',priority:'Priorité 1',ph:true},
      {init:'SC',bg:'#e8f0fb',tc:'#0056b3',name:'Directeur Supply Chain',role:'Opérations Monde (via relation DSI)',why:'Données Scope 3 et traçabilité fournisseurs',priority:'Priorité 1',ph:true},
      {init:'PS',bg:'#fff3e8',tc:'#e06800',name:'Responsable Approvisionnement Durable',role:'Direction Achats · Unilever',why:'Lacunes dans la collecte de données ESG fournisseurs',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Votre objectif net zéro 2039 repose sur le Scope 3 — comment collectez-vous et validez-vous actuellement les données carbone de vos 56 000+ fournisseurs à grande échelle ? »',persona:'Pour : Directrice Développement Durable'},
      {text:'« Quel pourcentage de votre collecte de données fournisseurs CSRD reste encore manuel aujourd\'hui — et où se situent les principales lacunes de qualité dans votre reporting Tier 1 ? »',persona:'Pour : Directeur Supply Chain'},
      {text:'« Avez-vous envisagé la location circulaire pour votre flotte de terminaux mondiale comme levier de réduction des émissions Scope 3 biens d\'équipement et d\'avancement des engagements d\'économie circulaire ? »',persona:'Pour : Responsable Approvisionnement Durable'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'Scope 3 Critique',cls:'scope3'},{label:'Données ESG Fournisseurs',cls:'csrd'},{label:'IT for Green',cls:'itgreen'}],
    crmRows:[['Compte','Unilever PLC','Données publiques'],['Secteur','Grande Consommation','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','91 / 100 (Leader)','Analyse ESG'],['Engagement net zéro','2039 (chaîne de valeur complète)','Rapport développement durable'],['Solution principale','Scope 3 Estimator · Supplier ESG Portal','Mapping Orange'],['Contact RSE prioritaire','Directrice Développement Durable','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Session découverte données Scope 3 — DSE + Supply Chain','Recommandé']]
  },

  renault:{
    name:'Renault Group SA', industry:'Automobile', hq:'Boulogne-Billancourt, France',
    size:'105 000 collaborateurs · 52,4 Mds EUR de chiffre d\'affaires · CAC 40',
    score:72, initials:'RN', color:'#f0c000', textColor:'#1a1a1a',
    cdpScore:'B', cdpNote:'Score CDP Climat 2024',
    tags:['Automobile','Transition VE','CSRD Vague 1','Mobilité Circulaire'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:62, sectorLeader:78, sectorLeaderScore:78, sectorLeaderName:'Volkswagen Group', obScore:88, industryLabel:'Moy. Secteur Automobile',
      sectorLeaderStory:'Volkswagen Group mène le secteur automobile en matière de suivi structuré des émissions de production, ayant déployé l\'IoT énergétique temps réel dans toutes ses grandes usines européennes dès 2023. Leurs tableaux de bord carbone au niveau des usines — mis à jour toutes les heures et alimentant directement les déclarations CSRD ESRS E1 — ont réduit leur charge de reporting de 55 % et aidé à valider une trajectoire crédible de réduction Scope 1 et 2 auprès des investisseurs. La plateforme Smart Eco-Energy d\'Orange offre la même capacité pour les 15 sites de production de Renault.',
      orangeRole:'Smart Eco-Energy for Manufacturing Plants + ESG Data Platform'},
    leaderQuotes:[
      {name:'Luca de Meo',title:'CEO, Renault Group',quote:'L\'industrie automobile vit une transformation radicale. Renault Group a décidé d\'être à l\'avant-garde de cette révolution — l\'électrification, le logiciel et le développement durable sont au cœur de notre stratégie.',source:'Renault Group Annual Report 2024',orangeOpportunity:'Smart Eco-Energy for Manufacturing — L\'objectif de Renault de 90 % de réduction Scope 1 et 2 d\'ici 2030 nécessite un suivi énergétique temps réel sur ses 15 sites de production.'},
      {name:'Sylvie Gillet',title:'VP Développement Durable, Renault Group',quote:'Nos ambitions d\'économie circulaire vont au-delà de nos véhicules — elles s\'étendent à la façon dont nous gérons nos opérations, nos terminaux et l\'ensemble de notre chaîne d\'approvisionnement.',source:'Renault Sustainability Report 2024',orangeOpportunity:'Circular Mobility Fleet Programme — La flotte de terminaux des 105 000 collaborateurs de Renault est une opportunité directe et mesurable d\'économie circulaire qu\'Orange peut concrétiser immédiatement.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Neutralité carbone sur l\'ensemble du cycle de vie d\'ici 2050. 90 % de réduction Scope 1 et 2 d\'ici 2030, objectif de 100 % de véhicules particuliers électriques en Europe.',fill:68,fillColor:'#1a7a4a'},
      {title:'Part VE',value:'39%',desc:'39 % des ventes européennes étaient électriques en 2024. Division VE Ampere constituée. Remanufacturing de batteries au Hub Circularité de Flins opérationnel.',fill:55,fillColor:'#0056b3'},
      {title:'Économie Circulaire',value:'Tier 1–2',desc:'Programme de seconde vie des batteries, 80 % de contenu recyclé dans les pièces de véhicules d\'ici 2030. Modèle Re-Factory sur le site de Flins.',fill:60,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Émissions cycle de vie VE',pct:90,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Circularité des batteries',pct:82,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Scope 3 chaîne d\'approvisionnement',pct:75,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Énergie des sites de production',pct:68,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Empreinte carbone numérique',pct:45,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#FF7900',offer:'Smart Eco-Energy — Manufacturing Plants',
        desc:'Gestion énergétique par IoT sur les 15 sites de production de Renault. Suivi de la consommation en temps réel et tableaux de bord KPI carbone alignés ESRS E1.',
        why:'Renault s\'est engagé sur une réduction de 90 % du Scope 1 et 2 d\'ici 2030 dans ses usines. Le suivi intelligent de l\'énergie est le levier le plus rapide pour démontrer les progrès dans les déclarations CSRD.',fit:5},
      {pillar:'IT for Green',cls:'bc-green',pcls:'bp-green',pillarColor:'#1a7a4a',offer:'Circular Mobility Fleet Programme',
        desc:'Location de terminaux Orange avec récupération circulaire pour la flotte mobile de 105 000 collaborateurs de Renault. Reconditionnement certifié et recyclage fin de vie avec reporting carbone de la flotte.',
        why:'Les engagements d\'économie circulaire de Renault s\'appliquent à ses propres opérations. Une flotte mobile circulaire est une action de développement durable visible et mesurable.',fit:4},
      {pillar:'IT for Society',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#0056b3',offer:'ESG Data Platform + CSRD Reporting',
        desc:'Collecte de données conforme à la CSRD auprès du réseau de fournisseurs Tier 1–2 de Renault. Reporting ESRS E1 et E5 automatisé couvrant les émissions de production et les KPI d\'économie circulaire.',
        why:'Les obligations CSRD Vague 1 de Renault exigent des déclarations détaillées ESRS E1 et E5. La collecte de données existante est fragmentée entre ERP et systèmes d\'usine.',fit:4}
    ],
    frugal:{title:'IA dimensionnée pour la détection d\'anomalies énergétiques en production',
      desc:'Déploiement de modèles d\'IA légers sur site pour détecter les anomalies énergétiques sur les réseaux de capteurs IoT des usines de Renault en temps réel — avec une transparence totale sur le propre coût carbone du modèle. Conforme au référentiel RGESN d\'Orange.',
      saving:'Réduction estimée de 8–12 % des pertes énergétiques en usine · Déploiement sur site minimisant l\'empreinte carbone de l\'IA · Entièrement auditable'},
    stakeholders:[
      {init:'TP',bg:'#fff3e8',tc:'#e06800',name:'Thierry Piéton',role:'Directeur Financier (co-pilote ESG) · Renault',why:'Matérialité financière CSRD et investissement net zéro',priority:'Priorité 1',ph:true},
      {init:'VP',bg:'#edf7f1',tc:'#1a7a4a',name:'VP Développement Durable & RSE',role:'Direction Développement Durable Groupe · Renault',why:'Pilote la stratégie cycle de vie VE et économie circulaire',priority:'Priorité 1',ph:true},
      {init:'MF',bg:'#e8f0fb',tc:'#0056b3',name:'Directeur IT Industriel',role:'Systèmes Industriels (via relation DSI)',why:'IoT usine et systèmes de gestion énergétique',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Votre objectif 2030 Scope 1 et 2 exige une réduction de 90 % — comment suivez-vous et reportez-vous actuellement la consommation énergétique au niveau des usines en temps réel ? »',persona:'Pour : VP Développement Durable / DAF'},
      {text:'« Vous vous êtes engagés sur 80 % de contenu recyclé d\'ici 2030 — vos workflows actuels de données fournisseurs CSRD capturent-ils les métriques de circularité qu\'ESRS E5 vous oblige à déclarer ? »',persona:'Pour : Directeur Supply Chain'},
      {text:'« La flotte de terminaux de 105 000 collaborateurs de Renault est une opportunité d\'économie circulaire — la location circulaire de mobiles a-t-elle été évaluée par rapport à vos objectifs Scope 3 biens d\'équipement ? »',persona:'Pour : Directeur IT Industriel'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'Énergie Industrielle',cls:'itgreen'},{label:'CSRD Vague 1',cls:'csrd'},{label:'Économie Circulaire',cls:'scope3'}],
    crmRows:[['Compte','Renault Group SA','Données publiques'],['Secteur','Automobile','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','72 / 100 (En progression)','Analyse ESG'],['Engagement net zéro','2050 (Scope 1–3, cycle de vie complet)','Rapport développement durable'],['Solution principale','Smart Eco-Energy · Circular Fleet · ESG Data Platform','Mapping Orange'],['Contact RSE prioritaire','VP Développement Durable & RSE','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Session découverte : suivi énergétique usines + lacunes données CSRD','Recommandé']]
  },

  lvmh:{
    name:'LVMH Moët Hennessy Louis Vuitton', industry:'Luxe & Mode', hq:'Paris, France',
    size:'175 000 collaborateurs · 86,2 Mds EUR de chiffre d\'affaires · CAC 40',
    score:78, initials:'LV', color:'#1a1a1a', textColor:'white',
    cdpScore:'B', cdpNote:'Score CDP Climat 2024',
    tags:['Luxe & Mode','Scope 3 Chaîne d\'Approvisionnement','CSRD Vague 1','Programme LIFE 360'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:60, sectorLeader:85, sectorLeaderScore:85, sectorLeaderName:'Kering Group', obScore:88, industryLabel:'Moy. Luxe & Mode',
      sectorLeaderStory:'Kering Group mène le secteur du luxe en matière d\'ESG avec le premier Compte de Résultat Environnemental au monde appliqué à toutes les Maisons. Leur plateforme centralisée de données ESG agrège les données d\'impact de 8 maisons de luxe trimestriellement, alimentant les déclarations CSRD et les présentations investisseurs. La clé de l\'avantage de Kering : une taxonomie de données unique appliquée de manière cohérente à toutes les marques, permettant des comparaisons homogènes. La plateforme ESG Data Management d\'Orange offre cette infrastructure de données multi-Maisons pour LVMH.',
      orangeRole:'ESG Data Management Platform + Frugal AI for Supply Chain Traceability'},
    leaderQuotes:[
      {name:'Bernard Arnault',title:'Président-Directeur Général, LVMH',quote:'LIFE 360 est la feuille de route de LVMH pour l\'avenir — un programme complet qui reflète notre engagement à rendre luxe et développement durable indissociables.',source:'LVMH LIFE 360 Programme Launch',orangeOpportunity:'ESG Data Management Platform — LVMH doit agréger les données de développement durable LIFE 360 de 75 Maisons pour la déclaration CSRD Vague 1.'},
      {name:'Marie-Claire Daveu',title:'Directrice Développement Durable, LVMH',quote:'La traçabilité n\'est pas optionnelle pour le luxe — nos clients et les régulateurs exigent de connaître l\'origine de chaque matière que nous utilisons.',source:'LVMH Sustainability Report 2024',orangeOpportunity:'Frugal AI for Supply Chain Traceability — des modèles d\'IA légers peuvent automatiser la vérification ESG des fournisseurs dans la chaîne d\'approvisionnement multi-niveaux complexe de LVMH.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Le programme environnemental LIFE 360 couvre le climat, la biodiversité, l\'économie circulaire et la traçabilité dans les 75 Maisons.',fill:72,fillColor:'#1a7a4a'},
      {title:'Éco-conception',value:'100%',desc:'Objectif de produits conçus selon les principes de développement durable. Programmes de réparation, revente et location en expansion dans les Maisons clés.',fill:80,fillColor:'#0056b3'},
      {title:'Traçabilité Fournisseurs',value:'Tier 1-3',desc:'Programme complet de traçabilité de la chaîne d\'approvisionnement pour les matières premières dont le cuir, le coton, l\'or et les diamants.',fill:65,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Scope 3 chaîne d\'approvisionnement',pct:92,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Circularité et réparation luxe',pct:85,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Biodiversité et matières premières',pct:78,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Conformité sociale et moyens de subsistance',pct:72,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Empreinte carbone numérique',pct:60,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#FF7900',offer:'Circular Device Lifecycle Management',
        desc:'Programme complet de terminaux mobiles durables pour les 175 000 collaborateurs de LVMH dans le monde — location, reconditionnement certifié, effacement sécurisé des données et recyclage fin de vie.',
        why:'Les 175 000 collaborateurs de LVMH génèrent un volume significatif de déchets de terminaux ; la location circulaire soutient directement le pilier économie circulaire de LIFE 360 avec des résultats mesurables et reportables.',fit:4},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Collecte centralisée des KPI ESG des 75 Maisons et de milliers de fournisseurs pour la conformité CSRD Vague 1 — avec une taxonomie de données alignée ESRS et une piste d\'audit.',
        why:'LVMH doit collecter des données ESG vérifiées de 75 Maisons et de milliers de fournisseurs pour la CSRD Vague 1 — une plateforme centralisée est la seule approche évolutive.',fit:5},
      {pillar:'Frugal AI & Eco-Design',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#FF7900',offer:'Eco-Design (RGESN Framework)',
        desc:'Application des standards d\'éco-conception RGESN aux expériences numériques de LVMH à travers les Maisons — réduction de l\'empreinte carbone numérique des produits et services numériques du luxe.',
        why:'LVMH développe ses expériences numériques à travers les Maisons ; des produits numériques éco-conçus réduisent l\'empreinte carbone numérique liée aux objectifs climat de LIFE 360.',fit:3}
    ],
    frugal:{title:'IA légère pour l\'authentification des produits de luxe et la traçabilité de la chaîne d\'approvisionnement',
      desc:'Remplacement des processus d\'audit manuels par une vérification automatisée efficace et bas carbone pour les chaînes d\'approvisionnement en matières premières de LVMH — soutenant les engagements de traçabilité LIFE 360 pour le cuir, l\'or et les diamants.',
      saving:'Réduction estimée de 70 % du temps d\'audit manuel de la chaîne d\'approvisionnement · Soutient la traçabilité LIFE 360 · Déploiement IA bas carbone'},
    stakeholders:[
      {init:'HG',bg:'#e8f0fb',tc:'#0056b3',name:'Hélène Gauthier',role:'Directrice Développement Durable · LVMH Group',why:'Responsable du programme LIFE 360 — ESG et CSRD',priority:'Priorité 1',ph:true},
      {init:'CD',bg:'#fff3e8',tc:'#e06800',name:'Directeur Digital',role:'Digital & Innovation Groupe · LVMH',why:'Développement durable numérique et éco-conception',priority:'Priorité 1',ph:true},
      {init:'SR',bg:'#edf7f1',tc:'#1a7a4a',name:'Responsable Responsabilité Fournisseurs',role:'Opérations & Supply Chain · LVMH',why:'Traçabilité et données chaîne d\'approvisionnement CSRD',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« LIFE 360 s\'engage sur une traçabilité complète de votre chaîne d\'approvisionnement — comment collectez-vous actuellement les données ESG des 75 Maisons au rythme que la CSRD Vague 1 exige ? »',persona:'Pour : Directrice Développement Durable'},
      {text:'« Votre pilier économie circulaire vise la réparation et la revente — avez-vous évalué un programme de terminaux circulaires pour vos 175 000 collaborateurs comme contribution mesurable et rapide ? »',persona:'Pour : Directeur Digital'},
      {text:'« Quelle Maison présente le plus grand écart entre son ambition de développement durable et son infrastructure de données actuelle — et comment y répondez-vous au niveau du groupe ? »',persona:'Pour : Responsable Responsabilité Fournisseurs'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'Programme LIFE 360',cls:'csrd'},{label:'Scope 3 Chaîne d\'Approvisionnement',cls:'scope3'},{label:'IT for Society',cls:'itgreen'}],
    crmRows:[['Compte','LVMH Moët Hennessy Louis Vuitton','Données publiques'],['Secteur','Luxe & Mode','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','78 / 100 (En progression)','Analyse ESG'],['Engagement net zéro','2050 (programme LIFE 360)','Rapport développement durable'],['Solution principale','ESG Data Platform · Circular Device Lifecycle','Mapping Orange'],['Contact RSE prioritaire','Directrice Développement Durable (responsable LIFE 360)','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Appel découverte : infrastructure données CSRD à travers les 75 Maisons','Recommandé']]
  },

  schneider:{
    name:'Schneider Electric SE', industry:'Gestion de l\'Énergie', hq:'Rueil-Malmaison, France',
    size:'135 000 collaborateurs · 35,9 Mds EUR de chiffre d\'affaires · CAC 40',
    score:94, initials:'SE', color:'#3dcd58', textColor:'white',
    cdpScore:'A', cdpNote:'9 années consécutives sur la A-List CDP ; Entreprise la plus durable au monde 2024 selon TIME/Statista',
    tags:['Gestion de l\'Énergie','Leader ESG','CSRD Vague 1','Pionnier Indice SSI'],
    tagClasses:['ti','tcsrd','tcsrd','ts3'],
    benchmarkData:{industryAvg:72, sectorLeader:94, sectorLeaderScore:94, sectorLeaderName:'Schneider Electric (Leader)', obScore:88, industryLabel:'Moy. Secteur Gestion Énergie',
      sectorLeaderStory:'Schneider Electric EST le leader sectoriel — classé Entreprise la plus durable au monde par TIME/Statista 2024. Son indice SSI suit 11 KPI ESG trimestriellement, publiés et vérifiés de manière indépendante. La prochaine frontière pour Schneider est de s\'assurer que ses propres produits numériques alimentés par l\'IA (EcoStruxure) aient une empreinte carbone minimale — éco-concevoir les outils qui aident les autres à décarboner. Le référentiel d\'éco-conception RGESN et le Carbon Calculator d\'Orange soutiennent exactement cette prochaine phase.',
      orangeRole:'Orange Carbon Calculator + RGESN Eco-Design Framework'},
    leaderQuotes:[
      {name:'Peter Herweck',title:'Ancien CEO, Schneider Electric',quote:'Nous sommes extrêmement honorés d\'être reconnus comme l\'entreprise la plus durable au monde. Nous avons aidé nos clients à réduire leurs émissions carbone — 553 millions de tonnes de CO2 économisées et évitées depuis 2018.',source:'TIME/Statista World\'s Most Sustainable Companies 2024',orangeOpportunity:'Orange Carbon Calculator — Schneider a besoin de données d\'émissions IT fournisseurs vérifiables pour maintenir son statut A-List CDP et la crédibilité de son indice SSI.'},
      {name:'Chris Leong',title:'Directrice Développement Durable, Schneider Electric',quote:'Nous sommes déterminés à continuer de transformer l\'ambition en action. Il y a encore du travail, mais avec le soutien de notre écosystème étendu et de tous nos Impact Makers, nous réussirons.',source:'Q4 2024 Sustainability Results',orangeOpportunity:'Frugal AI & RGESN Eco-Design — s\'assurer que les propres produits numériques de Schneider soient éco-conçus est la prochaine frontière de son programme SSI.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2040',desc:'L\'objectif net zéro le plus ambitieux du secteur de l\'énergie. Couverture complète Scope 1, 2 et 3 incluant l\'utilisation des produits vendus par les clients (Catégorie 11).',fill:95,fillColor:'#1a7a4a'},
      {title:'Programme Fournisseurs',value:'1 000',desc:'Décarbonation obligatoire des fournisseurs — 1 000 fournisseurs stratégiques tenus de définir des objectifs fondés sur la science d\'ici 2025.',fill:82,fillColor:'#0056b3'},
      {title:'Indice SSI',value:'11 KPI',desc:'L\'indice Schneider Sustainability Impact suit 11 KPI ESG trimestriellement, publiés et vérifiés de manière indépendante.',fill:90,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Efficacité énergétique pour les clients',pct:98,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Scope 3 utilisation produits clients',pct:90,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Outils numériques de développement durable',pct:85,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Décarbonation des fournisseurs',pct:80,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Économie circulaire et fin de vie',pct:75,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Orange Carbon Calculator',
        desc:'Fournit à Schneider Electric des données d\'émissions IT fournisseurs vérifiées et auditables pour leur propre reporting Scope 3 — aligné sur ESRS E1 et les exigences de déclaration de leur indice SSI.',
        why:'Schneider a besoin de données d\'émissions IT fournisseurs vérifiées pour son propre reporting Scope 3 — le Carbon Calculator d\'Orange fournit les données fournisseurs auditables qu\'exige l\'indice SSI.',fit:5},
      {pillar:'IT for Green',cls:'bc-green',pcls:'bp-green',pillarColor:'#1a7a4a',offer:'Sustainable Cloud Infrastructure',
        desc:'Cloud écoénergétique avec engagements d\'énergie renouvelable, centres de données optimisés PUE et hébergement neutre en carbone — à la hauteur de l\'engagement net zéro 2040 de Schneider.',
        why:'L\'expansion numérique de Schneider nécessite une infrastructure cloud à la hauteur de son propre engagement net zéro 2040 — le cloud à énergie renouvelable d\'Orange s\'aligne avec les objectifs de l\'indice SSI.',fit:4},
      {pillar:'Frugal AI & Eco-Design',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#FF7900',offer:'Eco-Design (RGESN Framework)',
        desc:'Application des standards d\'éco-conception RGESN à la plateforme EcoStruxure de Schneider pour que ses propres outils de gestion énergétique alimentés par l\'IA aient une empreinte carbone numérique minimale.',
        why:'Schneider développe des produits numériques de gestion énergétique — une architecture éco-conçue réduit l\'empreinte des outils qu\'ils vendent pour aider leurs clients à décarboner.',fit:4}
    ],
    frugal:{title:'Modèles d\'IA dimensionnés pour les analyses de la plateforme EcoStruxure',
      desc:'S\'assurer que les propres outils de gestion énergétique alimentés par l\'IA de Schneider aient une empreinte carbone minimale, en cohérence avec leur engagement net zéro 2040. Le déploiement sur site élimine les émissions de transfert de données cloud.',
      saving:'Réduction estimée de 40–60 % de la consommation énergétique de l\'infrastructure IA · Cohérent avec le KPI SSI #7 (efficacité numérique) · Entièrement auditable'},
    stakeholders:[
      {init:'GH',bg:'#edf7f1',tc:'#1a7a4a',name:'Gilles Huguenin',role:'Directeur Développement Durable · Schneider Electric',why:'Responsable de l\'indice SSI et du programme net zéro 2040',priority:'Priorité 1',ph:true},
      {init:'CTO',bg:'#fff3e8',tc:'#e06800',name:'CTO / Responsable Digital',role:'Plateforme EcoStruxure · Schneider Electric',why:'Développement durable des produits numériques et efficacité de l\'IA',priority:'Priorité 1',ph:true},
      {init:'DS',bg:'#e8f0fb',tc:'#0056b3',name:'Responsable Solutions Énergie Numérique',role:'Outils Développement Durable Client · Schneider',why:'Outils de développement durable orientés client',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Votre indice SSI suit 11 KPI de développement durable trimestriellement — quelle part de cette collecte de données reste manuelle, et où se situent les principaux risques de précision dans votre processus actuel ? »',persona:'Pour : Directeur Développement Durable'},
      {text:'« L\'objectif net zéro de Schneider inclut le Scope 3 des fournisseurs IT — avez-vous évalué Orange Business par rapport à vos exigences de développement durable fournisseurs ? »',persona:'Pour : Directeur Développement Durable'},
      {text:'« Votre plateforme EcoStruxure aide des milliers de clients à décarboner — les composants IA d\'EcoStruxure sont-ils eux-mêmes conçus selon les standards d\'éco-conception RGESN ? »',persona:'Pour : CTO / Direction Digital'}
    ],
    crmTags:[{label:'Leader ESG',cls:'sustainability'},{label:'Vérification Scope 3',cls:'scope3'},{label:'Cloud Durable',cls:'csrd'},{label:'Frugal AI',cls:'itgreen'}],
    crmRows:[['Compte','Schneider Electric SE','Données publiques'],['Secteur','Gestion de l\'Énergie','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','94 / 100 (Leader ESG)','Analyse ESG'],['Engagement net zéro','2040 (Scope 1-3, Indice SSI)','Rapport développement durable'],['Solution principale','Carbon Calculator · Sustainable Cloud · RGESN Eco-Design','Mapping Orange'],['Contact RSE prioritaire','Directeur Développement Durable','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Évaluation ESG fournisseur + audit éco-conception EcoStruxure','Recommandé']]
  },

  total:{
    name:'TotalEnergies SE', industry:'Pétrole & Gaz / Transition Énergétique', hq:'Courbevoie, France',
    size:'101 000 collaborateurs · 218 Mds USD de chiffre d\'affaires · CAC 40',
    score:65, initials:'TE', color:'#e5003a', textColor:'white',
    cdpScore:'A-', cdpNote:'A- détenu depuis 2017 ; a choisi de ne pas être noté en 2025 — refus du plafond B issu des nouveaux critères pétrole et gaz',
    tags:['Transition Pétrole & Gaz','Montée en Puissance Renouvelables','CSRD Vague 1','Défi Scope 3'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:55, sectorLeader:96, sectorLeaderScore:96, sectorLeaderName:'Ørsted (Transition Énergétique)', obScore:88, industryLabel:'Moy. Secteur Pétrole & Gaz',
      sectorLeaderStory:'Ørsted — anciennement compagnie pétrolière et gazière danoise — a réalisé la transition énergétique la plus crédible du secteur, obtenant le statut A-List CDP avec un score ESG de 96 en cédant ses actifs fossiles et en devenant le premier développeur mondial d\'éolien offshore. Sa réduction vérifiée de Scope 3 Catégorie 11 a été construite sur des données énergétiques granulaires et auditables permettant la confiance des investisseurs tout au long de la transition. La plateforme de données ESG et le Carbon Calculator d\'Orange peuvent fournir à TotalEnergies la même crédibilité de mesure sur laquelle Ørsted a bâti son discours investisseur.',
      orangeRole:'Corporate Decarbonisation Roadmap + ESG Data Platform Multi-Country'},
    leaderQuotes:[
      {name:'Patrick Pouyanné',title:'CEO, TotalEnergies',quote:'TotalEnergies n\'est pas une compagnie pétrolière — nous sommes une compagnie multi-énergies. Notre ambition est d\'être un acteur majeur de la transition énergétique.',source:'TotalEnergies Annual Results 2024',orangeOpportunity:'Corporate Decarbonisation Roadmap — TotalEnergies a besoin d\'un plan crédible de réduction Scope 3 Catégorie 11 qui aille au-delà du discours vers une action vérifiée.'},
      {name:'TotalEnergies',title:'Déclaration corporate',quote:'TotalEnergies a obtenu un score A- depuis 2017. Cependant, nous avons décidé de répondre au questionnaire 2025 sans demander de notation, car un score plafonné à B ne refléterait pas pleinement notre stratégie multi-énergies intégrée et équilibrée.',source:'TotalEnergies CDP Page, 2025',orangeOpportunity:'Carbon Emissions Calculator — TotalEnergies a besoin de données précises et auditables sur les émissions IT de ses fournisseurs pour distinguer un véritable leadership climatique d\'une gestion de perception.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Net zéro sur l\'ensemble des opérations et des produits énergétiques vendus. Objectif intermédiaire : 30 % de réduction Scope 1+2 d\'ici 2030. Objectif d\'intensité méthane <0,2 % d\'ici 2025.',fill:62,fillColor:'#1a7a4a'},
      {title:'Objectif Renouvelables',value:'100 GW',desc:'100 gigawatts de capacité d\'énergie renouvelable d\'ici 2030. Actuellement à 39 GW. Nécessite un investissement significatif en infrastructure numérique.',fill:55,fillColor:'#0056b3'},
      {title:'Défi Scope 3',value:'Cat. 11',desc:'L\'utilisation des produits énergétiques vendus (Catégorie 11) représente plus de 90 % de l\'empreinte carbone totale de TotalEnergies — la catégorie Scope 3 la plus difficile à traiter.',fill:40,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Crédibilité émissions produits Scope 3',pct:95,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Rythme de la transition vers les renouvelables',pct:88,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Réduction méthane et torchage',pct:82,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Crédibilité du reporting ESG',pct:70,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Empreinte carbone de l\'infrastructure numérique',pct:55,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'Strategic Decarbonisation',cls:'bc-dark',pcls:'bp-dark',pillarColor:'#444',offer:'Corporate Decarbonisation Roadmap',
        desc:'Conseil et accompagnement de bout en bout pour l\'engagement net zéro 2050 de TotalEnergies — planification crédible et vérifiable de manière indépendante de la réduction Scope 3 Catégorie 11.',
        why:'L\'engagement net zéro 2050 de TotalEnergies nécessite un plan de mise en œuvre crédible et vérifiable de manière indépendante — en particulier pour la Catégorie 11 sous intense scrutin des investisseurs.',fit:5},
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Orange Carbon Calculator',
        desc:'Données transparentes et auditables sur les émissions IT fournisseurs de TotalEnergies dans le cadre de la réduction Scope 1+2 — démontrant des pratiques de mesure crédibles aux agences de notation ESG.',
        why:'TotalEnergies a besoin de données transparentes et auditables sur les émissions de ses fournisseurs IT dans le cadre de la réduction Scope 1+2 et pour démontrer une mesure crédible aux agences de notation ESG.',fit:4},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Platform — Multi-Country',
        desc:'Gérer les données ESG dans plus de 130 pays, de multiples segments énergétiques et les obligations CSRD Vague 1 nécessite une plateforme centralisée et vérifiée réduisant le risque de reporting manuel.',
        why:'Gérer les données ESG dans plus de 130 pays et de multiples segments énergétiques pour la CSRD Vague 1 exige une plateforme centralisée éliminant le risque de reporting manuel.',fit:4}
    ],
    frugal:{title:'IA légère pour le suivi et la maintenance prédictive des actifs d\'énergie renouvelable',
      desc:'Soutenir le déploiement des 100 GW de renouvelables avec des modèles d\'IA efficaces et sur site pour le suivi des actifs éoliens et solaires — évitant les émissions de transfert de données cloud. Déploiement sur site dans les installations éoliennes/solaires minimisant l\'empreinte carbone numérique.',
      saving:'Réduction estimée de 15–20 % des temps d\'arrêt des actifs renouvelables · Sur site = zéro émission cloud · IA frugale conforme aux principes RGESN'},
    stakeholders:[
      {init:'SS',bg:'#edf7f1',tc:'#1a7a4a',name:'SVP Stratégie & Développement Durable',role:'TotalEnergies Group',why:'Net zéro et crédibilité Scope 3',priority:'Priorité 1',ph:true},
      {init:'CD',bg:'#e8f0fb',tc:'#0056b3',name:'Directeur Digital & Innovation',role:'Transformation Numérique · TotalEnergies',why:'Transformation numérique et données ESG',priority:'Priorité 1',ph:true},
      {init:'EC',bg:'#fff3e8',tc:'#e06800',name:'Responsable Climat & Transition Énergétique',role:'Programme 100 GW Renouvelables · TotalEnergies',why:'Programme 100 GW renouvelables',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Le Scope 3 Catégorie 11 de TotalEnergies représente 90 % de votre empreinte — quelle est votre stratégie actuelle pour démontrer des progrès de réduction crédibles aux investisseurs et agences de notation ESG ? »',persona:'Pour : SVP Stratégie & Développement Durable'},
      {text:'« Alors que vous passez de 39 GW à 100 GW de renouvelables d\'ici 2030, quelle infrastructure de données mettez-vous en place pour suivre, reporter et optimiser ce parc d\'actifs ? »',persona:'Pour : Directeur Digital & Innovation'},
      {text:'« Votre déclaration CSRD Vague 1 couvre des opérations dans plus de 130 pays — quel est votre niveau de confiance dans la cohérence et l\'auditabilité des données ESG provenant de chaque région ? »',persona:'Pour : Responsable Climat & Transition Énergétique'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'Scope 3 Critique',cls:'scope3'},{label:'Transition Énergétique',cls:'csrd'},{label:'Décarbonation Stratégique',cls:'itgreen'}],
    crmRows:[['Compte','TotalEnergies SE','Données publiques'],['Secteur','Pétrole & Gaz / Transition Énergétique','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','65 / 100 (En progression)','Analyse ESG'],['Engagement net zéro','2050 (Scope 1-3, utilisation produits)','Rapport développement durable'],['Solution principale','Corporate Decarbonisation Roadmap · ESG Data Platform','Mapping Orange'],['Contact RSE prioritaire','SVP Stratégie & Développement Durable','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Audit crédibilité Scope 3 + revue lacunes données CSRD multi-pays','Recommandé']]
  },

  axa:{
    name:'AXA Group', industry:'Assurance & Finance', hq:'Paris, France',
    size:'145 000 collaborateurs · 102,4 Mds EUR de chiffre d\'affaires · CAC 40',
    score:76, initials:'AX', color:'#00008f', textColor:'white',
    cdpScore:'A-', cdpNote:'Score CDP Climat 2024',
    tags:['Assurance & Finance','Risque Climatique','CSRD Vague 1','Investissement Vert'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:65, sectorLeader:86, sectorLeaderScore:86, sectorLeaderName:'Zurich Insurance Group', obScore:88, industryLabel:'Moy. Secteur Assurance',
      sectorLeaderStory:'Zurich Insurance Group mène le secteur de l\'assurance en matière d\'ESG avec un cadre transparent de risque climatique couvrant l\'ensemble de son portefeuille d\'investissements de plus de 200 Mds EUR. Ses rapports trimestriels d\'intensité carbone du portefeuille — vérifiés selon PCAF — fournissent aux investisseurs des données d\'émissions précises et auditables sur chaque classe d\'actifs. Le facteur différenciant clé : Zurich a investi dans une infrastructure centralisée de données ESG avant que la CSRD ne l\'impose, lui donnant 2 ans d\'avance sur la qualité des données. La plateforme de données ESG d\'Orange offre cette infrastructure pour les 870 Mds EUR d\'actifs sous gestion d\'AXA.',
      orangeRole:'ESG Data Management Platform + Scope 3 Carbon Estimator'},
    leaderQuotes:[
      {name:'Thomas Buberl',title:'CEO, AXA',quote:'Le changement climatique est le risque systémique le plus important auquel nous faisons face en tant qu\'assureur et investisseur. Le rôle d\'AXA est d\'accélérer la transition — pas seulement de gérer le risque.',source:'AXA Climate Report 2024',orangeOpportunity:'Scope 3 Carbon Estimator — les émissions du portefeuille d\'investissement d\'AXA nécessitent un suivi carbone granulaire au niveau des actifs pour soutenir ses engagements net zéro en souscription.'},
      {name:'AXA Group',title:'Engagement corporate',quote:'AXA s\'est engagé à aligner son portefeuille d\'investissement sur une trajectoire 1,5°C et à sortir de la souscription charbon d\'ici 2030 dans les pays de l\'OCDE.',source:'AXA Climate & Biodiversity Report 2024',orangeOpportunity:'ESG Data Platform — gérer et reporter l\'alignement climatique sur le portefeuille d\'investissement de plusieurs milliers de milliards d\'euros d\'AXA nécessite une infrastructure de données ESG d\'envergure entreprise.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Net zéro sur le portefeuille d\'investissement (870 Mds EUR d\'actifs sous gestion) et les opérations propres. Objectif de 26 Mds EUR d\'investissements verts atteint en 2023. Aligné TCFD depuis 2019.',fill:74,fillColor:'#1a7a4a'},
      {title:'Sortie du Charbon',value:'2030/2040',desc:'Sortie de la souscription et des investissements charbon d\'ici 2030 (pays OCDE) et 2040 mondialement. Politique renforcée d\'exclusion du charbon thermique.',fill:78,fillColor:'#0056b3'},
      {title:'Actifs Verts',value:'26 Mds EUR',desc:'Objectif de 26 Mds EUR d\'investissements verts atteint. Intégration ESG dans 100 % des décisions d\'investissement. Scénarios de risque climatique intégrés dans tous les modèles de souscription.',fill:68,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Risque climatique du portefeuille d\'investissement',pct:90,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Données ESG pour le reporting des actifs sous gestion',pct:85,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Émissions financées Scope 3',pct:80,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Empreinte carbone des opérations IT',pct:70,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Produits d\'assurance durables',pct:55,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Collecte et agrégation centralisées de données ESG sur le portefeuille d\'investissement de 870 Mds EUR d\'AXA pour les déclarations CSRD et TCFD — avec taxonomie de données ESRS automatisée.',
        why:'AXA doit collecter et agréger des données ESG sur 870 Mds EUR d\'investissements pour les déclarations CSRD et TCFD — un défi de données nécessitant une infrastructure d\'envergure entreprise.',fit:5},
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Orange Carbon Calculator',
        desc:'Données vérifiées et auditables sur l\'empreinte carbone de tous les services Orange Business consommés par AXA — essentielles pour la déclaration ESRS E1 des émissions IT et le Scope 3 fournisseurs.',
        why:'Les propres opérations numériques d\'AXA nécessitent une comptabilité carbone vérifiée pour la déclaration ESRS E1 — et pour montrer l\'exemple en tant que premier assureur mondial du risque climatique.',fit:4},
      {pillar:'Strategic Decarbonisation',cls:'bc-dark',pcls:'bp-dark',pillarColor:'#444',offer:'Scope 3 Carbon Estimator & Supplier Engagement',
        desc:'Mesure par IoT et suivi automatisé des émissions Scope 3 financées d\'AXA (Catégorie 15) sur son portefeuille d\'investissement. Intègre la méthodologie PCAF.',
        why:'Les émissions financées du portefeuille d\'investissement d\'AXA (Catégorie 15) représentent l\'essentiel de son impact climatique — sans mesure crédible, la validation SBTi est impossible.',fit:5}
    ],
    frugal:{title:'IA légère pour l\'évaluation du risque climatique en souscription d\'assurance',
      desc:'Des modèles NLP dimensionnés analysent l\'exposition climatique dans les décisions de souscription sans la surcharge carbone des grands modèles fondationnels — soutenant l\'ambition d\'AXA d\'intégrer le risque climatique dans chaque décision tarifaire à grande échelle avec une empreinte numérique minimale.',
      saving:'Réduction estimée de 50 % des coûts de traitement des données de risque climatique · Option sur site disponible · Empreinte carbone numérique minimale'},
    stakeholders:[
      {init:'AC',bg:'#edf7f1',tc:'#1a7a4a',name:'Amanda Clack',role:'Directrice Développement Durable Groupe · AXA',why:'Stratégie d\'investissement net zéro et reporting CSRD',priority:'Priorité 1',ph:true},
      {init:'CIO',bg:'#e8f0fb',tc:'#0056b3',name:'Directeur des Investissements',role:'AXA Investment Managers',why:'Intégration ESG sur 870 Mds EUR d\'actifs sous gestion',priority:'Priorité 1',ph:true},
      {init:'CTO',bg:'#fff3e8',tc:'#e06800',name:'Directeur Technologie Groupe',role:'AXA Group Technology',why:'Empreinte carbone IT et développement durable numérique',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« L\'alignement TCFD d\'AXA engage à une déclaration de risque climatique au niveau du portefeuille — comment collectez-vous actuellement les données ESG vérifiées des sociétés en portefeuille à l\'échelle que la CSRD exige désormais ? »',persona:'Pour : Directrice Développement Durable'},
      {text:'« Vos émissions financées de Catégorie 15 représentent la majorité de votre empreinte Scope 3 — quelle est votre méthodologie actuelle pour mesurer et valider ces données avant la soumission SBTi ? »',persona:'Pour : Directeur des Investissements'},
      {text:'« Les propres opérations IT d\'AXA sont une exigence de déclaration ESRS E1 — avez-vous évalué les empreintes carbone de vos fournisseurs IT, dont Orange Business, dans le cadre de votre comptabilité Scope 3 numérique ? »',persona:'Pour : Directeur Technologie Groupe'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'CSRD Vague 1',cls:'csrd'},{label:'Scope 3 Financé',cls:'scope3'},{label:'IT for Society',cls:'itgreen'}],
    crmRows:[['Compte','AXA Group','Données publiques'],['Secteur','Assurance & Finance','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','76 / 100 (En progression)','Analyse ESG'],['Engagement net zéro','2050 (actifs sous gestion + opérations)','Rapport développement durable'],['Solution principale','ESG Data Platform · Scope 3 Estimator · Carbon Calculator','Mapping Orange'],['Contact RSE prioritaire','Directrice Développement Durable Groupe','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Évaluation infrastructure données ESG portefeuille + audit carbone IT','Recommandé']]
  },

  danone:{
    name:'Danone SA', industry:'Agroalimentaire', hq:'Paris, France',
    size:'100 000 collaborateurs · 27,6 Mds EUR de chiffre d\'affaires · CAC 40',
    score:83, initials:'DA', color:'#009fe3', textColor:'white',
    cdpScore:'A', cdpNote:'Score CDP Climat 2024',
    tags:['Agroalimentaire','Agriculture Régénératrice','CSRD Vague 1','Nature Positive'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:62, sectorLeader:80, sectorLeaderScore:80, sectorLeaderName:'Nestlé', obScore:88, industryLabel:'Moy. Agroalimentaire',
      sectorLeaderStory:'Nestlé a construit le programme de mesure Scope 3 agricole le plus structuré du secteur agroalimentaire, utilisant un suivi par IoT sur plus de 500 000 exploitations pour suivre les émissions de l\'approvisionnement en lait, cacao et café. Leurs données d\'intensité carbone au niveau des exploitations — mises à jour trimestriellement — fournissent aux investisseurs des preuves crédibles de la trajectoire de réduction de 30 % du Scope 3. Le Scope 3 Estimator d\'Orange offre une capacité de mesure équivalente au niveau des exploitations pour les 100 000+ fournisseurs agricoles de Danone.',
      orangeRole:'Scope 3 Supplier Carbon Estimator + ESG Data Management Platform'},
    leaderQuotes:[
      {name:'Antoine de Saint-Affrique',title:'CEO, Danone',quote:'Danone a été fondée sur l\'idée que le succès économique et le progrès social ne sont pas seulement compatibles — ils sont indissociables. Nous renforçons cette conviction.',source:'Danone Annual Report 2024',orangeOpportunity:'ESG Data Collection Platform — la certification B Corp de Danone sur l\'ensemble de son portefeuille exige une collecte continue de données ESG sur tous les marchés et gammes de produits.'},
      {name:'Danone',title:'Engagement corporate',quote:'Nous nous engageons à devenir entièrement neutre en carbone sur l\'ensemble de notre chaîne de valeur d\'ici 2050, avec une réduction absolue de 30 % des émissions d\'ici 2030.',source:'Danone Climate Policy 2024',orangeOpportunity:'Scope 3 Supplier Carbon Estimator — la filière laitière de Danone représente plus de 60 % de son empreinte Scope 3 et nécessite un suivi automatisé des émissions fournisseurs.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Objectifs fondés sur la science validés SBTi — 50 % de réduction Scope 1 et 2 et 30 % de réduction Scope 3 d\'ici 2030. La chaîne d\'approvisionnement agricole représente 90 % de l\'empreinte totale.',fill:82,fillColor:'#1a7a4a'},
      {title:'Agriculture Régénératrice',value:'50%',desc:'50 % d\'ingrédients issus de l\'agriculture régénératrice d\'ici 2030. Plus de 100 000 exploitations engagées dans le monde à travers les activités lait, eau et végétal.',fill:70,fillColor:'#0056b3'},
      {title:'Emballages',value:'100 % recyclable',desc:'Emballages 100 % recyclables, réutilisables ou compostables d\'ici 2025. Réduction de 50 % du plastique vierge par rapport à la base 2019.',fill:75,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Émissions Scope 3 agricoles',pct:92,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Réduction emballages et plastiques',pct:85,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Gestion de la ressource en eau',pct:78,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Qualité des données ESG chaîne d\'approvisionnement',pct:72,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Empreinte carbone numérique',pct:48,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#1a7a4a',offer:'Scope 3 Carbon Estimator & Supplier Engagement',
        desc:'Mesure par IoT et suivi automatisé des émissions Scope 3 agricoles de Danone sur plus de 100 000 exploitations, avec portail d\'engagement fournisseurs pour la collecte de données vérifiées.',
        why:'90 % de l\'empreinte Scope 3 de Danone se situe dans la chaîne d\'approvisionnement agricole — le suivi IoT des émissions au niveau des exploitations est essentiel à la validation SBTi et à la déclaration CSRD.',fit:5},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Collecte centralisée des KPI ESG de plus de 100 000 exploitations et sites de production pour la conformité CSRD et le reporting de progression SBTi — avec détection automatisée des anomalies.',
        why:'Collecter des données ESG vérifiées de 100 000+ exploitations pour la CSRD et la validation SBTi est un défi massif de données — une plateforme structurée élimine les risques de qualité.',fit:5},
      {pillar:'IT for Green',cls:'bc-blue',pcls:'bp-blue',pillarColor:'#1a7a4a',offer:'Circular Device Lifecycle Management',
        desc:'Programme complet de terminaux mobiles durables pour les 100 000 collaborateurs de Danone — location circulaire avec reconditionnement certifié réduisant les émissions Scope 3 catégorie 2.',
        why:'Les engagements d\'économie circulaire de Danone s\'étendent à ses propres terminaux opérationnels — la location circulaire de mobiles réduit directement les émissions Scope 3 biens d\'équipement.',fit:3}
    ],
    frugal:{title:'IA légère pour l\'estimation des émissions agricoles par imagerie satellite',
      desc:'Remplacement des coûteuses enquêtes terrain par une estimation efficace des émissions par IA basée sur l\'imagerie satellite — couvrant plus de 100 000 exploitations dans le monde avec une empreinte de calcul minimale. Soutient la validation SBTi et les données Scope 3 agricoles CSRD de Danone.',
      saving:'Réduction estimée de 80 % des coûts de collecte de données agricoles · Couvre 100 000+ exploitations · Conforme aux principes d\'IA responsable RGESN'},
    stakeholders:[
      {init:'CV',bg:'#edf7f1',tc:'#1a7a4a',name:'Cécile Cabanis',role:'Directrice Développement Durable · Danone',why:'Objectifs SBTi et stratégie Scope 3 agricole',priority:'Priorité 1',ph:true},
      {init:'VP',bg:'#fff3e8',tc:'#e06800',name:'VP Approvisionnement Agricole',role:'Achats Monde · Danone',why:'Données ESG au niveau des exploitations et agriculture régénératrice',priority:'Priorité 1',ph:true},
      {init:'CTO',bg:'#e8f0fb',tc:'#0056b3',name:'Directeur Technologie',role:'Digital Groupe · Danone',why:'Infrastructure numérique et plateforme données ESG',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Les objectifs SBTi de Danone exigent 30 % de réduction Scope 3 d\'ici 2030 — comment collectez-vous et vérifiez-vous actuellement les données carbone de vos 100 000+ fournisseurs agricoles au rythme requis par la validation SBTi ? »',persona:'Pour : Directrice Développement Durable'},
      {text:'« Votre déclaration CSRD Vague 1 exige des données ESRS E1 sur l\'ensemble de votre chaîne de valeur — quel pourcentage de vos données Scope 3 agricoles repose actuellement sur des estimations plutôt que sur des mesures vérifiées ? »',persona:'Pour : VP Approvisionnement Agricole'},
      {text:'« Alors que Danone développe son programme d\'agriculture régénératrice, quelle infrastructure numérique mettez-vous en place pour capturer, vérifier et reporter les résultats environnementaux aux investisseurs et régulateurs ? »',persona:'Pour : Directeur Technologie'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'Scope 3 Critique',cls:'scope3'},{label:'CSRD Vague 1',cls:'csrd'},{label:'IT for Green',cls:'itgreen'}],
    crmRows:[['Compte','Danone SA','Données publiques'],['Secteur','Agroalimentaire','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','83 / 100 (Avancé)','Analyse ESG'],['Engagement net zéro','2050 (validé SBTi, intermédiaire 2030)','Rapport développement durable'],['Solution principale','Scope 3 Estimator · ESG Data Platform','Mapping Orange'],['Contact RSE prioritaire','Directrice Développement Durable','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Session découverte infrastructure données Scope 3 agricole','Recommandé']]
  },

  airbus:{
    name:'Airbus SE', industry:'Aéronautique & Défense', hq:'Toulouse, France',
    size:'135 000 collaborateurs · 65,4 Mds EUR de chiffre d\'affaires · CAC 40',
    score:68, initials:'AB', color:'#003070', textColor:'white',
    cdpScore:'B', cdpNote:'A cessé le reporting CDP public en 2025',
    tags:['Aéronautique','Aviation Durable','Net Zéro 2050','Scope 3 Chaîne d\'Approvisionnement'],
    tagClasses:['ti','tsc','tcsrd','ts3'],
    benchmarkData:{industryAvg:58, sectorLeader:79, sectorLeaderScore:79, sectorLeaderName:'Safran Group', obScore:88, industryLabel:'Moy. Secteur Aéronautique',
      sectorLeaderStory:'Safran Group mène le secteur aéronautique en matière d\'ESG avec un programme complet de suivi des émissions de production sur 28 sites, alimentant des déclarations CSRD conformes ESRS E1 avec des données usines en temps réel. Leur programme d\'engagement ESG fournisseurs — couvrant 700 fournisseurs stratégiques avec des soumissions trimestrielles de données carbone — établit la référence aéronautique pour la transparence Scope 3 Catégorie 1. Le Smart Eco-Energy et la plateforme de données ESG d\'Orange répliquent cette capacité pour l\'empreinte industrielle plus large et plus complexe d\'Airbus.',
      orangeRole:'Smart Eco-Energy for Manufacturing + Corporate Decarbonisation Roadmap'},
    leaderQuotes:[
      {name:'Guillaume Faury',title:'CEO, Airbus',quote:'Décarboner l\'aviation est le défi majeur de notre génération. Airbus s\'engage à mettre sur le marché un avion commercial zéro émission d\'ici 2035.',source:'Airbus Summit 2024',orangeOpportunity:'Corporate Decarbonisation Roadmap — Airbus a besoin d\'un plan de décarbonation intermédiaire crédible pour ses opérations de production pendant que la technologie de l\'avion hydrogène arrive à maturité.'},
      {name:'Julie Kitcher',title:'Directrice Développement Durable, Airbus',quote:'Nos fournisseurs représentent une part significative de notre empreinte carbone. Les engager dans la décarbonation n\'est pas optionnel — c\'est au cœur de notre trajectoire net zéro.',source:'Airbus Sustainability Report 2024',orangeOpportunity:'Scope 3 Supplier Carbon Estimator — Airbus a besoin de données automatisées Scope 3 catégorie 1 de sa chaîne d\'approvisionnement aéronautique complexe pour un reporting net zéro crédible.'}
    ],
    esg:[
      {title:'Objectif Net Zéro',value:'2050',desc:'Programme avion neutre en carbone d\'ici 2035. Net zéro complet Scope 1-3 d\'ici 2050 avec objectifs intermédiaires 2030 pour les opérations. Investissement hydrogène et SAF en accélération.',fill:65,fillColor:'#1a7a4a'},
      {title:'Engagement SAF',value:'10 % d\'ici 2030',desc:'Objectif d\'incorporation de 10 % de SAF d\'ici 2030 dans l\'aviation commerciale. Collaboration avec les compagnies aériennes, gouvernements et producteurs de carburant pour accélérer le développement de la filière SAF.',fill:55,fillColor:'#0056b3'},
      {title:'Scope 3 Cycle de Vie',value:'Catégorie 11',desc:'Plus de 75 % des émissions totales proviennent de la phase d\'utilisation des avions (Scope 3 Catégorie 11). Programme d\'approvisionnement responsable couvrant les fournisseurs Tier 1 et Tier 2.',fill:60,fillColor:'#FF7900'}
    ],
    topics:[
      {name:'Émissions phase d\'utilisation produit (Scope 3)',pct:95,badge:'Critique',badgeBg:'#fdecea',badgeColor:'#c0392b'},
      {name:'Décarbonation de la chaîne d\'approvisionnement',pct:85,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Énergie industrielle et Scope 1/2',pct:70,badge:'Élevé',badgeBg:'#FFF3E8',badgeColor:'#E06800'},
      {name:'Économie circulaire et fin de vie',pct:60,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'},
      {name:'Empreinte carbone numérique',pct:52,badge:'Moyen',badgeBg:'#fef3e2',badgeColor:'#944d00'}
    ],
    solutions:[
      {pillar:'IT for Green',cls:'bc-orange',pcls:'bp-orange',pillarColor:'#FF7900',offer:'Smart Eco-Energy for Manufacturing Sites',
        desc:'Gestion énergétique par IoT sur les 35+ sites de production d\'Airbus en France, Allemagne, Espagne et au Royaume-Uni — suivi en temps réel et tableaux de bord KPI carbone alignés ESRS E1.',
        why:'Les 35+ sites de production d\'Airbus génèrent des émissions Scope 1 et 2 significatives ; le suivi intelligent de l\'énergie est le levier le plus rapide pour démontrer les progrès dans les déclarations CSRD.',fit:4},
      {pillar:'Strategic Decarbonisation',cls:'bc-dark',pcls:'bp-dark',pillarColor:'#444',offer:'Corporate Decarbonisation Roadmap',
        desc:'Conseil de bout en bout pour la planification de réduction Scope 3 d\'Airbus — plan de mise en œuvre crédible et vérifiable de manière indépendante pour les émissions de Catégorie 11 (utilisation des produits).',
        why:'Airbus a besoin d\'un plan crédible et vérifiable de réduction Scope 3 pour la Catégorie 11 qui fait face à un scrutin intense des investisseurs et des régulateurs.',fit:5},
      {pillar:'IT for Society',cls:'bc-green',pcls:'bp-green',pillarColor:'#0056b3',offer:'ESG Data Management Platform',
        desc:'Collecte de données conforme à la CSRD sur le réseau de fournisseurs Tier 1-2 d\'Airbus et plus de 35 pays — reporting consolidé ESRS E1 et E2 sur la production et la chaîne d\'approvisionnement.',
        why:'La CSRD Vague 1 exige un reporting ESG consolidé sur 135 000 collaborateurs et des fournisseurs Tier 1-3 dans plus de 35 pays — un défi de données qu\'Orange est positionné pour résoudre.',fit:4}
    ],
    frugal:{title:'IA légère pour l\'optimisation énergétique par maintenance prédictive sur les sites de production',
      desc:'Déploiement de modèles d\'IA sur site dans les usines Airbus pour détecter les anomalies énergétiques et optimiser les plannings de maintenance — minimisant la surcharge carbone numérique tout en réduisant le gaspillage énergétique industriel. Conforme au RGESN, sélection transparente des modèles.',
      saving:'Réduction estimée de 8–15 % du gaspillage énergétique industriel · Sur site = zéro émission de transfert de données cloud · Conforme au RGESN'},
    stakeholders:[
      {init:'EL',bg:'#edf7f1',tc:'#1a7a4a',name:'Edouard Lauga',role:'VP Développement Durable & Environnement · Airbus',why:'Stratégie net zéro et émissions produits Scope 3',priority:'Priorité 1',ph:true},
      {init:'IS',bg:'#e8f0fb',tc:'#0056b3',name:'Responsable Systèmes Industriels',role:'IT Industriel & Opérations · Airbus',why:'Suivi énergétique usines et infrastructure IoT',priority:'Priorité 1',ph:true},
      {init:'SC',bg:'#fff3e8',tc:'#e06800',name:'Responsable ESG Supply Chain',role:'Achats Monde · Airbus',why:'Données Scope 3 fournisseurs et conformité CSRD',priority:'Priorité 2',ph:false}
    ],
    questions:[
      {text:'« Les 35+ sites de production d\'Airbus génèrent des émissions Scope 1 et 2 significatives — comment suivez-vous et reportez-vous actuellement la consommation énergétique au niveau des sites en temps réel pour votre déclaration CSRD E1 ? »',persona:'Pour : VP Développement Durable & Environnement'},
      {text:'« Le Scope 3 Catégorie 11 (phase d\'utilisation des avions) représente plus de 75 % de votre empreinte totale — quelle est votre stratégie pour démontrer des progrès de réduction crédibles aux investisseurs et agences de notation ESG ? »',persona:'Pour : VP Développement Durable'},
      {text:'« Votre déclaration CSRD Vague 1 couvre des opérations dans plus de 35 pays — quel est votre niveau de confiance dans la cohérence et l\'auditabilité des données ESG provenant de chaque région industrielle ? »',persona:'Pour : Responsable ESG Supply Chain'}
    ],
    crmTags:[{label:'Opportunité Développement Durable',cls:'sustainability'},{label:'Énergie Industrielle',cls:'itgreen'},{label:'CSRD Vague 1',cls:'csrd'},{label:'Scope 3 Critique',cls:'scope3'}],
    crmRows:[['Compte','Airbus SE','Données publiques'],['Secteur','Aéronautique & Défense','Données publiques'],['Type d\'opportunité','Solution Développement Durable','Auto-taggé'],['Score maturité ESG','68 / 100 (En progression)','Analyse ESG'],['Engagement net zéro','2050 (avion neutre en carbone d\'ici 2035)','Rapport développement durable'],['Solution principale','Smart Eco-Energy · Corporate Decarbonisation Roadmap · ESG Platform','Mapping Orange'],['Contact RSE prioritaire','VP Développement Durable & Environnement','Documents publics'],['Statut CSRD','Vague 1 — Exercice 2024','Rapport annuel'],['Prochaine action','Pilote suivi énergétique usines + évaluation lacunes données CSRD','Recommandé']]
  }
};

