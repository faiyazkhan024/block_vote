import { proxy } from "valtio";

export const authState = proxy({
  accessToken: "",
  refreshToken: "",
});

export const navState = proxy({
  location: "",
});

export const voterState = proxy({
  _id: "",
  username: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: null,
  mobile: "",
  email: "",
});
