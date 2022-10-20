import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useScript from "../useScript/useScript";

export default function FirstPage() {
  const id = uuidv4();
  const [loading, setLoading] = useState(true);

  useScript("https://cdn.yourbow.com/cozi/gptyb.js");

  console.log(loading);

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <>
      {!loading ? (
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.d
          <div
            onLoad={window.runAds()}
            type="bottomScroll"
            id={id}
            role="complementary"
            aria-hidden="true"
            data-ad-mapping="mid_1"
            data-ad-slot="homepage/mid_1"
            data-ad-targeting="middle"
            className="adyb styles__StyledKarma-sc-1yuc4oc-0 ffYzDt"
          ></div>
        </div>
      ) : (
        <h1>Wait a minute please -_-</h1>
      )}
    </>
  );
}
