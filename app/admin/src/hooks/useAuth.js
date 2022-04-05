import { useSnapshot } from "valtio";

import { authState } from "../state";

const useAuth = () => {
  return useSnapshot(authState);
};

export default useAuth;
