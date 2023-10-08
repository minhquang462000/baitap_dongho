import { useEffect, useState } from "react";
import Time from "./time";
const BtnTime = () => {
  const Restart = () => {
    setMInutes(10);
    setSeconds(0);
  };
  const Stop = () => {
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
