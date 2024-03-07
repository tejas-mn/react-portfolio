import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";
import { useTheme } from "../../Providers/ThemeProvider";
import "./Left.css";
import { useFeatureToggle } from "../../Providers/FeatureProvider";
import { Features } from "../../Providers/Features";

export function LeftComponent() {
  const { theme, toggleTheme } = useTheme();
  const { features } = useFeatureToggle();

  return (
    <>
      <div className="left">
        <PicContainer />
        <div className="btm-txt">
          <ProfileDetails />
          <ProfileLinks />
        </div>
        {
          features[Features.THEME_TOGGLE] && <button
            style={styles.btn}
            className="view-btn theme-btn"
            onClick={() => toggleTheme()}
          >
            {theme === "light-theme" ? "🌗" : "🌓"}
          </button>
        }
      </div>
    </>
  );
}

const styles = {
  btn: { marginTop: "30px", borderRadius: "100px" },
};
