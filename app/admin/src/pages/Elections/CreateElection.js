import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ElectionForm from "./ElectionForm";
import FormContainer from "../../components/FormContainer/FormContainer";
import useAuth from "../../hooks/useAuth";
import useElections from "../../hooks/useElections";
import { postElection } from "../../service";

const CreateElection = () => {
  const { accessToken } = useAuth();
  const { dispatch } = useElections();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePostElection = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      await postElection({ values, dispatch, accessToken });
      setIsLoading(false);
      resetForm();
      if (!isLoading) navigate(-1);
    } catch (error) {
      setError(error.message);
      throw new Error(error);
    }
  };

  return (
    <FormContainer title="Create Election">
      {error && <div>{error}</div>}
      <ElectionForm onSubmit={handlePostElection} />
    </FormContainer>
  );
};

export default CreateElection;
