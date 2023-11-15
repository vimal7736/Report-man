import React, { useEffect, useState } from "react";
import { DChart } from "../chart/DonutChart";
import {
  dummyData,
  salesComparisonData,
  targetData,
  dayWiseComparisonData,
} from "../../src/Service/Dashboar";

const Dashboard = () => {
  return (
    <div className="w-[1420px] h-auto px-[30px] bg-stone-800 flex-col justify-start items-start gap-2.5 flex p-9 flex-wrap">
      <div className=" justify-start items-start gap-2.5 inline-flex flex-wrap">
        {dummyData.map((data, index) => (
          <div className="grow shrink first basis-0 flex-col justify-start items-start gap-2.5 inline-flex flex-wrap ">
            <div className="self-stretch h-auto justify-start items-start gap-2.5 inline-flex">
              <div className="w-auto px-5 bg-stone-50 bg-opacity-95 rounded-xl shadow flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
                  <div className="py-2.5 justify-start items-center gap-2.5 flex">
                    <div className="text-black text-[8px] font-normal font-['Poppins']">
                      Today sales
                    </div>
                  </div>
                  <div className="w-auto h-[18px] relative" />
                </div>
                <div className="h-[23px] justify-start items-end inline-flex">
                  <div className="justify-center items-end gap-2.5 flex">
                    <div className="w-auto h-[27px] text-black text-xl font-normal font-['Poppins']">
                      365.61
                    </div>
                  </div>
                  <div className="justify-center items-end gap-2.5 flex">
                    <div className="text-black text-xs font-normal font-['Poppins']">
                      AED
                    </div>
                  </div>
                </div>
                <div className="p-2.5 justify-center items-center gap-1 inline-flex">
                  <div className="text-green-500 text-[14px] font-normal font-['Poppins']">
                    8 %
                  </div>
                  <div className="text-green-500 text-[6px] font-normal font-['Poppins']">
                    than yesterday
                  </div>
                </div>
              </div>
             
            </div>
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex ">
              <div className="w-auto h-auto px-5 bg-stone-50 rounded-xl shadow flex-col justify-between items-start inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                      Sales wise comparison
                    </div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-green-500 text-xs font-normal font-['Poppins']">
                      3 %
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-auto justify-start items-end gap-2.5 flex">
                    <div className="h-auto py-2.5 justify-end items-end gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                        Dining{" "}
                      </div>
                    </div>
                    <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch h-auto bg-neutral-900" />
                    </div>
                  </div>
                  <div className="p-2.5 justify-center items-end gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      30%
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-auto justify-start items-start gap-2.5 flex">
                    <div className="py-2.5 justify-center items-end gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                        Takeaway
                      </div>
                    </div>
                    <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch h-auto bg-neutral-900" />
                    </div>
                  </div>
                  <div className="pl-2.5 pr-10 py-2.5 justify-center items-end gap-2.5 flex">
                    <div className="text-neutral-900 text-[14px] font-medium font-['Poppins']">
                      18%
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-auto justify-start items-start gap-2.5 flex">
                    <div className="h-auto py-2.5 justify-end items-end gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                        Delivery
                      </div>
                    </div>
                    <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch h-auto bg-neutral-900" />
                    </div>
                  </div>
                  <div className="pl-2.5 pr-[50px] py-2.5 justify-center items-end gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      16%
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-auto justify-start items-start gap-2.5 flex">
                    <div className="h-auto py-2.5 justify-end items-end gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                        Talabat
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch h-[34px] py-2.5 flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch h-auto bg-neutral-900" />
                      </div>
                    </div>
                  </div>
                  <div className="pl-2.5 pr-[60px] py-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      14%
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-auto justify-start items-start gap-2.5 flex">
                    <div className="h-auto py-2.5 justify-end items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                        Zomato
                      </div>
                    </div>
                    <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="self-stretch h-auto bg-neutral-900" />
                    </div>
                  </div>
                  <div className="pl-2.5 pr-[70px] py-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      12%
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="h-auto justify-start items-start gap-2.5 flex">
                    <div className="h-auto py-2.5 justify-end items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                        Swiggy
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="self-stretch h-auto bg-neutral-900" />
                    </div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      10%
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch bg-stone-50 rounded-xl shadow flex-col justify-center items-center gap-2 inline-flex">
                <div className="self-stretch h-[61px] px-5 flex-col justify-start items-start gap-[7px] flex">
                  <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                    Target 1000 AED{" "}
                  </div>
                  <div className="justify-center items-center inline-flex">
                    <div className="justify-start items-center flex">
                      <div className="justify-center items-end gap-2.5 flex">
                        <div className="text-neutral-900 text-2xl font-normal font-['Poppins']">
                          566
                        </div>
                      </div>
                      <div className="w-auto px-0.5 justify-center items-end gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-normal font-['Poppins']">
                          AED
                        </div>
                      </div>
                    </div>
                    <div className="px-2.5 justify-center items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-[8px] font-normal font-['Poppins']">
                        434 more to go this month
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="w-auto h-[356px] p-2.5 bg-stone-50 rounded-xl shadow flex-col justify-end items-center flex">
            <div className="self-stretch p-2.5 justify-center items-center gap-[60px] inline-flex">
              <div className="grow shrink basis-0 text-right text-neutral-900 text-base font-semibold font-['Poppins']">
                Day wise comparison
              </div>
              <div className="justify-center items-center flex">
                <div className="px-2.5 py-[5px] bg-neutral-900 rounded-md justify-center items-center gap-2.5 flex">
                  <div className="text-white text-[8px] font-semibold font-['Poppins']">
                    Day
                  </div>
                </div>
                <div className="px-2.5 py-[5px] rounded-md justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-[8px] font-semibold font-['Poppins']">
                    month
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-center items-end gap-5 inline-flex">
              <div className="self-stretch flex-col justify-between items-start inline-flex">
                <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                    price
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                    3000
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                    2000
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                    1000
                  </div>
                </div>
                <div className="self-stretch h-auto p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>
                <div className="self-stretch h-4 p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="opacity-0 text-neutral-900 text-sm font-normal font-['Poppins']">
                    0
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-auto flex-col justify-between items-start inline-flex">
                <div className="self-stretch grow shrink basis-0 p-2.5 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-auto h-auto relative">
                    <div className="w-auto h-auto  py-1 left-0 top-0 absolute bg-green-600 rounded-lg flex-col justify-center items-start gap-1.5 inline-flex">
                      <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                          aug 08
                        </div>
                      </div>
                      <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div>
                          <span classname="text-neutral-900 text-xs font-semibold font-['Poppins']">
                            992{" "}
                          </span>
                          <span classname="text-neutral-900 text-xs font-normal font-['Poppins']">
                            AED
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto h-auto bg-neutral-900 rounded-full border border-white" />
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      1
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      2
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      3
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      4
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      5
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      6
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      7
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      8
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      9
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      10
                    </div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-[14px] font-normal font-['Poppins']">
                      date
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* collection distributioin  */}

      <div className="self-stretch justify-start items-center gap-2.5 flex flex-wrap">
        <div className=" px-5 py-2.5 bg-stone-50 rounded-xl shadow justify-center items-center gap-5 flex d">
          <div className="py-[15px] flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start flex">
              <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-sm font-semibold font-['Inter']">
                  Collection distribution
                </div>
              </div>
              <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-xs font-normal font-['Inter']">
                  Total amount
                </div>
              </div>
              <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                <div>
                  <span classname="text-neutral-900 text-xl font-semibold font-['Inter']">
                    365.61
                  </span>
                  <span classname="text-neutral-900 text-xl font-normal font-['Inter']">
                    {" "}
                    AED
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="flex-col justify-start items-start inline-flex">
                <div className="justify-start items-center inline-flex">
                  <div className="p-2.5 justify-start items-start gap-2.5 flex">
                    <div className="w-auto h-auto bg-neutral-900 rounded-sm" />
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-[14px] font-semibold font-['Inter']">
                      Cash 40%
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center inline-flex">
                  <div className="p-2.5 justify-start items-start gap-2.5 flex">
                    <div className="w-auto h-auto bg-neutral-900 bg-opacity-25 rounded-sm" />
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-opacity-25 text-[14px] font-semibold font-['Inter']">
                      Credit card 30%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="justify-start items-center inline-flex">
                  <div className="p-2.5 justify-start items-start gap-2.5 flex">
                    <div className="w-auto h-auto bg-neutral-900 bg-opacity-25 rounded-sm" />
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-opacity-25 text-[14px] font-semibold font-['Inter']">
                      Google pay 25%
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center inline-flex">
                  <div className="p-2.5 justify-start items-start gap-2.5 flex">
                    <div className="w-auto h-auto bg-neutral-900 bg-opacity-25 rounded-sm" />
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-opacity-25 text-[14px] font-semibold font-['Inter']">
                      Credit 15%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-col justify-between items-start inline-flex">
            <div className="text-white text-[8px] font-semibold font-['Poppins']">
              40%
            </div>
            <div className="text-white text-opacity-50 text-[8px] font-semibold font-['Poppins']">
              15%
            </div>
            <div className="w-auto h-auto flex-col justify-center items-center flex">
              <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-[8px] font-semibold font-['Inter']">
                  Cash
                </div>
              </div>
              <DChart />
              <div className="px-2.5 pt-[5px] pb-2.5 justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-[14px] font-semibold font-['Inter']">
                  {" "}
                  900 AED{" "}
                </div>
              </div>
            </div>
            <div className="text-black text-opacity-50 text-[8px] font-semibold font-['Poppins']">
              {" "}
              25%
            </div>
            <div className="text-black text-opacity-50 text-[8px] font-semibold font-['Poppins']">
              30%
            </div>
          </div>
        </div>
        <div className=" grow shrink basis-0  px-5 pb-5 bg-stone-50 rounded-xl shadow flex-col justify-between items-start inline-flex">
          <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                Top 5 selling product
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                Top 5 selling product
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Chicken sisig wi..
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                55.5 AED
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Chicken sisig wi..
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                35 AED
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Chicken sisig wi..
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                29.75 AED
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Chicken sisig wi..
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                29.75 AED
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Chicken sisig wi..
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                29.75 AED
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 px-5 pb-5 bg-stone-50 rounded-xl shadow flex-col justify-between items-start inline-flex">
          <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                Least 5 selling product
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
            <div className="p-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                Least 5 selling product
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Open item
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                1 pc
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Delivery charge
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                5 pc
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Sprite
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                11 pc
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Budget meal
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                15 pc
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="h-auto justify-center items-center gap-2.5 flex">
              <div className="h-auto py-1 justify-end items-center gap-2.5 flex">
                <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                  Goto served with...
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-2 bg-neutral-900 rounded-tr-md rounded-br-md" />
              </div>
            </div>
            <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                22 pc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
