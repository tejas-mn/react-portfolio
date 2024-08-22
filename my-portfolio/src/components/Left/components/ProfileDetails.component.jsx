import { useUser } from "../../../Providers/UserProvider";
import { EmailSvg, Locationsvg } from "../../utils/components/Svg";
import styles from "../styles/Left.module.css";
import { useAlert } from "../../../Providers/AlertProvider";

export function ProfileDetails() {
  const {data} = useUser();

  return (
    <>
      <p>{data.userInfo.headline}</p>
      <div className={styles.skills2}>
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
        <a href={`mailto:${data.userInfo.email}`} className={styles.anchor}>
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
  const { showAlert } = useAlert();
  return (
    <div className={styles.resumeBtn} onClick={(e)=>{
      if(data.userInfo.links.resume === '' || data.userInfo.links.resume === undefined || data.userInfo.links.resume === null){
        e.preventDefault();
        showAlert({
          message: "Currently unavailable",
          type: "warning"
        });
      }
    }}>
      <a className={styles.anchor} href={data.userInfo.links.resume} target="blank">
        <span className={styles.btnText}>📝</span> My Resume
      </a>
    </div>
  );
}

