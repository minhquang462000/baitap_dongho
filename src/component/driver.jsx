import { useState } from "react";

const Driver = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const km = (e) => {
    setHeight(e.target.value);
  };
  const kg = (e) => {
    setWeight(e.target.value);
  };
  const reset = (e) => {
    window.location.reload();
  };
  const price = Number(height) * Number(weight);
  return (
    <div className="flex flex-col m-auto">
      <div className="flex justify-evenly border rounded-xl  w-[400px]">
        <label className="m-2 w-[150px]" htmlFor="">
          Nhập giá thành
        </label>
        <input className=" outline-none" type="number" onChange={km} />
      </div>
      <div className="flex justify-evenly border rounded-xl w-[400px]">
        <label className="m-2  w-[150px]" htmlFor="">
          Nhập quãng đường
        </label>
        <input className=" outline-none" type="number" onChange={kg} />
      </div>
      <button
        className="border w-[50px] m-auto bg-red-600 text-white rounded-lg font-bold mt-3"
        onClick={reset}
      >
        C
      </button>

      <div className="mt-5 font-bold">Giá: {price} đ</div>
    </div>
  );
};

export default Driver;
