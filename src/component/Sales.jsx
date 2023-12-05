import React, { useEffect, useState } from "react";
import SalesTab from "./SalesTab";
import BillGraph from "./DashBoardComponents/BillGraph";
import { useTranslation } from 'react-i18next';
import { getItemsSalesData } from "../Service/SalesData/service";
import "./Sales.css";

const Sales = () => {
  const [selectedTabType, setSelectedTabType] = useState("totalSales");
  const [selectedTab, setSelectedTab] = useState("DaySummary");
  const [data, setData] = useState(null);
  const [itemWiseSales, setItemWiseSales] = useState([]);
  const [totalSales, setTotalSales] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(new Date("02/11/2023"));
  const [endDate, setEndDate] = useState(new Date("10/11/2023"));
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItemsSalesData(startDate, endDate, selectedTab);
        setData(result);
        setItemWiseSales(result.itemWiseSales || []);
        setDiscount(result.discountAmount[0].discountAmountValue);
        setTotalSales(result.totalSalesData);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate, selectedTab]);

  const handleTabClick = async (tab) => {
    setSelectedTab(tab);
    setLoading(true);
    try {
      let result;
      if (tab === "Dine In" || tab === "Take Away" || tab === "Swiggy") {
        result = await getItemsSalesData(startDate, endDate, "total");
        setTotalSales(result.totalSalesData);
        setSelectedTabType("totalSales");
      } 
      else if (tab === "DaySummary") {
        result = await getItemsSalesData(startDate, endDate, "DaySummery");
        setSelectedTabType("DaySummery");
      } 
      
      
      else {
        // Handle other tabs as needed
        // For example, if there are more tabs, add conditions for each one
        // result = await getItemsSalesData(startDate, endDate, tab);
        // setSelectedTabType("SomeOtherType");
      }
  
      setData(result);
      setItemWiseSales(result.itemWiseSales || []);
      setDiscount(result.discountAmount[0].discountAmountValue);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  
  const ItemWiseGraph = ({ totalSales, itemWiseSales, loading, displayMode }) => {
    const [activeMode, setActiveMode] = useState('DaySummary');
  
    useEffect(() => {
      if (displayMode !== 'total') {
        setActiveMode(displayMode.toLowerCase());
      } else {
        setActiveMode('DaySummary');
      }
    }, [displayMode]);
  
    const dataToSort = activeMode === 'DaySummary' ? totalSales : itemWiseSales;
  };
  

  return (
    <div className="flex flex-col ">
     
      <div className="flex ">
        <SalesTab
          setError={setError}
          selectedTab={selectedTab}
          onTabClick={handleTabClick}
          setItemWiseSales={setItemWiseSales}
          setData={setData}
          endDate={endDate}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div>

      <BillGraph
        data={data}
        billData={data?.billData}
        itemData={data?.itemData}
        itemWiseSales={itemWiseSales}
        selectedTab={selectedTab}
        loading={loading}
        discount={discount}
        totalSales={totalSales}
      />
      </div>
    </div>  
  );
};

export default Sales;
