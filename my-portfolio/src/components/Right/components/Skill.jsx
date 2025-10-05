import { useUser } from "../../../Providers/UserProvider";
import "../../../tooltip.css";
import { motion } from "framer-motion";

function Skill({ skill, level }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="tooltip">
        {skill}
        {/* <span className="tooltiptext">{level}</span> */}
      </motion.div>
    </>
  );
}

export function Skills() {
  const { data } = useUser();
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
