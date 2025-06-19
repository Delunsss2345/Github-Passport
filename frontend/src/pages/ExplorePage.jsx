import { useState } from "react";
import toast from 'react-hot-toast'
import Spinner from '@components/Loading/Spinner'
import Repos from '@components/home/Repos'
const ExplorePage = () => {
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const IMAGE_LANGUAGE = [
        { type: 'javascript', alt: "JavaScript", src: '/javascript.svg' },
        { type: 'typescript', alt: "Typescript", src: '/typescript.svg' },
        { type: 'c++', alt: "C++ Logo", src: '/c++.svg' },
        { type: 'python', alt: "Python Logo", src: '/python.svg' },
        { type: 'java', alt: "Java Logo", src: '/java.svg' },
    ]

    const explorePage = async (language) => {
        setLoading(true);
        setRepos([]);
        try {

            const res = await fetch(`http://localhost:5001/api/explore/repos/${language}`)
            const json = await res.json(); //res là đối tượng response chưa được giải dùng .json giải trả về promise
            const items = json.data;
            setRepos(items);
            setSelectedLanguage(language);
        }
        catch (error) {
            toast.error('Cannot get repos, Pls return')
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='px-4'>
            <div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
                <h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
                <div className='flex flex-wrap gap-2 my-2 justify-center'>
                    {IMAGE_LANGUAGE.map(language => (
                        <img key={language.type} onClick={() => explorePage(language.type)} src={language.src} alt={language.alt} className='h-11 sm:h-20 cursor-pointer' />
                    ))}
                </div>
            </div>
            {repos.length > 0 && (
                <h2 className="text-lg font-semibold text-center my-4">
                    <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full">
                        {selectedLanguage.toUpperCase()}{" "}
                    </span>
                    Repositories
                </h2>
            )}

            {!loading && repos.length > 0 && <Repos fullWidth={true} repos={repos} />}
            {loading && <Spinner />}
        </div>
    );
};

export default ExplorePage;
