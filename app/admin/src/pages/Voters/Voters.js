import React, { useEffect } from "react";
import { List } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";

import useAuth from "../../hooks/useAuth";
import useVoters from "../../hooks/useVoters";
import setNavState from "../../helpers/setNavState";
import { getVoters, deleteVoter } from "../../service";

const Voters = () => {
  const { voters, dispatch } = useVoters();
  const { accessToken } = useAuth();

  const handleDeleteVoter = async (id) => {
    const deletedVoter = await deleteVoter({ accessToken, id });
    dispatch({ type: "delete", payload: deletedVoter });
  };

  useEffect(() => {
    setNavState("Voters");
  }, []);

  useEffect(() => {
    (async () => {
      const voters = await getVoters({ accessToken });
      dispatch({ type: "fetch", payload: voters });
    })();
  }, [accessToken, dispatch]);

  return (
    <>
      <Bar btnTxt="Add Voter" BtnIcon={PeopleIcon} to="add" />
      {voters.length === 0 ? (
        <Empty comment="No voter found try adding voter." />
      ) : (
        <List>
          {voters.map((voter) => (
            <ListItem
              key={`${voter._id}`}
              item={voter}
              onDelete={handleDeleteVoter}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Voters;
