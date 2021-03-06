import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "moment/locale/en-in";

import App from "./App";
import { ElectionContextProvider } from "./contexts/elections";

import theme from "./theme";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ElectionContextProvider>
          <App />
        </ElectionContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
