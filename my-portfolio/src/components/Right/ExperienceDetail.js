import { useAutoBoldText } from "../../hooks/customHooks";

export default function ExperienceDetail({ e }) {
  useAutoBoldText();

  return (
    <>
      <p key={e.id}>
        <div key={e.id} style={styles.titleBorder}>
          <h5>{e.company} </h5> <i style={styles.timeline}> ({e.timeline})</i>
          <b style={styles.title}>
            <i>{e.title}</i>
          </b>
        </div>
        <ul className="exp-ul">
          {e.desc.map((d) => (
            <>
              <li key={e.id} className="auto-format exp-list">{d}</li>
            </>
          ))}
        </ul>
      </p>
    </>
  );
}

const styles = {
  titleBorder: { borderLeft: "5px solid lightblue", paddingLeft: "5px" },
  timeline: { float: "right" },
  title: { display: "block" },
};