import Card from "./Card";
import Data from "./data";

const Experience = () => {
    return (
        <section id="experience" className='h-screen w-full md:container mx-auto pt-14 z-10'>
            <h2 className="text-4xl ml-[0.875rem] font-bold mb-[3.75rem] text-[var(--title-color)]">Experience</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                <div className="p-[1.875rem] rounded-lg relative shadow-lg bg-[var(--container-color)]">
                    {
                        Data.map((value) => {
                            if (value.category === 'education') {
                                return (
                                    <Card
                                        key={value.id}
                                        icon={value.icon}
                                        title={value.title}
                                        year={value.year}
                                        desc={value.desc}
                                        desc2={value.desc2} />
                                )
                            }
                            return <></>;
                        })
                    }
                </div>
                <div className="p-[1.875rem] rounded-lg relative shadow-lg bg-[var(--container-color)]">
                    {
                        Data.map((value) => {
                            if (value.category === 'experience') {
                                return (
                                    <Card
                                        key={value.id}
                                        icon={value.icon}
                                        title={value.title}
                                        year={value.year}
                                        desc={value.desc} />
                                )
                            }
                            return <></>;
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience