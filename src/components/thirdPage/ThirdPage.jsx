import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import useScript from "../useScript/useScript";

export default function ThirdPage() {
  // const id = uuidv4();
  const [loading, setLoading] = useState(true);

  // useScript("https://cdn.yourbow.com/cozi/gptyb.js");

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <>
      {!loading ? (
        <div>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          <div
            id="adRightRailTop"
            className="adyb show-ad-label"
            data-ad-mapping="rightrailtop"
            data-ad-slot="test_marko/HP"
            data-ad-targetingpos=""
          ></div>
        </div>
      ) : (
        <h1>Wait a minute please -_-</h1>
      )}
    </>
  );
}
