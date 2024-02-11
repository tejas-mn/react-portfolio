import { exp, userInfo } from "../Providers/DataProvider";
import {
  PaginationProvider,
  usePagination,
} from "../Providers/PaginationProvider";
import { Pagination } from "./Pagination";
import { useAutoBoldText } from "../Providers/customHooks";

function PaginatedItemList() {
  const paginatedExperience = usePagination().getPaginatedItems();

  return (
    <>
      {paginatedExperience.map((ex) => (
        <ExperienceDetail e={ex} />
      ))}
    </>
  );
}

export function Experience() {
  return (
    <section>
      <h2>💼 Experience</h2>
      <p>{userInfo.experienceInfo}</p>

      <PaginationProvider items={exp} itemsPerPage={2}>
        <PaginatedItemList />
        <Pagination />
      </PaginationProvider>
    </section>
  );
}

function ExperienceDetail({ e }) {
  useAutoBoldText();

  return (
    <>
      <p key={e.id}>
        <div style={{ borderLeft: "5px solid lightblue", paddingLeft: "5px" }}>
          <b>{e.company} </b> <i style={{ float: "right" }}> ({e.timeline})</i>{" "}
          <br />
          <i>{e.title}</i>
        </div>
        <ul>
          {e.desc.map((d) => (
            <li className="auto-format">{d}</li>
          ))}
        </ul>
      </p>
    </>
  );
}
