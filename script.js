/* ============================================================
   Justin Teh — Arts × Technology Portfolio
   script.js  ·  Vanilla JS, no dependencies, GitHub Pages ready
   Responsibilities:
     - Tab navigation (About / Work / Arts / Contact)
     - Skill-cloud rendering
     - Project rendering + filtering by focus area
     - Project detail modal (drawer)
     - Image lightbox (used by arts galleries + project evidence)
     - Mobile nav, back-to-top, graceful image fallbacks
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     Graceful image handling — if a path is wrong/missing,
     swap in a tasteful placeholder instead of a broken icon.
     --------------------------------------------------------- */
  function placeholderMarkup(title, label) {
    if (label === undefined) label = "Visual coming soon";
    return (
      '<div class="media-placeholder">' +
        '<div>' +
          (label ? '<div class="ph-label">' + label + '</div>' : '') +
          (title ? '<div class="ph-title">' + title + '</div>' : '') +
        '</div>' +
      '</div>'
    );
  }
  function escHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/"/g, "&quot;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // Build an <img> that swaps in a tasteful placeholder on load error.
  // The handler lives on window so we never inline quote-heavy HTML into the attribute.
  function imgTag(src, alt, title, cls) {
    return '<img src="' + src + '" alt="' + escHtml(alt) + '" loading="lazy" decoding="async" ' +
      'class="' + (cls || "") + '" data-ph="' + escHtml(title) + '" onerror="window.__phErr(this)" />';
  }
  window.__phErr = function (img) {
    img.onerror = null;
    var box = img.closest(".card-media, .event-gallery, .modal-hero");
    if (box) box.innerHTML = placeholderMarkup(img.getAttribute("data-ph"));
  };

  /* ---------------------------------------------------------
     CONTENT DATA
     --------------------------------------------------------- */
  var TECHNICAL_SKILLS = [
    { name: "Python", bold: true, libs: ["OpenCV", "Pygame", "Tkinter", "Matplotlib"] },
    { name: "Java", bold: true },
    { name: "C++", bold: true },
    { name: "Arduino / ESP32", bold: true },
    { name: "JavaScript", bold: true },
    "ASP.NET Core MVC", "HTML", "CSS",
    "SQL", "SQLite", "Room Database", "MQTT",
    "Fusion 360", "Rhino / Grasshopper",
    { name: "ComfyUI", libs: ["FLUX.1 Kontext", "ControlNet"] },
    "MediaPipe", "React / Next.js exposure", "Data Cleaning"
  ];
  var CREATIVE_SKILLS = [
    "Human-Centred Design", "Participatory Design", "Project Management",
    "Technical Documentation", "Design Thinking"
  ];
  var PRODUCTION_SKILLS = ["Lighting Direction", "Stage Management", "Production Planning"];
  var TEAM_SKILLS = ["Team Leadership", "Stakeholder Coordination", "Cross-Cultural Collaboration"];
  var ARTS_SKILL_GROUPS = [
    { label: "Event Planning", items: ["Stage Management", "Technical Coordination", "Production Scheduling", "Bump-In Planning", "Risk Assessment"] },
    { label: "Technical Skills", items: ["Show Calling", "Stage Crew", "Hybrid & Digital Audio Consoles", "GrandMA 2", "GrandMA 3", "Avolite", "Video Switcher"] }
  ];

  var FILTER_CLUSTERS = [
    { label: "Collections", items: [
      { f: "All", label: "All Projects" },
      { f: "Capstone", label: "Capstone" },
      { f: "Acad", label: "Acad" }
    ] },
    { label: "By project focus", items: [
      "Software / IoT", "Human-Centred & Product Design", "Data & Modelling",
      "Sustainability"
    ] }
  ];

  var IADL = "assets/Acad/Project1_IADL/";
  var ACAD = "assets/Acad/";
  var EX = "assets/Exchange/";
  var INTERN = "assets/Intern/EnjoyMusic/";

  var PROJECTS = [
    /* ---------- FLAGSHIP ---------- */
    {
      id: "iadl", group: "featured",
      title: "Interactive IADL Rehabilitation Assessment Device",
      period: "Completed in July 2021",
      tags: ["Software / IoT", "Human-Centred & Product Design"],
      summary: "An assistive rehabilitation assessment device that captures motion and force data during activities of daily living through sensor integration, computer vision, and an interactive game-based interface.",
      feature: { src: IADL + "IADL_Cover.webp", alt: "Interactive IADL rehabilitation device in use" },
      problem: "Traditional rehabilitation assessments can rely heavily on qualitative observation. This project explored how motion and force data could be captured more objectively during activities of daily living, supporting therapists with clearer performance records across sessions.",
      process: "Worked as part of a Biomedical Engineering major project team to develop and integrate sensing, motion capture, GUI, and data recording components. The project involved iterative hardware improvement, marker detection refinement, data acquisition, and interface development.",
      solution: "Combined wearable force sensing and environmental computer vision. The system used Force Sensitive Resistors with silicone padding, HC-05 serial communication, OpenCV marker tracking, Pygame for the augmented game task, Tkinter GUI, Matplotlib visualisation, and SQLite3 for local patient records and assessment playback.",
      stack: ["OpenCV", "Pygame", "Tkinter", "SQLite3", "Matplotlib", "Force Sensitive Resistors", "HC-05", "Motion Tracking", "GUI Development", "Rehabilitation Technology"],
      results: "The project achieved objective motion and force data capture for an interactive rehabilitation task, improved force sensing accuracy to approximately ±0.5 N, explored electroluminescent marker improvements for better tracking, and supported a patent filing through IP2SG. The project was also presented in the ARTSIC context.",
      demonstrates: "Assistive technology development, sensor integration, computer vision, rehabilitation-focused design, and the ability to translate a biomedical problem into a working prototype.",
      evidence: [
        { src: IADL + "Poster.webp", alt: "Full IADL project poster", caption: "Full project poster" },
        { src: IADL + "IADL (1).jpeg", alt: "IADL device prototype and setup", caption: "Prototype & setup" },
        { src: IADL + "IADL (2).webp", alt: "IADL interface and data capture", caption: "Interface / data capture" },
        { src: IADL + "IADL (3).webp", alt: "IADL motion tracking detail", caption: "Motion tracking detail" },
        { src: IADL + "IP2SG_Inbox.jpeg", alt: "Patent-related filing evidence via IP2SG", caption: "Patent filing evidence (IP2SG)" }
      ],
      links: [
        { label: "GitHub repository", href: "https://github.com/JustinTeh-Prog/InteractiveAssessmentRehabitation" },
        { label: "Demo (video)", href: "https://drive.google.com/file/d/1iKbCqZ5-4pwDWzn0odektVTlBeEMGZdi/view?usp=sharing" }
      ]
    },
    {
      id: "astar", group: "internship",
      title: "A*STAR IME Proprietary Sensor Software Application Internship",
      period: "Sept – April 2022",
      tags: ["Software / IoT", "Data & Modelling"],
      summary: "A full-stack IoT software internship involving cloud-based sensor monitoring, live data transfer, database handling, and dashboard development within a research environment.",
      feature: { src: "assets/Intern/astar_logo.webp", alt: "A*STAR Institute of Microelectronics logo", contain: true },
      problem: "The project required software infrastructure to support monitoring and analysis of proprietary sensor data. Due to confidentiality and NDA considerations, only the general technical scope is shown.",
      process: "Worked as a Software Application Intern at A*STAR Institute of Microelectronics, supporting a sensor-related web application and related programming / lab-adjacent tasks.",
      solution: "Developed and documented components for an ASP.NET Core 5 MVC web application with MQTT Publisher–Subscriber architecture, SQL Server, Entity Framework Core, CRUD operations, CSV import/export, login/registration scaffolding, dashboards, live graphing concepts, dependency injection, and middleware.",
      stack: ["ASP.NET Core 5", "MVC", "C#", "MQTT", "SQL Server", "Entity Framework Core", "CRUD", "CSV Import / Export", "Dashboarding", "Web Application Development", "Technical Documentation"],
      results: "Built experience in industrial software development, IoT data handling, database-backed web applications, and structured technical documentation in a research institute setting.",
      demonstrates: "Industrial-grade software engineering, IoT data pipelines, and disciplined documentation under research and confidentiality constraints.",
      nda: "Project visuals are not disclosed due to confidentiality and NDA considerations. Technical stack and high-level responsibilities are shown for portfolio context.",
      evidence: [],
      links: []
    },

    /* ---------- ACADEMIC (ordered by complexity) ---------- */
    {
      id: "unitrack", group: "academic",
      title: "UniTrack — Android University Application Tracker",
      period: "Completed in April 2026",
      tags: ["Software / IoT", "Human-Centred & Product Design"],
      summary: "An Android-native app for profile building, eligibility context, college-list management, and deadline tracking.",
      feature: { src: ACAD + "UniTrack/Cover.webp", alt: "UniTrack Android app shown on a phone" },
      problem: "Pre-tertiary students applying to multiple universities often manage fragmented requirements, essays, deadlines, and eligibility information manually.",
      process: "Helped coordinate checkoff requirements and project administration while contributing to development of the Android application.",
      solution: "Built a native Android app using MVVM-style architecture, Activities, ViewModels, Repositories, Room DAOs, Room Database, SQL, and structured OOP principles.",
      stack: ["Android", "Java", "MVVM", "Room Database", "SQL", "Repositories", "DAOs", "OOP", "Singleton", "Composite Pattern", "Strategy Pattern", "Pagination"],
      results: "Implemented must-have features including a personal case tracker, college list builder, and deadline / requirement tracker. The team resolved an “App Not Responding” database issue using pagination with infinite scrolling.",
      evidence: [
        { src: ACAD + "UniTrack/Poster.webp", alt: "Full UniTrack project poster", caption: "Full project poster" },
        { src: ACAD + "UniTrack/event picture.jpg", alt: "UniTrack showcase event", caption: "Showcase event" },
        { src: ACAD + "UniTrack/team & booth.jpg", alt: "UniTrack team and booth", caption: "Team & booth" }
      ],
      clips: [],
      links: [{ label: "App demo (video)", href: "https://drive.google.com/file/d/1OWoS8dMoi8M2Imk2-Lxw_v2AG_b2kzqj/view?usp=sharing" }]
    },
    {
      id: "double-diamond", group: "academic",
      title: "Double-Diamond Centric Product Development",
      period: "Completed in April 2025",
      tags: ["Human-Centred & Product Design"],
      summary: "Designed “NestAway / Snack Overflow,” a canteen seating and passive bird-deterrence system to improve comfort in SUTD's dining environment.",
      feature: { src: ACAD + "DTI/Auraplan_Cover.webp", alt: "Auraplan canteen seating and bird-deterrence concept", fit: "contain" },
      problem: "SUTD canteen users experience pain points around seating comfort, privacy, bag storage, bird disturbance, spillage, and ambiguous vacancy.",
      process: "Used design thinking and downselection to identify seating as a major touchpoint, then developed a partition-origami bird shelter concept with modular subsystems.",
      solution: "A fully integrated partitioned seating and passive bird deterrence system with storage, modular joints, privacy elements, and interactive aesthetic qualities.",
      stack: ["Double Diamond", "Site Observation", "Product Ideation", "Downselection", "Prototyping", "User-Centred Design"],
      results: "Generated a concept balancing harmony, comfort, convenience, and delightfulness in communal dining.",
      evidence: [],
      links: [
        { label: "Critical image (PDF)", href: "https://drive.google.com/file/d/11RhMZL88kFH3jxENb7OHzgBXMWlWsVhf/view?usp=sharing" },
        { label: "Digital site model (PDF)", href: "https://drive.google.com/file/d/1YCkGmKn4kHD2TPIKeqxyON2qyNXSAsXl/view?usp=sharing" },
        { label: "Part 2 report (PDF)", href: "https://drive.google.com/file/d/1TJOn3S1LMIA-C-E5URcn9Nw3ehgKYJcv/view?usp=sharing" }
      ]
    },
    {
      id: "solarbin", group: "academic",
      title: "Standalone Photovoltaic System for Smart Bin",
      period: "Completed in August 2025",
      tags: ["Sustainability", "Software / IoT"],
      tagline: "A standalone solar power system for a self-sufficient smart bin.",
      summary: "A compact standalone solar power system that keeps a smart bin's sensors and communication modules running independently of the grid.",
      feature: { src: ACAD + "DES/Cover.webp", alt: "Standalone photovoltaic system for a smart bin prototype" },
      problem: "As Singapore advances Smart Nation 2.0, smart bins need continuous power for their sensors, motors, and communication modules — raising the question of how to power them without relying on the grid.",
      process: "Measured load current across operating states with a shunt resistor and oscilloscope, analysed peak-sun-hour constraints, then sized and integrated the battery, PV panel, charge controller, and custom casing into a working prototype.",
      solution: "A compact battery-backed photovoltaic system powers the bin off-grid, with a side-mounted panel casing kept off the lid to reduce strain on the opening mechanism.",
      stack: ["Photovoltaic Design", "Battery Sizing", "Panel Sizing", "Shunt Resistor Measurement", "Oscilloscope Testing", "Load Analysis", "Li-Po Battery", "Charge Controller", "Fusion / CAD Casing", "Energy Systems"],
      results: "Sized a 3.7 V \u22651000 mAh Li-Po battery against a ~867 mAh requirement and a 6 V, 480 mA panel for worst-case sun hours, producing a working scaled prototype with schematics and upscaling recommendations.",
      demonstrates: "Applied energy-system design, engineering measurement, hardware integration, and sustainability-oriented prototyping.",
      evidence: [],
      links: [{ label: "Full report (PDF)", href: "https://drive.google.com/file/d/1ZilkP-9BT8PNPfRDkkkcxtmqr86Aivb6/view?usp=sharing" }]
    },
    {
      id: "rewardnet", group: "academic",
      title: "RewardNet™ — Algorithmic Reward System Proposal",
      period: "Completed in April 2026",
      tags: ["Data & Modelling", "Human-Centred & Product Design"],
      summary: "A full-suite reward ecosystem for a hypothetical mega-platform using data structures and algorithmic system logic.",
      feature: { src: ACAD + "RewardNet/Cover.webp", alt: "RewardNet algorithmic reward system proposal" },
      problem: "A large platform needs a reward system that can incentivise recent meaningful activity without relying only on lifetime accumulation or harsh resets.",
      process: "Helped design the platform logic for loyalty tiers, status points, reward points, seasonal points, requalification, and user activity incentives.",
      solution: "Applied data structure and algorithm concepts such as hashmaps, dictionaries of objects, ordered-statistics logic, point systems, tier cycles, and reward qualification rules.",
      stack: ["HashMap", "Dictionary of Objects", "Ordered Statistics Tree Concept", "System Design", "Loyalty Logic", "Reward Cycles", "Product Mechanics"],
      results: "Produced a structured proposal for a reward ecosystem balancing user motivation, platform activity, and long-term recognition.",
      evidence: [
        { src: ACAD + "RewardNet/Overview Datastructure.webp", alt: "RewardNet overview data structure", caption: "System data structure" }
      ],
      links: [{ label: "Full report (PDF)", href: "https://drive.google.com/file/d/1gJYdDXVYQgakbJUU2_4waoBEdzbr8VRM/view?usp=sharing" }]
    },
    {
      id: "linear-regression", group: "academic",
      title: "Multi-Feature CO₂ Prediction with Linear Regression",
      period: "Completed in August 2025",
      tags: ["Data & Modelling", "Sustainability"],
      summary: "Built a data-driven model to predict U.S. transport-sector CO₂ emissions and test mode-shift strategies.",
      feature: { src: ACAD + "ML/Cover.webp", alt: "Multi-feature CO₂ prediction with linear regression" },
      problem: "Policy and transport planners need transparent modelling tools that connect passenger traffic, mode mix, and CO₂ emissions.",
      process: "Performed data import, cleaning, feature analysis, visualisation, correlation checking, and linear modelling.",
      solution: "Used a 33-year U.S. dataset with features such as registered vehicles, population, rapid-transit-to-resident ratio, and passenger traffic by transit, highway, intercity, and aviation.",
      stack: ["Python", "Data Cleaning", "Linear Regression", "Correlation Matrix", "Feature Engineering", "Scenario Modelling", "Transport CO₂"],
      results: "Created a model concept for forecasting emissions and evaluating what-if transport mode-shift scenarios.",
      evidence: [
        { src: ACAD + "ML/Feature Prediction.webp", alt: "Feature prediction results from the CO\u2082 model", caption: "Feature Prediction" }
      ],
      links: [
        { label: "Full report (PDF)", href: "https://drive.google.com/file/d/1pdLxPyg57m73bAovpHYkQGSFHYhPGePS/view?usp=sharing" },
        { label: "GitHub repository", href: "https://github.com/JustinTeh-Prog/DDW_ML" }
      ]
    },
    {
      id: "eudaimonia", group: "academic",
      title: "Designing for Eudaimonia at Singapore's Bus Stops",
      period: "Completed in April 2026",
      tags: ["Human-Centred & Product Design"],
      summary: "A participatory design project exploring how bus-stop infrastructure could better support comfort, dignity, and everyday wellbeing.",
      feature: { src: ACAD + "HCD/Cover.webp", alt: "Designing for Eudaimonia at Singapore's bus stops — concept cover" },
      problem: "Bus stops are functional but can still create uncertainty, discomfort, and missed communication between commuters and bus captains.",
      process: "Conducted site observations, interviews, participatory workshops, affinity mapping, prototype testing, and iteration.",
      solution: "Developed and tested speculative prototype variations grounded in observed commuter and bus-captain needs.",
      stack: ["Ethnographic Observation", "Participatory Design", "Interviews", "Affinity Mapping", "Unity Simulation Prototype", "User Feedback", "Iteration"],
      results: "Gathered insights from teens, elderly participants, and a bus captain, then created and tested speculative prototype variations with follow-up responses from diverse users.",
      youtube: "WaOrqbMs1kE",
      evidence: [
        { src: ACAD + "HCD/realwinworth.webp", alt: "Win-worth analysis from the participatory design study", caption: "Win-worth analysis" },
        { src: ACAD + "HCD/usertesting.webp", alt: "User testing session with commuters", caption: "User testing" }
      ], links: []
    },
    {
      id: "lca", group: "academic",
      title: "Life Cycle Analysis Report",
      period: "Completed in April 2025",
      tags: ["Sustainability", "Data & Modelling"],
      coverLabel: "",
      summary: "Compared single-use PET cups, biodegradable bamboo cups, and reusable polycarbonate cups through life-cycle analysis.",
      feature: { src: ACAD + "LCA/Cover.webp", alt: "Life cycle analysis of disposable, biodegradable, and reusable cups", fit: "contain" },
      problem: "Sustainable product decisions require evaluating environmental impact across material, use, and end-of-life stages rather than relying on surface-level assumptions.",
      process: "Analysed product alternatives, defined assumptions, compared energy impact, and documented life-cycle stages.",
      solution: "Built a comparative framework across material, use, and end-of-life stages with explicit functional-unit definitions.",
      stack: ["Life Cycle Analysis", "Functional Unit Definition", "Material Stage", "Use Stage", "End-of-Life Stage", "Energy Impact Estimation"],
      results: "Created a comparative sustainability analysis that weighed trade-offs across disposable, biodegradable, and reusable product options.",
      evidence: [
        { src: ACAD + "LCA/Impact Assessment.webp", alt: "Life-cycle impact assessment", caption: "Impact assessment" },
        { src: ACAD + "LCA/LCA Calculation.webp", alt: "Life-cycle analysis calculation table", caption: "LCA calculation" }
      ],
      links: []
    },
    {
      id: "parametric", group: "academic",
      title: "Parametric Modelling with Rhino Grasshopper",
      period: "Completed in December 2024",
      tags: ["Human-Centred & Product Design"],
      summary: "A computational design study inspired by stalactite cave formations using parametric terrain logic.",
      feature: { src: ACAD + "ParametricModel/Cover.webp", alt: "Parametric stalactite cave-form model" },
      problem: "Natural cave structures have irregular, organic forms that are difficult to model manually while preserving controlled variation.",
      process: "Explored mathematical and visual parameters to create a cave-like generative form through iterative computational design.",
      solution: "Used sine-based overhang terrain logic and Voronoi-mapped base terrain to simulate stalactite and rocky surface variation.",
      stack: ["Rhino", "Grasshopper", "Parametric Design", "Voronoi", "Sine Functions", "Computational Design"],
      results: "Produced a 3×3 parameter matrix showing how changes in complexity, base resolution, and terrain displacement affect the final form.",
      evidence: [
        { src: ACAD + "ParametricModel/Slide2.webp", alt: "Parametric model process — terrain logic", caption: "Terrain logic" },
        { src: ACAD + "ParametricModel/Slide3.webp", alt: "Parametric model process — form generation", caption: "Form generation" },
        { src: ACAD + "ParametricModel/Slide5.webp", alt: "Parametric model — parameter matrix", caption: "Parameter matrix" }
      ], links: []
    },
    {
      id: "audiometry", group: "academic",
      title: "Pure Tone Audiometry Assessment & Recommendation",
      period: "Completed in July 2021",
      tags: ["Data & Modelling"],
      coverLabel: "",
      summary: "Analysed an audiometry case through air conduction, bone conduction, masking, hearing-loss classification, and implications for speech perception.",
      feature: { src: ACAD + "PureToneAudiometry/Cover.webp", alt: "Pure tone audiometry assessment cover", fit: "contain" },
      problem: "Audiogram interpretation requires understanding the auditory pathway, test method, and difference between conductive, sensorineural, and mixed hearing loss.",
      process: "Reviewed audiometric test principles, interpreted case results, and explained implications on speech perception and behaviour.",
      solution: "Connected air/bone conduction results and masking logic to a structured hearing-loss classification and its real-world communication impact.",
      stack: ["Pure Tone Audiometry", "Air Conduction", "Bone Conduction", "Masking", "Hearing Loss Classification", "Technical Reporting"],
      results: "Produced a structured biomedical report connecting test results to practical hearing and communication implications.",
      evidence: [
        { src: ACAD + "PureToneAudiometry/FinalAudiogram.webp", alt: "Final audiogram plot", caption: "Final audiogram" },
        { src: ACAD + "PureToneAudiometry/DiagnosisofAudiogram.webp", alt: "Audiogram diagnosis breakdown", caption: "Audiogram diagnosis" }
      ],
      links: [{ label: "Full report (PDF)", href: "https://drive.google.com/file/d/1YVn8LxsLhAY9E46pz8WXbh-1HwOsLRO5/view?usp=sharing" }]
    },

    /* ---------- GLOBAL EXCHANGE ---------- */
    {
      id: "cqu", group: "exchange",
      title: "DIVE Immersion at Chongqing University: 心间 | Close to Heart",
      tags: ["1-Week Exchange", "Human-Centred & Product Design", "AI-Powered"],
      summary: "A one-week cross-cultural design immersion exploring companionship and reassurance for empty-nest elderly residents in China.",
      feature: { src: EX + "GEO_CQU.webp", alt: "Close to Heart eldercare companion concept at Chongqing University" },
      problem: "Empty-nest elderly residents may experience loneliness, digital fatigue, reluctance to disturb their children, and barriers to complex app-based systems.",
      process: "Over an intensive one-week immersion, worked in a cross-cultural student team to define user insights, generate concepts, study precedent products, and develop a speech-based sentimental companion concept.",
      solution: "“心间 | Close to Heart” is a non-robotic, familiar, speech-based companion concept designed to provide delightful everyday companionship and timely reassurance for families. It receives microphone input, converts speech to text, interprets context through NLU and personalisation, plans tone by dialect, politeness, pacing and length, composes a reply, and outputs Mandarin speech — with future routine nudges, quiet hours, family status updates, and emergency tool-calling.",
      stack: ["Human-Centred Design", "Eldercare", "Speech Interface", "GenAI Wrapper", "ASR", "NLU", "Text-to-Speech", "Proactive Nudges", "Wireframing", "Cross-Cultural Design"],
      results: "Developed a socially grounded AI companion concept with form factor, software stack, wireframe, validation themes, business model, and impact considerations.",
      evidence: [],
      links: [{ label: "Project proposal (PDF)", href: "https://drive.google.com/file/d/1kikeuVh4YeisHX0_g3wP9oZx2mjB1fSX/view?usp=sharing" }]
    },
    {
      id: "tiide", group: "exchange",
      title: "TIIDE Exchange at Zhejiang University: GenAI Beauty Campaign",
      tags: ["Global Exchange", "AI-Powered", "Creative Technology", "Human-Centred & Product Design"],
      summary: "“Generations of Beauty / 代代美丽: The Golden Thread of Time,” a GenAI campaign connecting L'Oréal Paris Age Perfect, the Double Ninth Festival, and intergenerational beauty.",
      feature: { src: ACAD + "TIIDE_GenAI/Cover.webp", alt: "Generations of Beauty GenAI campaign cover" },
      problem: "The project explored how AI-generated campaign assets and a coded website could translate cultural values such as filial piety, longevity, and intergenerational connection into a modern brand experience.",
      process: "Worked on campaign concept, cultural analysis, AI image workflow experimentation, campaign collateral generation, and website concept development.",
      solution: "Used ComfyUI workflows involving SDXL, Juggernaut, FLUX.1 Kontext, LoRA, inpainting, ControlNet, scribble guidance, upscaling, and agentic coding for campaign website development.",
      stack: ["ComfyUI", "SDXL", "FLUX.1 Kontext", "LoRA", "Inpainting", "ControlNet", "Upscaling", "Prompt Engineering", "Campaign Design", "Agentic Coding", "Cultural Storytelling"],
      results: "Produced campaign visuals, motifs, poster representations, and a coded website demo exploring how AI can support culturally grounded creative production.",
      evidence: [
        { src: ACAD + "TIIDE_GenAI/Final-Poster.webp", alt: "Generations of Beauty final campaign poster", caption: "Final campaign poster" },
        { src: ACAD + "TIIDE_GenAI/Presentation.webp", alt: "GenAI beauty campaign presentation", caption: "Campaign presentation" },
        { src: ACAD + "TIIDE_GenAI/Pubs-Collateral.webp", alt: "Campaign publications and collateral", caption: "Publications & collateral" },
        { src: ACAD + "TIIDE_GenAI/T2I+LoRa.webp", alt: "Text-to-image and LoRA generation workflow", caption: "Text-to-image + LoRA workflow" },
        { src: ACAD + "TIIDE_GenAI/flux1kontext.webp", alt: "FLUX.1 Kontext image editing workflow", caption: "FLUX.1 Kontext editing" },
        { src: EX + "TIIDE/TIIDE_Project.webp", alt: "TIIDE exchange team project", caption: "TIIDE exchange project" }
      ],
      links: []
    },
    {
      id: "enjoymusic", group: "internship",
      title: "EnjoyMusic Internship: AI-Driven Entertainment & Show Technology",
      period: "Oct \u2013 Dec 2025",
      tags: ["AI-Powered", "Creative Technology", "Software / IoT"],
      summary: "An AI entertainment internship in Shanghai exploring immersive music, visual systems, AI-driven mapping visuals, lighting automation, and creative-technology workflows.",
      feature: { src: INTERN + "Cover.webp", alt: "EnjoyMusic AI entertainment internship in Shanghai" },
      problem: "The entertainment industry increasingly needs workflows that connect creative direction, AI generation, visual production, music analysis, and live show execution.",
      process: "Worked on AI-enabled entertainment concepts and technical workflows across immersive audio-visual projects, production coordination, and experimental tooling. Areas included an interactive room installation at INS Land / Oasis, AI-driven mapping visuals for Magic of Tomorrowland / Tomorrowland China, AI music-lighting automation, motion-capture rigging, music analysis and data annotation for ML training, and DAW effect-plugin exploration.",
      solution: "Connected AI visual generation, stage and lighting tooling, and music analysis into experimental show-technology workflows.",
      stack: ["AI Visual Workflow", "Image-to-Image", "Video-to-Image", "Stage Design", "GrandMA", "DMX", "Resolume Arena", "VJ Workflow", "MediaPipe", "React / Next.js exposure", "beat_this (Python)", "Music Annotation", "DAW Plugins", "C++"],
      results: "Gained practical exposure to how creative vision, project management, AI tools, and technical execution come together in high-pressure entertainment environments.",
      evidence: [
        { src: INTERN + "TIIDE_Intern (1).webp", alt: "EnjoyMusic AI entertainment internship", caption: "Show-technology work" },
        { src: INTERN + "TIIDE_Intern (2).webp", alt: "EnjoyMusic internship show technology workflow", caption: "AI visual workflow" }
      ],
      clips: [],
      links: [
        { label: "AI mapping visual — sample 1 (video)", href: "https://drive.google.com/file/d/1LihrrgyKInwXXFKa6vKEKnZlgst5GQO8/view?usp=sharing" },
        { label: "AI mapping visual — sample 2 (video)", href: "https://drive.google.com/file/d/1VK1ouYlEXdIXICXywO7VsEutRQVWcpfc/view?usp=sharing" },
        { label: "Final defence deck (PDF)", href: "https://drive.google.com/file/d/14WVVCeIUZRnLQ1U7cVAi7eyMeIG0jdLf/view?usp=sharing" }
      ]
    }
  ];

  /* ---------- ARTS EVENTS (newest-style ordering as given) ---------- */
  var ARTS = "assets/Arts/";
  var EVENTS = [
    { title: "The Lift", date: "29 Nov 2019", location: "TP Black Box Theatre", role: "Lighting Director",
      note: "Early lighting direction work in a black box theatre setting, focusing on atmosphere, cueing, and stage visibility.",
      images: [{ src: ARTS + "2TheLift.webp", alt: "The Lift production lighting" }] },
    { title: "TPDE's Rush..", date: "30 Nov 2019", location: "TP Design Paddy Field", role: "Tech Coordinator / Lighting Director",
      note: "Semi-open, site-specific performance support involving technical coordination and lighting direction.",
      images: [
        { src: ARTS + "3RUSH (1).webp", alt: "Rush performance 1" },
        { src: ARTS + "3RUSH (2).webp", alt: "Rush performance 2" },
        { src: ARTS + "3RUSH (3).webp", alt: "Rush performance 3" }
      ] },
    { title: "Spectacular 2022", date: "7–14 Apr 2022", location: "TP Auditorium", role: "Lighting Director",
      note: "Large-scale auditorium production requiring lighting planning, cue execution, and coordination with performers and crew.",
      images: [
        { src: ARTS + "4SPECTACULAR (1).webp", alt: "Spectacular 1" },
        { src: ARTS + "4SPECTACULAR (2).webp", alt: "Spectacular 2" },
        { src: ARTS + "4SPECTACULAR (3).webp", alt: "Spectacular 3" }
      ] },
    { title: "Blissful One-Stop Wedding Show", date: "10 Jan 2025", location: "Marina Bay Sands", role: "Lighting Operator",
      note: "External event experience supporting lighting operation in a professional venue environment.",
      images: [{ src: ARTS + "5XBOWS.webp", alt: "Blissful Wedding Show lighting" }] },
    { title: "Arts Fiesta 2025", date: "6 Jul 2025", location: "Our Tampines Hub", role: "Lighting Director",
      note: "Community-facing arts showcase experience involving lighting direction for a multi-artform event.",
      images: [{ src: ARTS + "6ARTSFIESTA.webp", alt: "Arts Fiesta 25 lighting" }] },
    { title: "Everything But The Brain", date: "25 Jul 2025", location: "SUTD Auditorium", role: "Lighting Director",
      note: "SUTD auditorium production organised by SUTD Drama Club of the tragicomedy by Singaporean local writer Jean Tay. Provided technical support in theatrical storytelling through audio and lighting.",
      images: [
        { src: ARTS + "7EBTB (1).webp", alt: "Everything But The Brain 1" },
        { src: ARTS + "7EBTB (2).webp", alt: "Everything But The Brain 2" }
      ] },
    { title: "Rockafall 2025", date: "3 Aug 2025", location: "SUTD Auditorium", role: "Lighting Director",
      note: "High-energy music event requiring responsive lighting direction, mood control, and coordination with musical performance.",
      credit: { handle: "@p____p.x", url: "https://www.instagram.com/p____p.x", prefix: "Guitarist in picture" },
      images: [
        { src: ARTS + "8Rockafall (1).webp", alt: "Rockafall 2025 1" },
        { src: ARTS + "8Rockafall (2).webp", alt: "Rockafall 2025 2" },
        { src: ARTS + "8Rockafall (3).webp", alt: "Rockafall 2025 3" }
      ] },
    { title: "Ori Finale 2025", date: "20 Sep 2025", location: "SUTD Indoor Sports Hall", role: "Lighting Director",
      note: "Large orientation finale production involving lighting design and show support in a non-traditional performance venue.",
      images: [
        { src: ARTS + "9OriFinale (1).webp", alt: "Ori Finale 25 1" },
        { src: ARTS + "9OriFinale (2).webp", alt: "Ori Finale 25 2" }
      ] },
    { title: "Fresh-No-More! 2026", date: "26 Jan 2026", location: "SUTD Auditorium & Campus Centre", role: "Organiser / Lighting Director",
      note: "Led a student-run sophomore celebration programme for over 250 undergraduates, endorsed by SUTD’s Head of Pillars and Office of Student Life. Oversaw programme design, logistics, publicity, event coordination, and lighting direction from planning to execution.",
      links: [
        { label: "Event Montage", href: "https://www.youtube.com/watch?v=vV-fi9XaRfc&t=2s" },
        { label: "Ceremony Premiere", href: "https://www.youtube.com/watch?v=vjNtHLwsDRc&t=3s" },
        { label: "Photo Album", href: "https://www.flickr.com/photos/204192074@N02/", type: "album" }
      ],
      images: [
        { src: ARTS + "10FNM (1).webp", alt: "Fresh-No-More! 2026 1" },
        { src: ARTS + "10FNM (2).webp", alt: "Fresh-No-More! 2026 2" },
        { src: ARTS + "10FNM (3).webp", alt: "Fresh-No-More! 2026 3" },
        { src: ARTS + "10FNM (4).webp", alt: "Fresh-No-More! 2026 4" },
        { src: ARTS + "10FNM (5).webp", alt: "Fresh-No-More! 2026 5" }
      ] }
  ];

  /* ---------------------------------------------------------
     Lock zoom on all devices. The viewport meta is ignored by
     iOS Safari, so we cancel pinch gestures + double-tap zoom
     directly. Single-touch scrolling / swiping is untouched.
     --------------------------------------------------------- */
  (function lockZoom() {
    ["gesturestart", "gesturechange", "gestureend"].forEach(function (evt) {
      document.addEventListener(evt, function (e) { e.preventDefault(); }, { passive: false });
    });
    document.addEventListener("touchmove", function (e) {
      if (e.touches && e.touches.length > 1) e.preventDefault();
    }, { passive: false });
    var lastTouchEnd = 0;
    document.addEventListener("touchend", function (e) {
      var now = Date.now();
      if (now - lastTouchEnd <= 300) e.preventDefault();
      lastTouchEnd = now;
    }, { passive: false });
  })();

  /* ---------------------------------------------------------
     Small DOM helpers
     --------------------------------------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function chipCloud(target, items, extraClass) {
    var frag = document.createDocumentFragment();
    items.forEach(function (s) { frag.appendChild(el("span", "chip" + (extraClass ? " " + extraClass : ""), s)); });
    target.appendChild(frag);
  }
  function tagsMarkup(tags) {
    return '<div class="card-tags">' + tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>";
  }

  /* ---------------------------------------------------------
     RENDER: skill clouds
     --------------------------------------------------------- */
  /* ---------------------------------------------------------
     RENDER: interactive, minimisable Core Skillsets
     --------------------------------------------------------- */
  (function skillsExplorer() {
    var cloud = $("#skills-cloud");
    var tabs = $("#skill-tabs");
    if (!cloud || !tabs) return;
    var SETS = { technical: TECHNICAL_SKILLS, creative: CREATIVE_SKILLS, productions: PRODUCTION_SKILLS, team: TEAM_SKILLS };
    var activeCat = "technical";
    function renderChips(cat) {
      cloud.classList.toggle("creative", cat === "creative");
      cloud.innerHTML = "";
      SETS[cat].forEach(function (s, i) {
        var isObj = typeof s === "object";
        var name = isObj ? s.name : s;
        var cls = "chip skill-pop" + (isObj && s.bold ? " chip-bold" : "") + (isObj && s.libs ? " chip-expand" : "");
        var chip = el("span", cls);
        if (isObj && s.libs) {
          chip.setAttribute("tabindex", "0");
          chip.setAttribute("role", "button");
          chip.setAttribute("aria-label", name + " \u2014 libraries: " + s.libs.join(", "));
          chip.innerHTML = '<span class="chip-name">' + name + "</span>" +
            '<span class="chip-caret" aria-hidden="true">+' + s.libs.length + "</span>" +
            '<span class="chip-libs">' + s.libs.map(function (l) { return '<span class="lib">' + l + "</span>"; }).join("") + "</span>";
        } else {
          chip.textContent = name;
        }
        chip.style.animationDelay = Math.min(i * 26, 520) + "ms";
        cloud.appendChild(chip);
      });
    }
    // Keep the cloud a fixed height across categories (sized to the largest set,
    // Technical) so switching tabs doesn't make the container jump. Measured by
    // laying out Technical, reading its height, then rendering the real category
    // — all in one synchronous frame, so there's no visible flash.
    function render(cat) {
      activeCat = cat;
      cloud.style.minHeight = "0px";
      renderChips("technical");
      var maxH = cloud.offsetHeight;
      renderChips(cat);
      cloud.style.minHeight = maxH + "px";
    }
    var rz;
    window.addEventListener("resize", function () {
      clearTimeout(rz);
      rz = setTimeout(function () { render(activeCat); }, 150);
    });
    function isMobileLike() {
      return window.matchMedia("(hover: none), (pointer: coarse)").matches;
    }
    // Mobile only: tap a chip with nested libraries to toggle it open/closed
    cloud.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip-expand");
      if (!chip || !isMobileLike()) return;
      var wasOpen = chip.classList.contains("is-open");
      cloud.querySelectorAll(".chip-expand.is-open").forEach(function (c) { c.classList.remove("is-open"); });
      chip.classList.toggle("is-open", !wasOpen);
    });
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest(".skill-tab");
      if (!b) return;
      tabs.querySelectorAll(".skill-tab").forEach(function (x) {
        var on = x === b;
        x.classList.toggle("is-active", on);
        x.setAttribute("aria-selected", String(on));
      });
      render(b.dataset.skillCat);
    });
    render("technical");
  })();
  (function renderArtsSkills() {
    var host = $("#arts-skills");
    if (!host) return;
    ARTS_SKILL_GROUPS.forEach(function (g) {
      var group = el("div", "skill-group");
      group.appendChild(el("p", "skill-group-label", g.label));
      var cloud = el("div", "cloud");
      g.items.forEach(function (s) { cloud.appendChild(el("span", "chip", s)); });
      group.appendChild(cloud);
      host.appendChild(group);
    });
  })();

  /* ---------------------------------------------------------
     RENDER: project cards
     --------------------------------------------------------- */
  function containClass(feature) {
    if (!feature) return "";
    if (feature.contain) return "is-contain";
    if (feature.fit === "contain") return "is-contain-tight";
    return "";
  }
  function collectionOf(p) {
    return p.group === "featured" ? "Capstone" : p.group === "academic" ? "Acad" : "";
  }
  function cardMedia(p, feature, coll) {
    var badge = coll ? '<span class="card-badge coll-' + coll.toLowerCase() + '">' + coll + "</span>" : "";
    if (p.feature) {
      return '<div class="card-media' + (feature ? " is-feature" : "") + '">' +
        imgTag(p.feature.src, p.feature.alt, p.title, containClass(p.feature)) + badge + "</div>";
    }
    return '<div class="card-media">' +
      (p.nda ? placeholderMarkup("Confidential — NDA", "") : placeholderMarkup(p.title, p.coverLabel)) + badge + "</div>";
  }

  /* Short, at-a-glance taglines for the compact portfolio cards */
  var TAGLINES = {
    iadl: "Sensor + computer-vision device capturing motion and force during rehab tasks.",
    astar: "Full-stack IoT web app for proprietary sensor monitoring.",
    audiometry: "Reading a hearing-loss case from audiogram to real-world impact.",
    parametric: "Generative stalactite cave-forms from parametric terrain logic.",
    lca: "Life-cycle comparison of disposable, biodegradable, and reusable cups.",
    "double-diamond": "Canteen seating + passive bird-deterrence for dining comfort.",
    "linear-regression": "Predicting U.S. transport CO\u2082 and testing mode-shift strategies.",
    unitrack: "Android app for tracking university applications and deadlines.",
    rewardnet: "Algorithmic reward ecosystem built on data-structure logic.",
    eudaimonia: "Participatory redesign of bus stops for comfort and dignity.",
    solarbin: "A standalone solar power system for a self-sufficient smart bin.",
    enjoymusic: "AI show-technology for immersive entertainment in Shanghai."
  };
  function taglineFor(p) { return p.tagline || TAGLINES[p.id] || p.summary; }

  function buildCard(p, feature) {
    var card = el("article", "card reveal");
    var coll = collectionOf(p);
    card.setAttribute("data-tags", p.tags.join("|"));
    card.setAttribute("data-collection", coll);
    card.setAttribute("data-open", p.id);        // whole card is clickable
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "View project: " + p.title);
    card.innerHTML =
      cardMedia(p, false, coll) +
      '<div class="card-body">' +
        '<span class="card-eyebrow">' + p.tags[0] + "</span>" +
        "<h3>" + p.title + "</h3>" +
      "</div>";
    return card;
  }

  function renderInto(containerId, groups) {
    var c = $("#" + containerId);
    if (!c) return;
    groups.forEach(function (g) {
      PROJECTS.filter(function (p) { return p.group === g; })
        .forEach(function (p) { c.appendChild(buildCard(p)); });
    });
  }
  renderInto("cards-projects", ["featured", "academic"]);
  renderInto("cards-internship", ["internship"]);

  /* ---------------------------------------------------------
     RENDER: Highlights — interactive sliding gallery
     --------------------------------------------------------- */
  var HIGHLIGHTS = [
    { id: "iadl", label: "Capstone Project", kicker: "Assistive Tech · Patent-supported",
      blurb: "Motion + force sensing for everyday rehab tasks \u2014 supporting a patent filing via IP2SG." },
    { id: "astar", label: "Internship · A*STAR IME", kicker: "Full-stack IoT software",
      blurb: "An ASP.NET Core MVC app with MQTT, SQL Server, and live dashboards for sensor monitoring." },
    { id: "enjoymusic", label: "Internship · EnjoyMusic", kicker: "AI-driven show technology",
      blurb: "AI mapping visuals, lighting automation, and music analysis for immersive entertainment." }
  ];
  (function buildHighlights() {
    var track = $("#hl-track"), dots = $("#hl-dots");
    if (!track) return;
    HIGHLIGHTS.forEach(function (h, i) {
      var p = PROJECTS.filter(function (x) { return x.id === h.id; })[0] || {};
      var media = '<div class="hl-card-media">' +
        (p.feature ? imgTag(p.feature.src, p.feature.alt, p.title)
          : (p.nda ? placeholderMarkup("Confidential — NDA", "") : placeholderMarkup(p.title, p.coverLabel))) + "</div>";
      var card = el("article", "hl-card");
      card.setAttribute("data-open", h.id);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "-1");
      card.setAttribute("aria-label", "View " + (p.title || h.label));
      card.dataset.idx = i;
      card.innerHTML = media +
        '<div class="hl-card-content">' +
          '<span class="hl-label">' + h.label + "</span>" +
          "<h3>" + (p.title || "") + "</h3>" +
          '<p class="hl-blurb">' + h.blurb + "</p>" +
          '<span class="btn-text">Open project <span class="arrow">→</span></span>' +
        "</div>";
      track.appendChild(card);
      var dot = el("button", "hl-dot");
      dot.setAttribute("type", "button");
      dot.setAttribute("aria-label", "Go to highlight " + (i + 1));
      dot.dataset.idx = i;
      dots.appendChild(dot);
    });
    var slides = Array.prototype.slice.call(track.querySelectorAll(".hl-card"));
    var idx = 0;

    // Coverflow placement: active card full-size, neighbours shrink smoothly to the sides.
    function layout() {
      var cardW = slides[0] ? slides[0].offsetWidth : 420;
      var n = slides.length;
      slides.forEach(function (s, i) {
        // shortest signed distance around the ring → balanced left/right spread
        var o = ((i - idx) % n + n) % n;
        if (o > n / 2) o -= n;
        var ao = Math.abs(o);
        var sign = o < 0 ? -1 : 1;
        var x, scale, op, z;
        if (ao === 0) {
          x = 0; scale = 1; op = 1; z = 30;
        } else {
          x = sign * (cardW * 0.66 + (ao - 1) * cardW * 0.52);
          scale = Math.max(0.74, 1 - ao * 0.16);
          op = ao >= 2 ? 0 : 0.62;
          z = 30 - ao;
        }
        s.style.transform = "translate(-50%, -50%) translateX(" + x.toFixed(1) + "px) scale(" + scale.toFixed(3) + ")";
        s.style.opacity = op;
        s.style.zIndex = z;
        s.style.pointerEvents = ao >= 2 ? "none" : "auto";
        s.classList.toggle("is-active", ao === 0);
        s.setAttribute("aria-hidden", ao === 0 ? "false" : "true");
        s.setAttribute("tabindex", ao === 0 ? "0" : "-1");
      });
    }
    function updateDots() { dots.querySelectorAll(".hl-dot").forEach(function (d, i) { d.classList.toggle("is-active", i === idx); }); }
    function go(n) {
      idx = (n + slides.length) % slides.length;
      layout();
      updateDots();
    }

    // ---- Auto-rotate every 2s (pauses on hover / off-screen / reduced motion) ----
    var prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var autoTimer = null;
    function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function startAuto() {
      stopAuto();
      if (prefersReduce || slides.length < 2) return;
      autoTimer = setInterval(function () { go(idx + 1); }, 2000);
    }
    // Manual navigation reshuffles then restarts the countdown.
    function nav(n) { go(n); startAuto(); }

    $("#hl-prev").addEventListener("click", function () { nav(idx - 1); });
    $("#hl-next").addEventListener("click", function () { nav(idx + 1); });
    dots.addEventListener("click", function (e) { var d = e.target.closest(".hl-dot"); if (d) nav(+d.dataset.idx); });

    // Click a side card to bring it forward; click the active card to open it.
    track.addEventListener("click", function (e) {
      var card = e.target.closest(".hl-card");
      if (!card) return;
      var i = +card.dataset.idx;
      if (i !== idx) { e.stopPropagation(); nav(i); }
      // active card: let the click bubble to the global [data-open] handler
    });

    // Lightweight swipe / drag support
    var startX = null;
    track.addEventListener("pointerdown", function (e) { startX = e.clientX; });
    window.addEventListener("pointerup", function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX; startX = null;
      if (Math.abs(dx) > 48) nav(idx + (dx < 0 ? 1 : -1));
    });

    // Pause while the pointer is over the carousel, and when the tab is hidden.
    var stage = track.closest(".hl-stage") || track;
    stage.addEventListener("mouseenter", stopAuto);
    stage.addEventListener("mouseleave", startAuto);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAuto(); else startAuto();
    });

    window.addEventListener("resize", layout, { passive: true });
    layout();
    updateDots();
    startAuto();
  })();

  /* ---------------------------------------------------------
     RENDER: Highlights — compact cards (cover + tag + title)
     Merged into the About section.
     --------------------------------------------------------- */
  (function buildHighlightsMini() {
    var host = $("#hl-mini");
    if (!host) return;
    HIGHLIGHTS.forEach(function (h) {
      var p = PROJECTS.filter(function (x) { return x.id === h.id; })[0] || {};
      var media = '<div class="hlm-media">' +
        (p.feature ? imgTag(p.feature.src, p.feature.alt, p.title, containClass(p.feature))
          : (p.nda ? placeholderMarkup("Confidential — NDA", "") : placeholderMarkup(p.title, p.coverLabel))) + "</div>";
      var card = el("article", "hlm-card reveal");
      card.setAttribute("data-open", h.id);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "View " + (p.title || h.label));
      card.innerHTML = media +
        '<div class="hlm-body">' +
          '<span class="hlm-label">' + h.label + "</span>" +
          "<h3>" + (p.title || "") + "</h3>" +
        "</div>";
      host.appendChild(card);
    });
  })();

  /* ---------------------------------------------------------
     RENDER: Global Perspective — exchange cards
     --------------------------------------------------------- */
  var EXCHANGE = [
    { id: "cqu", programme: "GEO Programme", date: "Aug 2025 · 1 week", place: "Chongqing University, China",
      project: "心间 | Close to Heart",
      bullets: [
        "One-week cross-cultural immersion tackling loneliness among empty-nest elderly",
        "Field research, interviews, and concept validation in a new cultural context",
        "Designed a speech-based GenAI companion (ASR → NLU → dialect-aware speech)"
      ] },
    { id: "tiide", programme: "TIIDE Programme", date: "Oct – Dec 2025 · 3 months", place: "Zhejiang University, China",
      project: "Generations of Beauty — GenAI Campaign",
      bullets: [
        "GenAI beauty campaign linking L'Oréal Age Perfect to the Double Ninth Festival",
        "ComfyUI / FLUX.1 Kontext / LoRA workflows for culturally grounded visuals",
        "Agentic-coded campaign website and full collateral set"
      ] }
  ];
  (function buildExchange() {
    var grid = $("#exchange-grid");
    if (!grid) return;
    EXCHANGE.forEach(function (ex) {
      var p = PROJECTS.filter(function (x) { return x.id === ex.id; })[0] || {};
      var media = '<div class="ex-media">' +
        (p.feature ? imgTag(p.feature.src, p.feature.alt, p.title) : placeholderMarkup(p.title)) + "</div>";
      var card = el("article", "ex-card reveal");
      card.setAttribute("data-open", ex.id);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "View exchange project: " + (p.title || ex.project));
      card.innerHTML = media +
        '<div class="ex-body">' +
          '<div class="ex-meta"><span class="ex-prog">' + ex.programme + '</span><span class="ex-date">' + ex.date + "</span></div>" +
          "<h3>" + ex.place + "</h3>" +
          '<p class="ex-project">' + ex.project + "</p>" +
          '<ul class="ex-bullets">' + ex.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>" +
          '<span class="btn-text">View project <span class="arrow">→</span></span>' +
        "</div>";
      grid.appendChild(card);
    });
  })();

  // Keyboard activation for any clickable [data-open] element (cards + spotlights)
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var t = e.target.closest("[data-open]");
    if (t) { e.preventDefault(); openModal(t.getAttribute("data-open")); }
  });

  /* ---------------------------------------------------------
     RENDER: filters
     --------------------------------------------------------- */
  var filterBar = $("#filters");
  var activeFilter = "All";
  function makeFilterBtn(f, label) {
    var b = el("button", "filter-btn", label);
    b.setAttribute("type", "button");
    b.setAttribute("aria-pressed", String(f === "All"));
    b.dataset.filter = f;
    return b;
  }
  FILTER_CLUSTERS.forEach(function (cluster, ci) {
    var group = el("div", "filter-cluster" + (ci === 0 ? " is-collections" : ""));
    group.appendChild(el("span", "filter-cluster-label", cluster.label));
    var row = el("div", "filter-row");
    cluster.items.forEach(function (it) {
      var f = (typeof it === "string") ? it : it.f;
      var label = (typeof it === "string") ? it : it.label;
      row.appendChild(makeFilterBtn(f, label));
    });
    group.appendChild(row);
    filterBar.appendChild(group);
  });

  function applyFilter(filter) {
    activeFilter = filter;
    filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === filter));
    });
    var anyVisible = false;
    document.querySelectorAll("#projects .card").forEach(function (card) {
      var show;
      if (filter === "All") show = true;
      else if (filter === "Capstone" || filter === "Acad") show = card.getAttribute("data-collection") === filter;
      else show = card.getAttribute("data-tags").split("|").indexOf(filter) !== -1;
      card.classList.toggle("is-hidden", !show);
      if (show) anyVisible = true;
    });
    $("#no-results").style.display = anyVisible ? "none" : "block";
  }
  filterBar.addEventListener("click", function (e) {
    var b = e.target.closest(".filter-btn");
    if (!b) return;
    if (b.dataset.filter !== "All" && activeFilter === b.dataset.filter) {
      applyFilter("All");
    } else {
      applyFilter(b.dataset.filter);
    }
  });

  /* ---------------------------------------------------------
     RENDER: arts events
     --------------------------------------------------------- */
  var eventsGrid = $("#events-grid");
  function roleKey(role) {
    if (role.indexOf("Organiser") !== -1) return "organiser";
    if (role.indexOf("Tech Coordinator") !== -1) return "tech";
    if (role.indexOf("Operator") !== -1) return "operator";
    return "director";
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  EVENTS.forEach(function (ev, idx) {
    var node = el("article", "event reveal-bi role-" + roleKey(ev.role));
    node.setAttribute("data-event", idx);
    node.setAttribute("data-role", ev.role);
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.setAttribute("aria-label", "Open " + ev.title + " gallery (" + ev.images.length + " photo" + (ev.images.length > 1 ? "s" : "") + ")");
    var cover = ev.images[0];
    var count = ev.images.length;
    node.innerHTML =
      '<div class="event-gallery">' +
        imgTag(cover.src, cover.alt, ev.title) +
        '<span class="event-index">' + pad2(idx + 1) + "</span>" +
        (count > 1 ? '<span class="gallery-count">▦ ' + count + " photos</span>" : "") +
      "</div>" +
      '<div class="event-body">' +
        '<p class="event-role">' + ev.role + "</p>" +
        "<h3>" + ev.title + "</h3>" +
        '<p class="event-meta"><span>📍 ' + ev.location + "</span><span>🗓 " + ev.date + "</span></p>" +
        '<p class="event-note">' + ev.note + "</p>" +
        (ev.credit ? '<p class="event-credit"><svg class="ig-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle></svg><span>' + (ev.credit.prefix || "Photos by") + ' <a class="ig-link" href="' + ev.credit.url + '" target="_blank" rel="noopener">' + ev.credit.handle + "</a></span></p>" : "") +
        (ev.links && ev.links.length ? '<div class="event-links">' + ev.links.map(function (l) { return '<a class="event-link" href="' + l.href + '" target="_blank" rel="noopener">' + (l.type === "album" ? '<svg class="yt-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg>' : '<svg class="yt-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.6V8.4l6.3 3.6z"></path></svg>') + l.label + "</a>"; }).join("") + "</div>" : "") +
      "</div>";
    eventsGrid.appendChild(node);
  });

  /* ---------- Roles filter for production credits ---------- */
  var ROLES = ["All", "Lighting Director", "Tech Coordinator", "Organiser", "Lighting Operator"];
  var roleBar = $("#role-filters");
  if (roleBar) {
    roleBar.appendChild(el("span", "filter-cluster-label", "By role"));
    var roleRow = el("div", "filter-row");
    ROLES.forEach(function (r) {
      var b = el("button", "filter-btn role-filter", r === "All" ? "All Roles" : r);
      b.setAttribute("type", "button");
      b.setAttribute("aria-pressed", String(r === "All"));
      b.dataset.role = r;
      roleRow.appendChild(b);
    });
    roleBar.appendChild(roleRow);
    roleBar.addEventListener("click", function (e) {
      var b = e.target.closest(".role-filter");
      if (!b) return;
      var r = b.dataset.role;
      roleBar.querySelectorAll(".role-filter").forEach(function (x) { x.setAttribute("aria-pressed", String(x.dataset.role === r)); });
      eventsGrid.querySelectorAll(".event").forEach(function (node) {
        var show = r === "All" || node.getAttribute("data-role").indexOf(r) !== -1;
        node.classList.toggle("is-hidden", !show);
      });
      observeReveals();
      revealBiCheck();
    });
  }

  /* Arts credits reveal — scroll-driven with hysteresis.
     Reveal a card as it rises into view; only re-arm it once it has fully left
     the viewport. The wide gap between the reveal point and the reset point
     removes the flicker the old single-threshold observer caused, where a card
     parked right at 15% visibility would toggle on every tiny scroll. */
  var revealBiEls = Array.prototype.slice.call(document.querySelectorAll(".reveal-bi"));
  function isSmallScreen() { return window.matchMedia("(max-width: 720px)").matches; }
  function revealBiCheck() {
    // On phones the scroll-driven reveal is unreliable (zoom + rect math), and
    // an un-revealed card stays invisible. Just show them all — no drop-out.
    if (isSmallScreen()) { for (var j = 0; j < revealBiEls.length; j++) revealBiEls[j].classList.add("in"); return; }
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = 0; i < revealBiEls.length; i++) {
      var n = revealBiEls[i];
      var r = n.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;        // filtered out / hidden
      if (!n.classList.contains("in")) {
        if (r.top < vh * 0.85 && r.bottom > vh * 0.12) n.classList.add("in");
      } else {
        if (r.bottom < -80 || r.top > vh + 80) n.classList.remove("in");
      }
    }
  }
  revealBiCheck();

  /* ---------------------------------------------------------
     SCROLL REVEAL (IntersectionObserver) + blob parallax
     --------------------------------------------------------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }) : null;

  function addReveal(sels) {
    sels.forEach(function (s) { var n = document.querySelector(s); if (n) n.classList.add("reveal"); });
  }
  function setStagger() {
    document.querySelectorAll("#projects .cards, #internship .cards, #about .hl-mini, #events-grid, #contact .contact-boxes").forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (ch, i) {
        if (ch.classList.contains("reveal")) ch.style.transitionDelay = Math.min(i * 70, 420) + "ms";
      });
    });
  }
  function tagReveals() {
    addReveal(["#about .hero", "#about .about-highlights", "#arts .arts-hero", "#projects .section-head", "#projects .filters", "#internship .section-head", "#contact .contact-wrap", "#contact .skills-overview"]);
    document.querySelectorAll("#about .micro, #about .skills-block").forEach(function (n) { n.classList.add("reveal"); });
    document.querySelectorAll("#arts .arts-openers img").forEach(function (n) { n.classList.add("reveal"); });
    document.querySelectorAll("#projects .subhead, #arts .subhead, #contact .contact-box").forEach(function (n) { n.classList.add("reveal"); });
    setStagger();
  }
  tagReveals();

  // Reveal elements once they scroll into view. Uses getBoundingClientRect
  // (robust across browsers/embeds) rather than IntersectionObserver.
  function revealCheck() {
    if (isSmallScreen()) { document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { n.classList.add("in"); }); return; }
    var vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll(".reveal:not(.in)").forEach(function (n) {
      var r = n.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return;   // inside a hidden panel
      if (r.top < vh * 0.9) n.classList.add("in");    // in view or already scrolled past
    });
  }
  // Trigger after a panel becomes visible. IntersectionObserver handles the
  // natural scroll-driven reveal; rAF + timeout + scroll handler are fallbacks
  // for any context where IO is unavailable or throttled.
  function observeReveals() {
    if (io) document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { io.observe(n); });
    requestAnimationFrame(revealCheck);
    setTimeout(revealCheck, 200);
  }

  /* ---------------------------------------------------------
     SINGLE-SCROLL NAV (smooth scroll + scrollspy)
     --------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var navList = $("#navlist");
  var navToggle = $(".nav-toggle");
  var navEl = document.querySelector(".site-nav");
  var sectionIds = ["about", "exchange", "projects", "internship", "arts", "contact"];

  function navOffset() { return (navEl ? navEl.offsetHeight : 70) + 14; }
  var scrollFix = null;
  function scrollToId(id) {
    if (scrollFix) { clearInterval(scrollFix); scrollFix = null; }
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    var sec = document.getElementById(id);
    if (!sec) return;
    function targetY() {
      return Math.round(sec.getBoundingClientRect().top + window.scrollY - navOffset());
    }
    window.scrollTo({ top: targetY(), behavior: "smooth" });
    // Content above the target can change height mid-scroll (lazy images
    // loading, reveal animations settling), which throws the landing spot off.
    // Re-measure the target's live position a few times and correct until it
    // settles — snapping instantly on the later passes.
    var tries = 0;
    scrollFix = setInterval(function () {
      tries++;
      var want = targetY();
      var maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (want > maxY) want = maxY;
      if (Math.abs(window.scrollY - want) > 3) {
        window.scrollTo({ top: want, behavior: tries >= 3 ? "auto" : "smooth" });
      }
      if (tries >= 7) { clearInterval(scrollFix); scrollFix = null; }
    }, 200);
  }
  function closeMobileNav() { navList.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }
  ["touchstart", "wheel"].forEach(function (evt) {
    window.addEventListener(evt, function () {
      if (scrollFix) { clearInterval(scrollFix); scrollFix = null; }
    }, { passive: true });
  });

  document.querySelectorAll("[data-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var t = btn.getAttribute("data-target");
      // Move the highlight straight to the destination and freeze the
      // scrollspy so it doesn't light up every section we scroll past.
      spyLock = true;
      setActiveNav(t === "top" ? "about" : t);
      scrollToId(t);
      closeMobileNav();
    });
  });
  navToggle.addEventListener("click", function () {
    var open = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Scrollspy — highlight the section currently in view
  var spyLock = false;
  var spyIdle = null;
  function setActiveNav(current) {
    navLinks.forEach(function (l) {
      var on = l.getAttribute("data-target") === current;
      l.setAttribute("aria-current", on ? "true" : "false");
      l.classList.toggle("is-current", on);
    });
  }
  function spy() {
    // While a click-to-scroll is animating, keep the highlight pinned to the
    // clicked target so it doesn't skip through the sections in between.
    // Release once scrolling has settled.
    if (spyLock) {
      clearTimeout(spyIdle);
      spyIdle = setTimeout(function () { spyLock = false; spy(); }, 130);
      return;
    }
    var pos = window.scrollY + navOffset() + 8;
    var current = sectionIds[0];
    for (var i = 0; i < sectionIds.length; i++) {
      var sec = document.getElementById(sectionIds[i]);
      if (sec && (sec.getBoundingClientRect().top + window.scrollY) <= pos) current = sectionIds[i];
    }
    setActiveNav(current);
  }

  // Reveal everything currently in view + observe the rest
  observeReveals();
  spy();
  // Optional deep-link (#work etc.)
  if (location.hash) {
    var hid = location.hash.slice(1);
    if (sectionIds.indexOf(hid) !== -1) setTimeout(function () { scrollToId(hid); }, 120);
  }

  /* ---------------------------------------------------------
     PROJECT MODAL (drawer)
     --------------------------------------------------------- */
  var modal = $("#modal");
  var modalBody = $("#modal-body");
  var modalHero = $("#modal-hero");
  var lastFocused = null;

  function modalSection(label, text) {
    if (!text) return "";
    return '<div class="modal-section"><h4>' + label + "</h4><p>" + text + "</p></div>";
  }

  function openModal(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    lastFocused = document.activeElement;

    modalHero.innerHTML = p.feature
      ? imgTag(p.feature.src, p.feature.alt, p.title, containClass(p.feature))
      : (p.nda ? placeholderMarkup("Confidential — NDA", "") : placeholderMarkup(p.title, p.coverLabel));

    var evidence = "";
    if (p.evidence && p.evidence.length) {
      evidence = '<div class="modal-section"><h4>Evidence</h4><div class="evidence-grid">' +
        p.evidence.map(function (im, k) {
          return '<figure><img src="' + im.src + '" alt="' + im.alt + '" loading="lazy" data-evi="' + id + ":" + k +
            '" onerror="this.style.display=\'none\'" /><figcaption>' + (im.caption || "") + "</figcaption></figure>";
        }).join("") + "</div></div>";
    }

    var links = "";
    if (p.links && p.links.length) {
      links = p.links.map(function (l) {
        return '<a class="modal-link" href="' + l.href + '" target="_blank" rel="noopener">↗ ' + l.label + "</a>";
      }).join(" ");
    }

    var media = "";
    if (p.youtube) {
      media += '<div class="modal-section"><h4>Video</h4>' +
        '<a class="modal-link video-watch" href="https://www.youtube.com/watch?v=' + p.youtube +
        '" target="_blank" rel="noopener">\u2197 Watch on YouTube</a>' +
        "</div>";
    }
    if (p.clips && p.clips.length) {
      media += '<div class="modal-section"><h4>Clips</h4><div class="clip-grid">' +
        p.clips.map(function (c) {
          return '<figure class="clip"><video controls preload="metadata" src="' + c.src + '"></video>' +
            (c.caption ? "<figcaption>" + c.caption + "</figcaption>" : "") + "</figure>";
        }).join("") + "</div></div>";
    }

    modalBody.innerHTML =
      tagsMarkup(p.tags) +
      '<h2 id="modal-title">' + p.title + "</h2>" +
      (p.period ? '<p class="modal-period">' + p.period + "</p>" : "") +
      '<p style="color:var(--ink-soft);font-size:1.05rem;">' + p.summary + "</p>" +
      (p.nda ? '<div class="nda-banner">🔒 ' + p.nda + "</div>" : "") +
      modalSection("Problem", p.problem) +
      modalSection("Role / Process", p.process) +
      modalSection("Solution / Tech Stack", p.solution) +
      '<div class="modal-section"><h4>Skills Employed</h4><div class="cloud" style="margin-top:6px;">' +
        p.stack.map(function (s) { return '<span class="chip">' + s + "</span>"; }).join("") + "</div></div>" +
      modalSection("Results / Evidence", p.results) +
      media +
      evidence +
      (links ? '<div class="modal-section">' + links + "</div>" : "");

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#modal-close").focus();

    // Evidence thumbnails -> lightbox
    modalBody.querySelectorAll("[data-evi]").forEach(function (img) {
      img.addEventListener("click", function () {
        var parts = img.getAttribute("data-evi").split(":");
        var proj = PROJECTS.filter(function (x) { return x.id === parts[0]; })[0];
        openLightbox(proj.evidence, parseInt(parts[1], 10));
      });
    });
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // Open from any card button
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-open]");
    if (btn) openModal(btn.getAttribute("data-open"));
  });
  $("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });

  // --- Mobile only: swipe-left to dismiss the expansion card ---
  (function swipeToClose() {
    var panel = $("#modal-panel");
    if (!panel) return;
    function isMobileLike() {
      return window.matchMedia("(hover: none), (pointer: coarse)").matches;
    }
    var sx = 0, sy = 0, dx = 0, dy = 0, tracking = false, decided = false, horizontal = false;
    function reset(animate) {
      panel.style.transition = animate ? "transform 0.22s ease" : "";
      panel.style.transform = "";
      if (animate) {
        setTimeout(function () { panel.style.transition = ""; }, 240);
      }
    }
    panel.addEventListener("touchstart", function (e) {
      if (!isMobileLike() || e.touches.length !== 1) { tracking = false; return; }
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
      dx = dy = 0; tracking = true; decided = false; horizontal = false;
      panel.style.transition = "";
    }, { passive: true });
    panel.addEventListener("touchmove", function (e) {
      if (!tracking) return;
      dx = e.touches[0].clientX - sx;
      dy = e.touches[0].clientY - sy;
      if (!decided && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        decided = true;
        horizontal = Math.abs(dx) > Math.abs(dy);   // lock to the dominant axis
      }
      // Hijack a horizontally-dominant swipe (either direction) to drag the
      // panel, and cancel the event so the browser can't turn the same gesture
      // into back/forward history navigation.
      if (decided && horizontal) {
        if (e.cancelable) e.preventDefault();
        panel.style.transform = "translateX(" + dx + "px)";
      }
    }, { passive: false });
    panel.addEventListener("touchcancel", function () {
      if (!tracking) return;
      tracking = false;
      reset(true);
    }, { passive: true });
    panel.addEventListener("touchend", function () {
      if (!tracking) return;
      tracking = false;
      if (decided && horizontal && Math.abs(dx) > 70) {
        closeModal();
        reset(false);
      } else {
        reset(true);   // spring back
      }
    }, { passive: true });
  })();

  /* ---------------------------------------------------------
     LIGHTBOX (arts galleries + evidence)
     --------------------------------------------------------- */
  var lightbox = $("#lightbox");
  var lbImg = $("#lb-img");
  var lbCap = $("#lb-cap");
  var lbSet = [];
  var lbIndex = 0;
  var lbPreloaded = {};
  var lbToken = 0;

  // Preload + decode every image in an album so stepping through it is instant
  // after the first open (albums are small — 2–5 photos). decode() moves the
  // costly JPEG decode off the main thread so the eventual swap doesn't jank.
  function preloadSet(set) {
    if (!set) return;
    set.forEach(function (item) {
      if (!item || !item.src || lbPreloaded[item.src]) return;
      lbPreloaded[item.src] = 1;
      var im = new Image(); im.decoding = "async"; im.src = item.src;
      if (im.decode) { im.decode().catch(function () {}); }
    });
  }

  function showLb() {
    if (!lbSet.length) return;
    var item = lbSet[lbIndex];
    var myToken = ++lbToken;   // guard against races from rapid stepping / reopening

    // Caption + arrows update immediately; the image fades in once it's decoded.
    lbCap.textContent = (item.caption || item.alt || "") + (lbSet.length > 1 ? "  ·  " + (lbIndex + 1) + " / " + lbSet.length : "");
    var single = lbSet.length <= 1;
    $("#lb-prev").style.display = single ? "none" : "";
    $("#lb-next").style.display = single ? "none" : "";

    // Hide the current frame so we never flash the previous album's photo.
    lbImg.classList.add("is-loading");

    var loader = new Image();
    loader.decoding = "async";
    function reveal() {
      if (myToken !== lbToken) return;   // superseded by a newer navigation
      lbImg.src = item.src;
      lbImg.alt = item.alt || "";
      lbImg.classList.remove("is-loading");
    }
    loader.onload = reveal;
    loader.onerror = function () {
      if (myToken !== lbToken) return;
      // Missing image: drop it from this gallery and continue gracefully.
      lbSet.splice(lbIndex, 1);
      if (!lbSet.length) { closeLightbox(); return; }
      lbIndex = lbIndex % lbSet.length;
      showLb();
    };
    loader.src = item.src;
    if (loader.decode) { loader.decode().then(reveal).catch(function () {}); }
  }
  function openLightbox(set, idx) {
    lbSet = set.slice(); lbIndex = idx || 0;   // copy so we never mutate source data
    preloadSet(lbSet);                          // warm the whole album up front
    showLb();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#lb-close").focus();
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    // keep body locked if the modal is still open underneath
    if (!modal.classList.contains("is-open")) document.body.style.overflow = "";
  }
  function lbStep(d) { lbIndex = (lbIndex + d + lbSet.length) % lbSet.length; showLb(); }

  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", function () { lbStep(-1); });
  $("#lb-next").addEventListener("click", function () { lbStep(1); });
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox || e.target.classList.contains("lightbox-stage")) closeLightbox(); });

  // Arts event cards open the lightbox (click anywhere on the card)
  eventsGrid.addEventListener("click", function (e) {
    if (e.target.closest(".ig-link") || e.target.closest(".event-link")) return;   // let credit / video links open normally
    var node = e.target.closest(".event");
    if (node) openLightbox(EVENTS[+node.dataset.event].images, 0);
  });
  eventsGrid.addEventListener("keydown", function (e) {
    var node = e.target.closest(".event");
    if (node && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLightbox(EVENTS[+node.dataset.event].images, 0); }
  });

  /* ---------------------------------------------------------
     Global keyboard: ESC + arrows
     --------------------------------------------------------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (lightbox.classList.contains("is-open")) closeLightbox();
      else if (modal.classList.contains("is-open")) closeModal();
    } else if (lightbox.classList.contains("is-open")) {
      if (e.key === "ArrowLeft") lbStep(-1);
      if (e.key === "ArrowRight") lbStep(1);
    }
  });

  /* ---------------------------------------------------------
     Back to top
     --------------------------------------------------------- */
  var toTop = $("#to-top");
  var blobs = document.querySelectorAll(".blob");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    toTop.classList.toggle("is-visible", y > 600);
    revealCheck();
    spy();
    revealBiCheck();
    if (!reduceMotion) {
      for (var i = 0; i < blobs.length; i++) {
        blobs[i].style.transform = "translate3d(0," + (y * (0.05 + i * 0.03)).toFixed(1) + "px,0)";
      }
    }
  }, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------------------------------------------------
     Preload cover images so cards appear instantly on scroll
     --------------------------------------------------------- */
  (function preloadCovers() {
    // Respect data-saver / very slow links — rely purely on native lazy-loading there.
    var conn = navigator.connection || {};
    if (conn.saveData || /2g/.test(conn.effectiveType || "")) return;

    var seen = {};
    function load(urls) {
      urls.forEach(function (u) {
        if (!u || seen[u]) return; seen[u] = 1;
        var im = new Image(); im.decoding = "async"; im.src = u;
      });
    }
    // Only warm the cover images that appear first (project + album covers).
    // Remaining album photos are handled by native lazy-loading, and the
    // lightbox warms an album the moment it opens — so no bulk preload here.
    var covers = [];
    PROJECTS.forEach(function (p) { if (p.feature && p.feature.src) covers.push(p.feature.src); });
    EVENTS.forEach(function (ev) { if (ev.images && ev.images[0]) covers.push(ev.images[0].src); });
    function idle(fn, t) {
      if ("requestIdleCallback" in window) requestIdleCallback(fn, { timeout: t });
      else setTimeout(fn, t / 4);
    }
    idle(function () { load(covers); }, 1500);
  })();

  /* ---------------------------------------------------------
     Smooth open/close for About Me <details> panels
     --------------------------------------------------------- */
  (function smoothFolds() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("#about .drop-card, #about .skills-fold").forEach(function (det) {
      var summary = det.querySelector("summary");
      var content = det.querySelector(".skills-fold-body") || det.querySelector("summary ~ *");
      if (!summary || !content) return;
      content.style.overflow = "hidden";
      var animating = false;
      function clear() { content.style.transition = ""; content.style.height = ""; content.style.opacity = ""; animating = false; }
      function doToggle() {
        if (animating) return;
        animating = true;
        var closing = det.open;
        var settleTimer = null;
        // Single finalizer, driven by whichever fires first: the height
        // transition end OR a safety timeout. This guarantees `animating`
        // always resets and the card can never jam in a half-toggled state.
        function done() {
          if (!animating) return;
          content.removeEventListener("transitionend", onEnd);
          clearTimeout(settleTimer);
          if (closing) det.open = false;
          clear();
        }
        function onEnd(ev) { if (ev.propertyName === "height") done(); }
        content.addEventListener("transitionend", onEnd);
        settleTimer = setTimeout(done, 480);

        if (closing) {
          var h = content.scrollHeight;
          content.style.height = h + "px";
          content.style.transition = "height 0.34s cubic-bezier(.4,0,.2,1), opacity 0.28s ease";
          requestAnimationFrame(function () {
            content.style.opacity = "0";
            content.style.height = "0px";
          });
        } else {
          det.open = true;
          var target = content.scrollHeight;
          content.style.height = "0px";
          content.style.opacity = "0";
          requestAnimationFrame(function () {
            content.style.transition = "height 0.4s cubic-bezier(.16,1,.3,1), opacity 0.42s ease";
            content.style.height = target + "px";
            content.style.opacity = "1";
          });
        }
      }
      // The philosophy drop-cards toggle from ANYWHERE on the card — header,
      // teaser, or body text — both to open AND to close. Other folds keep the
      // summary-only toggle. Ignore links/controls and active text selection.
      if (det.classList.contains("drop-card")) {
        det.style.cursor = "pointer";
        content.style.cursor = "pointer";
        det.addEventListener("click", function (e) {
          if (animating) return;
          if (e.target.closest("a, button, input, textarea, select")) return;
          if (window.getSelection && String(window.getSelection())) return;
          e.preventDefault();
          doToggle();
        });
      } else {
        summary.addEventListener("click", function (e) { e.preventDefault(); doToggle(); });
      }
    });
  })();
})();
