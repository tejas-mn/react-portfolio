import { userInfo } from "../Providers/DataProvider"

export function PicContainer(){
    return (
        <div className="pic-container">
            <div className="pic">
                <img src={userInfo.profilePic}></img>
            </div>
            <div className="pic-desc">
                <h2>{userInfo.name}</h2>
                <p><b><i>💻{userInfo.profession}</i></b></p>
            </div>
       </div>
    )
}