import { useAutoBoldText } from "../../../hooks/useAutoBoldText";

export default function ExperienceDetail({ e }) {
  useAutoBoldText();

  return (
    <div style={styles.expDetail}>
      <div key={e.id} style={styles.titleBorder}>
        <h5>{e.company} </h5> <i style={styles.timeline}> ({e.timeline})</i>
        <b style={styles.title}>
          <i>{e.title}</i>
        </b>
      </div>
      <ul className="exp-ul">
        {e.desc.map((d) => (
          <li key={d} className="auto-format exp-list">{d}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  titleBorder: { borderLeft: "5px solid lightblue", paddingLeft: "5px" },
  timeline: { float: "right" },
  title: { display: "block" },
  expDetail: {
    padding: '10px',
    textAlign: 'justify',
    color: 'var(--text-color-light)',
    fontSize: '1.2rem',
  }
};
