import { FaCoffee, FaFireAlt, FaUserFriends } from 'react-icons/fa'
import Avatar from '../../assets/Tuan.jpg'
import firebase from '../../assets/firebase.svg'
import mongo from '../../assets/mongo.svg'
import mysql from '../../assets/mysql.svg'
import node from '../../assets/node.svg'
import prisma from '../../assets/prisma.svg'
import react from '../../assets/react.svg'
import socket from '../../assets/socket.svg'
import vite from '../../assets/vite.svg'

const About = () => {
    return (
        <section id="about" className='h-fit md:h-screen w-full md:container mx-auto pt-12 z-10 sm:px-0 px-10'>
            <h2 className="text-4xl ml-[0.875rem] font-bold mb-[3.75rem] text-[var(--title-color)]">About me</h2>
            <div className="grid md:grid-cols-[3fr,9fr] grid-cols-1 gap-7">
                <img src={Avatar} alt="" className='h-32 w-32 object-cover rounded-full' />
                <div className='grid grid-cols-2 gap-7 lg:p-10 md:p-8 p-6 items-start rounded-lg bg-[var(--container-color)] text-[var(--title-color)]'>
                    <div className='relative w-full h-full'>
                        <p className='text-sm'>I am Tran Le Anh Tuan, web developer from Viet Nam. I have rich experience in web site design and building and customization, also I am good at ReactJS.</p>
                        <a href='https://www.topcv.vn/xem-cv/DVAHWFxVVQ4EBlIJUVdRUQ0KVgtTUwRXAAIAVAdd64' download={true} className='absolute cursor-pointer bottom-0 left-0 w-fit py-2 px-4 rounded-lg bg-[hsl(353,100%,65%)] text-sm text-white font-medium'>Download CV</a>
                    </div>
                    <div className='flex flex-col gap-4 justify-between h-full w-full'>
                        <div className='grid grid-cols-1 w-full'>
                            <p className='flex items-center justify-between'>
                                <span className='font-medium'>Frontend Development</span>
                                <span>80%</span>
                            </p>
                            <div className="h-2 rounded-full bg-[#f1f1f1]">
                                <span className='block h-2 rounded-full w-[80%] bg-[var(--percent-color)]'></span>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 w-full'>
                            <p className='flex items-center justify-between'>
                                <span className='font-medium'>Backend Development</span>
                                <span>80%</span>
                            </p>
                            <div className="h-2 rounded-full bg-[#f1f1f1]">
                                <span className='block h-2 rounded-full w-[80%] bg-[var(--percent-color)]'></span>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 w-full'>
                            <p className='flex items-center justify-between'>
                                <span className='font-medium'>UI/UX design</span>
                                <span>70%</span>
                            </p>
                            <div className="h-2 rounded-full bg-[#f1f1f1]">
                                <span className='block h-2 rounded-full w-[70%] bg-[var(--percent-color)]'></span>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 w-full'>
                            <p className='flex items-center justify-between'>
                                <span className='font-medium'>Language</span>
                                <span>60%</span>
                            </p>
                            <div className="h-2 rounded-full bg-[#f1f1f1]">
                                <span className='block h-2 rounded-full w-[60%] bg-[var(--percent-color)]'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[4.375rem] relative bg-[var(--container-color)] text-[var(--title-color)] h-fit rounded-lg'>
                <div className='w-[1px] h-[80%] bg-[var(--title-color)] absolute top-[50%] right-[50%] -translate-y-1/2 -translate-x-1/2 hidden md:block' />
                <div className='flex flex-col gap-8 p-4'>
                    <h3 className='text-xl font-medium'>Soft skills:</h3>
                    <div className='w-full h-full flex flex-wrap md:gap-2 justify-around text-sm'>
                        <p className='px-2 py-1 h-12 rounded-full shadow flex justify-center items-center bg-[var(--background-border-color)] transform duration-300 hover:scale-110 cursor-pointer'>Communication</p>
                        <p className='px-2 py-1 h-12 rounded-full shadow flex justify-center items-center bg-[var(--background-border-color)] transform duration-300 hover:scale-110 cursor-pointer'>Listening</p>
                        <p className='px-2 py-1 h-12 rounded-full shadow flex justify-center items-center bg-[var(--background-border-color)] transform duration-300 hover:scale-110 cursor-pointer'>Teamwork</p>
                        <p className='px-2 py-1 h-12 rounded-full shadow flex justify-center items-center bg-[var(--background-border-color)] transform duration-300 hover:scale-110 cursor-pointer'>Problem-solving</p>
                        <p className='px-2 py-1 h-12 rounded-full shadow flex justify-center items-center bg-[var(--background-border-color)] transform duration-300 hover:scale-110 cursor-pointer'>Time management</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 p-4'>
                    <h3 className='text-xl font-medium'>Hard skills:</h3>
                    <div className='w-full h-full flex flex-wrap md:gap-8 justify-center items-center text-sm'>
                        <img src={react} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={vite} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={node} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={mongo} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={mysql} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={prisma} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={socket} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                        <img src={firebase} alt="" className='h-16 w-16 p-2 rounded-full shadow bg-[var(--background-border-color)] hover:scale-110 cursor-pointer transform duration-300' />
                    </div>
                </div>
            </div>
            <div className='mt-[4.375rem] flex flex-col md:flex-row items-center gap-7 justify-around'>
                <div className='flex gap-6 w-[200px]'>
                    <FaFireAlt className="text-4xl text-[#ccc]" />
                    <div>
                        <h3 className="text-3xl text-[var(--title-color)]">30</h3>
                        <span className="text-[var(--text-color)]">Project completed</span>
                    </div>
                </div>
                <div className='flex gap-6 w-[200px]'>
                    <FaCoffee className="text-4xl text-[#ccc]" />
                    <div>
                        <h3 className="text-3xl text-[var(--title-color)]">99+</h3>
                        <span className="text-[var(--text-color)]">Cup of coffee</span>
                    </div>
                </div>
                <div className='flex gap-6 w-[200px]'>
                    <FaUserFriends className="text-4xl text-[#ccc]" />
                    <div>
                        <h3 className="text-3xl text-[var(--title-color)]">16</h3>
                        <span className="text-[var(--text-color)]">Teamwork</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About