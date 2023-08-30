import { useDispatch } from "react-redux";
import { getInput } from "./redux/kalkulSlice";

const KalkBTN = ({ id, disp, forKalk }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getInput(forKalk));
  };

  return (
    <div id={id} className="pad-btn" onClick={handleClick}>
      {disp}
    </div>
  );
};

export default KalkBTN;
