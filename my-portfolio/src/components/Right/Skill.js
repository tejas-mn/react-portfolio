import { skills } from "../../Providers/DataProvider";

function Skill({ skill }) {
  return (
    <div>
      {skill}
    </div>
  );
}

export function Skills() {
  return (
    <section>
      <h2 className="tech-skills-heading">⚡ Tech Skills</h2>
      <div className="skills">
        {skills.map((ele) => (
          <Skill key={ele} skill={ele} />
        ))}
      </div>
    </section>
  );
}
