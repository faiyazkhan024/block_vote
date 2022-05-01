import { voterState } from "../state";

const setAuthState = (voter) => {
  voterState.username = voter?.username;
  voterState.firstName = voter?.firstName;
  voterState.middleName = voter?.middleName;
  voterState.lastName = voter?.lastName;
  voterState.dateOfBirth = voter?.dateOfBirth;
  voterState.mobile = voter?.mobile;
  voterState.email = voter?.email;
};

export default setAuthState;
