import ProfileInfo from "@components/home/ProfileInfo";
import Search from "@components/home/Search";
import SortRepos from "@components/home/SortRepos";
import Repos from "@components/home/Repos";
import toast from "react-hot-toast";
import Spinner from '@components/Loading/Spinner'
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "@providers/AuthProvider";

const HomePage = () => {
    const { authUser } = useAuthContext();
    const [userProfile, setUserProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState(false);

    const getUserProfileAndRepos = useCallback(async (username = authUser.username) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/user/profile/${username}`)
            const json = await res.json();
            const { userProfile, repos } = json.data;

            setUserProfile(userProfile);

            repos.sort((a, b) => new Date(b.create_at) - new Date(a.create_at));
            setSortType('recent');
            setRepos(repos);
            return { userProfile, repos };
        }
        catch (error) {
            toast.error('Failed to fetch User profile and repository')
        }
        finally {
            setLoading(false);
        }
    }, [])


    useEffect(() => {
        getUserProfileAndRepos();
    }, [getUserProfileAndRepos])


    const onSearch = async (e, username = authUser.username) => {
        e.preventDefault();
        setLoading(true);
        setRepos([]);
        setUserProfile(null);

        const { userProfile, repos } = await getUserProfileAndRepos(username);
        if (!userProfile) return;
        setUserProfile(userProfile);
        setRepos(repos);
        setLoading(false);
    }


    const onSort = (sortType) => {
        if (sortType === 'recent') {
            repos.sort((a, b) => new Date(b.create_at) - new Date(a.create_at)); //desc
        }
        else if (sortType === 'stars') {
            repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //desc
        }
        else if (sortType === 'forks') {
            repos.sort((a, b) => b.forks_count - a.forks_count); //desc
        }
        setSortType(sortType);
        setRepos([...repos]);
    }

    return (
        <div className="m-4">
            <Search onSearch={onSearch} />
            {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
            <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
                {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
                {!loading && <Repos repos={repos} />}
                {loading && <Spinner />}
            </div>
        </div>
    );
};

export default HomePage;
