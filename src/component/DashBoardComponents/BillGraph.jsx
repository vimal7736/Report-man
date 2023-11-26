import React from 'react'
import ItemWiseGraph from '../../chart/ItemWiseGraph'

const BillGraph = ({itemData , billData}) => {
  return (
    <div className="flex flex-wrap grow gap-[80px]  p-[10px]">
        <div className="order-1">
          <div className="Frame65  grow w-64 h-96 flex-col justify-start items-start inline-flex">
            <div className="Frame56  grow self-stretch h-11 justify-start items-start inline-flex">
              <div className="Frame53 grow w-[170px] self-stretch px-5 py-2 bg-neutral-900 border-r border-transparent border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="BillNo grow text-stone-50 border-transparent text-xs font-normal">
                  Bill no
                </div>
              </div>
              <div className="Frame54 grow w-32 self-stretch px-5 py-2 bg-neutral-900 border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex">
                <div className="Amount grow text-stone-50 text-xs border-transparent font-normal">
                  Amount
                </div>
              </div>
            </div>

            {billData.map((bill, index) => (
              <div
                key={index}
                className={`Frame57 w-64 h-11 justify-start   items-start inline-flex ${
                  index % 2 === 0 ? "bg-nuetral-100" : "bg-neutral-100"
                }`}
              >
                <div className="Frame53  w-36 self-stretch px-5 py-2 border-r   border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="text-xs   font-normal">{bill.billNo}</div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 border-r  border-transparent border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="00 text-xs  font-normal">{bill.amount}</div>
                </div>
              </div>
            ))}

            <div className="Frame79 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="GrandTotal text-stone-50 text-xs font-normal">
                  Grand total
                </div>
              </div>
              <div className="Frame54 w-28 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-end items-center gap-2.5 flex">
                <div className="00 text-stone-50 text-xs font-normal">
                  20.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" order-1">
          <div className="Frame65 grow w-64 h-96 flex-col justify-start items-start inline-flex">
            <ItemWiseGraph data={itemData} />
          </div>
        </div>
      </div>
  )
}

export default BillGraph