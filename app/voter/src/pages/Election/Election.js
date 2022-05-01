import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Container, Typography, List } from "@mui/material";

import ListItem from "../../components/ListItem/ListItem";
import useAuth from "../../hooks/useAuth";
import useElections from "../../hooks/useElections";
import useVoter from "../../hooks/useVoter";
import { postVote, getCandidatesByIds } from "../../service";

const Election = ({ location }) => {
  const { accessToken } = useAuth();
  const { _id: voterId } = useVoter();
  const { elections } = useElections();
  const { electionId } = useParams();
  const [election, setElection] = useState({});
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async (candidateIds) => {
    try {
      const fetchedCandidates = await getCandidatesByIds(candidateIds);
      setCandidates(fetchedCandidates);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (!!election) getCandidates(election?.candidates);
  }, [election]);

  useEffect(() => {
    setElection(elections.filter((election) => election._id === electionId)[0]);
  }, [elections, electionId]);

  const handleVote = async (candidateId) => {
    const electionId = election._id;
    try {
      await postVote({ voterId, candidateId, electionId, accessToken });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Grid
      container
      sx={{
        mt: 5,
      }}
      component={Container}
    >
      <Grid item>
        <Typography component="h2" variant="h4">
          {election?.for}
        </Typography>
        <Typography component="p">{election?.about}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <List>
          {candidates?.map((candidate) => (
            <ListItem
              key={`${candidate._id}`}
              item={candidate}
              onVote={handleVote}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Election;
