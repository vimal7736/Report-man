import React from "react";
import DaySales from "./DaySales";
import DoorDeliverySales from "./DoorDeliverySales";
import SalesGraph from "./SalesGraph";
import MatTable from "../MTable/DoorDelSalesTable";
import DoorDelSalesTable from "../MTable/DoorDelSalesTable";
import DaySalesTable from "../MTable/DaySalesTable";


const Sales = () => {
  return (
    <div className="flex flex-wrap gap-10 p-10 items-center">
      <div>
        <div className=" text-neutral-900 text-base font-['Poppins']">
          Day Sales
          <DaySalesTable/>
        </div>
      </div>

      <div>
        <div className=" text-neutral-900 text-base items-center w-[700px]  font-['Poppins']">
          Door Delivery Sales
          <DoorDelSalesTable />
        </div>
      </div>

      <SalesGraph />
    </div>
  );
};

export default Sales;
