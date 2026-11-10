const projects = [
  {
    title: "Project One",
    text: "A short description of what this project does and the tech you used.",
    link: "https://github.com/fazeela-imam-0/project-one",
  },
  {
    title: "Project Two",
    text: "Another project. Mention what problem it solves.",
    link: "https://github.com/fazeela-imam-0/project-two",
  },
  {
    title: "Project Three",
    text: "Something from your web engineering lab work.",
    link: "https://github.com/fazeela-imam-0/project-three",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub", "Vite"];

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#top">fazeela imam</a>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img
            src="/profile.svg"
            alt="Illustration of a developer avatar"
            className="avatar"
            width="160"
            height="160"
          />
          <h1>Hi, I'm fazeela imam</h1>
          <p className="tagline">
            Student at IBA Sukkur learning to build fast, accessible web apps.
          </p>
          <a className="btn" href="#projects">See my work</a>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I'm a computer science student interested in web engineering. I
            enjoy turning ideas into clean, responsive websites and learning
            new tools along the way.yes.
          </p>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="products">
            {projects.map((p) => (
              <article className="product" key={p.title}>
                <img
                  src="/project.svg"
                  alt={`Preview thumbnail for ${p.title}`}
                  width="300"
                  height="160"
                />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href={p.link} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Want to work together or just say hi?</p>
          <p>
            <a href="mailto:fazeelaimamabbasi.bscsf24@iba-suk.edu.pk ">fazeelaimamabbasi.bscsf24@iba-suk.edu.pk </a> ·{" "}
            <a href="https://github.com/fazeela-imam-0" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} fazeela imam. Built with React and Vite.</p>
      </footer>
    </>
  );
}