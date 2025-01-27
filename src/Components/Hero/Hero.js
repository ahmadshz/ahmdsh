import React from 'react';
import { BsBoxArrowInDown } from 'react-icons/bs';
import LottieFiles from './LottieFiles';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="px-8 sm:px-24  xl:px-80 h-screen  ">
            <div className=' flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 md:gap-8 lg:gap-4 h-full pt-48 md:pt-0'>
                <div className='flex flex-col  items-center sm:items-start   '>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="uppercase mb-4 text-2xl lg:text-4xl  text-[#1E3851] dark:text-white  font-bold">Hi ,I am Ahmad </motion.h1>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="uppercase text-2xl text-center sm:text-start  lg:text-4xl  text-[#6B7280] dark:text-white mb-3 font-medium">Frontend Developer</motion.h1>
                    <motion.a
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        href='/PDF/Ahmad_shmeit.pdf'
                        download
                        className="flex gap-2 mt-16 font-semibold justify-center 
                                    items-center uppercase bg-[#EEF2FF] text-[#6B7280] w-fit p-4 border-[1px] border-[#ccd5f5]
                                    hover:bg-blue-500 hover:text-white focus:bg-green-500 focus:text-white                              
                                    duration-500 border-1 rounded-lg shadow-md text-center"
                    >
                        <BsBoxArrowInDown className='text-xl relative bottom-1' /> Download CV
                    </motion.a>
                </div>
                <LottieFiles />
            </div>
        </div>
    );
};

export default Hero;
