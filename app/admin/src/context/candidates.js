import { createContext, useReducer } from "react";

const candidateModel = {
  _id: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: Date,
  avatar: "",
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
        ...candidates.filter(
          (candidate) => candidate._id !== action.payload._id
        ),
        action.payload,
      ];
    case "delete":
      console.log(action.payload._id);
      return [
        ...candidates.filter(
          (candidate) => candidate._id !== action.payload._id
        ),
      ];
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
