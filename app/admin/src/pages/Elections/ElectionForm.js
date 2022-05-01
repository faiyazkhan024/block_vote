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

import useVoters from "../../hooks/useVoters";
import useCandidates from "../../hooks/useCandidates";

const ElectionForm = ({ onSubmit }) => {
  const { voters } = useVoters();
  const { candidates } = useCandidates();

  const initialValues = {
    for: "",
    start: null,
    end: null,
    voters: [],
    candidates: [],
    about: "",
  };

  const getVoterUsername = (id) =>
    voters.filter((voter) => voter._id === id)[0]?.username;

  const getCandidateName = (id) => {
    const candidate = candidates.filter((candidate) => candidate._id === id)[0];
    return `${candidate.firstName} ${candidate.middleName} ${candidate.lastName}`;
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
                id="start"
                name="start"
                label="Start Date"
                value={values.start}
                onChange={(value) => {
                  setFieldValue("start", Date.parse(value));
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
                id="end"
                name="end"
                label="End Date"
                value={values.end}
                onChange={(value) => {
                  setFieldValue("end", Date.parse(value));
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
                      <Chip key={value} label={getCandidateName(value)} />
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
                {candidates.map((candidate) => (
                  <MenuItem key={candidate._id} value={candidate._id}>
                    <Checkbox
                      checked={values.candidates.indexOf(candidate._id) > -1}
                    />
                    <ListItemText
                      primary={`${candidate.firstName} ${candidate.middleName} ${candidate.lastName}`}
                    />
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
                      <Chip key={value} label={getVoterUsername(value)} />
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
                {voters.map((voter) => (
                  <MenuItem key={voter._id} value={voter._id}>
                    <Checkbox checked={values.voters.indexOf(voter._id) > -1} />
                    <ListItemText primary={voter.username} />
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
