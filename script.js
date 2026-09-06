const P = window.PORTFOLIO;

function filePath(file) {
  if (!file) return "";
  return new URL(file, window.location.href).href;
}

document.getElementById("intro").textContent = P.intro;

document.getElementById("aboutText").textContent =
  "My project work combines mechanical design, hands-on fabrication, electrical integration, controlled testing, and iterative problem solving. Across physics and engineering projects, I have taken concepts from sketches and calculations into physical systems and used test results to refine them.";

document.getElementById("linkedinHero").href = P.linkedin;
document.getElementById("linkedinLink").href = P.linkedin;

const emailLink = document.getElementById("emailLink");

if (emailLink) {
  emailLink.href =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(P.email)}`;
  emailLink.target = "_blank";
  emailLink.rel = "noopener";
}

const stats = document.getElementById("stats");

if (stats) {
  stats.innerHTML = P.stats
    .map(
      s =>
        `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`
    )
    .join("");
}

document.getElementById("featuredTitle").textContent =
  P.featured.title;

document.getElementById("featuredEyebrow").textContent =
  P.featured.eyebrow;

document.getElementById("featuredDescription").textContent =
  P.featured.description;

const featuredImg = document.getElementById("featuredImg");

if (featuredImg) {
  featuredImg.src = filePath(P.featured.image);
}

const featuredPdf = document.getElementById("featuredPdf");

if (featuredPdf) {
  featuredPdf.href = filePath(P.featured.pdf);
}

document.getElementById("featuredTags").innerHTML =
  P.featured.tags.map(t => `<span>${t}</span>`).join("");

const filters = [
  "All",
  ...new Set(P.projects.map(p => p.category.split(" / ")[0]))
];

const filterWrap = document.getElementById("filters");

filterWrap.innerHTML = filters
  .map(
    (f, i) =>
      `<button class="filter ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`
  )
  .join("");

function renderProjects(filter = "All") {
  const grid = document.getElementById("projectGrid");

  const list =
    filter === "All"
      ? P.projects
      : P.projects.filter(p => p.category.startsWith(filter));

  grid.innerHTML = list
    .map(
      p => `
        <article class="project-card">
          <img
            src="${filePath(p.image)}"
            alt="${p.title}"
            loading="lazy"
          >

          <div class="project-body">
            <div class="project-category">${p.category}</div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>

            <div class="tag-list">
              ${p.tags.map(t => `<span>${t}</span>`).join("")}
            </div>

            <a
              class="text-link"
              href="${filePath(p.link)}"
              target="_blank"
              rel="noopener"
            >
              View project PDF ↗
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

renderProjects();

filterWrap.addEventListener("click", e => {
  if (!e.target.classList.contains("filter")) return;

  document
    .querySelectorAll(".filter")
    .forEach(b => b.classList.remove("active"));

  e.target.classList.add("active");

  renderProjects(e.target.dataset.filter);
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

window.addEventListener("scroll", () => {
  const max =
    document.documentElement.scrollHeight - window.innerHeight;

  if (max > 0) {
    document.getElementById("progress").style.width =
      `${(window.scrollY / max) * 100}%`;
  }
});

const menuBtn = document.getElementById("menuBtn");

menuBtn?.addEventListener("click", () => {
  const nav = document.querySelector("nav");

  const open = nav.style.display === "flex";

  nav.style.display = open ? "" : "flex";

  if (!open) {
    nav.style.position = "absolute";
    nav.style.right = "18px";
    nav.style.top = "65px";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "stretch";
    nav.style.background = "#fff";
    nav.style.padding = "18px";
    nav.style.border = "1px solid #dfe3e8";
  }
});
