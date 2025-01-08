import logo from '../assets/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useState, React } from 'react'


const NavBar = () => {
  return <nav className=" m-10 flex items-center justify-between py-6">
    <motion.div 
    onHoverStart={{x:100}}
    className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-[10vw] rounded-md' src={logo} alt="logo" />
    </motion.div>
    <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        {/* <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram /> */}
    </div>
  </nav>
}

export default NavBar
