import React from "react";
import { CountTax } from "../Service/Tax";

const Tax = () => {
  return (
    <div className=" h-screen justify-start items-start gap-2.5 inline-flex">
      <div className="flex-wrap justify-start items-start gap-2.5 flex">
        <div className="flex flex-wrap ">
          <div className="Frame298 w-96 h-96 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="Frame66 h-96 flex-col justify-start items-start flex">
              <div className="Frame344 self-stretch justify-start items-start inline-flex">
                <div className="Frame53 grow shrink basis-0 h-16 px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="BranchName text-stone-50 text-xs font-normal ">
                    Branch name
                  </div>
                </div>
                <div className="Frame337 grow shrink basis-0 h-16 flex-col justify-start items-start inline-flex">
                  <div className="Frame54 self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                    <div className="Tax5 text-stone-50 text-xs font-normal ">
                      Tax 5%
                    </div>
                  </div>
                  <div className="Frame336 self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                    <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="Count text-stone-50 text-xs font-normal ">
                        Count
                      </div>
                    </div>
                    <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="Tax text-stone-50 text-xs font-normal ">
                        Tax
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Frame57 self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="DoorDelivery w-52 text-neutral-900 text-xs font-normal ">
                    Door delivery
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="50 text-neutral-900 text-xs font-normal ">
                    193.50
                  </div>
                </div>
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 justify-end items-center gap-2.5 flex">
                  <div className="20 text-neutral-900 text-xs font-normal ">
                    9.20
                  </div>
                </div>
              </div>
              <div className="Frame72 self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-stone-50 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="Talabat w-52 text-neutral-700 text-xs font-normal ">
                    Talabat
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-stone-50 border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="11 text-neutral-700 text-xs font-normal ">
                    172.11
                  </div>
                </div>
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-stone-50 justify-end items-center gap-2.5 flex">
                  <div className="19 text-neutral-700 text-xs font-normal ">
                    8.19
                  </div>
                </div>
              </div>
              <div className="Frame73 self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="Dining w-52 text-neutral-900 text-xs font-normal ">
                    Dining
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="22 text-neutral-900 text-xs font-normal ">
                    165.22
                  </div>
                </div>
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 justify-end items-center gap-2.5 flex">
                  <div className="11 text-neutral-900 text-xs font-normal ">
                    9.11
                  </div>
                </div>
              </div>
              <div className="Frame74 self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-stone-50 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="Takeaway w-52 text-neutral-700 text-xs font-normal ">
                    Takeaway
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-stone-50 border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="44 text-neutral-700 text-xs font-normal ">
                    144.44
                  </div>
                </div>
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-stone-50 justify-end items-center gap-2.5 flex">
                  <div className="88 text-neutral-700 text-xs font-normal ">
                    8.88
                  </div>
                </div>
              </div>
              <div className="Frame75 self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="Swiggy w-52 text-neutral-900 text-xs font-normal ">
                    Swiggy
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 border-r border-black border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="88 text-neutral-900 text-xs font-normal ">
                    100.88
                  </div>
                </div>
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 justify-end items-center gap-2.5 flex">
                  <div className="77 text-neutral-900 text-xs font-normal ">
                    7.77
                  </div>
                </div>
              </div>
              <div className="Frame79 self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="GrandTotal text-stone-50 text-xs font-normal ">
                    Grand total
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 border-r border-white border-opacity-20 justify-end items-center gap-2.5 flex">
                  <div className="24 text-stone-50 text-xs font-normal ">
                    800.24
                  </div>
                </div>
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 bg-opacity-50 justify-end items-center gap-2.5 flex">
                  <div className="32 text-stone-50 text-xs font-semibold ">
                    43.32
                  </div>
                </div>
              </div>
              <div className="Frame81 self-stretch h-11 border-t border-white border-opacity-25 justify-start items-start inline-flex">
                <div className="Frame53 w-44 self-stretch px-5 py-2 bg-gray-200 border-t border-white border-opacity-25 justify-start items-center gap-2.5 flex">
                  <div className="TotalExcludeTax text-black text-xs font-normal ">
                    Total (exclude tax)
                  </div>
                </div>
                <div className="Frame54 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 border-r border-white border-opacity-20" />
                <div className="Frame55 grow shrink basis-0 self-stretch px-5 py-2 bg-gray-200 border-t border-white border-opacity-25 justify-end items-center gap-2.5 flex">
                  <div className="56 text-black text-xs font-semibold ">
                    752.56
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[713px] h-[522px] flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[437px] justify-start items-end gap-[50px] inline-flex">
              <div className="grow shrink basis-0 h-[381px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="w-[102.60px] h-[350px] relative bg-sky-500 rounded-tl-[10px] rounded-tr-[10px]">
                  <div className="left-[32px] top-[15px] absolute text-stone-50 text-xs font-normal ">
                    193.50
                  </div>
                </div>
                <div className="self-stretch text-center text-stone-50 text-[13px] font-semibold ">
                  Door delivery
                </div>
              </div>
              <div className="grow shrink basis-0 h-[309px] flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="w-[102.60px] h-[283px] relative bg-amber-500 rounded-tl-[10px] rounded-tr-[10px]">
                  <div className="left-[34.40px] top-[14px] absolute text-stone-50 text-xs font-normal ">
                    172.11
                  </div>
                </div>
                <div className="self-stretch text-center text-stone-50 text-[13px] font-semibold ">
                  Talabat
                </div>
              </div>
              <div className="grow shrink basis-0 h-[274px] flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="w-[102.60px] h-[248px] relative bg-orange-500 rounded-tl-[10px] rounded-tr-[10px]">
                  <div className="left-[32.80px] top-[13px] absolute text-stone-50 text-xs font-normal ">
                    165.22
                  </div>
                </div>
                <div className="self-stretch text-center text-stone-50 text-[13px] font-semibold ">
                  Dining
                </div>
              </div>
              <div className="grow shrink basis-0 h-60 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="w-[102.60px] h-[214px] relative bg-red-600 rounded-tl-[10px] rounded-tr-[10px]">
                  <div className="left-[31.20px] top-[15px] absolute text-stone-50 text-xs font-normal ">
                    144.44
                  </div>
                </div>
                <div className="self-stretch text-center text-stone-50 text-[13px] font-semibold ">
                  Take away
                </div>
              </div>
              <div className="grow shrink basis-0 h-[150px] flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="w-[102.60px] h-[124px] relative bg-fuchsia-700 rounded-tl-[10px] rounded-tr-[10px]">
                  <div className="left-[31.60px] top-[14px] absolute text-stone-50 text-xs font-normal ">
                    100.88
                  </div>
                </div>
                <div className="self-stretch text-center text-stone-50 text-[13px] font-semibold ">
                  Swiggy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
