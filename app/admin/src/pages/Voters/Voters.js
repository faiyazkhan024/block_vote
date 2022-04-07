import React, { useReducer, useEffect } from "react";
import { List } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const voterReducer = (voters = [], action) => {
  switch (action.type) {
    case "fetch":
      return [...voters, ...action.payload];
    case "create":
      return [...voters, action.payload];
    case "update":
      return [
        ...voters.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return voters.filter((item) => item.id !== action.payload.id);
  }
};

const Voters = () => {
  const [voters, dispatch] = useReducer(voterReducer, []);
  const { accessToken } = useAuth();

  console.log(voters);

  const getVoters = async () => {
    try {
      const config = { headers: { authorization: `Bearer ${accessToken}` } };
      const { data } = await axios.get("voter", config);
      dispatch({ type: "fetch", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVoters();
  }, []);

  return (
    <>
      <Bar btnTxt="Add Voter" BtnIcon={PeopleIcon} to="add" />
      {voters.length === 0 ? (
        <Empty comment="No voter found try adding voter." />
      ) : (
        <List>
          <ListItem />
        </List>
      )}
    </>
  );
};

export default Voters;
