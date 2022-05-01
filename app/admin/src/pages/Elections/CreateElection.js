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
  const [isLoading, setIsLoading] = useState(false);

  const handlePostElection = async (values, { resetForm }) => {
    setIsLoading(true);
    await postElection({ values, dispatch, accessToken });
    setIsLoading(false);
    resetForm();
    if (!isLoading) navigate(-1);
  };

  return (
    <FormContainer title="Create Election">
      <ElectionForm onSubmit={handlePostElection} />
    </FormContainer>
  );
};

export default CreateElection;
