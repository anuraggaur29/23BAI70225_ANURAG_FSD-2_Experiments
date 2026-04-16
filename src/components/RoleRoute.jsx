import { Navigate } from "react-router-dom";

function RoleRoute({ allow, children }) {
  const role = sessionStorage.getItem("role");

  if (!role) {
    return <Navigate to="/" replace />;
  }

  if (!allow.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RoleRoute;
