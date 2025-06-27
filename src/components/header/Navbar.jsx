import React, { useState } from 'react'
import { Button } from "../../Input"
import { Link } from 'react-router'

const Navbar = () => {

    const [isopen, setIsopen] = useState(false)

    const menubar = () => {
        setIsopen(prev => !prev)
    }

    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Project",
            path: "/project"
        }
    ]

    return (
        <>
            <div className='w-full bg-[#4297A0] min-h-[8vh] flex items-center nav-wrapper'>
                <nav className='px-[100px] w-full flex justify-between nav relative'>
                    <div className="logo flex items-center">
                        <h1 className='text-[26px] text-[#F4EAE6] font-semibold'>
                            <Link to={"/"}>
                                Nav-Mordern
                            </Link>
                        </h1>
                    </div>

                    <div className={`links flex items-center ${isopen ? "open" : ""} duration-200`}>
                        <ul className='flex gap-5'>
                            {navLinks.map((link, index) => (
                                <li className='text-[#F4EAE6] text-[16px] cursor-pointer hover:text-[#2F5061] duration-100 link' key={index}
                                >
                                    <Link to={link.path}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <a href="https://github.com/himanshukumar-18" target='_blank' className='hidden btn-git'>
                            <Button
                                title={"GitHub"}
                                className={"bg-[#2F5061] px-[36px] py-[15px] rounded-[50px] text-[#F4EAE6] text-[16px] hover:rounded-[0px] duration-200 github"}
                            />
                        </a>
                    </div>

                    <div className="btns">
                        <a href="https://github.com/himanshukumar-18" target='_blank'>
                            <Button
                                title={"GitHub"}
                                className={"bg-[#2F5061] px-[36px] py-[15px] rounded-[50px] text-[#F4EAE6] text-[16px] hover:rounded-[0px] duration-200 github"}
                            />
                        </a>
                    </div>

                    <div className="hamb hidden"
                        onClick={menubar}
                    >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar