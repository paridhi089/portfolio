import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-row lg:flex-col-reverse mx-auto mb-12 lg:max-w-[800px]">
        <div className="itemNeu mx-5 mt-10 px-8 py-8">
          <h1 className="text-4xl font-bold text-center text-white">
            About Me
          </h1>
          <p className="mt-8 text-[16px] leading-8 text-white">
            I am Paridhi, a passionate developer with a deep interest in Android
            application development and computer networking. My love for
            technology also extends to web development, where I enjoy creating
            modern, responsive, and functional websites.
          </p>
          <p className="mt-8 text-[16px] leading-8 text-white">
            I believe that software should be a force for good, empowering
            humanity and driving positive change. Technology has the power to
            address social challenges, and I am committed to building solutions
            that contribute to a better world by making a meaningful impact.
          </p>
          <p className="mt-8 text-[16px] leading-8 text-white">
            Beyond coding, I am a dedicated advocate for Free and Open Source
            Software (FOSS), privacy rights, and the right to repair, believing
            that technology should empower users, promote transparency, and
            foster a collaborative community.
          </p>

          <p className="mt-8 text-[16px] leading-8 text-white">
            In my free time, I explore the world of custom mechanical keyboards,
            experimenting with switches, keycaps, and layouts to build unique
            typing experiences. I also enjoy ricing my Linux distro, fine-tuning
            every aspect of the user interface to create a visually stunning and
            highly personalized workspace. When I’m not immersed in development
            or customization, you can often find me gaming and exploring
            interactive digital worlds.
          </p>
          <p className="mt-8 text-[16px] leading-8 text-white">
            I’m constantly learning, experimenting, and striving to improve my
            skills across platforms. Whether it’s building a mobile app,
            configuring a network, or designing a web project, I aim to create
            solutions that are not only functional but also user-centric and
            impactful.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default About;
