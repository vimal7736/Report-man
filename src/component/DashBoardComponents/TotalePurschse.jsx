import React from "react";
import { useTheme } from "../../ThemeContext";

const TotalePurschse = () => {
  const { theme, toggleTheme } = useTheme();

  // Data for each section
  const data = [
    {
      title: "Total purchase",
      type: "Cash",
      count: 23,
      amount: 322.61,
      currency: "AED",
      color: "purple-700",
    },
    {
      title: "Total purchase",
      type: "Credit",
      count: 11,
      amount: 322.61,
      currency: "AED",
      color: "fuchsia-600",
    },
  ];

  return (
    <div style={{ boxShadow: theme.shadow }} className="w-[138px] px-5 py-2  bg-opacity-95 rounded-xl flex-col justify-start items-c inline-flex">
      {data.map((item, index) => (
        <div key={index}>
          <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
            <div className="py-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-[10px] font-semibold font-['Poppins']">
                {item.title}
              </div>
            </div>
          </div>
          <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-[10px] font-normal font-['Poppins']">
              {item.type} / {item.count}
            </div>
          </div>
          <div className="h-[23px] justify-start items-end inline-flex">
            <div className="justify-center items-end gap-2.5 flex">
              <div className={`h-[27px] text-${item.color} text-xl font-normal font-['Poppins']`}>
                {item.amount}
              </div>
            </div>
            <div className="justify-center items-end gap-2.5 flex">
              <div className="mb-1 text-xs font-normal font-['Poppins']">{item.currency}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalePurschse;
