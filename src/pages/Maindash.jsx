import React from "react";

import VectoGraph from "../../src/component/svg/VectoGraph";
import { useTheme } from "../ThemeContext";


const Vimal = () => {
    const { theme, toggleTheme } = useTheme();

  const chartData = [
    { day: "1", price: 1000 },
    { day: "2", price: 2000 },
    { day: "3", price: 3000 },
  ];
    return (
      <div className="relative bg-whitesmoke-100 w-full flex flex-col items-start justify-start py-0 px-[30px] box-border gap-[10px] text-left text-[18px] text-blk font-poppins">
        <div className="self-stretch h-20 flex flex-row items-center justify-between font-inter">
          <div className="w-[718.5px] flex flex-row items-center justify-start gap-[40px]">
            <div className="flex flex-row items-center justify-start">
              <img
                className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                alt=""
                src="/keyboard-backspace-fill0-wght200-grad0-opsz24-1-1.svg"
              />
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">Branch name</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[35px] text-xs text-black font-poppins">
              <div className="rounded-lg bg-blk flex flex-row items-center justify-center p-2.5 text-white">
                <div className="relative font-semibold">Dashboard</div>
              </div>
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">Sales</div>
              </div>
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">Payment</div>
              </div>
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">Tax</div>
              </div>
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">MIS</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px] text-5xs">
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-0.5 opacity-[0] text-xs text-red">
              <div className="flex flex-row items-center justify-start">
                <div className="self-stretch relative inline-block w-10 shrink-0">
                  Logout
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-center py-0 px-2.5">
                  <div className="relative">Export to excel</div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <img
                  className="relative w-4 h-[15.33px]"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="w-[172px] flex flex-row items-center justify-center py-2.5 pr-0 pl-2.5 box-border">
                <div className="flex-1 relative">
                  Last updated time 09-Aug-2023 08:09 AM
                </div>
              </div>
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/refresh-fill0-wght200-grad0-opsz24-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] text-5xs text-black">
          <div className="w-[626px] flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch h-[90px] flex flex-row flex-wrap items-start justify-start gap-[10px]">
              <div className="flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-0 px-5">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative">Today sales</div>
                  </div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/calendar-month-fill0-wght200-grad0-opsz24-1.svg"
                  />
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      365.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-2.5 gap-[4px] text-3xs text-lime">
                  <img
                    className="relative w-[7.62px] h-[3.81px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="relative">8 %</div>
                  <div className="relative text-[6px]">than yesterday</div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-0 px-5">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative">Top sale time</div>
                  </div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0]"
                    alt=""
                    src="/calendar-month-fill0-wght200-grad0-opsz24-11.svg"
                  />
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 text-3xs">
                  <div className="relative">12 pm - 3 pm</div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-0 px-5">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative">Door delivery sales</div>
                  </div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 text-3xs">
                  <div className="relative">Bills 08</div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-0 px-5">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative">{`Bills & Pax`}</div>
                  </div>
                </div>
                <div className="self-stretch h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex-1 flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[47px] h-[27px] shrink-0">
                      11/25
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 text-3xs">
                  <div className="relative opacity-[0]">Bills 08</div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-0 px-5">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative">Void</div>
                  </div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[47px] h-[27px] shrink-0">
                      0/0
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0 text-3xs">
                  <div className="relative">Bills/Memos</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-3xs">
              <div className="rounded-xl bg-whitesmoke-100 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] w-[330px] h-[205px] flex flex-col items-start justify-between py-0 px-5 box-border text-xs text-blk">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="relative font-semibold">
                      Sales wise comparison
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-2.5 gap-[10px] text-lime">
                    <img
                      className="relative w-[7.62px] h-[3.81px]"
                      alt=""
                      src="/vector1.svg"
                    />
                    <div className="relative">3 %</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="w-[63px] flex flex-row items-center justify-end py-2.5 px-0 box-border">
                      <div className="relative font-medium">{`Dining `}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-2.5 px-0">
                      <div className="self-stretch relative bg-blk h-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="relative font-medium">30%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-center justify-center py-2.5 px-0">
                      <div className="relative font-medium">Takeaway</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-2.5 px-0">
                      <div className="self-stretch relative bg-blk h-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 pr-10 pl-2.5">
                    <div className="relative font-medium">18%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="w-[63px] flex flex-row items-center justify-end py-2.5 px-0 box-border">
                      <div className="relative font-medium">Delivery</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-2.5 px-0">
                      <div className="self-stretch relative bg-blk h-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 pr-[50px] pl-2.5">
                    <div className="relative font-medium">16%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="w-[63px] flex flex-row items-center justify-end py-2.5 px-0 box-border">
                      <div className="relative font-medium">Talabat</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0">
                        <div className="self-stretch relative bg-blk h-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 pr-[60px] pl-2.5">
                    <div className="relative font-medium">14%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="w-[63px] flex flex-row items-center justify-end py-2.5 px-0 box-border">
                      <div className="relative font-medium">Zomato</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-2.5 px-0">
                      <div className="self-stretch relative bg-blk h-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 pr-[70px] pl-2.5">
                    <div className="relative font-medium">12%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="w-[193px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[10px]">
                    <div className="w-[63px] flex flex-row items-center justify-end py-2.5 px-0 box-border">
                      <div className="relative font-medium">Swiggy</div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-center justify-center py-2.5 px-0">
                      <div className="self-stretch relative bg-blk h-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-2.5">
                    <div className="relative font-medium">10%</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-2.5 px-5">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative font-semibold">Total purchase</div>
                  </div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0]"
                    alt=""
                    src="/calendar-month-fill0-wght200-grad0-opsz24-12.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0">
                  <div className="relative">Cash</div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start opacity-[0] text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0">
                  <div className="relative">Credit</div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-xl bg-whitesmoke-200 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-2.5 px-5">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex flex-row items-center justify-start py-2.5 px-0">
                    <div className="relative font-semibold">Total payments</div>
                  </div>
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 opacity-[0]"
                    alt=""
                    src="/calendar-month-fill0-wght200-grad0-opsz24-13.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0">
                  <div className="relative">Cash</div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start opacity-[0] text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-0">
                  <div className="relative">Cheque</div>
                </div>
                <div className="h-[23px] flex flex-row items-end justify-start text-xl">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[61px] h-[27px] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-xs">
                    <div className="relative">AED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start max-w-[960px] text-right text-[16px] text-blk">
          <div className="  p-[6px] ">
          <div
            style={{ boxShadow: theme.shadow }}
            className=" daysale h-[322px] p-2.5  rounded-xl  flex-col justify-end items-center inline-flex"
          >
            <style jsx>{`
        @media (max-width: 1064px) {
          .daysale {
            width: 580px;
            height: 302px;
          }
        }
        @media (max-width: 2500px) {
          .daysale {
            width: 580px;
            height: 302px;
          }
        }
        }
      `}</style>
            <div className="self-stretch p-2.5 justify-evenly items-center gap-[60px] flex">
              <div className="grow shrink basis-0 text-right flex justify-center text-lg font-semibold font-['Poppins']">
                Day wise comparison
              </div>
              <div className="justify-center items-center flex">
                <div className="px-2.5 py-[5px] bg-neutral-900 rounded-md justify-center items-center gap-2.5 flex">
                  <div className="text-white text-[10px]  font-['Poppins']">
                    Day
                  </div>
                </div>
                <div className="px-2.5 py-[5px] rounded-md justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-['Poppins']">month</div>
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-center items-end gap-5 inline-flex pl-[15px]">
              <div className="self-stretch flex-col justify-between items-start inline-flex">
                <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    price
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    3000
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    2000
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    1000
                  </div>
                </div>
                <div className="self-stretch h-[35px] p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>
                <div className="self-stretch h-4 p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="opacity-0  text-sm font-normal font-['Poppins']">
                    0
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[162px] flex-col justify-between items-start inline-flex">
                {/* <div className="self-stretch grow shrink basis-0 p-2.5 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-[88px] h-[52px] relative">
                    <div className="w-[88px] h-[47px] px-2.5 py-1 left-0 top-0 absolute  rounded-lg flex-col justify-center items-start gap-1.5 inline-flex">
                      <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className=" text-[10px] font-normal font-['Poppins']">
                          aug 08
                        </div>
                      </div>
                      <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div>
                          <span cla=" text-xs font-semibold font-['Poppins']">
                            992{" "}
                          </span>
                          <span cla=" mb-1 text-xs font-normal font-['Poppins']">
                            AED
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[13px] h-[13px] bg-neutral-900 rounded-full border border-white" />
                </div> */}
                <VectoGraph data={chartData} />

                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      1
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      2
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      3
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      4
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      5
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      6
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      7
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      8
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      9
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      10
                    </div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      date
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <App/> */}
          </div>
          {/* <ChartContainer /> */}
          {/* <App/> */}
        </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
          <div className="rounded-xl bg-whitesmoke-100 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] w-[429px] flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[20px] text-sm font-inter">
            <div className="flex flex-col items-start justify-start py-[15px] px-0">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-2.5">
                  <div className="relative font-semibold">
                    Collection distribution
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-2.5 text-xs">
                  <div className="relative">Total amount</div>
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-2.5 text-xl">
                  <div className="relative">
                    <span className="font-semibold">365.61</span>
                    <span> AED</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start text-3xs">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-2.5">
                      <div className="relative rounded-sm bg-blk w-2.5 h-2.5" />
                    </div>
                    <div className="flex flex-row items-center justify-center py-2.5 px-0">
                      <div className="relative font-semibold">Cash 40%</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start text-gray-100">
                    <div className="flex flex-row items-start justify-start p-2.5">
                      <div className="relative rounded-sm bg-gray-100 w-2.5 h-2.5" />
                    </div>
                    <div className="flex flex-row items-center justify-center py-2.5 px-0">
                      <div className="relative font-semibold">
                        Credit card 30%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-gray-100">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-2.5">
                      <div className="relative rounded-sm bg-gray-100 w-2.5 h-2.5" />
                    </div>
                    <div className="flex flex-row items-center justify-center py-2.5 px-0">
                      <div className="relative font-semibold">Google pay 25%</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-2.5">
                      <div className="relative rounded-sm bg-gray-100 w-2.5 h-2.5" />
                    </div>
                    <div className="flex flex-row items-center justify-center py-2.5 px-0">
                      <div className="relative font-semibold">Credit 15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[126px] flex flex-col items-start justify-between relative text-5xs text-gray-200 font-poppins">
              <div className="relative rounded-[50%] bg-blk w-[126px] h-[126px] z-[0]" />
              <div className="relative rounded-[50%] bg-gray-100 w-[126px] h-[126px] z-[1]" />
              <div className="relative rounded-[50%] bg-gray-100 w-[126px] h-[126px] z-[2]" />
              <div className="relative rounded-[50%] bg-gray-100 w-[126px] h-[126px] z-[3]" />
              <div className="absolute my-0 mx-[!important] top-[23px] left-[20px] font-semibold text-white z-[4]">
                40%
              </div>
              <div className="absolute my-0 mx-[!important] top-[75px] left-[103px] font-semibold z-[5]">
                25%
              </div>
              <div className="absolute my-0 mx-[!important] top-[103px] left-[38px] font-semibold z-[6]">
                30%
              </div>
              <div className="absolute my-0 mx-[!important] top-[26px] left-[96px] font-semibold z-[7]">
                15%
              </div>
              <div className="my-0 mx-[!important] absolute top-[41px] left-[34px] w-[59px] h-[49px] flex flex-col items-center justify-center z-[8] text-blk font-inter">
                <div className="flex flex-row items-center justify-center py-0 px-2.5">
                  <div className="relative font-semibold">Cash</div>
                </div>
                <div className="flex flex-row items-center justify-center pt-[5px] px-2.5 pb-2.5 text-3xs">
                  <div className="relative font-semibold">900 AED</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-whitesmoke-100 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] h-[197px] flex flex-col items-start justify-between pt-0 px-5 pb-5 box-border">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start p-2.5">
                <div className="relative font-semibold">
                  Top 5 selling product
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Chicken sisig wi..</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 px-2.5">
                <div className="relative font-medium">55.5 AED</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Special beef bulalo</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">35 AED</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">beef bicol express</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">29.75 AED</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">beef kare kare</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">29.75 AED</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Beef brocoli</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">29.75 AED</div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-whitesmoke-100 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.08)] h-[197px] flex flex-col items-start justify-between pt-0 px-5 pb-5 box-border">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start p-2.5">
                <div className="relative font-semibold">
                  Least 5 selling product
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[162px] flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Open item</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 px-2.5">
                <div className="relative font-medium">1 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[181px] flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Delivery charge</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">5 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[197px] flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Sprite</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">11 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[207px] flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Budget meal</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">15 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[219px] flex flex-row items-center justify-center gap-[10px]">
                <div className="w-[117px] flex flex-row items-center justify-end py-1 px-0 box-border">
                  <div className="relative font-medium">Goto served with...</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-blk h-2" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-1 pr-10 pl-2.5">
                <div className="relative font-medium">22 pc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Vimal;
  