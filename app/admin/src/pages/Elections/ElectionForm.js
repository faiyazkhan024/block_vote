import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";

const ElectionForm = ({ onSubmit }) => {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    mobile: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({
        values,
        handleChange,
        /* and other goodies */
      }) => (
        <Grid container spacing={3} component={Form}>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="firstName"
              name="firstName"
              label="First name"
              type="text"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={values.firstName}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default ElectionForm;
