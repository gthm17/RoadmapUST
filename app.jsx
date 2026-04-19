// We extract these directly from the React object loaded in the HTML file
const { useState, useEffect, useCallback } = React;

const UST_BLUE = "#0047AB";
const UST_ORANGE = "#FF6B00";

const QUOTES = [
  {
    text: "A man who won't die for something is not fit to live.",
    from: "Red Dead Redemption 2",
    char: "Dutch van der Linde",
  },
  {
    text: "We don't get to choose how we start in this life. Real greatness is what you do with the hand you're dealt.",
    from: "Ghost of Tsushima",
    char: "Jin Sakai",
  },
  {
    text: "You think the dead don't have a voice? They do. It's called the living.",
    from: "The Last of Us",
    char: "Joel Miller",
  },
  {
    text: "With great power comes great responsibility.",
    from: "Spider-Man",
    char: "Uncle Ben",
  },
  {
    text: "We're gonna be okay. Both of us.",
    from: "The Last of Us",
    char: "Ellie",
  },
  {
    text: "I didn't ask for this... but I'll see it through.",
    from: "Ghost of Tsushima",
    char: "Jin Sakai",
  },
  {
    text: "Outlaws don't live long. Good ones live even shorter.",
    from: "Red Dead Redemption 2",
    char: "Arthur Morgan",
  },
  { text: "Whatever it takes.", from: "Avengers: Endgame", char: "Tony Stark" },
  {
    text: "There is no death. Only a transformation.",
    from: "Red Dead Redemption 2",
    char: "Arthur Morgan",
  },
  { text: "I am Groot.", from: "Guardians of the Galaxy", char: "Groot" },
  {
    text: "The city needs you. Your people need you.",
    from: "Marvel's Spider-Man",
    char: "Mary Jane",
  },
  {
    text: "I used to think my father was crazy... now I realize he was just early.",
    from: "Uncharted 4",
    char: "Sam Drake",
  },
  {
    text: "Every day it gets a little easier. But you gotta do it every day.",
    from: "BoJack Horseman",
    char: "Character",
  },
  {
    text: "The hardest choices require the strongest wills.",
    from: "Avengers: Infinity War",
    char: "Thanos",
  },
  {
    text: "Nate, you always take the scenic route.",
    from: "Uncharted 4",
    char: "Sam Drake",
  },
  {
    text: "I would rather die on my feet than live on my knees.",
    from: "Ghost of Tsushima",
    char: "Khotun Khan",
  },
  {
    text: "Part of the journey is the end.",
    from: "Avengers: Endgame",
    char: "Tony Stark",
  },
  {
    text: "You can't stop what's coming, and it ain't all waiting on you.",
    from: "No Country for Old Men",
    char: "Sheriff Bell",
  },
  {
    text: "All we can choose is what we do with the time that is given to us.",
    from: "The Lord of the Rings",
    char: "Gandalf",
  },
];

const PHASES = [
  {
    id: "phase1",
    title: "Phase 1 — Strengthen Foundations",
    period: "May 20 – Jun 14 (4 weeks)",
    color: "#0047AB",
    weeks: ["Week 1–2 (May 20 – Jun 1)", "Week 3–4 (Jun 2 – Jun 14)"],
    tasks: [
      {
        id: "p1_1",
        text: "Revise Java OOP — interfaces, abstract classes, polymorphism",
        info: "These are the most common Java interview topics at UST. Make sure you can write these from scratch without looking up.",
      },
      {
        id: "p1_2",
        text: "Java Collections — ArrayList, HashMap, HashSet, LinkedList",
        info: "UST technical rounds often ask you to implement or manipulate collections. Practice iterating, sorting, filtering.",
      },
      {
        id: "p1_3",
        text: "Java Exception handling and File I/O",
        info: "Know try-catch-finally, custom exceptions. File I/O shows up in project code.",
      },
      {
        id: "p1_4",
        text: "Java multithreading — awareness level (Thread, Runnable, synchronized)",
        info: "You don't need to be an expert — just know what a thread is, why we use them, and basic syntax.",
      },
      {
        id: "p1_5",
        text: "Python OOP, list comprehensions, lambda, map/filter",
        info: "Corey Schafer Python series on YouTube covers all of this cleanly.",
      },
      {
        id: "p1_6",
        text: "Python requests library — calling APIs, parsing JSON",
        info: "Install via pip. Practice calling a public API like OpenWeatherMap and printing results.",
      },
      {
        id: "p1_7",
        text: "JavaScript async/await and Fetch API properly",
        info: "This is the most common JS interview gap. Practice fetching from a public API and updating the DOM.",
      },
      {
        id: "p1_8",
        text: "JS ES6+ — arrow functions, destructuring, spread, modules",
        info: "javascript.info has a clean ES6 section. Go through it once if unsure.",
      },
      {
        id: "p1_9",
        text: "DSA: Start LeetCode — 2 easy Array/String problems per day",
        info: "Create a LeetCode account. Filter: Easy, Topic: Arrays. Target 20 problems done by end of Phase 1.",
      },
      {
        id: "p1_10",
        text: "NxtWave: Continue current modules — don't fall behind",
        info: "Keep your NxtWave streak going. 1 hour daily is enough.",
      },
      {
        id: "p1_11",
        text: "Create GitHub profile if not already done",
        info: "Your GitHub username is your dev identity. Make it professional. Add a profile README.",
      },
      {
        id: "p1_12",
        text: "First GitHub push — any practice code",
        info: "Even if it's just a Hello World. Start building your commit history from Day 1.",
      },
    ],
  },
  {
    id: "phase2",
    title: "Phase 2 — Backend Development",
    period: "Jun 15 – Aug 2 (7 weeks)",
    color: "#FF6B00",
    weeks: [
      "Week 5–6 (Jun 15 – Jun 28)",
      "Week 7–8 (Jun 29 – Jul 12)",
      "Week 9–10 (Jul 13 – Jul 27)",
      "Week 11 (Jul 28 – Aug 2)",
    ],
    tasks: [
      {
        id: "p2_1",
        text: "Install Spring Boot via Spring Initializr (start.spring.io)",
        info: "Choose: Maven, Java, Spring Web, Spring Data JPA, MySQL Driver dependencies.",
      },
      {
        id: "p2_2",
        text: "Understand Spring Boot project structure — controllers, services, repositories",
        info: "The MVC pattern is critical. Controller handles requests, Service has business logic, Repository talks to DB.",
      },
      {
        id: "p2_3",
        text: "Build your first REST API — GET and POST endpoints",
        info: "Start with a simple /hello endpoint. Then a /users endpoint. Test in Postman.",
      },
      {
        id: "p2_4",
        text: "Install MySQL and MySQL Workbench",
        info: "MySQL Community Server is free. Workbench is the GUI. Set up a local database.",
      },
      {
        id: "p2_5",
        text: "SQL: DDL (CREATE, ALTER, DROP) and DML (SELECT, INSERT, UPDATE, DELETE)",
        info: "Practice on SQLZoo.net — it's free and has instant feedback. Complete first 4 sections.",
      },
      {
        id: "p2_6",
        text: "SQL: Joins (INNER, LEFT, RIGHT), GROUP BY, subqueries",
        info: "Joins are asked in almost every technical interview. Visualize them as Venn diagrams.",
      },
      {
        id: "p2_7",
        text: "Connect Spring Boot to MySQL using Spring Data JPA",
        info: "Add DB config to application.properties. Create an Entity class. Use JpaRepository interface.",
      },
      {
        id: "p2_8",
        text: "CRUD operations fully working — test all 4 verbs in Postman",
        info: "Download Postman (free). Test GET, POST, PUT, DELETE for at least one entity before moving on.",
      },
      {
        id: "p2_9",
        text: "Add Spring Security + JWT authentication",
        info: "This is the hardest part of Phase 2. Watch Amigoscode's Spring Security video. Don't rush it.",
      },
      {
        id: "p2_10",
        text: "PROJECT 1: Start Expense Tracker — User and Expense models",
        info: "User has id, name, email, password. Expense has id, amount, category, date, userId. Create these entities.",
      },
      {
        id: "p2_11",
        text: "PROJECT 1: Complete all CRUD APIs for expenses",
        info: "Add, view all, view by id, edit, delete. Also add filter by category and month.",
      },
      {
        id: "p2_12",
        text: "PROJECT 1: Add login/register with JWT",
        info: "Register → returns JWT. Login → returns JWT. Protected routes require JWT in header.",
      },
      {
        id: "p2_13",
        text: "PROJECT 1: Build basic HTML/CSS/JS frontend (no React yet)",
        info: "Just a few pages — login, dashboard, add expense. Use fetch() to call your own API.",
      },
      {
        id: "p2_14",
        text: "PROJECT 1: Deploy backend to Render (free tier)",
        info: "render.com — create a free account, deploy as a Web Service. Use Railway.app for MySQL (free tier).",
      },
      {
        id: "p2_15",
        text: "PROJECT 1: Push to GitHub with proper README",
        info: "README should have: project description, tech stack, features, how to run locally, live demo link.",
      },
      {
        id: "p2_16",
        text: "DSA: Linked Lists — 10 problems on LeetCode",
        info: "Filter: Easy, Topic: Linked List. Reverse a linked list, detect cycle, merge two lists — all common.",
      },
      {
        id: "p2_17",
        text: "DSA: Stacks and Queues — 10 problems",
        info: "Valid parentheses, min stack, implement queue using stacks — all Easy level, all asked in interviews.",
      },
      {
        id: "p2_18",
        text: "DSA: Binary Search — 8 problems",
        info: "Binary search on a sorted array is the most common easy-level topic. Master it completely.",
      },
    ],
  },
  {
    id: "phase3",
    title: "Phase 3 — Full Stack + React",
    period: "Aug 3 – Sep 20 (7 weeks)",
    color: "#0047AB",
    weeks: [
      "Week 12–13 (Aug 3 – Aug 17)",
      "Week 14–15 (Aug 18 – Aug 31)",
      "Week 16–17 (Sep 1 – Sep 14)",
      "Week 18 (Sep 15 – Sep 20)",
    ],
    tasks: [
      {
        id: "p3_1",
        text: "React: Components, JSX, props — build 3 small components",
        info: "A Header, a Card, and a Button component. Understand props as the way to pass data down.",
      },
      {
        id: "p3_2",
        text: "React: useState and useEffect hooks thoroughly",
        info: "useState manages data. useEffect runs side effects (API calls, timers). These are used in literally every React app.",
      },
      {
        id: "p3_3",
        text: "React Router — multi-page navigation setup",
        info: "npm install react-router-dom. Set up BrowserRouter, Routes, Route. Create at least 3 pages.",
      },
      {
        id: "p3_4",
        text: "React: Calling APIs with axios (install + use)",
        info: "npm install axios. Call your Expense Tracker backend API from React. Display the data in a list.",
      },
      {
        id: "p3_5",
        text: "React: Forms and controlled inputs",
        info: "Controlled inputs mean React state controls the input value. This is how login/register forms work.",
      },
      {
        id: "p3_6",
        text: "NxtWave: Follow React modules here — they'll align perfectly",
        info: "Your NxtWave React content will reinforce exactly what you're learning independently.",
      },
      {
        id: "p3_7",
        text: "Connect React frontend to Expense Tracker Spring Boot backend",
        info: "Handle CORS in your Spring Boot config (@CrossOrigin). Display expenses from your real API in React.",
      },
      {
        id: "p3_8",
        text: "Handle loading states, error states in React",
        info: "Every API call can fail. Show a spinner while loading. Show an error message if it fails. This shows maturity.",
      },
      {
        id: "p3_9",
        text: "Deploy React frontend on Vercel (free)",
        info: "vercel.com — connect GitHub repo, deploy in 2 minutes. Your frontend is now live with a real URL.",
      },
      {
        id: "p3_10",
        text: "Expense Tracker is now full stack and live ✅",
        info: "Frontend (Vercel) → Backend (Render) → Database (Railway). All deployed, all working.",
      },
      {
        id: "p3_11",
        text: "PROJECT 2: Start Student Result Portal — design DB schema first",
        info: "Tables: users (admin/student roles), subjects, results. Draw it on paper before coding.",
      },
      {
        id: "p3_12",
        text: "PROJECT 2: Implement role-based login (admin vs student)",
        info: "Admin can upload marks. Student can only view their own marks. Same JWT, different permissions.",
      },
      {
        id: "p3_13",
        text: "PROJECT 2: Admin dashboard — upload/edit marks",
        info: "Admin sees all students, can add/edit results per subject per student.",
      },
      {
        id: "p3_14",
        text: "PROJECT 2: Student dashboard — view own results and CGPA",
        info: "Student logs in, sees their results in a clean table, sees calculated percentage or CGPA.",
      },
      {
        id: "p3_15",
        text: "PROJECT 2: Deploy and push to GitHub with README",
        info: "Same process as Project 1. Both projects should be live and accessible via a public URL.",
      },
      {
        id: "p3_16",
        text: "DSA: Basic Trees — BFS and DFS — 8 problems",
        info: "Maximum depth of binary tree, level order traversal, invert binary tree — classic Easy problems.",
      },
      {
        id: "p3_17",
        text: "DSA: HashMaps — 8 problems",
        info: "Two sum, group anagrams, top K frequent elements. HashMaps are the most powerful tool in DSA interviews.",
      },
    ],
  },
  {
    id: "phase4",
    title: "Phase 4 — Advanced Projects + Cloud",
    period: "Sep 21 – Oct 31 (6 weeks)",
    color: "#FF6B00",
    weeks: [
      "Week 19–21 (Sep 21 – Oct 11)",
      "Week 22–23 (Oct 12 – Oct 25)",
      "Week 24–25 (Oct 26 – Oct 31)",
    ],
    tasks: [
      {
        id: "p4_1",
        text: "PROJECT 3: Plan Sitcom/Movie Recommender — wireframe first",
        info: "Sketch 3 screens: Home (mood/genre picker), Results (recommendation cards), Detail (show info). Even a rough sketch helps.",
      },
      {
        id: "p4_2",
        text: "PROJECT 3: Register on TMDB API and get free API key",
        info: "themoviedb.org — create account, go to Settings → API → Request API Key (free). This gives you real movie/show data.",
      },
      {
        id: "p4_3",
        text: "PROJECT 3: Build React frontend with mood/genre selector",
        info: "Dropdown or card-based genre/mood picker. This is the most visually impressive part — make it look good.",
      },
      {
        id: "p4_4",
        text: "PROJECT 3: Connect to TMDB API and display recommendations",
        info: "Call TMDB's /discover/tv or /discover/movie endpoint with genre filters. Display poster, title, rating.",
      },
      {
        id: "p4_5",
        text: "PROJECT 3: Add a Spring Boot or Python Flask backend for user preferences",
        info: "Let users save favorite shows. Store in DB. This makes it a proper full stack app, not just a frontend.",
      },
      {
        id: "p4_6",
        text: "PROJECT 3: Polish the UI — this is your showpiece project",
        info: "Good typography, clean cards, responsive layout. A visually impressive project gets remembered in interviews.",
      },
      {
        id: "p4_7",
        text: "PROJECT 3: Deploy and push to GitHub with detailed README",
        info: "Include screenshots in the README. A README with screenshots gets way more attention than text-only.",
      },
      {
        id: "p4_8",
        text: "AWS: Complete Cloud Practitioner Essentials (free on AWS Skill Builder)",
        info: "Go to explore.skillbuilder.aws — search 'Cloud Practitioner Essentials' — it's free and takes about 6 hours total.",
      },
      {
        id: "p4_9",
        text: "AWS: Understand EC2, S3, RDS at concept level",
        info: "EC2 = virtual server, S3 = file/object storage, RDS = managed database. Know what each does and why you'd use it.",
      },
      {
        id: "p4_10",
        text: "Linux: Complete LinuxJourney.com — Grasshopper section",
        info: "linuxjourney.com is free. Grasshopper section covers navigation, files, permissions — exactly what's asked in interviews.",
      },
      {
        id: "p4_11",
        text: "Polish all 3 project READMEs — add screenshots",
        info: "Open each project on GitHub. Add screenshots using: ![screenshot](link). Describe the project, tech stack, features.",
      },
      {
        id: "p4_12",
        text: "Pin top 3 projects on your GitHub profile",
        info: "Go to your GitHub profile → click Customize → pin the 3 projects. Recruiters see these first.",
      },
      {
        id: "p4_13",
        text: "Update LinkedIn — add all projects, skills, NxtWave cert",
        info: "LinkedIn summary, skills section (Java, Spring Boot, React, MySQL, Git, AWS), projects section with links.",
      },
      {
        id: "p4_14",
        text: "Create resume draft — 1 page, ATS format",
        info: "Use resume.io or Overleaf (LaTeX). No graphics, no columns, no tables. Just clean text. ATS systems can't read fancy layouts.",
      },
      {
        id: "p4_15",
        text: "DSA: Mixed revision — 10 problems across all topics",
        info: "Pick randomly from Arrays, Trees, HashMaps. Simulate exam pressure — solve in under 20 minutes each.",
      },
      {
        id: "p4_16",
        text: "NxtWave: Wrap up core technical modules",
        info: "Aim to be through the main NxtWave technical curriculum by end of October. Nov/Dec will be tough.",
      },
    ],
  },
  {
    id: "phase5",
    title: "Phase 5 — Exam Buffer (Nov)",
    period: "November 2026",
    color: "#888",
    weeks: ["Light pace — 1 hr/day only"],
    tasks: [
      {
        id: "p5_1",
        text: "LeetCode: 1 easy problem per day to stay warm",
        info: "Don't let the momentum die completely. Even 1 problem a day keeps the pattern fresh.",
      },
      {
        id: "p5_2",
        text: "NxtWave: Aptitude + communication track — low effort during internals",
        info: "This track is lighter than coding modules. Good for exam break periods.",
      },
      {
        id: "p5_3",
        text: "Re-read your project code once — so you can explain it fluently",
        info: "Open each project, go file by file, remind yourself why you wrote each part. Interview questions on your own code are easy if you remember it.",
      },
      {
        id: "p5_4",
        text: "Do NOT start any new learning during exam weeks",
        info: "Seriously. Your brain needs recovery time. The roadmap is designed to be done before November.",
      },
    ],
  },
  {
    id: "phase6",
    title: "Phase 6 — Final Sprint + Applications",
    period: "January 2027",
    color: "#16a34a",
    weeks: ["Week 1 (Jan 1–7)", "Week 2 (Jan 8–14)", "Week 3–4 (Jan 15–31)"],
    tasks: [
      {
        id: "p6_1",
        text: "Finalize resume completely — 1 page, tailored for Developer I",
        info: "Projects section is your strongest section. Each project: Name | Tech Stack | 2-line description | GitHub link | Live URL.",
      },
      {
        id: "p6_2",
        text: "Connect with 10+ UST employees on LinkedIn (Kerala/Bangalore)",
        info: "Search 'UST Global Kerala' on LinkedIn. Connect with engineers, don't message spam. Just connect — referrals happen organically.",
      },
      {
        id: "p6_3",
        text: "Create Naukri.com profile — complete 100%",
        info: "Set job alerts for: UST Global, IBS Software, Experion Technologies, Capgemini, LTIMindtree. Freshers, Kochi/Bangalore.",
      },
      {
        id: "p6_4",
        text: "Create Unstop (formerly D2C) profile",
        info: "unstop.com — UST posts fresher hiring challenges here. Set up profile and follow UST's page.",
      },
      {
        id: "p6_5",
        text: "Apply on UST Careers portal directly — careers.ust.com",
        info: "Go to careers.ust.com → search 'Developer' or 'Software Engineer' → filter India → apply for Developer I or Associate SE I.",
      },
      {
        id: "p6_6",
        text: "Apply via LinkedIn — UST Developer/Associate roles",
        info: "Follow UST Global's LinkedIn page. Turn on job alerts. Apply via LinkedIn Easy Apply when roles appear.",
      },
      {
        id: "p6_7",
        text: "DSA revision sprint — review all solved problems once",
        info: "Go through your LeetCode submissions. Especially re-solve any you got wrong the first time.",
      },
      {
        id: "p6_8",
        text: "Mock technical interview — explain all 3 projects out loud",
        info: "Record yourself on your phone explaining each project. Watch it back. If you hesitate anywhere, that's your weak spot.",
      },
      {
        id: "p6_9",
        text: "Practice: 'Tell me about yourself' — 90 second version",
        info: "Structure: Who you are → your tech stack → your strongest project → why UST. Keep it under 90 seconds.",
      },
      {
        id: "p6_10",
        text: "Practice: 'Why UST?' answer — personalize it",
        info: "UST is Kerala-founded (Thiruvananthapuram), serves Fortune 500 clients, strong in digital transformation. Mention their Kerala roots — it always lands well.",
      },
      {
        id: "p6_11",
        text: "Apply to backup companies: IBS Software, Experion, Tata Elxsi",
        info: "All three are strong Kerala-based or Kerala-hiring companies. IBS (TVM), Experion (Kochi), Tata Elxsi (TVM). Apply simultaneously.",
      },
      {
        id: "p6_12",
        text: "Apply to: Capgemini, LTIMindtree, Mphasis off-campus",
        info: "All three hire freshers aggressively via off-campus. Capgemini via AMCAT, LTIMindtree and Mphasis via their careers portals.",
      },
      {
        id: "p6_13",
        text: "Create a job application tracker spreadsheet",
        info: "Columns: Company | Role | Date Applied | Platform | Status | Follow-up Date. Track every single application.",
      },
      {
        id: "p6_14",
        text: "NxtWave: Activate placement support pipeline",
        info: "NxtWave has its own hiring network. Make sure your CCBP profile is complete and you're enrolled in placement readiness.",
      },
    ],
  },
];

const UST_PORTAL_STEPS = [
  {
    id: "ust_1",
    text: "Go to careers.ust.com",
    info: "This is UST's official careers portal. Bookmark it.",
  },
  {
    id: "ust_2",
    text: "Click 'Search Jobs' and filter: Country = India, Category = Technology",
    info: "You'll see all active UST India tech roles.",
  },
  {
    id: "ust_3",
    text: "Create an account on the UST careers portal",
    info: "Use your professional email (not a random Gmail). Your name as the username.",
  },
  {
    id: "ust_4",
    text: "Complete your profile — personal info, education, skills",
    info: "Fill everything. Incomplete profiles are auto-filtered out by ATS systems.",
  },
  {
    id: "ust_5",
    text: "Upload your resume (PDF, max 2MB, ATS format)",
    info: "No graphics, no tables, no columns. Clean text only. ATS can't parse fancy layouts.",
  },
  {
    id: "ust_6",
    text: "Set up job alerts for 'Developer I' and 'Associate Software Engineer'",
    info: "UST portal has a job alert feature. Set it so you get email when matching roles open.",
  },
  {
    id: "ust_7",
    text: "Apply to any active Developer I or Associate SE I roles",
    info: "Even if location says Bangalore — UST sometimes allows location flexibility for freshers. Apply anyway.",
  },
  {
    id: "ust_8",
    text: "Follow UST Global on LinkedIn and turn on job notifications",
    info: "LinkedIn → UST Global page → Follow → Bell icon → 'All notifications'. You'll see new job posts first.",
  },
  {
    id: "ust_9",
    text: "Set Naukri job alert: UST Global, Fresher, 0-1 yr, Kochi/Bangalore",
    info: "Naukri often has UST roles that don't appear on the direct portal. Dual coverage is important.",
  },
  {
    id: "ust_10",
    text: "Check Unstop.com for UST hiring challenges/drives",
    info: "UST sometimes runs off-campus drives on Unstop. These include online tests + direct interview calls.",
  },
];

const RESOURCES = [
  {
    name: "Kunal Kushwaha Java Bootcamp",
    url: "https://youtube.com",
    tag: "Java",
    icon: "☕",
  },
  {
    name: "CS50P (Python) – Harvard",
    url: "https://cs50.harvard.edu/python/",
    tag: "Python",
    icon: "🐍",
  },
  {
    name: "Amigoscode Spring Boot",
    url: "https://youtube.com",
    tag: "Spring Boot",
    icon: "🍃",
  },
  { name: "SQLZoo", url: "https://sqlzoo.net", tag: "SQL", icon: "🗄️" },
  {
    name: "javascript.info",
    url: "https://javascript.info",
    tag: "JavaScript",
    icon: "📜",
  },
  {
    name: "The Odin Project",
    url: "https://theodinproject.com",
    tag: "Web Dev",
    icon: "⚡",
  },
  {
    name: "React Official Docs",
    url: "https://react.dev/learn",
    tag: "React",
    icon: "⚛️",
  },
  {
    name: "Striver's A2Z DSA Sheet",
    url: "https://takeuforward.org",
    tag: "DSA",
    icon: "🧩",
  },
  { name: "LeetCode", url: "https://leetcode.com", tag: "DSA", icon: "🏆" },
  { name: "Neetcode 150", url: "https://neetcode.io", tag: "DSA", icon: "🎯" },
  {
    name: "AWS Skill Builder",
    url: "https://explore.skillbuilder.aws",
    tag: "Cloud",
    icon: "☁️",
  },
  {
    name: "Linux Journey",
    url: "https://linuxjourney.com",
    tag: "Linux",
    icon: "🐧",
  },
  {
    name: "IndiaBix Aptitude",
    url: "https://indiabix.com",
    tag: "Aptitude",
    icon: "🧠",
  },
  {
    name: "UST Careers Portal",
    url: "https://careers.ust.com",
    tag: "Apply",
    icon: "🎯",
  },
  { name: "Unstop (D2C)", url: "https://unstop.com", tag: "Apply", icon: "🚀" },
];

const RESUME_TEMPLATE = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    location: "",
  },
  summary: "",
  education: {
    degree: "",
    college: "",
    university: "APJ Abdul Kalam Technological University (KTU)",
    year: "2027",
    cgpa: "",
  },
  skills: {
    languages: "",
    frameworks: "",
    databases: "",
    tools: "",
    cloud: "",
  },
  projects: [
    { name: "", tech: "", description: "", github: "", live: "" },
    { name: "", tech: "", description: "", github: "", live: "" },
    { name: "", tech: "", description: "", github: "", live: "" },
  ],
  certifications: "",
  activities: "",
};

const TABS = [
  "Dashboard",
  "Roadmap",
  "UST Portal",
  "Resources",
  "Resume Builder",
];

function getFromStorage(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function App() {
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(() =>
    getFromStorage("ust_checked", {}),
  );
  const [ustChecked, setUstChecked] = useState(() =>
    getFromStorage("ust_portal_checked", {}),
  );
  const [resume, setResume] = useState(() =>
    getFromStorage("ust_resume", RESUME_TEMPLATE),
  );
  const [quoteIdx] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [expandedTask, setExpandedTask] = useState(null);

  useEffect(() => {
    saveToStorage("ust_checked", checked);
  }, [checked]);
  useEffect(() => {
    saveToStorage("ust_portal_checked", ustChecked);
  }, [ustChecked]);
  useEffect(() => {
    saveToStorage("ust_resume", resume);
  }, [resume]);

  const toggleCheck = useCallback((id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleUst = useCallback((id) => {
    setUstChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const totalTasks =
    PHASES.reduce((s, p) => s + p.tasks.length, 0) + UST_PORTAL_STEPS.length;
  const totalDone =
    Object.values(checked).filter(Boolean).length +
    Object.values(ustChecked).filter(Boolean).length;
  const pct = Math.round((totalDone / totalTasks) * 100);

  const phaseProgress = (phase) => {
    const done = phase.tasks.filter((t) => checked[t.id]).length;
    return {
      done,
      total: phase.tasks.length,
      pct: Math.round((done / phase.tasks.length) * 100),
    };
  };

  const updateResume = (path, value) => {
    setResume((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) {
        if (keys[i].includes("[")) {
          const [k, idx] = keys[i].replace("]", "").split("[");
          obj = obj[k][parseInt(idx)];
        } else obj = obj[keys[i]];
      }
      const last = keys[keys.length - 1];
      if (last.includes("[")) {
        const [k, idx] = last.replace("]", "").split("[");
        obj[k][parseInt(idx)] = value;
      } else obj[last] = value;
      return next;
    });
  };

  const downloadResume = () => {
    const r = resume;
    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Times New Roman', serif; font-size: 11pt; color: #111; padding: 0.6in; }
  h1 { font-size: 18pt; font-weight: bold; text-align: center; color: #0047AB; letter-spacing: 1px; }
  .contact { text-align: center; font-size: 9pt; color: #444; margin: 4px 0 10px; }
  .contact a { color: #0047AB; text-decoration: none; }
  .section-title { font-size: 11pt; font-weight: bold; color: #0047AB; border-bottom: 1.5px solid #0047AB; margin: 10px 0 4px; padding-bottom: 2px; text-transform: uppercase; letter-spacing: 0.5px; }
  .edu-row { display: flex; justify-content: space-between; }
  .bold { font-weight: bold; }
  .muted { color: #555; font-size: 9.5pt; }
  .project-name { font-weight: bold; }
  .project-tech { font-style: italic; font-size: 9.5pt; color: #444; }
  ul { padding-left: 16px; }
  li { margin-bottom: 2px; font-size: 10.5pt; }
  .skill-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 2px; }
  .skill-label { font-weight: bold; min-width: 90px; font-size: 10pt; }
  .skill-val { font-size: 10pt; }
  .links { font-size: 9pt; color: #0047AB; }
</style></head><body>
<h1>${r.personalInfo.name || "Your Name"}</h1>
<div class="contact">
  ${r.personalInfo.phone || ""} | <a href="mailto:${r.personalInfo.email}">${r.personalInfo.email || ""}</a> |
  <a href="${r.personalInfo.linkedin}">${r.personalInfo.linkedin ? "LinkedIn" : ""}</a> |
  <a href="${r.personalInfo.github}">${r.personalInfo.github ? "GitHub" : ""}</a> | ${r.personalInfo.location || ""}
</div>
${r.summary ? `<div class="section-title">Objective</div><p style="font-size:10.5pt">${r.summary}</p>` : ""}
<div class="section-title">Education</div>
<div class="edu-row"><span class="bold">${r.education.degree || "B.Tech Computer Science Engineering"}</span><span class="bold">${r.education.year || "2027"}</span></div>
<div class="edu-row"><span>${r.education.college || ""}</span><span class="muted">CGPA: ${r.education.cgpa || ""}</span></div>
<div class="muted">${r.education.university || "APJ Abdul Kalam Technological University (KTU)"}</div>
<div class="section-title">Technical Skills</div>
${r.skills.languages ? `<div class="skill-row"><span class="skill-label">Languages:</span><span class="skill-val">${r.skills.languages}</span></div>` : ""}
${r.skills.frameworks ? `<div class="skill-row"><span class="skill-label">Frameworks:</span><span class="skill-val">${r.skills.frameworks}</span></div>` : ""}
${r.skills.databases ? `<div class="skill-row"><span class="skill-label">Databases:</span><span class="skill-val">${r.skills.databases}</span></div>` : ""}
${r.skills.tools ? `<div class="skill-row"><span class="skill-label">Tools:</span><span class="skill-val">${r.skills.tools}</span></div>` : ""}
${r.skills.cloud ? `<div class="skill-row"><span class="skill-label">Cloud:</span><span class="skill-val">${r.skills.cloud}</span></div>` : ""}
<div class="section-title">Projects</div>
${r.projects
  .filter((p) => p.name)
  .map(
    (p) => `
<div style="margin-bottom:8px">
  <div style="display:flex;justify-content:space-between">
    <span class="project-name">${p.name}</span>
    <span class="links">${p.github ? `<a href="${p.github}">GitHub</a>` : ""} ${p.live ? `| <a href="${p.live}">Live</a>` : ""}</span>
  </div>
  <div class="project-tech">Tech Stack: ${p.tech}</div>
  <div style="font-size:10.5pt;margin-top:2px">${p.description}</div>
</div>`,
  )
  .join("")}
${r.certifications ? `<div class="section-title">Certifications</div><p style="font-size:10.5pt">${r.certifications}</p>` : ""}
${r.activities ? `<div class="section-title">Leadership &amp; Activities</div><p style="font-size:10.5pt">${r.activities}</p>` : ""}
</body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${r.personalInfo.name || "resume"}_UST.html`;
    a.click();
  };

  const q = QUOTES[quoteIdx];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#f8f9fc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${UST_BLUE} 0%, #003080 100%)`,
          padding: "20px 24px 0",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 10,
              padding: "6px 10px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                background: UST_BLUE,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              UST
            </div>
            <span
              style={{
                color: UST_ORANGE,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: 0.5,
              }}
            >
              GLOBAL
            </span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: 0.3 }}>
              Career Roadmap 2027
            </div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              Gautham • Developer I / Associate SE I Track
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: UST_ORANGE }}>
              {pct}%
            </div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>
              {totalDone}/{totalTasks} done
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 4,
            height: 6,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              background: UST_ORANGE,
              height: 6,
              borderRadius: 4,
              width: `${pct}%`,
              transition: "width 0.5s",
            }}
          />
        </div>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4 }}>
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              style={{
                background: tab === i ? "white" : "transparent",
                color: tab === i ? UST_BLUE : "rgba(255,255,255,0.75)",
                border: "none",
                borderRadius: "8px 8px 0 0",
                padding: "8px 14px",
                fontWeight: tab === i ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 24px", maxWidth: 900, margin: "0 auto" }}>
        {/* Quote card - always visible */}
        <div
          style={{
            background: "white",
            borderLeft: `4px solid ${UST_ORANGE}`,
            borderRadius: 10,
            padding: "14px 18px",
            marginBottom: 20,
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "#333",
              lineHeight: 1.5,
            }}
          >
            "{q.text}"
          </div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 6 }}>
            — {q.char} · <span style={{ color: UST_BLUE }}>{q.from}</span>
          </div>
        </div>

        {/* DASHBOARD TAB */}
        {tab === 0 && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginBottom: 20,
              }}
            >
              {[
                {
                  label: "Tasks Completed",
                  value: totalDone,
                  total: totalTasks,
                  color: UST_BLUE,
                },
                {
                  label: "Overall Progress",
                  value: `${pct}%`,
                  color: UST_ORANGE,
                },
                {
                  label: "Days Until Deadline",
                  value: Math.max(
                    0,
                    Math.ceil((new Date("2027-01-31") - new Date()) / 86400000),
                  ),
                  color: "#16a34a",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: 12,
                    padding: "16px 18px",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                    borderTop: `3px solid ${c.color}`,
                  }}
                >
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>
                    {c.label}
                  </div>
                  <div
                    style={{ fontSize: 26, fontWeight: 800, color: c.color }}
                  >
                    {c.value}
                  </div>
                  {c.total && (
                    <div style={{ fontSize: 11, color: "#aaa" }}>
                      out of {c.total}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#222",
                marginBottom: 12,
              }}
            >
              Phase Overview
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {PHASES.map((phase) => {
                const { done, total, pct: pp } = phaseProgress(phase);
                return (
                  <div
                    key={phase.id}
                    style={{
                      background: "white",
                      borderRadius: 12,
                      padding: "14px 18px",
                      boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 13,
                            color: "#222",
                          }}
                        >
                          {phase.title}
                        </div>
                        <div style={{ fontSize: 11, color: "#888" }}>
                          {phase.period}
                        </div>
                      </div>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: 15,
                          color: phase.color,
                        }}
                      >
                        {pp}%
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#f0f0f0",
                        borderRadius: 4,
                        height: 6,
                      }}
                    >
                      <div
                        style={{
                          background: phase.color,
                          height: 6,
                          borderRadius: 4,
                          width: `${pp}%`,
                          transition: "width 0.4s",
                        }}
                      />
                    </div>
                    <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>
                      {done} / {total} tasks
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ROADMAP TAB */}
        {tab === 1 && (
          <div>
            {PHASES.map((phase) => {
              const { done, total, pct: pp } = phaseProgress(phase);
              const open = expandedPhase === phase.id;
              return (
                <div
                  key={phase.id}
                  style={{
                    background: "white",
                    borderRadius: 12,
                    marginBottom: 14,
                    boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                    border: `1px solid ${phase.color}20`,
                  }}
                >
                  <div
                    onClick={() => setExpandedPhase(open ? null : phase.id)}
                    style={{
                      background: `linear-gradient(135deg, ${phase.color}10, ${phase.color}05)`,
                      padding: "14px 18px",
                      cursor: "pointer",
                      borderBottom: open
                        ? `1px solid ${phase.color}20`
                        : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: phase.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontWeight: 800,
                          fontSize: 13,
                        }}
                      >
                        {pp}%
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#1a1a1a",
                        }}
                      >
                        {phase.title}
                      </div>
                      <div
                        style={{ fontSize: 11, color: "#888", marginTop: 2 }}
                      >
                        {phase.period} · {done}/{total} tasks
                      </div>
                      <div
                        style={{
                          background: "#e8e8e8",
                          borderRadius: 3,
                          height: 4,
                          marginTop: 6,
                        }}
                      >
                        <div
                          style={{
                            background: phase.color,
                            height: 4,
                            borderRadius: 3,
                            width: `${pp}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ color: "#aaa", fontSize: 18 }}>
                      {open ? "▲" : "▼"}
                    </div>
                  </div>
                  {open && (
                    <div style={{ padding: "12px 18px" }}>
                      {phase.tasks.map((task) => (
                        <div key={task.id} style={{ marginBottom: 8 }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                            }}
                          >
                            <div
                              onClick={() => toggleCheck(task.id)}
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 5,
                                border: `2px solid ${checked[task.id] ? phase.color : "#ccc"}`,
                                background: checked[task.id]
                                  ? phase.color
                                  : "white",
                                cursor: "pointer",
                                flexShrink: 0,
                                marginTop: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s",
                              }}
                            >
                              {checked[task.id] && (
                                <span
                                  style={{
                                    color: "white",
                                    fontSize: 11,
                                    fontWeight: 800,
                                  }}
                                >
                                  ✓
                                </span>
                              )}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div
                                onClick={() => toggleCheck(task.id)}
                                style={{
                                  fontSize: 13,
                                  fontWeight: 500,
                                  color: checked[task.id] ? "#aaa" : "#222",
                                  textDecoration: checked[task.id]
                                    ? "line-through"
                                    : "none",
                                  cursor: "pointer",
                                  lineHeight: 1.4,
                                }}
                              >
                                {task.text}
                              </div>
                              <div
                                onClick={() =>
                                  setExpandedTask(
                                    expandedTask === task.id ? null : task.id,
                                  )
                                }
                                style={{
                                  fontSize: 11,
                                  color: UST_BLUE,
                                  cursor: "pointer",
                                  marginTop: 2,
                                }}
                              >
                                {expandedTask === task.id
                                  ? "▲ hide info"
                                  : "▼ why this matters"}
                              </div>
                              {expandedTask === task.id && (
                                <div
                                  style={{
                                    background: `${phase.color}08`,
                                    border: `1px solid ${phase.color}20`,
                                    borderRadius: 8,
                                    padding: "8px 12px",
                                    marginTop: 6,
                                    fontSize: 12,
                                    color: "#444",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  {task.info}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* UST PORTAL TAB */}
        {tab === 2 && (
          <div>
            <div
              style={{
                background: "white",
                borderRadius: 12,
                padding: 18,
                marginBottom: 16,
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    background: UST_BLUE,
                    color: "white",
                    borderRadius: 8,
                    padding: "6px 12px",
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  UST
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>
                    Off-Campus Application Checklist
                  </div>
                  <div style={{ fontSize: 12, color: "#888" }}>
                    Complete these steps to maximize your UST application
                    chances
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontWeight: 800,
                    color: UST_ORANGE,
                    fontSize: 16,
                  }}
                >
                  {Object.values(ustChecked).filter(Boolean).length}/
                  {UST_PORTAL_STEPS.length}
                </div>
              </div>
              <div
                style={{
                  background: "#f0f0f0",
                  borderRadius: 4,
                  height: 6,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    background: UST_ORANGE,
                    height: 6,
                    borderRadius: 4,
                    width: `${Math.round((Object.values(ustChecked).filter(Boolean).length / UST_PORTAL_STEPS.length) * 100)}%`,
                    transition: "width 0.4s",
                  }}
                />
              </div>
              {UST_PORTAL_STEPS.map((step) => (
                <div
                  key={step.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div
                    onClick={() => toggleUst(step.id)}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      border: `2px solid ${ustChecked[step.id] ? UST_ORANGE : "#ccc"}`,
                      background: ustChecked[step.id] ? UST_ORANGE : "white",
                      cursor: "pointer",
                      flexShrink: 0,
                      marginTop: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ustChecked[step.id] && (
                      <span
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: ustChecked[step.id] ? "#aaa" : "#222",
                        textDecoration: ustChecked[step.id]
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {step.text}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#777",
                        marginTop: 2,
                        lineHeight: 1.5,
                      }}
                    >
                      {step.info}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "white",
                borderRadius: 12,
                padding: 18,
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>
                Other Companies to Apply Simultaneously
              </div>
              {[
                {
                  name: "IBS Software",
                  loc: "Thiruvananthapuram",
                  type: "Kerala-founded",
                  color: "#7c3aed",
                },
                {
                  name: "Experion Technologies",
                  loc: "Kochi",
                  type: "Product company",
                  color: "#059669",
                },
                {
                  name: "Tata Elxsi",
                  loc: "Thiruvananthapuram",
                  type: "Design + Tech",
                  color: "#dc2626",
                },
                {
                  name: "Capgemini",
                  loc: "Bangalore / HYD",
                  type: "High volume fresher",
                  color: "#0047AB",
                },
                {
                  name: "LTIMindtree",
                  loc: "Bangalore",
                  type: "Strong fresher pipeline",
                  color: "#0891b2",
                },
                {
                  name: "Mphasis",
                  loc: "Bangalore",
                  type: "Java + Full Stack",
                  color: "#d97706",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: i < 5 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: c.color,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600, fontSize: 13 }}>
                      {c.name}
                    </span>
                    <span
                      style={{ fontSize: 11, color: "#888", marginLeft: 8 }}
                    >
                      {c.loc}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      background: `${c.color}15`,
                      color: c.color,
                      padding: "2px 8px",
                      borderRadius: 20,
                    }}
                  >
                    {c.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESOURCES TAB */}
        {tab === 3 && (
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>
              Learning Resources
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 10,
              }}
            >
              {RESOURCES.map((r, i) => (
                <div
                  key={i}
                  onClick={() => window.open(r.url, "_blank")}
                  style={{
                    background: "white",
                    borderRadius: 10,
                    padding: "12px 14px",
                    cursor: "pointer",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid #f0f0f0",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ fontSize: 22 }}>{r.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{ fontWeight: 600, fontSize: 13, color: "#222" }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        background: `${UST_BLUE}15`,
                        color: UST_BLUE,
                        display: "inline-block",
                        padding: "1px 6px",
                        borderRadius: 10,
                        marginTop: 3,
                      }}
                    >
                      {r.tag}
                    </div>
                  </div>
                  <div style={{ color: "#ccc", fontSize: 14 }}>→</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 20,
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 12,
              }}
            >
              Motivational Quotes
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {QUOTES.slice(0, 8).map((q, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderLeft: `3px solid ${i % 2 === 0 ? UST_BLUE : UST_ORANGE}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{ fontStyle: "italic", fontSize: 13, color: "#333" }}
                  >
                    "{q.text}"
                  </div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>
                    — {q.char} · {q.from}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESUME BUILDER TAB */}
        {tab === 4 && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>
                  Resume Builder
                </div>
                <div style={{ fontSize: 12, color: "#888" }}>
                  Tailored for UST Developer I applications
                </div>
              </div>
              <button
                onClick={downloadResume}
                style={{
                  background: UST_BLUE,
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 18px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                ⬇ Download Resume
              </button>
            </div>

            {[
              {
                title: "Personal Information",
                fields: [
                  {
                    label: "Full Name",
                    key: "personalInfo.name",
                    placeholder: "Gautham Madhavankutty",
                  },
                  {
                    label: "Email",
                    key: "personalInfo.email",
                    placeholder: "gautham@email.com",
                  },
                  {
                    label: "Phone",
                    key: "personalInfo.phone",
                    placeholder: "+91 9XXXXXXXXX",
                  },
                  {
                    label: "LinkedIn URL",
                    key: "personalInfo.linkedin",
                    placeholder: "linkedin.com/in/username",
                  },
                  {
                    label: "GitHub URL",
                    key: "personalInfo.github",
                    placeholder: "github.com/GTHM",
                  },
                  {
                    label: "Location",
                    key: "personalInfo.location",
                    placeholder: "Kottarakkara, Kerala",
                  },
                ],
              },
              {
                title: "Objective Summary",
                fields: [
                  {
                    label:
                      "2-3 line objective (mention UST if this is for UST)",
                    key: "summary",
                    placeholder:
                      "Motivated CSE graduate from KTU seeking a Developer I role at UST Global, with strong skills in Java, Spring Boot, React, and MySQL. Passionate about building scalable solutions and eager to contribute to UST's digital transformation mission.",
                    multiline: true,
                  },
                ],
              },
              {
                title: "Education",
                fields: [
                  {
                    label: "Degree",
                    key: "education.degree",
                    placeholder: "B.Tech Computer Science Engineering",
                  },
                  {
                    label: "College",
                    key: "education.college",
                    placeholder: "College of Engineering Kottarakkara (CEK)",
                  },
                  {
                    label: "University",
                    key: "education.university",
                    placeholder:
                      "APJ Abdul Kalam Technological University (KTU)",
                  },
                  {
                    label: "Graduation Year",
                    key: "education.year",
                    placeholder: "2027",
                  },
                  {
                    label: "CGPA",
                    key: "education.cgpa",
                    placeholder: "X.XX / 10",
                  },
                ],
              },
              {
                title: "Technical Skills",
                fields: [
                  {
                    label: "Languages",
                    key: "skills.languages",
                    placeholder: "Java, Python, JavaScript, C, C++, HTML, CSS",
                  },
                  {
                    label: "Frameworks",
                    key: "skills.frameworks",
                    placeholder: "Spring Boot, React.js, Django/Flask",
                  },
                  {
                    label: "Databases",
                    key: "skills.databases",
                    placeholder: "MySQL, PostgreSQL",
                  },
                  {
                    label: "Tools",
                    key: "skills.tools",
                    placeholder: "Git, GitHub, Postman, VS Code, IntelliJ IDEA",
                  },
                  {
                    label: "Cloud / Others",
                    key: "skills.cloud",
                    placeholder: "AWS (EC2, S3, RDS), Linux, REST APIs",
                  },
                ],
              },
            ].map((section, si) => (
              <div
                key={si}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 18,
                  marginBottom: 14,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: UST_BLUE,
                    marginBottom: 12,
                    paddingBottom: 6,
                    borderBottom: `2px solid ${UST_BLUE}20`,
                  }}
                >
                  {section.title}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      section.title === "Objective Summary"
                        ? "1fr"
                        : "repeat(2, 1fr)",
                    gap: 10,
                  }}
                >
                  {section.fields.map((f, fi) => (
                    <div
                      key={fi}
                      style={{ gridColumn: f.multiline ? "1 / -1" : "auto" }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#555",
                          marginBottom: 4,
                        }}
                      >
                        {f.label}
                      </div>
                      {f.multiline ? (
                        <textarea
                          value={(() => {
                            try {
                              const keys = f.key.split(".");
                              let obj = resume;
                              for (const k of keys) obj = obj[k];
                              return obj || "";
                            } catch {
                              return "";
                            }
                          })()}
                          onChange={(e) => updateResume(f.key, e.target.value)}
                          placeholder={f.placeholder}
                          rows={3}
                          style={{
                            width: "100%",
                            padding: "8px 10px",
                            borderRadius: 7,
                            border: "1px solid #ddd",
                            fontSize: 12,
                            resize: "vertical",
                            fontFamily: "inherit",
                          }}
                        />
                      ) : (
                        <input
                          value={(() => {
                            try {
                              const keys = f.key.split(".");
                              let obj = resume;
                              for (const k of keys) obj = obj[k];
                              return obj || "";
                            } catch {
                              return "";
                            }
                          })()}
                          onChange={(e) => updateResume(f.key, e.target.value)}
                          placeholder={f.placeholder}
                          style={{
                            width: "100%",
                            padding: "8px 10px",
                            borderRadius: 7,
                            border: "1px solid #ddd",
                            fontSize: 12,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Projects */}
            <div
              style={{
                background: "white",
                borderRadius: 12,
                padding: 18,
                marginBottom: 14,
                boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: UST_BLUE,
                  marginBottom: 12,
                  paddingBottom: 6,
                  borderBottom: `2px solid ${UST_BLUE}20`,
                }}
              >
                Projects
              </div>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 16,
                    padding: "12px",
                    background: "#f9faff",
                    borderRadius: 8,
                    border: `1px solid ${UST_BLUE}15`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      color: UST_BLUE,
                      marginBottom: 8,
                    }}
                  >
                    Project {i + 1}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 8,
                    }}
                  >
                    {[
                      {
                        label: "Project Name",
                        key: `projects[${i}].name`,
                        placeholder:
                          i === 0
                            ? "Expense Tracker"
                            : i === 1
                              ? "Student Result Portal"
                              : "Movie Recommender",
                      },
                      {
                        label: "Tech Stack",
                        key: `projects[${i}].tech`,
                        placeholder: "Java, Spring Boot, React, MySQL",
                      },
                      {
                        label: "GitHub Link",
                        key: `projects[${i}].github`,
                        placeholder: "github.com/GTHM/project",
                      },
                      {
                        label: "Live URL",
                        key: `projects[${i}].live`,
                        placeholder: "project.vercel.app",
                      },
                    ].map((f, fi) => (
                      <div key={fi}>
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#555",
                            marginBottom: 3,
                          }}
                        >
                          {f.label}
                        </div>
                        <input
                          value={resume.projects[i][f.key.split(".")[1]] || ""}
                          onChange={(e) => updateResume(f.key, e.target.value)}
                          placeholder={f.placeholder}
                          style={{
                            width: "100%",
                            padding: "7px 10px",
                            borderRadius: 6,
                            border: "1px solid #ddd",
                            fontSize: 12,
                          }}
                        />
                      </div>
                    ))}
                    <div style={{ gridColumn: "1 / -1" }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#555",
                          marginBottom: 3,
                        }}
                      >
                        Description (2 lines max)
                      </div>
                      <textarea
                        value={resume.projects[i].description || ""}
                        onChange={(e) =>
                          updateResume(
                            `projects[${i}].description`,
                            e.target.value,
                          )
                        }
                        placeholder={
                          i === 0
                            ? "Full-stack expense management app with JWT auth, CRUD operations, category filters and monthly summaries. REST API backend deployed on Render, React frontend on Vercel."
                            : ""
                        }
                        rows={2}
                        style={{
                          width: "100%",
                          padding: "7px 10px",
                          borderRadius: 6,
                          border: "1px solid #ddd",
                          fontSize: 12,
                          resize: "none",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications + Activities */}
            {[
              {
                title: "Certifications",
                key: "certifications",
                placeholder:
                  "NxtWave Full Stack Development Certificate (2026), AWS Cloud Practitioner Essentials (2026)",
              },
              {
                title: "Leadership & Activities",
                key: "activities",
                placeholder:
                  "IEEE Student Branch Secretary, CEK (2024–2026) | NSS Unit 333 Secretary | Trainer, Eduskhetra (2026) | NSS Best Volunteer Award",
              },
            ].map((s, si) => (
              <div
                key={si}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 18,
                  marginBottom: 14,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: UST_BLUE,
                    marginBottom: 10,
                    paddingBottom: 6,
                    borderBottom: `2px solid ${UST_BLUE}20`,
                  }}
                >
                  {s.title}
                </div>
                <textarea
                  value={resume[s.key] || ""}
                  onChange={(e) => updateResume(s.key, e.target.value)}
                  placeholder={s.placeholder}
                  rows={2}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 7,
                    border: "1px solid #ddd",
                    fontSize: 12,
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            ))}

            <div
              style={{
                background: `${UST_BLUE}08`,
                borderRadius: 10,
                padding: 14,
                border: `1px dashed ${UST_BLUE}30`,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 13,
                  color: UST_BLUE,
                  marginBottom: 4,
                }}
              >
                💡 Resume Tips for UST Developer I
              </div>
              <div style={{ fontSize: 12, color: "#444", lineHeight: 1.7 }}>
                Keep it 1 page · Projects section is your strongest section ·
                List live demo URLs · Mention GitHub activity · Add NxtWave
                certificate · Include IEEE/NSS — leadership matters at UST · Use
                action verbs: Built, Developed, Implemented, Designed, Deployed
              </div>
            </div>

            <button
              onClick={downloadResume}
              style={{
                width: "100%",
                background: `linear-gradient(135deg, ${UST_BLUE}, #003080)`,
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "14px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              ⬇ Download Resume as HTML (open in browser → Print → Save as PDF)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
