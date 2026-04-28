// src/lib/services-data.js
// All AZGREEN services, grouped by category

export const serviceCategories = [
  {
    id: 'assessment',
    label: 'Assessment & Documentation',
    labelAz: 'Qiymətləndirmə və Sənədləşdirmə',
  },
  {
    id: 'management',
    label: 'Management & Strategy',
    labelAz: 'İdarəetmə və Strategiya',
  },
  {
    id: 'technical',
    label: 'Technical & Monitoring',
    labelAz: 'Texniki və Monitorinq',
  },
  {
    id: 'engagement',
    label: 'Training & Engagement',
    labelAz: 'Təlim və İştirak',
  },
]

export const services = [
  {
    slug: 'eia',
    category: 'assessment',
    title: 'Environmental Impact Assessment',
    titleAz: 'Ətraf Mühitə Təsirin Qiymətləndirilməsi',
    abbr: 'EIA',
    shortDesc: 'Independent assessment of environmental consequences for proposed projects in Azerbaijan, compliant with national legislation and international standards.',
    shortDescAz: 'Azərbaycanda təklif olunan layihələr üçün müstəqil ekoloji qiymətləndirmə.',
    fullDesc: `AZGREEN delivers full-scope Environmental Impact Assessment (EIA) services for projects across Azerbaijan. Our assessments comply with the Law No. 1175-VQ (12 June 2018) and meet the requirements of international financial institutions including the World Bank, EBRD, and ADB.

We assess baseline environmental conditions, predict project impacts, and propose mitigation measures. Our EIA reports are accepted by Azerbaijani regulatory authorities and international lenders.

Our EIA scope includes:
- Baseline environmental surveys and data collection
- Air quality and noise impact assessment
- Hydrological and hydrogeological analysis
- Ecological and biodiversity surveys
- Soil and groundwater assessment
- Waste characterisation
- Environmental management and monitoring plans`,
    fullDescAz: `AZGREEN Azərbaycan üzrə layihələr üçün tam həcmli EIA xidmətləri göstərir.`,
    keywords: ['EIA Azerbaijan', 'environmental impact assessment Azerbaijan', 'ətraf mühitə təsirin qiymətləndirilməsi', 'EIA Baku', 'ecological assessment Azerbaijan'],
    icon: 'FileSearch',
  },
  {
    slug: 'esia',
    category: 'assessment',
    title: 'Environmental & Social Impact Assessment',
    titleAz: 'Ekoloji və Sosial Təsirin Qiymətləndirilməsi',
    abbr: 'ESIA',
    shortDesc: 'Comprehensive ESIA studies meeting World Bank, EBRD, ADB and IsDB performance standards for projects in Azerbaijan and the region.',
    shortDescAz: 'Beynəlxalq maliyyə institutlarının tələblərinə uyğun ESIA tədqiqatları.',
    fullDesc: `AZGREEN's certified ESIA specialists deliver comprehensive Environmental and Social Impact Assessments for major infrastructure, energy, and industrial projects in Azerbaijan.

Our team holds official certifications under Azerbaijani environmental legislation and has delivered ESIAs for projects financed by the World Bank, EBRD, ADB, and IsDB.

Full ESIA delivery includes:
- Noise, air quality, and dispersion modelling
- Hydrological and hydrogeological modelling
- Environmental monitoring programs
- Field data collection and laboratory sampling
- Comprehensive social engagement and public consultations
- Stakeholder mapping and grievance mechanisms
- Environmental and Social Management Plans (ESMP)
- Complete permitting support with regulatory authorities
- Fast response to reviewer comments`,
    fullDescAz: `AZGREEN-in sertifikatlı ESIA mütəxəssisləri Azərbaycanda böyük layihələr üçün hərtərəfli qiymətləndirmə aparır.`,
    keywords: ['ESIA Azerbaijan', 'environmental social impact assessment Baku', 'ESIA Azerbaijani standard', 'World Bank ESIA Azerbaijan', 'EBRD ESIA Azerbaijan'],
    icon: 'ClipboardList',
  },
  {
    slug: 'environmental-documentation',
    category: 'assessment',
    title: 'Environmental Documentation & Permits',
    titleAz: 'Normativ Ekoloji Texniki Sənədlər',
    abbr: null,
    shortDesc: 'Full preparation of statutory environmental documents and permits required under Azerbaijani legislation for construction and industrial operations.',
    shortDescAz: 'Azərbaycan qanunvericiliyinə əsasən bütün ekoloji sənədlərin hazırlanması.',
    fullDesc: `AZGREEN prepares the complete suite of environmental documentation required by Azerbaijani law for construction projects, industrial facilities, and operational businesses.

Our documentation services include:
- Environmental Protection Plan for Construction Projects
- Environmental Reviews and Special Permits (air quality, discharge)
- Environmental and Social Action Plan (ESAP)
- Inventory of Atmospheric Pollutants and Emission Sources
- Technical Passport for Dust Collectors and Air Cleaning Systems
- Environmental Statistical Reports (2-TG: Air, Water, Waste)
- Ecological Passport
- Permissible Emission Limit (ABTH) calculations
- Permissible Discharge Limit (BBAH) calculations
- Hazardous Waste Passport

All documentation is prepared in compliance with current Azerbaijani environmental legislation and submitted to the relevant regulatory authorities.`,
    fullDescAz: `AZGREEN tikinti və sənaye müəssisələri üçün tələb olunan bütün ekoloji sənədləri hazırlayır.`,
    keywords: ['normativ ekoloji sənədlər', 'environmental permits Azerbaijan', 'ABTH Azerbaijan', 'ecological passport Azerbaijan', 'environmental documentation Baku'],
    icon: 'FileText',
  },
  {
    slug: 'social-impact',
    category: 'assessment',
    title: 'Social Impact Assessment',
    titleAz: 'Sosial Təsirin Qiymətləndirilməsi',
    abbr: 'SIA',
    shortDesc: 'Structured assessment of project effects on communities, livelihoods, and social fabric, with engagement programs and grievance mechanisms.',
    shortDescAz: 'Layihənin icmaya və sosial mühitə təsirinin qiymətləndirilməsi.',
    fullDesc: `Social Impact Assessment evaluates how a project affects people, communities, and their livelihoods. AZGREEN conducts SIAs for projects across sectors in Azerbaijan, coordinating directly with affected communities and regulatory stakeholders.

Our SIA scope includes:
- Baseline socioeconomic surveys
- Community mapping and stakeholder identification
- Livelihood impact analysis
- Resettlement and compensation assessment
- Public consultation organisation and documentation
- Grievance mechanism design and management
- Social Management Plans`,
    fullDescAz: `Sosial Təsirin Qiymətləndirilməsi layihənin insanlara və icmalara olan təsirini müəyyən edir.`,
    keywords: ['social impact assessment Azerbaijan', 'SIA Baku', 'community engagement Azerbaijan', 'stakeholder consultation Azerbaijan'],
    icon: 'Users',
  },
  {
    slug: 'water-resource-management',
    category: 'management',
    title: 'Water Resource Management',
    titleAz: 'Su Resurslarının İdarə Edilməsi',
    abbr: null,
    shortDesc: 'Water assessment plans, resource management strategies, and compliance documentation for responsible use and discharge in Azerbaijan.',
    shortDescAz: 'Su ehtiyatlarının qorunması və idarə edilməsi üzrə həllər.',
    fullDesc: `AZGREEN provides comprehensive water resource management services covering assessment, planning, and regulatory compliance for projects operating in Azerbaijan.

Services include:
- Water Assessment Plans
- Hydrological and hydrogeological modelling
- Water quality baseline surveys and sampling
- Surface and groundwater impact assessment
- Permissible Discharge Limit (BBAH) calculations
- Water monitoring program design
- Irrigation and water supply system assessment
- Water efficiency strategies`,
    fullDescAz: `AZGREEN su resurslarının idarə edilməsi sahəsində hərtərəfli xidmətlər göstərir.`,
    keywords: ['water management Azerbaijan', 'water assessment plan Baku', 'su idarəetməsi Azərbaycan', 'hydrology assessment Azerbaijan', 'water quality Azerbaijan'],
    icon: 'Droplets',
  },
  {
    slug: 'waste-management',
    category: 'management',
    title: 'Waste Management & Consultation',
    titleAz: 'Tullantıların İdarə Edilməsi',
    abbr: null,
    shortDesc: 'Waste characterisation, management strategy development, and regulatory documentation for construction, industrial, and operational waste streams in Azerbaijan.',
    shortDescAz: 'Tikinti, sənaye və əməliyyat tullantılarının idarə edilməsi.',
    fullDesc: `AZGREEN delivers waste management consultation from strategy through to implementation and regulatory compliance.

Services include:
- Waste stream characterisation and audit
- Hazardous Waste Passport preparation
- Waste management plans for construction and operations
- Sustainable waste reduction strategies
- Compliance with Azerbaijani waste legislation
- GIS-assisted waste mapping (in collaboration with Azercosmos)`,
    fullDescAz: `AZGREEN tullantı axınlarının xarakteristikasından tutmuş tənzimləyici uyğunluğa qədər məsləhət xidmətləri göstərir.`,
    keywords: ['waste management Azerbaijan', 'hazardous waste Azerbaijan', 'tullantı idarəetməsi Azərbaycan', 'waste management plan Baku'],
    icon: 'Recycle',
  },
  {
    slug: 'sustainability-strategy',
    category: 'management',
    title: 'Sustainability Strategy & ESG',
    titleAz: 'Davamlılıq Strategiyası və ESG',
    abbr: 'ESG',
    shortDesc: 'Development of sustainability strategies and ESG frameworks aligned with organisational goals, regulatory requirements, and international reporting standards.',
    shortDescAz: 'Beynəlxalq standartlara uyğun davamlılıq strategiyaları və ESG çərçivələri.',
    fullDesc: `AZGREEN assists organisations in Azerbaijan and the region to develop credible sustainability strategies and ESG frameworks.

Services include:
- Sustainability strategy formulation
- ESG gap analysis and roadmap
- Environmental, Social, and Governance (ESG) consultancy
- Carbon footprint studies and reduction pathways
- Climate risk assessment
- ESG reporting aligned with GRI, SASB, or TCFD frameworks
- Internal sustainability audits`,
    fullDescAz: `AZGREEN təşkilatlara davamlılıq strategiyaları və ESG çərçivələri hazırlamaqda kömək edir.`,
    keywords: ['ESG consultancy Azerbaijan', 'sustainability strategy Baku', 'ESG Azerbaijan', 'carbon footprint Azerbaijan', 'GRI reporting Azerbaijan'],
    icon: 'BarChart3',
  },
  {
    slug: 'climate-change',
    category: 'management',
    title: 'Climate Change Mitigation & Adaptation',
    titleAz: 'İqlim Dəyişikliyinin Azaldılması və Adaptasiya',
    abbr: null,
    shortDesc: 'Science-based strategies to reduce greenhouse gas emissions and build climate resilience for projects and organisations operating in Azerbaijan.',
    shortDescAz: 'İqlim dəyişikliyinə uyğunlaşma strategiyaları.',
    fullDesc: `AZGREEN develops climate mitigation and adaptation strategies grounded in current climate science and aligned with Azerbaijan's national commitments under the Paris Agreement.

Services include:
- Greenhouse gas (GHG) emissions inventory
- Carbon footprint analysis
- Scenario-based climate risk assessment
- Mitigation measure identification and prioritisation
- Adaptation planning for climate-sensitive sectors
- Integration with ESIA and sustainability strategies`,
    fullDescAz: `AZGREEN iqlim dəyişikliyinə qarşı mübarizə strategiyaları hazırlayır.`,
    keywords: ['climate change Azerbaijan', 'GHG emissions Azerbaijan', 'carbon footprint study Baku', 'climate adaptation Azerbaijan', 'iqlim dəyişikliyi Azərbaycan'],
    icon: 'Wind',
  },
  {
    slug: 'environmental-monitoring',
    category: 'technical',
    title: 'Environmental Monitoring',
    titleAz: 'Ətraf Mühit Monitorinqi',
    abbr: null,
    shortDesc: 'Field-based monitoring of air, water, soil, and noise at project sites across Azerbaijan, with laboratory analysis and compliance reporting.',
    shortDescAz: 'Azərbaycanda layihə sahələrində hava, su, torpaq və səs-küy monitorinqi.',
    fullDesc: `AZGREEN conducts systematic environmental monitoring programs for construction, operational, and post-closure phases of projects across Azerbaijan.

Monitoring services include:
- Ambient air quality monitoring
- Stack emission measurements
- Noise and vibration monitoring
- Surface and groundwater quality sampling
- Soil contamination surveys
- Ecological baseline monitoring
- Laboratory sample analysis
- Compliance reports for regulatory submission
- Environmental monitoring plan design`,
    fullDescAz: `AZGREEN Azərbaycanda layihə sahələrində sistematik ətraf mühit monitorinqi həyata keçirir.`,
    keywords: ['environmental monitoring Azerbaijan', 'air quality monitoring Baku', 'ətraf mühit monitorinqi Azərbaycan', 'water quality monitoring Azerbaijan', 'noise monitoring Azerbaijan'],
    icon: 'Activity',
  },
  {
    slug: 'gis-remote-sensing',
    category: 'technical',
    title: 'GIS & Remote Sensing',
    titleAz: 'GİS və Uzaqdan Zondlama',
    abbr: 'GIS',
    shortDesc: 'Application of aerospace remote sensing and GIS software to environmental studies, land use analysis, and resource mapping across Azerbaijan.',
    shortDescAz: 'Ekoloji tədqiqatlar üçün GİS və uzaqdan zondlama texnologiyalarının tətbiqi.',
    fullDesc: `AZGREEN applies aerospace remote sensing technologies and GIS software to deliver spatial environmental analysis for projects across Azerbaijan.

Leveraging partnerships with Azercosmos OJSC, our capabilities include:
- Land use and land cover change analysis
- Vegetation health and stress mapping
- Soil erosion and degradation mapping
- Waste site optimisation using satellite data
- Olive and agricultural crop disease detection via remote sensing
- Environmental baseline mapping
- GIS-based impact zone delineation`,
    fullDescAz: `AZGREEN Azərbaycan üzrə layihələr üçün GİS və uzaqdan zondlama texnologiyalarından istifadə edir.`,
    keywords: ['GIS environmental Azerbaijan', 'remote sensing Azerbaijan', 'Azercosmos environmental', 'spatial analysis Baku', 'land use mapping Azerbaijan'],
    icon: 'Map',
  },
  {
    slug: 'energy-audit',
    category: 'technical',
    title: 'Energy Audit & Efficiency',
    titleAz: 'Enerji Auditi və Səmərəliliyin Artırılması',
    abbr: null,
    shortDesc: 'Systematic energy audits and efficiency improvement programs that reduce consumption and operating costs for facilities in Azerbaijan.',
    shortDescAz: 'Enerji istehlakını azaldan audit və səmərəlilik proqramları.',
    fullDesc: `AZGREEN optimises energy performance for industrial, commercial, and infrastructure facilities through structured audit and improvement programs.

Services include:
- Energy consumption baseline assessment
- On-site energy audit and metering
- Identification of efficiency improvement opportunities
- Renewable energy integration options
- Energy Management System (EnMS) recommendations
- ROI analysis for efficiency investments
- Compliance with energy efficiency legislation in Azerbaijan`,
    fullDescAz: `AZGREEN enerji auditləri və səmərəlilik proqramları vasitəsilə enerji istehlakını optimallaşdırır.`,
    keywords: ['energy audit Azerbaijan', 'energy efficiency Azerbaijan', 'enerji auditi Azərbaycan', 'energy management Baku'],
    icon: 'Zap',
  },
  {
    slug: 'renewable-energy',
    category: 'engagement',
    title: 'Renewable Energy Solutions',
    titleAz: 'Bərpa Olunan Enerji Həlləri',
    abbr: null,
    shortDesc: 'Technical and environmental advisory for wind, solar, and other renewable energy projects in Azerbaijan, from site assessment to permitting.',
    shortDescAz: 'Azərbaycanda bərpa olunan enerji layihələri üçün texniki və ekoloji məsləhət.',
    fullDesc: `Azerbaijan's renewable energy sector is expanding. AZGREEN provides environmental and technical advisory to organisations developing wind, solar, and other renewable energy assets.

Services include:
- Renewable energy feasibility environmental screening
- Wind and solar resource assessment support
- Environmental permitting for renewable projects
- EIA for wind farms, solar parks, and grid infrastructure
- Biodiversity and noise impact assessment for wind projects
- GHG avoidance quantification`,
    fullDescAz: `AZGREEN bərpa olunan enerji layihələri üçün texniki və ekoloji məsləhət xidmətləri göstərir.`,
    keywords: ['renewable energy Azerbaijan', 'solar energy assessment Azerbaijan', 'wind energy environmental assessment', 'bərpa olunan enerji Azərbaycan'],
    icon: 'Sun',
  },
  {
    slug: 'environmental-training',
    category: 'engagement',
    title: 'Environmental Training Programs',
    titleAz: 'Ekoloji Təlim Proqramları',
    abbr: null,
    shortDesc: 'Practical training in environmental management, ESIA methodology, legislation, and field monitoring skills for teams operating in Azerbaijan.',
    shortDescAz: 'Azərbaycanda fəaliyyət göstərən komandalar üçün ekoloji təlim proqramları.',
    fullDesc: `AZGREEN delivers structured environmental training programs designed to build internal capacity within organisations operating in Azerbaijan.

Training programs cover:
- Azerbaijani environmental legislation and regulatory requirements
- ESIA methodology and international standards
- Environmental monitoring techniques
- Environmental management systems (ISO 14001)
- Health, Safety, and Environment (HSE) fundamentals
- GIS and remote sensing tools for environmental work
- Carbon footprint calculation methods`,
    fullDescAz: `AZGREEN Azərbaycanda fəaliyyət göstərən təşkilatlar üçün strukturlaşdırılmış ekoloji təlim proqramları keçirir.`,
    keywords: ['environmental training Azerbaijan', 'ESIA training Baku', 'ekoloji təlim Azərbaycan', 'HSE training Azerbaijan'],
    icon: 'GraduationCap',
  },
  {
    slug: 'stakeholder-engagement',
    category: 'engagement',
    title: 'Stakeholder Engagement',
    titleAz: 'Maraqlı Tərəflərin Cəlb Edilməsi',
    abbr: null,
    shortDesc: 'Structured stakeholder engagement programs, public consultations, surveys, and grievance management for projects in Azerbaijan.',
    shortDescAz: 'Azərbaycanda maraqlı tərəflərin cəlb edilməsi proqramları.',
    fullDesc: `Effective stakeholder engagement is a requirement of international lenders and Azerbaijani regulation. AZGREEN organises and manages all aspects of stakeholder engagement for projects.

Services include:
- Stakeholder identification and mapping
- Public consultation organisation and facilitation
- Community meetings and focus groups
- Household and business surveys
- Grievance mechanism design and management
- Stakeholder Engagement Plans (SEP)
- Reporting to international financial institutions`,
    fullDescAz: `AZGREEN maraqlı tərəflərin cəlb edilməsi prosesinin bütün aspektlərini idarə edir.`,
    keywords: ['stakeholder engagement Azerbaijan', 'public consultation Azerbaijan', 'community engagement Baku', 'grievance mechanism Azerbaijan'],
    icon: 'Handshake',
  },
]

export const expertise = [
  {
    id: 'energy',
    title: 'Energy & Extractives',
    titleAz: 'Enerji və Hasilat',
    items: ['Oil & Gas', 'Mining', 'Renewable Energy (Wind & Solar)', 'Metallurgy'],
    itemsAz: ['Neft və Qaz', 'Dağ-mədən', 'Bərpa Olunan Enerji', 'Metallurgiya'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Construction',
    titleAz: 'İnfrastruktur və Tikinti',
    items: ['Road Construction', 'Transportation Infrastructure', 'Construction & Urban Development', 'Water Supply & Pipeline Systems'],
    itemsAz: ['Yol Tikintisi', 'Nəqliyyat İnfrastrukturu', 'Tikinti və Şəhər İnkişafı', 'Su Təchizatı və Boru Xətləri'],
  },
  {
    id: 'telecom',
    title: 'Telecommunications & Digital',
    titleAz: 'Telekommunikasiya və Rəqəmsal',
    items: ['Data Centers & Base Stations'],
    itemsAz: ['Məlumat Mərkəzləri və Baza Stansiyaları'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Social Infrastructure',
    titleAz: 'Səhiyyə və Sosial İnfrastruktur',
    items: ['Medical Facilities & Hospitals'],
    itemsAz: ['Tibb Müəssisələri və Xəstəxanalar'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    titleAz: 'Sənaye və İstehsal',
    items: ['Industrial Facilities', 'Furniture Manufacturing', 'Used Oil & Lubricants Recycling'],
    itemsAz: ['Sənaye Müəssisələri', 'Mebel İstehsalı', 'İşlənmiş Yağ və Sürtkü Materiallarının Emalı'],
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Natural Resources',
    titleAz: 'Kənd Təsərrüfatı və Təbii Resurslar',
    items: ['Agriculture & Agri-business'],
    itemsAz: ['Kənd Təsərrüfatı və Agrobiznes'],
  },
]

export const partners = [
  { name: 'China Power Engineering Consulting Group', url: 'http://en.cpe.ceec.net.cn/' },
  { name: 'AzInTelecom', url: 'https://azintelecom.az/az' },
  { name: 'SOCAR Midstream', url: 'https://www.socarmidstream.az/' },
  { name: 'QSI Group', url: 'https://qsi-group.com/' },
  { name: 'VIBROCOMP', url: 'https://vibrocomp.com/' },
  { name: 'Agency for Development of Economic Zones', url: 'https://www.economiczones.gov.az/' },
  { name: 'UN Global Compact', url: 'https://unglobalcompact.org/' },
  { name: '5 Capitals', url: 'https://5capitals.com/' },
  { name: 'Masdar', url: 'https://masdar.ae/' },
  { name: 'Azercosmos', url: 'https://azercosmos.az/en' },
  { name: 'AZCON Holding', url: 'https://azcon.gov.az/az' },
  { name: 'Ministry of Economy of Azerbaijan', url: 'https://economy.gov.az/en/' },
  { name: 'Ministry of Ecology and Natural Resources', url: 'https://eco.gov.az/' },
  { name: 'Təmiz Şəhər', url: 'https://tamizshahar.az/az' },
  { name: 'Norm Sement', url: 'https://norm.az/' },
  { name: 'BakuBus', url: 'https://www.bakubus.az/' },
  { name: 'NEQSOL Holding', url: 'https://www.neqsolholding.com/az/' },
  { name: 'ClimateLaunchpad', url: 'https://climatelaunchpad.org/' },
  { name: 'Intertek', url: 'https://www.intertek.com/' },
  { name: 'AzerAluminum', url: 'https://azeraluminium.com/' },
  { name: 'ISEP Global', url: 'https://www.isepglobal.org/' },
  { name: 'TƏBİB', url: 'https://tabib.gov.az/' },
  { name: 'Caspian Lubricants Recycling', url: 'https://caspian-lubricants.com/az/' },
  { name: 'Azerbaijan State Oil and Industry University', url: 'https://asoiu.edu.az/' },
  { name: 'Construction & Supply Union (Ministry of Economy)', url: 'https://www.linkedin.com/company/azərbaycan-respublikası-i̇qtisadiyyat-nazirliyinin-tikinti-təchizat-birliyi/' },
  { name: 'Azerbaijan State Pedagogical University', url: 'https://adpu.edu.az/index.php/en/' },
  { name: 'British Embassy Baku', url: 'https://www.gov.uk/world/organisations/british-embassy-baku' },
  { name: 'State Agency for Vocational Education', url: 'https://vet.edu.gov.az/' },
  { name: 'Azerbaijan Science Association', url: 'https://www.linkedin.com/company/azescience/' },
  { name: 'AUKAA (Azerbaijan UK Alumni Association)', url: 'https://www.linkedin.com/company/the-azerbaijan-uk-alumni-association/' },
  { name: 'Institute of Geography (GEO/igaz)', url: 'https://www.igaz.az/' },
  { name: 'US Embassy in Azerbaijan', url: 'https://az.usembassy.gov/' },
  { name: 'ADA University', url: 'https://www.ada.edu.az/en' },
  { name: 'Yaşıl Könüllülər (Green Volunteers)', url: 'https://www.facebook.com/GreenVolunteersAzerbaijan' },
  { name: 'Society of Chemical Engineers', url: 'https://www.linkedin.com/company/society-of-che/' },
  { name: 'SIL Social Innovation Lab', url: 'https://www.linkedin.com/company/socialinnovationlab/' },
  { name: 'oikos Baku', url: 'https://oikos-international.org/chapters/baku/' },
  { name: '3B Scientific', url: 'https://www.3bscientific.com/' },
  { name: 'Azerbaijan National Library (AMK)', url: 'https://www.millikitabxana.az/' },
  { name: 'Baku Engineering University (BMU)', url: 'https://beu.edu.az/az' },
  { name: 'AzerMI', url: 'https://www.linkedin.com/company/azeri-m-i/' },
  { name: 'Ekol', url: 'https://ekol.az/' },
]

export const FOUNDED_YEAR = 2017
export const FOUNDED_DATE = new Date(2017, 0, 19) // January 19 2017

export function getYearsActive() {
  return new Date().getFullYear() - FOUNDED_YEAR
}
