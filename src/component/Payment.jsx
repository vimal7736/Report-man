import React, { useEffect, useState } from "react";
import noData from "../images/noData.png"
import { getSectionwiseTaxData } from "../Service/Tax/Tax";
import noGraphData from "../../src/images/DataGraph.png";

import { useTheme } from "../ThemeContext";

const Payment = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const { theme } = useTheme();
  const [uniquePaymentModes, setUniquePaymentModes] = useState([]);

  const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSectionwiseTaxData();
        setData(response.taxData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const paymentModeMap = new Map();
    data.forEach((item) => {
      const paymentMode = item.paymentMode;
      const qty = item.qty;

      if (!paymentModeMap.has(paymentMode)) {
        paymentModeMap.set(paymentMode, qty);
      } else {
        paymentModeMap.set(paymentMode, paymentModeMap.get(paymentMode) + qty);
      }
    });

    const totalQuantities = Array.from(paymentModeMap.values());
    const maxTotalQuantity = Math.max(...totalQuantities);

    const uniqueModes = Array.from(paymentModeMap).map(
      ([name, totalQuantity]) => {
        const normalizedHeight = (totalQuantity / maxTotalQuantity) * 475; // Normalize the height
        const height = `${Math.min(normalizedHeight, 600)}px`; // Limit the height to 600px
        return {
          height,
          name,
        };
      }
    );

    setUniquePaymentModes(uniqueModes);
  }, [data]);

  const totalSalesSum = data.reduce((total, item) => total + item.qty, 0);
  const sessionMap = new Map();

  data.forEach((item) => {
    const paymentMode = item.paymentMode;
    const qty = item.qty;

    if (!sessionMap.has(paymentMode)) {
      sessionMap.set(paymentMode, qty);
    } else {
      sessionMap.set(paymentMode, sessionMap.get(paymentMode) + qty);
    }
  });

  return (
    <div className="flex flex-wrap-reverse  gap-[10px]">
      <div 
      
      className=" ">
        <div 
        style={{boxShadow: theme.shadow}}
        className="Frame65    grow flex-col justify-start items-start inline-flex">
          <div
          style={{
            backgroundColor: theme.svgColor,
            color: theme.TextDarkColor,
          }}
          className="Frame56  grow self-stretch h-11 justify-start items-start inline-flex">
            <div
            style={{
              backgroundColor: theme.svgColor,
              color: theme.TextDarkColor,
            }} className="Frame53 grow  self-stretch px-5 py-2 bg-neutral-900 border-r border-transparent border-opacity-20 justify-start items-center gap-2.5 flex">
              <div className="BillNo grow w-80   border-transparent text-xs font-normal">
                Payment mode
              </div>
            </div>
            <div
            style={{
              backgroundColor: theme.svgColor,
              color: theme.TextDarkColor,
            }}
            className="Frame54 grow w-32 self-stretch px-5 py-2 bg-neutral-900 border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex">
              <div className="Amount grow  text-xs border-transparent font-normal">
                Total Sales
              </div>
            </div>
          </div>
          <div className="BillWiseGraph oberflow overflow-auto flex flex-col max-h-[450px]">
            {!loading ? (
              [...sessionMap].map(([paymentMode, totalQuantity], index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? theme.oddRowBackgroundColor
                        : theme.evenRowBackgroundColor,
                  }}
                  className={`Frame57 grow justify-start items-start inline-flex ${
                    index === 0 ? theme.tableRowLight : index === 1 ? theme.tableRowDark : index % 2 === 0 ? theme.tableRowLight : theme.tableRowDark
                  }`}
                >
                  
                  <div 
                  
                  className="Frame53 grow w-96 self-stretch px-5 py-2 border-opacity-20 justify-start items-center gap-2.5 flex">
                    <div className="text-xs grow font-normal">
                      {paymentMode.charAt(0).toUpperCase() +
                        paymentMode.slice(1).toLowerCase()}
                    </div>
                  </div>
                  <div className="Frame53 w-32 self-stretch px-5 py-2 border-opacity-20 justify-start items-center gap-2.5 flex">
                    <div className="text-xs grow font-normal">
                      {totalQuantity}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-[638px] mt-[60px] mb-[60px] rounded-full flex justify-center ">
                  <img
                    style={{
                      boxShadow: theme.shadow,
                    }}
                    src={noData}
                    width="300px"
                    alt=""
                    className="shadow"
                  />
                </div>
            )}
          </div>

          <div 
        style={{boxShadow: theme.shadow}}
          
          className="Frame56  grow self-stretch h-11 justify-start items-start inline-flex">
            <div className="Frame53 grow  self-stretch px-5 py-2 bg-neutral-500 border-r border-transparent border-opacity-20 justify-start items-center gap-2.5 flex">
              <div className="BillNo grow w-80   border-transparent text-xs font-normal">
                Grand Total
              </div>
            </div>
            <div className="Frame54 grow w-32 self-stretch px-5 py-2 bg-neutral-500 border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex">
              <div className="Amount grow text-stone-50 text-xs border-transparent font-normal">
                {totalSalesSum}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          {!loading ? (
          <div className="">
            <div className="w-[713px]  md:h-[600px] justify-start items-end gap-[50px] inline-flex">
              {uniquePaymentModes.map((mode, index) => (
                <div
                  key={index}
                  className={`grow shrink basis-0 h-[${mode.height}px] pb-[5px] rounded-[10px] flex-col justify-start items-center gap-2.5 inline-flex`}
                >
                 

                  
                  <div
                     style={{
                      height: `${mode.height}`,
                      backgroundColor: getRandomColor(),
                    }}
                    className={`w-[140.75px] relative rounded-tl-[10px] rounded-tr-[10px]`}
                  />
                  <div className="self-stretch text-center text-black text-[13px] font-semibold">
                    {mode.name}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>


          ):(

            <div className="w-[638px] mt-[90px] flex justify-center relative ">
            <img 
             style={{
          
              boxShadow: theme.shadow,
            }}
            src={noGraphData} className="shadow" width="300px" alt="" />
            <div className="  text-white  absolute  mt-[50px] ml-[15px] font-[10px]">
              No Data
            </div>
          </div>
          )
        
        }
        </div>
      </div>
    </div>
  );
};

export default Payment;
