import React from "react";

import VoterForm from "./VoterForm";
import FormContainer from "../../components/FormContainer/FormContainer";

const AddVoter = () => {
  return (
    <FormContainer title="Add Voter">
      <VoterForm />
    </FormContainer>
  );
};

export default AddVoter;
