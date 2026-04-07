import { SKILLS } from "./data";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div>
        <p>Product Designer & Developer</p>
        <h1 className="hero-title">
          Crafting <i>digital</i> experiences
        </h1>

        {/* <div>
          <button className="btn-primary">View my work</button>
          <button className="btn-ghost">About me</button>
        </div> */}
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