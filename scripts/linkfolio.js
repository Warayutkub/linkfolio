(() => {
    const escapeHtml = (s) =>
        String(s ?? "").replace(/[&<>"']/g, (c) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[c]));

    const ICONS = {
        portfolio: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>`,
        github: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>`,
        linkedin: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.5-2-1.6-2-1.2 0-1.9.8-1.9 2v5h-3V9h2.9v1.3a3.3 3.3 0 0 1 3-1.6c2 0 3.6 1.2 3.6 4V19z"/></svg>`,
        instagram: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>`,
        tiktok: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.5a5.6 5.6 0 0 1-3.4-1.2 5.5 5.5 0 0 1-2.1-3.5h-3.3v13.4c0 1.5-1.3 2.7-2.8 2.7s-2.8-1.2-2.8-2.7c0-1.5 1.3-2.7 2.8-2.7.3 0 .6 0 .8.1v-3.3a6.1 6.1 0 1 0 5.3 6V8.7a8.8 8.8 0 0 0 5.5 1.9V7.3c-.1 0-.1 0 0-.8z"/></svg>`,
        email: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
        download: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 11v6M9 14l3 3 3-3"/></svg>`,
        donate: `<svg class="link-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        chevron: `<svg class="link-btn__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`,
        copy: `<svg class="link-btn__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`
    };

    const renderHeader = () => {
        if (typeof personal === "undefined") return;

        const avatar = document.getElementById("avatar");
        if (avatar && personal.avatar) {
            avatar.innerHTML = `<img src="${escapeHtml(personal.avatar)}" alt="${escapeHtml(personal.name)}" />`;
        }

        const nameEl = document.getElementById("name");
        if (nameEl) nameEl.textContent = personal.name;

        const taglineEl = document.getElementById("tagline");
        if (taglineEl) taglineEl.textContent = personal.tagline;

        const titleEl = document.querySelector("title");
        if (titleEl) titleEl.textContent = `${personal.name} — Links`;

        const footerName = document.getElementById("footerName");
        if (footerName) footerName.textContent = personal.name;
    };

    const renderLinks = () => {
        const container = document.getElementById("linkList");
        if (!container) return;

        const buttons = [];

        buttons.push(`
            <a class="link-btn link-btn--primary" href="portfolio/">
                ${ICONS.portfolio}
                <span class="link-btn__label">View Portfolio</span>
                ${ICONS.chevron}
            </a>
        `);

        if (Array.isArray(socials)) {
            socials.forEach((s) => {
                const key = s.label.toLowerCase();
                const icon = ICONS[key] || "";
                buttons.push(`
                    <a class="link-btn" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">
                        ${icon}
                        <span class="link-btn__label">${escapeHtml(s.label)}</span>
                        ${ICONS.chevron}
                    </a>
                `);
            });
        }

        if (typeof donate !== "undefined" && donate.enabled) {
            buttons.push(`
                <button class="link-btn" type="button" data-action="open-donate">
                    ${ICONS.donate}
                    <span class="link-btn__label">${escapeHtml(donate.label)}</span>
                    ${ICONS.chevron}
                </button>
            `);
        }

        if (personal?.email) {
            buttons.push(`
                <button class="link-btn link-btn--email" type="button" data-copy="${escapeHtml(personal.email)}">
                    ${ICONS.email}
                    <span class="link-btn__label">${escapeHtml(personal.email)}</span>
                    ${ICONS.copy}
                </button>
            `);
        }

        if (personal?.resume) {
            const downloadName = `${personal.name.replace(/\s+/g, "-")}-Resume.pdf`;
            buttons.push(`
                <a class="link-btn" href="${escapeHtml(personal.resume)}" download="${escapeHtml(downloadName)}" target="_blank" rel="noopener">
                    ${ICONS.download}
                    <span class="link-btn__label">Download Resume (PDF)</span>
                    ${ICONS.chevron}
                </a>
            `);
        }

        container.innerHTML = buttons.join("");
    };

    const renderDonate = () => {
        const body = document.getElementById("donateBody");
        if (!body || typeof donate === "undefined" || !donate.enabled) return;

        const handleHTML = donate.handle
            ? `<p class="donate__handle">${escapeHtml(donate.handle)}</p>`
            : "";
        const noteHTML = donate.note
            ? `<p class="donate__note">${escapeHtml(donate.note)}</p>`
            : "";
        const qrHTML = donate.qrImage
            ? `<img src="${escapeHtml(donate.qrImage)}" alt="Donation QR code" />`
            : `<span class="donate__qr-placeholder">QR image not set</span>`;

        body.innerHTML = `
            <h2 class="donate__title">${escapeHtml(donate.title || "Support")}</h2>
            <div class="donate__qr">${qrHTML}</div>
            ${noteHTML}
            ${handleHTML}
        `;
    };

    renderHeader();
    renderLinks();
    renderDonate();

    const donateDialog = document.getElementById("donateDialog");
    if (donateDialog) {
        document.querySelectorAll('[data-action="open-donate"]').forEach((el) => {
            el.addEventListener("click", () => {
                if (typeof donateDialog.showModal === "function") {
                    donateDialog.showModal();
                } else {
                    donateDialog.setAttribute("open", "");
                }
            });
        });

        document.querySelectorAll('[data-action="close-donate"]').forEach((el) => {
            el.addEventListener("click", () => donateDialog.close());
        });

        donateDialog.addEventListener("click", (e) => {
            if (e.target === donateDialog) donateDialog.close();
        });
    }

    const toast = document.getElementById("toast");
    const showToast = (message) => {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("is-visible");
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 1800);
    };

    document.querySelectorAll("[data-copy]").forEach((el) => {
        el.addEventListener("click", async () => {
            const value = el.getAttribute("data-copy");
            if (!value) return;
            try {
                await navigator.clipboard.writeText(value);
                showToast("Copied to clipboard");
            } catch {
                showToast(value);
            }
        });
    });

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
