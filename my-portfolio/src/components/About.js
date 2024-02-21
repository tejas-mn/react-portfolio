import { Skills } from "./Skill";
import { edu, userInfo } from "../Providers/DataProvider";

export function About() {
  return (
    <section>
      <AboutMe />
      <Education />
      <Skills />
    </section>
  );
}

function AboutMe() {
  return (
    <>
      <h2>🖋️ About Me</h2>
      <p>{userInfo.aboutInfo}</p>
    </>
  );
}

function Education() {
  return (
    <>
      <section>
        <h2>🎓 Education</h2>
        {edu.map((e) => (
          <>
            <p id={e.id}>
              <b>{e.title}</b>
              <i className="edu-timeline" style={styles.edu_timeline}>
                {" "}
                ({e.timeline})
              </i>
              <i style={styles.desc}>{e.desc}</i>
            </p>
          </>
        ))}
      </section>
    </>
  );
}

const styles = {
  edu_timeline: { float: "right" },
  desc: { display: "block" },
};