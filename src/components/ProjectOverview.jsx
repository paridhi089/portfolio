import MiniSlide from "./projectComponets/MiniSlide";
import { useNavigate } from "react-router-dom";

const ProjectOverview = (item) => {
  const navigate=useNavigate()


  const handleClick = () => {
    navigate(`/projects/${item.id}`);
  };
  return (
    <div className="itemNeu justify-between sm:max-w-[350px] sm:h-auto flex flex-col px-6 py-6 ">
      <MiniSlide slides={item.carousel}/>

      <div className="mb-6" onClick={handleClick}>
        <h1 className="text-2xl text-center mt-4 px-4 text-white">
          {item.title}
        </h1>
        <p className="text-white line-clamp-3 text-sm text-left px-4 ">{item.summary}</p>
      </div>
    </div>
  );
};

export default ProjectOverview;
