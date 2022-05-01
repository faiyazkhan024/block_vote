import { proxy } from "valtio";

export const authState = proxy({
  accessToken: "",
  refreshToken: "",
});

export const navState = proxy({
  location: "",
});
