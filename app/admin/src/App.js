import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Voters from "./pages/Voters/Voters";
import NotFound from "./pages/NotFound/NotFound";
import Elections from "./pages/Elections/Elections";
import Candidates from "./pages/Candidates/Candidates";
import Setting from "./pages/Setting/Setting";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="voters" element={<Voters />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="elections" element={<Elections />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
