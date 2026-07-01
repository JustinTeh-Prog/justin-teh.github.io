# Claude Design Prompt: Justin Teh Arts × Technology Portfolio Website

## Notes Before Use

I am unsure about only **two image-path details**:

1. The second image for **Fresh-No-More! 2026** appears duplicated as `10FNM (1)`.
2. Some academic mini-project image filenames were not explicitly specified.

These have been marked as placeholders for Claude Design to handle gracefully.

---

## 1. Role

You are Claude Design acting as a senior front-end developer, UX designer, portfolio strategist, and visual designer.

Build a polished personal portfolio website for **Justin Teh**, an Arts × Technology student and creative technologist.

---

## 2. Task

Generate a complete static portfolio website using:

- `index.html`
- `style.css`
- `script.js`

The website will be ported to **GitHub Pages** for free static hosting.

The codebase must be fully compatible with GitHub Pages. It must run as a static site without:

- Backend services
- Server-side rendering
- Databases
- API keys
- Build tools
- Package managers
- Framework dependencies

The website should present Justin Teh as a credible Arts × Technology person: a Computer Science and Design student with a Biomedical Engineering diploma foundation, software / AI / IoT project experience, human-centred design exposure, and strong live arts / show production credentials.

---

## 3. Context

Justin’s portfolio should not feel like a generic résumé website. It should feel:

- Organic
- Hand-crafted
- Thoughtful
- Technically competent
- Personal but professional
- Visually polished without being overdesigned

The sites Justin admires have a crafted, personal quality rather than a corporate template feel.

Take structural inspiration from strong engineering portfolio websites with clear navigation, concise project summaries, and evidence-based project sections.

Reference website for structure and clarity only:

```text
https://fj-chin.github.io/Engineering-Portfolio/
```

Do not copy its visual design directly. Use it only as a reference for portfolio hierarchy, section organisation, and concise phrasing.

---

## 4. Overall Design Direction

Use a refined mix of:

- Glassmorphism
- Neumorphism
- Organic visual details
- Smooth interaction UX
- Scroll reveal / scroll-driven animation

The site should feel slick and smooth, but not cluttered.

### Visual Mood

The website should feel:

- Premium
- Smooth
- Slightly experimental
- Arts × technology oriented
- Organic and hand-crafted
- Recruiter-friendly
- Academic-portfolio friendly
- Collaboration-friendly

### Suggested Visual Language

Use design elements such as:

- Soft translucent panels
- Rounded project cards
- Subtle layered shadows
- Frosted glass navigation
- Blurred gradient backgrounds
- Organic blob shapes
- Fine linework
- Subtle grid / contour accents
- Doodle-like dividers
- Floating labels
- Smooth hover states
- Scroll reveal animations
- Gentle image transitions

Do not overuse glass effects. Maintain strong readability and accessibility.

---

## 5. Technical Requirements

Generate three files:

```text
index.html
style.css
script.js
```

Assume this folder structure:

```text
/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Personal/
    ├── Project1_IADL/
    ├── Acad/
    ├── Arts/
    ├── Exchange/
    └── Internship/
```

Use only:

- HTML
- CSS
- Vanilla JavaScript

Do not use:

- React
- Vue
- Next.js
- Tailwind
- Bootstrap
- jQuery
- npm packages
- External component libraries
- Backend services

The website must:

- Work directly when opening `index.html`
- Work on GitHub Pages
- Use relative paths
- Be responsive on desktop, tablet, and mobile
- Use semantic HTML
- Use clean and commented code
- Use accessible colour contrast
- Include alt text for all images
- Include keyboard-accessible navigation
- Respect `prefers-reduced-motion`
- Lazy-load images where appropriate
- Gracefully handle missing images
- Avoid broken layouts if an image path is wrong

---

## 6. Navigation Structure

Use tabs / page-like sections rather than one long single-scroll page.

Main navigation tabs:

1. About Me
2. Compiled Portfolio / Work
3. Arts Portfolio
4. Contact

A single HTML file with tabbed navigation is acceptable, as long as the tabs feel like distinct pages.

### Navigation UX Requirements

Include:

- Sticky glass navigation bar
- Active tab indicator
- Smooth tab transition
- Mobile-friendly navigation
- Compact nav or hamburger menu on smaller screens
- Project filters in the Compiled Portfolio / Work tab
- Expandable project cards or modal / drawer details
- Image galleries for project cards
- Smooth and intuitive user journey

---

# 7. Global Identity Content

## Name

```text
Justin Teh
```

## Primary Positioning

```text
Creative Technologist | Computer Science & Design Student | Arts × Technology Builder
```

## Hero Tagline

```text
Building human-centred systems where software, AI, hardware, and live production meet.
```

## Short Descriptor

```text
Justin Teh is a Computer Science and Design undergraduate at SUTD with a Biomedical Engineering foundation, combining software, AI, IoT, prototyping, and live arts production to create meaningful technical and experiential systems.
```

---

# 8. About Me Page

## Image

Use:

```text
assets/Personal/Personal (1).jpg
```

If the image extension differs, structure the code so the path is easy to update later.

---

## About Me Objective Statement

Use this text:

```text
I am a Computer Science and Design student at the Singapore University of Technology and Design with a Biomedical Engineering diploma foundation. My work sits at the intersection of software, AI, IoT, assistive technology, and live arts production. I enjoy building human-centred systems that are technically reliable, visually thoughtful, and meaningful to the people who use or experience them.
```

---

## Arts × Tech Passion Statement

Use this text:

```text
I see technology not only as a tool for efficiency, but also as a medium for care, storytelling, and atmosphere. My projects range from rehabilitation assessment devices and IoT dashboards to GenAI campaign systems, Android applications, lighting design, and immersive entertainment workflows. Across these experiences, I am most interested in how engineering discipline and creative direction can come together to shape better human experiences.
```

---

## Personal Trust Statement

Use this text:

```text
Outside technical projects, I have led student teams, supported arts communities, and worked behind the scenes on productions where reliability matters. I value clear communication, careful preparation, and service-oriented leadership. I am drawn to people and projects that care about both execution quality and human impact.
```

---

## Core Technical Skills

Display as an HTML skill-cloud.

```text
Python
Java
C++
Arduino / ESP32
ASP.NET Core MVC
HTML
CSS
JavaScript
SQL
SQLite
Room Database
MQTT
OpenCV
Pygame
Tkinter
Matplotlib
Fusion 360
Rhino / Grasshopper
ComfyUI
FLUX.1 Kontext
ControlNet
MediaPipe
React / Next.js exposure
GitHub Pages
```

---

## Core Soft / Creative Skills

Display as a second HTML skill-cloud.

```text
Human-Centred Design
Participatory Design
Project Management
Technical Documentation
Design Thinking
Data Cleaning
Visual Storytelling
Lighting Direction
Stage Management
Production Planning
Team Leadership
Stakeholder Coordination
Cross-Cultural Collaboration
```

---

## Optional About Me Micro-Cards

Use short micro-cards with these labels:

```text
Based in Singapore
SUTD Computer Science and Design
Biomedical Engineering foundation
Arts production and lighting background
Interested in AI, software, IoT, and immersive experiences
```

---

# 9. Compiled Portfolio / Work Tab

This tab should include project filtering by skill topic.

## Filter Tags

Use these filters:

```text
Research
Assistive Tech
AI-Powered
IoT / Software Engineering
Human-Centred Design
Data / Modelling
Creative Technology
Sustainability
Product Design
Global Exchange
```

Each project card should include:

- Project title
- Category tags
- One-line summary
- Problem
- Role / Process
- Solution / Tech Stack
- Results / Evidence
- Image gallery or visual evidence
- Optional “What this demonstrates” line

Use HTML skill-clouds inside project cards for tech stack tags.

---

# 10. Project 1: Interactive IADL Rehabilitation Assessment Device

## Tags

```text
Assistive Tech
Research
IoT / Software Engineering
Human-Centred Design
```

## Image Folder

Use images from:

```text
assets/Project1_IADL/
```

## Specific Images

Use these references:

```text
assets/Project1_IADL/poster.jpg
assets/Project1_IADL/IP2SG_Inbox.jpg
assets/Project1_IADL/ARTSIC_certificate.jpg
```

Also include any additional project pictures found inside:

```text
assets/Project1_IADL/
```

## Title

```text
Interactive IADL Rehabilitation Assessment Device
```

## One-Line Summary

```text
An assistive rehabilitation assessment device that captures motion and force data during activities of daily living through sensor integration, computer vision, and an interactive game-based interface.
```

## Problem

```text
Traditional rehabilitation assessments can rely heavily on qualitative observation. This project explored how motion and force data could be captured more objectively during activities of daily living, supporting therapists with clearer performance records across sessions.
```

## Role / Process

```text
Worked as part of a Biomedical Engineering major project team to develop and integrate sensing, motion capture, GUI, and data recording components. The project involved iterative hardware improvement, marker detection refinement, data acquisition, and interface development.
```

## Solution / Tech Stack

```text
Combined wearable force sensing and environmental computer vision. The system used Force Sensitive Resistors with silicone padding, HC-05 serial communication, OpenCV marker tracking, Pygame for the augmented game task, Tkinter GUI, Matplotlib visualisation, and SQLite3 for local patient records and assessment playback.
```

## Skill Cloud

```text
OpenCV
Pygame
Tkinter
SQLite3
Matplotlib
Force Sensitive Resistors
HC-05
Motion Tracking
GUI Development
Rehabilitation Technology
```

## Results / Evidence

```text
The project achieved objective motion and force data capture for an interactive rehabilitation task, improved force sensing accuracy to approximately ±0.5 N, explored electroluminescent marker improvements for better tracking, and supported a patent filing through IP2SG. The project was also presented in the ARTSIC context.
```

## Evidence Subsection: Patent Filing

Image:

```text
IP2SG_Inbox
```

Caption:

```text
Patent-related filing evidence for the interactive assessment device.
```

## Evidence Subsection: Competition

Image:

```text
ARTSIC_certificate
```

Caption:

```text
ARTSIC participation / competition recognition.
```

## Evidence Subsection: Project Poster

Image:

```text
poster
```

Caption:

```text
Full project poster summarising design, methods, results, and conclusion.
```

## What This Demonstrates

```text
Assistive technology development, sensor integration, computer vision, rehabilitation-focused design, and the ability to translate a biomedical problem into a working prototype.
```

---

# 11. Project 2: A*STAR Proprietary Sensor Software Application Internship

## Tags

```text
Research
IoT / Software Engineering
Data / Modelling
```

## Title

```text
A*STAR IME Proprietary Sensor Software Application Internship
```

## One-Line Summary

```text
A full-stack IoT software internship involving cloud-based sensor monitoring, live data transfer, database handling, and dashboard development within a research environment.
```

## Problem

```text
The project required software infrastructure to support monitoring and analysis of proprietary sensor data. Due to confidentiality and NDA considerations, only the general technical scope should be shown.
```

## Role / Process

```text
Worked as a Software Application Intern at A*STAR Institute of Microelectronics, supporting a sensor-related web application and related programming or lab-adjacent tasks.
```

## Solution / Tech Stack

```text
Developed and documented components for an ASP.NET Core 5 MVC web application with MQTT Publisher-Subscriber architecture, SQL Server, Entity Framework Core, CRUD operations, CSV import/export, login/registration scaffolding, dashboards, live graphing concepts, dependency injection, and middleware.
```

## Skill Cloud

```text
ASP.NET Core 5
MVC
C#
MQTT
SQL Server
Entity Framework Core
CRUD
CSV Import / Export
Dashboarding
Web Application Development
Technical Documentation
```

## Results / Evidence

```text
Built experience in industrial software development, IoT data handling, database-backed web applications, and structured technical documentation in a research institute setting.
```

## NDA Disclaimer

Use this text prominently:

```text
Project visuals are not disclosed due to confidentiality and NDA considerations. Technical stack and high-level responsibilities are shown for portfolio context.
```

## Image Instruction

```text
Use a neutral abstract placeholder, frosted glass card, or no image. Do not invent confidential diagrams.
```

---

# 12. Project 3: Academic Projects & Design Studies

## Section Title

```text
Academic Projects & Design Studies
```

## Section Description

```text
A collection of smaller academic projects showing breadth across biomedical analysis, computational design, sustainability, product development, data science, software architecture, algorithmic systems, and participatory human-centred design.
```

## Image Folder

Use images from:

```text
assets/Acad/
```

Create a grid of mini-project cards. Each card should be concise but credible.

---

## 12.1 Conducted Pure Tone Audiometry Assessment and Recommendation

### Tags

```text
Research
Biomedical Engineering
```

### Image

Use a suitable image from:

```text
assets/Acad/
```

If no specific image is available, use a clean placeholder.

### Summary

```text
Analysed an audiometry case through air conduction, bone conduction, masking, hearing-loss classification, and implications for speech perception.
```

### Problem

```text
Audiogram interpretation requires understanding the auditory pathway, test method, and difference between conductive, sensorineural, and mixed hearing loss.
```

### Role / Process

```text
Reviewed audiometric test principles, interpreted case results, and explained implications on speech perception and behaviour.
```

### Methods / Skill Cloud

```text
Pure Tone Audiometry
Air Conduction
Bone Conduction
Masking
Hearing Loss Classification
Technical Reporting
```

### Result

```text
Produced a structured biomedical report connecting test results to practical hearing and communication implications.
```

---

## 12.2 Parametric Modelling with Rhino Grasshopper

### Tags

```text
Creative Technology
Product Design
```

### Image

Use:

```text
assets/Acad/3_2_ParametricModel.jpg
```

### Summary

```text
Created a computational design study inspired by stalactite cave formations using parametric terrain logic.
```

### Problem

```text
Natural cave structures have irregular, organic forms that are difficult to model manually while preserving controlled variation.
```

### Role / Process

```text
Explored mathematical and visual parameters to create a cave-like generative form through iterative computational design.
```

### Solution / Tech Stack

```text
Used sine-based overhang terrain logic and Voronoi-mapped base terrain to simulate stalactite and rocky surface variation.
```

### Skill Cloud

```text
Rhino
Grasshopper
Parametric Design
Voronoi
Sine Functions
Computational Design
```

### Result

```text
Produced a 3-by-3 parameter matrix showing how changes in complexity, base resolution, and terrain displacement affect the final form.
```

---

## 12.3 Life Cycle Analysis Report

### Tags

```text
Sustainability
Research
Data / Modelling
```

### Image

Use a suitable image from:

```text
assets/Acad/
```

Preferred placeholder name if available:

```text
assets/Acad/3_3_LifeCycleAnalysis.jpg
```

### Summary

```text
Compared single-use PET plastic cups, biodegradable bamboo cups, and reusable polycarbonate cups through life-cycle analysis.
```

### Problem

```text
Sustainable product decisions require evaluating environmental impact across material, use, and end-of-life stages rather than relying on surface-level assumptions.
```

### Role / Process

```text
Analysed product alternatives, defined assumptions, compared energy impact, and documented life-cycle stages.
```

### Methods / Skill Cloud

```text
Life Cycle Analysis
Functional Unit Definition
Material Stage
Use Stage
End-of-Life Stage
Energy Impact Estimation
```

### Result

```text
Created a comparative sustainability analysis that weighed trade-offs across disposable, biodegradable, and reusable product options.
```

---

## 12.4 Double-Diamond Centric Product Development

### Tags

```text
Human-Centred Design
Product Design
```

### Image

Use suitable images from:

```text
assets/Acad/
```

Preferred placeholder name if available:

```text
assets/Acad/3_4_DoubleDiamondProductDevelopment.jpg
```

If available, include images showing:

```text
Site Model
Contextual Drawing
Testing
Development
```

### Title

```text
Double-Diamond Centric Product Development
```

### Summary

```text
Designed “NestAway / Snack Overflow,” a canteen seating and passive bird deterrence system to improve comfort and convenience in SUTD’s dining environment.
```

### Problem

```text
SUTD canteen users experience pain points around seating comfort, privacy, bag storage, bird disturbance, spillage, and ambiguous vacancy.
```

### Role / Process

```text
Used design thinking and downselection to identify seating as a major touchpoint, then developed a partition-origami bird shelter concept with modular subsystems.
```

### Solution

```text
A fully integrated partitioned seating and passive bird deterrence system with storage, modular joints, privacy elements, and interactive aesthetic qualities.
```

### Skill Cloud

```text
Double Diamond
Site Observation
Product Ideation
Downselection
Prototyping
User-Centred Design
```

### Result

```text
Generated a concept balancing harmony, comfort, convenience, and delightfulness in communal dining.
```

---

## 12.5 Data-Driven Multi-Feature Prediction Modelling with Linear Regression

### Tags

```text
Data / Modelling
Research
Sustainability
```

### Image

Use suitable image from:

```text
assets/Acad/
```

Preferred placeholder name if available:

```text
assets/Acad/3_5_DataDriveLinearRegression.jpg
```

### Summary

```text
Built a data-driven model to predict U.S. transport-sector CO₂ emissions and test mode-shift strategies.
```

### Problem

```text
Policy and transport planners need transparent modelling tools that connect passenger traffic, mode mix, and CO₂ emissions.
```

### Role / Process

```text
Performed data import, cleaning, feature analysis, visualisation, correlation checking, and linear modelling.
```

### Solution / Tech Stack

```text
Used a 33-year U.S. dataset with features such as registered vehicles, population, rapid-transit-to-resident ratio, and passenger traffic by transit, highway, intercity, and aviation.
```

### Skill Cloud

```text
Python
Data Cleaning
Linear Regression
Correlation Matrix
Feature Engineering
Scenario Modelling
Transport CO₂
```

### Result

```text
Created a model concept for forecasting emissions and evaluating what-if transport mode-shift scenarios.
```

---

## 12.6 Android-Native Application for University Tracking

### Tags

```text
IoT / Software Engineering
Human-Centred Design
Data / Modelling
```

### Image

Use:

```text
assets/Acad/3_6_Poster.jpg
```

### Summary

```text
Built UniTrack, an Android-native university application tracker for profile building, eligibility context, college list management, and deadline tracking.
```

### Problem

```text
Pre-tertiary students applying to multiple universities often manage fragmented requirements, essays, deadlines, and eligibility information manually.
```

### Role / Process

```text
Helped coordinate checkoff requirements and project administration while contributing to the development of the Android application.
```

### Solution / Tech Stack

```text
Built a native Android app using MVVM-style architecture, Activities, ViewModels, Repositories, Room DAOs, Room Database, SQL, and structured OOP principles.
```

### Skill Cloud

```text
Android
Java
MVVM
Room Database
SQL
Repositories
DAOs
OOP
Singleton
Composite Pattern
Strategy Pattern
Pagination
```

### Result

```text
Implemented must-have features including a personal case tracker, college list builder, and deadline / requirement tracker. The team resolved an “App Not Responding” database issue using pagination with infinite scrolling.
```

---

## 12.7 RewardNet™: Data Structures & Algorithmic Reward System Proposal

### Tags

```text
Data / Modelling
Product Design
IoT / Software Engineering
```

### Image

Use a suitable image from:

```text
assets/Acad/
```

Preferred placeholder name if available:

```text
assets/Acad/3_7_DSAProposal.jpg
```

### Summary

```text
Proposed a full-suite reward ecosystem for a hypothetical mega-platform using data structures and algorithmic system logic.
```

### Problem

```text
A large platform needs a reward system that can incentivise recent meaningful activity without relying only on lifetime accumulation or harsh resets.
```

### Role / Process

```text
Helped design the platform logic for loyalty tiers, status points, reward points, seasonal points, requalification, and user activity incentives.
```

### Solution / Concepts

```text
The system applied data structure and algorithm concepts such as hashmaps, dictionaries of objects, ordered-statistics logic, point systems, tier cycles, and reward qualification rules.
```

### Skill Cloud

```text
HashMap
Dictionary of Objects
Ordered Statistics Tree Concept
System Design
Loyalty Logic
Reward Cycles
Product Mechanics
```

### Result

```text
Produced a structured proposal for a reward ecosystem balancing user motivation, platform activity, and long-term recognition.
```

---

## 12.8 Designing for Eudaimonia at Singapore’s Bus Stops

### Tags

```text
Human-Centred Design
Research
Product Design
```

### Image

Use a suitable image from:

```text
assets/Acad/
```

Preferred placeholder name if available:

```text
assets/Acad/3_8_EudaimoniaDesign.jpg
```

### Summary

```text
A participatory design project exploring how Singapore’s bus stop infrastructure could better support comfort, dignity, and everyday wellbeing.
```

### Problem

```text
Bus stops are functional but can still create uncertainty, discomfort, and missed communication between commuters and bus captains.
```

### Role / Process

```text
Conducted site observations, interviews, participatory workshops, affinity mapping, prototype testing, and iteration.
```

### Methods / Skill Cloud

```text
Ethnographic Observation
Participatory Design
Interviews
Affinity Mapping
Unity Simulation Prototype
User Feedback
Iteration
```

### Result

```text
The team gathered insights from teens, elderly participants, and a bus captain, then created and tested speculative prototype variations with follow-up responses from diverse users.
```

---

# 13. Global Exchange: AI, Culture & Creative Technology

This section should appear inside the Compiled Portfolio / Work tab.

## Section Title

```text
Global Exchange: AI, Culture & Creative Technology
```

## Section Description

```text
Exchange experiences in China that connected human-centred design, AI-enabled creative production, cultural storytelling, and immersive entertainment technology.
```

---

## 13.1 DIVE Immersion at Chongqing University: 心间 | Close to Heart

### Tags

```text
Global Exchange
Human-Centred Design
AI-Powered
Product Design
```

### Image

Use:

```text
assets/Exchange/CQU.jpg
```

### Title

```text
DIVE Immersion at Chongqing University: 心间 | Close to Heart
```

### Summary

```text
A cross-cultural design project exploring companionship and reassurance for empty-nest elderly residents in China.
```

### Problem

```text
Empty-nest elderly residents may experience loneliness, digital fatigue, reluctance to disturb their children, and barriers to complex app-based systems.
```

### Role / Process

```text
Worked in a cross-cultural student team to define user insights, generate concepts, study precedent products, and develop a speech-based sentimental companion concept.
```

### Solution

```text
“心间 | Close to Heart” is a non-robotic, familiar, speech-based companion concept designed to provide delightful everyday companionship and timely reassurance for families.
```

### Skill Cloud

```text
Human-Centred Design
Eldercare
Speech Interface
GenAI Wrapper
ASR
NLU
Text-to-Speech
Proactive Nudges
Wireframing
Cross-Cultural Design
```

### System Concept

```text
The concept receives input through a microphone, converts speech to text, interprets user context through NLU and personalisation logic, plans tone based on dialect, politeness, pacing, and speech length, composes a reply, and outputs Mandarin speech. The proposed future system also includes routine nudges, quiet hours, family status updates, and emergency tool-calling.
```

### Result

```text
Developed a socially grounded AI companion concept with form factor, software stack, wireframe, validation themes, business model, and impact considerations.
```

---

## 13.2 TIIDE Exchange at Zhejiang University: GenAI Beauty Campaign

### Tags

```text
Global Exchange
AI-Powered
Creative Technology
Product Design
```

### Images

Use:

```text
assets/Exchange/TIIDE_GrpPic.jpg
assets/Exchange/TIIDE_Project.jpg
```

### Title

```text
TIIDE Exchange at Zhejiang University: GenAI Beauty Campaign
```

### Summary

```text
A GenAI creative campaign project titled “Generations of Beauty / 代代美丽: The Golden Thread of Time,” connecting L’Oréal Paris Age Perfect, Double Ninth Festival, intergenerational beauty, and AI-enabled campaign collateral.
```

### Problem

```text
The project explored how AI-generated campaign assets and a coded website could translate cultural values such as filial piety, longevity, and intergenerational connection into a modern brand experience.
```

### Role / Process

```text
Worked on campaign concept, cultural analysis, AI image workflow experimentation, campaign collateral generation, and website concept development.
```

### Solution / Tech Stack

```text
Used ComfyUI workflows involving SDXL, Juggernaut, FLUX.1 Kontext, LoRA, inpainting, ControlNet, scribble guidance, upscaling, and agentic coding for campaign website development.
```

### Skill Cloud

```text
ComfyUI
SDXL
FLUX.1 Kontext
LoRA
Inpainting
ControlNet
Upscaling
Prompt Engineering
Campaign Design
Agentic Coding
Cultural Storytelling
```

### Result

```text
Produced campaign visuals, motifs, poster representations, and a coded website demo exploring how AI can support culturally grounded creative production.
```

---

## 13.3 EnjoyMusic Technology Internship: AI-Driven Entertainment & Show Technology

### Tags

```text
Global Exchange
AI-Powered
Creative Technology
IoT / Software Engineering
```

### Images

Use:

```text
assets/Exchange/TIIDE_Intern (1).jpg
assets/Exchange/TIIDE_Intern (2).jpg
```

### Title

```text
EnjoyMusic Technology Internship: AI-Driven Entertainment & Show Technology
```

### Summary

```text
An AI entertainment internship experience in Shanghai exploring immersive music, visual systems, AI-driven mapping visuals, lighting automation, and creative technology workflows.
```

### Problem

```text
The entertainment industry increasingly needs workflows that connect creative direction, AI generation, visual production, music analysis, and live show execution.
```

### Role / Process

```text
Worked on AI-enabled entertainment concepts and technical workflows across immersive audio-visual projects, production coordination, and experimental tooling.
```

### Project Areas

```text
Interactive room installation at INS Land / Oasis
AI-driven mapping visuals for Magic of Tomorrowland / Tomorrowland China and Budweiser after party context
AI music-lighting automation concepts
Motion capture rigging
Music analysis and data annotation for ML training
DAW effect plugin exploration
```

### Skill Cloud

```text
AI Visual Workflow
Image-to-Image
Video-to-Image
Stage Design
GrandMA
DMX
Resolume Arena
VJ Workflow
MediaPipe
React / Next.js exposure
Python beat_this Library
Music Annotation
DAW Plugins
C++
```

### Result

```text
Gained practical exposure to how creative vision, project management, AI tools, and technical execution come together in high-pressure entertainment environments.
```

---

# 14. Arts Portfolio Tab

## Main Tagline

Use this prominently:

```text
Leader. Stage Manager. Lights Director.
```

## Opening Images

Use:

```text
assets/Arts/1Leadership.jpg
assets/Arts/1Lights.jpg
```

## Arts Background Paragraph

```text
My arts journey began in student production spaces and grew into a practical language of lighting, staging, coordination, and show execution. Through Temasek Polytechnic’s Digital Media & Production Crew, external gigs, and SUTD arts productions, I have worked across lighting direction, technical coordination, stage support, and event leadership. I enjoy the discipline behind live performance: the precision of cues, the trust between crew and performers, and the quiet work that makes an audience experience feel seamless.
```

## Arts Skill Cloud

```text
Lighting Direction
Lighting Operation
Stage Management
Technical Coordination
Production Scheduling
Bump-In Planning
Cueing
Stage Crew
Show Calling Exposure
MA / GrandMA
Avolites
DMX
Resolume Arena
Live Event Operations
Risk Assessment
Crew Leadership
```

## Arts Showcase Layout

Create a visually rich but clean event gallery.

Each event card should include:

- Event title
- Location
- Date
- Role
- Images
- Optional production note

---

## 14.1 The Lift

### Date

```text
29 Nov 2019
```

### Location

```text
Temasek Polytechnic Black Box Theatre
```

### Role

```text
Lighting Director
```

### Image

```text
assets/Arts/2TheLift.jpg
```

### Production Note

```text
Early lighting direction work in a black box theatre setting, focusing on atmosphere, cueing, and stage visibility.
```

---

## 14.2 TPDE’s Rush..

### Date

```text
30 Nov 2019
```

### Location

```text
Temasek Polytechnic Design Paddy Field
```

### Role

```text
Tech Coordinator / Lighting Director
```

### Images

```text
assets/Arts/3RUSH (1).jpg
assets/Arts/3RUSH (2).jpg
assets/Arts/3RUSH (3).jpg
```

### Production Note

```text
Outdoor / semi-open performance support involving technical coordination and lighting direction.
```

---

## 14.3 Spectacular

### Date

```text
7–14 Apr 2022
```

### Location

```text
Temasek Polytechnic Auditorium
```

### Role

```text
Lighting Director
```

### Images

```text
assets/Arts/4SPECTACULAR (1).jpg
assets/Arts/4SPECTACULAR (2).jpg
assets/Arts/4SPECTACULAR (3).jpg
```

### Production Note

```text
Large-scale auditorium production requiring lighting planning, cue execution, and coordination with performers and crew.
```

---

## 14.4 Blissful One-Stop Wedding Show

### Date

```text
10 Jan 2025
```

### Location

```text
Marina Bay Sands
```

### Role

```text
Lighting Operator
```

### Image

```text
assets/Arts/5XBOWS.jpg
```

### Production Note

```text
External event experience supporting lighting operation in a professional venue environment.
```

---

## 14.5 Arts Fiesta 25

### Date

```text
6 Jul 2025
```

### Location

```text
Our Tampines Hub
```

### Role

```text
Lighting Director
```

### Image

```text
assets/Arts/6ARTSFIESTA.jpg
```

### Production Note

```text
Community-facing arts showcase experience involving lighting direction for a multi-artform event.
```

---

## 14.6 Everything But The Brain

### Date

```text
25 Jul 2025
```

### Location

```text
SUTD Auditorium
```

### Role

```text
Lighting Director
```

### Images

```text
assets/Arts/7EBTB (1).jpg
assets/Arts/7EBTB (2).jpg
assets/Arts/7EBTB (3).jpg
```

### Production Note

```text
SUTD auditorium production focused on shaping audience attention and supporting theatrical storytelling through lighting.
```

---

## 14.7 Rockafall 2025

### Date

```text
3 Aug 2025
```

### Location

```text
SUTD Auditorium
```

### Role

```text
Lighting Director
```

### Images

```text
assets/Arts/8Rockafall (1).jpg
assets/Arts/8Rockafall (2).jpg
assets/Arts/8Rockafall (3).jpg
```

### Production Note

```text
High-energy music event requiring responsive lighting direction, mood control, and coordination with musical performance.
```

---

## 14.8 Ori Finale 25

### Date

```text
20 Sept 2025
```

### Location

```text
SUTD Indoor Sports Hall
```

### Role

```text
Lighting Director
```

### Images

```text
assets/Arts/9OriFinale (1).jpg
assets/Arts/9OriFinale (2).jpg
```

### Production Note

```text
Large orientation finale production involving lighting design and show support in a non-traditional performance venue.
```

---

## 14.9 Fresh-No-More! 2026

### Date

```text
26 Jan 2026
```

### Location

```text
SUTD Auditorium and Campus Centre
```

### Role

```text
Organiser / Lighting Director
```

### Images

```text
assets/Arts/10FNM (1).jpg
assets/Arts/10FNM (1).jpg
```

### Important Image Note

```text
The second image filename appears duplicated. Implement the gallery so it works even if there is only one image, and leave a code comment where an additional image can be added later.
```

### Production Note

```text
Student-led celebration programme involving event organisation, programme design, logistics, and lighting direction.
```

---

# 15. Contact Tab / Footer

## Contact Heading

```text
Let’s build useful systems and memorable experiences.
```

## Contact Paragraph

```text
I am open to software, IoT, engineering, AI, creative technology, and arts-production collaborations. I am especially interested in opportunities that combine technical implementation with human-centred impact, thoughtful design, or live experience.
```

## Contact Boxes

Create two prominent contact boxes.

### Email Box

Label:

```text
Email
```

Text:

```text
tnh.justin@gmail.com
```

Link:

```text
mailto:tnh.justin@gmail.com
```

### LinkedIn Box

Label:

```text
LinkedIn
```

Text:

```text
Teh Nian Hong, Justin
```

Link:

```text
https://www.linkedin.com/in/teh-nian-hong-justin/
```

## Footer Text

```text
© 2026 Justin Teh. Built with HTML, CSS, and JavaScript for GitHub Pages.
```

---

# 16. Interaction Requirements

Use JavaScript for:

- Tab navigation
- Project filtering by tags
- Card expand / collapse
- Modal or drawer detail view
- Image gallery carousel or lightbox
- Scroll reveal animation using `IntersectionObserver`
- Active navigation state
- Optional subtle cursor-follow glow on desktop only
- Optional “Back to top” button

## Good Interaction Examples

Implement tasteful interactions such as:

- Project cards gently lift on hover
- Filter chips animate smoothly
- Images fade in
- Section titles reveal with slight upward motion
- Skill-cloud chips have subtle hover glow
- Active tab has a glass highlight or soft underline
- Modal supports ESC close
- Modal supports click-outside close
- Reduced-motion users receive simplified transitions

Do not make the site feel slow or heavy.

---

# 17. Web Design Best Practices

## Content Hierarchy

Prioritise:

- Clear hero identity
- Strong section headings
- Short paragraphs
- Scannable cards
- Evidence-first project writing
- Tags and skill-cloud chips
- Avoiding long walls of text

## Visual Hierarchy

Use:

- Generous spacing
- Readable max-width
- Consistent cards
- Limited colour palette
- Typography contrast
- Images as evidence, not decoration only

## Accessibility

Use:

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`
- Alt text for images
- Visible focus states
- Buttons for interactive controls
- Keyboard-accessible navigation
- Strong contrast on glass backgrounds
- `prefers-reduced-motion` support

## Performance

Prioritise:

- Lazy-loaded images
- Lightweight JavaScript
- No external dependencies
- No unnecessary animations
- Modular and readable code

---

# 18. GitHub Pages Compatibility Rules

The final website must:

- Use static files only
- Use relative paths
- Use `index.html` as entry point
- Avoid server-side code
- Avoid environment variables
- Avoid build steps
- Avoid external paid APIs
- Avoid framework dependencies
- Work from the repository root on GitHub Pages

---

# 19. Content Tone

The writing tone should be:

- Professional
- Warm
- Precise
- Credible
- Not exaggerated
- Not overly corporate
- Not too casual

## Writing Style Rules

Follow these rules:

- Use first person sparingly
- Prefer evidence-backed phrasing
- Avoid generic phrases like “passionate problem solver” unless supported by project details
- Make project outcomes concrete
- Avoid overclaiming confidential or NDA-covered work
- Use accurate labels such as “exposure”, “concept”, “prototype”, “project”, “workflow”, or “internship” where applicable

---

# 20. Accuracy Rules

Do not invent:

- Awards
- Roles
- Employers
- Technologies
- Production deployment status
- Confidential project details

For A*STAR:

```text
Avoid confidential visuals and proprietary sensor details. Use only high-level technical stack and responsibilities.
```

For EnjoyMusic and exchange projects:

```text
Describe them as exchange / internship / project exposure unless otherwise stated.
```

For academic projects:

```text
Label them as academic projects or design studies, not commercial products.
```

---

# 21. Image Handling Rules

Use exact image filenames where provided.

If an image is missing:

- Do not break the layout
- Show a tasteful placeholder with the project title
- Add alt text
- Leave a code comment showing where to update the path

Use responsive image grids.

For multi-image galleries:

- Implement a simple carousel, lightbox, or scrollable gallery
- Keep the behaviour smooth and simple
- Do not over-engineer the gallery

---

# 22. Output Format

Return the full code in three separate code blocks:

```text
index.html
```

```text
style.css
```

```text
script.js
```

Before the code, briefly explain the expected file structure.

After the code, provide short GitHub Pages deployment instructions.

---

# 23. GitHub Pages Deployment Instructions to Include

At the end of the response, include these instructions:

```text
1. Create a new GitHub repository.
2. Add index.html, style.css, script.js, and the assets folder.
3. Commit and push the files.
4. Go to repository Settings.
5. Open Pages.
6. Select the main branch and root folder.
7. Save and wait for GitHub Pages to publish the site.
8. Open the published site URL.
```

---

# 24. Quality Bar

The final website should feel like a curated creative technology portfolio, not a school assignment dump.

The site should show Justin’s range without overwhelming the viewer.

The strongest impression should be:

```text
Justin is a credible Arts × Technology builder who can move between software, AI, IoT, biomedical/product thinking, human-centred design, and live production execution.
```
