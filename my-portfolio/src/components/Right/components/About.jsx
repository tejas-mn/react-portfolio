import { Skills } from "./Skill";
import Education from "./Education";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import { useUser } from "../../../Providers/UserProvider";

export default function About() {
  return (
    <>
      <section className="right-01">
        <AboutMe />
      </section>

      <section className="right-01">
        <Education />
      </section>

  
        <Experience />
   

      <section className="right-01">
        <Skills />
      </section>


        <Work/>

        <Contact/>
    
    </>
  );
}

function AboutMe() {
  const { data } = useUser();

  return (
    <section>
      <h2>🖋️ About Me</h2>
      <p style={{
        marginBottom:'0px'
      }}>{data.userInfo.aboutInfo}</p>
    </section>
  );
}