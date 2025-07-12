import React from 'react'
import img from '../assests/Image/ahmdshh.png'
import { motion } from 'framer-motion'

const AboutMe = () => {

    return (
        <div className=' w-full min-h-screen' >
            <div
                className='min-h-screen w-full px-8 sm:px-24 xl:px-80 pb-20 pt-40 flex flex-wrap md:flex-nowrap justify-center items-center gap-10 '>
                <div className='w-[300px] h-300px]'>
                    <motion.img
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='rounded-lg shadow-xl h-full w-full' src={img} alt='' />
                </div>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='w-4/5 text-[#6B7280] dark:text-white '>
                    Motivated and detail-oriented Frontend Developer with hands-on experience in building responsive and scalable web applications using React.js, Next.js, and Tailwind CSS. Proficient in integrating RESTful APIs, managing state with Redux Toolkit, and designing clean, mobile-first user interfaces. Passionate about creating impactful digital experiences and continuously learning new technologies.

                </motion.p>
            </div>
        </div>
    )
}

export default AboutMe