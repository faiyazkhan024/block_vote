import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormContainer from "../../components/FormContainer/FormContainer";
import useAuth from "../../hooks/useAuth";
import useCandidates from "../../hooks/useCandidates";
import { postCandidate } from "../../service";
import CandidateForm from "./CandidateForm";

const AddCandidate = () => {
  const { accessToken } = useAuth();
  const { dispatch } = useCandidates();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePostCandidate = async (values, { resetForm }) => {
    setIsLoading(true);
    await postCandidate({ values, dispatch, accessToken });
    setIsLoading(false);
    resetForm();
    if (!isLoading) navigate(-1);
  };

  return (
    <FormContainer title="Add Candidate">
      <CandidateForm onSubmit={handlePostCandidate} isLoading={isLoading} />
    </FormContainer>
  );
};

export default AddCandidate;
