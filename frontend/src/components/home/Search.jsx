import { useState } from "react";
import { IoSearch } from "react-icons/io5";
const Search = ({ onSearch }) => {
    const [userName, setUserName] = useState('');
    return <form onSubmit={(e) => onSearch(e, userName)} className="flex py-2 px-3 gap-4 rounded-lg items-center mx-auto w-[50%] border focus-within:border-blue-500">
        <label htmlFor="default-search"> <IoSearch size={20} /></label>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} id="default-search" className="w-full outline-0 bg-transparent" type="text" required />
        <button className="ms-auto px-3 py-1 rounded-lg bg-white text-white font-semibold bg-gradient-to-r from-cyan-900 to-blue-900 ">Search</button>
    </form>
}

export default Search; 