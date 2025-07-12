import Furniture from '../assests/projects/projectFurniture.png'
import Sudoku from '../assests/projects/Sudoku-Game.png'
import Ecommerce from '../assests/projects/ecommerce.png'
import dallal from '../assests/projects/dallal.png'
import bite from '../assests/projects/gegabite.png'
import villahouse from '../assests/projects/villahouse.png'
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiReactrouter, SiRedux } from 'react-icons/si'
import { IoGitBranchOutline } from 'react-icons/io5'
import { TbBrandFramerMotion } from 'react-icons/tb'

export const SKILLS = [
  { skill: 'Html', icon: <FaHtml5 /> },
  { skill: 'Css', icon: <FaCss3 /> },
  { skill: 'Js', icon: <FaJs /> },
  { skill: 'React Js', icon: <FaReact /> },
  { skill: 'React-Router-Dom', icon: <SiReactrouter /> },
  { skill: 'Framer Motion', icon: <TbBrandFramerMotion /> },
  { skill: 'Redux Toolkit', icon: <SiRedux /> },
  { skill: 'Bootstrap', icon: <FaBootstrap /> },
  { skill: 'Tailwind Css', icon: <RiTailwindCssFill /> },
  { skill: 'Git', icon: <IoGitBranchOutline /> },
  { skill: 'Github', icon: <FaGithub /> },
];


export const MyProject = [
  
 
  {
    id: 0,
    category: ['Html & Css'],
    name: 'Furniture',
    desc: "Project created with Html,Css, Bootstrap and JS,An exhibition that displays company's services and projects and enables customers to communicate with  the company's employees.",
    imgPath: Furniture,
    link: 'https://gallery-furniture.netlify.app'
  },

  {
    id: 1,
    category: ['React'],
    name: 'Sudoku Game',
    desc: 'Ive built a Sudoku game in React featuring a 9x9 editable grid, validation, and puzzle generation at different difficulty levels. It also includes a solver, hints, and dark mode using Context API.',
    imgPath: Sudoku,
    link: 'https://sudoku91.netlify.app',
    github: 'https://github.com/ahmadshz/Sudoku-Game',
  },
  {
    id: 2,
    category: ['React'],
    name: 'Ecommerce-1',
    desc: 'A modern shopping cart built with React.js. Features include browsing products, viewing details, adding/removing items, and managing quantities. It dynamically fetches product data via API, auto-calculates totals, and is fully responsive. Built with React, Axios, Context API, React Router DOM and Bootstrap.',
    imgPath: Ecommerce,
    link: 'https://ecommerce-ahmd.netlify.app/',
    github: 'https://github.com/ahmadshz/my-shopping-cart',
  },
 
   {
    id: 3,
    name: 'Dallal Sy',
    desc: " Dallal Sy is an online platform proudly developed by our team of dedicated developers and designers. We built Dallal to be a smart, dynamic space where users can easily post and browse everything from cars and real estate to jobs, services, pets, and more. We focused on performance, accessibility, and smooth user experience to make the platform fast, reliable, and easy to use.",
    imgPath: dallal,
    link: 'https://www.sy-dallal.com/',
  },
  {
    id: 4,
    name: 'Gega Bite',
    desc: " We created a fast, elegant restaurant website that helps customers find and order their favorite meals in seconds. From browsing delicious food categories to viewing detailed menus and placing orders with location tracking — everything is smooth, mobile-friendly, and built to drive real customer engagement. Your restaurant, one click away.",
    imgPath: bite,
    link: 'https://gega-bite.vercel.app',
  },
  {
    id: 5,
    name: 'Villahouse',
    desc: "A professional real estate website I developed for VillaHouse in the UAE, specializing in showcasing luxury villas and homes. I focused on user experience, modern design, and full responsiveness across all devices.",
    imgPath: villahouse,
    link: 'https://villahouse.ae/',
  },
 
 
];