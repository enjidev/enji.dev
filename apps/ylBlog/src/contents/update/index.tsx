import clsx from "clsx";

import Contents from "@/contents/update/Contents.mdx";

function UpdateContents() {
  return (
    <div className={clsx("content-wrapper mdx-contents")}>
      <Contents />
    </div>
  );
}

export default UpdateContents;
