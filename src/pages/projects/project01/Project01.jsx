import Slide from "../../../components/projectComponets/Slide";
import {carasoul} from "./data";
import { title } from "./data";
const Project01 = () => {
  return (
    <div className="flex-col mx-16 my-16 items-center justify-center">
      <div className="mb-8">
        <h1 className="text-center text-white text-3xl">{title}</h1>
      </div>
      <div>
        <Slide slides={carasoul} />
      </div>
    </div>
  );
};

export default Project01;
