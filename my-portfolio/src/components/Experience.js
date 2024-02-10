import { exp, userInfo } from "../Providers/DataProvider";

export function Experience() {
  return (
    <section>
      <h2>💼 Experience</h2>
      <p>{userInfo.experienceInfo}</p>
      {exp.map((ex) => (
        <ExperienceDetail e={ex} />
      ))}
    </section>
  );
}

function ExperienceDetail({ e }) {
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
            <li>{d}</li>
          ))}
        </ul>
      </p>
    </>
  );
}
