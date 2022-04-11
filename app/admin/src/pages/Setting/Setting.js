import React, { useEffect } from "react";

import setNavState from "../../helpers/setNavState";

const Setting = () => {
  useEffect(() => {
    setNavState("Setting");
  }, []);
  return <div>Setting</div>;
};

export default Setting;
