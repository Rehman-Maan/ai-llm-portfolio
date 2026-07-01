const projects = window.PORTFOLIO_PROJECTS || [];

function projectUrl(slug) {
  return `project.html?project=${encodeURIComponent(slug)}`;
}

function tagsHtml(tags) {
  return tags.map((tag) => `<span>${tag}</span>`).join("");
}

function listHtml(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderProjectCards(targetSelector, limit) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;
  target.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          <a class="project-card-link" href="${projectUrl(project.slug)}" aria-label="Open ${project.title} project page">
            <div class="project-poster">
              <img src="${project.cover}" alt="${project.title} screenshot" loading="eager" decoding="sync" />
              <span>${project.type}</span>
            </div>
            <div class="project-card-body">
              <p class="project-type">${project.type}</p>
              <h3>${project.title}</h3>
              <p>${project.card}</p>
            </div>
          </a>
        </article>
      `
    )
    .join("");
}

function bindContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector("button[type='submit']");
    const originalLabel = submitButton?.textContent;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = new URL("index.html", window.location.href).href;
    } catch (error) {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
      form.submit();
    }
  });
}

function renderProjectDetail() {
  const target = document.querySelector("[data-project-detail]");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || projects[0]?.slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    document.title = "Project Not Found | Rao Abdul Rehman";
    target.innerHTML = `
      <section class="detail-hero compact">
        <p class="eyebrow">Project not found</p>
        <h1>This project is not available.</h1>
        <p>The project link may be outdated. Return to the projects page to browse the available work.</p>
        <a class="button primary" href="projects.html">Back to Projects</a>
      </section>
    `;
    return;
  }

  document.title = `${project.title} | Rao Abdul Rehman`;
  target.innerHTML = `
    <section class="detail-hero">
      <div>
        <p class="eyebrow">${project.eyebrow}</p>
        <h1>${project.title}</h1>
        <p>${project.summary}</p>
        <div class="tag-row">${tagsHtml(project.tags)}</div>
      </div>
      <img src="${project.cover}" alt="${project.title} primary screenshot" />
    </section>

    <section class="detail-section split">
      <div>
        <p class="eyebrow">What it demonstrates</p>
        <h2>Product-level AI engineering</h2>
        <ul class="feature-list">${listHtml(project.highlights)}</ul>
      </div>
      <div class="case-media">
        ${project.images.map((image) => `<img src="${image.src}" alt="${image.alt}" loading="eager" decoding="sync" />`).join("")}
      </div>
    </section>

    <section class="detail-section">
      <p class="eyebrow">Implementation Flow</p>
      <h2>How this project works</h2>
      <div class="timeline detail-timeline">
        ${project.flow
          .map(
            (item, index) => `
              <article>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${item.step}</h3>
                <p>${item.detail}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="contact detail-cta">
      <div>
        <p class="eyebrow">Interested in this build?</p>
        <h2>Ask about ${project.title}.</h2>
      <p>Use the contact form to ask about the architecture, demo flow, codebase, or how a similar AI product could be built.</p>
      </div>
      <div class="contact-actions">
        <a class="button primary" href="contact.html">Contact Me</a>
        <a class="button secondary" href="projects.html">All Projects</a>
      </div>
    </section>
  `;
}

renderProjectCards("[data-project-cards]");
renderProjectCards("[data-home-projects]", 3);
renderProjectDetail();
bindContactForm();
