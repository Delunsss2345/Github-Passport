import { useAuthContext } from '@providers/AuthProvider'
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const LikeProfile = ({ userProfile }) => {
    const { authUser } = useAuthContext();
    const isOwnUser = userProfile.login === authUser?.username;
    const handleLikeProfile = async () => {
        try {
            const response = await fetch(`/api/user/like/${userProfile.login}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await response.json();
            if (!data.success) return toast.error(data.message);
            toast.success(data.message);
        }
        catch (error) {
            toast.error(error.message);
        }
    }

    if (!authUser || isOwnUser) return null;
    return <button onClick={handleLikeProfile} className="flex items-center gap-x-2 px-4 py-2 border rounded-lg w-40 text-sm hover:opacity-50 cursor-pointer transition-opacity"> <FaHeart /> Like Profile</button>
}

export default LikeProfile; 