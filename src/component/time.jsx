import { useEffect, useState } from "react";
import BtnTime from "./btn";
const Time = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMInutes] = useState(9);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
   
    // if (seconds == 0) {
    //   setMInutes(minutes -1)
    //   setSeconds(59)
    // }
    
    seconds == 0 ?  setSeconds(59)  : null
    seconds == 0 ?  setMInutes(minutes -1)  : null
   

    return () => clearInterval(timer);
  });
  const phut = `0${minutes}`.slice(-2)
  const giay = `0${seconds}`.slice(-2)


  return (
    <div className="flex  w-[500px] justify-center">
      <div className="border border-solid w-[150px]">
        <div>Phút</div>
        <div>{phut}</div>
      </div>
      <div className="border border-solid w-[150px]">
        <div>Giây</div>
        <div>{giay}</div>
      </div>
    </div>
    
  );
};
export default Time;
