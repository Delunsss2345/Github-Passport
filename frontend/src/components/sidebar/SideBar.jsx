import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import Logout from "./Logout";
import React from "react";
import { useAuthContext } from "@providers/AuthProvider";

const commonLinks = [
    { to: "/", icon: <FaGithub size={40} /> },
    { to: "/", icon: <IoHomeSharp size={30} /> }
];

const publicLinks = [
    { to: "/signup", icon: <LuLogIn size={30} /> }
];

const privateLinks = [
    { to: "/likes", icon: <FaHeart size={30} /> },
    { to: "/explore", icon: <MdOutlineExplore size={30} /> },
    { to: "/logout", icon: <TbLogout2 size={30} />, component: <Logout /> }
];

const SideBar = () => {
    const { authUser } = useAuthContext();

    const renderLinks = (links) => links.map(({ to, icon, className, component }, index) => (
        <React.Fragment key={`${to}-${index}`}>
            {component || <Link to={to} className={className}>{icon}</Link>}
        </React.Fragment>
    ))

    return <aside className="flex flex-col items-center min-w-12 sm:min-w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r
    bg-grass
    ">
        <nav className="flex flex-col gap-3 lg:gap-6 items-center h-full">
            {renderLinks(commonLinks)}
            {authUser && renderLinks(privateLinks)}
            {!authUser && renderLinks(publicLinks)}
        </nav>
    </aside>
}

export default SideBar; 