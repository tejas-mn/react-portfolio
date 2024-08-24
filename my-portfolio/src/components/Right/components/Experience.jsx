import { useUser } from "../../../Providers/UserProvider";
import { useAutoBoldText } from "../../../hooks/useAutoBoldText";

import {
  PaginationProvider,
  usePagination,
} from "../../../Providers/PaginationProvider";
import { Pagination } from "../../utils/components/Pagination";
import ExperienceDetail from "./ExperienceDetail";

function PaginatedItemList() {
  const paginatedExperience = usePagination().getPaginatedItems();
  return (
    <>
      {paginatedExperience.map((ex) => (
        <ExperienceDetail key={ex.id} e={ex} />
      ))}
    </>
  );
}

function ExperienceSection() {
  const { data } = useUser();
  return (<section className="right-01">
    <h2 style={{
      margin: 0
    }}>💼 Experience</h2>
    <p>{data.userInfo.experienceInfo}</p>
    <PaginationProvider items={data.exp} itemsPerPage={5}>
      <PaginatedItemList />
      <Pagination />
    </PaginationProvider>
  </section>)
}

function NewExpDetail({ e }) {
  useAutoBoldText();
  return (
    <p id={e.id} style={styles.eduPara} className={"edu-p" + e.id}>
      <span style={styles.dot}></span>
      <div>{e.timeline}</div>
      <b style={styles.title}>{e.company}</b>
      <i style={styles.desc}>{e.title}</i>
      <ul className="exp-ul">
        {e.desc.map((d) => (
          <li key={d} className="auto-format exp-list">{d}</li>
        ))}
      </ul>
    </p>
  );
}

function NewExp() {
  const { data } = useUser();
  return (
    <section className="right-01">
      <h2>💼 Experience</h2>
      {data.exp.map((e) => (
        <NewExpDetail key={e.id} e={e} />
      ))}
    </section>
  );
}

const styles = {
  edu_timeline: { float: "right" },
  desc: { display: "block" },
  eduPara: { position: "relative", borderLeft: "2px solid var(--text-color-light)", padding: "10px", paddingTop: '0px', margin: "0 20px 0px 20px" },
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
  },
  title: {
    fontSize: 'larger'
  }
};

export default function Experience() {
  return (
    <>
      <NewExp />
    </>
  );
}
