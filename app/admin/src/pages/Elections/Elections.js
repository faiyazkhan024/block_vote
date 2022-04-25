import React, { useEffect } from "react";
import { List } from "@mui/material";
import BallotIcon from "@mui/icons-material/Ballot";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";
import setNavState from "../../helpers/setNavState";

import useElections from "../../hooks/useElections";

const Elections = () => {
  const { elections, dispatch } = useElections();
  const { accessToken } = useAuth();

  const getElections = async (accessToken) => {
    const config = { headers: { authorization: `Bearer ${accessToken}` } };
    try {
      const { data } = await axios.get("election", config);
      dispatch({ type: "fetch", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setNavState("Elections");
  }, []);

  useEffect(() => {
    getElections(accessToken);
  }, [accessToken]);

  return (
    <>
      <Bar btnTxt="Create Election" BtnIcon={BallotIcon} to="create" />
      {elections.length === 0 ? (
        <Empty comment="No election found try creating election" />
      ) : (
        <List>
          <ListItem />
        </List>
      )}
    </>
  );
};

export default Elections;
