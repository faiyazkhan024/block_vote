import { useContext } from "react";

import ElectionContext from "../contexts/elections";

const useElections = () => {
  return useContext(ElectionContext);
};

export default useElections;
