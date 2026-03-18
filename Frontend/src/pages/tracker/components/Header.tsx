import React from 'react'


interface Props {
    name: string,
    semester: string
}


const Header = ({ name, semester }: Props) => {
    return (
        <div className="flex flex-col min-w-0 mt-20">
            <h1 className="text-4xl font-bold tracking-tight text-white">
                Hey, <span className="text-[#00CEC8]">{name}</span> 👋
            </h1>
            <h2 className="text-white/40 text-lg mt-1 font-medium">
                Here's your current grade in <span className="text-white">{semester}</span>
            </h2>
        </div>
    )
}

export default Header