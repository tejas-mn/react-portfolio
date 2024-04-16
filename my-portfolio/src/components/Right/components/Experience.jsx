import { useUser } from "../../../Providers/UserProvider";

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

export default function Experience() {
  const {data} = useUser();

  return (
    <section>
      <h2>💼 Experience</h2>
      <p>{data.userInfo.experienceInfo}</p>
      <PaginationProvider items={data.exp} itemsPerPage={2}>
        <PaginatedItemList />
        <Pagination />
      </PaginationProvider>
    </section>
  );
}
