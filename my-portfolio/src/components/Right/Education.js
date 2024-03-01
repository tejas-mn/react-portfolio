import { edu } from "../../Providers/DataProvider";

function EducationDetail({e}) {
  return (
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
  );
}

export default function Education() {
  return (
    <>
      <section>
        <h2>🎓 Education</h2>
        {edu.map((e) => (
          <EducationDetail e={e}/>
        ))}
      </section>
    </>
  );
}

const styles = {
  edu_timeline: { float: "right" },
  desc: { display: "block" },
};
