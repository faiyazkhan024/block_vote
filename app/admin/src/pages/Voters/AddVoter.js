import React from "react";

import VoterForm from "./VoterForm";
import FormContainer from "../../components/FormContainer/FormContainer";

const AddVoter = () => {
  const submitHandler = () => {};
  return (
    <FormContainer title="Add Voter">
      <VoterForm onSubmit={submitHandler} />
    </FormContainer>
  );
};

export default AddVoter;
