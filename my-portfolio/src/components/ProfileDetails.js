import { userInfo } from "../Providers/DataProvider";

export function ProfileDetails() {
  return (
    <>
      <p>{userInfo.headline}</p>

      <div className="skills2">
        <div>
          <li>
            <span style={{ fontSize: "medium" }}></span> {userInfo.email}
          </li>
        </div>
        <div>
          <li>
            <span style={{ fontSize: "large" }}></span> {userInfo.location}
          </li>
        </div>
        <div className="resume-btn">
          <a
            style={{ color: "white", textDecoration: "none" }}
            href={userInfo.links.resume}
            target="blank"
          >
            <li>
              <span style={{ fontSize: "large" }}>📝</span> My Resume{" "}
            </li>
          </a>
        </div>
      </div>
    </>
  );
}
