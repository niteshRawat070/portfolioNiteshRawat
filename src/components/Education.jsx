import about from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'
import college1 from '../assets/college1.jpeg'
import college2 from '../assets/college2.jpg'
import college3 from '../assets/college3.png'


const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-col m-5 sm:items-center">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center m-5">
                <img className='rounded object-cover' src={college1} alt='about' />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2'>
                <div className='flex  justify-center lg:justify-start flex-col'>
                    <p className='my-2 max-w-xl pt-20 font-semibold text-2xl text-neutral-200 '>Manav Rachna International University</p>
                    <span className='text-sm italic'>Bachelors of Computer Applications, 2017-2020</span>
                    <span className='text-sm pb-10 italic'>Faridabad, Delhi, India</span>
                    <p className='mb-4 text-neutral-400 tracking-wide'>Bachelor of Computer Applications (BCA) graduate from Manav Rachna International Institute of Research and Studies, with a strong foundation in software development and application design. My academic journey has equipped me with expertise in programming languages such as Java, C++, and Python, along with skills in web development, database management, and software engineering.

I have engaged in various hands-on projects that allowed me to create innovative applications, enhancing my problem-solving and critical-thinking abilities. I am passionate about leveraging technology to develop user-friendly solutions that address real-world challenges.

As I embark on my professional journey, I am eager to contribute to a collaborative team where I can apply my skills and continue to grow in the ever-evolving field of computer applications.</p>
                </div>
            </motion.div>



            
            <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center m-5">
                <img className='rounded object-cover w-full' src={college2} alt='about' />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2'>
                <div className='flex  justify-center lg:justify-start flex-col'>
                    <p className='my-2 max-w-xl pt-20 font-semibold text-2xl text-neutral-200 '>Conestoga College</p>
                    <span className='text-sm italic'>Software Quality Assurance and Test Engineering, Jan 2023- August 2023</span>
                    <span className='text-sm pb-10 italic'>Waterloo, Ontario, Canada</span>
                    <p className='mb-4 text-neutral-400 tracking-wide'>I am a graduate of the Software Quality Assurance and Test Engineering program from Conestoga College, where I developed a robust understanding of software testing methodologies and quality assurance practices. My studies focused on various aspects of software testing, including manual and automated testing, test planning, and defect management.

Throughout the program, I gained practical experience in designing and executing test cases, as well as utilizing testing tools and frameworks that ensure software reliability and performance. My coursework emphasized critical thinking and analytical skills, enabling me to identify issues and improve software quality effectively.

I am passionate about contributing to the development of high-quality software solutions and am eager to bring my skills in quality assurance to a dynamic team. I look forward to leveraging my expertise to enhance user experiences and ensure that products meet industry standards.</p>
                </div>
            </motion.div>




            <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center m-5">
                <img className='rounded object-cover w-full' src={college3} alt='about' />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2'>
                <div className='flex  justify-center lg:justify-start flex-col'>
                    <p className='my-2 max-w-xl pt-20 font-semibold text-2xl text-neutral-200 '>Conestoga College</p>
                    <span className='text-sm italic'>Information Technology Project Management, Jan 2024- August 2024</span>
                    <span className='text-sm pb-10 italic'>Kitchener, Ontario, Canada</span>
                    <p className='mb-4 text-neutral-400 tracking-wide'>I am a graduate of the Information Technology Project Management program from Conestoga College, where I gained comprehensive knowledge and skills in managing IT projects from inception to completion. My studies covered key areas such as project planning, risk management, stakeholder engagement, and agile methodologies.

Throughout the program, I participated in hands-on projects that allowed me to apply theoretical concepts in real-world scenarios, enhancing my ability to lead teams and drive project success. I developed strong communication and organizational skills, which are essential for coordinating diverse teams and managing project timelines and budgets effectively.

I am passionate about utilizing my project management skills to deliver technology solutions that align with business goals. I am eager to contribute to a collaborative environment where I can facilitate successful project outcomes and ensure the effective delivery of IT initiatives.</p>
                </div>
            </motion.div>
            
      </div>
    </div>

  )
}

export default Education
