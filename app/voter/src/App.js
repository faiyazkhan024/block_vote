import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

import useElections from "./hooks/useElections";
import { getElections } from "./service";

const App = () => {
  const { dispatch: electionsDispatch } = useElections();

  useEffect(() => {
    (async () => {
      await getElections({ dispatch: electionsDispatch });
    })();
  }, [electionsDispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
