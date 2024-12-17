import Nav from "./Nav" 
import Hero from "./Hero"
import SkillItem from "./SkillItem"
import CLang from '../assets/icons/CLang.svg'
import Cplusplus from '../assets/icons/cplusplus.svg'
import Java from '../assets/icons/java-icon.svg'
import JS from '../assets/icons/javascript.svg'
import HTML from '../assets/icons/html.svg'
import Css from '../assets/icons/css.svg'
import PHP from '../assets/icons/php.svg'
import Python from '../assets/icons/python.svg'
import Bash from '../assets/icons/bash.svg'
import KT from '../assets/icons/kotlin.svg'
import SQL from '../assets/icons/mysql.svg'
import Firebase from '../assets/icons/firebase.svg'
import Mongo from '../assets/icons/mongo.svg'
import Supabase from '../assets/icons/supabase.svg'
import Rt from '../assets/icons/react.svg'
import NJS from '../assets/icons/nodejs.svg'
import BS from '../assets/icons/bootstrap.svg'
import TW from '../assets/icons/tailwindcss.svg'
import Debian from '../assets/icons/debian.svg'
import Arch from '../assets/icons/archlinux.svg'
import Fedora from '../assets/icons/fedora.svg'
import Nix from '../assets/icons/nix.svg'
import Win from '../assets/icons/windows.svg'
import IDE from '../assets/icons/ide.svg'
import WD from '../assets/icons/webdriver.svg'
import Vim from '../assets/icons/vim.svg'
import AWS from '../assets/icons/aws.svg'
import Git from '../assets/icons/git.svg'


const Skills=()=>{
    return(
        <div className="items-center">
             <div className="my-5 w-3/4 p-4  mx-auto text-white ">
                <h1 className=" text-center text-7xl">Skills</h1>
            </div>
            <div className="my-5 w-3/4 p-2  mx-auto text-white ">
                <h1 className=" text-start text-2xl">Languages</h1>
            </div>
            <div className="items-center my-5 w-3/4 p-4 mx-auto flex-row">
                <div className=" grid grid-cols-2 sm:gap-4  md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <SkillItem text="Kotlin" src={KT}/>
                    <SkillItem text="Java" src={Java}/>
                    <SkillItem text="Java Script" src={JS}/>
                    <SkillItem text="HTML" src={HTML}/>
                    <SkillItem text="CSS" src={Css}/>
                    <SkillItem text="PHP" src={PHP}/>
                    <SkillItem text="Python" src={Python}/>
                    <SkillItem text="Shell Scripting" src={Bash}/>

                </div>
            </div>
            <div className="my-5 w-3/4 p-2  mx-auto text-white ">
                <h1 className=" text-start text-2xl">Databases</h1>
            </div>
            <div className="items-center my-5 w-3/4 p-4 mx-auto flex-row">
                <div className=" grid grid-cols-2 sm:gap-4  md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <SkillItem text="My SQL" src={SQL}/>
                    <SkillItem text="Firebase" src={Firebase}/>
                    <SkillItem text="Supabase" src={Supabase}/>
                    <SkillItem text="Mongo DB" src={Mongo}/>
                   

                </div>
            </div>
            <div className="my-5 w-3/4 p-2  mx-auto text-white ">
                <h1 className=" text-start text-2xl">Framework</h1>
            </div>
            <div className="items-center my-5 w-3/4 p-4 mx-auto flex-row">
                <div className=" grid grid-cols-2 sm:gap-4  md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <SkillItem text="React Native" src={Rt}/>
                    <SkillItem text="React" src={Rt}/>
                    <SkillItem text="Node.js" src={NJS}/>
                    <SkillItem text="Bootstrap" src={BS}/>
                    <SkillItem text="Tailwind CSS" src={TW}/>
                </div>
            </div>
            <div className="my-5 w-3/4 p-2  mx-auto text-white ">
                <h1 className=" text-start text-2xl">Software Testing</h1>
            </div>
            <div className="items-center my-5 w-3/4 p-4 mx-auto flex-row">
                <div className=" grid grid-cols-2 sm:gap-4  md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <SkillItem text="Selenium IDE" src={IDE}/>
                    <SkillItem text="Selenium WebDriver" src={WD}/>
                </div>
            </div>
            <div className="my-5 w-3/4 p-2  mx-auto text-white ">
                <h1 className=" text-start text-2xl">Operating Systems</h1>
            </div>
            <div className="items-center my-5 w-3/4 p-4 mx-auto flex-row">
                <div className=" grid grid-cols-2 sm:gap-4  md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <SkillItem text="Debian" src={Debian}/>
                    <SkillItem text="Arch Linux" src={Arch}/>
                    <SkillItem text="Fedora" src={Fedora}/>
                    <SkillItem text="Nix OS" src={Nix}/>
                    <SkillItem text="Windows" src={Win}/>
                </div>
            </div>
            <div className="my-5 w-3/4 p-2  mx-auto text-white ">
                <h1 className=" text-start text-2xl">Others</h1>
            </div>
            <div className="items-center my-5 w-3/4 p-4 mx-auto flex-row">
                <div className=" grid grid-cols-2 sm:gap-4  md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <SkillItem text="Vim" src={Vim}/>
                    <SkillItem text="Git" src={Git}/>
                    <SkillItem text="AWS" src={AWS}/>
                
                </div>
            </div>


        </div>
        
           
       
    )
}
export default Skills
