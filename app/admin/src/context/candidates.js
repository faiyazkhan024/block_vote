import { createContext, useReducer } from "react";

const candidateModel = {
  _id: "",
  username: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: Date,
  avatar: "",
  mobile: "",
  mobile: "",
  email: "",
  about: "",
};

const candidateReducer = (candidates = [candidateModel], action) => {
  switch (action.type) {
    case "fetch":
      return [...action.payload];
    case "create":
      return [...candidates, action.payload];
    case "update":
      return [
        ...candidates.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return candidates.filter((item) => item.id !== action.payload.id);
    default:
      throw new Error("Unknown action type");
  }
};

const CandidateContext = createContext([]);

export const CandidateContextProvider = ({ children }) => {
  const [candidates, dispatch] = useReducer(candidateReducer, []);
  return (
    <CandidateContext.Provider value={{ candidates, dispatch }}>
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateContext;
