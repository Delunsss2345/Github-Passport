import { useAuthContext } from "@providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const { authUser } = useAuthContext();


    if (authUser) {
        return <Navigate to="/" />
    }
    return children;
}
export default PublicRoute; 