import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Formik, Form, Field } from "formik";

const ElectionForm = ({ onSubmit }) => {
  const initialValues = {
    for: "",
    from: null,
    to: null,
    voters: [],
    candidates: [],
    about: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, handleChange, setFieldValue }) => (
        <Grid container spacing={3} component={Form}>
          <Grid item xs={12}>
            <Field
              required
              id="for"
              name="for"
              label="For"
              type="text"
              fullWidth
              autoComplete="for"
              value={values.for}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                allowSameDateSelection
                id="from"
                name="from"
                label="Start Date"
                value={values.from}
                onChange={(value) => {
                  setFieldValue("from", Date.parse(value));
                }}
                renderInput={(params) => (
                  <TextField required fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                allowSameDateSelection
                id="to"
                name="to"
                label="End Date"
                value={values.to}
                onChange={(value) => {
                  setFieldValue("to", Date.parse(value));
                }}
                renderInput={(params) => (
                  <TextField required fullWidth {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Field
              required
              id="candidates"
              name="candidates"
              label="Select candidates"
              type="text"
              fullWidth
              autoComplete="name"
              value={values.candidates}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              required
              id="voters"
              name="voters"
              label="Select voters"
              type="text"
              fullWidth
              autoComplete="name"
              value={values.voters}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              id="about"
              name="about"
              label="About"
              type="text"
              fullWidth
              multiline
              rows={6}
              value={values.about}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default ElectionForm;
