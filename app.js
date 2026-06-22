const categories = {
  all: {
    label: "Portfolio overview",
    eyebrow: "Category overview",
    title: "A control engineer's route into ML engineering.",
    summary:
      "This view keeps the whole story visible: controls and physical systems, signal-centered ML, reinforcement learning, and applied Python/LLM tooling.",
    bullets: ["Control systems foundation", "ML experiments with real signals", "RL algorithms implemented from scratch", "Practical Python tools"]
  },
  rl: {
    label: "Reinforcement learning",
    eyebrow: "Learning track",
    title: "A growing RL repo documenting learning through implementation.",
    summary:
      "The reinforcement-learning repo is a perpetual work in progress: a place to implement seminal paper algorithms from scratch, combine methods with different environments, and document the learning process through code, debugging notes, experiment artifacts, and Medium-style writeups. The point is not only final scores, but understanding the training loop, exploration, value estimation, policy optimization, reward shaping, and environment interface deeply enough to debug them.",
    bullets: ["Seminal algorithms from scratch", "Different methods and environments", "Debugging notes and experiment traces", "Medium articles as learning documentation"]
  },
  "system-id": {
    label: "System identification",
    eyebrow: "Control meets ML",
    title: "Data-driven models for dynamical systems.",
    summary:
      "This category connects your existing controls background with ML sequence modeling: learning state evolution, comparing predicted and measured responses, and explaining model quality in engineering terms.",
    bullets: ["RNN dynamics models", "Prediction vs measurement", "Control-oriented interpretation"]
  },
  signals: {
    label: "Signal ML",
    eyebrow: "Signal processing",
    title: "Learning from structured time-series and sensor data.",
    summary:
      "Signal projects show range beyond toy datasets: EEG structure discovery, audio classification, feature extraction, and notebook-driven experimentation.",
    bullets: ["EEG unsupervised learning", "Audio classification", "Feature engineering and analysis"]
  },
  controls: {
    label: "Controls and physical systems",
    eyebrow: "Engineering foundation",
    title: "Physical modeling, estimation, and simulation work.",
    summary:
      "These projects keep your engineering identity visible: aerodynamics, CFD/FEM scripts, sensor fusion, and implementation work close to real systems.",
    bullets: ["Aerodynamics and CFD", "IMU data fusion", "Simulation and estimation"]
  },
  tools: {
    label: "Applied ML tooling",
    eyebrow: "Useful software",
    title: "Python tools that turn ML ideas into workflows.",
    summary:
      "This category is for practical tooling: scraping, retrieval, LLM workflows, automation, and data pipelines that are useful outside notebooks.",
    bullets: ["LLM-assisted job search", "Automation scripts", "Data collection workflows"]
  }
};

const projects = [
  {
    id: "dqn-breakout",
    title: "Deep Q-Learning for Atari Breakout",
    repo: "reinforcement-learning",
    category: "rl",
    language: "Python",
    year: "2026",
    status: "Implemented",
    visual: "visual-rl",
    image: "./assets/reinforcement-learning-1.jpg",
    url: "https://github.com/apasagic/reinforcement-learning",
    summary:
      "DQN implementation with replay buffer, target network updates, frame stacking, reward shaping, checkpointing, and Atari preprocessing.",
    detail:
      "This should become the flagship case study because it shows algorithmic depth, practical engineering decisions, and debugging around long-running training.",
    tags: ["DQN", "CNN", "Gymnasium", "Replay buffer", "RL"]
  },
  {
    id: "cartpole-dqn",
    title: "Deep Q-Learning for CartPole",
    repo: "reinforcement-learning",
    category: "rl",
    language: "Python",
    year: "2026",
    status: "Implemented",
    visual: "visual-step",
    image: "./assets/cartpole-reward.png",
    url: "https://github.com/apasagic/reinforcement-learning/tree/main/deep_q_learning/cartpole",
    summary:
      "TensorFlow/Keras DQN experiment for CartPole-v1 with replay-buffer sampling, target network synchronization, epsilon scheduling, GIF recording, and reward shaping experiments.",
    detail:
      "This is a compact debugging case study: reward plateaus, policy drift toward one side of the track, epsilon schedule comparisons, and reward shaping to penalize cart displacement and pole angle.",
    tags: ["DQN", "CartPole", "Reward shaping", "Epsilon schedule"]
  },
  {
    id: "isaac-lab-ppo",
    title: "Isaac Lab PPO Experiments",
    repo: "reinforcement-learning",
    category: "rl",
    language: "Python",
    year: "Planned",
    status: "Planned case study",
    visual: "visual-imu",
    image: "./assets/imu-fusion.svg",
    url: "https://github.com/apasagic/reinforcement-learning",
    summary:
      "A future robotics/control-oriented RL section using PPO in Isaac Lab, positioned as the bridge from classic algorithms to modern simulation stacks.",
    detail:
      "This can show how your controls background transfers to robot or physical-system RL: reward design, trajectory planning, constraints, and sim-to-real awareness.",
    tags: ["PPO", "Isaac Lab", "Robotics", "Control"]
  },
  {
    id: "frozen-lake-q-learning",
    title: "Frozen Lake and Tabular Q-Learning",
    repo: "reinforcement-learning",
    category: "rl",
    language: "Python",
    year: "2026",
    status: "Learning module",
    visual: "visual-map",
    image: "./assets/flight-route.svg",
    url: "https://github.com/apasagic/reinforcement-learning",
    summary:
      "A compact entry point for value iteration, Q-tables, exploration schedules, and the intuition behind bootstrapped value learning.",
    detail:
      "This is useful as the first chapter of the RL track: small enough to explain fully, but connected to the later DQN implementation.",
    tags: ["Q-learning", "Tabular RL", "Exploration", "Gymnasium"]
  },
  {
    id: "rnn-system-identification",
    title: "RNN System Identification",
    repo: "RNN_System_Identification",
    category: "system-id",
    language: "Jupyter Notebook",
    year: "2025",
    status: "Implemented",
    visual: "visual-step",
    image: "./assets/rnn-step-response.svg",
    url: "https://github.com/apasagic/RNN_System_Identification",
    summary:
      "Sequence modeling project that connects control systems intuition with data-driven nonlinear dynamics modeling.",
    detail:
      "This is the best bridge between your current engineering identity and ML engineering roles. It deserves a careful project page with diagrams and plots.",
    tags: ["RNN", "System ID", "Dynamics", "Notebooks"]
  },
  {
    id: "eeg-unsupervised-learning",
    title: "EEG Unsupervised Learning",
    repo: "EEG-unsupervised-learning",
    category: "signals",
    language: "Python",
    year: "2026",
    status: "Implemented",
    visual: "visual-eeg",
    image: "./assets/eeg-pretraining.svg",
    url: "https://github.com/apasagic/EEG-unsupervised-learning",
    summary:
      "Signal-centered ML experiments for discovering structure in EEG data using unsupervised methods.",
    detail:
      "Good proof that your ML interests are not only games or demos. It adds biomedical signal processing and exploratory data analysis.",
    tags: ["EEG", "Clustering", "Signal processing", "Python"]
  },
  {
    id: "scrape-jobs-llm",
    title: "ScrapeJobsLLM",
    repo: "ScrapeJobsLLM",
    category: "tools",
    language: "Python",
    year: "2026",
    status: "Implemented",
    visual: "visual-llm",
    image: "./assets/ScrapeJobsLLM-1.jpg",
    url: "https://github.com/apasagic/ScrapeJobsLLM",
    summary:
      "Applied LLM and retrieval workflow for job-search automation, scraping, semantic storage, and ranking.",
    detail:
      "This project shows product sense and practical ML tooling. It can also power your own job-search story on the site.",
    tags: ["LLM", "Retrieval", "Automation", "Python"]
  },
  {
    id: "audio-classification",
    title: "Audio Classification",
    repo: "audio-classification",
    category: "signals",
    language: "Jupyter Notebook",
    year: "2026",
    status: "Implemented",
    visual: "visual-audio",
    image: "./assets/audio-spectrogram.svg",
    url: "https://github.com/apasagic/audio-classification",
    summary:
      "Notebook-based classification work around audio features, model training, and evaluation.",
    detail:
      "A useful supporting project for signal ML. It can sit beside EEG as evidence of broader signal processing range.",
    tags: ["Audio", "Classification", "Features", "Notebook"]
  },
  {
    id: "aerodynamics-fluid-dynamics",
    title: "Aerodynamics and Fluid Dynamics",
    repo: "Aerodynamics-Fluid-dynamics",
    category: "controls",
    language: "Jupyter Notebook",
    year: "2024",
    status: "Implemented",
    visual: "visual-aero",
    image: "./assets/aero-airfoil-flow.svg",
    url: "https://github.com/apasagic/Aerodynamics-Fluid-dynamics",
    summary:
      "Matlab and Python scripts related to aerodynamic simulations, computational fluid dynamics, and FEM.",
    detail:
      "This project should not be hidden. It gives credibility to your physical-systems background and makes the ML transition more distinctive.",
    tags: ["CFD", "Simulation", "FEM", "Python"]
  },
  {
    id: "imu-data-fusion",
    title: "IMU Data Fusion",
    repo: "IMU-data-fusion",
    category: "controls",
    language: "C",
    year: "2021",
    status: "Implemented",
    visual: "visual-imu",
    image: "./assets/imu-fusion.svg",
    url: "https://github.com/apasagic/IMU-data-fusion",
    summary:
      "Embedded-oriented sensor fusion work that supports the controls, estimation, and real-world systems narrative.",
    detail:
      "This is older but valuable. It helps show that your signal and state-estimation background is grounded in implementation.",
    tags: ["IMU", "Sensor fusion", "C", "Estimation"]
  },
  {
    id: "flight-finder",
    title: "Flight Finder",
    repo: "flight-finder",
    category: "tools",
    language: "Python",
    year: "2025",
    status: "Implemented",
    visual: "visual-map",
    image: "./assets/flight-route.svg",
    url: "https://github.com/apasagic/flight-finder",
    summary:
      "Python tool project that can be presented as automation, data collection, and applied scripting experience.",
    detail:
      "This belongs in the supporting project set, especially if the implementation has clean data handling or automation patterns.",
    tags: ["Automation", "Python", "Data"]
  }
];

const grid = document.querySelector("#projectGrid");
const detail = document.querySelector("#projectDetail");
const categoryIntro = document.querySelector("#categoryIntro");
let activeFilter = "all";
let activeProject = projects[0].id;

const params = new URLSearchParams(window.location.search);
if (params.get("hero") === "classic") {
  document.body.classList.add("classic-hero");
}

function renderProjects() {
  const visible = projects.filter((project) => activeFilter === "all" || project.category === activeFilter);
  if (!visible.some((project) => project.id === activeProject)) {
    activeProject = visible[0]?.id || projects[0].id;
  }

  renderCategoryIntro(visible);

  grid.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card ${project.id === activeProject ? "active" : ""}" data-project="${project.id}" tabindex="0">
          <div class="project-art ${project.visual}" aria-hidden="true">
            ${project.image ? `<img src="${project.image}" alt="" />` : ""}
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div class="project-meta">
            <span class="pill">${project.language}</span>
            <span class="pill">${project.year}</span>
            <span class="pill">${project.status}</span>
          </div>
          <div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
          </div>
          <div class="card-foot">
            <span class="repo-link">${project.repo}</span>
            <span aria-hidden="true">Open</span>
          </div>
        </article>
      `
    )
    .join("");

  renderDetail();
}

function renderCategoryIntro(visible) {
  const category = categories[activeFilter] || categories.all;
  categoryIntro.innerHTML = `
    <div>
      <p class="eyebrow">${category.eyebrow}</p>
      <h3>${category.title}</h3>
      <p>${category.summary}</p>
    </div>
    <div class="category-facts">
      ${category.bullets.map((bullet) => `<span>${bullet}</span>`).join("")}
      <strong>${visible.length} project${visible.length === 1 ? "" : "s"}</strong>
    </div>
  `;
}

function renderDetail() {
  if (!detail) return;
  const project = projects.find((item) => item.id === activeProject) || projects[0];
  const category = categories[project.category] || categories.all;
  detail.innerHTML = `
    <div>
      <span class="detail-kicker">${category.label} / ${project.status}</span>
      <h3>${project.title}</h3>
      <p>${project.detail}</p>
      <div class="tag-row">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    <div>
      <div class="mini-chart" aria-hidden="true"></div>
      <p>
        Suggested project page sections: problem framing, model architecture,
        training or experiment setup, results, limitations, and next steps.
      </p>
      <div class="detail-actions">
        <a href="${project.url}">Repository</a>
        <a href="#notebooks">Notebook slot</a>
        <a href="#writing">Article slot</a>
      </div>
    </div>
  `;
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderProjects();
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;
  activeProject = card.dataset.project;
  renderProjects();
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".project-card");
  if (!card) return;
  event.preventDefault();
  activeProject = card.dataset.project;
  renderProjects();
});

renderProjects();
