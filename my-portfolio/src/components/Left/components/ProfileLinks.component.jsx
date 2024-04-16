import { useUser } from "../../../Providers/UserProvider";
import {
  GithubProfileSvg,
  LinkedinProfileSvg,
  LeetCodeProfileSvg,
} from "../../utils/Svg";

export function ProfileLinks() {
  const {data} = useUser();

  return (
    <p>
      <a href={data.userInfo.links.github} target="blank" aria-label="github link">
        <span>
          <GithubProfileSvg />
        </span>
      </a>

      <a href={data.userInfo.links.linkedin} target="blank" aria-label="linkedin link">
        <span>
          <LinkedinProfileSvg />
        </span>
      </a>

      <a href={data.userInfo.links.leetcode} target="blank" aria-label="leetcode link">
        <span>
          <LeetCodeProfileSvg />
        </span>
      </a>
    </p>
  );
}