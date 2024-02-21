import { Skills } from "./Skill";
import Education from "./Education";
import { userInfo } from "../../Providers/DataProvider";

export function About() {
  return (
    <section>
      <AboutMe />
      <Education />
      <Skills />
    </section>
  );
}

function AboutMe() {
  return (
    <>
      <h2>🖋️ About Me</h2>
      <p>{userInfo.aboutInfo}</p>
    </>
  );
}