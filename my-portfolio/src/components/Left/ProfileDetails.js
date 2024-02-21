import { userInfo } from "../../Providers/DataProvider";

export function ProfileDetails() {
  return (
    <>
      <p>{userInfo.headline}</p>
      <div className="skills2">
        <div>
          <li>
            <svg
              style={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              aria-hidden="true"
              role="none"
              fill="currentColor"
            >
              <path d="M2 4v13a3 3 0 003 3h14a3 3 0 003-3V4zm18 2v1.47l-8 5.33-8-5.33V6zm-1 12H5a1 1 0 01-1-1V8.67L12 14l8-5.33V17a1 1 0 01-1 1z" />
            </svg>{" "}
            {userInfo.email}
          </li>
        </div>
        <div>
          <li>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 12 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.svg}
            >
              <path
                fill-rule="evenodd"
                d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
              ></path>
            </svg>{" "}
            {userInfo.location}
          </li>
        </div>
        <div className="resume-btn">
          <a style={styles.anchor} href={userInfo.links.resume} target="blank">
            <li>
              <span style={styles.btnText}>📝</span> My Resume
            </li>
          </a>
        </div>
      </div>
    </>
  );
}

const styles = {
  svg: {
    display: "inline",
    position: "relative",
    bottom: "-2px",
  },
  anchor: { textDecoration: "none" },
  btnText: { fontSize: "large" },
};
