import { createContext, useReducer } from "react";

const electionModel = {
  _id: "",
  for: "",
  start: Date,
  end: Date,
  candidates: [],
  voters: [],
  about: "",
};

const electionReducer = (elections = [electionModel], action) => {
  switch (action.type) {
    case "fetch":
      return [...action.payload];
    case "create":
      return [...elections, action.payload];
    case "update":
      return [
        ...elections.filter((election) => election._id !== action.payload._id),
        action.payload,
      ];
    case "delete":
      return [
        ...elections.filter((election) => election._id !== action.payload._id),
      ];
    default:
      throw new Error("Unknown action type");
  }
};

const ElectionContext = createContext([]);

export const ElectionContextProvider = ({ children }) => {
  const [elections, dispatch] = useReducer(electionReducer, []);

  return (
    <ElectionContext.Provider value={{ elections, dispatch }}>
      {children}
    </ElectionContext.Provider>
  );
};

export default ElectionContext;
