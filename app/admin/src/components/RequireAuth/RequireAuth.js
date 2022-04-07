import { Outlet, Navigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
  const { accessToken: token } = useAuth();
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
