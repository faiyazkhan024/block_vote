import React, { useEffect } from "react";
import { Grid, Container } from "@mui/material";

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
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        {elections.map((election) => (
          <Card key={election._id} item={election}></Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
