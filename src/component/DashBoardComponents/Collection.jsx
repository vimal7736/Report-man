import React from "react";
import { DChart } from "../../chart/DonutChart";
import { useTheme } from "../../ThemeContext";

const DataItem = ({ label, color, percentage, amount }) => (
  <div className="flex-col justify-start items-start inline-flex">
    <div className="justify-start items-center inline-flex">
      <div
        className={`p-1 justify-start items-start gap-2.5 flex bg-${color} rounded-sm`}
      />
        <div
          className={`p-1 justify-start items-start gap-2.5 flex rounded-sm`}
        />
      <div className="py-2.5 justify-center items-center gap-2.5 flex">
        <div className={`text-[10px] font-semibold `}>
          {`${label} ${percentage}`}
        </div>
      </div>
    </div>
  </div>
);
const collectionData = [
  { label: "Cash", color: "teal-400", percentage: "60%", amount: "900 AED" },
  { label: "Google pay", color: "amber-300", percentage: "25%" },
  { label: "Credit", color: "pink-700", percentage: "15%" },
  { label: "Credit card", color: "orange-400", percentage: "30%" },
];

const Collection = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <div
      style={{ boxShadow: theme.shadow }}
      className="w-[350px]  h-[220px] px-5 py-2.5  grow  rounded-xl  justify-center items-center gap-5 "
    >
      <div className="Frame270 w-44 h-20 flex-col justify-start items-start inline-flex">
        <div className="Frame267 p-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="CollectionDistribution text-sm font-semibold ">
            Collection distribution
          </div>
        </div>
        <div className="Frame268 px-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="TotalAmount text-xs font-normal ">
            Total amount
          </div>
        </div>
        <div className="Frame269 px-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="61Aed">
            <span className=" text-xl font-semibold ">
              365.61
            </span>
            <span className=" text-xl font-normal "> AED</span>
          </div>
        </div>
        <div className="h-[126px] flex-col justify-between items-start inline-flex mt-10 ml-52 absolute">
          <DChart />
          <div className="justify-center  absolute mt-14 ml-9 items-center inline-flex">
            <div className="px-2.5 pt-[5px] pb-2.5 justify-center items-center gap-2.5 relative">
              <div className="text-[9px] font-semibold ml-[7px] mt-[-10px] absolute ">cash</div>
              <div className="text-[10px] font-semibold relative">900 AED</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex   gap-14">
        <div className="flex p-3 flex-col">
          <div className="flex flex-row gap-8">
            {collectionData.slice(0, 2).map((data, index) => (
              <DataItem key={index} {...data} />
            ))}
          </div>
          <div className="flex flex-row mt-2  gap-8">
            {collectionData.slice(2).map((data, index) => (
              <DataItem key={index + 2} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
