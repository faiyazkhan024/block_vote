import React, { useEffect } from "react";
import { List } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";

import useAuth from "../../hooks/useAuth";
import useCandidates from "../../hooks/useCandidates";
import setNavState from "../../helpers/setNavState";
import { deleteCandidate } from "../../service";

const Candidates = () => {
  const { accessToken } = useAuth();
  const { candidates, dispatch } = useCandidates();

  useEffect(() => {
    setNavState("Candidates");
  }, []);

  const handleDeleteCandidate = async (id) => {
    try {
      await deleteCandidate({ id, dispatch, accessToken });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <Bar btnTxt="Add Candidate" BtnIcon={RecordVoiceOverIcon} to="add" />
      {candidates.length === 0 ? (
        <Empty comment="No candidate found try adding candidate." />
      ) : (
        <List>
          {candidates.map((candidate) => (
            <ListItem
              key={`${candidate._id}`}
              item={candidate}
              icon={<AccountCircleIcon />}
              onDelete={handleDeleteCandidate}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Candidates;
