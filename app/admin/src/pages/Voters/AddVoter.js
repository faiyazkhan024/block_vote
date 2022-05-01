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
  const [error, serError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePostVoter = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      await postVoter({ values, dispatch, accessToken, setIsLoading });
      setIsLoading(false);
      resetForm();
      if (!isLoading) navigate(-1);
    } catch (error) {
      serError(error.message);
      throw new Error(error);
    }
  };

  return (
    <FormContainer title="Add Voter">
      {error && <div>{error}</div>}
      <VoterForm onSubmit={handlePostVoter} isLoading={isLoading} />
    </FormContainer>
  );
};

export default AddVoter;
