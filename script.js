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
      { f: "Acad", label: "Academic" }
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
      process: "Worked as the Software Lead for a Biomedical Engineering major project team to develop and integrate sensing, motion capture, GUI, and data recording components. Justin was involved with the iterative development of the Desktop App GUI and local SQL data management, Pygame augmented game, Computer Vision detection with coloured markers.",
      solution: [
        "Force glove: multiplexed force-sensitive resistors under silicone padding, which spreads pressure evenly, with readings in newtons sent over HC-05 Bluetooth serial.",
        "Motion tracking: a webcam and OpenCV follow coloured markers during the task.",
        "Assessment game: a Pygame table-wiping activity that records force, motion and completion time.",
        "Therapist app: a Tkinter desktop GUI with Matplotlib charts for reviewing each patient across sessions.",
        "Records: SQLite3 stores patient records locally and replays past assessments, and force data exports as CSV."
      ],
      stack: ["OpenCV", "Pygame", "Tkinter", "SQLite3", "Matplotlib", "Force Sensitive Resistors", "HC-05", "Motion Tracking", "GUI Development", "Rehabilitation Technology"],
      results: [
        "Captures force, motion and completion time together in one table-wiping task, giving therapists numbers to compare across sessions.",
        "Force readings accurate to about ±0.5 N.",
        "Trialled electroluminescent markers to make camera tracking more reliable.",
        "Supported a patent filing through IP2SG.",
        "Showcased at the National Assistive & Rehabilitation Technologies Student Innovation Challenge (ARTSIC), an annual competition for ITE, polytechnic and university teams."
      ],
      demonstrates: "Assistive technology development, sensor integration, computer vision, rehabilitation-focused design, and the ability to translate a biomedical problem into a working prototype.",
      evidence: [
        { src: IADL + "Poster.webp", alt: "Full IADL project poster", caption: "Full project poster" },
        { src: IADL + "IADL (1).jpeg", alt: "IADL device prototype and setup", caption: "Prototype & setup" },
        { src: IADL + "IADL (2).webp", alt: "IADL interface and data capture", caption: "Interface / data capture" },
        { src: IADL + "IADL (3).webp", alt: "IADL motion tracking detail", caption: "Motion tracking detail" },
        { src: IADL + "IP2SG_Inbox.webp", alt: "Patent-related filing evidence via IP2SG", caption: "Patent filing evidence (IP2SG)" }
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
      solution: [
        "An ASP.NET Core 5 MVC web app in C# for monitoring proprietary sensors.",
        "Sensor data reaches the app over MQTT, using a publish/subscribe setup.",
        "A dashboard showing the incoming sensor data.",
        "SQL Server through Entity Framework Core, with CRUD operations and CSV import and export.",
        "Login and registration scaffolding, dependency injection and middleware, with each component documented."
      ],
      stack: ["ASP.NET Core 5", "MVC", "C#", "MQTT", "SQL Server", "Entity Framework Core", "CRUD", "CSV Import / Export", "Dashboarding", "Web Application Development", "Technical Documentation"],
      results: [
        "By the end of my internship, both P0 features were running: sensor data transmission over MQTT and the dashboard.",
        "Co-author (5th of 11) of a 2023 SPIE conference paper on reducing propagation loss in Ge-on-Si waveguides, from my lab assistance at IME."
      ],
      demonstrates: "Industrial-grade software engineering, IoT data pipelines, and disciplined documentation under research and confidentiality constraints.",
      nda: "Project visuals are not disclosed due to confidentiality and NDA considerations. Technical stack and high-level responsibilities are shown for portfolio context.",
      evidence: [],
      links: [
        { label: "SPIE paper on Ge-on-Si waveguides (co-author)", href: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12424/2649846/Reduction-of-Ge-on-Si-waveguide-propagation-loss-by-laser/10.1117/12.2649846.full" }
      ]
    },

    /* ---------- ACADEMIC (ordered by complexity) ---------- */
    {
      id: "sprout", group: "academic",
      title: "Sprout: Web Platform for Nature-Based Gamification",
      period: "Completed in August 2026",
      tags: ["Software / IoT", "Human-Centred & Product Design", "Sustainability"],
      tagline: "Scan a plant, collect its pixel-art creature, battle it. Dell ESC Project Award 2026.",
      summary: "A web platform where you photograph a plant, get a pixel-art creature generated from its species, collect it and take it into turn-based battle. Built for 50.003 Elements of Software Construction, it won the Dell Elements of Software Construction Project Award 2026.",
      feature: { src: ACAD + "ESC_Sprout/Cover.webp", alt: "Sprout's three modes: scan a plant, learn from the archive, battle" },
      problem: "Gardens by the Bay had 16 million visitors in 2025, yet most visits end with a photo and little learned. Visitors read a plaque once and forget it, and nothing asks them to use what they read. We asked how that foot traffic could turn into lasting environmental awareness.",
      process: "I was group leader of a six-person team. I wrote the requirements model: 16 use cases and 16 misuse cases (9 hostile, 7 non-malicious), each tied to the alternative flow that handles it. I also set the milestone plan so requirements, design and tests each had a named deliverable. In the code I built role-based navigation and the super-admin tier, made Google the authoritative sign-in to fix a duplicate-account lockout, reworked the landing, sign-up and log-in pages, and built the Contact Us ticket flow with status lookup. My scripted manual end-to-end tests found seven defects the automated suite had missed.",
      solution: [
        "Client: React 19 and Vite on Vercel, calling a containerised Node and Express server on Render.",
        "Backed by Firebase Auth, Cloud Firestore and Cloud Storage.",
        "Each photo passes six stages within a 110-second budget: validate, identify with Plant.id, check the species cache, generate with Gemini and FLUX, post-process, store.",
        "Sprites are cached per species, so AI cost grows with the number of plant species, not the number of users.",
        "Every merge to main builds, publishes and deploys a Docker image, with separate liveness and readiness probes and a clean shutdown on SIGTERM."
      ],
      stack: ["TypeScript", "React 19", "Vite", "Node.js / Express", "Firebase Auth", "Cloud Firestore", "Docker", "GitHub Actions CI/CD", "Playwright E2E", "Property-Based Testing", "Fuzz Testing", "Use & Misuse Cases", "UML", "GenAI Pipeline"],
      results: [
        "1,093 test cases across five levels, from unit and property-based tests to fuzzing and 13 end-to-end journeys against real Firebase emulators.",
        "The team shipped 39 production deploys in 32 days.",
        "Met 11 of the 12 twelve-factor criteria, with the twelfth partly met.",
        "Live demos at the ISTD Showcase, Gardens by the Bay, ACS (Independent) and Victoria Junior College reached over 120 visitors.",
        "Won the Dell Elements of Software Construction Project Award 2026."
      ],
      demonstrates: "Leading a team through a full software lifecycle, from requirements and misuse modelling to layered testing and cloud deployment.",
      videos: [
        { id: "F1EaFMxepHM", label: "Pitch video (YouTube)" },
        { id: "SFZRiLCGQro", label: "30-second demo (YouTube)" }
      ],
      evidence: [
        { src: ACAD + "ESC_Sprout/UseCases.webp", alt: "Sprout use case overview by actor", caption: "Use case overview" },
        { src: ACAD + "ESC_Sprout/MisuseCases.webp", alt: "Sprout hostile and non-malicious misuse cases", caption: "Misuse cases" },
        { src: ACAD + "ESC_Sprout/LiveScanner.webp", alt: "Live scanner running the six-stage sprite pipeline", caption: "Live scanner: one photo, six stages" },
        { src: ACAD + "ESC_Sprout/TechStack.webp", alt: "Sprout tech stack as a modular monolith", caption: "Tech stack" },
        { src: ACAD + "ESC_Sprout/Tests.webp", alt: "Chart of 1,093 tests across five levels", caption: "1,093 tests across five levels" }
      ],
      links: [
        { label: "Live web app", href: "https://sprout-web-app-jet.vercel.app" },
        { label: "GitHub repository", href: "https://github.com/Kopi-O-Kosong-Beng/sprout-web-app" },
        { label: "Pitch slides (PDF)", href: ACAD + "ESC_Sprout/Slides.pdf" },
        { label: "Final report (PDF)", href: ACAD + "ESC_Sprout/Final_Report.pdf" }
      ]
    },
    {
      id: "text-detection", group: "academic",
      title: "Detecting Machine-Generated Text with a Stylometric Ensemble",
      period: "Completed in August 2026",
      tags: ["Data & Modelling"],
      tagline: "Telling human from machine-written text when train and test sources differ.",
      summary: "A class Kaggle competition for 50.007 Machine Learning: label 6,999 documents as human-written or machine-generated when the training and test sets come from deliberately different sources. Our submitted ensemble scored 0.839 public and 0.834 private Macro-F1.",
      feature: { src: ACAD + "ML_TextDetection/Cover.webp", alt: "AI-generated versus human-written text" },
      problem: "The 20,000 training documents (62.5% machine-generated) and the hidden test set came from different corpora. A classifier trained only to answer “train file or test file?” scored an AUC of 0.80 to 0.84, so any feature that picks up topic misleads the model at test time.",
      process: "I was group leader of a five-person team and built the model we submitted. For the early tasks I wrote logistic regression from scratch and a PCA plus KNN baseline. For the final task I built the sparse linear ensemble and three ways of reading a document that ignore its topic: a structural skeleton that keeps function words and punctuation and replaces content words with shape tags (+0.010 public Macro-F1 on its own), a distorted-text view adapted from Stamatatos (2017), and 297 style statistics including compression ratios. I also hashed near-duplicate documents so no cross-validation fold trained and validated on the same text.",
      solution: [
        "Five views of each document feed six classifiers: linear SVMs on character n-grams, the skeleton and the distorted text, plus LightGBM and Extra Trees on the style statistics.",
        "Each score becomes a percentile rank, and non-negative least squares fits the blend weights out-of-fold.",
        "The blend gave three redundant models, including XGBoost, a weight of exactly zero.",
        "Published class rates set how many documents per source are labelled machine-generated, in place of a tuned threshold."
      ],
      stack: ["Python", "scikit-learn", "LightGBM", "Extra Trees", "Linear SVM", "Character N-gram TF-IDF", "Stylometry", "Adversarial Validation", "Non-Negative Least Squares", "Grouped Cross-Validation", "Grid Search", "Logistic Regression (from scratch)", "PCA + KNN"],
      results: [
        "Macro-F1 of 0.83930 on the public leaderboard and 0.83422 on the private one.",
        "The drop is about half a standard error, so the model did not overfit the public leaderboard.",
        "Improved on our first Task 3 submission by 0.048 and beat the course baseline."
      ],
      evidence: [
        { src: ACAD + "ML_TextDetection/DomainShift.webp", alt: "Adversarial validation showing the train and test sets are easy to tell apart", caption: "The domain shift" },
        { src: ACAD + "ML_TextDetection/FinalModel.webp", alt: "Final model: five document views, six classifiers, rank blend and class quota", caption: "Final model" },
        { src: ACAD + "ML_TextDetection/EveryModel.webp", alt: "Table of every model the team submitted with local and Kaggle scores", caption: "Every model, every score" },
        { src: ACAD + "ML_TextDetection/Results.webp", alt: "Public and private leaderboard scores", caption: "Public and private scores" }
      ],
      links: [
        { label: "Slides (PDF)", href: ACAD + "ML_TextDetection/Slides.pdf" },
        { label: "Final report (PDF)", href: ACAD + "ML_TextDetection/Final_Report.pdf" }
      ]
    },
    {
      id: "simpledb", group: "academic",
      title: "SimpleDB: A Database Engine in Java",
      period: "Completed in August 2026",
      tags: ["Software / IoT", "Data & Modelling"],
      tagline: "Storage, query operators, transactions and a B+ tree index in Java.",
      summary: "Across four labs for 50.043 Database Systems, my team built the core of SimpleDB, a relational database engine in Java: page storage and a buffer pool, query operators, locking transactions with deadlock detection, and a B+ tree index.",
      feature: { src: ACAD + "DB_SimpleDB/Cover.webp", alt: "SimpleDB cover with a B+ tree search path and the four labs" },
      problem: "A database has to keep data correct on disk while many transactions read and write it at once. The labs had us build those guarantees layer by layer and justify each design choice in a two-page report.",
      process: "I was group leader of Team 6 and worked on Lab 3, the transaction system: a LockManager that grants shared and exclusive page locks under strict two-phase locking, NO STEAL/FORCE commit and abort, and deadlock detection that searches the wait-for graph for a cycle before a transaction blocks. Lab 3 passed all of its locking, transaction, deadlock and abort-eviction tests, along with every test from Labs 1 and 2. Each lab ended with a design report covering decisions, non-trivial code, API changes and known gaps.",
      solution: [
        "Lab 1: heap pages with a bitmap header, heap files read one page at a time, a catalog and sequential scans.",
        "Lab 2: filters, nested-loop joins, grouped aggregates, inserts and deletes, and an LRU buffer pool.",
        "Lab 3 (my lab): shared and exclusive page locks under strict two-phase locking, NO STEAL/FORCE commit and abort, and deadlock detection on a wait-for graph.",
        "Lab 4: a B+ tree index with search, page splits, redistribution and merges.",
        "A safety audit in Lab 4 fixed three failure-path bugs, each reproduced as a failing test first."
      ],
      stack: ["Java", "Heap Files", "Buffer Pool (LRU)", "Query Operators", "Strict Two-Phase Locking", "Deadlock Detection", "B+ Tree Index", "Concurrency", "Unit & System Testing", "Technical Documentation"],
      results: [
        "Every provided unit and system test passed, including the transaction, deadlock and B+ tree concurrency tests.",
        "No existing method signature changed in any lab.",
        "Each lab ended with a design report; all four are linked below."
      ],
      evidence: [],
      links: [
        { label: "Lab 1: Storage (PDF)", href: ACAD + "DB_SimpleDB/Lab1_Storage.pdf" },
        { label: "Lab 2: Operators (PDF)", href: ACAD + "DB_SimpleDB/Lab2_Operators.pdf" },
        { label: "Lab 3: Transactions (PDF)", href: ACAD + "DB_SimpleDB/Lab3_Transactions.pdf" },
        { label: "Lab 4: B+ tree (PDF)", href: ACAD + "DB_SimpleDB/Lab4_BTree.pdf" }
      ]
    },
    {
      id: "unitrack", group: "academic",
      title: "UniTrack: Android University Application Tracker",
      period: "Completed in April 2026",
      tags: ["Software / IoT", "Human-Centred & Product Design"],
      summary: "An Android-native app for profile building, eligibility context, college-list management, and deadline tracking.",
      feature: { src: ACAD + "UniTrack/Cover.webp", alt: "UniTrack Android app shown on a phone" },
      problem: "Pre-tertiary students applying to multiple universities often manage fragmented requirements, essays, deadlines, and eligibility information manually.",
      process: "Helped coordinate checkoff requirements and project administration while contributing to development of the Android application.",
      solution: [
        "Native Android app in Java with an MVVM-style structure: Activities, ViewModels and Repositories.",
        "Data kept in a Room database and queried through DAOs in SQL.",
        "Object-oriented design using the Singleton, Composite and Strategy patterns."
      ],
      stack: ["Android", "Java", "MVVM", "Room Database", "SQL", "Repositories", "DAOs", "OOP", "Singleton", "Composite Pattern", "Strategy Pattern", "Pagination"],
      results: [
        "Shipped the must-have features: a personal case tracker, a college list builder and a deadline and requirement tracker.",
        "The team fixed an “App Not Responding” database problem with pagination and infinite scrolling.",
        "Presented at a project showcase booth (photos below)."
      ],
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
      summary: "Designed Auraplane, a canteen seating partition with passive bird deterrence to improve comfort in SUTD's dining environment.",
      feature: { src: ACAD + "DTI/Auraplan_Cover.webp", alt: "Auraplan canteen seating and bird-deterrence concept", fit: "contain" },
      problem: "SUTD canteen users experience pain points around seating comfort, privacy, bag storage, bird disturbance, spillage, and ambiguous vacancy.",
      process: "Used design thinking and downselection to identify seating as a major touchpoint, then developed a partition-origami bird shelter concept with modular subsystems.",
      solution: [
        "Final concept, Auraplane: a clip-on partition that switches between frosted glass with its LED off, for privacy, and clear glass with its LED on, to deter birds and serve as a discussion board.",
        "A light-dependent resistor lets diners switch modes without touching it, and the electronics are sealed in for food safety.",
        "Stored on a hook behind the chair and placed on the table by an embedded magnet.",
        "A passive reflective surface to deter birds, and Velcro brush seals for waterproofing.",
        "The earlier Part 2 design detailed a four-seat table (126 × 80.2 cm) with a scissor-lift bird shelter, a pleated mesh partition and N52 magnet hooks."
      ],
      stack: ["Double Diamond", "Site Observation", "Product Ideation", "Downselection", "Prototyping", "User-Centred Design"],
      results: [
        "Top pain points: finding a vacant seat (20.8%), bird pests (18.8%) and narrow walkways (18.8%).",
        "About 80% of a diner's time in the canteen was spent at the seating area, so seating became the main touchpoint.",
        "15 sketches across queueing, navigation and seating, cut to 3, then merged into partitioned seating with an origami bird shelter (about $3 a unit).",
        "Site readings set the limits: about 190 lux at the seats for the light sensor, 65 to 75 dB of conversation, 24 km/h wind and no power supply at the tables."
      ],
      evidence: [],
      links: [
        { label: "Critical image (PDF)", href: ACAD + "DTI/Critical_Image.pdf" },
        { label: "Digital site model (PDF)", href: ACAD + "DTI/Site_Model.pdf" },
        { label: "Part 2 report (PDF)", href: ACAD + "DTI/Part2_Report.pdf" }
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
      solution: [
        "Measured the bin's current with a 1.2 Ω shunt resistor and an oscilloscope: about 11 mA idle, 168 mA at start-up, 218 mA to open the lid and 235 mA to close it.",
        "Daily load of 420.5 mAh, assuming 1,437 lid cycles a day.",
        "Sized for the worst month, December, at 3.97 peak sun hours, with 1.5 days of autonomy.",
        "A charge controller between a 6 V panel and a 3.7 V Li-Po battery.",
        "The panel sits on a side casing designed in Fusion, so the lid motor does not carry its weight."
      ],
      stack: ["Photovoltaic Design", "Battery Sizing", "Panel Sizing", "Shunt Resistor Measurement", "Oscilloscope Testing", "Load Analysis", "Li-Po Battery", "Charge Controller", "Fusion / CAD Casing", "Energy Systems"],
      results: [
        "Battery: a 3.7 V Li-Po of at least 1,000 mAh, against a calculated need of 867 mAh.",
        "Panel: 6 V and 480 mA, supplying about 1,334 mAh a day against the 505 mAh needed.",
        "An acrylic cover for waterproofing cut the panel's efficiency by about 20% in shade.",
        "A working scaled prototype, plus sizing for a full-size bin that needs a 1,165 mAh battery."
      ],
      demonstrates: "Applied energy-system design, engineering measurement, hardware integration, and sustainability-oriented prototyping.",
      evidence: [],
      links: [{ label: "Full report (PDF)", href: ACAD + "DES/Report.pdf" }]
    },
    {
      id: "rewardnet", group: "academic",
      title: "RewardNet™: Algorithmic Reward System Proposal",
      period: "Completed in April 2026",
      tags: ["Data & Modelling", "Human-Centred & Product Design"],
      summary: "A full-suite reward ecosystem for a hypothetical mega-platform using data structures and algorithmic system logic.",
      feature: { src: ACAD + "RewardNet/Cover.webp", alt: "RewardNet algorithmic reward system proposal" },
      problem: "A large platform needs a reward system that can incentivise recent meaningful activity without relying only on lifetime accumulation or harsh resets.",
      process: "As the group leader, we designed the new loyalty tiers, the point system and the novel Prestige mechanism, and proposed the two data structures the team adopted: a hash table for user lookup and an order-statistic tree for the leaderboard.",
      solution: [
        "One reward system across five services: short-form video, long-form video, social sharing, e-commerce and a creator studio.",
        "Loyalty tiers from Bronze (0 to 999 status points) up to Platinum, requalified every six months.",
        "Four point types: status points for tiers, reward points for redeemables, Prestige for recurring users and Seasonal for activity.",
        "User lookup in a hash table using the division method and collision chaining, chosen over arrays and open addressing.",
        "Leaderboard on a red-black order-statistic tree, so finding a user's rank takes O(log n) time."
      ],
      stack: ["HashMap", "Dictionary of Objects", "Ordered Statistics Tree Concept", "System Design", "Loyalty Logic", "Reward Cycles", "Product Mechanics"],
      results: [
        "Prestige titles based on the highest tier a user has reached, so long-term users are not punished by the six-month reset.",
        "Seasonal challenges for eight mega-teams, themed For Good, For Fun or For Growth, with a team leaderboard beside the user leaderboard."
      ],
      evidence: [
        { src: ACAD + "RewardNet/Overview Datastructure.webp", alt: "RewardNet overview data structure", caption: "System data structure" }
      ],
      links: [{ label: "Full report (PDF)", href: ACAD + "RewardNet/Report.pdf" }]
    },
    {
      id: "linear-regression", group: "academic",
      title: "Multi-Feature CO₂ Prediction with Linear Regression",
      period: "Completed in August 2025",
      tags: ["Data & Modelling", "Sustainability"],
      summary: "Built a data-driven model to predict U.S. transport-sector CO₂ emissions and test mode-shift strategies.",
      feature: { src: ACAD + "DDW_LinearRegression/Cover.webp", alt: "Multi-feature CO₂ prediction with linear regression" },
      problem: "Policy and transport planners need transparent modelling tools that connect passenger traffic, mode mix, and CO₂ emissions.",
      process: "Performed data import, cleaning, feature analysis, visualisation, correlation checking, and linear modelling.",
      solution: [
        "A 33-year U.S. dataset (1985 and 1990 to 2021) of transport-sector CO₂ emissions.",
        "Seven features: registered vehicles, population, rapid transit per million urban residents, and passenger-km by transit, highway, intercity and aviation.",
        "Linear regression trained by gradient descent in Python, on an 80:20 train-test split.",
        "Pair plots to check each feature's linearity with emissions, and a correlation matrix to check collinearity.",
        "An interactive predictor: enter a value for each feature and get the predicted emissions."
      ],
      stack: ["Python", "Data Cleaning", "Linear Regression", "Correlation Matrix", "Feature Engineering", "Scenario Modelling", "Transport CO₂"],
      results: [
        "Iteration 1, all seven features: R² of 0.738.",
        "Iteration 2 dropped to four features, and R² fell to 0.706.",
        "Iteration 3 log-transformed the rapid transit ratio and transit traffic: R² rose to 0.852 and mean absolute error fell from 41.1 to 31.7.",
        "Limitation: some features are highly correlated, so their individual coefficients mean little."
      ],
      evidence: [
        { src: ACAD + "DDW_LinearRegression/Feature Prediction.webp", alt: "Feature prediction results from the CO\u2082 model", caption: "Feature Prediction" }
      ],
      links: [
        { label: "Full report (PDF)", href: ACAD + "DDW_LinearRegression/Report.pdf" },
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
      solution: [
        "A first-person Unity simulator of a bus stop for trying three designs: walk with WASD, look with the mouse, click to interact.",
        "Multi-functional pole: press its haptic button to flag your bus, and it shows the bus number and plays a sound when the bus arrives.",
        "Floor LED flagger: stand on the panel to flag the bus, and it lights up and vibrates when the bus arrives.",
        "Flag n' Alert: a sign on the panel turns green when your bus arrives, with a care spot lined up with the back door."
      ],
      stack: ["Ethnographic Observation", "Participatory Design", "Interviews", "Affinity Mapping", "Unity Simulation Prototype", "User Feedback", "Iteration"],
      results: [
        "Two ideas came out of the real-win-worth downselection: a panel that alerts waiting passengers with light and sound, and a clearer arrival display that shows the order of incoming buses.",
        "Insights from teenagers, elderly participants and a bus captain.",
        "Prototype variations tested, with follow-up responses from a range of users."
      ],
      videos: [{ id: "WaOrqbMs1kE", label: "Worldbuilding Simulation" }],
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
      solution: [
        "Three cups compared: single-use PET (10 g), solid bamboo (105 g) and reusable polycarbonate (100 g).",
        "Functional unit of 219,000 cups a year.",
        "Energy counted at every stage: material production, manufacturing, use, end-of-life incineration and avoided products from recycling."
      ],
      stack: ["Life Cycle Analysis", "Functional Unit Definition", "Material Stage", "Use Stage", "End-of-Life Stage", "Energy Impact Estimation"],
      results: [
        "Embodied energy per cup: 1.12 MJ for PET, 5.91 MJ for bamboo and 12.70 MJ for polycarbonate.",
        "Raw material production made up most of each cup's total.",
        "Recycling offset only a small share: 18.2% of PET and 0.7% of polycarbonate is recycled, and none of the bamboo."
      ],
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
      solution: [
        "Overhang: a Python script in Grasshopper adds odd sine functions to raise the stalactites, then flattens points above a threshold to keep half-cycles.",
        "Base: Voronoi cells from 20 randomly placed points, displaced along a curve for a rocky floor.",
        "Four code blocks: overhang surface, base surface, side borders and colouring.",
        "Equations tried out in Desmos first, because simulating each one in Grasshopper was slow."
      ],
      stack: ["Rhino", "Grasshopper", "Parametric Design", "Voronoi", "Sine Functions", "Computational Design"],
      results: [
        "A 3×3 design matrix across three parameters: overhang complexity Sy (0.1 to 0.337), Voronoi resolution Dv (50 to 150) and terrain displacement Cd (0 to 8).",
        "Found the useful limits: Voronoi subdivision above 150 made no visible difference, and displacement above 8 pushed the curve outside the region."
      ],
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
      solution: [
        "Air and bone conduction thresholds, with masking, read for both ears.",
        "Hearing loss classified by degree, type, symmetry and occurrence.",
        "Results linked to their effect on speech perception and behaviour."
      ],
      stack: ["Pure Tone Audiometry", "Air Conduction", "Bone Conduction", "Masking", "Hearing Loss Classification", "Technical Reporting"],
      results: [
        "Diagnosis: bilateral, asymmetrical mixed hearing loss, shown by an air-bone gap.",
        "Left ear mild to moderately severe (pure-tone average 36.7 dB); right ear moderately severe to severe (63.3 dB).",
        "Progressive over three years, based on the case history.",
        "Suspected presbycusis (age-related hearing loss), given the client's age."
      ],
      evidence: [
        { src: ACAD + "PureToneAudiometry/FinalAudiogram.webp", alt: "Final audiogram plot", caption: "Final audiogram" },
        { src: ACAD + "PureToneAudiometry/DiagnosisofAudiogram.webp", alt: "Audiogram diagnosis breakdown", caption: "Audiogram diagnosis" }
      ],
      links: [{ label: "Full report (PDF)", href: ACAD + "PureToneAudiometry/Report.pdf" }]
    },
    {
      id: "pillow-book", group: "academic",
      title: "Dissecting The Pillow Book: Taste, Rank and Courtship in Heian Japan",
      period: "Completed in July 2025",
      tags: ["Humanities"],
      summary: "A 60-slide seminar for SUTD's Global Humanities course (02.001) that read Sei Shōnagon's Pillow Book, a court diary finished around 1002 CE, against the society that produced it.",
      feature: { src: ACAD + "GH_PillowBookDissection/Cover.webp", alt: "The Pillow Book title slide with blue cloud motifs" },
      problem: "The Pillow Book has more than 320 passages and no plot: lists, vignettes, anecdotes and stray musings by a lady-in-waiting at the Heian court. We set out to show what those fragments say about the people who lived by them.",
      process: "I was group leader. We built the background first: the Heian period, its class structure, the Buddhist schools behind its art, and waka poetry. We then compared Sei Shōnagon with Murasaki Shikibu, who served a different empress, and sorted the excerpts under five themes: aesthetics as ethics, impermanence, social surveillance and rank, soft power, and class satire. For the courtship passages (43, 45, 46 and 153) we marked up the translated text itself, noting the zuihitsu form of each and Shōnagon's frame of mind.",
      solution: [
        "Each theme argued from named passages, such as “Things That Have Lost Their Power” for impermanence and “Shameful Things” for social surveillance.",
        "Shōnagon set against Thomas More, whose collectivism and rule by reason she does not share.",
        "Shōnagon set against Tao Yuanming, who found harmony by leaving society while she found it in court ritual and etiquette.",
        "A modern close: Instagram, TikTok and X as the digital version of the Heian court's cultural salon."
      ],
      stack: ["Close Reading", "Literary Analysis", "Historical Context", "Comparative Philosophy", "Text Annotation", "Research & Citation", "Presentation Design", "Canva", "Mentimeter", "Team Leadership"],
      results: [
        "A 60-slide deck with 34 cited sources, including books, papers and a master's thesis on Heian poetry.",
        "The class took part through a live Mentimeter poll.",
        "Closed on three questions for discussion: selective compassion, the urge to watch and rank others, and how little that part of human nature has changed."
      ],
      evidence: [
        { src: ACAD + "GH_PillowBookDissection/Themes.webp", alt: "Five themes for reading the excerpts: aesthetics as ethics, impermanence, social surveillance and rank, soft power, class satire", caption: "Five themes for the excerpts" },
        { src: ACAD + "GH_PillowBookDissection/CourtshipRitual.webp", alt: "Timeline of a Heian courtship from first glimpse to the dawn-parting poem", caption: "The courtship ritual in five steps" },
        { src: ACAD + "GH_PillowBookDissection/PassageDissection.webp", alt: "Passage 46 of The Pillow Book, highlighted and annotated", caption: "Passage 46, annotated" },
        { src: ACAD + "GH_PillowBookDissection/ThinkerComparison.webp", alt: "Sei Shōnagon compared with Tao Yuanming", caption: "Shōnagon and Tao Yuanming" },
        { src: ACAD + "GH_PillowBookDissection/FoodForThought.webp", alt: "Closing slide with three questions for discussion", caption: "Questions for discussion" }
      ],
      links: [{ label: "Slides (PDF)", href: ACAD + "GH_PillowBookDissection/Slides.pdf" }]
    },

    /* ---------- GLOBAL EXCHANGE ---------- */
    {
      id: "cqu", group: "exchange",
      title: "DIVE Immersion at Chongqing University: 心间 | Close to Heart",
      tags: ["1-Week Exchange", "Human-Centred & Product Design", "AI-Powered"],
      summary: "A one-week cross-cultural design immersion exploring companionship and reassurance for empty-nest elderly residents in China.",
      feature: { src: EX + "CQU/GEO_CQU.webp", alt: "Close to Heart eldercare companion concept at Chongqing University" },
      problem: "Empty-nest elderly residents may experience loneliness, digital fatigue, reluctance to disturb their children, and barriers to complex app-based systems.",
      process: "Over an intensive one-week immersion, worked in a cross-cultural student team to define user insights, generate concepts, study precedent products, and develop a speech-based sentimental companion concept.",
      solution: [
        "“心间 | Close to Heart”: a speech-based companion for empty-nest elderly people, deliberately familiar and non-robotic.",
        "Hardware: a microcontroller with Wi-Fi and Bluetooth, a speaker and microphone, solar or USB charging and a home/travel switch, in a customisable shell.",
        "Software: speech to text, NLU with personalisation, a tone planner for dialect, politeness, pacing and length, then a Mandarin voice reply.",
        "A proactive engine for routine check-ins and quiet hours; planned extras were emotion detection with Naive Bayes and emergency tool-calling."
      ],
      stack: ["Human-Centred Design", "Eldercare", "Speech Interface", "GenAI Wrapper", "ASR", "NLU", "Text-to-Speech", "Proactive Nudges", "Wireframing", "Cross-Cultural Design"],
      results: [
        "Ten early ideas, from a tea-pet oracle to a mahjong coach, narrowed using three precedents: PARO, ElliQ and the Nobi lamp.",
        "Bilingual wireframes for the home page and a family status page with a mood timeline.",
        "A proposal covering form factor, software stack, validation, business model and expected impact."
      ],
      evidence: [],
      links: [{ label: "Project proposal (PDF)", href: EX + "CQU/Proposal.pdf" }]
    },
    {
      id: "tiide", group: "exchange",
      title: "TIIDE Exchange at Zhejiang University: GenAI Beauty Campaign",
      tags: ["Global Exchange", "AI-Powered", "Creative Technology", "Human-Centred & Product Design"],
      summary: "“Generations of Beauty / 代代美丽: The Golden Thread of Time,” a GenAI campaign connecting L'Oréal Paris Age Perfect, the Double Ninth Festival, and intergenerational beauty.",
      feature: { src: EX + "TIIDE/Cover.webp", alt: "Generations of Beauty GenAI campaign cover" },
      problem: "The project explored how AI-generated campaign assets and a coded website could translate cultural values such as filial piety, longevity, and intergenerational connection into a modern brand experience.",
      process: "Worked on campaign concept, cultural analysis, AI image workflow experimentation, campaign collateral generation, and website concept development.",
      solution: [
        "Image generation in ComfyUI with SDXL, Juggernaut and LoRA.",
        "Editing with FLUX.1 Kontext, inpainting, ControlNet and scribble guidance, then upscaling.",
        "Campaign website built through agentic coding."
      ],
      stack: ["ComfyUI", "SDXL", "FLUX.1 Kontext", "LoRA", "Inpainting", "ControlNet", "Upscaling", "Prompt Engineering", "Campaign Design", "Agentic Coding", "Cultural Storytelling"],
      results: [
        "Campaign visuals, motifs and the final “Generations of Beauty” poster.",
        "Publications and collateral for the campaign.",
        "A coded campaign website demo."
      ],
      evidence: [
        { src: EX + "TIIDE/Final-Poster.webp", alt: "Generations of Beauty final campaign poster", caption: "Final campaign poster" },
        { src: EX + "TIIDE/Presentation.webp", alt: "GenAI beauty campaign presentation", caption: "Campaign presentation" },
        { src: EX + "TIIDE/Pubs-Collateral.webp", alt: "Campaign publications and collateral", caption: "Publications & collateral" },
        { src: EX + "TIIDE/T2I+LoRa.webp", alt: "Text-to-image and LoRA generation workflow", caption: "Text-to-image + LoRA workflow" },
        { src: EX + "TIIDE/flux1kontext.webp", alt: "FLUX.1 Kontext image editing workflow", caption: "FLUX.1 Kontext editing" },
        { src: EX + "TIIDE/TIIDE_Project.webp", alt: "TIIDE exchange team project", caption: "TIIDE exchange project" }
      ],
      links: []
    },
    {
      id: "enjoymusic", group: "internship",
      title: "EnjoyMusic Internship: AI-Driven Entertainment & Show Technology",
      period: "Oct \u2013 Dec 2025",
      tags: ["AI-Powered", "Creative Technology", "Software / IoT"],
      summary: "An AI entertainment internship in Shanghai, where I made GenAI show visuals and helped build prototypes for 3D pose estimation and machine learning in a new DAW.",
      feature: { src: INTERN + "Cover.webp", alt: "EnjoyMusic AI entertainment internship in Shanghai" },
      problem: "The entertainment industry increasingly needs workflows that connect creative direction, AI generation, visual production, music analysis, and live show execution.",
      process: "I interned with EnjoyMusic in Shanghai, whose projects included an interactive room installation at INS Land / Oasis and music-to-lighting automation. My own work was three pieces: show visuals made through a GenAI pipeline, a proof-of-concept 3D pose estimation demo for the web, and machine learning for a new DAW developed with a partner company under NDA.",
      solution: [
        "Show visuals through a full GenAI pipeline: text to image, then image to video.",
        "Helped build a proof of concept that estimates a person's pose in 3D and renders it in the browser.",
        "Machine learning for a new DAW, developed with a partner company under NDA."
      ],
      stack: ["AI Visual Workflow", "Image-to-Image", "Video-to-Image", "Stage Design", "GrandMA", "DMX", "Resolume Arena", "VJ Workflow", "MediaPipe", "React / Next.js exposure", "beat_this (Python)", "Music Annotation", "DAW Plugins", "C++"],
      results: [
        "My GenAI visuals were used at the Tomorrowland China afterparty.",
        "Presented the work in a final defence; the deck is linked below."
      ],
      evidence: [
        { src: INTERN + "TIIDE_Intern (1).webp", alt: "EnjoyMusic AI entertainment internship", caption: "Show-technology work" },
        { src: INTERN + "TIIDE_Intern (2).webp", alt: "EnjoyMusic internship show technology workflow", caption: "AI visual workflow" }
      ],
      clips: [],
      links: [
        { label: "AI mapping visual sample 1 (video)", href: "https://drive.google.com/file/d/1LihrrgyKInwXXFKa6vKEKnZlgst5GQO8/view?usp=sharing" },
        { label: "AI mapping visual sample 2 (video)", href: "https://drive.google.com/file/d/1VK1ouYlEXdIXICXywO7VsEutRQVWcpfc/view?usp=sharing" },
        { label: "Final defence deck (PDF)", href: INTERN + "Final_Defence.pdf" }
      ]
    }
  ];

  /* Production credits (EVENTS) now live with the Arts page: arts/arts-data.js */

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
  /* Skill -> the work that shows it. `open` opens a project drawer on this
     page; `href` goes to the Arts page. Skills without real evidence stay
     plain chips rather than pointing at something weak. */
  var SKILL_EVIDENCE = {
    "Python": { open: "iadl", label: "IADL device" },
    "Java": { open: "unitrack", label: "UniTrack" },
    "C++": { open: "enjoymusic", label: "EnjoyMusic audio plug-ins" },
    "ASP.NET Core MVC": { open: "astar", label: "A*STAR internship" },
    "SQL": { open: "unitrack", label: "UniTrack" },
    "SQLite": { open: "iadl", label: "IADL device" },
    "Room Database": { open: "unitrack", label: "UniTrack" },
    "MQTT": { open: "astar", label: "A*STAR internship" },
    "Fusion 360": { open: "solarbin", label: "Off-grid smart bin casing" },
    "Rhino / Grasshopper": { open: "parametric", label: "Stalactite study" },
    "ComfyUI": { open: "tiide", label: "Generations of Beauty" },
    "MediaPipe": { open: "enjoymusic", label: "EnjoyMusic motion capture" },
    "React / Next.js exposure": { open: "enjoymusic", label: "EnjoyMusic motion capture" },
    "Data Cleaning": { open: "linear-regression", label: "Transport CO\u2082 model" },
    "Human-Centred Design": { open: "eudaimonia", label: "Bus stop study" },
    "Participatory Design": { open: "eudaimonia", label: "Bus stop study" },
    "Technical Documentation": { open: "astar", label: "A*STAR internship" },
    "Design Thinking": { open: "double-diamond", label: "Auraplane" },
    "Project Management": { href: "arts/#fresh-no-more-2026", label: "Fresh-No-More! 2026" },
    "Lighting Direction": { href: "arts/#rockafall-2025", label: "Rockafall 2025" },
    "Stage Management": { href: "arts/#everything-but-the-brain", label: "Everything But The Brain" },
    "Production Planning": { href: "arts/#fresh-no-more-2026", label: "Fresh-No-More! 2026" },
    "Team Leadership": { href: "arts/#fresh-no-more-2026", label: "Fresh-No-More! 2026" },
    "Stakeholder Coordination": { href: "arts/#fresh-no-more-2026", label: "Fresh-No-More! 2026" },
    "Cross-Cultural Collaboration": { open: "cqu", label: "Close to Heart, Chongqing" }
  };
  var LINK_ICO = '<svg class="chip-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';
  function evidenceAttrs(ev) {
    return ev.open ? ' data-open="' + ev.open + '" role="button" tabindex="0"' : ' href="' + ev.href + '"';
  }

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
        var ev = SKILL_EVIDENCE[name];
        var cls = "chip skill-pop" + (isObj && s.bold ? " chip-bold" : "") + (isObj && s.libs ? " chip-expand" : "") + (ev ? " chip-linked" : "");
        var chip;
        if (isObj && s.libs) {
          chip = el("span", cls);
          chip.setAttribute("tabindex", "0");
          chip.setAttribute("role", "button");
          chip.setAttribute("aria-label", name + " \u2014 libraries: " + s.libs.join(", ") + (ev ? "; shown in " + ev.label : ""));
          chip.innerHTML = '<span class="chip-name">' + name + "</span>" +
            '<span class="chip-caret" aria-hidden="true">+' + s.libs.length + "</span>" +
            '<span class="chip-libs">' + s.libs.map(function (l) { return '<span class="lib">' + l + "</span>"; }).join("") +
              (ev ? '<a class="lib lib-go"' + evidenceAttrs(ev) + '>See it in ' + ev.label + " " + LINK_ICO + "</a>" : "") +
            "</span>";
        } else if (ev) {
          // A linked skill is a real link (project drawer or Arts page), marked
          // only by a small arrow so the cloud stays calm.
          chip = el(ev.open ? "button" : "a", cls);
          if (ev.open) { chip.setAttribute("type", "button"); chip.setAttribute("data-open", ev.open); }
          else chip.setAttribute("href", ev.href);
          chip.setAttribute("title", "Shown in " + ev.label);
          chip.setAttribute("aria-label", name + " \u2014 see " + ev.label);
          chip.innerHTML = name + LINK_ICO;
        } else {
          chip = el("span", cls);
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

  /* Year a project finished: an explicit `year`, else the last year in `period` */
  function yearOf(p) {
    if (p.year) return p.year;
    var m = (p.period || "").match(/(19|20)\d{2}/g);
    return m ? parseInt(m[m.length - 1], 10) : 0;
  }
  var FOCUS_ORDER = FILTER_CLUSTERS[1].items;

  function buildCard(p, withYear) {
    var card = el("article", "card reveal");
    var coll = collectionOf(p);
    var year = withYear ? yearOf(p) : 0;
    card.setAttribute("data-tags", p.tags.join("|"));
    card.setAttribute("data-collection", coll);
    if (year) card.setAttribute("data-year", year);
    card.setAttribute("data-open", p.id);        // whole card is clickable
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "View project: " + p.title + (year ? ", " + year : ""));
    card.innerHTML =
      cardMedia(p, false, coll) +
      '<div class="card-body">' +
        (year
          ? '<div class="card-meta"><span class="card-eyebrow">' + p.tags[0] + '</span><span class="card-year">' + year + "</span></div>"
          : '<span class="card-eyebrow">' + p.tags[0] + "</span>") +
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

  /* Projects: newest year first; within a year, by focus area in filter order */
  function renderByYear(containerId, groups) {
    var c = $("#" + containerId);
    if (!c) return;
    var list = PROJECTS.filter(function (p) { return groups.indexOf(p.group) !== -1; });
    var order = list.map(function (p, i) { return { p: p, i: i, y: yearOf(p), f: FOCUS_ORDER.indexOf(p.tags[0]) }; });
    order.sort(function (a, b) {
      return (b.y - a.y) || ((a.f < 0 ? 99 : a.f) - (b.f < 0 ? 99 : b.f)) || (a.i - b.i);
    });
    var lastYear = null;
    order.forEach(function (o) {
      if (o.y !== lastYear) {
        var h = el("h3", "year-head", "<span>" + o.y + "</span>");
        h.setAttribute("data-year", o.y);
        c.appendChild(h);
        lastYear = o.y;
      }
      c.appendChild(buildCard(o.p, true));
    });
  }
  renderByYear("cards-projects", ["featured", "academic"]);
  renderInto("cards-internship", ["internship"]);

  /* ---------------------------------------------------------
     RENDER: Awards & accolades
     --------------------------------------------------------- */
  var AWARDS = [
    {
      title: "A*STAR Science Award (Polytechnic)",
      eyebrow: "A*STAR · 2020",
      img: "assets/Accolades/ASTARScienceAward2020.webp",
      alt: "A*STAR Science Award (Polytechnic) certificate",
      desc: "Conferred to Singaporean Polytechnic students who demonstrate particularly strong aptitude and interest in mathematics and science, to spur their passion in scientific research and development."
    },
    {
      title: "Temasek Polytechnic Smitech Asia Prize",
      eyebrow: "Temasek Polytechnic · AY21/22",
      img: "assets/Accolades/Poly_SmitechAward.webp",
      alt: "Temasek Polytechnic Smitech Asia Prize certificate",
      desc: "Conferred to the best student of the subject Audiometry and Hearing Device in AY21/22."
    },
    {
      title: "Temasek CCA Silver Award",
      eyebrow: "Temasek Polytechnic · 2022",
      img: "assets/Accolades/TPCCASilverAward.webp",
      alt: "Temasek CCA Silver Award certificate",
      desc: "A pinnacle non-academic accolade presented annually, recognising and honouring students who have demonstrated exemplary leadership, resilience, and outstanding dedication to their Co-Curricular Activities (CCAs) across the arts, sports, and community service domains."
    },
    {
      title: "SUTD Student Service Excellence Award (Individual)",
      eyebrow: "SUTD · 2026",
      img: "assets/Accolades/SAA26ServiceExcellence.webp",
      alt: "SUTD Student Service Excellence Award (Individual) certificate",
      desc: "Recognises students who contribute significantly to the interests and/or welfare of the university community and enhance the quality of campus life."
    },
    {
      title: "Dell Elements of Software Construction Project Award",
      eyebrow: "SUTD × Dell Technologies · 2026",
      img: "assets/Accolades/DellESCProjectAward2026.webp",
      alt: "Dell Elements of Software Construction Course Award 2026 certificate",
      desc: "Awarded to the top project team in SUTD's Elements of Software Construction course. I led Sprout, our junior-year project, through requirements, design, implementation, cloud-native deployment and testing: 1,093 test cases across unit, integration and system levels, plus property-based and fuzz testing.",
      link: { label: "Read the LinkedIn post", href: "https://www.linkedin.com/posts/teh-nian-hong-justin_i-am-proud-to-share-that-sprout-our-junior-year-share-7494026093025488896-6Rbb/" }
    }
  ];
  (function renderAwards() {
    var host = document.getElementById("cards-awards");
    if (!host) return;
    host.innerHTML = AWARDS.map(function (a, i) {
      return '<article class="card award reveal" tabindex="0" role="button" ' +
        'data-award="' + i + '" aria-label="View ' + escHtml(a.title) + ' certificate">' +
        '<div class="card-media award-media">' +
          imgTag(a.img, a.alt, a.title, "is-contain") +
        "</div>" +
        '<div class="card-body">' +
          '<span class="card-eyebrow">' + escHtml(a.eyebrow) + "</span>" +
          "<h3>" + escHtml(a.title) + "</h3>" +
          '<p class="card-tagline">' + escHtml(a.desc) + "</p>" +
          (a.link ? '<a class="award-link btn-text" href="' + a.link.href + '" target="_blank" rel="noopener noreferrer">' + escHtml(a.link.label) + ' <span class="arrow" aria-hidden="true">→</span></a>' : "") +
        "</div>" +
      "</article>";
    }).join("");

    function openAward(node) {
      if (!node) return;
      var a = AWARDS[+node.dataset.award];
      openLightbox([{ src: a.img, caption: a.title }], 0);
    }
    host.addEventListener("click", function (e) {
      if (e.target.closest(".award-link")) return;   // the post link opens normally
      openAward(e.target.closest(".award"));
    });
    host.addEventListener("keydown", function (e) {
      if (e.target.closest(".award-link")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openAward(e.target.closest(".award"));
      }
    });
  })();

  /* ---------------------------------------------------------
     RENDER: Highlights — interactive sliding gallery
     --------------------------------------------------------- */
  var HIGHLIGHTS = [
    { id: "iadl", label: "Capstone Project", kicker: "Assistive Tech · Patent-supported",
      blurb: "Motion + force sensing for everyday rehab tasks \u2014 supporting a patent filing via IP2SG." },
    { id: "astar", label: "Internship · A*STAR IME", kicker: "Full-stack IoT software",
      blurb: "An ASP.NET Core MVC app with MQTT, SQL Server, and live dashboards for sensor monitoring." },
    { id: "enjoymusic", label: "Internship · EnjoyMusic", kicker: "AI-driven show technology",
      blurb: "GenAI visuals for the Tomorrowland China afterparty, a 3D pose demo and DAW machine learning." }
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
    // a year heading shows only while one of its cards is visible
    document.querySelectorAll("#projects .year-head").forEach(function (h) {
      var y = h.getAttribute("data-year");
      var any = document.querySelector('#projects .card[data-year="' + y + '"]:not(.is-hidden)');
      h.classList.toggle("is-hidden", !any);
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

  function isSmallScreen() { return window.matchMedia("(max-width: 720px)").matches; }

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
    document.querySelectorAll("#projects .cards, #internship .cards, #about .hl-mini, #contact .contact-boxes").forEach(function (grid) {
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
  var sectionIds = ["about", "exchange", "projects", "internship", "arts", "awards", "contact"];

  function navOffset() { return (navEl ? navEl.offsetHeight : 70) + 14; }
  function scrollToId(id) {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    var sec = document.getElementById(id);
    if (!sec) return;
    // Native anchor navigation: the browser computes the landing spot itself
    // (honouring html{scroll-padding-top} + scroll-behavior:smooth), which is
    // reliable across mobile browsers, zoom states, and mid-scroll reflow.
    // location.replace avoids piling up history entries.
    if (("#" + id) === location.hash) {
      // Re-clicking the same target: a same-hash navigation is a no-op,
      // so fall back to a manual scroll.
      var y = sec.getBoundingClientRect().top + window.scrollY - navOffset();
      window.scrollTo({ top: y, behavior: "smooth" });
      return;
    }
    location.replace("#" + id);
  }
  function closeMobileNav() { navList.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }

  document.querySelectorAll("[data-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var t = btn.getAttribute("data-target");
      clickedTarget = t === "top" ? "about" : t;
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
  // The section the visitor last asked for. Short sections near the end of the
  // page can never scroll up to the landing line, so at the very bottom we
  // honour the click instead of guessing. Any manual scroll input clears it.
  var clickedTarget = null;
  ["wheel", "touchstart"].forEach(function (evt) {
    window.addEventListener(evt, function () { clickedTarget = null; }, { passive: true });
  });
  window.addEventListener("keydown", function (e) {
    if (/^(Arrow|Page|Home|End| )/.test(e.key)) clickedTarget = null;
  });
  // Where a section's top sits after an anchor jump: the html scroll-padding-top
  // plus the section's own scroll-margin-top. Measuring with the nav height
  // alone left every landed section below the line, so the previous section
  // stayed highlighted.
  function landingLine(sec, pad) {
    var margin = parseFloat(getComputedStyle(sec).scrollMarginTop) || 0;
    return Math.max(pad + margin, navOffset());
  }
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
    var pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    var current = sectionIds[0];
    for (var i = 0; i < sectionIds.length; i++) {
      var sec = document.getElementById(sectionIds[i]);
      if (sec && sec.getBoundingClientRect().top <= landingLine(sec, pad) + 8) current = sectionIds[i];
    }
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = clickedTarget || sectionIds[sectionIds.length - 1];
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

  // `text` is a paragraph string, or an array of strings shown as bullet points
  function modalSection(label, text) {
    if (!text || !text.length) return "";
    var body = Array.isArray(text)
      ? '<ul class="modal-list">' + text.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>"
      : "<p>" + text + "</p>";
    return '<div class="modal-section"><h4>' + label + "</h4>" + body + "</div>";
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
    // `youtube` is a single video id; `videos` lists several as {id, label}
    var vids = p.videos || (p.youtube ? [{ id: p.youtube, label: "Watch on YouTube" }] : []);
    if (vids.length) {
      media += '<div class="modal-section"><h4>Video</h4>' +
        vids.map(function (v) {
          return '<a class="modal-link video-watch" href="https://www.youtube.com/watch?v=' + v.id +
            '" target="_blank" rel="noopener">\u2197 ' + v.label + "</a>";
        }).join(" ") +
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
