
// ===========================================
// JAELYN'S PASTEL PORTFOLIO 2.0 ♡
// ===========================================

const GITHUB_USERNAME = "riveraja97";
const PAGE_SIZE = 6;

let allRepositories = [];
let visibleCount = PAGE_SIZE;
let githubLoaded = false;

// ===========================================
// 1. FEATURED PROJECTS
// ===========================================
// Set repo to the actual GitHub repository name.
// Set image to a local screenshot path.
// Set demo to the actual deployed URL.
//
// Leave unknown links as null.

const FEATURED_PROJECTS = [
  {
    title: "Intel Sustainability Website",
    emoji: "🌱",
    image: null,
    description:
      "An interactive, responsive website exploring " +
      "Intel's sustainability milestones through a " +
      "timeline, carousel, and translation features.",
    tags: [
      "HTML", "CSS", "JavaScript",
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
      "A browser-based game inspired by charity: water. " +
      "Collect water drops, avoid obstacles, and unlock " +
      "new characters as you progress!",
    tags: [
      "HTML", "CSS", "JavaScript", "Canvas"
    ],
    repo: null,
    demo: null
  },
  {
    title: "L'Oréal Smart Product Advisor",
    emoji: "💄",
    image: null,
    description:
      "An AI-powered chatbot designed to answer beauty " +
      "product questions and recommend products using " +
      "an API and Cloudflare Worker.",
    tags: [
      "JavaScript", "AI", "API",
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
      "A web application that retrieves NASA's Astronomy " +
      "Picture of the Day using an external API.",
    tags: [
      "HTML", "CSS", "JavaScript", "REST API"
    ],
    repo: null,
    demo: null
  }
];

// ===========================================
// 2. PROJECT CASE STUDIES
// ===========================================

const CASE_STUDIES = [
  {
    title: "Water Run Game",
    emoji: "💧",
    summary:
      "Creating a fun, interactive browser game " +
      "while learning to manage game logic.",
    challenge:
      "Design a simple but engaging game that introduces " +
      "players to the mission of charity: water.",
    approach:
      "Used HTML Canvas and JavaScript to implement " +
      "movement, jumping, collision detection, scoring, " +
      "lives, and character unlocks.",
    challenges:
      "Managing the interactions between player movement, " +
      "obstacles, and scoring required repeated debugging. " +
      "I also had to reduce the original project scope.",
    learned:
      "I learned to prioritize core gameplay, test " +
      "mechanics earlier, and organize features before " +
      "adding extra complexity.",
    improvement:
      "Improve the game's scalability, add more polished " +
      "animations, and make future levels easier to add.",
    projectIndex: 1
  },
  {
    title: "Intel Sustainability Website",
    emoji: "🌱",
    summary:
      "Building a responsive, interactive website " +
      "with multiple user-facing features.",
    challenge:
      "Present sustainability milestones in a way that " +
      "is engaging and accessible across devices.",
    approach:
      "Created a horizontal timeline, responsive layouts, " +
      "carousel, translation controls, and support " +
      "for right-to-left languages.",
    challenges:
      "Maintaining existing features while integrating " +
      "new ones required careful HTML, CSS, and " +
      "JavaScript updates.",
    learned:
      "I gained experience with responsive design, " +
      "multilingual interfaces, and testing changes " +
      "without breaking earlier functionality.",
    improvement:
      "Continue improving accessibility, navigation, " +
      "and testing across different languages and devices.",
    projectIndex: 0
  },
  {
    title: "L'Oréal Smart Product Advisor",
    emoji: "💄",
    summary:
      "Connecting a conversational interface " +
      "to an AI-powered recommendation system.",
    challenge:
      "Build a chatbot that responds to relevant product " +
      "questions while keeping API credentials server-side.",
    approach:
      "Developed the chat interface in JavaScript and " +
      "used a Cloudflare Worker to route requests " +
      "to an AI service.",
    challenges:
      "Troubleshooting API responses and displaying " +
      "returned information correctly required checking " +
      "request handling and response structures.",
    learned:
      "I strengthened my understanding of asynchronous " +
      "JavaScript, API integration, and user-friendly " +
      "error handling.",
    improvement:
      "Add stronger testing, clearer loading states, " +
      "and more robust recommendation validation.",
    projectIndex: 2
  },
  {
    title: "NASA APOD Explorer",
    emoji: "🌌",
    summary:
      "Learning how to retrieve and display " +
      "content from a public API.",
    challenge:
      "Display NASA's daily astronomy content, including " +
      "different types of media.",
    approach:
      "Used JavaScript fetch requests to retrieve API " +
      "data and render content dynamically.",
    challenges:
      "Some API responses contained videos rather than " +
      "images, which required different rendering logic.",
    learned:
      "I learned the importance of checking API response " +
      "fields before deciding how to display content.",
    improvement:
      "Improve media handling, loading states, and " +
      "error messages for unavailable content.",
    projectIndex: 3
  }
];

// ===========================================
// 3. DEVELOPER DIARY
// ===========================================
// Edit these reflections to match your voice.
// Add more entries by copying an object.

const DIARY_ENTRIES = [
  {
    category: "Game Development 🎮",
    title: "Learning to Think Like a Game Developer",
    preview:
      "Building Water Run taught me that even simple " +
      "games require a lot of planning and logic.",
    full:
      "When I started Water Run, I had so many ideas " +
      "for animations, levels, and characters. " +
      "As development progressed, I realized that " +
      "building reliable core mechanics was more " +
      "important than adding every feature immediately. " +
      "I focused on movement, scoring, collisions, " +
      "and difficulty before expanding the experience. " +
      "This taught me how important scope management " +
      "and early testing are."
  },
  {
    category: "Debugging 🛠️",
    title: "When an API Doesn't Work",
    preview:
      "My NASA project helped me understand why " +
      "debugging starts with understanding the data.",
    full:
      "While working with NASA's Astronomy Picture " +
      "of the Day API, I encountered a problem when " +
      "the returned content was a video rather than " +
      "an image. I learned to inspect the API response " +
      "and handle different media types instead of " +
      "assuming every response had the same format. " +
      "It reminded me that troubleshooting is often " +
      "about checking assumptions."
  },
  {
    category: "Web Development 🌐",
    title: "Designing for Different Users",
    preview:
      "Working on responsive and multilingual features " +
      "changed how I think about website usability.",
    full:
      "While developing the Intel sustainability " +
      "website, I worked on responsive layouts, " +
      "translation features, and right-to-left " +
      "language support. These experiences helped " +
      "me understand that a website should work " +
      "for people with different devices, " +
      "languages, and interaction needs. " +
      "I want to keep improving the accessibility " +
      "of the interfaces I create."
  },
  {
    category: "AI & Technology 🤖",
    title: "Building My First AI Product Assistant",
    preview:
      "Connecting a chatbot interface to an API " +
      "helped me understand full application flows.",
    full:
      "Building the L'Oréal Smart Product Advisor " +
      "gave me experience connecting frontend " +
      "JavaScript to an AI service through a " +
      "Cloudflare Worker. One challenge was " +
      "making sure the response data reached " +
      "the interface in the expected format. " +
      "I learned to inspect errors, validate " +
      "response structures, and consider what " +
      "users should see when something fails."
  }
];

// ===========================================
// 4. DOM HELPERS
// ===========================================

function el(tag, className = "", content = null) {
  const node = document.createElement(tag);

  if (className) node.className = className;
  if (content !== null) node.textContent = content;

  return node;
}

function externalLink(label, url, iconClass, type = "btn-primary") {
  const link = el("a", "btn btn-small " + type);

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  if (iconClass) {
    const icon = el("i", iconClass);
    icon.setAttribute("aria-hidden", "true");
    link.append(icon);
  }

  link.append(document.createTextNode(" " + label));
  return link;
}

function getProjectLinks(project) {
  const links = el("div", "project-links");

  if (project.repo) {
    const url = "https://github.com/" +
      GITHUB_USERNAME + "/" +
      encodeURIComponent(project.repo);

    links.append(
      externalLink("View Code", url, "fab fa-github")
    );
  }

  if (project.demo) {
    links.append(
      externalLink(
        "Live Demo",
        project.demo,
        "fas fa-arrow-up-right-from-square",
        "btn-secondary"
      )
    );
  }

  if (!project.repo && !project.demo) {
    links.append(
      el("span", "project-placeholder",
        "Project links coming soon ♡")
    );
  }

  return links;
}

// ===========================================
// 5. FEATURED PROJECT CARDS
// ===========================================

function renderFeaturedProjects() {
  const container =
    document.getElementById("featuredProjects");

  container.replaceChildren();

  FEATURED_PROJECTS.forEach(project => {
    const card = el("article", "project-card");
    const imageBox = el("div", "project-image");

    if (project.image) {
      const image = document.createElement("img");

      image.src = project.image;
      image.alt = "Screenshot of " + project.title;
      image.loading = "lazy";

      image.addEventListener("error", () => {
        imageBox.textContent = project.emoji;
      });

      imageBox.append(image);
    } else {
      imageBox.textContent = project.emoji;
    }

    card.append(
      imageBox,
      el("h3", "", project.title),
      el("p", "", project.description)
    );

    const tags = el("div", "project-tags");

    project.tags.forEach(tag => {
      tags.append(el("span", "", tag));
    });

    card.append(tags, getProjectLinks(project));
    container.append(card);
  });
}

// ===========================================
// 6. CASE STUDY CARDS
// ===========================================

function renderCaseStudies() {
  const container =
    document.getElementById("caseStudyGrid");

  container.replaceChildren();

  CASE_STUDIES.forEach(study => {
    const card = el("article", "case-card");
    const heading = el("div", "case-heading");

    heading.append(
      el("div", "case-emoji", study.emoji),
      el("h3", "", study.title)
    );

    card.append(
      heading,
      el("p", "case-summary", study.summary)
    );

    const details = el("details", "case-details");
    details.append(el("summary", "", "Read Case Study ♡"));

    const sections = [
      ["The Challenge", study.challenge],
      ["My Approach", study.approach],
      ["Challenges & Debugging", study.challenges],
      ["What I Learned", study.learned],
      ["What I'd Improve", study.improvement]
    ];

    sections.forEach(([title, text]) => {
      const block = el("div", "case-detail-block");

      block.append(
        el("h4", "", title),
        el("p", "", text)
      );

      details.append(block);
    });

    const project =
      FEATURED_PROJECTS[study.projectIndex];

    if (project) {
      const links = getProjectLinks(project);
      links.classList.add("case-links");
      details.append(links);
    }

    card.append(details);
    container.append(card);
  });
}

// ===========================================
// 7. DEVELOPER DIARY
// ===========================================

function renderDiary() {
  const container =
    document.getElementById("diaryGrid");

  container.replaceChildren();

  DIARY_ENTRIES.forEach(entry => {
    const card = el("article", "diary-card");

    card.append(
      el("span", "diary-category", entry.category),
      el("h3", "", entry.title),
      el("p", "diary-preview", entry.preview)
    );

    const details = el("details");
    details.append(
      el("summary", "", "Read My Reflection ♡"),
      el("p", "diary-full", entry.full)
    );

    card.append(details);
    container.append(card);
  });
}

// ===========================================
// 8. GITHUB API
// ===========================================

async function fetchGitHubProjects() {
  const status = document.getElementById("githubStatus");
  const grid = document.getElementById("githubProjects");
  const showMore = document.getElementById("showMoreBtn");

  status.textContent = "Loading my coding adventures... ♡";
  grid.replaceChildren();
  showMore.hidden = true;

  try {
    const repositories = [];

    // Fetch up to 500 public repositories.
    for (let page = 1; page <= 5; page++) {
      const url =
        "https://api.github.com/users/" +
        encodeURIComponent(GITHUB_USERNAME) +
        "/repos?per_page=100&sort=updated&page=" +
        page;

      const response = await fetch(url, {
        headers: {
          Accept: "application/vnd.github+json"
        }
      });

      if (!response.ok) {
        if ([403, 429].includes(response.status)) {
          throw new Error(
            "GitHub's API limit was reached. " +
            "Please try again later."
          );
        }

        throw new Error(
          "Unable to load GitHub repositories (" +
          response.status + ")."
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Unexpected GitHub response.");
      }

      repositories.push(...data);

      if (data.length < 100) break;
    }

    const featuredNames = new Set(
      FEATURED_PROJECTS
        .filter(project => project.repo)
        .map(project => project.repo.toLowerCase())
    );

    allRepositories = repositories.filter(repo =>
      !repo.fork &&
      !repo.archived &&
      !featuredNames.has(repo.name.toLowerCase())
    );

    githubLoaded = true;
    visibleCount = PAGE_SIZE;
    renderGitHubProjects();

  } catch (error) {
    console.error(error);
    status.textContent = error.message;
    showMore.hidden = true;
  }
}

// ===========================================
// 9. GITHUB REPOSITORY CARDS
// ===========================================

function renderGitHubProjects() {
  if (!githubLoaded) return;

  const grid = document.getElementById("githubProjects");
  const status = document.getElementById("githubStatus");
  const showMore = document.getElementById("showMoreBtn");

  const query = document.getElementById("repoSearch")
    .value.trim().toLowerCase();

  const sort = document.getElementById("repoSort").value;

  const filtered = allRepositories.filter(repo => {
    const searchable = [
      repo.name,
      repo.description || "",
      repo.language || "",
      ...(repo.topics || [])
    ].join(" ").toLowerCase();

    return searchable.includes(query);
  });

  filtered.sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sort === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }

    return new Date(b.updated_at) -
      new Date(a.updated_at);
  });

  const visible = filtered.slice(0, visibleCount);
  grid.replaceChildren();

  visible.forEach(repo => {
    const card = el("article", "repo-card");
    const top = el("div", "repo-card-top");
    const iconBox = el("div", "repo-icon");

    const icon = el("i", "fab fa-github");
    icon.setAttribute("aria-hidden", "true");
    iconBox.append(icon);

    top.append(
      iconBox,
      el("h3", "repo-name",
        repo.name.replace(/[-_]/g, " "))
    );

    card.append(
      top,
      el(
        "p",
        "repo-description",
        repo.description ||
        "A little coding project from my GitHub! ♡"
      )
    );

    const meta = el("div", "repo-meta");

    meta.append(
      el("span", "", "💻 " + (repo.language || "Code")),
      el("span", "", "⭐ " + repo.stargazers_count),
      el("span", "",
        "Updated " +
        new Date(repo.updated_at).toLocaleDateString())
    );

    card.append(meta);

    const links = el("div", "project-links");

    links.append(
      externalLink(
        "View Code",
        repo.html_url,
        "fab fa-github"
      )
    );

    if (repo.homepage &&
        /^https?:\/\//i.test(repo.homepage)) {
      links.append(
        externalLink(
          "Live Demo",
          repo.homepage,
          "fas fa-arrow-up-right-from-square",
          "btn-secondary"
        )
      );
    }

    card.append(links);
    grid.append(card);
  });

  status.textContent = filtered.length
    ? `Showing ${visible.length} of ${filtered.length} repositories ♡`
    : query
      ? "No matching repositories found ♡"
      : "No additional public repositories to show yet ♡";

  showMore.hidden = visibleCount >= filtered.length;
}

// ===========================================
// 10. GITHUB SEARCH, SORT & SHOW MORE
// ===========================================

document.getElementById("repoSearch")
  .addEventListener("input", () => {
    visibleCount = PAGE_SIZE;
    renderGitHubProjects();
  });

document.getElementById("repoSort")
  .addEventListener("change", () => {
    visibleCount = PAGE_SIZE;
    renderGitHubProjects();
  });

document.getElementById("showMoreBtn")
  .addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderGitHubProjects();
  });

// ===========================================
// 11. MOBILE NAVIGATION
// ===========================================

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

function setMenuOpen(open) {
  navLinks.classList.toggle("open", open);

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );

  const icon = menuToggle.querySelector("i");

  icon.className = open
    ? "fas fa-times"
    : "fas fa-bars";
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(!navLinks.classList.contains("open"));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

// ===========================================
// 12. FOOTER YEAR
// ===========================================

document.getElementById("currentYear")
  .textContent = new Date().getFullYear();

// ===========================================
// 13. INITIALIZE WEBSITE
// ===========================================

renderFeaturedProjects();
renderCaseStudies();
renderDiary();
fetchGitHubProjects();

console.log("Welcome to Jaelyn's coding corner! ♡");
