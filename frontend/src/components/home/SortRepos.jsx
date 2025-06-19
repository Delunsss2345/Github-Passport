const SortRepos = ({ onSort, sortType }) => {
    const BUTTONS = [
        { type: "recent", text: "Most Recent" },
        { type: "stars", text: "Most Stars" },
        { type: "forks", text: "Most Forks" },
    ]
    return (
        <div className='mb-2 mt-8 flex justify-center lg:justify-end'>

            {BUTTONS.map(btn => (
                <button
                    key={btn.type}
                    type='button'
                    className={`cursor-pointer border-2 hover:opacity-60 transition-opacity py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium rounded-lg bg-grass ${sortType === btn.type ? 'opacity-60 border-blue-500' : ""} `}
                    onClick={() => onSort(btn.type)}
                >
                    {btn.text}
                </button>
            ))}
        </div>
    );
};
export default SortRepos