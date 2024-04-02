import { Skills } from "./Skill";
import Education from "./Education";
import { userInfo } from "../../Providers/DataProvider";

export default function About() {
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
    <section>
      <h2>🖋️ About Me</h2>
      <p>{userInfo.aboutInfo}</p>
    </section>
  );
}