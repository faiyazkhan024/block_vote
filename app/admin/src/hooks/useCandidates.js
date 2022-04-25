import { useContext } from "react";

import CandidateContext from "../context/candidates";

const useCandidates = () => {
  return useContext(CandidateContext);
};

export default useCandidates;
