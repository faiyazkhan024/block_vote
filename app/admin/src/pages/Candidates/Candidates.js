import React from "react";
import { Box } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import Bar from "../../components/Bar/Bar";

const Candidates = () => {
  return (
    <Box>
      <Bar btnTxt="Add Candidate" BtnIcon={RecordVoiceOverIcon} />
    </Box>
  );
};

export default Candidates;
