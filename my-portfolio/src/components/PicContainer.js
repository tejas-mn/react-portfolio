import { userInfo } from "../Providers/DataProvider";

export function PicContainer() {
  return (
    <div className="pic-container">
      <div className="pic" style={{
        boxShadow: 'rgb(255 255 255 / 31%) 0px 0px 30px'
      }}>
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
  );
}
