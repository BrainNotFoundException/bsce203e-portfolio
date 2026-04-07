import { PROJECTS } from "./data";

export default function Projects() {

    return (
        <section id="work" className="section">
            <h2 className="section-title">My Work:</h2>

            <div>
                {PROJECTS.map(p => (
                    <div
                        key={p.id}
                        className="project-card"
                    >
                        <div style={{ height: 100 }} />
                        <div>
                            <h4>{p.name}</h4>
                            <p>{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}