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
          <li>
            <EmailSvg /> {userInfo.email}
          </li>
        </a>
      </div>
      <div>
        <li>
          <Locationsvg /> {userInfo.location}
        </li>
      </div>
    </>
  );
}

function ResumeButton() {
  return (
    <div className="resume-btn">
      <a style={styles.anchor} href={userInfo.links.resume} target="blank">
        <li>
          <span style={styles.btnText}>📝</span> My Resume
        </li>
      </a>
    </div>
  );
}

const styles = {
  anchor: { textDecoration: "none" },
  btnText: { fontSize: "large" },
};
