import React from "react";
import { useTheme } from "../ThemeContext";
import SalesTab from "./SalesTab";

const SalesPage = () => {
  const { theme, toggleTheme } = useTheme();

  const itemData = [
    { itemName: 'Chicken r', color: 'sky-700', percentage: 100, amount: '100.09 Aed' },
    { itemName: 'Beef bicol', color: 'purple-700', percentage: 90, amount: '100.09 Aed' },
    { itemName: 'Chicken r', color: 'sky-700', percentage: 80, amount: '100.09 Aed' },
    { itemName: 'Beef bicol', color: 'purple-700', percentage: 70, amount: '100.09 Aed' },
    { itemName: 'Chicken r', color: 'sky-700', percentage: 70, amount: '100.09 Aed' },
    { itemName: 'Beef bicol', color: 'purple-700', percentage: 40, amount: '100.09 Aed' },
    { itemName: 'Chicken r', color: 'sky-700', percentage: 50, amount: '100.09 Aed' },
    { itemName: 'Beef bicol', color: 'purple-700', percentage: 90, amount: '100.09 Aed' },
    // Add more items as needed
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 p-4 md:flex-row md:gap-8 lg:gap-16">
        <div
          style={{ boxShadow: theme.shadow, overflow: "hidden" }}
          className="flex-grow w-full p-4 rounded-xl flex-col justify-between items-start inline-flex md:w-[330px] lg:w-[800px]"
        >
          <div className="Frame232 px-4 flex-col justify-between items-start flex">
            <div className="Frame235 self-stretch justify-center gap-4 items-center flex">
              <div className="Frame234 p-4 justify-center items-center gap-[92px] flex">
                <div className="SalesWiseComparison text-sm font-semibold font-['Poppins']">
                  Item wise graph
                </div>
                <div className="text-green-600 text-sm font-normal font-['Poppins']">3 %</div>
              </div>
            </div>
            {itemData.map((item, index) => (
              <div
                key={index}
                className={`Frame219 py-2 self-stretch justify-start items-start inline-flex ${
                  index % 2 === 0 ? 'bg-ccc' : 'bg-fff'
                }`}
              >
                <div className="Dining w-[60%] overflow-hidden text-sm font-medium font-['Poppins'] justify-end items-end flex">
                  {item.itemName}
                </div>
                <div className=" justify-center items-center gap-2 w-[60%]">
                  <div
                    className={`Rectangle35 self-stretch h-5 text-[12px] text-white bg-${item.color}`}
                    style={{ width: `${index === 0 ? '200' : item.percentage}%` }}
                  >
                    {item.amount}
                  </div>
                  <div className="text-sm font-medium font-['Poppins']">
                    {item.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
