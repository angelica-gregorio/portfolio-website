/* ═══════════════════════════════════════════════════════════════
   ✏️  EDIT YOUR DATA HERE — no HTML or CSS changes needed
   ═══════════════════════════════════════════════════════════════

   PROJECTS:  Add/remove objects. Each needs:
     title, desc, tags[], icon (bootstrap-icon class), grad (CSS gradient),
     img (path to image file, or "" for icon fallback), link, award

   EDUCATION:  Each school needs:
     school, deg, logo (path to logo PNG/SVG, or "" for icon),
     photoBg (CSS gradient for banner bg), photoIco (bootstrap-icon),
     accent (colour for the bottom stripe), full (true = wide card),
     badges[] with {l: label, s: style class}

   GALLERY:  Each item needs:
     cat ("competitions"|"awards"|"volunteerism"|"orgs"),
     img (path or ""), label, span ("tall"|"wide"|"sq"),
     pBg (placeholder bg colour), pIco (icon), pCol (icon colour)

   SKILLS:   l=label, p=percentage, b=bar colour

   SKILL_TAGS: l=label, c=text colour, bg=background colour
════════════════════════════════════════════════════════════════ */

const PROJECTS = [
      {
        title: "BayLayn Attendance System",
        desc: "Development of a Web-Based Scanner System for Efficient Attendance Management in BayLayn 2026 which comprises of estimated 500 participants",
        tags: [
            { l: "JavaScript/HTML/CSS", c: "#ffc96b", b: "rgba(255,201,107,.18)" }
        ],
        icon: "bi-broadcast-pin",
        img: "resources\\images\\projects\\baylayn2026.png",       // ← replace with your photo path
        link: "https://baylayn2026.angelica-gregorio.workers.dev/",
        award: ""

    },
     {
        title: "Project TheSys",
        desc: "Development of a Web-Based Thesis Evaluation Portal with Dynamic Rubric Management",
        tags: [
            { l: "PHP", c: "#ff6b6b", b: "rgba(255,107,107,.18)" },
            { l: "MySQL", c: "#ff9b6b", b: "rgba(255,155,107,.18)" },
            { l: "JavaScript/HTML/CSS", c: "#ffc96b", b: "rgba(255,201,107,.18)" }
        ],
        icon: "bi-broadcast-pin",
        img: "resources\\images\\projects\\dece-thesys.png",       // ← replace with your photo path
        link: "https://www.canva.com/design/DAG5lV4I120/NgsMJhMyPiDTjJn8NvEK6A/view?utm_content=DAG5lV4I120&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h253f90b7f6",
        award: ""

    },
    {
        title: "Dancevilla Enrollment System",
        desc: "A web-based platform designed to automate and streamline the administrative processes of Dancevilla Performing Arts School. The system will address the challenges currently faced by the school in managing enrollments, class scheduling, attendance, and payments",
        tags: [
            { l: "PHP", c: "#ff6b6b", b: "rgba(255,107,107,.18)" },
            { l: "MySQL", c: "#ff9b6b", b: "rgba(255,155,107,.18)" },
            { l: "JavaScript/HTML/CSS", c: "#ffc96b", b: "rgba(255,201,107,.18)" }
        ],
        icon: "bi-broadcast-pin",
        img: "resources\\images\\projects\\dancevilla.png",       // ← replace with your photo path
        link: "https://www.canva.com/design/DAGjHZI-j_o/4_Br05Qz7uoV0zKn-Ebnhg/view?utm_content=DAGjHZI-j_o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd4a41eef8d",
        award: ""

    },
    {
        title: "Plantita-Fi: IoT-Based Smart Environmental Monitoring and Control System for Hydroponics Using NodeMCU ESP8266 and Blynk",
        desc: "IoT-based system for monitoring and controlling environmental conditions in hydroponic farming using NodeMCU ESP8266 and Blynk.",
        tags: [
            { l: "Arduino", c: "#6bff9b", b: "rgba(107,255,155,.18)" },
            { l: "Sensors", c: "#6bffdd", b: "rgba(107,255,221,.18)" },
            { l: "IoT", c: "#ffc96b", b: "rgba(255,201,107,.18)" }
        ],
        icon: "bi-broadcast-pin",
        img: "resources\\images\\projects\\Plantita-fi.png",       // ← replace with your photo path
        link: "#",
        award: ""

    },
    {
        title: "Project ACCESS",
        desc: "Resilient, Integrated Communication Hub for Critical Connectivity and Disaster Response.",
        tags: [
            { l: "Arduino", c: "#ff6b6b", b: "rgba(255,107,107,.18)" },
            { l: "LoRaWAN", c: "#ff9b6b", b: "rgba(255,155,107,.18)" },
            { l: "Disaster Tech", c: "#ffc96b", b: "rgba(255,201,107,.18)" }
        ],
        icon: "bi-broadcast-pin",
        img: "resources/images/projects/ACCESS.png",       // ← replace with your photo path
        link: "#",
        award: "🏆 Champion — ICpEP-NCR Robothon, Dec 2024"
    },
    {
        title: "ALERTO",
        desc: "Advanced LoRaWAN Early Warning, Response & Tracking for Optimized Disaster Preparedness.",
        tags: [
            { l: "LoRaWAN", c: "#6b9fff", b: "rgba(107,159,255,.18)" },
            { l: "Embedded C", c: "#9b6bff", b: "rgba(155,107,255,.18)" },
            { l: "IoT", c: "#6bdfff", b: "rgba(107,223,255,.18)" }
        ],
        icon: "bi-exclamation-triangle-fill",
        img: "resources\\images\\projects\\ALERTO.png",       // ← replace with your photo path
        link: "https://www.canva.com/design/DAHEHLT-lNw/x9H1c8XnNEG7W7av1Z72Mg/view?utm_content=DAHEHLT-lNw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5fc1611d79",
        award: "🥈 1st Runner-Up — UP Diliman SQUEEEZE, Feb 2025"
    },
    
];

const EXPERIENCE = [
    { co: "ACCESS DLSU", dt: "2025 – Present", ro: "President", de: "Lead the premier CpE student org at DLSU, overseeing academic programs, technical events, and welfare initiatives.", dot: "" },
    { co: "Animo Labs Fab Labs · DLSU", dt: "2026 – Present", ro: "Resident Maker", de: "Support hardware prototyping and maker culture, mentoring students and contributing to fab lab research.", dot: "cb" },
    { co: "Lasallian Scholars Society", dt: "2025 – Present", ro: "Asst. VP for Academics", de: "Coordinate academic support programs and scholarship welfare for Lasallian scholars across all colleges.", dot: "cy" },
    { co: "DLSU Engineering College Gov't", dt: "Feb – Aug 2025", ro: "Executive, Activities & Advocacies", de: "Organized engineering-wide events, advocacy campaigns, and student-led activities.", dot: "cp" },
    { co: "ScienceKonek", dt: "2023 – Present", ro: "Creatives Officer / Tech Division", de: "Create science communication content; co-organized Arduino Days 2025 and GigaBytes Quiz Bee.", dot: "cg" },
    { co: "Skywatchers Society of Las Piñas", dt: "2021 – Present", ro: "Representative & Project Head", de: "Project Head for World Space Week 2024; Central Committee Head for Space Quiz 2025.", dot: "ct" }
];

/* ─── EDUCATION ────────────────────────────────────────────────
   logo:     path to school logo image (PNG/SVG recommended)
             e.g. "images/logos/dlsu.png"
             Leave "" to show icon placeholder instead.
   photoBg:  CSS gradient for the banner background
   photoIco: Bootstrap-icon class shown when logo is missing
   accent:   hex colour for the 3px bottom stripe
   full:     true = spans full width (first/featured card)
────────────────────────────────────────────────────────────── */
const EDUCATION = [
    {
        school: "De La Salle University – Manila",
        deg: "BS Computer Engineering, Minor in Data Science",
        logo: "resources\\images\\school-logo\\dlsu-logo.svg",          // ← replace with real path
        photoBg: "linear-gradient(rgba(0, 77, 44, 0.8), rgba(0, 160, 96, 0.8)), url('resources/images/dlsu-background.jpg')",
        photoIco: "bi-building-fill",
        accent: "#005b35",
        full: true,
        badges: [
            { l: "2023 – Present", s: "hl" },
            { l: "Running CGPA 3.563", s: "hl" },
            { l: "Current GPA Standing: Cum Laude", s: "hl" },
            { l: "First Honors Dean's Lister", s: "" },
            { l: "DOST-SEI Scholar", s: "" },
            { l: "St. La Salle Financial Assistance Grant Full Scholar", s: "" }
        ]
    },
    {
        school: "LPNHS – Senior High School",
        deg: "Senior High School — STEM Strand",
        logo: "resources\\images\\school-logo\\lpnhs-shs-logo.jfif",
        photoBg: "linear-gradient(rgba(0, 77, 44, 0.8), rgba(0, 160, 96, 0.8)), url('resources/images/lpnhs-shs-background.jpg')",
        photoIco: "bi-mortarboard-fill",
        accent: "#2060b0",
        full: false,
        badges: [
            { l: "2021 – 2023", s: "hlb" },
            { l: "Rank 1 · Batch 2023", s: "hly" },
            { l: "With Highest Honors", s: "" }
        ]
    },
    {
        school: "LPNHS – Junior High School",
        deg: "Junior High School — STEM Program",
        logo: "resources\\images\\school-logo\\lpnhs-jhs-logo.jpg",
        photoBg: "linear-gradient(rgba(0, 91, 53, 0.8), rgba(0, 160, 96, 0.8)), url('resources/images/lpnhs-jhs-background.jpg')",
        photoIco: "bi-journal-bookmark-fill",
        accent: "#20a060",
        full: false,
        badges: [
            { l: "2017 – 2021", s: "hlg" },
            { l: "Rank 1 · Batch 2021", s: "hly" },
            { l: "With High Honors", s: "" }
        ]
    },
    {
        school: "Daniel Fajardo Elementary School",
        deg: "Elementary",
        logo: "resources\\images\\school-logo\\dfes-logo.jpg",
        photoBg: "linear-gradient(rgba(0, 91, 53, 0.8), rgba(0, 160, 96, 0.8)), url('resources\\images\\dfes-background.jpg')",
        photoIco: "bi-star-fill",
        accent: "#c09010",
        full: false,
        badges: [
            { l: "2011 – 2017", s: "hly" },
            { l: "Salutatorian · Batch 2017", s: "" },
            { l: "With High Honors", s: "" }
        ]
    }
];

const GALLERY = [
    { cat: "competitions", img: "images/gallery/robothon-champ.jpg", label: "Robothon Champion — ICpEP-NCR, Dec 2024", span: "tall", pBg: "#1a0a0a", pIco: "bi-trophy-fill", pCol: "#d82f2f" },
    { cat: "competitions", img: "images/gallery/squeeeze.jpg", label: "1st Runner-Up — SQUEEEZE, UP Diliman, Feb 2025", span: "wide", pBg: "#0a0a1a", pIco: "bi-award-fill", pCol: "#4060e0" },
    { cat: "competitions", img: "images/gallery/robothon2.jpg", label: "Robothon 1st Runner-Up — ICpEP-NCR, Feb 2025", span: "sq", pBg: "#1a1400", pIco: "bi-award-fill", pCol: "#c0a030" },
    { cat: "competitions", img: "images/gallery/nasa-spaceapps.jpg", label: "NASA Space Apps Challenge — National Qualifier 2021", span: "wide", pBg: "#0a0a2a", pIco: "bi-rocket-takeoff-fill", pCol: "#6b9fff" },
    { cat: "competitions", img: "images/gallery/galileo-hackathon.jpg", label: "Galileo Hackathon Philippines 2021", span: "sq", pBg: "#001a0a", pIco: "bi-globe2", pCol: "#6bff9b" },
    { cat: "awards", img: "images/gallery/senate-gold-medal.jpg", label: "Philippine Senate Gold Medal, 2023", span: "wide", pBg: "#1a1400", pIco: "bi-patch-check-fill", pCol: "#ffc96b" },
    { cat: "awards", img: "images/gallery/nspc2023.jpg", label: "1st Place — National Schools Press Conference 2023", span: "tall", pBg: "#0a1a0a", pIco: "bi-newspaper", pCol: "#6bff9b" },
    { cat: "awards", img: "images/gallery/rspc2023.jpg", label: "1st Place — Regional Schools Press Conference 2023", span: "sq", pBg: "#1a000a", pIco: "bi-newspaper", pCol: "#ff6bdd" },
    { cat: "awards", img: "images/gallery/researcher-year.jpg", label: "Researcher of the Year · Most Innovative, 2021", span: "wide", pBg: "#0a1a1a", pIco: "bi-lightbulb-fill", pCol: "#6bdfff" },
    { cat: "volunteerism", img: "images/gallery/robotics-seminar.jpg", label: "Robotics Seminar Speaker — Cavite City Science HS", span: "sq", pBg: "#0a0a1a", pIco: "bi-person-video2", pCol: "#9b6bff" },
    { cat: "volunteerism", img: "images/gallery/press-judge.jpg", label: "Press Conference Judge — Pasig City College, 2025", span: "wide", pBg: "#1a0a00", pIco: "bi-people-fill", pCol: "#ff9b6b" },
    { cat: "volunteerism", img: "images/gallery/space-quiz.jpg", label: "Space Quiz 2025 — National Astronomy Week", span: "tall", pBg: "#00001a", pIco: "bi-stars", pCol: "#6bdfff" },
    { cat: "volunteerism", img: "images/gallery/world-space-week.jpg", label: "World Space Week 2024 Project Head", span: "sq", pBg: "#0a001a", pIco: "bi-globe", pCol: "#9b6bff" },
    { cat: "orgs", img: "images/gallery/access-dlsu.jpg", label: "ACCESS DLSU — President, 2025", span: "wide", pBg: "#001a0a", pIco: "bi-people-fill", pCol: "#6bff9b" },
    { cat: "orgs", img: "images/gallery/sciencekonek.jpg", label: "ScienceKonek — Arduino Days 2025", span: "sq", pBg: "#1a0a00", pIco: "bi-cpu-fill", pCol: "#ffc96b" },
    { cat: "orgs", img: "images/gallery/animo-labs.jpg", label: "Animo Labs Fab Labs — Resident Maker", span: "tall", pBg: "#0a1a14", pIco: "bi-tools", pCol: "#6bffdd" }
];

const SKILLS = [
    { l: "Arduino & Embedded Systems", p: 90, b: "var(--red)" },
    { l: "HTML / CSS · Front-end Web", p: 82, b: "#4060e0" },
    { l: "MATLAB", p: 75, b: "#8040c0" },
    { l: "UI/UX Design", p: 78, b: "#20a080" },
    { l: "Technical Research Writing", p: 85, b: "#c09010" },
    { l: "Science Communication", p: 80, b: "#0090c0" }
];

const STAGS = [
    { l: "Arduino", c: "#d82f2f", bg: "#fce8eb" },
    { l: "Electronics", c: "#d82f2f", bg: "#fce8eb" },
    { l: "HTML / CSS", c: "#2060c0", bg: "#e0ecff" },
    { l: "MATLAB", c: "#2060c0", bg: "#e0ecff" },
    { l: "UI/UX Design", c: "#1a8040", bg: "#e0f5e8" },
    { l: "Technical Writing", c: "#1a8040", bg: "#e0f5e8" },
    { l: "Sci Journalism", c: "#8a6200", bg: "#fff3cc" },
    { l: "Research", c: "#8a6200", bg: "#fff3cc" },
    { l: "Public Speaking", c: "#0a7060", bg: "#d0f5ee" },
    { l: "Astronomy", c: "#0a7060", bg: "#d0f5ee" }
];

/* ═══════════════════════════════════════════════════════════════
   PROJECTS CAROUSEL  — Bootstrap carousel, liquid glass cards
═══════════════════════════════════════════════════════════════ */
const ACCS = [
    { line: "linear-gradient(90deg,#d82f2f,#ff8c42)", glow: "rgba(216,47,47,.35)" },
    { line: "linear-gradient(90deg,#4060e0,#9b6bff)", glow: "rgba(64,96,224,.35)" },
    { line: "linear-gradient(90deg,#20a060,#6bffdd)", glow: "rgba(32,160,96,.35)" },
    { line: "linear-gradient(90deg,#c09010,#ffc96b)", glow: "rgba(192,144,16,.35)" },
    { line: "linear-gradient(90deg,#9b3fcc,#ff6bdd)", glow: "rgba(155,63,204,.35)" },
    { line: "linear-gradient(90deg,#0090c0,#6bdfff)", glow: "rgba(0,144,192,.35)" }
];

const PPS = () => window.innerWidth < 576 ? 1 : window.innerWidth < 992 ? 2 : 3;

function cardHTML(p, i) {
    const a = ACCS[i % ACCS.length];
    const tags = p.tags.map(t =>
        `<span class="proj-tag" style="color:${t.c};background:${t.b};border-color:${t.c}30">${t.l}</span>`
    ).join('');

    const thumb = p.img
        ? `<div class="proj-thumb">
         <img src="${p.img}" alt="${p.title} project screenshot" class="proj-thumb-img">
         <div class="proj-thumb-overlay" style="background:${p.grad}"></div>
       </div>`
        : `<div class="proj-thumb" style="background:${p.grad}">
         <i class="bi ${p.icon}" aria-hidden="true"
            style="color:rgba(255,255,255,.85);filter:drop-shadow(0 2px 8px ${a.glow})"></i>
       </div>`;

    return `
    <div class="proj-card">
      <div class="proj-card-accent" style="background:${a.line}"></div>
      ${thumb}
      <div class="proj-card-body">
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc2">${p.desc}</div>
        <div class="proj-tags">${tags}</div>
        <div class="proj-foot">
          <span class="proj-award">${p.award}</span>
          <a href="${p.link}" class="proj-arrow"
             style="background:${a.glow.replace('.35', '.9')}"
             aria-label="View ${p.title} project">
            <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>`;
}

function buildCarousel() {
    const inner = document.getElementById('projInner');
    const dots = document.getElementById('projDots');
    if (!inner || !dots) return;
    inner.innerHTML = '';
    dots.innerHTML = '';

    const n = PPS();
    const pages = Math.ceil(PROJECTS.length / n);

    for (let s = 0; s < pages; s++) {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (s === 0 ? ' active' : '');

        const row = document.createElement('div');
        row.className = 'proj-slide';

        const chunk = PROJECTS.slice(s * n, (s + 1) * n);
        chunk.forEach((p, li) => {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'flex:1;min-width:0';
            wrap.innerHTML = cardHTML(p, s * n + li);
            row.appendChild(wrap);
        });
        // pad last slide
        for (let pad = chunk.length; pad < n; pad++) {
            const empty = document.createElement('div');
            empty.style.cssText = 'flex:1;min-width:0';
            row.appendChild(empty);
        }

        item.appendChild(row);
        inner.appendChild(item);

        const dot = document.createElement('button');
        dot.className = 'proj-dot' + (s === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${s + 1}`);
        dot.onclick = () => bootstrap.Carousel.getOrCreateInstance(
            document.getElementById('projCarousel')
        ).to(s);
        dots.appendChild(dot);
    }
}

buildCarousel();

let _rt;
window.addEventListener('resize', () => { clearTimeout(_rt); _rt = setTimeout(buildCarousel, 160); });

document.getElementById('projCarousel')?.addEventListener('slid.bs.carousel', e => {
    document.querySelectorAll('.proj-dot').forEach((d, i) => d.classList.toggle('active', i === e.to));
});
document.getElementById('projPrev')?.addEventListener('click', () =>
    bootstrap.Carousel.getOrCreateInstance(document.getElementById('projCarousel')).prev());
document.getElementById('projNext')?.addEventListener('click', () =>
    bootstrap.Carousel.getOrCreateInstance(document.getElementById('projCarousel')).next());

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE TIMELINE
═══════════════════════════════════════════════════════════════ */
const tlG = document.getElementById('tlGrid');
if (tlG) {
    EXPERIENCE.forEach((e, i) => {
        const isL = i % 2 === 0;
        const co = `<div class="tl-co">${e.co}</div><div class="tl-dt">${e.dt}</div>`;
        const ro = `<div class="tl-ro">${e.ro}</div><div class="tl-de">${e.de}</div>`;
        const row = document.createElement('div');
        row.className = 'tl-row fu';
        row.style.transitionDelay = `${i * .07}s`;
        row.innerHTML = `
      <div class="tl-l">${isL ? co : ro}</div>
      <div class="tl-c"><div class="tl-dot ${e.dot}" role="presentation"></div></div>
      <div class="tl-r">${isL ? ro : co}</div>`;
        tlG.appendChild(row);
    });
}

/* ═══════════════════════════════════════════════════════════════
   EDUCATION CARDS  — liquid glass + school logos
═══════════════════════════════════════════════════════════════ */
const eduG = document.getElementById('eduGrid');
if (eduG) {
    EDUCATION.forEach((e, i) => {
        const col = document.createElement('div');
        col.className = (e.full ? 'col-12' : 'col-sm-6 col-lg-4') + ' fu';
        col.style.transitionDelay = `${i * .08}s`;

        // Logo element — img if path given, else icon placeholder
        const logoEl = e.logo
            ? `<img src="${e.logo}" alt="${e.school} logo" class="edu-banner-logo">`
            : `<div class="edu-banner-logo-placeholder" style="background:${e.photoBg}">
           <i class="bi ${e.photoIco}" aria-hidden="true" style="color:rgba(255,255,255,.8);font-size:1.6rem"></i>
         </div>`;

        const badges = e.badges.map(b => `<span class="edu-badge ${b.s}">${b.l}</span>`).join('');

        col.innerHTML = `
      <div class="edu-card">
        <div class="edu-banner" style="background:${e.photoBg}">
          ${logoEl}
          <div class="edu-banner-name" style="position:relative;z-index:1">${e.school}</div>
        </div>
        <div class="edu-accent" style="background:${e.accent}"></div>
        <div class="edu-body">
          <div class="edu-deg">${e.deg}</div>
          <div class="mt-2">${badges}</div>
        </div>
      </div>`;
        eduG.appendChild(col);
    });
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY + LIGHTBOX
═══════════════════════════════════════════════════════════════ */
const CAT_LABELS = {
    all: "All", competitions: "Competitions",
    awards: "Awards", volunteerism: "Volunteerism", orgs: "Organizations"
};

let activeF = 'all', filtItems = [], lbIdx = 0;

// Build filter pills
const filtersEl = document.getElementById('galFilters');
if (filtersEl) {
    Object.entries(CAT_LABELS).forEach(([c, l]) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const btn = document.createElement('button');
        btn.className = 'nav-link' + (c === 'all' ? ' active' : '');
        btn.textContent = l;
        btn.dataset.c = c;
        btn.onclick = () => {
            activeF = c;
            document.querySelectorAll('#galFilters .nav-link')
                .forEach(b => b.classList.toggle('active', b.dataset.c === c));
            renderGal();
        };
        li.appendChild(btn);
        filtersEl.appendChild(li);
    });
}

const SPAN_COL = { tall: 'col-6 col-md-4 col-lg-3', wide: 'col-12 col-sm-6 col-md-4', sq: 'col-6 col-md-4 col-lg-3' };
const SPAN_ASP = { tall: '3/4', wide: '4/3', sq: '1/1' };

function renderGal() {
    const g = document.getElementById('galGrid');
    if (!g) return;
    g.innerHTML = '';
    filtItems = activeF === 'all' ? GALLERY : GALLERY.filter(x => x.cat === activeF);

    filtItems.forEach((item, idx) => {
        const col = document.createElement('div');
        col.className = (SPAN_COL[item.span] || 'col-6 col-md-4') + ' fu';
        col.style.transitionDelay = `${(idx % 6) * .05}s`;

        const inner = document.createElement('div');
        inner.className = 'gal-item';
        inner.style.cssText = `aspect-ratio:${SPAN_ASP[item.span] || '1/1'}`;
        inner.setAttribute('role', 'button');
        inner.setAttribute('tabindex', '0');
        inner.setAttribute('aria-label', `View photo: ${item.label}`);

        if (item.img) {
            inner.innerHTML = `
        <img src="${item.img}" alt="${item.label}" loading="lazy">
        <div class="gal-overlay" aria-hidden="true">
          <div class="gal-cat-label">${CAT_LABELS[item.cat]}</div>
          <div class="gal-label">${item.label}</div>
        </div>`;
        } else {
            inner.innerHTML = `
        <div class="gal-placeholder" style="background:${item.pBg};width:100%;height:100%">
          <i class="bi ${item.pIco}" aria-hidden="true" style="color:${item.pCol}"></i>
          <span>${item.label}</span>
        </div>
        <div class="gal-overlay" aria-hidden="true">
          <div class="gal-cat-label">${CAT_LABELS[item.cat]}</div>
          <div class="gal-label">${item.label}</div>
        </div>`;
        }

        inner.onclick = () => openLb(idx);
        inner.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(idx); }
        });
        col.appendChild(inner);
        g.appendChild(col);
    });

    observeAll(); // pick up newly created .fu elements
}

renderGal();

// Lightbox
function openLb(idx) {
    lbIdx = idx;
    renderLb();
    document.getElementById('lb').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderLb() {
    const item = filtItems[lbIdx];
    const img = document.getElementById('lbImg');
    const prev = document.getElementById('lbPh');
    if (prev) prev.remove();

    if (item.img) {
        img.src = item.img;
        img.alt = item.label;
        img.style.display = 'block';
    } else {
        img.src = '';
        img.style.display = 'none';
        const ph = document.createElement('div');
        ph.id = 'lbPh';
        ph.style.cssText = `width:100%;aspect-ratio:16/9;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:${item.pBg}`;
        ph.innerHTML = `<i class="bi ${item.pIco}" aria-hidden="true" style="font-size:3.5rem;color:${item.pCol}"></i>
      <span style="font-family:'DM Sans',sans-serif;font-size:.85rem;color:rgba(255,255,255,.5);text-align:center;padding:0 20px">${item.label}</span>`;
        img.insertAdjacentElement('afterend', ph);
    }

    document.getElementById('lbCat').textContent = CAT_LABELS[item.cat] || '';
    document.getElementById('lbTitle').textContent = item.label;
}

function lbGo(dir) {
    const p = document.getElementById('lbPh');
    if (p) p.remove();
    lbIdx = (lbIdx + dir + filtItems.length) % filtItems.length;
    renderLb();
}

function closeLb() {
    document.getElementById('lb').classList.remove('open');
    document.body.style.overflow = '';
    const p = document.getElementById('lbPh');
    if (p) p.remove();
}

function lbBg(e) { if (e.target === document.getElementById('lb')) closeLb(); }

document.addEventListener('keydown', e => {
    if (!document.getElementById('lb').classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') lbGo(-1);
    if (e.key === 'ArrowRight') lbGo(1);
});

/* ═══════════════════════════════════════════════════════════════
   SKILLS  — 6 bars with role=progressbar (a11y #9, #15)
═══════════════════════════════════════════════════════════════ */
const skEl = document.getElementById('skillsEl');
if (skEl) {
    SKILLS.forEach(s => {
        skEl.insertAdjacentHTML('beforeend', `
      <div class="mb-3">
        <div class="skill-lbl">
          <span>${s.l}</span>
          <span>${s.p}%</span>
        </div>
        <div class="progress"
             role="progressbar"
             aria-label="${s.l}"
             aria-valuenow="${s.p}"
             aria-valuemin="0"
             aria-valuemax="100">
          <div class="skill-bar"
               data-w="${s.p}"
style="width:0%;height:8px;display:block;background:${s.b};border-radius:100px;...
          </div>
        </div>
      </div>`);
    });
}

const tgEl = document.getElementById('tagsEl');
if (tgEl) {
    STAGS.forEach(t => {
        const s = document.createElement('span');
        s.className = 'sk-tag';
        s.style.cssText = `color:${t.c};background:${t.bg}`;
        s.textContent = t.l;
        tgEl.appendChild(s);
    });
}

/* ═══════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER  — fade-up + skill bars
═══════════════════════════════════════════════════════════════ */
document.body.classList.add('js-ready');

const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

function observeAll() {
    document.querySelectorAll('.fu:not([data-o])').forEach(el => {
        el.dataset.o = '1';
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('in');
        } else {
            io.observe(el);
        }
    });
}
observeAll();

setTimeout(() => {
  const bObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w + '%';
        bObs.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.skill-bar').forEach(b => {
    if (b.getBoundingClientRect().top < window.innerHeight) {
      b.style.width = b.dataset.w + '%';
    } else {
      bObs.observe(b);
    }
  });
}, 0);

/* ═══════════════════════════════════════════════════════════════
   CV MODAL
═══════════════════════════════════════════════════════════════ */
function openCv() { document.getElementById('cvOv').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCv() { document.getElementById('cvOv').classList.remove('open'); document.body.style.overflow = ''; }
function cvBg(e) { if (e.target === document.getElementById('cvOv')) closeCv(); }
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('cvOv').classList.contains('open')) closeCv();
});

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLL
═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});