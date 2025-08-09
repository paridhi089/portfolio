import HeroIMG from "../assets/HeroIMG.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { MdEmail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  const LINKEDIN = "https://www.linkedin.com/in/paridhi-prisha-saikia";
  const GIT = "https://gitlab.com/paridhips/";
  return (
    <div className="bg-[#101418] max-w-[1300px] h-[80vh] mx-auto flex flex-col-reverse lg:flex-row justify-center ">
      <div className="bg-inherit min-w-[270px] sm:min-w-[550px] flex-col mx-auto my-auto w-30">
        <p className="md:text-6xl text-center lg:text-left sm:text-4xl font -bold text-white">
          Hi! I am Paridhi
        </p>
        <p className="md:text-4xl text-center lg:text-left sm:text-2xl font -bold md:py-6 text-white">
          I am interested in
        </p>

        <h1 className="text-[#5c4dd6] text-center lg:text-left md:text=6xl sm:text-5xl text-2xl font-bold md:py-6">
          <TypeAnimation
            sequence={[
              "Android Development",
              1000,
              "Web Development",
              1000,
              "Computer Networks",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="flex gap-3 my-7 justify-center lg:justify-start">
          <Link to={LINKEDIN} target="_blank" rel="noreferrer">
            <FaLinkedin
              size={40}
              className=" text-white hover:text-black hover:bg-white"
            />
          </Link>
          <Link to={GIT} target="_blank" rel="noreferrer">
            <FaSquareGitlab
              size={40}
              className=" text-white hover:text-black hover:bg-white"
            />
          </Link>
        </div>
      </div>
      <div className="my-auto bg-inherit">
        <img
          className="bg-inherit w-[500px] sm:w-[500px] mx-auto h-auto"
          src={HeroIMG}
          alt="hero image"
        />
      </div>
    </div>
  );
};
export default Hero;
