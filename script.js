// Developer Launch Page - Dynamic Logic & Interactive Roadmap
// Author: Suyash Srivastava | Zyora Internship 2026

document.addEventListener('DOMContentLoaded', () => {
  initRoadmap();
  initTerminal();
  initNavEffects();
});

// 1. 15-Day Roadmap Data & Rendering
const roadmapData = [
  {
    day: 1,
    title: "Developer Launch Page & Dev Environment",
    desc: "Machine configuration (VS Code, Git, Node LTS, GitHub). Architectural setup of high-aesthetics launch portal with responsive glassmorphism design.",
    phase: "phase1",
    phaseName: "Phase 1: Foundations",
    tags: ["HTML5", "Vanilla CSS", "Git", "System Setup"]
  },
  {
    day: 2,
    title: "Responsive Design System & UI Library",
    desc: "Building reusable UI components, custom utility tokens, dark mode schemes, and responsive grid layouts for seamless multi-device rendering.",
    phase: "phase1",
    phaseName: "Phase 1: Foundations",
    tags: ["Design Systems", "CSS Grid", "Flexbox", "Tokens"]
  },
  {
    day: 3,
    title: "Client-Side State & DOM Micro-Animations",
    desc: "Engineering interactive state management using pure ES6+ JavaScript, custom event dispatchers, and hardware-accelerated CSS animations.",
    phase: "phase1",
    phaseName: "Phase 1: Foundations",
    tags: ["DOM Manipulation", "State Management", "ES6+", "Animations"]
  },
  {
    day: 4,
    title: "Asynchronous REST API Integration",
    desc: "Connecting frontend portals to live external REST APIs with robust error handling, loading states, retry logic, and data caching strategies.",
    phase: "phase1",
    phaseName: "Phase 1: Foundations",
    tags: ["Fetch API", "Async/Await", "JSON", "Caching"]
  },
  {
    day: 5,
    title: "Phase 1 Capstone: Real-Time Analytics Dashboard",
    desc: "Synthesizing UI/UX mastery and async integrations into a dynamic visual dashboard tracking live metrics and interactive charts.",
    phase: "phase1",
    phaseName: "Phase 1: Foundations",
    tags: ["Capstone", "Data Visualization", "Frontend Architecture"]
  },
  {
    day: 6,
    title: "Node.js & Express Microservice Engine",
    desc: "Transitioning to backend engineering: setting up modular REST endpoints, custom middleware pipelines, and strict request validation.",
    phase: "phase2",
    phaseName: "Phase 2: Full-Stack",
    tags: ["Node.js", "Express", "REST API", "Middleware"]
  },
  {
    day: 7,
    title: "Database Modeling & Data Persistence",
    desc: "Designing relational and document schemas (PostgreSQL / MongoDB), writing optimized queries, and implementing connection pooling.",
    phase: "phase2",
    phaseName: "Phase 2: Full-Stack",
    tags: ["Databases", "SQL", "NoSQL", "ORM/ODM"]
  },
  {
    day: 8,
    title: "Authentication, JWT & Role-Based Security",
    desc: "Implementing secure user authentication workflows, cryptographic password hashing (bcrypt), JSON Web Tokens, and HTTP-only cookies.",
    phase: "phase2",
    phaseName: "Phase 2: Full-Stack",
    tags: ["Security", "JWT", "Authentication", "RBAC"]
  },
  {
    day: 9,
    title: "WebSocket Real-Time Event & Chat Server",
    desc: "Building bi-directional, low-latency communication engines for real-time notifications, presence tracking, and multi-user collaboration.",
    phase: "phase2",
    phaseName: "Phase 2: Full-Stack",
    tags: ["WebSockets", "Socket.io", "Real-Time", "Events"]
  },
  {
    day: 10,
    title: "Phase 2 Capstone: Multi-User Collaborative Suite",
    desc: "Full-stack production integration featuring real-time data sync, secure user profiles, and cloud data persistence.",
    phase: "phase2",
    phaseName: "Phase 2: Full-Stack",
    tags: ["Full-Stack Capstone", "WebSockets", "Auth", "Database"]
  },
  {
    day: 11,
    title: "LLM API Integration & Prompt Pipelines",
    desc: "Connecting backend services to advanced LLM endpoints (Gemini / OpenAI), structuring structured JSON outputs, and handling token streaming.",
    phase: "phase3",
    phaseName: "Phase 3: AI Agents",
    tags: ["LLM API", "Prompt Engineering", "Streaming", "JSON"]
  },
  {
    day: 12,
    title: "Autonomous Agentic Tool-Calling Architecture",
    desc: "Developing intelligent agents capable of dynamic reasoning, executing external API functions, and autonomously solving multi-step tasks.",
    phase: "phase3",
    phaseName: "Phase 3: AI Agents",
    tags: ["Agentic AI", "Tool Calling", "Function Calling", "Orchestration"]
  },
  {
    day: 13,
    title: "Vector Embeddings & RAG Knowledge Engine",
    desc: "Building Retrieval-Augmented Generation systems using semantic vector search, document chunking pipelines, and high-precision context injection.",
    phase: "phase3",
    phaseName: "Phase 3: AI Agents",
    tags: ["RAG", "Embeddings", "Vector DB", "Semantic Search"]
  },
  {
    day: 14,
    title: "CI/CD Automation, Docker & Cloud Deployment",
    desc: "Containerizing applications with Docker, constructing GitHub Actions workflow pipelines, and deploying zero-downtime production builds.",
    phase: "phase3",
    phaseName: "Phase 3: AI Agents",
    tags: ["DevOps", "Docker", "CI/CD", "Cloud Deployment"]
  },
  {
    day: 15,
    title: "Grand Finale: Production AI Agent Platform Launch",
    desc: "Final production release of a fully integrated, state-of-the-art AI application with comprehensive documentation, live demos, and review.",
    phase: "phase3",
    phaseName: "Phase 3: AI Agents",
    tags: ["Grand Finale", "Production Launch", "Full-Stack AI"]
  }
];

function initRoadmap() {
  const controlsContainer = document.getElementById('roadmap-controls');
  const gridContainer = document.getElementById('roadmap-grid');
  if (!controlsContainer || !gridContainer) return;

  const filters = [
    { id: 'all', label: '⚡ All 15 Days' },
    { id: 'phase1', label: '🎨 Phase 1: Foundations (Days 1-5)' },
    { id: 'phase2', label: '🏗️ Phase 2: Full-Stack (Days 6-10)' },
    { id: 'phase3', label: '🤖 Phase 3: AI Agents (Days 11-15)' }
  ];

  // Render filter buttons
  controlsContainer.innerHTML = filters.map(f => `
    <button class="filter-btn ${f.id === 'all' ? 'active' : ''}" data-filter="${f.id}">
      ${f.label}
    </button>
  `).join('');

  // Render cards function
  function renderCards(filterId) {
    const filtered = filterId === 'all' 
      ? roadmapData 
      : roadmapData.filter(d => d.phase === filterId);

    gridContainer.innerHTML = filtered.map(item => `
      <div class="glass-card roadmap-card" data-phase="${item.phase}">
        <div>
          <div class="card-top">
            <span class="day-badge">DAY ${item.day < 10 ? '0' + item.day : item.day}</span>
            <span class="phase-tag">${item.phaseName}</span>
          </div>
          <h3 class="roadmap-title">${item.title}</h3>
          <p class="roadmap-desc">${item.desc}</p>
        </div>
        <div class="roadmap-tags">
          ${item.tags.map(t => `<span>#${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Initial render
  renderCards('all');

  // Filter button listeners
  controlsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      renderCards(e.target.getAttribute('data-filter'));
    }
  });
}

// 2. Interactive Terminal Engine
function initTerminal() {
  const termInput = document.getElementById('term-input');
  const termHistory = document.getElementById('term-history');
  const termBody = document.getElementById('terminal-body');
  if (!termInput || !termHistory || !termBody) return;

  const commands = {
    help: () => `
<div style="color: var(--accent-cyan);">Available Commands:</div>
  <b>whoami</b>    - Display developer identity and core background
  <b>roadmap</b>   - Show overview of the 15-day engineering sprint
  <b>why</b>       - Display the core mission and why I joined Zyora
  <b>skills</b>    - List core programming languages and frameworks
  <b>setup</b>     - Check system environment checkmarks
  <b>clear</b>     - Clear terminal window history
  <b>day [1-15]</b> - View specific details for any day (e.g. 'day 12')
`,
    whoami: () => `
<div style="color: var(--accent-cyan);">Suyash Srivastava | Software Engineer & AI Builder</div>
Passionate full-stack developer participating in the 15-Day Zyora Internship Sprint.
Specialized in building reactive web interfaces, backend microservices, and agentic workflows.
`,
    why: () => `
<div style="color: var(--accent-purple);">Mission Statement:</div>
"I joined Zyora to push past traditional development boundaries, master cutting-edge agentic workflows, and ship world-class, production-ready software in 15 intensive days."
`,
    roadmap: () => `
<div style="color: var(--accent-blue);">15-Day Sprint Architecture:</div>
  Days 01-05: Phase 1 - Frontend Foundations & UI Mastery
  Days 06-10: Phase 2 - Full-Stack Architecture & Real-Time APIs
  Days 11-15: Phase 3 - Agentic AI Workflows & Production Launch
 Type 'day 1' through 'day 15' for daily specifications.
`,
    skills: () => `
<div style="color: var(--accent-emerald);">Technical Capabilities:</div>
  Languages: JavaScript (ES6+), TypeScript, Python, HTML5/CSS3
  Runtime/Backend: Node.js LTS, Express, WebSockets, REST APIs
  Databases: PostgreSQL, MongoDB, Redis
  AI/DevOps: LLM APIs, Tool Calling, Docker, Git, CI/CD
`,
    setup: () => `
<div style="color: var(--accent-cyan);">System Status Check:</div>
  [✓] VS Code IDE         - Ready & Active
  [✓] Git Version Control - v2.51 LTS Initialized
  [✓] Node.js Runtime     - v22 LTS Verified
  [✓] GitHub Account      - Linked & Ready to Push
`
  };

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = termInput.value.trim();
      const input = raw.toLowerCase();
      termInput.value = '';
      if (!raw) return;

      if (input === 'clear') {
        termHistory.innerHTML = '';
        return;
      }

      let output = '';
      if (commands[input]) {
        output = commands[input]();
      } else if (input.startsWith('day ')) {
        const dayNum = parseInt(input.split(' ')[1], 10);
        const dayItem = roadmapData.find(d => d.day === dayNum);
        if (dayItem) {
          output = `
<div style="color: var(--accent-cyan);">DAY ${dayItem.day}: ${dayItem.title}</div>
Phase: ${dayItem.phaseName}
Description: ${dayItem.desc}
Tech: ${dayItem.tags.join(', ')}
`;
        } else {
          output = `<div style="color: #ff5f56;">Error: Day ${dayNum} not found in 15-day sprint (try 1 to 15).</div>`;
        }
      } else {
        output = `<div style="color: #ff5f56;">Command not recognized: '${raw}'. Type <b>help</b> for command list.</div>`;
      }

      const entry = document.createElement('div');
      entry.className = 'term-line';
      entry.innerHTML = `
        <span class="term-prompt">suyash@zyora:~$</span>
        <span class="term-command">${raw}</span>
        <div class="term-output">${output}</div>
      `;
      termHistory.appendChild(entry);
      termBody.scrollTop = termBody.scrollHeight;
    }
  });

  // Focus input when clicking terminal
  termBody.addEventListener('click', () => termInput.focus());
}

// 3. Navigation Highlight on Scroll
function initNavEffects() {
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(sec => {
      const secTop = sec.offsetTop;
      if (pageYOffset >= secTop - 120) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}
