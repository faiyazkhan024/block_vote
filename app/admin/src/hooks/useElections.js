import { useContext } from "react";

import ElectionContext from "../context/elections";

const useElections = () => {
  return useContext(ElectionContext);
};

export default useElections;
