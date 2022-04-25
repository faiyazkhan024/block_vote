import { createContext, useReducer } from "react";

const voterModel = {
  _id: "",
  username: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: Date,
  avatar: "",
  mobile: "",
  email: "",
};

const voterReducer = (voters = [voterModel], action) => {
  switch (action.type) {
    case "fetch":
      return [...action.payload];
    case "create":
      return [...voters, action.payload];
    case "update":
      return [
        ...voters.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return voters.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error("unknown action type");
  }
};

const VoterContext = createContext([]);

export const VoterContextProvider = ({ children }) => {
  const [voters, dispatch] = useReducer(voterReducer, []);
  return (
    <VoterContext.Provider value={{ voters, dispatch }}>
      {children}
    </VoterContext.Provider>
  );
};

export default VoterContext;
