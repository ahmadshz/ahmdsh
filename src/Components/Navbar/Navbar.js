import React, { useEffect, useState } from 'react'
import { GoSun } from 'react-icons/go';
import { MdOutlineDarkMode } from "react-icons/md";
import { TbMenu3 } from 'react-icons/tb';
import NavbarMobile from './NavbarMobile';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const handleShow = () => {
        setShow(!show)
    }
const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

    return (
        <div>
            <motion.div
                initial={{ y: -30, opacity: 0 }}        
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='px-8 sm:px-24  xl:px-80 flex justify-between items-center fixed bg-gray-250/50 backdrop-blur-md shadow-md   z-10  w-full py-3'>
                <Link to='/' className='uppercase text-3xl font-bold'>Ahmad</Link>
                <div className='  text-xl hidden lg:flex justify-center items-center gap-8 '>
                    <Link to='/' onClick={top} className='cursor-pointer hover:text-blue-500 duration-500'>Home</Link>
                    <Link to='/about' onClick={top} className='cursor-pointer hover:text-blue-500 duration-500'>About</Link>
                    <Link to='/projects' onClick={top} className='cursor-pointer hover:text-blue-500 duration-500'>Projects</Link>
                    <Link to='/skills'onClick={top} className='cursor-pointer hover:text-blue-500 duration-500'>Skills</Link>
                    <Link to='/contact' onClick={top} className='cursor-pointer hover:text-blue-500 duration-500'>Contact</Link>
                </div>
                <div className='cursor-pointer text-2xl  flex  justify-center items-center gap-4'>
                    <div onClick={() => setDarkMode(!darkMode)} className='bg-[#EEF2FF] dark:bg-[#1E3851] rounded-xl p-3 shadow-lg'>
                        <MdOutlineDarkMode className='dark:hidden' />
                        <GoSun className='hidden dark:block' />
                    </div>
                    <TbMenu3 onClick={handleShow} className='text-3xl lg:hidden' />
                </div>

                
            </motion.div>
            {show ?
                    <NavbarMobile handleShow={handleShow} /> : null
                }
        </div>
    )
}

export default Navbar