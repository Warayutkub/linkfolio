/**
 * Site data — edit here, both pages auto-sync.
 *
 * NOTE on paths: Always write paths relative to the project root
 * (e.g., "assets/profile.webp"). When this file is loaded from a
 * subfolder page like /portfolio/, the resolver at the bottom auto-prefixes
 * "../" so links keep working from any depth.
 */

/* ---------- Projects ---------- */
/* Drop image files into assets/projects/ and set `image` to its path.
 * Leave `image` or `url` empty ("") to disable that part.
 *
 * Fields:
 *   title       — required
 *   tags        — array of strings (shown as pills)
 *   image       — path to cover image, "" to show title placeholder
 *   description — short blurb, 1–2 sentences
 *   url         — link to live site or case study, "" to disable link
 */
const projects = [
    {
        title: "FlowKlass",
        tags: ["SaaS", "Education", "Next.js"],
        image: "assets/projects/flowklass.webp",
        description: "A turnkey SaaS for tutors and independent schools — sign up and get your own branded subdomain with teacher, student, and admin portals wired together for end-to-end school management. Built on Next.js, deployed to VPS with a SQL backend.",
        url: "https://flowklass.com/"
    },
    {
        title: "Airproof",
        tags: ["CLI", "Security", "Open Source"],
        image: "assets/projects/airproof.webp",
        description: "An open-source CLI that audits JS/TS codebases for common security bugs before they ship — zero config, plain-English (and Thai) output, 80% OWASP Top 10 coverage across 19 rules. Built for the vibe-coding era where AI-generated routes quietly forget the auth check. Run `npx airproof .` — that's it.",
        url: "https://www.npmjs.com/package/airproof"
    },
    {
        title: "Matchanu",
        tags: ["SaaS", "AI Agents", "Next.js", "Go"],
        image: "assets/projects/matchanu.webp",
        description: "An AI-native project memory layer — connect your AI coding agent via MCP and it reads and writes project context, tasks, decisions, and architecture diagrams directly, so it never loses track of what the project is and where it's headed. Next.js frontend, Go backend, MCP server for AI integrations.",
        url: "https://matchanu.app/"
    },
    {
        title: "Mystic Pet Shop",
        tags: ["Personalization", "Quiz", "Fun","javascript", "html", "css"],
        image: "assets/projects/mystic-pet-shop.webp",
        description: "A fun MBTI-based pet personality quiz that matches you with your ideal pet companion. Answer 16 questions based on your personality type and discover which cat or dog (and accessories) are meant for you.",
        url: "https://littleshrimpp.github.io/mystic-pet-shop/"
    },
    {
        title: "SO KMUTNB Prachinburi",
        tags: ["Internal Platform", "PDPA", "Next.js"],
        image: "assets/projects/so-web.webp",
        description: "Official site for the Student Organization at KMUTNB Prachinburi — a one-stop hub for activity announcements, internal management, SOP manuals, club directory, and the org chart. Built solo with an AI co-pilot on Next.js + Supabase (deployed to Vercel), with audit logging for PDPA compliance and a security review across the stack.",
        url: "https://sokmutnbprachin.vercel.app/"
    }
];

/* ---------- Personal info ---------- */
const personal = {
    name: "Warayut Burattanang",
    initials: "W",
    tagline: "Product thinker · Designer · Builder",
    avatar: "assets/profile.webp",
    email: "warayut.bunrattanang.fluk@gmail.com",
    resume: ""
};

/* ---------- Donate (button opens a QR dialog on linkfolio) ---------- */
/* Set `enabled: false` to hide. Drop your QR image into assets/ and update qrImage. */
const donate = {
    enabled: true,
    label: "Buy me a matcha",
    title: "Thanks for matcha 🍵",
    note: "Scan with your banking app",
    handle: "PromptPay · 0631673569",
    qrImage: "assets/donate-qr.webp"
};

/* ---------- Social links (rendered as buttons on linkfolio + contact list on portfolio) ---------- */
/* `label` must match an icon key in linkfolio.js ICONS map: github, linkedin, instagram, tiktok */
const socials = [
    { label: "GitHub", url: "https://github.com/Warayutkub" },
    { label: "Instagram", url: "https://www.instagram.com/wryt_fl" },
    { label: "TikTok", url: "https://www.tiktok.com/@wryt_uk" }
];

/* ---------- Portfolio page content ---------- */
/* All text on the portfolio page lives here. Edit copy without touching HTML. */
const portfolio = {
    hero: {
        badge: "Year 3 · KMUTNB Prachinburi",
        titlePre: "I think in",
        titleEm: "products",
        titlePost: ", ship with code.",
        bio: "I work between product, design, and code — figuring out what to build, then shipping it with an AI co-pilot riding shotgun. Currently looking for internships where I can do that for real.",
        ctaText: "View Selected Work",
        ctaTarget: "#work",
        stats: [
            { value: projects.length, label: "Products shipped" },
            { code: "npx airproof", label: "Currently shipping" },
            { value: "1", label: "Hackathon → production" }
        ]
    },
    about: {
        eyebrow: "About",
        title: "A short introduction",
        paragraphs: [
            "I'm a third-year student at KMUTNB Prachinburi, working at the intersection of product, design, and code — starting from understanding the problem and ending with shipping something people actually use.",
            "My strength sits in the thinking phase — interviewing users, unpacking problems, sketching solutions — rather than spending hours head-down in code. When it's time to ship, I work alongside an AI co-pilot: faster output, sharper learning along the way.",
            "Outside of dev, I serve as Secretary for the Student Organization and ran an online tutoring program for incoming first-years — passed down by previous tutors to handle solo. Both roles widened how I read different users and sharpened the communication I bring back to product work."
        ]
    },
    work: {
        eyebrow: "Selected Work",
        title: "Things I've made"
    },
    skills: {
        eyebrow: "Toolkit",
        title: "How I work",
        groups: [
            {
                title: "Product & design",
                items: ["Product thinking", "Service design", "Analysis", "Decision-making", "AI prompting"]
            },
            {
                title: "Build",
                items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "SQLite", "Supabase", "Linux / VPS", "CLI", "AST", "GitHub Actions", "Docker"]
            },
            {
                title: "Learning",
                items: ["Python", "PHP", "Go", "Spring Boot", "System design", "Security / OWASP"]
            }
        ]
    },
    activities: {
        eyebrow: "Beyond work",
        title: "Activities I've joined",
        items: [
            {
                year: "2026",
                title: "Secretary",
                org: "Student Organization, KMUTNB Prachinburi",
                description: "Partnered with the President to drive executive decisions, plan operations, manage the team, and build the campus-wide student organization website.",
                link: ""
            },
            {
                year: "2026",
                title: "Peer Tutor — Freshman Foundations",
                org: "Faculty Mentorship, KMUTNB Prachinburi",
                description: "Recommended by previous tutors to take over the freshman foundations program (2026 cohort) — delivered a 3-day online intensive solo to bridge the gap from high school to university-level coursework.",
                link: ""
            },
            {
                year: "2025",
                title: "Committee Member",
                org: "Student Organization, KMUTNB Prachinburi",
                description: "Managed the org's main communication channel — fielded daily questions from students and parents. Joined planning, executed events, and supported team operations.",
                link: ""
            },
            {
                year: "2024",
                title: "Hackathon — Honorable Mention",
                org: "Sakura Tofu Co.",
                description: "With a 5-person team, interviewed Sakura Tofu Co. and uncovered an unused waste stream — leftover okara (soybean pulp from tofu production) being discarded. Designed a circular-economy product that turns the waste into pet pee pads. Earned Honorable Mention; the company picked up the concept for production.",
                link: ""
            }
        ]
    },
    contact: {
        eyebrow: "Contact",
        title: "Let's make something thoughtful.",
        backLabel: "Back to Links"
    }
};



/* ---------- Path resolver (auto-prefix for nested pages) ---------- */
(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const isFile = /\.[a-z0-9]+$/i.test(segments[segments.length - 1] || "");
    const folderDepth = isFile ? segments.length - 1 : segments.length;

    const knownRoots = ["portfolio"];
    const rootIndex = segments.findIndex((s) => knownRoots.includes(s));
    if (rootIndex === -1) return;

    const depthBelowRoot = folderDepth - rootIndex;
    if (depthBelowRoot <= 0) return;

    const prefix = "../".repeat(depthBelowRoot);

    const fix = (p) => {
        if (!p) return p;
        if (/^(https?:|data:|\/|#|mailto:|tel:)/i.test(p)) return p;
        return prefix + p;
    };

    if (typeof personal !== "undefined") {
        if (personal.avatar) personal.avatar = fix(personal.avatar);
        if (personal.resume) personal.resume = fix(personal.resume);
    }
    if (typeof donate !== "undefined" && donate.qrImage) {
        donate.qrImage = fix(donate.qrImage);
    }
    if (typeof projects !== "undefined" && Array.isArray(projects)) {
        projects.forEach((p) => {
            if (p.image) p.image = fix(p.image);
        });
    }
})();
