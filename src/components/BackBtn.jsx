import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
const BackBtn = (props) => {
  const navigate = useNavigate();
  const handleBackPress = () => {
    const path = props.path;
    navigate(path);
  };
  return (
    <div className="px-12 py-4 pb-6">
      <MdOutlineArrowBack
        size={30}
        color={"#ffffff"}
        className="bg-transparent"
        onClick={handleBackPress}
      />
    </div>
  );
};

export default BackBtn;
