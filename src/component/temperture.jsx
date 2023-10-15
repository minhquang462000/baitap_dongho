import { useState } from "react";

const Temperture = () => {
  const [doC, setDoC] = useState(0);
  const [doF, setDoF] = useState(0);
  const cTof = (e) => {
    setDoC(e.target.value);
  };
  const fToc = (e) => {
    setDoF(e.target.value);
  };
  const kqCtoF = ((9 / 5) * Number(doC) + 32).toFixed(2);
  const kqFtoC = (((Number(doF) - 32) * 5) / 9).toFixed(2);
  return (
    <div className="m-auto">
      <div className="flex gap-5 items-center ">
        <label htmlFor=""> C --> F</label>
        <input
          className="border outline-none p-3 rounded-xl"
          type="number"
          placeholder="C"
          onChange={cTof}
        />
        <p>F :{kqCtoF}</p>
      </div>
      <div className="flex gap-5 items-center">
        <label htmlFor=""> F --> C</label>
        <input
          className="border outline-none p-3 rounded-xl"
          type="number"
          placeholder="F"
          onChange={fToc}
        />
        <p>C :{kqFtoC}</p>
      </div>
    </div>
  );
};
export default Temperture;
