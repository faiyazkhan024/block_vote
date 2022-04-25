import React from "react";
import {
  Box,
  Chip,
  Grid,
  Button,
  Select,
  Checkbox,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Formik, Form, Field } from "formik";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
            <FormControl fullWidth>
              <InputLabel id="candidates-label">Select Candidates</InputLabel>
              <Select
                required
                multiple
                id="candidates"
                labelId="candidates-label"
                value={values.candidates}
                onChange={(event) => {
                  setFieldValue("candidates", event.target.value);
                }}
                input={<OutlinedInput label="Select Candidates" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 250,
                    },
                  },
                }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={values.candidates.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="voters-label">Select Voters</InputLabel>
              <Select
                required
                multiple
                id="voters"
                labelId="voters-label"
                value={values.voters}
                onChange={(event) => {
                  setFieldValue("voters", event.target.value);
                }}
                input={<OutlinedInput label="Select Voters" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 250,
                    },
                  },
                }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={values.candidates.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
