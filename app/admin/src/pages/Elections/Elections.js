import React, { useEffect } from "react";
import { List } from "@mui/material";
import BallotIcon from "@mui/icons-material/Ballot";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";

import useAuth from "../../hooks/useAuth";
import useElections from "../../hooks/useElections";
import setNavState from "../../helpers/setNavState";
import { deleteElection } from "../../service";

const Elections = () => {
  const { accessToken } = useAuth();
  const { elections, dispatch } = useElections();

  useEffect(() => {
    setNavState("Elections");
  }, []);

  const handleDeleteElection = async (id) => {
    try {
      await deleteElection({ id, dispatch, accessToken });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <Bar btnTxt="Create Election" BtnIcon={BallotIcon} to="create" />
      {elections.length === 0 ? (
        <Empty comment="No election found try creating election" />
      ) : (
        <List>
          {elections.map((election) => (
            <ListItem
              key={`${election._id}`}
              item={election}
              icon={<BallotIcon />}
              onDelete={handleDeleteElection}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Elections;
