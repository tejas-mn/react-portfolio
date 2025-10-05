import { useUser } from "../../../Providers/UserProvider";
import { EmailSvg, Locationsvg } from "../../utils/components/Svg";
import styles from "../styles/Left.module.css";
import { useAlert } from "../../../Providers/AlertProvider";
import { motion } from "framer-motion";

export function ProfileDetails() {
  const { data } = useUser();

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
  const { data } = useUser();

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
  const { data } = useUser();
  const { showAlert } = useAlert();
  return (
    <motion.div
      animate={{
        background: [
          //           "radial-gradient(circle at 0% 50%, #ffffffff, #e9e7dfff 70%)",
          // "radial-gradient(circle at 50% 50%, #e9e7dfff, #ffffffff 70%)",
          // "radial-gradient(circle at 100% 50%, #e9e7dfff, #ffffffff 70%)",
          "radial-gradient(circle at 0% 50%, #ffd18a, #ffb84d 70%)",
          "radial-gradient(circle at 50% 50%, #ffdf6b, #ffb84d 70%)",
          "radial-gradient(circle at 100% 50%, #ffd18a, #ffb84d 70%)",
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className={styles.resumeBtn} onClick={(e) => {
        if (data.userInfo.links.resume === '' || data.userInfo.links.resume === undefined || data.userInfo.links.resume === null) {
          e.preventDefault();
          showAlert({
            message: "Currently unavailable",
            type: "warning"
          });
        }
      }}>
      <a className={styles.anchor} href={data.userInfo.links.resume} target="blank">
        <span className={styles.btnText}>📝</span> Resume
      </a>
    </motion.div>
  );
}

