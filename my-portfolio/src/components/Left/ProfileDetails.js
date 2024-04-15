import { userInfo } from "../../Providers/DataProvider";
import { useUser } from "../../Providers/UserProvider";
import { EmailSvg, Locationsvg } from "../utils/Svg";

export function ProfileDetails() {
  const {data} = useUser();

  return (
    <>
      <p>{data.userInfo.headline}</p>
      <div className="skills2">
        <ContactInfo />
        <ResumeButton />
      </div>
    </>
  );
}

function ContactInfo() {
  const {data} = useUser();

  return (
    <>
      <div>
        <a href={`mailto:${data.userInfo.email}`} style={styles.anchor}>
          <EmailSvg /> {data.userInfo.email}
        </a>
      </div>
      <div>
        <Locationsvg /> {data.userInfo.location}
      </div>
    </>
  );
}

function ResumeButton() {
  const {data} = useUser();
  return (
    <div className="resume-btn">
      <a style={styles.anchor} href={data.userInfo.links.resume} target="blank">
        <span style={styles.btnText}>📝</span> My Resume
      </a>
    </div>
  );
}

const styles = {
  anchor: { textDecoration: "none" , color:'inherit'},
  btnText: { fontSize: "large" },
};
