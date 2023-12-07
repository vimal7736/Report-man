import React, { useEffect, useState } from "react";
import { DChart } from "../chart/DonutChart";
import { App, ChartContainer } from "../chart/CurvedLineChart";
import CustomGuagechart from "../chart/CustomGuagechart";
import {
  dummyData,
  salesComparisonData,
  targetData,
  dataArray,
  Topproducts,
  Lstproducts,
} from "../Service/Dashboar";


const watermarkStyle = {
  position: "absolute",
  top: "50%",
  left: "44%",
  transform: "translate(-50%, -50%)",
  zIndex: "999", // adjust the z-index as needed
  pointerEvents: "none", // ensure the watermark doesn't interfere with interactions
  textAlign: "center",
  color: "red", // adjust the color and opacity as needed
  fontSize: "24px", // adjust the font size as needed
  fontWeight: "bold",
};

const Dashnew = () => {
  return (
    <div className="flex flex-wrap bg-stone-50 justify-between p-[40px] ">
      <div className="flex flex-wrap  backroundsetting bg-stone-50  ">
        <div className="vimal1  ">
          <div className="">
            <div className="flex">
              {dummyData?.map((data, index) => (
                <div className="nested-div flex flex-wrap">
                  <div className="child-div shadow">
                    <div className="w-auto rounded-xl   flex-col justify-start items-start inline-flex">
                      <div className="  self-stretch  justify-start items-center gap-[19px] inline-flex">
                        <div className="py-2.5 justify-start items-center gap-2.5 flex">
                          <div className="text-black text-[10px] font-normal font-['Poppins']">
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
                        <div className="text-green-500 text-[15px] font-normal font-['Poppins']">
                          {data?.percentageChange}
                        </div>
                        <div className="text-green-500 text-[10px] font-normal font-['Poppins']">
                          {data?.changeText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="nested-div w-[330px]  px-5 flex flex-wrap ">
              <div className="child-div-four-five shadow">
                <div className="text-neutral-900 text-[13px] font-semibold font-['Poppins']">
                  Sales wise comparison
                </div>
                {salesComparisonData?.map((data, index) => (
                  <div
                    className="flex-col justify-between items-start inline-flex"
                    key={index}
                  >
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="p-2.5 justify-center items-center gap-2.5 flex"></div>
                      <div className="p-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-green-500 text-xs font-normal font-['Poppins']">
                          {/* {data?.overAllPercent} */}
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch justify-start items-start inline-flex gap-6 ">
                      <div className="grow shrink basis-0 h-[38px]  items-start flex justify-between gap-5 ">
                        <div className="h-[8px]  justify-end items-center  flex">
                          <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                            {data.category}{" "}
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start w-[200px] items-start gap-2.5 inline-flex">
                          <div className="self-stretch h-3 bg-emerald-400" />
                        </div>
                      </div>
                      <div className=" justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-xs font-medium font-['Poppins']">
                          {data?.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="child-div-four-five w-[286px] h-[205px] bg-stone-50 rounded-xl shadow ">
                <div className=" flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch h-[61px] px-5 flex-col justify-start items-start gap-[7px] flex">
                    <div className="text-neutral-900 text-xs font-semibold font-['Poppins']">
                      Target 1000 AED{" "}
                    </div>
                    <div className="justify-center items-center   ">
                      <div className="justify-start items-center flex">
                        <div className="justify-center items-end gap-2.5 flex">
                          <div className="text-neutral-900 text-2xl font-normal font-['Poppins']">
                            {targetData?.currentAmount}
                          </div>
                        </div>
                        <div className="w-[27px] px-0.5 justify-center items-end gap-2.5 flex">
                          <div className="text-neutral-900 text-xs font-normal font-['Poppins']">
                            {targetData?.currency}
                          </div>
                        </div>
                      </div>
                      <div className="px-2.5 justify-center items-center gap-2.5 flex">
                        <div className="text-neutral-900 text-[12px] font-normal font-['Poppins']">
                          {targetData?.MoreToGoAmount} more to go this month
                        </div>
                      </div>

                      <div className="px-2.5 justify-center items-center gap-2.5 flex">
                        <CustomGuagechart />
                        <div style={watermarkStyle}>
                          Target component <br />
                          Waiting for approval
                          <br />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vimal p-2.5 ">
          <ChartContainer />
          
        </div>
      </div>

      <div className="AdditionalDiv flex flex-wrap justify-between h-[190px] px-5 py-2.5 bg-stone-50  border border-transparent ">
        <div className="Additionalchild w-[100%] h-[190px] px-5 py-2.5 bg-stone-50 rounded-xl shadow ">
          <div className=" justify-center items-center gap-5 inline-flex">
            <div>
              {dataArray.map((item, index) => (
                <div
                  className="py-[15px] flex-col justify-start items-start inline-flex"
                  key={index}
                >
                  {/* Rendering code for total amount */}
                  <div className="flex-wrap justify-start items-start ">
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
                                className={`p-2.5 justify-start items-start gap-2.5 flex flex-wrap bg-${method.color}-400 rounded-s-sm`}
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

        <div className="Additionalchild w-[353.50px] h-[197px] px-5 pb-5 bg-stone-50 rounded-xl shadow">
          <div className="flex-col justify-between items-start inline-flex">
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
                <div
                  className={`grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex`}
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
                    className={`grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex w-[190px]`}
                  >
                    <div
                      // className={`self-stretch h-2 bg-${product.color} rounded-tr-md rounded-br-md`}
                      className={`self-stretch h-2 bg-sky-500 rounded-tr-md rounded-br-md`}

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
          </div>
        </div>
        <div className="Additionalchild w-[353.50px] h-[197px] px-5 pb-5 bg-stone-50 rounded-xl shadow">
          <div className="flex-col justify-between items-start inline-flex">
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
                  className={`grow shrink basis-0 h-[26px] justify-center items-center gap-2.5 flex`}
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
                    className={`grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex w-[190px]`}
                  >
                    <div
                      // className={`self-stretch h-2 bg-${product.color} rounded-tr-md rounded-br-md`}
                      className={`self-stretch h-2 bg-amber-500 rounded-tr-md rounded-br-md`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashnew;
