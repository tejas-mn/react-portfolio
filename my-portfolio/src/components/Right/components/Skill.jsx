import { useUser } from "../../../Providers/UserProvider";
import "../../../tooltip.css";

function Skill({ skill, level }) {
  return (
    <>
      <div className="tooltip">
        {skill}
        {/* <span className="tooltiptext">{level}</span> */}
      </div>
    </>
  );
}

export function Skills() {
  const {data} = useUser();
  return (
    <section>
      <h2 className="tech-skills-heading">⚡ Tech Skills</h2>
      <div className="skills">
        {data.skills.map((ele) => (
          <Skill key={ele.id} skill={ele.name} level={ele.level} />
        ))}
      </div>
    </section>
  );
}
