import React, { useState, useEffect } from "react";

import CandidateForm from "./CandidateForm";
import FormContainer from "../../components/FormContainer/FormContainer";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const AddCandidate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useAuth();

  const postCandidate = async (values, { resetForm }) => {
    setIsLoading(true);
    const config = { headers: { authorization: `Bearer ${accessToken}` } };
    try {
      await axios.post("candidate", values, config);
      setIsLoading(false);
      resetForm();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <FormContainer title="Add Candidate">
      <CandidateForm onSubmit={postCandidate} isLoading={isLoading} />
    </FormContainer>
  );
};

export default AddCandidate;
