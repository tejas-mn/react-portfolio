import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";
import { ThemeContext } from '../Providers/ThemeProvider';
import { useContext } from 'react';


export  function LeftComponent(){
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="left">
      <PicContainer/>
      <div className="btm-txt">
        <ProfileDetails/>
        <ProfileLinks/>
      </div>
      <button style={{marginTop:'30px', borderRadius:'100px'}} className='view-btn' onClick={() => toggleTheme()}>
          {(theme=='light-theme')?'🌗':'🌓'}
      </button>
    </div>
  )
}