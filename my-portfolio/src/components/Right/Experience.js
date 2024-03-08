import { exp, userInfo } from "../../Providers/DataProvider";
import {
  PaginationProvider,
  usePagination,
} from "../../Providers/PaginationProvider";
import { Pagination } from "../utils/Pagination";
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
