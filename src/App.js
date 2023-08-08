import { useState } from "react";
import "./App.css";


function App() {
  
  const[count, setCount] = useState(0);
  function decreaseHandler(){
      setCount(count-1);
  }
  function inreaseHandler(){
    setCount(count+1);
}
function resetHandler(){
  setCount(0);
}


  return (
    
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div className="text-[#0398d4] font-medium text-2xl" >Increament and Decreament</div>
        <div className="flex flex-row bg-white justify-center gap-12 py-3 rounded-sm text-[25px] " >

          <button onClick={decreaseHandler} className="border-r-2 w-20 text-center border-[#bfbfbf] text-5xl" >-</button>

          <div className="font-bold text-5xl">{count}</div>

          <button onClick={inreaseHandler} className="border-l-2 w-20 text-center border-[#bfbfbf] text-5xl">+</button>

        </div>
        <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-sm text-lg">Reset</button>

    </div>
  );
}
//flex justify-center items-center gap-4 flex-col
export default App;
