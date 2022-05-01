import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormContainer from "../../components/FormContainer/FormContainer";
import useAuth from "../../hooks/useAuth";
import { postVoter } from "../../service";
import useVoters from "../../hooks/useVoters";
import VoterForm from "./VoterForm";

const AddVoter = () => {
  const { accessToken } = useAuth();
  const { dispatch } = useVoters();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePostVoter = async (values, { resetForm }) => {
    setIsLoading(true);
    await postVoter({ values, dispatch, accessToken, setIsLoading });
    setIsLoading(false);
    resetForm();
    if (!isLoading) navigate(-1);
  };

  return (
    <FormContainer title="Add Voter">
      <VoterForm onSubmit={handlePostVoter} isLoading={isLoading} />
    </FormContainer>
  );
};

export default AddVoter;
