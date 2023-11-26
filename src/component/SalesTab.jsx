import React, { useState } from "react";

const SalesTab = ({ selectedTab, onTabClick }) => {
  const [activeTab, setActiveTab] = useState("DaySummery");

  return (
    <div className="flex grow">
      <div className="Frame366 w-96 h-9 flex-col justify-start items-start gap-2.5 inline-flex grow">
        <div className="Frame198 justify-start items-start gap-2.5 inline-flex">
          <div className="Frame194 justify-center items-center gap-2.5 flex">
            <div
              className={`DaySummery w-[100px] text-xs font-normal font-['Poppins'] p-2 rounded cursor-pointer ${
                activeTab === "DaySummery" ? "" : ""
              }`}
              onClick={() => {
                setActiveTab("DaySummery");
                onTabClick("DaySummery");
              }}
            >
              Day summery
            </div>
          </div>
          <div className="flex relative mb-6 h-[31px]">
            <div className="Frame194 justify-center items-center gap-2.5 flex">
              <div
                className={`Dining text-xs text-fuchsia-600 font-['Poppins'] ${
                  activeTab === "Dining"
                    ? "bg-fuchsia-500 text-stone-50"
                    : "hover:bg-fuchsia-500 hover:text-stone-50"
                } p-2 rounded `}
                onClick={() => {
                  setActiveTab("Dining");
                  onTabClick("Dining");
                }}
              >
                Dining
              </div>
            </div>
            <div className="Frame195 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Takeaway text-pink-500 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Takeaway"
                    ? "bg-pink-500 text-stone-50"
                    : "hover:bg-pink-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => {
                  setActiveTab("Takeaway");
                  onTabClick("Takeaway");
                }}
              >
                Takeaway
              </div>
            </div>
            <div className="Frame196 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Delivery text-red-400 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Delivery"
                    ? "bg-red-500 text-stone-50"
                    : "hover:bg-red-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => {
                  setActiveTab("Delivery");
                  onTabClick("Delivery");
                }}
              >
                Delivery
              </div>
            </div>
            <div className="Frame197 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Talabat text-sky-500 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Talabat"
                    ? "bg-sky-500 text-stone-50"
                    : "hover:bg-sky-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => {
                  setActiveTab("Talabat");
                  onTabClick("Talabat");
                }}
              >
                Talabat
              </div>
            </div>
            <div className="Frame201 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Zomato text-orange-500 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Zomato"
                    ? "bg-orange-500 text-stone-50"
                    : "hover:bg-orange-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => {
                  setActiveTab("Zomato");
                  onTabClick("Zomato");
                }}
              >
                Zomato
              </div>
            </div>
            <div className="Frame200 p-2.5 justify-center items-center gap-2.5 flex">
            <div
              className={`Swiggy text-fuchsia-700 text-xs font-normal font-['Poppins'] p-2 rounded cursor-pointer ${
                activeTab === "Swiggy"
                  ? "bg-fuchsia-500 text-stone-50"
                  : "hover:bg-fuchsia-500 hover:text-stone-50"
              }`}
              onClick={() => {
                setActiveTab("Swiggy");
                onTabClick("Swiggy");
              }}
            >
              Swiggy
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTab;
