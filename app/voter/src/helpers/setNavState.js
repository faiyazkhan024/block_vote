import { navState } from "../state";

const setNavState = (location) => {
  navState.location = location;
};

export default setNavState;
