import React, { useEffect } from "react";
import { List } from "@mui/material";
import BallotIcon from "@mui/icons-material/Ballot";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";

import setNavState from "../../helpers/setNavState";

import useElections from "../../hooks/useElections";

const Elections = () => {
  const { elections } = useElections();

  useEffect(() => {
    setNavState("Elections");
  }, []);

  return (
    <>
      <Bar btnTxt="Create Election" BtnIcon={BallotIcon} to="create" />
      {elections.length === 0 ? (
        <Empty comment="No election found try creating election" />
      ) : (
        <List>
          <ListItem />
        </List>
      )}
    </>
  );
};

export default Elections;
