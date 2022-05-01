import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "moment/locale/en-in";

import { VoterContextProvider } from "./context/voters";
import { ElectionContextProvider } from "./context/elections";
import { CandidateContextProvider } from "./context/candidates";

import App from "./App";

import theme from "./theme";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CandidateContextProvider>
          <ElectionContextProvider>
            <VoterContextProvider>
              <App />
            </VoterContextProvider>
          </ElectionContextProvider>
        </CandidateContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
