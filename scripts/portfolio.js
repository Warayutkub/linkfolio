(() => {
    const escapeHtml = (s) =>
        String(s ?? "").replace(/[&<>"']/g, (c) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[c]));

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el && value != null) el.textContent = value;
    };

    const setHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

    /* ----- Hero ----- */
    const renderHero = () => {
        if (typeof portfolio === "undefined" || !portfolio.hero) return;
        const h = portfolio.hero;

        setText("heroBadge", h.badge);
        setHTML(
            "heroTitle",
            `${escapeHtml(h.titlePre)} <em>${escapeHtml(h.titleEm)}</em>${escapeHtml(h.titlePost)}`
        );
        setText("heroBio", h.bio);

        const cta = document.getElementById("heroCta");
        if (cta) {
            const label = cta.querySelector(".hero__cta-label");
            if (label) label.textContent = h.ctaText;
            if (h.ctaTarget) cta.setAttribute("href", h.ctaTarget);
        }

        const statsEl = document.getElementById("heroStats");
        if (statsEl && Array.isArray(h.stats)) {
            statsEl.innerHTML = h.stats
                .map((s) => {
                    if (s.code) {
                        return `
                            <div class="hero__stat hero__stat--code">
                                <code class="hero__stat-code">${escapeHtml(s.code)}</code>
                                <span class="hero__stat-label">${escapeHtml(s.label)}</span>
                            </div>
                        `;
                    }
                    return `
                        <div class="hero__stat">
                            <span class="hero__stat-value">${escapeHtml(s.value)}</span>
                            <span class="hero__stat-label">${escapeHtml(s.label)}</span>
                        </div>
                    `;
                })
                .join("");
        }
    };

    /* ----- About ----- */
    const renderAbout = () => {
        if (typeof portfolio === "undefined" || !portfolio.about) return;
        const a = portfolio.about;

        setText("aboutEyebrow", a.eyebrow);
        setText("aboutTitle", a.title);

        const body = document.getElementById("aboutBody");
        if (body && Array.isArray(a.paragraphs)) {
            body.innerHTML = a.paragraphs
                .map((p) => `<p>${escapeHtml(p)}</p>`)
                .join("");
        }
    };

    /* ----- Work ----- */
    const renderWorkHeader = () => {
        if (typeof portfolio !== "undefined" && portfolio.work) {
            setText("workEyebrow", portfolio.work.eyebrow);
            setText("workTitle", portfolio.work.title);
        }
    };

    const renderProjects = () => {
        const grid = document.getElementById("workGrid");
        if (!grid || typeof projects === "undefined" || !Array.isArray(projects)) return;

        grid.innerHTML = projects
            .map((p) => {
                const hasUrl = p.url && p.url !== "" && p.url !== "#";
                const href = hasUrl ? escapeHtml(p.url) : "#";
                const externalAttrs = hasUrl ? 'target="_blank" rel="noopener"' : "";

                const cover = p.image
                    ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy" />`
                    : `<span>${escapeHtml(p.title)}</span>`;

                const tags = (p.tags || [])
                    .map((t) => `<span class="project__tag">${escapeHtml(t)}</span>`)
                    .join("");

                return `
                    <a class="project" href="${href}" ${externalAttrs}>
                        <div class="project__cover">
                            <div class="project__cover-inner">${cover}</div>
                        </div>
                        <h3 class="project__title">${escapeHtml(p.title)}</h3>
                        <div class="project__meta">${tags}</div>
                        <p class="project__desc">${escapeHtml(p.description)}</p>
                    </a>
                `;
            })
            .join("");
    };

    /* ----- Skills ----- */
    const renderSkills = () => {
        if (typeof portfolio === "undefined" || !portfolio.skills) return;
        const s = portfolio.skills;

        setText("skillsEyebrow", s.eyebrow);
        setText("skillsTitle", s.title);

        const grid = document.getElementById("skillsGrid");
        if (grid && Array.isArray(s.groups)) {
            grid.innerHTML = s.groups
                .map(
                    (g, i) => `
                        <div class="skills__group" data-tint="${i % 4}">
                            <h3>${escapeHtml(g.title)}</h3>
                            <ul class="skills__list">
                                ${(g.items || [])
                                    .map((item) => `<li>${escapeHtml(item)}</li>`)
                                    .join("")}
                            </ul>
                        </div>
                    `
                )
                .join("");
        }
    };

    /* ----- Activities ----- */
    const renderActivities = () => {
        if (typeof portfolio === "undefined" || !portfolio.activities) return;
        const a = portfolio.activities;

        setText("activitiesEyebrow", a.eyebrow);
        setText("activitiesTitle", a.title);

        const list = document.getElementById("activitiesList");
        if (list && Array.isArray(a.items)) {
            list.innerHTML = a.items
                .map((item) => {
                    const hasLink = item.link && item.link !== "" && item.link !== "#";
                    const orgPart = item.org ? ` — <span class="activity__org">${escapeHtml(item.org)}</span>` : "";
                    const descPart = item.description
                        ? `<p class="activity__desc">${escapeHtml(item.description)}</p>`
                        : "";

                    const inner = `
                        <div class="activity__year">${escapeHtml(item.year || "")}</div>
                        <div class="activity__body">
                            <h3 class="activity__title">${escapeHtml(item.title)}${orgPart}</h3>
                            ${descPart}
                        </div>
                    `;

                    return hasLink
                        ? `<li class="activity activity--linked"><a href="${escapeHtml(item.link)}" target="_blank" rel="noopener" class="activity__link">${inner}</a></li>`
                        : `<li class="activity">${inner}</li>`;
                })
                .join("");
        }
    };

    /* ----- Contact ----- */
    const renderContact = () => {
        if (typeof portfolio !== "undefined" && portfolio.contact) {
            setText("contactEyebrow", portfolio.contact.eyebrow);
            setText("contactTitle", portfolio.contact.title);
            const back = document.getElementById("contactBackLabel");
            if (back) back.textContent = portfolio.contact.backLabel || "Back";
        }

        if (typeof personal !== "undefined") {
            const emailEl = document.getElementById("contactEmail");
            if (emailEl && personal.email) {
                emailEl.textContent = personal.email;
                emailEl.setAttribute("href", `mailto:${personal.email}`);
            }

            const footerName = document.getElementById("footerName");
            if (footerName) footerName.textContent = personal.name;

            const navBrand = document.getElementById("navBrand");
            if (navBrand && personal.initials) {
                navBrand.textContent = `${personal.initials}. — Portfolio`;
            }

            const titleEl = document.querySelector("title");
            if (titleEl) titleEl.textContent = `${personal.name} — Portfolio`;
        }

        const socialsEl = document.getElementById("contactSocials");
        if (socialsEl && Array.isArray(socials)) {
            socialsEl.innerHTML = socials
                .map(
                    (s) =>
                        `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a>`
                )
                .join("");
        }
    };

    /* ----- Run all ----- */
    renderHero();
    renderAbout();
    renderWorkHeader();
    renderProjects();
    renderSkills();
    renderActivities();
    renderContact();

    /* ----- Scroll reveal ----- */
    const sections = document.querySelectorAll(".section");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        sections.forEach((s) => observer.observe(s));
    } else {
        sections.forEach((s) => s.classList.add("is-visible"));
    }

    /* ----- Smooth scroll for anchor links ----- */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
            const id = a.getAttribute("href");
            if (id && id.length > 1) {
                const target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

    /* ----- Year ----- */
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
