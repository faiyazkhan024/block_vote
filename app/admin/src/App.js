import { useEffect } from "react";
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
import AddVoter from "./pages/Voters/AddVoter";
import AddCandidate from "./pages/Candidates/AddCandidate";
import CreateElector from "./pages/Elections/CreateElection";

import useAuth from "./hooks/useAuth";
import useVoters from "./hooks/useVoters";
import useCandidates from "./hooks/useCandidates";
import useElections from "./hooks/useElections";
import { getVoters, getCandidates, getElections } from "./service";

const App = () => {
  const { accessToken } = useAuth();
  const { dispatch: votersDispatch } = useVoters();
  const { dispatch: candidatesDispatch } = useCandidates();
  const { dispatch: electionsDispatch } = useElections();

  useEffect(() => {
    (async () => {
      await getCandidates({ dispatch: candidatesDispatch });
      await getElections({ dispatch: electionsDispatch });
      if (!accessToken) return;
      await getVoters({ dispatch: votersDispatch, accessToken });
    })();
  }, [accessToken, votersDispatch, candidatesDispatch]);

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
            <Route path="voters/add" element={<AddVoter />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="candidates/add" element={<AddCandidate />} />
            <Route path="elections" element={<Elections />} />
            <Route path="elections/create" element={<CreateElector />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
