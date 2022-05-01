import React, { useEffect } from "react";

import setNavState from "../../helpers/setNavState";
import useElections from "../../hooks/useElections";

const Home = () => {
  const { elections, dispatch } = useElections();

  useEffect(() => {
    setNavState("Home");
  }, []);

  return <div>Home</div>;
};

export default Home;
