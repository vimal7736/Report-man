import React from "react";
import {
  dummyData,
  salesComparisonData,
  targetData,
  dataArray,
  Topproducts,
  Lstproducts,
} from "../Service/Dashboar";
import { ChartContainer } from "../chart/CurvedLineChart";
import { DChart } from "../chart/DonutChart";
import { App } from "../chart/DthreeLineChart";

const Dashboard = () => {
  return (
    <div>
      {/* up; */}

      <div className="flex">
        <div className="">
          <div className=" h-[110px]   justify-start items-center flex">
            {dummyData?.map((data, index) => (
              <div>
                <div className="child-div shadow">
                  <div className="w-auto rounded-xl   flex-col justify-start items-start inline-flex">
                    <div className="  self-stretch  justify-start items-center inline-flex">
                      <div className="py-2.5 justify-start items-center gap-2.5 text-center flex">
                        <div className="text-black text-[8px] text-center font-normal font-['Poppins']">
                          {data?.title}
                        </div>
                      </div>
                      <div className="w-auto h-[18px] relative" />
                    </div>
                    <div className="h-[23px] justify-start items-end inline-flex">
                      <div className="justify-center items-end gap-2.5 flex">
                        <div className="w-auto h-[27px] text-cyan-400 text-xl font-normal font-['Poppins']">
                          {data?.amount}
                        </div>
                      </div>
                      <div className="justify-center items-end gap-2.5 flex">
                        <div className="text-black text-xs font-normal font-['Poppins'] mb-1">
                          {data?.currency}
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 justify-center items-center gap-1 inline-flex">
                      <div className="text-green-500 text-[10px] font-normal font-['Poppins']">
                        {data?.percentageChange}
                      </div>
                      <div className="text-green-500 text-[7px] font-normal font-['Poppins']">
                        {data?.changeText}
                      </div>
                      <div className="text-black text-[7px] font-normal font-['Poppins']">
                        {data?.time}
                      </div>
                      <div className="text-neutral-900 text-[7px] font-normal font-['Poppins']">
                        {data?.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-[10px] p-1">
            <div className="w-[330px] h-[225px] bg-white shadow rounded-lg  border-12 justify-between">
              <div className="  ">
                <div className=" flex-col justify-center items-center gap-2 inline-flex">
                  <div className="w-[330px] h-[205px] px-5  flex-col justify-between items-start inline-flex">
                    <div className="self-stretch justify-between items-center   inline-flex">
                      <div className="p-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                          Sales wise comparison
                        </div>
                      </div>
                      <div className="p-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-green-600 text-xs font-normal font-['Poppins']">
                          3 %
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-[38px] justify-start items-start gap-2.5 flex">
                        <div className="h-[38px] py-2.5 justify-end items-center gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            Dining{" "}
                          </div>
                        </div>
                        <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                          <div className="self-stretch h-3.5 bg-purple-700" />
                        </div>
                      </div>
                      <div className="p-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                          30%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-[38px] justify-start items-start gap-2.5 flex">
                        <div className="py-2.5 justify-center items-center gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            Takeaway
                          </div>
                        </div>
                        <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                          <div className="self-stretch h-3.5 bg-fuchsia-600" />
                        </div>
                      </div>
                      <div className="pl-2.5 pr-10 py-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                          18%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-[38px] justify-start items-start gap-2.5 flex">
                        <div className="h-[38px] py-2.5 justify-end items-center gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            Delivery
                          </div>
                        </div>
                        <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                          <div className="self-stretch h-3.5 bg-pink-500" />
                        </div>
                      </div>
                      <div className="pl-2.5 pr-[50px] py-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                          16%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-[38px] justify-start items-start gap-2.5 flex">
                        <div className="h-[38px] py-2.5 justify-end items-center gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            Talabat
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                          <div className="self-stretch h-[34px] py-2.5 flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch h-3.5 bg-amber-300" />
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
                      <div className="grow shrink basis-0 h-[38px] justify-start items-start gap-2.5 flex">
                        <div className="h-[38px] py-2.5 justify-end items-center gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            Zomato
                          </div>
                        </div>
                        <div className="grow shrink basis-0 py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                          <div className="self-stretch h-3.5 bg-orange-300" />
                        </div>
                      </div>
                      <div className="pl-2.5 pr-[70px] py-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                          12%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="h-[38px] justify-start items-start gap-2.5 flex">
                        <div className="h-[38px] py-2.5 justify-end items-center gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            Swiggy
                          </div>
                        </div>
                        <div className="grow shrink basis-0 self-stretch py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                          <div className="self-stretch h-3.5 bg-red-400" />
                        </div>
                      </div>
                      <div className="p-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                          10%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[133px] h-[225px] shadow rounded-lg bg-white  border-12 justify-between">
              <div className="  ">
                <div className="w-[133px]  px-5 py-2.5 bg-opacity-95 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
                    <div className="py-2.5 justify-start items-center gap-2.5 flex">
                      <div className="text-black text-[10px] font-semibold font-['Poppins']">
                        Total purchase
                      </div>
                    </div>
                    <div className="w-[18px] h-[18px] px-[3px] pt-[2.08px] pb-[2.25px] opacity-0 justify-center items-center flex" />
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-black text-[10px] font-normal font-['Poppins']">
                      Cash / 23
                    </div>
                  </div>
                  <div className="h-[23px] justify-start items-end inline-flex">
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="w-[61px] h-[27px] text-purple-700 text-xl font-normal font-['Poppins']">
                        322.61
                      </div>
                    </div>
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="text-black text-xs font-normal font-['Poppins']">
                        AED
                      </div>
                    </div>
                  </div>
                  <div className="h-[23px] opacity-0 justify-start items-end inline-flex">
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="w-[61px] h-[27px] text-black text-xl font-normal font-['Poppins']">
                        322.61
                      </div>
                    </div>
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="text-black text-xs font-normal font-['Poppins']">
                        AED
                      </div>
                    </div>
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-black text-[10px] font-normal font-['Poppins']">
                      Credit / 11
                    </div>
                  </div>
                  <div className="h-[23px] justify-start items-end inline-flex">
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="w-[61px] h-[27px] text-fuchsia-600 text-xl font-normal font-['Poppins']">
                        322.61
                      </div>
                    </div>
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="text-black text-xs font-normal font-['Poppins']">
                        AED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[133px] h-[225px] shadow rounded-lg bg-white  border-12 justify-between">
              <div className="  ">
                <div className="w-[133px] px-5 py-2.5  bg-opacity-95 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
                    <div className="py-2.5 justify-start items-center gap-2.5 flex">
                      <div className="text-black text-[10px] font-semibold font-['Poppins']">
                        Total payments
                      </div>
                    </div>
                    <div className="w-[18px] h-[18px] px-[3px] pt-[2.08px] pb-[2.25px] opacity-0 justify-center items-center flex" />
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-black text-[10px] font-normal font-['Poppins']">
                      Cash / 12
                    </div>
                  </div>
                  <div className="h-[23px] justify-start items-end inline-flex">
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="w-[61px] h-[27px] text-red-400 text-xl font-normal font-['Poppins']">
                        322.61
                      </div>
                    </div>
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="text-black text-xs font-normal font-['Poppins']">
                        AED
                      </div>
                    </div>
                  </div>
                  <div className="h-[23px] opacity-0 justify-start items-end inline-flex">
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="w-[61px] h-[27px] text-black text-xl font-normal font-['Poppins']">
                        322.61
                      </div>
                    </div>
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="text-black text-xs font-normal font-['Poppins']">
                        AED
                      </div>
                    </div>
                  </div>
                  <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-black text-[10px] font-normal font-['Poppins']">
                      Cheque / 2
                    </div>
                  </div>
                  <div className="h-[23px] justify-start items-end inline-flex">
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="w-[61px] h-[27px] text-orange-300 text-xl font-normal font-['Poppins']">
                        322.61
                      </div>
                    </div>
                    <div className="justify-center items-end gap-2.5 flex">
                      <div className="text-black text-xs font-normal font-['Poppins']">
                        AED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg chartcontainer p-1 ">
          <ChartContainer />
          {/* <App/> */}
        </div>
      </div>
      {/* down */}
      <div className="flex h-[197px] gap-[10px] p-[0.12rem]">
        <div className="h-[190px]">
          <div className="Additionalchild w-[390px] h-[190px] bg-stone-50 rounded-xl shadow ">
            <div className=" justify-center items-center gap-5 inline-flex">
              <div>
                {dataArray.map((item, index) => (
                  <div
                    className="py-[15px] flex-wrap justify-start items-start "
                    key={index}
                  >
                    {/* Rendering code for total amount */}
                    <div className=" justify-start items-start ">
                      <div className=" justify-center items-center gap-2.5 ">
                        <div className="text-neutral-900 text-sm font-semibold font-['Inter']">
                          Collection distribution
                        </div>
                      </div>
                      <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-neutral-900 text-xs font-normal font-['Inter']">
                          Total amount{" "}
                        </div>
                      </div>
                      <div className="justify-center items-center gap-2.5 inline-flex">
                        <div>
                          <span className="text-neutral-900 text-xl font-semibold font-['Inter']">
                            &nbsp;{item.totalAmount}
                          </span>
                          <span className="text-neutral-900 text-xl font-normal font-['Inter']">
                            {" "}
                            AED
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rendering code for payment methods */}
                    <div className="justify-start items-start flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-start inline-flex">
                          <div className="flex-col justify-start items-start inline-flex">
                            {item.paymentMethods.map((method, methodIndex) => (
                              <div
                                key={methodIndex}
                                className="justify-start items-center flex"
                              >
                                <div
                                  className={`p-2.5 justify-start items-start gap-2.5 flex  bg-${method.color}-400 rounded-s-sm`}
                                />
                                <div className="py-2.5 justify-center items-center gap-2.5 flex">
                                  <div
                                    className={`text-neutral-900 text-[12px] font-semibold font-['Inter']`}
                                  >
                                    &nbsp; {method.name} {method.percentage}%
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[187px] w-[159px] flex-col relative justify-between items-start inline-flex">
                <DChart />

                <div className="w-[59px] h-[49px] flex-col justify-center items-center flex mt-[-106px] mb-[70px]  ml-[50px] ">
                  <div className="px-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[12px] font-semibold font-['Inter']">
                      Cash
                    </div>
                  </div>
                  <div className="px-2.5 pt-[5px] pb-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-900 text-[12px] font-semibold font-['Inter']">
                      900 AED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //Top selling Products? */}
        <div className="">
          <div className="Additionalchild h-[190px] w-[415px]  bg-stone-50 rounded-xl shadow">
            {/* <div className="flex-col justify-between items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
                <div className="p-2.5 justify-start items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                    Top 5 selling products
                  </div>
                </div>
              </div>

              {Topproducts.map((product, index) => (
                <div
                  key={index}
                  className="self-stretch justify-start items-start inline-flex"
                >
                  <div className="basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                    <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-xs font-medium">
                        {product.name}
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex w-[190px]">
                      <div
                        className={`self-stretch bg-${product.color} product-background`}
                      />
                    </div>
                  </div>
                  <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-poppins">
                      {`${product.price} AED`}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="w-[353.50px] h-[197px] px-5 pb-5 flex-col justify-between items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
                <div className="p-2.5 justify-start items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                    Top 5 selling product
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      Chicken sisig wi..
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-sky-500 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    55.5 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      Special beef bulalo
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-amber-500 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    35 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      beef bicol express
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-orange-500 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    29.75 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      beef kare kare
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-rose-600 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    29.75 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      Beef brocoli
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-fuchsia-700 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    29.75 AED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[190px]">
          <div className="Additionalchild h-[190px]  w-[345px] bg-stone-50 rounded-xl shadow">
            {/* <div className="flex-col justify-between items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
                <div className="p-2.5 justify-start items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                    Least 5 selling products
                  </div>
                </div>
              </div>

              {Lstproducts.map((product, index) => (
                <div
                  key={index}
                  className="self-stretch justify-start items-start inline-flex"
                >
                  <div
                    className={` basis-0 h-[26px] justify-center items-center gap-2.5 flex`}
                  >
                    <div
                      className={`h-[26px] py-1 justify-end items-center gap-2.5 flex`}
                    >
                      <div
                        className={`text-neutral-900 text-xs font-medium font-['Poppins']`}
                      >
                        {product.name}
                      </div>
                    </div>
                    <div
                      className={`grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex w-[140px]`}
                    >
                      <div
                        // className={`self-stretch h-3 bg-${product.color} rounded-tr-md rounded-br-md`}
                        className={`self-stretch h-3 bg-amber-500 rounded-tr-md rounded-br-md`}
                      />
                    </div>
                  </div>
                  <div
                    className={`pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex`}
                  >
                    <div
                      className={`text-neutral-900 text-xs font-medium font-['Poppins']`}
                    >
                      {`${product.price} AED`}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="w-[353.50px] h-[197px] px-5 pb-5 flex-col justify-between items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
                <div className="p-2.5 justify-start items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                    Least 5 selling product
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      Chicken sisig wi..
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-sky-500 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    55.5 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      Special beef bulalo
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-amber-500 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    35 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      beef bicol express
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-orange-500 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    29.75 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      beef kare kare
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-rose-600 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    29.75 AED
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex">
                  <div className="h-[26px] py-1 justify-end items-center gap-2.5 flex">
                    <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                      Beef brocoli
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-3 bg-fuchsia-700 rounded-tr-md rounded-br-md" />
                  </div>
                </div>
                <div className="pl-2.5 pr-10 py-1 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                    29.75 AED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
