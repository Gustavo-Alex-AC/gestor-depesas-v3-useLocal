import React from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  margin-left: 3rem;
`;

const styleSpinner = {
  // display:"block",
  margin: "0 auto",
  marginLeft: "3rem",
}

const Spinner = () => {
  return (
    <div className={styleSpinner}>
      <BeatLoader css={override} size={15} color={"#36D7B7"} loading={true} />
    </div>
  );
};

export default Spinner;
