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
    return '<img src="' + src + '" alt="' + escHtml(alt) + '" loading="lazy" ' +
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
    "Python", "Java", "C++", "Arduino / ESP32", "ASP.NET Core MVC", "HTML", "CSS",
    "JavaScript", "SQL", "SQLite", "Room Database", "MQTT", "OpenCV", "Pygame",
    "Tkinter", "Matplotlib", "Fusion 360", "Rhino / Grasshopper", "ComfyUI",
    "FLUX.1 Kontext", "ControlNet", "MediaPipe", "React / Next.js exposure", "GitHub Pages"
  ];
  var CREATIVE_SKILLS = [
    "Human-Centred Design", "Participatory Design", "Project Management",
    "Technical Documentation", "Design Thinking", "Data Cleaning", "Visual Storytelling",
    "Lighting Direction", "Stage Management", "Production Planning", "Team Leadership",
    "Stakeholder Coordination", "Cross-Cultural Collaboration"
  ];
  var ARTS_SKILL_GROUPS = [
    { label: "Event Planning", items: ["Stage Management", "Technical Coordination", "Production Scheduling", "Bump-In Planning", "Risk Assessment"] },
    { label: "Technical Skills", items: ["Show Calling", "Stage Crew", "Hybrid & Digital Audio Consoles", "GrandMA 2", "GrandMA 3", "Avolite", "Video Switcher"] }
  ];

  var FILTER_CLUSTERS = [
    { label: "Collections", items: [
      { f: "All", label: "All Work" },
      { f: "Intern", label: "Intern" }
    ] },
    { label: "By project focus", items: [
      "Research", "Assistive Tech", "AI-Powered", "IoT / Software Engineering",
      "Human-Centred Design", "Data / Modelling", "Creative Technology",
      "Sustainability", "Product Design"
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
      tags: ["Assistive Tech", "Research", "IoT / Software Engineering", "Human-Centred Design"],
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
      links: [{ label: "ARTSIC certificate (PDF)", href: "https://drive.google.com/file/d/1akDJdFsLQU41GBk2h1des-EL3fPAMGDz/view?usp=sharing" }]
    },
    {
      id: "astar", group: "internship",
      title: "A*STAR IME Proprietary Sensor Software Application Internship",
      tags: ["Research", "Intern", "IoT / Software Engineering", "Data / Modelling"],
      summary: "A full-stack IoT software internship involving cloud-based sensor monitoring, live data transfer, database handling, and dashboard development within a research environment.",
      feature: null, // NDA — no visuals disclosed
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

    /* ---------- ACADEMIC ---------- */
    {
      id: "audiometry", group: "academic",
      title: "Pure Tone Audiometry Assessment & Recommendation",
      tags: ["Research"],
      coverLabel: "",
      summary: "Analysed an audiometry case through air conduction, bone conduction, masking, hearing-loss classification, and implications for speech perception.",
      feature: { src: ACAD + "PureToneAudiometry/Cover.webp", alt: "Pure tone audiometry assessment cover" },
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
    {
      id: "parametric", group: "academic",
      title: "Parametric Modelling with Rhino Grasshopper",
      tags: ["Creative Technology", "Product Design"],
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
      id: "lca", group: "academic",
      title: "Life Cycle Analysis Report",
      tags: ["Sustainability", "Research", "Data / Modelling"],
      coverLabel: "",
      summary: "Compared single-use PET cups, biodegradable bamboo cups, and reusable polycarbonate cups through life-cycle analysis.",
      feature: { src: ACAD + "LCA/Cover.webp", alt: "Life cycle analysis of disposable, biodegradable, and reusable cups" },
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
      id: "double-diamond", group: "academic",
      title: "Double-Diamond Centric Product Development",
      tags: ["Human-Centred Design", "Product Design"],
      summary: "Designed “NestAway / Snack Overflow,” a canteen seating and passive bird-deterrence system to improve comfort in SUTD's dining environment.",
      feature: { src: ACAD + "DTI/Auraplan_Cover.webp", alt: "Auraplan canteen seating and bird-deterrence concept" },
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
      id: "linear-regression", group: "academic",
      title: "Multi-Feature CO₂ Prediction with Linear Regression",
      tags: ["Data / Modelling", "Research", "Sustainability"],
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
      links: [{ label: "Full report (PDF)", href: "https://drive.google.com/file/d/1pdLxPyg57m73bAovpHYkQGSFHYhPGePS/view?usp=sharing" }]
    },
    {
      id: "unitrack", group: "academic",
      title: "UniTrack — Android University Application Tracker",
      tags: ["IoT / Software Engineering", "Human-Centred Design", "Data / Modelling"],
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
      id: "rewardnet", group: "academic",
      title: "RewardNet™ — Algorithmic Reward System Proposal",
      tags: ["Data / Modelling", "Product Design", "IoT / Software Engineering"],
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
      id: "eudaimonia", group: "academic",
      title: "Designing for Eudaimonia at Singapore's Bus Stops",
      tags: ["Human-Centred Design", "Research", "Product Design"],
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
      id: "solarbin", group: "academic",
      title: "Standalone Photovoltaic System for Smart Bin",
      tags: ["Research", "IoT / Software Engineering", "Sustainability"],
      tagline: "A standalone solar power system for a self-sufficient smart bin.",
      summary: "A compact standalone photovoltaic power system designed to support smart bin sensors and communication modules, reducing grid reliance while improving the feasibility of sustainable smart infrastructure.",
      feature: { src: ACAD + "DES/Cover.webp", alt: "Standalone photovoltaic system for a smart bin prototype" },
      problem: "As Singapore advances Smart Nation 2.0, public infrastructure is increasingly expected to integrate sensing, automation, and digital monitoring. Smart bins introduce continuous power requirements for sensors, motors, and communication modules. This project explored how a standalone photovoltaic system could power a smart bin efficiently, reducing grid dependence while supporting sustainable digital infrastructure.",
      process: "Worked on a Designing Energy Systems academic project to size, test, and validate a standalone solar-powered smart bin. The process involved measuring load current across operating states, using a shunt resistor and oscilloscope to capture fast current draw, analysing peak sun hour constraints, sizing the battery and PV panel, and integrating the panel, charge controller, battery, and custom casing into a working prototype.",
      solution: "A compact photovoltaic system with battery storage powers the smart bin independently from the grid. The design uses a side-mounted solar panel casing, a Li-Po battery, and a charge controller on a scaled smart-bin prototype \u2014 with the panel kept off the lid to reduce mechanical strain on the opening mechanism.",
      stack: ["Photovoltaic Design", "Battery Sizing", "Panel Sizing", "Shunt Resistor Measurement", "Oscilloscope Testing", "Load Analysis", "Li-Po Battery", "Charge Controller", "Fusion / CAD Casing", "Energy Systems"],
      results: "Testing estimated a true daily load of ~420.5 mAh/day and a final adjusted battery requirement of ~867.2 mAh, making a 3.7 V \u22651000 mAh Li-Po battery a practical choice with margin. The PV system was sized against a worst-case December 3.97 PSH assumption using a 6 V, 480 mA panel setup \u2014 producing a working scaled prototype, electrical and mechanical schematics, charging-scenario analysis, and upscaled outdoor-use recommendations.",
      demonstrates: "Applied energy-system design, engineering measurement, hardware integration, and sustainability-oriented prototyping.",
      evidence: [],
      links: [{ label: "Full report (PDF)", href: "https://drive.google.com/file/d/1ZilkP-9BT8PNPfRDkkkcxtmqr86Aivb6/view?usp=sharing" }]
    },

    /* ---------- GLOBAL EXCHANGE ---------- */
    {
      id: "cqu", group: "exchange",
      title: "DIVE Immersion at Chongqing University: 心间 | Close to Heart",
      tags: ["Global Exchange", "Human-Centred Design", "AI-Powered", "Product Design"],
      summary: "A cross-cultural design project exploring companionship and reassurance for empty-nest elderly residents in China.",
      feature: { src: EX + "GEO_CQU.webp", alt: "Close to Heart eldercare companion concept at Chongqing University" },
      problem: "Empty-nest elderly residents may experience loneliness, digital fatigue, reluctance to disturb their children, and barriers to complex app-based systems.",
      process: "Worked in a cross-cultural student team to define user insights, generate concepts, study precedent products, and develop a speech-based sentimental companion concept.",
      solution: "“心间 | Close to Heart” is a non-robotic, familiar, speech-based companion concept designed to provide delightful everyday companionship and timely reassurance for families. It receives microphone input, converts speech to text, interprets context through NLU and personalisation, plans tone by dialect, politeness, pacing and length, composes a reply, and outputs Mandarin speech — with future routine nudges, quiet hours, family status updates, and emergency tool-calling.",
      stack: ["Human-Centred Design", "Eldercare", "Speech Interface", "GenAI Wrapper", "ASR", "NLU", "Text-to-Speech", "Proactive Nudges", "Wireframing", "Cross-Cultural Design"],
      results: "Developed a socially grounded AI companion concept with form factor, software stack, wireframe, validation themes, business model, and impact considerations.",
      evidence: [], links: []
    },
    {
      id: "tiide", group: "exchange",
      title: "TIIDE Exchange at Zhejiang University: GenAI Beauty Campaign",
      tags: ["Global Exchange", "AI-Powered", "Creative Technology", "Product Design"],
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
      links: [
        { label: "TIIDE programme certificate (PDF)", href: "https://drive.google.com/file/d/1MP41Cttm8QnH3nRn4Hg3X4TcNUpJGu0g/view?usp=sharing" },
        { label: "TIIDE programme transcript (PDF)", href: "https://drive.google.com/file/d/1u59tdUUWwhJZFzGoE2jnGpraJy4oor0y/view?usp=sharing" }
      ]
    },
    {
      id: "enjoymusic", group: "internship",
      title: "EnjoyMusic Internship: AI-Driven Entertainment & Show Technology",
      tags: ["Global Exchange", "Intern", "AI-Powered", "Creative Technology", "IoT / Software Engineering"],
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
        { label: "Final defence deck (PDF)", href: "https://drive.google.com/file/d/14WVVCeIUZRnLQ1U7cVAi7eyMeIG0jdLf/view?usp=sharing" },
        { label: "Internship certificate (PDF)", href: "https://drive.google.com/file/d/1wNsjglgm6AxfqjUY95vTjtATMCOiW_cf/view?usp=sharing" }
      ]
    }
  ];

  /* ---------- ARTS EVENTS (newest-style ordering as given) ---------- */
  var ARTS = "assets/Arts/";
  var EVENTS = [
    { title: "The Lift", date: "29 Nov 2019", location: "TP Black Box Theatre", role: "Lighting Director",
      note: "Early lighting direction work in a black box theatre setting, focusing on atmosphere, cueing, and stage visibility.",
      images: [{ src: ARTS + "2TheLift.jpg", alt: "The Lift production lighting" }] },
    { title: "TPDE's Rush..", date: "30 Nov 2019", location: "TP Design Paddy Field", role: "Tech Coordinator / Lighting Director",
      note: "Semi-open, site-specific performance support involving technical coordination and lighting direction.",
      images: [
        { src: ARTS + "3RUSH (1).jpg", alt: "Rush performance 1" },
        { src: ARTS + "3RUSH (2).jpg", alt: "Rush performance 2" },
        { src: ARTS + "3RUSH (3).jpg", alt: "Rush performance 3" }
      ] },
    { title: "Spectacular", date: "7–14 Apr 2022", location: "TP Auditorium", role: "Lighting Director",
      note: "Large-scale auditorium production requiring lighting planning, cue execution, and coordination with performers and crew.",
      images: [
        { src: ARTS + "4SPECTACULAR (1).jpg", alt: "Spectacular 1" },
        { src: ARTS + "4SPECTACULAR (2).jpg", alt: "Spectacular 2" },
        { src: ARTS + "4SPECTACULAR (3).jpg", alt: "Spectacular 3" }
      ] },
    { title: "Blissful One-Stop Wedding Show", date: "10 Jan 2025", location: "Marina Bay Sands", role: "Lighting Operator",
      note: "External event experience supporting lighting operation in a professional venue environment.",
      images: [{ src: ARTS + "5XBOWS.jpg", alt: "Blissful Wedding Show lighting" }] },
    { title: "Arts Fiesta 25", date: "6 Jul 2025", location: "Our Tampines Hub", role: "Lighting Director",
      note: "Community-facing arts showcase experience involving lighting direction for a multi-artform event.",
      images: [{ src: ARTS + "6ARTSFIESTA.jpg", alt: "Arts Fiesta 25 lighting" }] },
    { title: "Everything But The Brain", date: "25 Jul 2025", location: "SUTD Auditorium", role: "Lighting Director",
      note: "SUTD auditorium production organised by SUTD Drama Club of the tragicomedy by Singaporean local writer Jean Tay. Provided technical support in theatrical storytelling through audio and lighting.",
      images: [
        { src: ARTS + "7EBTB (1).jpg", alt: "Everything But The Brain 1" },
        { src: ARTS + "7EBTB (2).jpg", alt: "Everything But The Brain 2" }
      ] },
    { title: "Rockafall 2025", date: "3 Aug 2025", location: "SUTD Auditorium", role: "Lighting Director",
      note: "High-energy music event requiring responsive lighting direction, mood control, and coordination with musical performance.",
      credit: { handle: "@p____p.x", url: "https://www.instagram.com/p____p.x", prefix: "Guitarist in picture" },
      images: [
        { src: ARTS + "8Rockafall (1).jpg", alt: "Rockafall 2025 1" },
        { src: ARTS + "8Rockafall (2).jpg", alt: "Rockafall 2025 2" },
        { src: ARTS + "8Rockafall (3).jpg", alt: "Rockafall 2025 3" }
      ] },
    { title: "Ori Finale 25", date: "20 Sep 2025", location: "SUTD Indoor Sports Hall", role: "Lighting Director",
      note: "Large orientation finale production involving lighting design and show support in a non-traditional performance venue.",
      images: [
        { src: ARTS + "9OriFinale (1).JPG", alt: "Ori Finale 25 1" },
        { src: ARTS + "9OriFinale (2).JPG", alt: "Ori Finale 25 2" }
      ] },
    { title: "Fresh-No-More! 2026", date: "26 Jan 2026", location: "SUTD Auditorium & Campus Centre", role: "Organiser / Lighting Director",
      note: "Led a student-run sophomore celebration programme for over 250 undergraduates, endorsed by SUTD’s Head of Pillars and Office of Student Life. Oversaw programme design, logistics, publicity, event coordination, and lighting direction from planning to execution.",
      links: [
        { label: "Event Montage", href: "https://www.youtube.com/watch?v=vV-fi9XaRfc&t=2s" },
        { label: "Ceremony Premiere", href: "https://www.youtube.com/watch?v=vjNtHLwsDRc&t=3s" }
      ],
      images: [
        { src: ARTS + "10FNM (1).jpg", alt: "Fresh-No-More! 2026 1" },
        { src: ARTS + "10FNM (2).jpg", alt: "Fresh-No-More! 2026 2" },
        { src: ARTS + "10FNM (3).jpg", alt: "Fresh-No-More! 2026 3" },
        { src: ARTS + "10FNM (4).jpg", alt: "Fresh-No-More! 2026 4" },
        { src: ARTS + "10FNM (5).jpg", alt: "Fresh-No-More! 2026 5" }
      ] }
  ];

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
    var SETS = { technical: TECHNICAL_SKILLS, creative: CREATIVE_SKILLS };
    function render(cat) {
      cloud.classList.toggle("creative", cat === "creative");
      cloud.innerHTML = "";
      SETS[cat].forEach(function (s, i) {
        var chip = el("span", "chip skill-pop", s);
        chip.style.animationDelay = Math.min(i * 26, 520) + "ms";
        cloud.appendChild(chip);
      });
    }
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
  function cardMedia(p, feature) {
    if (p.feature) {
      return '<div class="card-media' + (feature ? " is-feature" : "") + '">' +
        imgTag(p.feature.src, p.feature.alt, p.title) + "</div>";
    }
    return '<div class="card-media">' +
      (p.nda ? placeholderMarkup("Confidential — NDA", "") : placeholderMarkup(p.title, p.coverLabel)) + "</div>";
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
    card.setAttribute("data-tags", p.tags.join("|"));
    card.setAttribute("data-open", p.id);        // whole card is clickable
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "View project: " + p.title);
    card.innerHTML =
      cardMedia(p, false) +
      '<div class="card-body">' +
        '<span class="card-eyebrow">' + p.tags[0] + "</span>" +
        "<h3>" + p.title + "</h3>" +
        '<p class="card-tagline">' + taglineFor(p) + "</p>" +
      "</div>";
    return card;
  }

  function renderGroup(containerId, group, feature) {
    var c = $("#" + containerId);
    PROJECTS.filter(function (p) { return p.group === group; })
      .forEach(function (p) { c.appendChild(buildCard(p, feature)); });
  }
  renderGroup("cards-featured", "featured", true);
  renderGroup("cards-internship", "internship", false);
  renderGroup("cards-academic", "academic", false);

  /* ---------------------------------------------------------
     RENDER: Highlights — interactive sliding gallery
     --------------------------------------------------------- */
  var HIGHLIGHTS = [
    { id: "iadl", label: "Flagship Project", kicker: "Assistive Tech · Patent-supported",
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

    // ---- Auto-rotate every 5s (pauses on hover / off-screen / reduced motion) ----
    var prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var autoTimer = null;
    function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function startAuto() {
      stopAuto();
      if (prefersReduce || slides.length < 2) return;
      autoTimer = setInterval(function () { go(idx + 1); }, 5000);
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
     RENDER: Global Perspective — exchange cards
     --------------------------------------------------------- */
  var EXCHANGE = [
    { id: "cqu", programme: "GEO Programme", date: "Aug 2025", place: "Chongqing University, China",
      project: "心间 | Close to Heart",
      bullets: [
        "Cross-cultural design team tackling loneliness among empty-nest elderly",
        "Field research, interviews, and concept validation in a new cultural context",
        "Designed a speech-based GenAI companion (ASR → NLU → dialect-aware speech)"
      ] },
    { id: "tiide", programme: "TIIDE Programme", date: "Sept – Dec 2025", place: "Zhejiang University, China",
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
    document.querySelectorAll("#work .card").forEach(function (card) {
      var tags = card.getAttribute("data-tags").split("|");
      var show = filter === "All" || tags.indexOf(filter) !== -1;
      card.classList.toggle("is-hidden", !show);
      if (show) anyVisible = true;
    });
    // Hide a subhead group when it has no visible cards
    document.querySelectorAll("#work .cards").forEach(function (grid) {
      var visible = grid.querySelectorAll(".card:not(.is-hidden)").length;
      var head = grid.previousElementSibling; // the .subhead
      if (head && head.classList.contains("subhead")) head.style.display = visible ? "" : "none";
      grid.style.display = visible ? "" : "none";
    });
    $("#no-results").style.display = anyVisible ? "none" : "block";
  }
  filterBar.addEventListener("click", function (e) {
    var b = e.target.closest(".filter-btn");
    if (b) applyFilter(b.dataset.filter);
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
        (ev.links && ev.links.length ? '<div class="event-links">' + ev.links.map(function (l) { return '<a class="event-link" href="' + l.href + '" target="_blank" rel="noopener"><svg class="yt-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.6V8.4l6.3 3.6z"></path></svg>' + l.label + "</a>"; }).join("") + "</div>" : "") +
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
    });
  }

  /* Bidirectional reveal for arts credits — re-animates on up & down scroll */
  var biIO = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { en.target.classList.toggle("in", en.isIntersecting); });
  }, { threshold: 0.15 }) : null;
  if (biIO) document.querySelectorAll(".reveal-bi").forEach(function (n) { biIO.observe(n); });
  else document.querySelectorAll(".reveal-bi").forEach(function (n) { n.classList.add("in"); });

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
    document.querySelectorAll("#work .cards, #events-grid, #about .micro-cards, #contact .contact-boxes").forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (ch, i) {
        if (ch.classList.contains("reveal")) ch.style.transitionDelay = Math.min(i * 70, 420) + "ms";
      });
    });
  }
  function tagReveals() {
    addReveal(["#about .hero", "#about .narrative", "#arts .arts-hero", "#work .section-head", "#work .filters", "#contact .contact-wrap"]);
    document.querySelectorAll("#about .micro, #about .skills-block").forEach(function (n) { n.classList.add("reveal"); });
    document.querySelectorAll("#arts .arts-openers img").forEach(function (n) { n.classList.add("reveal"); });
    document.querySelectorAll("#work .subhead, #arts .subhead, #contact .contact-box").forEach(function (n) { n.classList.add("reveal"); });
    setStagger();
  }
  tagReveals();

  // Reveal elements once they scroll into view. Uses getBoundingClientRect
  // (robust across browsers/embeds) rather than IntersectionObserver.
  function revealCheck() {
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
  var sectionIds = ["about", "highlights", "exchange", "work", "arts", "contact"];

  function navOffset() { return (navEl ? navEl.offsetHeight : 70) + 14; }
  function scrollToId(id) {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    var sec = document.getElementById(id);
    if (!sec) return;
    var y = sec.getBoundingClientRect().top + window.scrollY - navOffset();
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  function closeMobileNav() { navList.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }

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
      ? imgTag(p.feature.src, p.feature.alt, p.title)
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

  /* ---------------------------------------------------------
     LIGHTBOX (arts galleries + evidence)
     --------------------------------------------------------- */
  var lightbox = $("#lightbox");
  var lbImg = $("#lb-img");
  var lbCap = $("#lb-cap");
  var lbSet = [];
  var lbIndex = 0;

  function showLb() {
    if (!lbSet.length) return;
    var item = lbSet[lbIndex];
    // If an image path is missing, drop it from this gallery and continue gracefully.
    lbImg.onerror = function () {
      lbImg.onerror = null;
      lbSet.splice(lbIndex, 1);
      if (!lbSet.length) { closeLightbox(); return; }
      lbIndex = lbIndex % lbSet.length;
      showLb();
    };
    lbImg.src = item.src;
    lbImg.alt = item.alt || "";
    lbCap.textContent = (item.caption || item.alt || "") + (lbSet.length > 1 ? "  ·  " + (lbIndex + 1) + " / " + lbSet.length : "");
    var single = lbSet.length <= 1;
    $("#lb-prev").style.display = single ? "none" : "";
    $("#lb-next").style.display = single ? "none" : "";
  }
  function openLightbox(set, idx) {
    lbSet = set.slice(); lbIndex = idx || 0;   // copy so we never mutate source data
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
    var urls = [];
    PROJECTS.forEach(function (p) { if (p.feature && p.feature.src) urls.push(p.feature.src); });
    EVENTS.forEach(function (ev) { if (ev.images && ev.images[0]) urls.push(ev.images[0].src); });
    var seen = {};
    var run = function () {
      urls.forEach(function (u) {
        if (seen[u]) return; seen[u] = 1;
        var im = new Image(); im.decoding = "async"; im.src = u;
      });
    };
    if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 1500 });
    else setTimeout(run, 250);
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
      summary.addEventListener("click", function (e) {
        e.preventDefault();
        if (animating) return;
        animating = true;
        if (det.open) {
          var h = content.scrollHeight;
          content.style.height = h + "px";
          content.style.transition = "height 0.34s cubic-bezier(.4,0,.2,1), opacity 0.28s ease";
          requestAnimationFrame(function () {
            content.style.opacity = "0";
            content.style.height = "0px";
          });
          content.addEventListener("transitionend", function te(ev) {
            if (ev.propertyName !== "height") return;
            content.removeEventListener("transitionend", te);
            det.open = false; clear();
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
          content.addEventListener("transitionend", function te(ev) {
            if (ev.propertyName !== "height") return;
            content.removeEventListener("transitionend", te);
            clear();
          });
        }
      });
    });
  })();
})();
