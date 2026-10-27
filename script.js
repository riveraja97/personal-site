
// ============================================
// JAELYN'S PASTEL PORTFOLIO ♡
// ============================================

// YOUR GITHUB USERNAME
const GITHUB_USERNAME = "riveraja97";

// ============================================
// 1. FEATURED PROJECTS
// ============================================
// Replace repo: null with the actual
// GitHub repository name.
//
// Example:
// repo: "water-run"
//
// For screenshots:
// image: "images/water-run.png"
//
// For live demos:
// demo: "https://your-live-website.com"

const FEATURED_PROJECTS = [
  {
    title: "Intel Sustainability Website",
    emoji: "🌱",
    image: null,
    description:
      "An interactive website exploring Intel's " +
      "sustainability milestones through a " +
      "responsive timeline, carousel, and " +
      "translation features.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],
    repo: null,
    demo: null
  },

  {
    title: "Water Run Game",
    emoji: "💧",
    image: null,
    description:
      "A browser-based game inspired by " +
      "charity: water. Collect water drops, " +
      "avoid obstacles, and unlock new " +
      "characters as you progress!",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas"
    ],
    repo: null,
    demo: null
  },

  {
    title: "L'Oréal Smart Product Advisor",
    emoji: "💄",
    image: null,
    description:
      "An AI-powered chatbot designed to " +
      "answer beauty product questions, " +
      "recommend products, and provide " +
      "personalized routines using an API.",
    tags: [
      "JavaScript",
      "AI",
      "API",
      "Cloudflare Workers"
    ],
    repo: null,
    demo: null
  },

  {
    title: "NASA APOD Explorer",
    emoji: "🌌",
    image: null,
    description:
      "A web application that fetches " +
      "NASA's Astronomy Picture of the Day " +
      "using an API and displays astronomy " +
      "images and information.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API"
    ],
    repo: null,
    demo: null
  }
];

// ============================================
// 2. ELEMENT REFERENCES
// ============================================

const featuredContainer =
  document.getElementById("featuredProjects");

const githubContainer =
  document.getElementById("githubProjects");

const githubStatus =
  document.getElementById("githubStatus");

const searchInput =
  document.getElementById("repoSearch");

const sortSelect =
  document.getElementById("repoSort");

const showMoreBtn =
  document.getElementById("showMoreBtn");

let allRepositories = [];
let visibleCount = 6;

const PAGE_SIZE = 6;

// ============================================
// 3. HELPER FUNCTIONS
// ============================================

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined && text !== null) {
    element.textContent = text;
  }

  return element;
}

function createLink(text, url, iconClass, styleClass) {
  const link = createElement(
    "a",
    "btn btn-small " + styleClass
  );

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  if (iconClass) {
    const icon = createElement("i", iconClass);
    icon.setAttribute("aria-hidden", "true");
    link.appendChild(icon);
  }

  link.appendChild(
    document.createTextNode(" " + text)
  );

  return link;
}

// ============================================
// 4. FEATURED PROJECT CARDS
// ============================================

function renderFeaturedProjects() {
  featuredContainer.replaceChildren();

  FEATURED_PROJECTS.forEach(project => {
    const card = createElement(
      "article",
      "project-card"
    );

    const imageBox = createElement(
      "div",
      "project-image"
    );

    if (project.image) {
      const image = document.createElement("img");

      image.src = project.image;
      image.alt = "Screenshot of " + project.title;
      image.loading = "lazy";

      image.addEventListener("error", () => {
        imageBox.replaceChildren();
        imageBox.textContent = project.emoji;
      });

      imageBox.appendChild(image);
    } else {
      imageBox.textContent = project.emoji;
    }

    card.appendChild(imageBox);

    const title = createElement(
      "h3",
      "",
      project.title
    );

    card.appendChild(title);

    const description = createElement(
      "p",
      "",
      project.description
    );

    card.appendChild(description);

    const tags = createElement(
      "div",
      "project-tags"
    );

    project.tags.forEach(tag => {
      tags.appendChild(
        createElement("span", "", tag)
      );
    });

    card.appendChild(tags);

    const links = createElement(
      "div",
      "project-links"
    );

    if (project.repo) {
      const repoUrl =
        "https://github.com/" +
        GITHUB_USERNAME +
        "/" +
        encodeURIComponent(project.repo);

      links.appendChild(
        createLink(
          "View Code",
          repoUrl,
          "fab fa-github",
          "btn-primary"
        )
      );
    }

    if (project.demo) {
      links.appendChild(
        createLink(
          "Live Demo",
          project.demo,
          "fas fa-arrow-up-right-from-square",
          "btn-secondary"
        )
      );
    }

    if (!project.repo && !project.demo) {
      links.appendChild(
        createElement(
          "span",
          "project-placeholder",
          "Project links coming soon ♡"
        )
      );
    }

    card.appendChild(links);
    featuredContainer.appendChild(card);
  });
}

// ============================================
// 5. FETCH PUBLIC GITHUB REPOSITORIES
// ============================================

async function fetchGitHubProjects() {
  githubStatus.textContent =
    "Loading my coding adventures... ♡";

  githubContainer.replaceChildren();
  showMoreBtn.hidden = true;

  try {
    let repositories = [];
    let page = 1;

    // Fetch up to 500 public repositories
    while (page <= 5) {
      const apiUrl =
        "https://api.github.com/users/" +
        encodeURIComponent(GITHUB_USERNAME) +
        "/repos?per_page=100&page=" +
        page +
        "&sort=updated";

      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/vnd.github+json"
        }
      });

      if (!response.ok) {
        if (
          response.status === 403 ||
          response.status === 429
        ) {
          throw new Error(
            "GitHub's API rate limit was reached. " +
            "Please try again later."
          );
        }

        throw new Error(
          "GitHub returned an error: " +
          response.status
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error(
          "Unexpected response from GitHub."
        );
      }

      repositories.push(...data);

      if (data.length < 100) {
        break;
      }

      page++;
    }

    // Avoid duplicates of featured projects
    const featuredNames = new Set(
      FEATURED_PROJECTS
        .filter(project => project.repo)
        .map(project => project.repo.toLowerCase())
    );

    allRepositories = repositories.filter(repo => {
      return (
        !repo.fork &&
        !repo.archived &&
        !featuredNames.has(repo.name.toLowerCase())
      );
    });

    visibleCount = PAGE_SIZE;
    renderGitHubProjects();

  } catch (error) {
    console.error("GitHub API error:", error);

    githubStatus.textContent =
      error.message ||
      "Unable to load repositories right now.";

    showMoreBtn.hidden = true;
  }
}

// ============================================
// 6. DISPLAY GITHUB REPOSITORIES
// ============================================

function renderGitHubProjects() {
  const searchTerm =
    searchInput.value.trim().toLowerCase();

  const sortBy = sortSelect.value;

  let filtered = allRepositories.filter(repo => {
    const name = repo.name.toLowerCase();

    const description =
      (repo.description || "").toLowerCase();

    const language =
      (repo.language || "").toLowerCase();

    return (
      name.includes(searchTerm) ||
      description.includes(searchTerm) ||
      language.includes(searchTerm)
    );
  });

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    return (
      new Date(b.updated_at) -
      new Date(a.updated_at)
    );
  });

  githubContainer.replaceChildren();

  if (filtered.length === 0) {
    githubStatus.textContent =
      searchTerm
        ? "No matching repositories found ♡"
        : "No additional public repositories to show yet ♡";

    showMoreBtn.hidden = true;
    return;
  }

  const visibleRepositories =
    filtered.slice(0, visibleCount);

  visibleRepositories.forEach(repo => {
    const card = createElement(
      "article",
      "repo-card"
    );

    const top = createElement(
      "div",
      "repo-card-top"
    );

    const iconBox = createElement(
      "div",
      "repo-icon"
    );

    const icon = createElement(
      "i",
      "fab fa-github"
    );

    icon.setAttribute("aria-hidden", "true");
    iconBox.appendChild(icon);

    const name = createElement(
      "h3",
      "repo-name",
      repo.name.replace(/[-_]/g, " ")
    );

    top.appendChild(iconBox);
    top.appendChild(name);
    card.appendChild(top);

    const description = createElement(
      "p",
      "repo-description",
      repo.description ||
      "A little coding project from my GitHub! ♡"
    );

    card.appendChild(description);

    const meta = createElement(
      "div",
      "repo-meta"
    );

    const language = createElement(
      "span",
      "",
      "💻 " + (repo.language || "Code")
    );

    const stars = createElement(
      "span",
      "",
      "⭐ " + repo.stargazers_count
    );

    const updated = createElement(
      "span",
      "",
      "Updated " +
      new Date(repo.updated_at).toLocaleDateString()
    );

    meta.appendChild(language);
    meta.appendChild(stars);
    meta.appendChild(updated);

    card.appendChild(meta);

    const links = createElement(
      "div",
      "project-links"
    );

    links.appendChild(
      createLink(
        "View Code",
        repo.html_url,
        "fab fa-github",
        "btn-primary"
      )
    );

    if (
      repo.homepage &&
      /^https?:\/\//i.test(repo.homepage)
    ) {
      links.appendChild(
        createLink(
          "Live Demo",
          repo.homepage,
          "fas fa-arrow-up-right-from-square",
          "btn-secondary"
        )
      );
    }

    card.appendChild(links);
    githubContainer.appendChild(card);
  });

  githubStatus.textContent =
    "Showing " +
    visibleRepositories.length +
    " of " +
    filtered.length +
    " repositories ♡";

  showMoreBtn.hidden =
    visibleCount >= filtered.length;
}

// ============================================
// 7. SEARCH AND SORT
// ============================================

searchInput.addEventListener("input", () => {
  visibleCount = PAGE_SIZE;
  renderGitHubProjects();
});

sortSelect.addEventListener("change", () => {
  visibleCount = PAGE_SIZE;
  renderGitHubProjects();
});

// ============================================
// 8. SHOW MORE
// ============================================

showMoreBtn.addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  renderGitHubProjects();
});

// ============================================
// 9. MOBILE NAVIGATION
// ============================================

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen =
    navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.innerHTML = isOpen
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.innerHTML =
      '<i class="fas fa-bars"></i>';
  });
});

// ============================================
// 10. AUTOMATIC FOOTER YEAR
// ============================================

document.getElementById("currentYear")
  .textContent = new Date().getFullYear();

// ============================================
// 11. INITIALIZE WEBSITE
// ============================================

renderFeaturedProjects();
fetchGitHubProjects();

console.log(
  "Welcome to Jaelyn's little coding corner! ♡"
);
