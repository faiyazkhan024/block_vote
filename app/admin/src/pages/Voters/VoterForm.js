import React from "react";

import { Grid, TextField, Button } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Formik, Form, Field } from "formik";

export default function AddressForm({ onSubmit }) {
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
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="middleName"
              name="middleName"
              label="Middle name"
              type="text"
              fullWidth
              autoComplete="middle-name"
              variant="standard"
              value={values.middleName}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="lastName"
              name="lastName"
              label="Last name"
              type="text"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={values.lastName}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={values.dateOfBirth}
              onChange={handleChange}
              renderInput={(params) => <TextField />}
            />
          </Grid> */}
          <Grid item xs={12}>
            <Field
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
              variant="standard"
              value={values.email}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="username"
              name="username"
              label="Username"
              type="text"
              fullWidth
              autoComplete="username"
              variant="standard"
              value={values.username}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="password"
              variant="standard"
              value={values.password}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              id="mobile"
              name="mobile"
              label="Mobile"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              fullWidth
              variant="standard"
              value={values.mobile}
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
}
