import Education from "./Education";
import Experience from "./Experience";

const ExperienceAndEdu = () => {
  return (
    <div className="flex flex-col max-w-[1300px] gap-5 mx-auto lg:flex-row justify-center">
      <Experience />
      <Education />
    </div>
  );
};

export default ExperienceAndEdu;
