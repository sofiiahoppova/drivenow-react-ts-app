import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.container}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#f0f0f0"
        color="#244a5b"
      />
    </div>
  );
};

export default Loader;
