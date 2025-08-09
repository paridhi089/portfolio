import Nav from "../components/Nav" 
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ExperienceAndEdu from "../components/ExperienceAndEdu"
import Footer from "../components/Footer"

const Home=()=>{
    return(
        <div className="bg-[#101418]">
            <Nav/>
            <Hero/>
            <ExperienceAndEdu/>
            <Skills/>
            <Footer/>

        </div>
    )
}
export default Home
