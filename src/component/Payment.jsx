import React from "react";




export const data = [
  { mode: "Cash", totalSales: 190  },
  { mode: "Google pay", totalSales: 172},
  { mode: "Credit card", totalSales: 165 },
  { mode: "Credit", totalSales: 144 },
];

const Payment = () => {
  const totalSalesSum = data.reduce(
    (total, item) => total + item.totalSales,
    0
  );

  return (
    <div className=" flex flex-wrap h-screen">
      <table className=" justify-start items-start gap-2.5 flex">
        <tbody>
          <tr className="w-[353px] flex-col justify-start items-start gap-2.5 inline-flex">
            <td className="flex-col justify-start items-start flex">
              {/* Table header */}

              <div className="self-stretch h-11  justify-start items-start inline-flex">
                <div className="w-[177px] self-stretch px-5 py-2 bg-neutral-900  border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal ">
                    Payment mode
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900  border-opacity-20 justify-center items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal ">
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
                    <div className="w-[209px] text-neutral-900 text-xs font-normal ">
                      {item.mode}
                    </div>
                  </div>
                  <div
                    className={`grow shrink basis-0 self-stretch px-5 py-2 ${
                      index % 2 === 0 ? "bg-gray-200" : "bg-stone-50"
                    } border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex`}
                  >
                    <div className="text-neutral-900 text-xs font-normal ">
                      {item.totalSales}
                    </div>
                  </div>
                </div>
              ))}

              {/* Grand total */}

              <div className="self-stretch h-11 justify-start items-start inline-flex">
                <div className="w-[177px] self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50  border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal ">
                    Grand total
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50  border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="text-stone-50 text-xs font-normal ">
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
        <div className="grow shrink basis-0 h-[381px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="w-[140.75px] h-[350px] relative bg-sky-500 rounded-tl-[10px] rounded-tr-[10px]" />
          <div className="self-stretch text-center text-black text-[13px] font-semibold ">
            cash
          </div>
        </div>
        <div className="grow shrink basis-0 h-[309px] flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="w-[140.75px] h-[283px] relative bg-amber-500 rounded-tl-[10px] rounded-tr-[10px]" />
          <div className="self-stretch text-center text-black text-[13px] font-semibold ">
            google pay
          </div>
        </div>
        <div className="grow shrink basis-0 h-60 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="w-[140.75px] h-[214px] relative bg-orange-500 rounded-tl-[10px] rounded-tr-[10px]" />
          <div className="self-stretch text-center text-black text-[13px] font-semibold ">
            credit card
          </div>
        </div>
        <div className="grow shrink basis-0 h-[357px] flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="w-[140.75px] h-[331px] relative bg-fuchsia-700 rounded-tl-[10px] rounded-tr-[10px]" />
          <div className="self-stretch text-center text-black text-[13px] font-semibold ">
            credit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
