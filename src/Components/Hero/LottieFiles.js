import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assests/lottiFiles/laptop.json';
import { motion } from 'framer-motion';

const LottieFiles = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='w-2/2 md:w-2/3 lg:w-2/4 h-2/2 '>
      <Lottie  animationData={animationData} loop autoplay direction={-1} />
    </motion.div>
  );
};

export default LottieFiles;
