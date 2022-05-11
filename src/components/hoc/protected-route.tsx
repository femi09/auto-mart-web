import { Navigate } from "react-router-dom";

type ProtectedProps = {
  accessToken: string | null;
  children: JSX.Element;
};

const ProtectedRoute = ({ accessToken, children }: ProtectedProps) => {
    console.log("hey protected")
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
