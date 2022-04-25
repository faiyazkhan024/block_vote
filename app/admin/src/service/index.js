import axios from "../config/axios";

export const getVoters = async ({ accessToken }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const { data } = await axios.get("voter", config);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deleteVoter = async ({ accessToken, id }) => {
  const config = { headers: { authorization: `Bearer ${accessToken}` } };
  try {
    const deletedVoter = await axios.delete(`voter/${id}`, config);
    return deletedVoter;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
