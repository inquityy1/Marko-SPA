import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useScript from "../useScript/useScript";

export default function SecondPage() {
  const id = uuidv4();
  const [loading, setLoading] = useState(true);

  useScript("https://cdn.yourbow.com/cozi/gptyb.js");

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <>
      {!loading ? (
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
          <div
            onLoad={window.runAds()}
            id={id}
            className="adyb show-ad-label"
            data-ad-mapping="right_2"
            data-ad-slot="list/right_2"
            data-ad-targeting="bottom"
          ></div>
        </div>
      ) : (
        <h1>Wait a minute please -_-</h1>
      )}
    </>
  );
}
