/* eslint-disable react/prop-types */
const Card = (props) => {
    const { year, title, desc, desc2, icon } = props
    return (
        <div className="relative pl-12 pb-12 last:pb-0 before:content-[''] before:w-[1px] before:h-full before:bg-[hsl(353,100%,65%)] before:absolute before:left-1">
            <i className="absolute -left-[0.4375rem] top-0 text-3xl text-[hsl(353,100%,65%)] bg-[var(--container-color)] py-[0.4375rem]">{icon}</i>
            <span className='text-sm text-[var(--text-color)]'>{year}</span>
            <h3 className="text-[var(--title-color)] text-2xl my-2">{title}</h3>
            <p className="text-[var(--text-color)]">{desc}</p>
            <p className="text-[var(--text-color)]">{desc2}</p>
        </div>
    )
}

export default Card