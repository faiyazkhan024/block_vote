import React, { useState, useEffect } from "react";

import VoterForm from "./VoterForm";
import FormContainer from "../../components/FormContainer/FormContainer";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const AddVoter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useAuth();

  const postVoter = async (values, { resetForm }) => {
    setIsLoading(true);
    const config = { headers: { authorization: `Bearer ${accessToken}` } };
    try {
      await axios.post("voter", values, config);
      setIsLoading(false);
      resetForm();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  return (
    <FormContainer title="Add Voter">
      <VoterForm onSubmit={postVoter} isLoading={isLoading} />
    </FormContainer>
  );
};

export default AddVoter;
