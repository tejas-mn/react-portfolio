import { PicContainer } from "./PicContainer";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileLinks } from "./ProfileLinks";

export  function LeftComponent(){
    return (
      <div className="left">
        <PicContainer/>
        {/* <div className="desc"> </div> */}
        <div className="btm-txt">
          <ProfileDetails/>
          {/* <hr></hr> */}
          <ProfileLinks/>
        </div>
      </div>
    )
}