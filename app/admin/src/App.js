import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Voters from "./pages/Voters/Voters";
import NotFound from "./pages/NotFound/NotFound";
import Elections from "./pages/Elections/Elections";
import Candidates from "./pages/Candidates/Candidates";
import Setting from "./pages/Setting/Setting";

import setAuthState from "./helpers/setAuthState";
import useLocal from "./hooks/useLocal";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { accessToken: token } = useAuth();
  const [auth] = useLocal("auth", "");

  useEffect(() => {
    setAuthState(auth);
  });

  const handelIndexRoute = !token ? (
    <Navigate to="/login" replace />
  ) : (
    <Navigate to="/dashboard" replace />
  );

  const handleLoginRoute = !token ? (
    <Login />
  ) : (
    <Navigate to="/dashboard" replace />
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={handelIndexRoute} />
        <Route path="/login" element={handleLoginRoute} />
        {token && (
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="voters" element={<Voters />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="elections" element={<Elections />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
