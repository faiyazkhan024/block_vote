import React from "react";

import CandidateForm from "./CandidateForm";
import FormContainer from "../../components/FormContainer/FormContainer";

const AddCandidate = () => {
  const submitHandler = () => {};
  return (
    <FormContainer title="Add Candidate">
      <CandidateForm onSubmit={submitHandler} />
    </FormContainer>
  );
};

export default AddCandidate;
