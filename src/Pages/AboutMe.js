import React from 'react'
import img from '../assests/Image/ahmdshh.png'
import { motion } from 'framer-motion'

const AboutMe = () => {

    return (
        <div className=' w-full min-h-screen' >
            <div
                className='min-h-screen w-full px-8 sm:px-24 xl:px-80 pb-20 pt-40 flex flex-wrap md:flex-nowrap justify-center items-center gap-10 '>
                <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='rounded-lg shadow-xl' src={img} alt='' />
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='w-4/5 text-[#6B7280] dark:text-white '>I am a motivated Junior Frontend Developer with a strong foundation in creating responsive and interactive web applications. Proficient in React.js and modern JavaScript, I focus on delivering clean, efficient, and user-friendly interfaces. Eager to learn and grow, I thrive on collaborating with teams and taking on new challenges to enhance my skills and contribute to impactful projects</motion.p>
            </div>
        </div>
    )
}

export default AboutMe