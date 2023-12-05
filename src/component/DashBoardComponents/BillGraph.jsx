import React, { useState } from "react";
import ItemWiseGraph from "../../chart/ItemWiseGraph";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import noData from "../../images/noData.png";
import { useTheme } from "../../ThemeContext";
import "./billgraph.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BillGraph = ({
  data,
  itemData,
  billData,
  itemWiseSales,
  totalSales,
  loading,
  discount,
  selectedTab,
}) => {
  const [displayMode, setDisplayMode] = useState("total");
  const [consolidatedTotalSales, setConsolidatedTotalSales] = useState([]);
  const { theme } = useTheme();
const { t } = useTranslation();
  


  useEffect(() => {
    const consolidateData = (data) => {
      const consolidatedData = {};

      data.forEach((item) => {
        const itemName = item.itemName;

        if (consolidatedData[itemName]) {
          consolidatedData[itemName].qty += item.qty;
          consolidatedData[itemName].total += item.total;
        } else {
          consolidatedData[itemName] = {
            qty: item.qty,
            total: item.total,
          };
        }
      });

      const consolidatedArray = Object.keys(consolidatedData).map(
        (itemName) => ({
          itemName,
          qty: consolidatedData[itemName].qty,
          total: consolidatedData[itemName].total,
        })
      );

      return consolidatedArray;
    };

    if (selectedTab === "DaySummary") {
      setDisplayMode("total");
      const consolidatedData = consolidateData(totalSales);
      setConsolidatedTotalSales(consolidatedData);
    } else {
      setDisplayMode("itemWise");
    }
  }, [selectedTab, totalSales]);

  const displayData =
    displayMode === "total" ? consolidatedTotalSales : itemWiseSales;

  const sortedDisplayData = [...displayData].sort(
    (a, b) => parseFloat(b.qty) - parseFloat(a.qty)
  );
  const maxQuantity = Math.max(
    ...displayData.map((item) => parseFloat(item.qty))
  );

  const myData = displayData;

  const totalSum = myData?.reduce((accumulator, currentObject) => {
    if (currentObject.total) {
      return accumulator + currentObject.total;
    }
    return accumulator;
  }, 0);

  const discountAmount = (discount / 100) * totalSum;

  const grandTotal = totalSum - discountAmount;

  console.log("Sum of all 'myTotal' values:", totalSum);

  return (
    <div className="flex flex-wrap-reverse grow  justify-between    p-[12px]">
      <div className=" rounded-sm ">
        <div className="Frame65 rounded-sm grow  flex-col justify-start items-start inline-flex">
          <div
            style={{ boxShadow: theme.shadow }}
            className="Frame56 rounded-sm  grow self-stretch h-11 justify-start items-start inline-flex"
          >
            <div
              style={{
                backgroundColor: theme.svgColor,
                color: theme.TextDarkColor,
              }}
              className="Frame53 grow  self-stretch px-5 py-2  border-r border-transparent border-opacity-20 justify-start items-center rounded-s-sm gap-2.5 flex"
            >
              <div className="BillNo grow w-[18rem] rounded-lg  border-transparent text-xs font-normal">
                 {t("Item Name")}
              </div>
            </div>
            <div
              style={{
                backgroundColor: theme.svgColor,
                color: theme.TextDarkColor,
              }}
              className="Frame54  grow w-32 self-stretch px-5 py-2  border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex text-right"
            >
              <div className="Amount grow text-xs border-transparent font-normal">
                 {t("Qty")}
              </div>
            </div>
            <div
              style={{
                backgroundColor: theme.svgColor,
                color: theme.TextDarkColor,
              }}
              className="Frame54 rounded-e-sm grow w-36 self-stretch px-5 py-2  border-r border-transparent text-end  border-opacity-20 justify-center items-center gap-2.5 flex"
            >
              <div className="Amount rounded--sm grow text-xs border-transparent font-normal">
                {t("Amount")}
              </div>
            </div>
          </div>
          {sortedDisplayData && sortedDisplayData.length > 0 ? (
            <div className="BillWiseGraph overflow-auto flex flex-col max-h-[450px]">
              {sortedDisplayData.map((bill, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? theme.oddRowBackgroundColor : theme.evenRowBackgroundColor,
                  }}
                  className={`Frame57 grow justify-start items-start inline-flex ${
                    index % 2 === 0 ? "even-row" : "odd-row"
                  }`}
                >
                  <div className="Frame53 grow w-[23rem] self-stretch px-5 py-2  border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                    <div className="text-xs grow font-normal">
                    {t(bill.itemName)}
                    </div>
                  </div>
                  <div className="Frame53 w-[8rem] self-stretch px-5 py-2   border-black border-opacity-20 justify-start items-center gap-2.5 flex">
                    <div className="text-xs font-normal"> {t(bill.qty)}</div>
                  </div>
                  <div className="Frame54 grow w-36 shrink basis-0 self-stretch px-5 py-2  border-transparent border-opacity-20 justify-end items-center gap-2.5 flex">
                    <div className="text-xs font-normal">{t(bill.total)}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[638px] mt-[90px] rounded-full flex justify-center ">
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
          <div className="Frame56 grow self-stretch h-11 justify-start items-start inline-flex">
            {displayData && displayData.length > 0 && (
              <div className="Frame56  grow self-stretch h-11  justify-start items-start inline-flex">
                <div className="Frame53 grow h-20  self-stretch px-5 py-2 bg-purple-500 border-r border-transparent pl-[52px] border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="BillNo grow w-80  text-stone-50 border-transparent text-xs font-normal">
                    <div className="Frame55  w-[23rem] h-20 px-5 py-2 bg-purple-500 border-r border-zinc-400 flex-col justify-center items-end gap-2.5 inline-flex">
                      <div className="Frame392 justify-center items-center gap-2.5 inline-flex">
                        <div className="Total text-white text-xs font-normal">
                          {t("Total Amount")}
                        </div>
                      </div>
                      <div className="Frame393 justify-end items-center gap-2.5 inline-flex">
                        <div className="Discount text-white text-xs font-normal">
                          {t("Discount")}
                        </div>
                      </div>
                      <div className="Frame394 justify-end items-center gap-2.5 inline-flex">
                        <div className="GrandTotal text-white font-semibold text-xs ">
                          {t("Grand total")}
                        </div>
                      </div>
                    </div>
                    <div className="Frame56 relative w-36 h-20 px-5 py-2 bg-purple-500 border-r border-purple-500 flex-col justify-center items-end gap-2.5 inline-flex">
                      <div className="Frame395 justify-end items-center gap-2.5 inline-flex">
                        <div className=" text-white text-xs font-normal ">
                          {totalSum}
                        </div>
                      </div>
                      <div className="Frame393 justify-end items-center gap-2.5 inline-flex">
                        <div className=" text-white text-xs font-normal ">
                          {discountAmount}%
                        </div>
                      </div>
                      <div className="Frame394 justify-end items-center gap-2.5 inline-flex">
                        <div className=" text-white font-semibold text-xs  ">
                          {grandTotal}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" order-1">
        <div className="max-h-[400px]">
          <ItemWiseGraph
            data={itemData}
            sortedDisplayData={sortedDisplayData}
            itemWiseSales={itemWiseSales}
            loading={loading}
            totalSales={totalSales}
            displayData={displayData}
            displayMode={displayMode}
          />
        </div>
      </div>
    </div>
  );
};

export default BillGraph;
