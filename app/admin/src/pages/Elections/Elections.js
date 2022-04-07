import React, { useReducer, useEffect } from "react";
import { List } from "@mui/material";
import BallotIcon from "@mui/icons-material/Ballot";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const electionReducer = (elections = [], action) => {
  switch (action.type) {
    case "fetch":
      return [...elections, ...action.payload];
    case "create":
      return [...elections, action.payload];
    case "update":
      return [
        ...elections.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return elections.filter((item) => item.id !== action.payload.id);
  }
};

const Elections = () => {
  const [elections, dispatch] = useReducer(electionReducer, []);
  const { accessToken } = useAuth();

  const getElections = async () => {
    try {
      const config = { headers: { authorization: `Bearer ${accessToken}` } };
      const { data } = await axios.get("election", config);
      dispatch({ type: "fetch", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getElections();
  }, []);

  return (
    <>
      <Bar btnTxt="Create Election" BtnIcon={BallotIcon} />
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
