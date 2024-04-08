import { skills } from "../../Providers/DataProvider";
import "../../tooltip.css";

function Skill({ skill, level }) {
  return (
    <>
      <div className="tooltip">
        {skill}
        <span className="tooltiptext">{level}</span>
      </div>
    </>
  );
}

export function Skills() {
  return (
    <section>
      <h2 className="tech-skills-heading">⚡ Tech Skills</h2>
      <div className="skills">
        {skills.map((ele) => (
          <Skill key={ele.id} skill={ele.name} level={ele.level} />
        ))}
      </div>
    </section>
  );
}
