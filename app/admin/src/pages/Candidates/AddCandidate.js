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
  const [error, setError] = usState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePostCandidate = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      await postCandidate({ values, dispatch, accessToken });
      setIsLoading(false);
      resetForm();
      if (!isLoading) navigate(-1);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      throw new Error(error);
    }
  };

  return (
    <FormContainer title="Add Candidate">
      {error && <div>{error}</div>}
      <CandidateForm onSubmit={handlePostCandidate} isLoading={isLoading} />
    </FormContainer>
  );
};

export default AddCandidate;
