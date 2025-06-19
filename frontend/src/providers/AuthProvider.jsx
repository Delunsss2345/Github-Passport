import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkUserLoggerIn = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/auth/check', { credentials: "include" });
                const data = await response.json();
                setAuthUser(data.user);
            }
            catch (error) {
                toast.error(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        checkUserLoggerIn();
    }, [])
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}