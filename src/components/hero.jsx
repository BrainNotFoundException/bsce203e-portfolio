import { SKILLS } from "./data";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div>
        <p>Product Designer & Developer</p>
        <h1 className="hero-title">
          Building Mostly Games
        </h1>
      </div>

      <div>
        <div className="card">
          <p>Skills</p>

          <div className="skills-list">
            {SKILLS.map(skill => (
              <span key={skill} className="skill-point">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}