import { proxy } from "valtio";

export const authState = proxy({
  accessToken: "",
  refreshToken: "",
});
