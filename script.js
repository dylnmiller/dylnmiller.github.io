```javascript
const P = window.PORTFOLIO;

// Build reliable paths to files in the root of the website
function filePath(file) {
  if (!file) return "";
  return `./${file.replace(/^\.?\//, "")}`;
}


// ===============================
// INTRO
// ===============================

document.getElementById("intro").textContent = P.intro;


// ===============================
// ABOUT
// ===============================

document.getElementById("aboutText").textContent =
  "Currently completing Texas A&M's General Engineering core within the University Honors Program, with an intended track into Mechanical Engineering. My project work combines mechanical design, hands-on fabrication, electrical integration, controlled testing, and iterative problem solving — taking concepts from sketches and calculations into physical systems and using test results to refine them.";


// ===============================
// LINKEDIN
// ===============================

document.getElementById("linkedinHero").href = P.linkedin;
document.getElementById("linkedinLink").href = P.linkedin;


// ===============================
// EMAIL
// ===============================

const emailLink = document.getElementById("emailLink");

if (emailLink) {
  emailLink.href = `mailto:${P.email}`;
  emailLink.target = "_blank";
  emailLink.rel = "noopener";
}


// ===============================
// STATS
// ===============================

const stats = document.getElementById("stats");

if (stats) {
  stats.innerHTML = P.stats
    .map(
      s =>
        `<div class="stat">
          <strong>${s.value}</strong>
          <span>${s.label}</span>
        </div>`
    )
    .join("");
}


// ===============================
// FEATURED PROJECT
// ===============================

document.getElementById("featuredTitle").textContent =
  P.featured.title;

document.getElementById("featuredEyebrow").textContent =
  P.featured.eyebrow;

document.getElementById("featuredDescription").textContent =
  P.featured.description;


// Featured image
const featuredImg = document.getElementById("featuredImg");

if (featuredImg) {
  featuredImg.src = filePath(P.featured.image);
}


// Featured PDF
const featuredPdf = document.getElementById("featuredPdf");

if (featuredPdf) {
  featuredPdf.href = filePath(P.featured.pdf);
  featuredPdf.target = "_blank";
  featuredPdf.rel = "noopener noreferrer";
}


// Featured tags
document.getElementById("featuredTags").innerHTML =
  P.featured.tags
    .map(t => `<span>${t}</span>`)
    .join("");


// ===============================
// PROJECT FILTERS
// ===============================

const filters = [
  "All",
  ...new Set(P.projects.map(p => p.category.split(" / ")[0]))
];

const filterWrap = document.getElementById("filters");

filterWrap.innerHTML = filters
  .map(
    (f, i) =>
      `<button
        class="filter ${i === 0 ? "active" : ""}"
        data-filter="${f}">
        ${f}
      </button>`
  )
  .join("");


// ===============================
// RENDER PROJECTS
// ===============================

function renderProjects(filter = "All") {

  const grid = document.getElementById("projectGrid");

  const list =
    filter === "All"
      ? P.projects
      : P.projects.filter(p =>
          p.category.startsWith(filter)
        );


  grid.innerHTML = list
    .map(p => {

      // ===============================
      // VIDEO PROJECT
      // ===============================

      const media = p.video

        ? `
          <video
            class="project-video"
            src="${filePath(p.video)}"
            autoplay
            muted
            loop
            playsinline
            controls
            preload="auto"
            aria-label="${p.title}"
          ></video>
        `

        // ===============================
        // IMAGE PROJECT
        // ===============================

        : `
          <img
            src="${filePath(p.image)}"
            alt="${p.title}"
            loading="lazy"
          >
        `;


      // ===============================
      // PDF LINK
      // ===============================

      const pdfLink = p.link

        ? `
          <a
            class="text-link"
            href="${filePath(p.link)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project PDF ↗
          </a>
        `

        : "";


      // ===============================
      // PROJECT CARD
      // ===============================

      return `
        <article class="project-card">

          ${media}

          <div class="project-body">

            <div class="project-category">
              ${p.category}
            </div>

            <h3>
              ${p.title}
            </h3>

            <p>
              ${p.description}
            </p>

            <div class="tag-list">
              ${p.tags
                .map(t => `<span>${t}</span>`)
                .join("")}
            </div>

            ${pdfLink}

          </div>

        </article>
      `;

    })
    .join("");


  // ===============================
  // FORCE VIDEO AUTOPLAY
  // ===============================

  document
    .querySelectorAll(".project-video")
    .forEach(video => {

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser prevented autoplay.
          // The controls remain available so the visitor
          // can manually start the video.
        });
      }

    });

}


// Render projects when page loads
renderProjects();


// ===============================
// FILTER BUTTONS
// ===============================

filterWrap.addEventListener("click", e => {

  if (!e.target.classList.contains("filter")) return;

  document
    .querySelectorAll(".filter")
    .forEach(b =>
      b.classList.remove("active")
    );

  e.target.classList.add("active");

  renderProjects(
    e.target.dataset.filter
  );

});


// ===============================
// FOOTER YEAR
// ===============================

const year = document.getElementById("year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}


// ===============================
// SCROLL PROGRESS BAR
// ===============================

window.addEventListener("scroll", () => {

  const max =
    document.documentElement.scrollHeight -
    window.innerHeight;

  if (max > 0) {

    document.getElementById("progress").style.width =
      `${(window.scrollY / max) * 100}%`;

  }

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
  document.getElementById("menuBtn");

menuBtn?.addEventListener("click", () => {

  const nav =
    document.querySelector("nav");

  const open =
    nav.style.display === "flex";

  nav.style.display =
    open ? "" : "flex";

  if (!open) {

    nav.style.position =
      "absolute";

    nav.style.right =
      "18px";

    nav.style.top =
      "65px";

    nav.style.flexDirection =
      "column";

    nav.style.alignItems =
      "stretch";

    nav.style.background =
      "#fff";

    nav.style.padding =
      "18px";

    nav.style.border =
      "1px solid #dfe3e8";

  }

});
```
