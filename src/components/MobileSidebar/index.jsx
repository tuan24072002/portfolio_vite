import { useState } from "react"
import { FaMoon, FaProjectDiagram, FaSun } from "react-icons/fa";
import { IoHomeOutline, IoPersonOutline, IoSchoolOutline } from "react-icons/io5";

const MobileSidebar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    /* eslint-disable react/prop-types */
    const { isDark, setIsDark } = props
    return (
        <>
            <div className='md:hidden fixed top-4 right-4 z-50'>
                <div className='flex flex-col items-center justify-center gap-[4.5px] cursor-pointer p-2' onClick={() => setIsOpen(prev => !prev)}>
                    <div className={`w-6 h-1 bg-[var(--title-color)] rounded-sm ${isOpen ? 'rotate-45' : ''} origin-left ease-in-out duration-500`} />
                    <div className={`w-6 h-1 bg-[var(--title-color)] rounded-sm ${isOpen ? 'opacity-0' : ''} ease-in-out duration-500`} />
                    <div className={`w-6 h-1 bg-[var(--title-color)] rounded-sm ${isOpen ? '-rotate-45' : ''} origin-left ease-in-out duration-500`} />
                </div>

            </div>
            {
                isOpen &&
                <div className='md:hidden fixed left-0 top-16 z-20 w-full h-[calc(100vh-64px)] bg-[var(--background-color)] text-[var(--title-color)] flex flex-col items-center justify-center gap-8 font-medium text-xl'>
                    <a href="#home" onClick={() => setIsOpen(false)} className={`flex gap-4 items-center hover:text-red-600`}>
                        <IoHomeOutline className={`text-2xl`} />
                        <span>Home</span>
                    </a>
                    <a href="#about" onClick={() => setIsOpen(false)} className={`flex gap-4 items-center hover:text-red-600`}>
                        <IoPersonOutline className={`text-2xl`} />
                        <span>About</span>
                    </a>
                    <a href="#experience" onClick={() => setIsOpen(false)} className={`flex gap-4 items-center hover:text-red-600`}>
                        <IoSchoolOutline className={`text-2xl`} />
                        <span>Experience</span>
                    </a>
                    <a href="#project" onClick={() => setIsOpen(false)} className={`flex gap-4 items-center hover:text-red-600`}>
                        <FaProjectDiagram className={`text-xl`} />
                        <span>Project</span>
                    </a>
                    <div className={`flex gap-4 items-center`} onClick={() => setIsDark(prev => !prev)}>
                        {
                            isDark ? <FaSun className={`text-2xl text-yellow-500`} /> : <FaMoon className={`text-2xl text-red-500`} />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default MobileSidebar