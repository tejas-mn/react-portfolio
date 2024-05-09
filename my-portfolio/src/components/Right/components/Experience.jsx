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

function ExperienceSection() {
  const { data } = useUser();
  return (<section className="right-01">
    <h2 style={{
      margin: 0
    }}>💼 Experience</h2>
    <p>{data.userInfo.experienceInfo}</p>
    <PaginationProvider items={data.exp} itemsPerPage={2}>
      <PaginatedItemList />
      <Pagination />
    </PaginationProvider>
  </section>)
}

export default function Experience() {
  return (
    <>
      <ExperienceSection />
    </>
  );
}
