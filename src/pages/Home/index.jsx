import Avatar from '../../assets/Tuan.jpg'
import Victory from "../../assets/victory.svg"
import "./index.css"
import { IoLogoInstagram, IoLogoFacebook, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
import Shapes from './Shapes';
const Home = () => {
    return (
        <section id='home' className='h-screen w-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-6 z-10'>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className='w-32 h-32 rounded-full overflow-hidden'>
                        <img src={Avatar} alt="" className='h-full w-full object-cover' />
                    </div>
                    <h2 className='font-medium text-3xl text-[var(--title-color)]'>Tran Le Anh Tuan</h2>
                    <p className='text-xl flex gap-2 justify-center items-center  text-[var(--title-color)]'><span className='flex items-center'>Hi there <img src={Victory} alt="" className='w-8 h-8' />,</span><span>{`I'm Front-end developer`}</span></p>
                </div>
                <div className='flex justify-center gap-7 text-[var(--title-color)]'>
                    <a href="https://www.github.com/" className="text-3xl"><IoLogoGithub /></a>
                    <a href="https://www.facebook.com/" className="text-3xl" ><IoLogoFacebook /></a>
                    <a href="https://www.instagram.com/" className="text-3xl"><IoLogoInstagram /></a>
                    <a href="https://www.discord.com/" className="text-3xl"><IoLogoDiscord /></a>
                </div>
            </div>
            <div className="absolute bottom-20 cursor-pointer z-10 sm:block hidden text-[var(--title-color)]">
                <a href='#about'>
                    <div className="grid items-center">
                        <span className="text-sm font-medium">Scroll down</span>
                        <span className="border-2 border-[var(--title-color)] block h-[1.6rem] w-[1.25rem] m-auto mt-3 rounded-[1rem] relative">
                            <span className="rounded-full w-1 h-1 absolute top-[0.35rem] left-1/2 -translate-x-1/2 bg-[var(--title-color)] animation_mouse"></span>
                        </span>
                    </div>
                </a>
            </div>
            <Shapes />
        </section>
    )
}

export default Home