import React, { useState } from 'react';
import { MyProject } from '../../1-Utils/data';
import CardProject from './CardProject';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredProjects =
    selectedCategory === 'All Categories'
      ? MyProject
      : MyProject.filter((project) => project.category.includes(selectedCategory));

  const uniqueCategories = [...new Set(MyProject.flatMap((project) => project.category))];

  const Categories = uniqueCategories.map((category, index) => (
    <option key={index}>{category}</option>
  ));

  return (
    <div className="min-h-screen w-full px-8 sm:px-24 xl:px-80 pt-32 mb-20">
      <h1 className="text-center text-5xl">My Projects</h1>
      <h3 className="text-center text-gray-400 text-xl my-11">
        Filter by category
      </h3>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>All Categories</option>
        {Categories}
      </select>

      <motion.div

        className="mt-20 flex flex-wrap justify-center gap-12"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <CardProject
              key={project.name}
              animationKey={index}
              name={project.name}
              desc={project.desc}
              imgPath={project.imgPath}
              link={project.link}
              github={project.github}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
