import React, { useReducer, useEffect } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

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
  }
};

const Candidates = () => {
  const [candidates, dispatch] = useReducer(candidateReducer, []);

  const getCandidate = async () => {
    try {
      const { data } = await axios.get("candidate");
      console.log(data);
      dispatch({ type: "fetch", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidate();
  }, []);

  return (
    <>
      <Bar btnTxt="Add Candidate" BtnIcon={RecordVoiceOverIcon} />
      {candidates.length === 0 ? (
        <Empty comment="No candidate found try adding candidate." />
      ) : (
        <div>Candidate</div>
      )}
    </>
  );
};

export default Candidates;
