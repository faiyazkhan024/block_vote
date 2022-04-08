import React from "react";

import ElectionForm from "./ElectionForm";
import FormContainer from "../../components/FormContainer/FormContainer";

const CreateElection = () => {
  const submitHandler = () => {};
  return (
    <FormContainer title="Create Election">
      <ElectionForm onSubmit={submitHandler} />
    </FormContainer>
  );
};

export default CreateElection;
