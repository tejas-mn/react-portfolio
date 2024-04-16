import { useUser } from "../../Providers/UserProvider";

function EducationDetail({ e }) {
  return (
    <p id={e.id} style={styles.eduPara} className={"edu-p"+e.id}>
      <span style={styles.dot}></span>
      <b>{e.title}</b>
      <i className="edu-timeline" style={styles.edu_timeline}>
        {" "}
        ({e.timeline})
      </i>
      <i style={styles.desc}>{e.desc}</i>
    </p>
  );
}

export default function Education() {
  const {data} = useUser();
  return (
    <section className="">
      <h2>🎓 Education</h2>
      {data.edu.map((e) => (
        <EducationDetail key={e.id} e={e} />
      ))}
    </section>
  );
}

const styles = {
  edu_timeline: { float: "right" },
  desc: { display: "block" },
  eduPara: { position: "relative", borderLeft: "2px solid var(--text-color-light)", padding: "10px", margin: "0 20px 0px 20px" },
  dot: {
    background: 'var(--text-color-light)',
    height: '15px',
    position: 'absolute',
    display: 'block',
    top: '-8px',
    left: '-8px',
    width: '15px',
    borderRadius: '100px',
    zIndex: 2,
  }
};
