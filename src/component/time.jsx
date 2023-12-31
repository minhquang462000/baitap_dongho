import { useEffect, useState } from "react";
import BtnTime from "./btn";
const Time = ({
  seconds = { seconds },
  minutes = { minutes },
  setMInutes = { setMInutes },
  setSeconds = { setSeconds },
  timer = { timer },
}) => {
  // const [seconds, setSeconds] = useState(60);
  // const [minutes, setMInutes] = useState(9);
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds == 0) {
      setMInutes(minutes - 1);
      setSeconds(59);
    }
    minutes == 0 ? setMInutes(9) : null;

    return () => clearInterval(timer);
  });
  const phut = `0${minutes}`.slice(-2);
  const giay = `0${seconds}`.slice(-2);

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
