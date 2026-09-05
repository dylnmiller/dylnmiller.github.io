const P = window.PORTFOLIO;

function filePath(file) {
  if (!file) return "";
  return new URL(file, window.location.href).href;
}

// HERO
document.getElementById("intro").textContent = P.intro;

document.getElementById("aboutText").textContent =
  "My project work combines mechanical design, hands-on fabrication, electrical integration, controlled testing, and iterative problem solving. Across physics and engineering projects, I have taken concepts from sketches and CAD models through physical prototypes, testing, and refinement.";

document.getElementById("featuredTitle").textContent = P.featured.title;
document.getElementById("featuredDesc").textContent = P.featured.description;
document.getElementById("featuredMeta").textContent = P.featured.meta;

const featuredImg = document.getElementById("featuredImg");

if (featuredImg && P.featured.image) {
  featuredImg.src = filePath(P.featured.image);
  featuredImg.alt = P.featured.title;
}

// PROJECTS
const projectsGrid = document.getElementById("projectsGrid");

if (projectsGrid) {
  projectsGrid.innerHTML = P.projects.map((p, index) => `
    <article class="project-card">
      <div class="project-image">
        <img
          src="${filePath(p.image)}"
          alt="${p.title}"
          loading="lazy"
          onerror="this.style.display='none';"
        >
      </div>

      <div class="project-content">
        <span class="project-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <h3>${p.title}</h3>

        <p>${p.description}</p>

        <div class="project-tags">
          ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        ${
          p.pdf
            ? `<a href="${filePath(p.pdf)}" target="_blank">View Project ↗</a>`
            : ""
        }
      </div>
    </article>
  `).join("");
}

// SKILLS
const skillsGrid = document.getElementById("skillsGrid");

if (skillsGrid && P.skills) {
  skillsGrid.innerHTML = P.skills.map((skill, index) => `
    <div class="skill-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${skill.title}</h3>
      <p>${skill.description}</p>

      <div class="skill-tags">
        ${skill.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// RESUME
const resumeLinks = document.querySelectorAll("[data-resume]");

resumeLinks.forEach(link => {
  link.href = filePath(P.resumeFile);
});
