import { createContext, useReducer } from "react";

const electionModel = {
  _id: "",
  for: "",
  start: Date,
  end: Date,
  candidates: [],
  voters: [],
};

const electionReducer = (elections = [electionModel], action) => {
  switch (action.type) {
    case "fetch":
      return [...elections, ...action.payload];
    case "create":
      return [...elections, action.payload];
    case "update":
      return [
        ...elections.filter((voter) => voter.id !== action.payload.id),
        action.payload,
      ];
    case "delete":
      return elections.filter((item) => item.id !== action.payload.id);
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
