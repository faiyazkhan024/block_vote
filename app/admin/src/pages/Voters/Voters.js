import React, { useReducer, useEffect } from "react";
import { List } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";
import setNavState from "../../helpers/setNavState";

const voterReducer = (voters = [], action) => {
  switch (action.type) {
    case "fetch":
      return [...action.payload];
    case "create":
      return [...voters, action.payload];
    case "update":
      return [
        ...voters.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return voters.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error("Unknown action type");
  }
};

const Voters = () => {
  const [voters, dispatch] = useReducer(voterReducer, []);
  const { accessToken } = useAuth();

  const getVoters = async (accessToken) => {
    const config = { headers: { authorization: `Bearer ${accessToken}` } };
    try {
      const { data } = await axios.get("voter", config);
      dispatch({ type: "fetch", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVoter = async (id) => {
    const config = { headers: { authorization: `Bearer ${accessToken}` } };
    try {
      const deletedVoter = await axios.delete(`voter/${id}`, config);
      dispatch({ type: "delete", payload: deletedVoter });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setNavState("Voters");
  }, []);

  useEffect(() => {
    getVoters(accessToken);
  }, [accessToken]);

  return (
    <>
      <Bar btnTxt="Add Voter" BtnIcon={PeopleIcon} to="add" />
      {voters.length === 0 ? (
        <Empty comment="No voter found try adding voter." />
      ) : (
        <List>
          {voters.map((voter) => (
            <ListItem
              key={`${voter._id}`}
              item={voter}
              onDelete={deleteVoter}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Voters;
