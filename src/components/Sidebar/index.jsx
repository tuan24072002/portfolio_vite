// import { MdLightMode } from "react-icons/md"
import { FaMoon, FaProjectDiagram, FaSun } from 'react-icons/fa';
import Logo from '../../assets/logo.svg'
import { IoHomeOutline, IoPersonOutline, IoSchoolOutline } from 'react-icons/io5';

const Sidebar = (props) => {
    /* eslint-disable react/prop-types */
    const { isDark, setIsDark } = props
    return (
        <aside className='aside fixed hidden top-0 left-0 w-[100px] z-10 bg-[var(--background-sidebar-color)] h-screen md:flex flex-col justify-between'>
            <a href='#home'>
                <img src={Logo} alt='' className='w-[50%] mx-auto mt-10 z-10 bg-[var(--background-sidebar-color)]' />
            </a>
            <nav className="flex-1 flex justify-center items-center">
                <ul className='flex flex-col w-full gap-10'>
                    <li className='flex justify-center text-[var(--title-color)] hover:text-red-600'>
                        <a href="#home">
                            <IoHomeOutline className={`text-3xl`} />
                        </a>
                    </li>
                    <li className='flex justify-center  text-[var(--title-color)] hover:text-red-600'>
                        <a href="#about">
                            <IoPersonOutline className={`text-3xl`} />
                        </a>
                    </li>
                    <li className='flex justify-center  text-[var(--title-color)] hover:text-red-600'>
                        <a href="#experience">
                            <IoSchoolOutline className={`text-3xl`} />
                        </a>
                    </li>
                    <li className='flex justify-center  text-[var(--title-color)] hover:text-red-600'>
                        <a href="#project">
                            <FaProjectDiagram className={`text-2xl`} />
                        </a>
                    </li>
                    <li className='flex justify-center cursor-pointer transform duration-1000' onClick={() => setIsDark(prev => !prev)}>
                        {
                            isDark ? <FaSun className={`text-2xl text-yellow-500`} /> : <FaMoon className={`text-2xl text-red-500`} />
                        }
                    </li>
                </ul>
            </nav>
            <div className="text-center mb-10">
                <span className="text-sm transform rotate-90 text-[var(--text-color)]">&copy; 2024</span>
            </div>
        </aside>
    )
}

export default Sidebar