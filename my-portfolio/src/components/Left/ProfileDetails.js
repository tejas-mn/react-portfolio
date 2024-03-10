import { userInfo } from "../../Providers/DataProvider";
import { EmailSvg, Locationsvg } from "../utils/Svg";

export function ProfileDetails() {
  return (
    <>
      <p>{userInfo.headline}</p>
      <div className="skills2">
        <ContactInfo />
        <ResumeButton />
      </div>
    </>
  );
}

function ContactInfo() {
  return (
    <>
      <div>
        <a href={`mailto:${userInfo.email}`} style={styles.anchor}>
          <EmailSvg /> {userInfo.email}
        </a>
      </div>
      <div>
        <Locationsvg /> {userInfo.location}
      </div>
    </>
  );
}

function ResumeButton() {
  return (
    <div className="resume-btn">
      <a style={styles.anchor} href={userInfo.links.resume} target="blank">
        <span style={styles.btnText}>📝</span> My Resume
      </a>
    </div>
  );
}

const styles = {
  anchor: { textDecoration: "none" , color:'inherit'},
  btnText: { fontSize: "large" },
};
