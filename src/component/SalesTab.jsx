import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const SalesTab = ({
  selectedTab,
  setLoading,
  setData,
  getItemsSalesData,
  setSelectedTab,
  setTotalSales,
  onTabClick,
  setItemWiseSales,
  setError,
  setDiscount,
  startDate,
  endDate,
}) => {
  const [activeTab, setActiveTab] = useState("Day Summary");
const { t } = useTranslation();


  const tabs = [
    { name: "Day Summary", dataKey: "DaySummary" },
    { name: "Dining", dataKey: "Dine In" },
    { name: "Take Away", dataKey: "Take Away" },
    { name: "Delivery", dataKey: "Swiggy" },
    { name: "Talabat", dataKey: "Talabat" },
    { name: "Zomato", dataKey: "Zomato" },
    { name: "Swiggy", dataKey: "Swiggy" },
  ];


  const handleTabClick = async (tab) => {
    setSelectedTab(tab);
    setActiveTab(tab);

    try {
      let result;

      const selectedTabInfo = tabs.find((t) => t.name === tab);

      if (selectedTabInfo) {
        result = await getItemsSalesData(startDate, endDate, tab);

        // Update state based on the selected tab's data key
        if (selectedTabInfo.dataKey === "totalSalesData") {
          setTotalSales(result[selectedTabInfo.dataKey] || []);
        } else {
          setItemWiseSales(result[selectedTabInfo.dataKey] || []);
        }

        setDiscount(result.discountAmount[0].discountAmountValue);
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
    }
  };


  return (
    <div className="flex grow">
      <div className="Frame366 pl-[12px] pr-[12px] h-9 flex-col justify-start items-start gap-2.5 inline-flex grow">
        <div className="Frame198 justify-start items-start gap-2.5 inline-flex">
          <div className="Frame194 justify-center items-center gap-2.5 flex">
            <div
              className={`Take Away text-pink-500 text-xs font-normal font-['Poppins'] ${
                activeTab === "Day Summary"
                  ? "bg-pink-500 text-stone-50"
                  : "hover:bg-pink-500 hover:text-stone-50"
              } p-2 rounded cursor-pointer`}
              onClick={() => handleTabClick("DaySummary")}
            >
               {t("Day Summary")}
            </div>
          </div>

          <div className="flex  mb-6 h-[31px]">
            <div className="Frame194 justify-center items-center gap-2.5 flex">
              <div
                className={`Dining text-xs text-fuchsia-600 font-['Poppins'] ${
                  activeTab === "Dine In"
                    ? "bg-fuchsia-500 text-stone-50"
                    : "hover:bg-fuchsia-500 hover:text-stone-50"
                } p-2 rounded `}
                onClick={() => handleTabClick("Dine In")}
              >
                 {t("Dining")}
              </div>
            </div>
            <div className="Frame195 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Take Away text-pink-500 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Take Away"
                    ? "bg-pink-500 text-stone-50"
                    : "hover:bg-pink-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick("Take Away")}
              >
                {t("Take Away")}
              </div>
            </div>
            <div className="Frame196 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Delivery text-red-400 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Delivery"
                    ? "bg-red-500 text-stone-50"
                    : "hover:bg-red-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick("Delivery")}
              >
                {t("Delivery")}
              </div>
            </div>
            <div className="Frame197 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Talabat text-sky-500 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Talabat"
                    ? "bg-sky-500 text-stone-50"
                    : "hover:bg-sky-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick("Talabat")}
              >
                {t("Talabat")}
                
              </div>
            </div>
            <div className="Frame201 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Zomato text-orange-500 text-xs font-normal font-['Poppins'] ${
                  activeTab === "Zomato"
                    ? "bg-orange-500 text-stone-50"
                    : "hover:bg-orange-500 hover:text-stone-50"
                } p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick("Zomato")}
              >
                {t("Zomato")}
                
              </div>
            </div>
            <div className="Frame200 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Swiggy text-fuchsia-700 text-xs font-normal font-['Poppins'] p-2 rounded cursor-pointer ${
                  activeTab === "Swiggy"
                    ? "bg-fuchsia-500 text-stone-50"
                    : "hover:bg-fuchsia-500 hover:text-stone-50"
                }`}
                onClick={() => handleTabClick("Swiggy")}
              >
                 {t("Swiggy")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTab;
