import { userInfo } from "../../Providers/DataProvider";
import {
  GithubProfileSvg,
  LinkedinProfileSvg,
  LeetCodeProfileSvg,
} from "../utils/Svg";

export function ProfileLinks() {
  return (
    <p>
      <a href={userInfo.links.github} target="blank" aria-label="github link">
        <span>
          <GithubProfileSvg />
        </span>
      </a>

      <a href={userInfo.links.linkedin} target="blank" aria-label="linkedin link">
        <span>
          <LinkedinProfileSvg />
        </span>
      </a>

      <a href={userInfo.links.leetcode} target="blank" aria-label="leetcode link">
        <span>
          <LeetCodeProfileSvg />
        </span>
      </a>
    </p>
  );
}