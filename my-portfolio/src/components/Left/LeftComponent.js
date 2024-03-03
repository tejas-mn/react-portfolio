import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";
import { useTheme } from "../../Providers/ThemeProvider";
import "./Left.css";

export function LeftComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="left">
        <PicContainer />
        <div className="btm-txt">
          <ProfileDetails />
          <ProfileLinks />
        </div>
        <button
          style={styles.btn}
          className="view-btn theme-btn"
          onClick={() => toggleTheme()}
        >
          {theme === "light-theme" ? "🌗" : "🌓"}
        </button>
      </div>
    </>
  );
}

const styles = {
  btn: { marginTop: "30px", borderRadius: "100px" },
};
