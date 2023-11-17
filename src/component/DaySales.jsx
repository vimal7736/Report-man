import React from "react";
import { dummyData } from "../Service/Sales";

const DaySales = () => {


  return (
    <div className="p-4">
      <div className=" text-neutral-900 text-base font-['Poppins']">
        Day sales
      </div>
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 flex">
        <div>
          <br />
          <div className="overflow-hidden">
            <table className=" border-gray-600">
              <thead className="bg-white border border-gray-800">
                <tr className="bg-black text-white text-center border border-separate border-gray-700">
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700 w-60">
                    Item Name
                  </th>
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700">
                    Quantity
                  </th>
                  <th className="text-sm font-medium px-6 py-4 border border-separate border-gray-700">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border border-separate border-gray-700">
                      {item.itemName}
                    </td>
                    <td className="px-6 py-4 border border-separate border-gray-700">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 border border-separate border-gray-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaySales;
