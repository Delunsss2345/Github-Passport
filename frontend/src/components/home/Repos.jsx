import Repo from "./Repo";

const Repos = ({ repos, fullWidth }) => {
    return (
        <div className={`${fullWidth ? 'lg:w-full' : 'lg:w-2/3'}  w-full bg-glass border rounded-lg px-8 py-6`}>
            <ol className='relative border-s border-gray-200 '>
                {repos.map(repo => (
                    <Repo key={repo.id} repo={repo} />
                ))}
                {repos.length === 0 && <p className="flex items-center justify-center h-32">No repos found</p>}
            </ol>
        </div>
    );
};
export default Repos; 