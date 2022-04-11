import React, { useReducer, useEffect } from "react";
import { List } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";
import axios from "../../config/axios";
import setNavState from "../../helpers/setNavState";

const candidateReducer = (candidates = [], action) => {
  switch (action.type) {
    case "fetch":
      return [...candidates, ...action.payload];
    case "create":
      return [...candidates, action.payload];
    case "update":
      return [
        ...candidates.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return candidates.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error("Unknown action type");
  }
};

const Candidates = () => {
  const [candidates, dispatch] = useReducer(candidateReducer, []);

  const getCandidate = async () => {
    try {
      const { data } = await axios.get("candidate");
      dispatch({ type: "fetch", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setNavState("Candidates");
    getCandidate();
  }, []);

  return (
    <>
      <Bar btnTxt="Add Candidate" BtnIcon={RecordVoiceOverIcon} to="add" />
      {candidates.length === 0 ? (
        <Empty comment="No candidate found try adding candidate." />
      ) : (
        <List>
          <ListItem />
        </List>
      )}
    </>
  );
};

export default Candidates;
