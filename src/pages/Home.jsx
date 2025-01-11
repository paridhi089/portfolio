import Nav from "../components/Nav" 
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ExperienceAndEdu from "../components/ExperienceAndEdu"
import Footer from "../components/Footer"

const Home=()=>{
    return(
        <div className="bg-[#1b1b1b]">
            <Nav/>
            <Hero/>
            <ExperienceAndEdu/>
            <Skills/>
            <Footer/>

        </div>
    )
}
export default Home