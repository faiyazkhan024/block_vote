import React, { useEffect } from "react";
import { List } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import Bar from "../../components/Bar/Bar";
import Empty from "../../components/Empty/Empty";
import ListItem from "../../components/ListItem/ListItem";

import useAuth from "../../hooks/useAuth";
import setNavState from "../../helpers/setNavState";
import useCandidates from "../../hooks/useCandidates";
import { deleteCandidate } from "../../service";

const Candidates = () => {
  const { accessToken } = useAuth();
  const { candidates, dispatch } = useCandidates();

  const handleDeleteCandidate = async (id) => {
    await deleteCandidate({ id, dispatch, accessToken });
  };

  useEffect(() => {
    setNavState("Candidates");
  }, []);

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
              onDelete={handleDeleteCandidate}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default Candidates;
