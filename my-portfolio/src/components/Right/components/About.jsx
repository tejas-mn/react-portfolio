import { Skills } from "./Skill";
import Education from "./Education";
import { useUser } from "../../../Providers/UserProvider";

export default function About() {
  return (
    <>
      <section className="right-01">
        <AboutMe />
        <Education />
        <Skills />
      </section>
    </>
  );
}

function AboutMe() {
  const { data } = useUser();

  return (
    <section>
      <h2>🖋️ About Me</h2>
      <p>{data.userInfo.aboutInfo}</p>
    </section>
  );
}