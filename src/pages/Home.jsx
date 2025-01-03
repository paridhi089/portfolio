import Nav from "../components/Nav" 
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ExperienceAndEdu from "../components/ExperienceAndEdu"

const Home=()=>{
    return(
        <div className="bg-[#1b1b1b]">
            <Nav/>
            <Hero/>
            <ExperienceAndEdu/>
            <Skills/>

        </div>
    )
}
export default Home