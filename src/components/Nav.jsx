import {CgNametag} from 'react-icons/cg';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Nav=()=>{
    const [toggle, setToggle]=useState(false);
    function openMenu(){
        setToggle(true);
    }
    function closeMenu(){
        setToggle(false);
    }
    return(
        <>
        <div className="flex item-center justify-between p-6 lg:flex-row ">
            <div> 
                <a href="#" className="text-white font-mono text-2xl tracking-wider flex items-center"><CgNametag/>Paridhi</a>
            </div>
            <div className=" space-x-4">
                <div className='ssm:hidden lg:block spca-x-2'>
                        <a href="/" className="text-white hover:bg-slate-800 rounded-lg px-5 py-2 text-xl">Home</a>
                      <a href="/projects" className="text-white hover:bg-slate-800 rounded-lg px-5 py-2 text-xl">Projects</a>
                         <a href="#" className="text-white hover:bg-slate-800 rounded-lg px-5 py-2 text-xl">About</a>
                       <a href="#" className="text-white hover:bg-slate-800 rounded-lg px-5 py-2 text-xl">Blog</a>
                </div>
                <div className='ssm:block lg:hidden'>
                    {toggle ? (
                        <AiOutlineClose size={30} onClick={closeMenu} className='text-white cursor-pointer'/>
                    ) : (<CiMenuFries size={30} onClick={openMenu} className='text-white cursor-pointer'/>)
                }

                </div>

            </div>
        </div> 
        <div className='ssm:block lg:hidden'>
            {toggle?(
                <div className='flex justify-between ml-10'>
                <ul>
                    <li className='hover:bg-slate-800 text-white text-xl mb-2 cursor-pointer'><a href="/">Home</a></li>
                    <li className='hover:bg-slate-800 text-white text-xl mb-2 cursor-pointer'><a href="/projects">Projects</a></li>
                    <li className='hover:bg-slate-800 text-white text-xl mb-2 cursor-pointer'>About</li>
                    <li className='hover:bg-slate-800 text-white text-xl mb-2 cursor-pointer'>Blog</li>
                </ul>
            </div>

            ):(
                <div></div>

            )}
            
        </div>
        
        </>
    )
}
export default Nav