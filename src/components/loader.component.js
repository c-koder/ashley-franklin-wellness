import React from "react";

import { LogoDarkImg } from "../utils/images";

const Loader = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center loader">
      <img src={LogoDarkImg} alt="brand-logo" />
    </div>
  );
};

export default Loader;
