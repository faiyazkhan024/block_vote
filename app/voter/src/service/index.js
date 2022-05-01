import axios from "../config/axios";

//Auth Services
export const login = async ({ username, password, setAuth, setVoter }) => {
  const { data: auth } = await axios.post("auth/login/voter", {
    username,
    password,
  });
  setVoter({ ...auth.user });
  setAuth({
    accessToken: auth.accessToken,
    refreshToken: auth.refreshToken,
  });
};

//Voters Services
export const getVoterByID = async ({ id, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: voter } = await axios.get(`voter/${id}`, config);
  return voter;
};

export const getVoters = async ({ dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: voters } = await axios.get("voter", config);
  dispatch({ type: "fetch", payload: voters });
  return voters;
};

export const postVoter = async ({ values, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: newVoter } = await axios.post("voter", values, config);
  dispatch({ type: "create", payload: newVoter });
  return newVoter;
};

export const deleteVoter = async ({ id, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: deletedVoter } = await axios.delete(`voter/${id}`, config);
  dispatch({ type: "delete", payload: deletedVoter });
  return deletedVoter;
};

export const postVote = async ({
  voterId,
  candidateId,
  electionId,
  accessToken,
}) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data } = await axios.post(
    "voter/vote",
    {
      voterId,
      candidateId,
      electionId,
    },
    config
  );
  return data;
};

//Candidates Services
export const getCandidateById = async (id) => {
  const { data: candidate } = await axios.get(`candidate/${id}`);
  return candidate;
};

export const getCandidatesByIds = async (ids) => {
  if (!ids) return;
  const candidates = await Promise.all(ids.map(getCandidateById));
  return candidates;
};

export const getCandidates = async ({ dispatch }) => {
  const { data: candidates } = await axios.get("candidate");
  dispatch({ type: "fetch", payload: candidates });
  return candidates;
};

export const postCandidate = async ({ values, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: newCandidate } = await axios.post("candidate", values, config);
  dispatch({ type: "create", payload: newCandidate });
  return newCandidate;
};

export const deleteCandidate = async ({ id, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: deletedCandidate } = await axios.delete(
    `candidate/${id}`,
    config
  );
  dispatch({ type: "delete", payload: deletedCandidate });
  return deletedCandidate;
};

//Elections Services
export const getElections = async ({ dispatch }) => {
  const { data: elections } = await axios.get("election");
  dispatch({ type: "fetch", payload: elections });
  return elections;
};

export const postElection = async ({ values, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: newElection } = await axios.post("election", values, config);
  dispatch({ type: "create", payload: newElection });
  return newElection;
};

export const deleteElection = async ({ id, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  const { data: deletedElection } = await axios.delete(
    `election/${id}`,
    config
  );
  dispatch({ type: "delete", payload: deletedElection });
  return deletedElection;
};
