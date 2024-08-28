import { useEffect, useRef } from "react";
import { useTheme } from "../../../Providers/ThemeProvider";
import { useUser } from "../../../Providers/UserProvider";
import styles from "../styles/Left.module.css";

export const PicContainer = () => {
  const { theme } = useTheme();
  const { data } = useUser();

  const bg = {
    "light-theme": data.userInfo.bannerImages.lightBanner,
    "dark-theme": data.userInfo.bannerImages.darkBanner
  }

  const banner = useRef();

  useEffect(() => {
    banner.current.src = bg[theme];
  }, [theme]);

  return (
    <div className={styles.containerStyle}>
      <img className={styles.bannerImg} ref={banner} alt="Banner" rel="dns-prefetch" />
      <div className={styles.picContainer}>
        <div className={ styles.pic + " " + styles.picStyle}>
          <img src={data.userInfo.profilePic} alt="Profile" rel="dns-prefetch" />
        </div>
        <div className={styles.picDesc}>
          <h2>{data.userInfo.name}</h2>
          <p>
            <b>{data.userInfo.profession}</b>
          </p>
        </div>
      </div>
    </div>
  );
};