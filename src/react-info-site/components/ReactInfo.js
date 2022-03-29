import React from "react";

import Header from "./Header";
import Facts from "./Facts";

const ReactInfo = () => {
  const factsList = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100K stars on Github",
    "Is maintaned by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
  ];
  return (
    <div className='react-info'>
      <Header />
      <Facts facts={factsList} />
    </div>
  );
};

export default ReactInfo;
