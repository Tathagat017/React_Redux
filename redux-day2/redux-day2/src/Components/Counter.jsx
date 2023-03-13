import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../redux/action";
export default function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    console.log(state.counter);
    return state.counter;
  });

  const handleAdd = () => {
    //dispatch and action
    dispatch(addAction(1));
  };
  const handleReduce = () => {
    dispatch(reduceAction(1));
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => handleAdd()}>Add</button>
      <button onClick={() => handleReduce()}>Reduce</button>
    </div>
  );
}
