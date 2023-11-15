import React from 'react';
import { CountTax } from '../Service/Tax';

const Tax = () => {
  return (
    <div className="w-[1200px] h-1200px p-8 flex flex-col justify-start items-start gap-2.5">
      <div className="overflow-hidden">
        <table className="border-gray-50">
          <thead className="bg-white border border-gray-800">
            <tr className="bg-black text-white text-center border border-separate border-gray-400">
              <th
                className="text-sm font-medium px-6 py-4 border border-separate border-gray-400"
                rowSpan="2"
              >
                Branch name
              </th>
              <th
                className="text-sm font-medium px-6 py-2 border border-separate border-gray-400"
                colSpan="2"
              >
                Tax 5%
              </th>
            </tr>
            <tr className="bg-black text-white border-gray-400">
              <th className="text-xs font-light border-gray-400 text-center border border-separate">
                Count
              </th>
              <th className="text-xs font-light text-center border-gray-400 border border-separate">
                Tax
              </th>
            </tr>
          </thead>

          <tbody>
            {CountTax.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                  {item.branch}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                  {item.tax}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tax;
