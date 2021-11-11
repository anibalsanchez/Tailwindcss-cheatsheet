import React, { useContext } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

function Colors({ title }) {
  const { basic } = useContext(TailwindContext);
  const { colors, colorsNum } = basic;

  let listColorSize = (color) => (
    <div className="grid grid-cols-1 gap-0 " key={color}>
      <div className={`text-center text-xs py-4 px-0 m-0 text-${color}-500 `}>
        {color}
      </div>

      {colorsNum.map((v) => {
        return (
          <div className="" key={v}>
            <div className={"py-4 px-4 m-0 text-xs  bg-" + color + "-" + v}>
              <div className={`text-${color}-${v === 400 ? "6" : "4"}00 `}>
                {v}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="">
      <Title title="Colors" />

      <div className="">
        <div className="grid grid-cols-4 border gap-y-2 2xl:grid-cols-8 ">
          {colors.map((v) => {
            return listColorSize(v);
          })}
        </div>
      </div>
    </div>
  );
}

export default Colors;
