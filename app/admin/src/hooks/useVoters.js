import { useContext } from "react";

import VoterContext from "../context/voters";

const useVoters = () => {
  return useContext(VoterContext);
};

export default useVoters;
