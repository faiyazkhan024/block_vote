import React, { useEffect } from "react";
import { Grid } from "@mui/material";

import Empty from "../../components/Empty/Empty";
import Card from "../../components/Card/Card";

import setNavState from "../../helpers/setNavState";
import useElections from "../../hooks/useElections";

const Home = () => {
  const { elections } = useElections();

  useEffect(() => {
    setNavState("Home");
  }, []);

  return elections.lenth ? (
    <Empty comment="No election found" />
  ) : (
    <Grid container spacing={3} sx={{ m: 4 }}>
      {elections.map((election) => (
        <Card key={election._id} item={election}></Card>
      ))}
    </Grid>
  );
};

export default Home;
