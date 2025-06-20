import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from '@utils/handleLogin'
const LoginPage = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
            <div className='w-full bg-glass border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className='text-xl font-bold md:text-2xl text-center'>Chào Mừng Trở Lại</h1>
                    <button
                        onClick={handleLoginWithGithub}
                        type='button'
                        className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
						focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
						text-center justify-center'
                    >
                        <FaGithub className='w-5 h-5' />
                        Đăng nhập với Github
                    </button>
                    <p className='text-sm font-light text-gray-500 text-right'>
                        Bạn chưa có tài khoản{" "}
                        <Link to='/signup' className='font-medium text-primary-600 hover:underline text-blue-600'>
                            Đăng ký
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
