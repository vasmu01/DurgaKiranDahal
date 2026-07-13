import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  HeartPulse,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const profile = {
  name: "Kiran Magar",
  role: "Full-Stack Developer",
  subtitle: "Machine Learning Enthusiast",
  location: "Kathmandu, Nepal",
  email: "magarkiran2064@gmail.com",
  github: "https://github.com/vasmu01",
  instagram: "https://www.instagram.com/vasmeyy_",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Python", "Django", "PHP", "Laravel", "MySQL", "REST fundamentals"],
  },
  {
    title: "Machine Learning",
    icon: Sparkles,
    items: ["scikit-learn", "Pandas", "NumPy", "Data preprocessing", "Model integration"],
  },
  {
    title: "Tools & Deployment",
    icon: Code2,
    items: ["Git", "GitHub", "Docker", "Linux", "Render", "Vite", "VS Code"],
  },
];

const projects = [
  {
    title: "VitaPredica",
    subtitle: "Disease Prediction System",
    description:
      "A Django and machine-learning web application with independent prediction modules for diabetes, heart disease, lung cancer and breast cancer.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdiseasepredictionsystem-1475.onrender.com%2F?w=1200",
    fallback: "AI-powered health risk prediction platform",
    tags: ["Django", "Python", "Machine Learning", "Docker", "Render"],
    github: "https://github.com/vasmu01/DiseasePredictionSystem",
    live: "https://diseasepredictionsystem-1475.onrender.com",
    featured: true,
    icon: HeartPulse,
  },
  {
    title: "Hotel Reservation",
    subtitle: "Tourism Management System",
    description:
      "A Laravel-based hotel and tourism management application built around reservation, customer and travel-service workflows.",
    image:
      "https://opengraph.githubassets.com/portfolio/vasmu01/Hotel-Reservation-And-Tourism-Management-System",
    fallback: "Hotel reservation and tourism management",
    tags: ["Laravel", "PHP", "Blade", "MySQL", "Docker"],
    github:
      "https://github.com/vasmu01/Hotel-Reservation-And-Tourism-Management-System",
    icon: BriefcaseBusiness,
  },
  {
    title: "TrekNepal",
    subtitle: "Nepal Trekking Platform",
    description:
      "A Django project focused on presenting trekking and travel experiences in Nepal through a web-based interface.",
    image: "https://opengraph.githubassets.com/portfolio/vasmu01/TrekNepal",
    fallback: "Trekking and travel experiences in Nepal",
    tags: ["Python", "Django", "HTML", "CSS"],
    github: "https://github.com/vasmu01/TrekNepal",
    icon: MapPin,
  },
  {
    title: "Hotel View",
    subtitle: "Hotel Website Interface",
    description:
      "A Laravel web project for hotel-related pages, visual components and backend-development practice.",
    image: "https://opengraph.githubassets.com/portfolio/vasmu01/Hotel-View",
    fallback: "Modern hotel website interface",
    tags: ["Laravel", "PHP", "Blade", "CSS"],
    github: "https://github.com/vasmu01/Hotel-View",
    icon: Layers3,
  },
  {
    title: "Java Programs",
    subtitle: "Programming Practice",
    description:
      "A growing collection of Java programs created while practising core programming concepts and problem-solving.",
    image: "https://opengraph.githubassets.com/portfolio/vasmu01/JavaPrograms",
    fallback: "Java fundamentals and problem-solving",
    tags: ["Java", "OOP", "Problem Solving"],
    github: "https://github.com/vasmu01/JavaPrograms",
    icon: Code2,
  },
  {
    title: "OJT2",
    subtitle: "Frontend Practice Project",
    description:
      "A frontend-focused repository containing practical HTML work developed during learning and project practice.",
    image: "https://opengraph.githubassets.com/portfolio/vasmu01/OJT2",
    fallback: "HTML frontend practice project",
    tags: ["HTML", "CSS", "Frontend"],
    github: "https://github.com/vasmu01/OJT2",
    icon: Code2,
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="icon-button"
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const current = [...navItems]
        .reverse()
        .find(({ href }) => {
          const element = document.querySelector(href);
          return element && window.scrollY >= element.offsetTop - 160;
        });

      if (current) setActive(current.href.slice(1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Go home">
        <span className="brand__mark">K</span>
        <span>Kiran<span className="brand__dot">.</span></span>
      </a>

      <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            className={active === item.href.slice(1) ? "active" : ""}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-cta mobile-only" href={`mailto:${profile.email}`}>
          Let's talk <ArrowRight size={16} />
        </a>
      </nav>

      <div className="nav-actions">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <a className="nav-cta desktop-only" href={`mailto:${profile.email}`}>
          Let's talk <ArrowRight size={16} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="hero__content" data-reveal>
        <div className="eyebrow">
          <span className="status-dot" />
          Available for new opportunities
        </div>

        <p className="hero__hello">Hello, I'm</p>
        <h1>
          Kiran <span>Magar</span>
        </h1>
        <h2>
          I build <span className="gradient-text">useful digital experiences.</span>
        </h2>
        <p className="hero__description">
          A full-stack developer and machine-learning enthusiast creating responsive
          web applications, intelligent systems and deployment-ready projects.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            Explore my work <ArrowRight size={18} />
          </a>
          <a
            className="button button--secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub profile
          </a>
        </div>

        <div className="hero__meta">
          <span><MapPin size={16} /> {profile.location}</span>
          <span><Code2 size={16} /> Web + ML development</span>
        </div>
      </div>

      <div className="hero__visual" data-reveal>
        <div className="profile-orbit">
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="profile-card">
            <div className="profile-card__image-wrap">
              <img
                src="https://github.com/vasmu01.png"
                alt="Kiran Magar"
                className="profile-card__image"
              />
            </div>
            <div className="profile-card__details">
              <span>Developer profile</span>
              <strong>{profile.name}</strong>
              <p>{profile.role}</p>
            </div>
          </div>

          <div className="floating-chip floating-chip--top">
            <Sparkles size={16} /> Machine Learning
          </div>
          <div className="floating-chip floating-chip--bottom">
            <Code2 size={16} /> Full-Stack
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  const highlights = [
    "Responsive, accessible user interfaces",
    "Django and Laravel backend development",
    "Machine-learning model integration",
    "Docker and cloud deployment workflows",
  ];

  return (
    <section className="section section-shell" id="about">
      <SectionHeading
        label="About me"
        title="Learning, building and improving with every project."
        description="I enjoy turning practical ideas into clean digital products while strengthening both frontend and backend development skills."
      />

      <div className="about-grid">
        <article className="about-card about-card--story" data-reveal>
          <div className="about-card__icon"><Code2 /></div>
          <h3>Developer with a practical mindset</h3>
          <p>
            I am a developer from Kathmandu, Nepal, focused on building web
            applications that combine thoughtful interfaces with dependable backend
            logic. My projects include healthcare machine learning, hotel management,
            tourism and programming practice.
          </p>
          <p>
            I work with Python, Django, PHP, Laravel, JavaScript, React and Docker.
            I am currently improving production deployment, APIs, application security
            and modern frontend architecture.
          </p>
        </article>

        <article className="about-card about-card--list" data-reveal>
          <span className="mini-label">What I bring</span>
          <h3>From idea to deployed application</h3>
          <div className="check-list">
            {highlights.map((highlight) => (
              <div key={highlight}>
                <span><Check size={16} /></span>
                {highlight}
              </div>
            ))}
          </div>
          <a href="#contact" className="text-link">
            Start a conversation <ArrowRight size={16} />
          </a>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-shell" id="skills">
      <SectionHeading
        label="Capabilities"
        title="Technologies I use to build."
        description="A growing toolkit across frontend, backend, machine learning and modern development workflows."
      />

      <div className="skills-grid">
        {skills.map(({ title, icon: Icon, items }, index) => (
          <article
            className="skill-card"
            data-reveal
            key={title}
            style={{ "--delay": `${index * 80}ms` }}
          >
            <div className="skill-card__header">
              <span><Icon size={22} /></span>
              <h3>{title}</h3>
            </div>
            <div className="skill-tags">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);
  const Icon = project.icon;

  return (
    <div className={`project-card__media ${failed ? "project-card__media--fallback" : ""}`}>
      {!failed ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-fallback">
          <Icon size={38} />
          <span>{project.fallback}</span>
        </div>
      )}
      {project.featured && <span className="featured-badge">Featured project</span>}
    </div>
  );
}

function Projects() {
  return (
    <section className="section section-shell" id="projects">
      <SectionHeading
        label="Selected work"
        title="Projects built through real practice."
        description="Explore source code, technologies and the live deployment of my featured project."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.featured ? "project-card--featured" : ""}`}
            key={project.title}
            data-reveal
            style={{ "--delay": `${(index % 3) * 90}ms` }}
          >
            <ProjectImage project={project} />
            <div className="project-card__body">
              <span className="project-card__subtitle">{project.subtitle}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <div className="project-card__actions">
                {project.live && (
                  <a
                    className="button button--small button--primary"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <ExternalLink size={16} />
                  </a>
                )}
                <a
                  className="button button--small button--secondary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> Source code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer" data-reveal>
        <p>More experiments and learning projects are available on my GitHub.</p>
        <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
          View all repositories <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-shell" id="contact">
      <div className="contact-card" data-reveal>
        <div className="contact-card__glow" />
        <div>
          <span className="section-label">Get in touch</span>
          <h2>Have a project, opportunity or idea?</h2>
          <p>
            I am open to learning opportunities, collaborations and developer roles.
            Send me a message and I will be happy to connect.
          </p>
        </div>

        <div className="contact-card__actions">
          <a className="button button--light" href={`mailto:${profile.email}`}>
            <Mail size={18} /> Send an email
          </a>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="brand" href="#home">
        <span className="brand__mark">K</span>
        <span>Kiran<span className="brand__dot">.</span></span>
      </a>
      <p>Designed and built with React by Kiran Magar.</p>
      <span>© {new Date().getFullYear()} All rights reserved.</span>
    </footer>
  );
}

function App() {
  const preferredTheme = useMemo(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }, []);

  const [theme, setTheme] = useState(preferredTheme);
  const [showTop, setShowTop] = useState(false);

  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <a
        className={`back-to-top ${showTop ? "back-to-top--visible" : ""}`}
        href="#home"
        aria-label="Back to top"
      >
        <ArrowUp size={19} />
      </a>
    </>
  );
}

export default App;
