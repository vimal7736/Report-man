import React from "react";
import { data } from "../../src/Service/Payment";

const Payment = () => {
  const totalSalesSum = data.reduce(
    (total, item) => total + item.totalSales,
    0
  );
  

  return (
    <div className=" flex flex-wrap p-8">
      <table className="h-[272px] justify-start items-start gap-2.5 flex">
        <tbody>
          <tr className="w-[353px] flex-col justify-start items-start gap-2.5 inline-flex">
            <td className="h-[272px] flex-col justify-start items-start flex">
              {/* Table header */}

              <div className="self-stretch h-11 border-t border-white justify-start items-start inline-flex">
                <div className="w-[177px] self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal font-['Inter']">
                    Payment mode
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal font-['Inter']">
                    Total sales
                  </div>
                </div>
              </div>

              {/* Table body */}

              {data.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch h-[46px] justify-start items-start inline-flex"
                >
                  <div
                    className={`w-[177px] self-stretch px-5 py-2 ${
                      index % 2 === 0 ? "bg-gray-200" : "bg-stone-50"
                    } border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex`}
                  >
                    <div className="w-[209px] text-neutral-900 text-xs font-normal font-['Inter']">
                      {item.mode}
                    </div>
                  </div>
                  <div
                    className={`grow shrink basis-0 self-stretch px-5 py-2 ${
                      index % 2 === 0 ? "bg-gray-200" : "bg-stone-50"
                    } border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex`}
                  >
                    <div className="text-neutral-900 text-xs font-normal font-['Inter']">
                      {item.totalSales}
                    </div>
                  </div>
                </div>
              ))}

              {/* Grand total */}

              <div className="self-stretch h-11 justify-start items-start inline-flex">
                <div className="w-[177px] self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal font-['Inter']">
                    Grand total
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal font-['Inter']">
                    {data
                      .reduce((total, item) => total + item.totalSales, 0)
                      .toFixed(2)}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Chart Session? */}

      <div className="w-[713px] h-[437px] justify-start items-end gap-[50px] inline-flex">
        {/* {data.map((item, index) => ( */}
          <div className="grow shrink basis-0 h-[381px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex">

            <div className="w-[140.75px] h-[500px] relative bg-amber-500 rounded-tl-[10px] rounded-tr-[10px]" />
            <div className="self-stretch text-center text-black text-[13px] font-semibold font-['Inter']">
              Cash
            </div>
          </div>
          <div className="grow shrink basis-0 h-[381px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex">

            <div className="w-[140.75px] h-[500px] relative bg-sky-500 rounded-tl-[10px] rounded-tr-[10px]" />
            <div className="self-stretch text-center text-black text-[13px] font-semibold font-['Inter']">
             Google Play
            </div>
          </div>
          <div className="grow shrink basis-0 h-[381px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex">

            <div className="w-[140.75px] h-[500px] relative bg-fuchsia-500 rounded-tl-[10px] rounded-tr-[10px]" />
            <div className="self-stretch text-center text-black text-[13px] font-semibold font-['Inter']">
              Credit Card
            </div>
          </div>
          <div className="grow shrink basis-0 h-[381px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex">

            <div className="w-[140.75px] h-[500px] relative bg-yellow-500 rounded-tl-[10px] rounded-tr-[10px]" />
            <div className="self-stretch text-center text-black text-[13px] font-semibold font-['Inter']">
              Credit
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Payment;
