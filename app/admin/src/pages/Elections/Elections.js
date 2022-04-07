import React from "react";
import { Box } from "@mui/material";
import BallotIcon from "@mui/icons-material/Ballot";

import Bar from "../../components/Bar/Bar";

const Elections = () => {
  return (
    <Box>
      <Bar btnTxt="Create Election" BtnIcon={BallotIcon} />
    </Box>
  );
};

export default Elections;
