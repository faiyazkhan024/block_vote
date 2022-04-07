import React, { useReducer, useEffect } from "react";
import { Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

import Bar from "../../components/Bar/Bar";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const voterReducer = (voters = [], action) => {
  switch (action.type) {
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

  const getUser = async () => {
    const config = { headers: { authorization: `Bearer ${accessToken}` } };
    const { data } = axios.get("voter", config);
    dispatch({ type: "create", payload: data });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Box>
      <Bar btnTxt="Add Voter" BtnIcon={PeopleIcon} />
    </Box>
  );
};

export default Voters;
