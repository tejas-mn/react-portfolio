import { useEffect, useRef } from "react";
import { userInfo } from "../../Providers/DataProvider";
import { useTheme } from "../../Providers/ThemeProvider";
import { useUser } from "../../Providers/UserProvider";

const bg = {
  "light-theme": userInfo.bannerImages[6],
  "dark-theme": userInfo.bannerImages[5]
};

export const PicContainer = () => {
  const { theme } = useTheme();
  const { data } = useUser();

  const banner = useRef();

  useEffect(() => {
    banner.current.src = bg[theme];
  }, [theme]);

  return (
    <div style={styles.containerStyle}>
      <img className="banner-img" ref={banner} alt="Banner" />
      <div className="pic-container">
        <div className="pic" style={styles.picStyle}>
          <img src={userInfo.profilePic} alt="Profile picture" />
        </div>
        <div className="pic-desc">
          <h2>{data.userInfo.name}</h2>
          <p>
            <b>💻{data.userInfo.profession}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    width: '100%',
    position: 'relative'
  },

  picStyle: {
    boxShadow: "rgb(255 255 255 / 31%) 0px 0px 30px"
  }
}
