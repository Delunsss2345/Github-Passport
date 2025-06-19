import { IoEye, IoHeart, IoLocationOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiUserFollowFill, RiUserFollowLine, RiGitRepositoryFill } from "react-icons/ri";
import LikeProfile from "./LikeProfile";
const ProfileInfo = ({ userProfile }) => {


    return <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
        <div className="bg-grass rounded-lg p-4 space-y-4">
            {/* Avatar */}
            <div className="flex gap-x-4 items-center">
                <figure className="size-20">
                    <img src={userProfile?.avatar_url} alt="Avatar" />
                </figure>
                <div className="flex flex-col items-start gap-y-2">
                    <LikeProfile userProfile={userProfile} />
                    <a target="_blank" href={userProfile?.html_url} className="flex items-center gap-x-2 px-4 py-2 border rounded-lg w-40 text-sm hover:opacity-50 cursor-pointer transition-opacity"
                    >
                        <IoEye size={20} />   View On Github
                    </a>
                </div>
            </div>
            {/* User Bio */}
            {userProfile?.bio ? (
                <div className='flex items-center gap-2'>
                    <FaUser />
                    <p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
                </div>
            ) : null}
            {/* Location */}
            {userProfile?.location ? (
                <div className='flex items-center gap-2'>
                    <IoLocationOutline />
                    {userProfile?.location}
                </div>
            ) : null}
            {userProfile?.twitter_username ? (
                <a
                    href={`https://x.com/${userProfile.twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 hover:text-sky-500'
                >
                    <FaXTwitter />
                    {userProfile?.twitter_username}
                </a>
            ) : null}
            {/* Member Since Date */}
            <div className='my-2'>
                <p className='text-gray-600 font-bold text-sm'>Member since</p>
                <p className=''>{userProfile?.created_at.split("T")[0]}</p>
            </div>

            {/* Email Address */}
            {userProfile?.email && (
                <div className='my-2'>
                    <p className='text-gray-600 font-bold text-sm'>Email address</p>
                    <p className=''>{userProfile.email}</p>
                </div>
            )}

            {/* Full Name */}
            {userProfile?.name && (
                <div className='my-2'>
                    <p className='text-gray-600 font-bold text-sm'>Full name</p>
                    <p className=''>{userProfile?.name}</p>
                </div>
            )}

            {/* Username */}
            <div className='my-2'>
                <p className='text-gray-600 font-bold text-sm'>Username</p>
                <p className=''>{userProfile?.login}</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-2 mx-4'>
            {/* Followers Count */}
            <div className='flex items-center gap-2 border bg-glass rounded-lg p-2 flex-1 min-w-24'>
                <RiUserFollowFill className='w-5 h-5 text-blue-800' />
                <p className='text-xs'>Followers: {userProfile?.followers}</p>
            </div>

            {/* Following count */}
            <div className='flex items-center gap-2 border bg-glass rounded-lg p-2 flex-1 min-w-24'>
                <RiUserFollowLine className='w-5 h-5 text-blue-800' />
                <p className='text-xs'>Following: {userProfile?.following}</p>
            </div>

            {/* Number of public repos */}
            <div className='flex items-center gap-2 border bg-glass rounded-lg p-2 flex-1 min-w-24'>
                <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
                <p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
            </div>

            {/* Number of public gists */}
            <div className='flex items-center gap-2 border bg-glass rounded-lg p-2 flex-1 min-w-24'>
                <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
                <p className='text-xs'>Public gists: {userProfile?.public_gists}</p>
            </div>
        </div>
    </div>
}

export default ProfileInfo; 