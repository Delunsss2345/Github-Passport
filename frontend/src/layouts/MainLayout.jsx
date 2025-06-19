import SideBar from "@components/sidebar/SideBar";

const MainLayout = ({ children }) => {
    return (
        <div className="flex text-white">
            <SideBar />
            <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
                {children}
            </div>
        </div>
    )
}
export default MainLayout; 