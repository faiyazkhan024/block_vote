import { useSnapshot } from "valtio";

import { voterState } from "../state";

const useAuth = () => {
  return useSnapshot(voterState);
};

export default useAuth;
