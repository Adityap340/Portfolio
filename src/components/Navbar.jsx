import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { IoHomeOutline } from "react-icons/io5";
import { IoLogoGithub, IoLogoInstagram, IoMdCodeWorking, IoMdContacts } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiCertification } from "react-icons/bi";


const Navbar = () => {
    const menus = [
        { name: 'Home', icon: <IoHomeOutline size={20} />, link: '/' },
        { name: 'Projects', icon: <IoMdCodeWorking size={20} />, link: '/projects' },
        { name: 'Certifications', icon: <BiCertification size={20} />, link: '/certifications' },
        { name: 'Contact', icon: <IoMdContacts size={20} />, link: '/contact' },
        { name: 'X', icon: <BsTwitterX size={20} />, link: 'https://twitter.com/Aditya_340_', gap: true },
        {name: 'LinkedIn', icon: <SlSocialLinkedin size={20} />, link: 'https://www.linkedin.com/in/aditya-patil-795240231' },
        {name: 'Github', icon: <IoLogoGithub size={20} />, link: 'https://github.com/Adityap340' },
        {name: 'Instagram', icon: <IoLogoInstagram size={20} />, link: 'https://www.instagram.com/aditya_340_' }
    ];
    const [open, setOpen] = useState(false);
    return (
        <section className='flex gap-6 min-h-screen'>
            <div className={`bg-black ${open ? 'w-52' : 'w-16'} duration-500 text-white px-4`}>
                <div className='py-3 flex justify-end'>
                    <HiMenu size={26} className='text-5xl mr-5 cursor-pointer' onClick={() => setOpen(!open)} />
                </div>
                <div className='py-20'>
                    {menus?.map((menu, index) =>
                        <Link to={menu?.link} key={index} className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md my-10'>
                            <div>{menu?.icon}</div>
                            <h2
                                style={{ transitionDelay: `$(i+9)*100ms` }}
                                className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Navbar