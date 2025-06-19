import { Navigate } from "react-router-dom";
import { useAuthContext } from "@providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { authUser, loading } = useAuthContext();

    if (loading) return null;

    if (!authUser) {
        return <Navigate to="/signup" />
    }
    return children;
};

export default PrivateRoute; 