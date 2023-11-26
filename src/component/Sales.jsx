// Sales.js
import React, { useState } from "react";
import SalesTab from "./SalesTab";
import BillGraph from "./DashBoardComponents/BillGraph";

const Sales = () => {
  const [selectedTab, setSelectedTab] = useState("DaySummery");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const tabData = {
    DaySummery: {
      billData: [
        { billNo: "373643243", amount: "2.00" },
        { billNo: "253272764", amount: "1.00" },
        { billNo: "123456789", amount: "3.50" },
        { billNo: "987654321", amount: "4.75" },
        { billNo: "456789012", amount: "2.50" },
        { billNo: "345678901", amount: "1.75" },
        { billNo: "234567890", amount: "5.00" },
        { billNo: "678901234", amount: "3.25" },
        { billNo: "567890123", amount: "4.50" },
        { billNo: "890123456", amount: "2.75" },
      ],
      itemData: [
        { label: "Beef Bicol Express", color: "pink-500", quantity: "40 pc", className: "BeefBicolExpress" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
        { label: "New Item 1", color: "blue-500", quantity: "20 pc", className: "NewItem1" },
        { label: "New Item 2", color: "purple-500", quantity: "15 pc", className: "NewItem2" },
        { label: "Item 5", color: "green-500", quantity: "12 pc", className: "Item5" },
        { label: "Item 6", color: "red-500", quantity: "18 pc", className: "Item6" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
       
        { label: "Item 8", color: "yellow-500", quantity: "30 pc", className: "Item8" },
        { label: "Item 10", color: "amber-500", quantity: "16 pc", className: "Item10" },
      ],
    },
    Dining: {
      billData: [
        { billNo: "Dining_Bill1", amount: "3.50" },
        { billNo: "Dining_Bill2", amount: "4.75" },
        { billNo: "Dining_Bill3", amount: "2.25" },
        { billNo: "Dining_Bill4", amount: "5.00" },
        { billNo: "Dining_Bill5", amount: "3.75" },
        { billNo: "Dining_Bill6", amount: "6.50" },
        { billNo: "Dining_Bill7", amount: "4.00" },
        { billNo: "Dining_Bill8", amount: "7.25" },
        { billNo: "Dining_Bill9", amount: "5.50" },
        { billNo: "Dining_Bill10", amount: "8.00" },
      ],
      itemData: [
        { label: "Dining_Item1", color: "orange-500", quantity: "10 pc", className: "DiningItem1" },
        { label: "Dining_Item2", color: "green-500", quantity: "15 pc", className: "DiningItem2" },
        { label: "Dining_Item4", color: "purple-500", quantity: "12 pc", className: "DiningItem4" },
        { label: "Dining_Item3", color: "blue-500", quantity: "8 pc", className: "DiningItem3" },
        { label: "Dining_Item7", color: "yellow-500", quantity: "25 pc", className: "DiningItem7" },
        { label: "Dining_Item4", color: "purple-500", quantity: "12 pc", className: "DiningItem4" },
        { label: "Dining_Item7", color: "yellow-500", quantity: "25 pc", className: "DiningItem7" },
        { label: "Dining_Item2", color: "green-500", quantity: "15 pc", className: "DiningItem2" },
        { label: "Dining_Item7", color: "yellow-500", quantity: "25 pc", className: "DiningItem7" },
      ],
    },
    
    Takeaway: {
      billData: [
        { billNo: "Takeaway_Bill1", amount: "3.25" },
        { billNo: "Takeaway_Bill2", amount: "4.50" },
        { billNo: "Takeaway_Bill3", amount: "2.75" },
        { billNo: "Takeaway_Bill4", amount: "5.50" },
        { billNo: "Takeaway_Bill5", amount: "3.75" },
        { billNo: "Takeaway_Bill6", amount: "6.00" },
        { billNo: "Takeaway_Bill7", amount: "4.25" },
        { billNo: "Takeaway_Bill8", amount: "7.50" },
        { billNo: "Takeaway_Bill9", amount: "5.25" },
        { billNo: "Takeaway_Bill10", amount: "8.75" },
      ],
      itemData: [
        { label: "Beef Bicol Express", color: "pink-500", quantity: "40 pc", className: "BeefBicolExpress" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
        { label: "New Item 1", color: "blue-500", quantity: "20 pc", className: "NewItem1" },
        { label: "New Item 2", color: "purple-500", quantity: "15 pc", className: "NewItem2" },
        { label: "Item 5", color: "green-500", quantity: "12 pc", className: "Item5" },
        { label: "Item 6", color: "red-500", quantity: "18 pc", className: "Item6" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
       
        { label: "Item 8", color: "yellow-500", quantity: "30 pc", className: "Item8" },
        { label: "Item 10", color: "amber-500", quantity: "16 pc", className: "Item10" },
      ],
    },
    Delivery: {
      billData: [
        { billNo: "Delivery_Bill1", amount: "4.00" },
        { billNo: "Delivery_Bill2", amount: "5.25" },
        { billNo: "Delivery_Bill3", amount: "3.75" },
        { billNo: "Delivery_Bill4", amount: "6.50" },
        { billNo: "Delivery_Bill5", amount: "4.75" },
        { billNo: "Delivery_Bill6", amount: "7.00" },
        { billNo: "Delivery_Bill7", amount: "5.25" },
        { billNo: "Delivery_Bill8", amount: "8.50" },
        { billNo: "Delivery_Bill9", amount: "6.25" },
        { billNo: "Delivery_Bill10", amount: "9.75" },
      ],
      itemData: [
        { label: "Delivery_Item1", color: "orange-500", quantity: "15 pc", className: "DeliveryItem1" },
        { label: "Delivery_Item2", color: "green-500", quantity: "20 pc", className: "DeliveryItem2" },
        { label: "Delivery_Item2", color: "green-500", quantity: "20 pc", className: "DeliveryItem2" },
        { label: "Delivery_Item3", color: "blue-500", quantity: "12 pc", className: "DeliveryItem3" },
        { label: "Delivery_Item5", color: "red-500", quantity: "25 pc", className: "DeliveryItem5" },
        { label: "Delivery_Item4", color: "purple-500", quantity: "18 pc", className: "DeliveryItem4" },
        { label: "Delivery_Item7", color: "yellow-500", quantity: "30 pc", className: "DeliveryItem7" },
        { label: "Delivery_Item5", color: "red-500", quantity: "25 pc", className: "DeliveryItem5" },
        { label: "Delivery_Item9", color: "amber-500", quantity: "35 pc", className: "DeliveryItem9" },
        { label: "Delivery_Item9", color: "amber-500", quantity: "35 pc", className: "DeliveryItem9" },
      ],
    },
    Talabat: {
      billData: [
        { billNo: "Talabat_Bill1", amount: "3.75" },
        { billNo: "Talabat_Bill2", amount: "5.00" },
        { billNo: "Talabat_Bill3", amount: "2.50" },
        { billNo: "Talabat_Bill4", amount: "4.00" },
        { billNo: "Talabat_Bill5", amount: "3.25" },
        { billNo: "Talabat_Bill6", amount: "5.50" },
        { billNo: "Talabat_Bill7", amount: "3.00" },
        { billNo: "Talabat_Bill8", amount: "6.25" },
        { billNo: "Talabat_Bill9", amount: "4.50" },
        { billNo: "Talabat_Bill10", amount: "7.75" },
      ],
      itemData: [
        { label: "Beef Bicol Express", color: "pink-500", quantity: "40 pc", className: "BeefBicolExpress" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
        { label: "New Item 1", color: "blue-500", quantity: "20 pc", className: "NewItem1" },
        { label: "New Item 2", color: "purple-500", quantity: "15 pc", className: "NewItem2" },
        { label: "Item 5", color: "green-500", quantity: "12 pc", className: "Item5" },
        { label: "Item 6", color: "red-500", quantity: "18 pc", className: "Item6" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
        { label: "C3", color: "sky-500", quantity: "28 pc", className: "C3" },
       
        { label: "Item 8", color: "yellow-500", quantity: "30 pc", className: "Item8" },
        { label: "Item 10", color: "amber-500", quantity: "16 pc", className: "Item10" },
      ],
    },
    Zomato: {
      billData: [
        { billNo: "Zomato_Bill1", amount: "4.25" },
        { billNo: "Zomato_Bill2", amount: "5.50" },
        { billNo: "Zomato_Bill3", amount: "3.00" },
        { billNo: "Zomato_Bill4", amount: "6.25" },
        { billNo: "Zomato_Bill5", amount: "4.50" },
        { billNo: "Zomato_Bill6", amount: "7.75" },
        { billNo: "Zomato_Bill7", amount: "5.00" },
        { billNo: "Zomato_Bill8", amount: "8.25" },
        { billNo: "Zomato_Bill9", amount: "6.00" },
        { billNo: "Zomato_Bill10", amount: "9.25" },
      ],
      itemData: [
        { label: "Delivery_Item1", color: "orange-500", quantity: "15 pc", className: "DeliveryItem1" },
        { label: "Delivery_Item2", color: "green-500", quantity: "20 pc", className: "DeliveryItem2" },
        { label: "Delivery_Item3", color: "blue-500", quantity: "12 pc", className: "DeliveryItem3" },
        { label: "Delivery_Item4", color: "purple-500", quantity: "18 pc", className: "DeliveryItem4" },
        { label: "Delivery_Item3", color: "blue-500", quantity: "12 pc", className: "DeliveryItem3" },
        { label: "Delivery_Item5", color: "red-500", quantity: "25 pc", className: "DeliveryItem5" },
        { label: "Delivery_Item7", color: "yellow-500", quantity: "30 pc", className: "DeliveryItem7" },
        { label: "Delivery_Item5", color: "red-500", quantity: "25 pc", className: "DeliveryItem5" },
        { label: "Delivery_Item9", color: "amber-500", quantity: "35 pc", className: "DeliveryItem9" },
      ],
    },
    Swiggy: {
      billData: [
        { billNo: "Talabat_Bill1", amount: "3.75" },
        { billNo: "Talabat_Bill2", amount: "5.00" },
        { billNo: "Talabat_Bill3", amount: "2.50" },
        { billNo: "Talabat_Bill4", amount: "4.00" },
        { billNo: "Talabat_Bill5", amount: "3.25" },
        { billNo: "Talabat_Bill6", amount: "5.50" },
        { billNo: "Talabat_Bill7", amount: "3.00" },
        { billNo: "Talabat_Bill8", amount: "6.25" },
        { billNo: "Talabat_Bill9", amount: "4.50" },
        { billNo: "Talabat_Bill10", amount: "7.75" },
      ],
      itemData: [
        { label: "Takeaway_Item1", color: "orange-500", quantity: "12 pc", className: "TakeawayItem1" },
        { label: "Takeaway_Item7", color: "yellow-500", quantity: "28 pc", className: "TakeawayItem7" },
        { label: "Takeaway_Item2", color: "green-500", quantity: "18 pc", className: "TakeawayItem2" },
        { label: "Takeaway_Item7", color: "yellow-500", quantity: "28 pc", className: "TakeawayItem7" },
        { label: "Takeaway_Item4", color: "purple-500", quantity: "15 pc", className: "TakeawayItem4" },
        { label: "Takeaway_Item9", color: "amber-500", quantity: "30 pc", className: "TakeawayItem9" },
        { label: "Takeaway_Item3", color: "blue-500", quantity: "10 pc", className: "TakeawayItem3" },
        { label: "Takeaway_Item9", color: "amber-500", quantity: "30 pc", className: "TakeawayItem9" },
        { label: "Takeaway_Item9", color: "amber-500", quantity: "30 pc", className: "TakeawayItem9" },
      ],
    },
  };

  const { billData, itemData } = tabData[selectedTab];

  return (
    <div className="h-screen grow">
      <SalesTab selectedTab={selectedTab} onTabClick={handleTabClick} />
      <BillGraph billData={billData} itemData={itemData} selectedTab={selectedTab} />
    </div>
  );
};

export default Sales;
