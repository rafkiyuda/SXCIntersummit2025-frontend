import { Navigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore"; // adjust to your state management
import type { JSX } from "react";
import useAuth from "@/hooks/Guest/useAuth";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user } = useUserStore();
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
