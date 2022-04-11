import React, { useEffect } from "react";

import setNavState from "../../helpers/setNavState";

const Home = () => {
  useEffect(() => {
    setNavState("Dashboard");
  }, []);
  return <div>Home</div>;
};

export default Home;
