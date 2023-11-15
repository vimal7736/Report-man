import React from "react";
import {  newDataArray } from "../../src/Service/Sales";

const DoorDeliverySales = () => {
  if (!Array.isArray(newDataArray)) {
    console.error("Invalid newDataArray:", newDataArray);
    return null;
  }

  return (
    <div className="p-4">
      <div className="w-[451px] text-neutral-900 text-base  font-['Poppins']">
        Door Delivery Sales
      </div>
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 flex">
        <div>
          <br />
          <div className="overflow-hidden">
            <table className="min-w-full border-gray-600">
              <thead className="bg-white border border-gray-800">
                <tr className="bg-black text-white text-center border border-separate border-gray-700">
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700 w-60" rowSpan="2">
                    Delivery Boy
                  </th>
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700" rowSpan="2">
                    Bill No.
                  </th>
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700" rowSpan="2">
                    Customer
                  </th>
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700" rowSpan="2">
                    Items
                  </th>
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700" rowSpan="2">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Iterate over newDataArray and create rows */}
                {newDataArray.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border border-separate border-gray-700">{data.deliveryBoy}</td>
                    <td className="px-6 py-4 border border-separate border-gray-700">{data.billNumber}</td>
                    <td className="px-6 py-4 border border-separate border-gray-700">{data.customerName}</td>
                    <td className="px-6 py-4 border border-separate border-gray-700">{data.items}</td>
                    <td className="px-6 py-4 border border-separate border-gray-700">{data.value}</td>
                  </tr>
                ))}
                {/* Grand Total row */}
                <tr>
                  <td className="px-6 py-4 border border-separate border-gray-700">Grand Total</td>
                  <td className="px-6 py-4 border border-separate border-gray-700"></td>
                  <td className="px-6 py-4 border border-separate border-gray-700"></td>
                  <td className="px-6 py-4 border border-separate border-gray-700"></td>
                  <td className="px-6 py-4 border border-separate border-gray-700">470AED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorDeliverySales;
