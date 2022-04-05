import { authState } from "../state";

const setAuthState = (auth) => {
  authState.accessToken = auth.accessToken;
  authState.refreshToken = auth.refreshToken;
};

export default setAuthState;
