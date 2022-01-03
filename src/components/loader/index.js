import React from "react";
import PulseLoader from "react-spinners/ClipLoader";

const Loader = () => (
  <div>
    <PulseLoader sizeUnit={"px"} size={100} color={"#3454D1"} loading={true} />
  </div>
);

export default Loader;
