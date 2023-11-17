import React from "react";
import DaySales from "./DaySales";
import DoorDeliverySales from "./DoorDeliverySales";
import SalesGraph from "./SalesGraph";
import MatTable from "../MTable/DoorDelSalesTable";
import DoorDelSalesTable from "../MTable/DoorDelSalesTable";
import DaySalesTable from "../MTable/DaySalesTable";


const Sales = () => {
  return (
    <div className="flex flex-wrap p-2 items-center">
      <div>
        <div className=" text-neutral-900 text-base font-['Poppins']">
          <DaySales/>
        </div>
      </div>

      <div>
        <div className=" text-neutral-900 text-base items-center  font-['Poppins']">
          <DoorDeliverySales />
        </div>
      </div>

      <SalesGraph />
    </div>
  );
};

export default Sales;
