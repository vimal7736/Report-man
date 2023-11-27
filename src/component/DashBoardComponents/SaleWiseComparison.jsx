import React from "react";
import { useTheme } from "../../ThemeContext";
import "./salewise.css"

const SaleWiseComparison = ({ data }) => {
  const salesData = [
    { label: "Dining", percent: 100, color: "bg-purple-700" },
    { label: "Take Away", percent: 60, color: "bg-fuchsia-600" },
    { label: "Delivery", percent: 50, color: "bg-amber-300" },
    { label: "Swiggy", percent: 30, color: "bg-red-400" },
    { label: "Take Away", percent: 60, color: "bg-fuchsia-600" },
    { label: "Dining", percent: 100, color: "bg-purple-700" },
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{ boxShadow: theme.shadow, overflow: "hidden" }}
      className="flex-1 w-[330px] h-[225px] p-2 rounded-xl flex-col grow justify-between items-start inline-flex"
    >
      <div className="Frame232 px-2 flex-col justify-between items-start flex">
        <div className="Frame235 self-stretch justify-center  grow gap-12 items-center flex">
          <div className="Frame234 p-2 grow justify-center items-center gap-[92px] flex">
            <div className="SalesWiseComparison text-xs font-semibold font-['Poppins']">
              Sales wise comparison
            </div>
            <div className="text-green-600 text-xs font-normal font-['Poppins']">
              3%
            </div>
          </div>
        </div>

        <div className="overflow-auto">
          {salesData.map((item, index) => (
            <div
              key={index}
              className="Frame219 py-1.5 self-stretch justify-start items-start inline-flex"
            >
              <div className="Dining w-20 text-xs font-medium font-['Poppins'] justify-end items-end flex">
                {item.label}&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div className="Frame217 grow shrink basis-0 w-[270px] md:w-[300px] sm:w-[100px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    className={`${item.color} self-stretch h-3.5`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                  <div className="text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;{item.percent}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleWiseComparison;
