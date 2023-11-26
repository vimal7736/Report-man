import React from "react";

import SalesPage from "./SalesPage";
import SalesTab from "./SalesTab";

const Sales = () => {
  return (
    <div>
      <div>
        <SalesTab />
      </div>
      <div className="flex flex-wrap h-screen gap-[80px]  p-[10px]">
        <div>
          <div className="Frame65 w-64 h-96 flex-col justify-start items-start inline-flex">
            <div className="Frame56 self-stretch h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-[170px] self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="BillNo text-stone-50 text-xs font-normal ">
                  Bill no
                </div>
              </div>
              <div className="Frame54 w-32 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                <div className="Amount text-stone-50 text-xs font-normal ">
                  Amount
                </div>
              </div>
            </div>
            <div className="Frame57 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className=" text-xs font-normal ">
                  373643243
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 
              //  justify-end items-center gap-2.5 flex">
                <div className="00 text-xs font-normal ">
                  2.00
                </div>
              </div>
            </div>
            <div className="Frame72 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2  border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="  text-xs font-normal ">
                  253272764
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2  
              //  justify-end items-center gap-2.5 flex">
                <div className="00  text-xs font-normal ">
                  1.00
                </div>
              </div>
            </div>
            <div className="Frame80 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className=" text-xs font-normal ">
                  373643243
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 
              //  justify-end items-center gap-2.5 flex">
                <div className="00 text-xs font-normal ">
                  2.00
                </div>
              </div>
            </div>
            <div className="Frame81 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2  border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="  text-xs font-normal ">
                  253272764
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2  
              //  justify-end items-center gap-2.5 flex">
                <div className="00  text-xs font-normal ">
                  1.00
                </div>
              </div>
            </div>
            <div className="Frame82 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className=" text-xs font-normal ">
                  373643243
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 
              //  justify-end items-center gap-2.5 flex">
                <div className="00 text-xs font-normal ">
                  2.00
                </div>
              </div>
            </div>
            <div className="Frame83 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2  border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="  text-xs font-normal ">
                  253272764
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2  
              //  justify-end items-center gap-2.5 flex">
                <div className="00  text-xs font-normal ">
                  1.00
                </div>
              </div>
            </div>
            <div className="Frame84 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className=" text-xs font-normal ">
                  373643243
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 
              //  justify-end items-center gap-2.5 flex">
                <div className="00 text-xs font-normal ">
                  2.00
                </div>
              </div>
            </div>
            <div className="Frame85 w-64 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2  border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="  text-xs font-normal ">
                  253272764
                </div>
              </div>
              <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2  
              //  justify-end items-center gap-2.5 flex">
                <div className="00  text-xs font-normal ">
                  1.00
                </div>
              </div>
            </div>
            <div className="Frame79 h-11 justify-start items-start inline-flex">
              <div className="Frame53 w-36 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                <div className="GrandTotal text-stone-50 text-xs font-normal ">
                  Grand total
                </div>
              </div>
              <div className="Frame54 w-28 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-end items-center gap-2.5 flex">
                <div className="00 text-stone-50 text-xs font-normal ">
                  20.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SalesPage />
        </div>
      </div>
    </div>
  );
};

export default Sales;
