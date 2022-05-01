import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Election from "./pages/Election/Election";
import NotFound from "./pages/NotFound/NotFound";

import useElections from "./hooks/useElections";
import { getElections } from "./service";

const App = () => {
  const { dispatch: electionsDispatch } = useElections();

  useEffect(() => {
    (async () => {
      try {
        await getElections({ dispatch: electionsDispatch });
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [electionsDispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/election/:electionId" element={<Election />} />
        <Route element={<RequireAuth />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
