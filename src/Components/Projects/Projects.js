import { MyProject } from '../../1-Utils/data';
import CardProject from './CardProject';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {

 

  return (
    <div className="min-h-screen w-full px-8 sm:px-24 xl:px-80 pt-32 mb-20">
      <h1 className="text-center text-5xl">My Projects</h1>
      <h3 className="text-center text-gray-400 text-xl my-11">
        Take a closer look at our latest projects and the milestones i am proud to share.
      </h3>
      

      <motion.div

        className="mt-20 flex flex-wrap justify-center gap-12"
      >
        <AnimatePresence mode="wait">
        <div className='grid xl:grid-cols-3 gap-8'>
          {MyProject.map((project, index) => (
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
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
