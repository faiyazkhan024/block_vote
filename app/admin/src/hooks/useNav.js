import { useSnapshot } from "valtio";

import { navState } from "../state";

const useNav = () => {
  return useSnapshot(navState);
};

export default useNav;
