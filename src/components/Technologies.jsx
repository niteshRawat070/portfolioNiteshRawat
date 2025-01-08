import {RiReactjsLine} from 'react-icons/ri'
import { IoLogoJavascript } from "react-icons/io";
import {SiMongodb} from 'react-icons/si'
import { FaPaintBrush } from "react-icons/fa";
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'
import { motion } from "framer-motion";

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:'linear',
      repeat:Infinity,
      repeatType:'reverse'
    }
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl ">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-cyan-500 p-4">
            <RiReactjsLine className='text-7xl text-cyan-500' />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-yellow-300  p-4">
            < IoLogoJavascript  className='text-7xl text-yellow-300' />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-green-500 p-4">
            <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-red-600 p-4">
            <FaPaintBrush className='text-7xl text-red-600' />
            {/* <p>designing</p> */}
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-green-100 p-4">
            <FaNodeJs className='text-7xl text-green-100' />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-sky-700 p-4">
            <BiLogoPostgresql className='text-7xl text-sky-700' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
