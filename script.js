const ranks = [
    {
        name: "Commissioner",
        description: "Overall leader of LMPF. Responsible for all operations, decisions, and high-level command across the entire faction.",
        department: "HICOM",
        accent: "#8e59d1",
        glow: "rgba(142, 89, 209, 0.34)",
        icon: "crownShield"
    },
    {
        name: "Deputy Commissioner",
        description: "Second-in-command. Assists the Commissioner and oversees major operations and internal management.",
        department: "HICOM",
        accent: "#ef4e43",
        glow: "rgba(239, 78, 67, 0.3)",
        icon: "doubleStarShield"
    },
    {
        name: "Chief of Police",
        description: "Leads all enforcement divisions and ensures discipline, structure, and operational effectiveness.",
        department: "HICOM",
        accent: "#4457f0",
        glow: "rgba(68, 87, 240, 0.3)",
        icon: "badgeStar"
    },
    {
        name: "District Commander",
        description: "Commands specific districts and coordinates large-scale operations within their assigned area.",
        department: "HR",
        accent: "#42d4b5",
        glow: "rgba(66, 212, 181, 0.28)",
        icon: "shieldStripes"
    },
    {
        name: "District Manager",
        description: "Manages district performance, logistics, and personnel efficiency under the District Commander.",
        department: "HR",
        accent: "#62df5f",
        glow: "rgba(98, 223, 95, 0.28)",
        icon: "clipboardShield"
    },
    {
        name: "District Supervisor",
        description: "Supervises officers and ensures rules, duties, and expectations are followed within the district.",
        department: "HR",
        accent: "#5f98ea",
        glow: "rgba(95, 152, 234, 0.28)",
        icon: "eyeShield"
    },
    {
        name: "Major",
        description: "Senior command role responsible for tactical planning and assisting high command in operations.",
        department: "HR",
        accent: "#a8d64f",
        glow: "rgba(168, 214, 79, 0.3)",
        icon: "eagleStar"
    },
    {
        name: "Captain",
        description: "Leads units and oversees missions, ensuring coordination and execution of orders.",
        department: "MR",
        accent: "#55c9e7",
        glow: "rgba(85, 201, 231, 0.3)",
        icon: "tripleBars"
    },
    {
        name: "Lieutenant",
        description: "Assists Captains and manages smaller teams, ensuring orders are carried out properly.",
        department: "MR",
        accent: "#3c3fef",
        glow: "rgba(60, 63, 239, 0.3)",
        icon: "doubleBars"
    },
    {
        name: "Sergeant",
        description: "Frontline leader responsible for guiding officers and maintaining discipline during operations.",
        department: "MR",
        accent: "#993228",
        glow: "rgba(153, 50, 40, 0.28)",
        icon: "chevrons"
    },
    {
        name: "Deputy Sergeant",
        description: "Assists the Sergeant and helps guide lower ranks while preparing for leadership roles. Look for the Applications in leadership apps.",
        department: "MR",
        accent: "#b56ad1",
        glow: "rgba(181, 106, 209, 0.3)",
        icon: "chevronStar"
    },
    {
        name: "Corporal",
        description: "Experienced officer with minor leadership responsibilities and support duties in operations.",
        department: "LR",
        accent: "#6aa4f2",
        glow: "rgba(106, 164, 242, 0.3)",
        icon: "singleBar"
    },
    {
        name: "Senior Police Officer",
        description: "Highly experienced officer trusted with advanced duties and supporting leadership roles.",
        department: "LR",
        accent: "#252cb5",
        glow: "rgba(37, 44, 181, 0.3)",
        icon: "smallStarShield"
    },
    {
        name: "Police Officer",
        description: "Standard rank responsible for enforcing rules, maintaining order, and participating in operations.",
        department: "LR",
        accent: "#5b48ef",
        glow: "rgba(91, 72, 239, 0.3)",
        icon: "shield"
    },
    {
        name: "Cadet Officer",
        description: "Entry-level rank. Under training to learn rules, structure, and responsibilities within LMPF.",
        department: "LR",
        accent: "#9ff5ef",
        glow: "rgba(159, 245, 239, 0.28)",
        icon: "shieldOutline"
    }
];

const iconLibrary = {
    crownShield: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 16l8 8 6-10 6 10 8-8 4 16H14l4-16z" />
            <path d="M20 32h24v9c0 7-5 12-12 15-7-3-12-8-12-15v-9z" />
        </svg>`,
    doubleStarShield: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 10l2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2-3.8-3.7 5.2-.8L32 10z" />
            <path d="M46 14l1.5 3 3.3.5-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.5 1.5-3z" />
            <path d="M20 28h24v10c0 7-5 12-12 16-7-4-12-9-12-16V28z" />
        </svg>`,
    badgeStar: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 9l16 6v12c0 13-7 22-16 28-9-6-16-15-16-28V15l16-6z" />
            <path d="M32 20l3.2 6.4 7.1 1-5.1 5 1.2 7.1-6.4-3.4-6.4 3.4 1.2-7.1-5.1-5 7.1-1L32 20z" />
        </svg>`,
    shieldStripes: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 10l16 6v13c0 12-6.8 21.2-16 27-9.2-5.8-16-15-16-27V16l16-6z" />
            <path d="M24 28h16" />
            <path d="M22 36h20" />
            <path d="M20 44h24" />
        </svg>`,
    clipboardShield: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="14" y="14" width="22" height="30" rx="4" />
            <path d="M21 14.5h8a3 3 0 0 0 3-3h-14a3 3 0 0 0 3 3z" />
            <path d="M42 24l8 3v7c0 8-4.5 14-8 16-3.5-2-8-8-8-16v-7l8-3z" />
        </svg>`,
    eyeShield: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M10 32s7-10 22-10 22 10 22 10-7 10-22 10S10 32 10 32z" />
            <circle cx="32" cy="32" r="4" />
            <path d="M46 14l8 3v7c0 10-5 18-12 22" />
        </svg>`,
    eagleStar: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 34l10-6 10 6 10-6 10 6" />
            <path d="M20 40l12 12 12-12" />
            <path d="M32 12l2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2-3.8-3.7 5.2-.8L32 12z" />
        </svg>`,
    tripleBars: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" aria-hidden="true">
            <path d="M16 22h32" />
            <path d="M16 32h32" />
            <path d="M16 42h32" />
        </svg>`,
    doubleBars: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" aria-hidden="true">
            <path d="M16 26h32" />
            <path d="M16 38h32" />
        </svg>`,
    chevrons: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 20l14 14 14-14" />
            <path d="M18 34l14 14 14-14" />
        </svg>`,
    chevronStar: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 30l14 14 14-14" />
            <path d="M32 12l2 4.2 4.7.7-3.4 3.3.8 4.7-4.1-2.1-4.1 2.1.8-4.7-3.4-3.3 4.7-.7 2-4.2z" />
        </svg>`,
    singleBar: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" aria-hidden="true">
            <path d="M16 32h32" />
        </svg>`,
    smallStarShield: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 12l14 5v12c0 11-6 19-14 24-8-5-14-13-14-24V17l14-5z" />
            <path d="M32 23l1.6 3.3 3.7.5-2.7 2.6.6 3.8-3.2-1.7-3.2 1.7.6-3.8-2.7-2.6 3.7-.5L32 23z" />
        </svg>`,
    shield: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 10l16 6v12c0 13-7 22-16 28-9-6-16-15-16-28V16l16-6z" />
        </svg>`,
    shieldOutline: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 10l16 6v12c0 13-7 22-16 28-9-6-16-15-16-28V16l16-6z" />
            <path d="M22 24h20" />
        </svg>`
};

const ranksGrid = document.querySelector("#ranks-grid");
const openRolesBoard = document.querySelector("#open-roles-board");
const divisionsGrid = document.querySelector("#divisions-grid");
const diplomatFactionsList = document.querySelector("#diplomat-factions-list");
const diplomatApplyButton = document.querySelector("#diplomat-apply-button");
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const particleCanvas = document.querySelector(".particle-field");
const handbookMain = document.querySelector("#handbook-main");
const applyPage = document.querySelector("#apply-page");
const diplomatPage = document.querySelector("#diplomat-page");
const applyRankSelect = document.querySelector("#apply-rank-select");
const applyDivisionSelect = document.querySelector("#apply-division-select");
const applyStatus = document.querySelector("#apply-status");
const applyActions = document.querySelector("#apply-actions");
const applyOpenLink = document.querySelector("#apply-open-link");
const applyCopyLink = document.querySelector("#apply-copy-link");
const applyBackButton = document.querySelector("#apply-back-button");
const diplomatFactionSelect = document.querySelector("#diplomat-faction-select");
const diplomatStatus = document.querySelector("#diplomat-status");
const diplomatConfirmButton = document.querySelector("#diplomat-confirm-button");
const diplomatBackButton = document.querySelector("#diplomat-back-button");
const introOverlay = document.querySelector("#intro-overlay");
const introLogo = document.querySelector("#intro-logo");

const LEADERSHIP_APPLICATIONS_DOWN = true;

const leadershipRoles = [
    { name: "Commissioner", openings: 0, status: "closed" },
    { name: "Deputy Commissioner", openings: 1, status: "open" },
    { name: "Chief of Police", openings: 1, status: "open" },
    { name: "District Commander", openings: 2, status: "open" },
    { name: "District Manager", openings: 5, status: "open" },
    { name: "District Supervisor", openings: 5, status: "open" },
    { name: "Major", openings: 3, status: "open" },
    { name: "Captain", openings: 5, status: "open" },
    { name: "Lieutenant", openings: 5, status: "open" },
    { name: "Sergeant", openings: 7, status: "open" },
    { name: "Deputy Sergeant", openings: 4, status: "open" }
];

const progressionRoles = [
    { name: "Corporal" },
    { name: "Senior Police Officer" },
    { name: "Police Officer" },
    { name: "Cadet Officer" }
];

const supportedFactions = ["NLA", "NES", "ANRO", "NMP", "8NEC/FG"];

const divisions = [
    {
        name: "Patrol Division",
        description: "Handles day-to-day policing, patrols, and general enforcement. First line of response.",
        accent: "#60a8ff",
        glow: "rgba(96, 168, 255, 0.28)",
        icon: "patrol"
    },
    {
        name: "Tactical Response Unit (TRU)",
        description: "Specialized unit for high-risk situations, raids, and organized operations.",
        accent: "#8b6bff",
        glow: "rgba(139, 107, 255, 0.28)",
        icon: "tru"
    },
    {
        name: "Investigations Division",
        description: "Handles cases, reports, evidence, and internal/external investigations.",
        accent: "#59d4c1",
        glow: "rgba(89, 212, 193, 0.28)",
        icon: "investigations"
    },
    {
        name: "Internal Affairs",
        description: "Oversees discipline, corruption checks, and ensures all members follow rules.",
        accent: "#f08484",
        glow: "rgba(240, 132, 132, 0.28)",
        icon: "internalAffairs"
    },
    {
        name: "Traffic & Control Division",
        description: "Manages checkpoints, traffic enforcement, and public order control.",
        accent: "#f1c266",
        glow: "rgba(241, 194, 102, 0.28)",
        icon: "traffic"
    }
];

const divisionIcons = {
    patrol: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 42h32" />
            <path d="M20 42l3-12h18l3 12" />
            <circle cx="24" cy="46" r="3" />
            <circle cx="40" cy="46" r="3" />
            <path d="M26 30l6-8 6 8" />
        </svg>`,
    tru: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 10l18 8-6 26H20l-6-26 18-8z" />
            <path d="M26 28l6 6 10-10" />
        </svg>`,
    investigations: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="28" cy="28" r="11" />
            <path d="M36 36l12 12" />
            <path d="M24 28h8" />
            <path d="M28 24v8" />
        </svg>`,
    internalAffairs: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 10l16 6v12c0 13-7 22-16 28-9-6-16-15-16-28V16l16-6z" />
            <path d="M25 31l5 5 9-10" />
        </svg>`,
    traffic: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M32 12v40" />
            <path d="M24 20h16" />
            <path d="M22 30h20" />
            <path d="M20 40h24" />
            <circle cx="32" cy="20" r="2" fill="currentColor" stroke="none" />
            <circle cx="32" cy="30" r="2" fill="currentColor" stroke="none" />
            <circle cx="32" cy="40" r="2" fill="currentColor" stroke="none" />
        </svg>`
};

const applicationLinks = window.LMPF_APPLICATION_LINKS || {};
const diplomatLinks = window.LMPF_DIPLOMAT_LINKS || {};

function renderRanks() {
    const cards = ranks.map((rank, index) => {
        const card = document.createElement("article");
        card.className = "rank-card reveal";
        card.style.setProperty("--card-accent", rank.accent);
        card.style.setProperty("--card-glow", rank.glow);

        card.innerHTML = `
            <div class="rank-top">
                <div class="insignia" style="color: ${rank.accent};">
                    ${iconLibrary[rank.icon]}
                </div>
                <span class="rank-department">${rank.department}</span>
            </div>
            <div class="rank-content">
                <h3>${rank.name}</h3>
                <p>${rank.description}</p>
            </div>
            <div class="rank-meta">
                <span class="rank-meta-label">${rank.department} Department</span>
                <span class="rank-band"></span>
            </div>
        `;

        return card;
    });

    ranksGrid.replaceChildren(...cards);
}

function renderOpenRoles() {
    if (!openRolesBoard) {
        return;
    }

    const leadershipHeading = document.createElement("h3");
    leadershipHeading.className = "role-group-heading";
    leadershipHeading.textContent = "Leadership Roles";

    const leadershipGroup = document.createElement("div");
    leadershipGroup.className = "role-group";
    leadershipGroup.append(leadershipHeading);

    leadershipRoles.forEach((role) => {
        const row = document.createElement("article");
        row.className = "role-row reveal";
        row.dataset.roleType = role.status === "open" ? "leadership" : "closed";
        row.style.setProperty("--role-glow", role.status === "open" ? "rgba(91, 164, 255, 0.2)" : "rgba(149, 162, 191, 0.12)");

        const slotTooltip = role.status === "open"
            ? `Hover info: ${role.openings} open slot${role.openings === 1 ? "" : "s"}. Each line represents one available leadership slot.`
            : "Hover info: No open slots currently.";

        const lines = role.status === "open"
            ? `<div class="role-slot-meter" title="${slotTooltip}">
                    <span class="slot-dot" aria-hidden="true"></span>
                    <div class="slot-lines" aria-label="${role.openings} open positions">
                        ${Array.from({ length: role.openings }, (_, index) => `<span class="slot-line" style="animation-delay: ${index * 70}ms"></span>`).join("")}
                    </div>
                </div>`
            : `<span>No Open Positions</span>`;

        const action = role.status === "open"
            ? `<button class="apply-button" type="button" data-rank="${role.name}">Apply</button>`
            : `<span class="status-text">No Open Positions</span>`;

        row.innerHTML = `
            <div class="role-title">
                <h4 class="role-name" title="${slotTooltip}">${role.name}</h4>
            </div>
            <div class="role-indicator">${lines}</div>
            <div class="role-action">${action}</div>
        `;

        leadershipGroup.append(row);
    });

    const divider = document.createElement("div");
    divider.className = "role-group-divider";
    divider.setAttribute("aria-hidden", "true");

    const progressionHeading = document.createElement("h3");
    progressionHeading.className = "role-group-heading";
    progressionHeading.textContent = "Progression Ranks";

    const progressionGroup = document.createElement("div");
    progressionGroup.className = "role-group";
    progressionGroup.append(progressionHeading);

    progressionRoles.forEach((role) => {
        const row = document.createElement("article");
        row.className = "role-row reveal";
        row.dataset.roleType = "progression";

        row.innerHTML = `
            <div class="role-title">
                <h4 class="role-name">${role.name}</h4>
            </div>
            <div class="role-indicator">
                <div class="progression-badge" aria-hidden="true">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 42h10l6-10 8 12 6-8h6" />
                        <path d="M46 24h8v8" />
                        <path d="M54 24L40 38" />
                    </svg>
                    <span class="progression-copy">Earned through activity and points. No application required.</span>
                </div>
            </div>
            <div class="role-action">
                <span class="status-text">Progression</span>
            </div>
        `;

        progressionGroup.append(row);
    });

    openRolesBoard.replaceChildren(leadershipGroup, divider, progressionGroup);
}

function renderDiplomatFactions() {
    if (!diplomatFactionsList) {
        return;
    }

    const chips = supportedFactions.map((faction) => {
        const chip = document.createElement("span");
        chip.className = "faction-chip";
        chip.textContent = faction;
        return chip;
    });

    diplomatFactionsList.replaceChildren(...chips);
}

function getLeadershipRole(rankName) {
    return leadershipRoles.find((role) => role.name === rankName) || null;
}

function getApplicationLink(rankName, divisionName) {
    const entry = applicationLinks[rankName];

    if (!entry) {
        return "";
    }

    if (typeof entry === "string") {
        return entry;
    }

    if (entry.divisions && entry.divisions[divisionName]) {
        return entry.divisions[divisionName];
    }

    return entry.default || "";
}

function setApplyStatus(message, statusClass) {
    if (!applyStatus) {
        return;
    }

    applyStatus.textContent = message;
    applyStatus.classList.remove("is-open", "is-closed", "is-missing");

    if (statusClass) {
        applyStatus.classList.add(statusClass);
    }
}

function updateApplicationResult() {
    if (!applyRankSelect || !applyDivisionSelect || !applyActions || !applyOpenLink) {
        return;
    }

    if (LEADERSHIP_APPLICATIONS_DOWN) {
        applyActions.classList.add("hidden");
        setApplyStatus("system down contact our disscord server for applications in the mean time sorry for the error", "is-closed");
        return;
    }

    const selectedRank = applyRankSelect.value;
    const selectedDivision = applyDivisionSelect.value;
    const role = getLeadershipRole(selectedRank);

    if (!role) {
        applyActions.classList.add("hidden");
        setApplyStatus("Select a valid leadership rank to continue.", "is-missing");
        return;
    }

    if (role.status !== "open" || role.openings < 1) {
        applyActions.classList.add("hidden");
        setApplyStatus(`${selectedRank} is currently closed. No open positions right now.`, "is-closed");
        return;
    }

    const link = getApplicationLink(selectedRank, selectedDivision);

    if (!link) {
        applyActions.classList.add("hidden");
        setApplyStatus(
            `${selectedRank} is open (${role.openings} slot${role.openings === 1 ? "" : "s"}), but no link is configured yet for ${selectedDivision}. Update application-links.js.`,
            "is-missing"
        );
        return;
    }

    applyOpenLink.href = link;
    applyOpenLink.dataset.link = link;
    applyActions.classList.remove("hidden");
    setApplyStatus(
        `${selectedRank} is OPEN with ${role.openings} slot${role.openings === 1 ? "" : "s"}. Selected division: ${selectedDivision}.`,
        "is-open"
    );
}

function showApplyPage(prefillRank = "") {
    if (!handbookMain || !applyPage || !applyRankSelect || !applyDivisionSelect) {
        return;
    }

    handbookMain.classList.add("hidden");
    diplomatPage?.classList.add("hidden");
    applyPage.classList.remove("hidden");

    const leadershipOptions = leadershipRoles.map((role) => `<option value="${role.name}">${role.name}</option>`).join("");
    applyRankSelect.innerHTML = leadershipOptions;

    const divisionOptions = divisions.map((division) => `<option value="${division.name}">${division.name}</option>`).join("");
    applyDivisionSelect.innerHTML = divisionOptions;

    if (prefillRank && leadershipRoles.some((role) => role.name === prefillRank)) {
        applyRankSelect.value = prefillRank;
    }

    if (LEADERSHIP_APPLICATIONS_DOWN) {
        applyRankSelect.disabled = true;
        applyDivisionSelect.disabled = true;
    } else {
        applyRankSelect.disabled = false;
        applyDivisionSelect.disabled = false;
    }

    updateApplicationResult();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHandbookPage() {
    if (!handbookMain || !applyPage) {
        return;
    }

    applyPage.classList.add("hidden");
    diplomatPage?.classList.add("hidden");
    handbookMain.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDiplomatPage() {
    if (!handbookMain || !diplomatPage || !diplomatFactionSelect || !diplomatStatus) {
        return;
    }

    handbookMain.classList.add("hidden");
    applyPage?.classList.add("hidden");
    diplomatPage.classList.remove("hidden");

    const options = supportedFactions.map((faction) => `<option value="${faction}">${faction}</option>`).join("");
    diplomatFactionSelect.innerHTML = options;
    diplomatStatus.textContent = "Welcome. Please select a faction to request your role, then press Confirm.";
    diplomatStatus.classList.remove("is-open", "is-closed", "is-missing");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupApplicationFlow() {
    if (!openRolesBoard || !applyRankSelect || !applyDivisionSelect || !applyCopyLink || !applyBackButton) {
        return;
    }

    openRolesBoard.addEventListener("click", (event) => {
        const target = event.target;

        if (!(target instanceof HTMLElement)) {
            return;
        }

        const applyButton = target.closest(".apply-button");

        if (!applyButton) {
            return;
        }

        const rank = applyButton.getAttribute("data-rank") || "";
        showApplyPage(rank);
    });

    applyRankSelect.addEventListener("change", updateApplicationResult);
    applyDivisionSelect.addEventListener("change", updateApplicationResult);

    applyCopyLink.addEventListener("click", async () => {
        const link = applyOpenLink?.dataset.link || "";

        if (!link) {
            return;
        }

        try {
            await navigator.clipboard.writeText(link);
            setApplyStatus("Application link copied to clipboard.", "is-open");
        } catch (_error) {
            setApplyStatus("Could not copy automatically. Open the link and copy it manually.", "is-missing");
        }
    });

    applyBackButton.addEventListener("click", showHandbookPage);
}

function setupDiplomatFlow() {
    if (!diplomatApplyButton || !diplomatFactionSelect || !diplomatConfirmButton || !diplomatBackButton || !diplomatStatus) {
        return;
    }

    diplomatApplyButton.addEventListener("click", showDiplomatPage);

    diplomatConfirmButton.addEventListener("click", () => {
        const faction = diplomatFactionSelect.value;
        const link = diplomatLinks[faction] || "";

        if (!link) {
            diplomatStatus.textContent = `No link configured yet for ${faction}. Add it in application-links.js.`;
            diplomatStatus.classList.remove("is-open", "is-closed");
            diplomatStatus.classList.add("is-missing");
            return;
        }

        diplomatStatus.textContent = `Opening request link for ${faction}...`;
        diplomatStatus.classList.remove("is-closed", "is-missing");
        diplomatStatus.classList.add("is-open");
        window.open(link, "_blank", "noopener,noreferrer");
    });

    diplomatBackButton.addEventListener("click", showHandbookPage);
}

function setupIntroSequence() {
    if (!introOverlay || !introLogo) {
        document.body.classList.add("site-ready");
        return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
        introOverlay.classList.add("done");
        document.body.classList.add("site-ready");
        window.setTimeout(() => {
            introOverlay.remove();
        }, 40);
        return;
    }

    window.setTimeout(() => {
        introLogo.classList.add("zoom-out");
    }, 800);

    window.setTimeout(() => {
        introOverlay.classList.add("done");
        document.body.classList.add("site-ready");
    }, 1380);

    window.setTimeout(() => {
        introOverlay.remove();
    }, 1880);
}

function renderDivisions() {
    if (!divisionsGrid) {
        return;
    }

    const cards = divisions.map((division) => {
        const card = document.createElement("article");
        card.className = "division-card reveal";
        card.style.setProperty("--division-accent", division.accent);
        card.style.setProperty("--division-glow", division.glow);

        card.innerHTML = `
            <span class="division-icon" aria-hidden="true">
                ${divisionIcons[division.icon]}
            </span>
            <h3>${division.name}</h3>
            <p>${division.description}</p>
        `;

        return card;
    });

    divisionsGrid.replaceChildren(...cards);
}

function setupReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    document.querySelectorAll(".reveal").forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
        observer.observe(item);
    });
}

function setupActiveNavigation() {
    const sections = document.querySelectorAll("main section[id]");

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            });
        },
        {
            threshold: 0.45,
            rootMargin: "-20% 0px -45% 0px"
        }
    );

    sections.forEach((section) => navObserver.observe(section));
}

function setupParticles() {
    if (!particleCanvas) {
        return;
    }

    const context = particleCanvas.getContext("2d");

    if (!context || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    let animationFrame = 0;
    let particles = [];
    let isPaused = false;

    function resizeCanvas() {
        const ratio = window.devicePixelRatio || 1;
        particleCanvas.width = Math.floor(window.innerWidth * ratio);
        particleCanvas.height = Math.floor(window.innerHeight * ratio);
        particleCanvas.style.width = `${window.innerWidth}px`;
        particleCanvas.style.height = `${window.innerHeight}px`;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);

        const viewportFactor = window.innerWidth < 900 ? 0.55 : 0.75;
        const count = Math.max(12, Math.floor((window.innerWidth / 52) * viewportFactor));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 1.8 + 0.4,
            speed: Math.random() * 0.3 + 0.08,
            drift: (Math.random() - 0.5) * 0.18
        }));
    }

    function drawFrame() {
        if (isPaused) {
            return;
        }

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.shadowColor = "rgba(120, 170, 255, 0.35)";
        context.shadowBlur = 6;
        context.fillStyle = "rgba(122, 171, 255, 0.7)";

        particles.forEach((particle) => {
            particle.y -= particle.speed;
            particle.x += particle.drift;

            if (particle.y < -6) {
                particle.y = window.innerHeight + 6;
                particle.x = Math.random() * window.innerWidth;
            }

            if (particle.x < -6) {
                particle.x = window.innerWidth + 6;
            }

            if (particle.x > window.innerWidth + 6) {
                particle.x = -6;
            }

            context.beginPath();
            context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            context.fill();
        });

        animationFrame = window.requestAnimationFrame(drawFrame);
    }

    resizeCanvas();
    drawFrame();

    window.addEventListener("resize", () => {
        window.cancelAnimationFrame(animationFrame);
        resizeCanvas();
        drawFrame();
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            isPaused = true;
            window.cancelAnimationFrame(animationFrame);
            return;
        }

        isPaused = false;
        drawFrame();
    });
}

renderRanks();
renderOpenRoles();
renderDivisions();
renderDiplomatFactions();
setupReveal();
setupActiveNavigation();
setupApplicationFlow();
setupDiplomatFlow();
setupParticles();
setupIntroSequence();