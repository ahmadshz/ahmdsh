import React from 'react'
import { SKILLS } from '../../1-Utils/data'
import { motion } from 'framer-motion'

const Skills = () => {

    const showSkills = SKILLS.map((item, index) => (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className='min-w-[250px]  bg-[#EEF2FF]  shadow-lg  text-gray-700  p-4 rounded-lg flex justify-between items-center
            hover:bg-[#102D44] hover:text-white dark:hover:bg-[#1E3851]  duration-500 hover:shadow-custom dark:hover:shadow-dark
            '>
            <span className='font-semibold'>{item.skill}</span>
            <span className='text-2xl'>{item.icon}</span>
        </motion.div>
    ))

    return (
        <div className='min-h-[70vh] w-full px-8 sm:px-24 xl:px-80 pt-32 mb-20'>
            <h1 className='text-center text-5xl'>Skills</h1>
            <div className='flex flex-wrap justify-center gap-10 mt-20'>
                {showSkills}
            </div>
        </div>
    )
}

export default Skills
