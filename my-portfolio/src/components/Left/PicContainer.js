import { useState,useEffect } from "react";
import { userInfo } from "../../Providers/DataProvider";
import { useTheme } from "../../Providers/ThemeProvider";

export function PicContainer() {
  const { theme } = useTheme();
  const [banner, setBanner] = useState(userInfo.bannerImages[6]);

  const bg = {
    "light-theme": userInfo.bannerImages[6],
    "dark-theme": userInfo.bannerImages[5]
  }

  useEffect(() => {
    setBanner(bg[theme])
    // eslint-disable-next-line
  }, [theme]);

  return (
    <div style={{
      width: '100%',
      position: 'relative'
    }}>
      <img className="banner-img" src={banner}></img>
      <div className="pic-container">
        <div className="pic" style={styles.pic}>
          <img src={userInfo.profilePic} alt={userInfo.name}></img>
        </div>
        <div className="pic-desc">
          <h2>{userInfo.name}</h2>
          <p>
            <b>
              <i>💻{userInfo.profession}</i>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pic: {
    boxShadow: "rgb(255 255 255 / 31%) 0px 0px 30px",
  },
};
