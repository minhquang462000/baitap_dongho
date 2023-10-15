import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Time from "./component/time";
import BtnTime from "./component/btn";
import Driver from "./component/driver";
import Temperture from "./component/temperture";
function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMInutes] = useState(9);
  const timer = 0;
  return (
    <>
      <div className="flex flex-col w-[500px] gap-5">
        <p>Bai 1</p>
        <Time
          seconds={seconds}
          minutes={minutes}
          setMInutes={setMInutes}
          setSeconds={setSeconds}
          timer={timer}
        ></Time>
        <BtnTime
          seconds={seconds}
          minutes={minutes}
          setMInutes={setMInutes}
          setSeconds={setSeconds}
          timer={timer}
        ></BtnTime>
        <p>Bai 2</p>
        <Driver/>
        <p>Bai 3</p>
        <Temperture/>
      </div>
    </>
  );
}

export default App;
