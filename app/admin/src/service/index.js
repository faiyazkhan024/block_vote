import axios from "../config/axios";

//Auth Services
export const login = async ({ username, password, setAuth, setError }) => {
  if (!username && !password) return setError("Invalid Username/Password");
  try {
    const { data: auth } = await axios.post("auth/login/admin", {
      username,
      password,
    });
    setAuth({
      accessToken: auth.accessToken,
      refreshToken: auth.refreshToken,
    });
  } catch (error) {
    setError("Invalid username or password");
    throw new Error(error);
  }
};

//Voters Services
export const getVoter = async ({ id, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: voter } = await axios.get(`voter/${id}`, config);
    return voter;
  } catch (error) {
    throw new Error(error);
  }
};

export const getVoters = async ({ dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: voters } = await axios.get("voter", config);
    dispatch({ type: "fetch", payload: voters });
    return voters;
  } catch (error) {
    throw new Error(error);
  }
};

export const postVoter = async ({
  values,
  dispatch,
  accessToken,
  setIsLoading,
}) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: newVoter } = await axios.post("voter", values, config);
    dispatch({ type: "create", payload: newVoter });
    return newVoter;
  } catch (error) {
    setIsLoading(false);
    throw new Error(error);
  }
};

export const deleteVoter = async ({ id, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: deletedVoter } = await axios.delete(`voter/${id}`, config);
    dispatch({ type: "delete", payload: deletedVoter });
    return deletedVoter;
  } catch (error) {
    throw new Error(error);
  }
};

//Candidates Services
export const getCandidate = async ({ id }) => {
  try {
    const { data: candidate } = await axios.get(`candidate/${id}`);
    return candidate;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCandidates = async ({ dispatch }) => {
  try {
    const { data: candidates } = await axios.get("candidate");
    dispatch({ type: "fetch", payload: candidates });
    return candidates;
  } catch (error) {
    throw new Error(error);
  }
};

export const postCandidate = async ({
  values,
  dispatch,
  accessToken,
  setIsLoading,
}) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: newCandidate } = await axios.post(
      "candidate",
      values,
      config
    );
    dispatch({ type: "create", payload: newCandidate });
    return newCandidate;
  } catch (error) {
    setIsLoading(false);
    throw new Error(error);
  }
};

export const deleteCandidate = async ({ id, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: deletedCandidate } = await axios.delete(
      `candidate/${id}`,
      config
    );
    dispatch({ type: "delete", payload: deletedCandidate });
    return deletedCandidate;
  } catch (error) {
    throw new Error(error);
  }
};

//Elections Services
export const getElections = async ({ dispatch }) => {
  try {
    const { data: elections } = await axios.get("election");
    dispatch({ type: "fetch", payload: elections });
    return elections;
  } catch (error) {
    throw new Error(error);
  }
};

export const postElection = async ({ values, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: newElection } = await axios.post("election", values, config);
    dispatch({ type: "create", payload: newElection });
    return newElection;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteElection = async ({ id, dispatch, accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data: deletedElection } = await axios.delete(
      `election/${id}`,
      config
    );
    dispatch({ type: "delete", payload: deletedElection });
    return deletedElection;
  } catch (error) {
    throw new Error(error);
  }
};
