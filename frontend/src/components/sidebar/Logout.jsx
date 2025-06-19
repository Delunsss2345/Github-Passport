import { MdLogout } from "react-icons/md"
import { useAuthContext } from "@providers/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", { credentials: "include" });
            const data = await response.json();
            console.log(data);
            setAuthUser(null);
        }
        catch (error) {
            toast.error(error.message);
        }
    }
    return <div className="flex flex-col gap-6 mt-auto">
        <img src={authUser?.avatarUrl} className="size-10 rounded-full border border-gray-800" />
        <div onClick={handleLogout} className="cursor-pointer flex items-center p-2 rounded-lg mt-auto border">
            <MdLogout size={20} />
        </div>
    </div>
}

export default Logout; 