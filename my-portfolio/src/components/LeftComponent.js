import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";
import { useTheme } from "../Providers/ThemeProvider";
import { Link } from "react-router-dom";
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
        style={{ marginTop: "30px", borderRadius: "100px" }}
        className="view-btn theme-btn"
        onClick={() => toggleTheme()}
      >
        {theme === "light-theme" ? "🌗" : "🌓"}
      </button>
     
    </div>
    </>
    
  );
}
