import { userInfo } from "../../Providers/DataProvider";
import {
  GithubProfileSvg,
  LinkedinProfileSvg,
  LeetCodeProfileSvg,
} from "../utils/Svg";

export function ProfileLinks() {
  return (
    <p>
      <a href={userInfo.links.github} target="blank">
        <span>
          <GithubProfileSvg />
        </span>
      </a>

      <a href={userInfo.links.linkedin} target="blank">
        <span>
          <LinkedinProfileSvg />
        </span>
      </a>

      <a href={userInfo.links.leetcode} target="blank">
        <span>
          <LeetCodeProfileSvg />
        </span>
      </a>
    </p>
  );
}