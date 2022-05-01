import React, { useEffect } from "react";
import { List } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";

import useAuth from "../../hooks/useAuth";
import useVoters from "../../hooks/useVoters";
import setNavState from "../../helpers/setNavState";
import { deleteVoter } from "../../service";

const Voters = () => {
  const { accessToken } = useAuth();
  const { voters, dispatch } = useVoters();

  useEffect(() => {
    setNavState("Voters");
  }, []);

  const handleDeleteVoter = async (id) => {
    try {
      await deleteVoter({ accessToken, id, dispatch });
    } catch (error) {
      throw new Error(error);
    }
  };

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
              icon={<AccountCircleIcon />}
              onDelete={handleDeleteVoter}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Voters;
