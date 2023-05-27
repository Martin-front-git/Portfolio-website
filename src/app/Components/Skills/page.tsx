"use client";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../Redux/Reducers/SkillsReducer";

const Skills: React.FC = () => {
  const count = useSelector((state: any) => state.SkillsReducer.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-screen">
        <h4 className="mt-[30px]">{count}</h4>
        <button
          onClick={() => dispatch(increment())}
          className="w-[100px] h-[50px] bg-black text-white mx-1"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="w-[100px] h-[50px] bg-black text-white mx-1"
        >
          -
        </button>
      </div>
    </>
  );
};
export default Skills;
