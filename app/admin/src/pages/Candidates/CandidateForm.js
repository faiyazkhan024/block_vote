import { Formik, Form, Field } from "formik";
import { Grid, TextField, Button } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CandidateForm = ({ onSubmit }) => {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: null,
    email: "",
    mobile: "",
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
          <Grid item xs={12} sm={6}>
            <Field
              id="firstName"
              name="firstName"
              label="First name"
              type="text"
              fullWidth
              autoComplete="given-name"
              value={values.firstName}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              id="middleName"
              name="middleName"
              label="Middle name"
              type="text"
              fullWidth
              autoComplete="name"
              value={values.middleName}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              id="lastName"
              name="lastName"
              label="Last name"
              type="text"
              fullWidth
              autoComplete="family-name"
              value={values.lastName}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                disableFuture
                id="dateOfBirth"
                name="dateOfBirth"
                label="Date of Birth"
                openTo="year"
                value={values.dateOfBirth}
                onChange={(value) => {
                  setFieldValue("dateOfBirth", Date.parse(value));
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Field
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              id="mobile"
              name="mobile"
              label="Mobile"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              fullWidth
              value={values.mobile}
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

export default CandidateForm;
