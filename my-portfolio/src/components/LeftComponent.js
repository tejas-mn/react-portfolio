import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";

export  function LeftComponent(){
  return (
    <div className="left">
      <PicContainer/>
      <div className="btm-txt">
        <ProfileDetails/>
        <ProfileLinks/>
      </div>
    </div>
  )
}