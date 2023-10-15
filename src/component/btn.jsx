import { useEffect, useState } from "react";
const BtnTime = ({
  seconds = { seconds },
  minutes = { minutes },
  setMInutes = { setMInutes },
  setSeconds = { setSeconds },
  timer = { timer },
}) => {
  const Restart = () => {
    setMInutes(10);
    setSeconds(0);
  };
  // useEffect(()=>{})
  const Stop = () => {
    console.log(timer);
    clearInterval(timer);
  };
  return (
    <div className="flex justify-center">
      <button className="border border-solid w-[100px]" onClick={Restart}>
        Restart
      </button>
      <button className="border border-solid w-[100px]" onClick={Stop}>
        Stop
      </button>
    </div>
  );
};
export default BtnTime;
