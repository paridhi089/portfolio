import HeroIMG from '../assets/HeroIMG.png';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import {TypeAnimation} from "react-type-animation";
import { MdEmail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";



const Hero=()=>{
    return(
        <div className="bg-[#1b1b1b] max-w-[1300px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center ">
            <div className='bg-inherit flex-col mx-auto my-auto'>
                <p className='md:text-6xl sm:text-4xl font -bold text-white'>Hi! I am Paridhi</p>
                <p className='md:text-4xl sm:text-2xl font -bold md:py-6 text-white'>I am interested in</p>
                
                <h1 className='text-white md:text=6xl sm:text-5xl text-2xl font-bold md:py-6'>
                    

                    <TypeAnimation
                    sequence={
                        [
                            "Android Developer",
                            1000,
                            "Web Developer",
                            1000,
                            "Computer Networks",
                            1000,
                            "Server Admin",
                            1000,
                            
                        ]
                    }
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    
                    />
                </h1>
                <div className='flex gap-3 my-7 justify-start'>
                    <FaLinkedin size={40} className=' text-white hover:text-black hover:bg-white' />
                    <FaSquareGitlab size={40} className=' text-white hover:text-black hover:bg-white'  />
                   
                </div>
            </div>
            <div className='my-auto bg-inherit'>
                <img className='bg-inherit w-[500px] sm:w-[500px] mx-auto h-auto' src={HeroIMG} alt='hero image'/>
            </div>

            
            

        </div>
    )
}
export default Hero