import { FaSearch } from "react-icons/fa"
import MenuProject from "./MenuProject"

const Project = () => {
    return (
        <section id="project" className='lg:h-screen h-full w-full md:container mx-auto pt-14 z-10'>
            <h2 className="text-4xl ml-[0.875rem] font-bold mb-[3.75rem] text-[var(--title-color)]">Latest project:</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-4 w-fit mx-auto">
                {
                    MenuProject.map((value) => {
                        return (
                            <a href={value.link} className="overflow-hidden relative rounded-lg shadow-lg cursor-pointer bg-white w-80 h-72 group" key={value.id}>
                                <img src={value.image} alt="" className="w-full h-full object-scale-down bg-black/10" />
                                <div className="bg-[#6c6ce5] absolute left-0 top-0 h-full w-full transform duration-300 opacity-0 group-hover:opacity-100" />
                                <span className="text-white opacity-0 group-hover:opacity-100 absolute top-0 left-0 rounded-bl-[0.98rem] rounded-br-[0.98rem] inline-block py-[0.5rem] px-[0.825rem] -translate-y-[40px] duration-300 text-sm bg-red-600 group-hover:translate-y-0">{value.technology}</span>
                                <h3 className="group-hover:opacity-100 opacity-0 absolute right-2 bottom-2 text-white text-2xl font-semibold">{value.title}</h3>
                                <FaSearch className="group-hover:opacity-100 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white p-3 bg-yellow-500 rounded-full" />
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project