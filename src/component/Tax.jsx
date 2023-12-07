import React, { useEffect, useState } from "react";
import { getSectionwiseTaxData } from "../Service/Tax/Tax";
import { useTheme } from "../ThemeContext";

const Tax = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const [uniquesectionNames, setUniquesectionNames] = useState([]);
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const [totalTaxMap, setTotalTaxMap] = useState(new Map());
  const [totalQuantitySum, setTotalQuantitySum] = useState(0);
  const [totalTaxSum, setTotalTaxSum] = useState(0);

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
    const sectionNameMap = new Map();
    console.log(
      "🚀 ~ file: Tax.jsx:30 ~ useEffect ~ sectionNameMap:",
      sectionNameMap
    );
    data.forEach((item) => {
      const sectionName = item.sectionName;
      const totalTax = item.totalTax;
      const totalAmount = item.total;

      if (!sectionNameMap.has(sectionName)) {
        sectionNameMap.set(sectionName, { totalTax, totalAmount });
      } else {
        const existingValues = sectionNameMap.get(sectionName);
        sectionNameMap.set(sectionName, {
          totalTax: existingValues.totalTax + totalTax,
          totalAmount: existingValues.totalAmount + totalAmount,
        });
      }
    });

    const totalAmounts = Array.from(sectionNameMap.values()).map(
      (values) => values.totalAmount
    );
    const maxTotalAmount = Math.max(...totalAmounts);

    const uniqueModes = Array.from(sectionNameMap).map(([name, values]) => {
      const normalizedHeight = (values.totalAmount / maxTotalAmount) * 475;
      const height = `${Math.min(normalizedHeight, 600)}px`;
      return {
        height,
        name,
      };
    });
    const quantitySum = data.reduce((total, item) => total + item.total, 0);
    const taxSum = [...totalTaxMap.values()].reduce(
      (total, tax) => total + tax,
      0
    );

    setTotalQuantitySum(quantitySum);
    setTotalTaxSum(taxSum);

    setUniquesectionNames(uniqueModes);
  }, [data, totalTaxMap]);

  useEffect(() => {
    const updateTotalTaxMap = () => {
      const taxMap = new Map();
      data.forEach((dataObject) => {
        const sessionName = dataObject.sectionName;
        const totalTax = dataObject.totalTax;

        if (!taxMap.has(sessionName)) {
          taxMap.set(sessionName, totalTax);
        } else {
          taxMap.set(sessionName, taxMap.get(sessionName) + totalTax);
        }
      });

      setTotalTaxMap(taxMap);
    };

    updateTotalTaxMap();
  }, [data]);

  const totalSalesSum = data.reduce((total, item) => total + item.total, 0);

  const sessionMap = new Map();
  data.forEach((dataObject) => {
    const sessionName = dataObject.sectionName;
    const total = dataObject.total;
    const tax = dataObject.totalTax;

    if (!sessionMap.has(sessionName)) {
      sessionMap.set(sessionName, total);
    } else {
      sessionMap.set(sessionName, sessionMap.get(sessionName) + total);
    }
  });

  return (
    <div className="   items-start gap-2.5 inline-flex">
      <div className="flex-wrap    items-start gap-2.5 flex">
        <div className="flex flex-wrap-reverse justify-between  gap-[10px] ">
          <div className=" ">
            <div className="Frame65    grow flex-col justify-start items-start inline-flex">
              <div className="Frame56  grow self-stretch h-11 justify-start items-start inline-flex">
                <div
                  style={{
                    backgroundColor: theme.svgColor,
                    color: theme.TextDarkColor,
                    boxShadow: theme.shadow,
                  }}
                  className="Frame53 grow  w-[248px] self-stretch px-5 py-2 border-gray-300 bg-neutral-900 border-r border-transparent border-opacity-20 justify-start items-center gap-2.5 flex"
                >
                  <div
                    style={{ boxShadow: theme.shadow }}
                    className="BillNo grow w-80   border-transparent text-xs font-normal"
                  >
                    Branch Name
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: theme.svgColor,
                    color: theme.TextDarkColor,
                  }}
                  className="Frame54 grow  w-32 self-stretch pr-7 py-2 border-gray-500 bg-neutral-900 border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex flex-col"
                >
                  {/* <div className="Amount grow  text-xs border-transparent border-r border-gray font-normal">
                    Tax 5%
                  </div> */}
                  <div className="Amount grow  p-[5px] border-transparent font-normal flex gap-[100px]">
                    <div className="Amount grow  text-xs border-transparent font-normal text-center">
                      Amount
                    </div>
                    <div className="Amount grow  text-xs border-transparent font-normal">
                      Tax
                    </div>
                  </div>
                </div>
              </div>

              <div className="BillWiseGraph overflow-auto flex flex-col max-h-[450px]">
                {[...sessionMap].map(([sessionName, totalQuantity], index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? theme.oddRowBackgroundColor
                          : theme.evenRowBackgroundColor,
                      boxShadow: theme.shadow,
                    }}
                    className={`Frame57 grow justify-start items-start inline-flex ${
                      index === 0
                        ? theme.tableRowLight
                        : index === 1
                        ? theme.tableRowDark
                        : index % 2 === 0
                        ? theme.tableRowLight
                        : theme.tableRowDark
                    }`}
                  >
                    <div className="Frame53 grow w-96 self-stretch px-5 py-2 border-r border-gray-800  border-opacity-20 justify-start items-center gap-2.5 flex">
                      <div className="text-xs grow font-normal">
                        {sessionName}
                      </div>
                    </div>
                    <div className="Frame53 w-32 self-stretch px-5 py-2 border-r border-gray-800  border-opacity-20 justify-start items-center gap-2.5 flex">
                      <div className="text-xs font-normal">{totalQuantity}</div>
                    </div>

                    <div className="Frame53 w-32 self-stretch px-5 py-2  border-opacity-20 justify-start items-center gap-2.5 flex">
                      <div className="text-xs font-normal">
                        {totalTaxMap.get(sessionName)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="Frame56  grow self-stretch h-11 justify-start items-start inline-flex">
                <div className="Frame53 grow  self-stretch px-5 py-2 bg-neutral-500 border-r border-transparent border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="BillNo grow w-80  text-stone-50 border-transparent text-xs font-normal">
                    Grand Total
                  </div>
                </div>
                <div className="Frame54 grow w-32 self-stretch px-5 py-2 bg-neutral-500 border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex">
                  <div className="Amount grow text-stone-50 text-xs border-transparent font-normal">
                    {totalQuantitySum + totalTaxSum}
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: theme.shadow }}
                className="Frame56  grow self-stretch h-11 justify-start  items-start inline-flex"
              >
                <div className="Frame53 grow  self-stretch px-5 py-2 -50 border-r border-transparent border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="BillNo grow w-80   border-transparent text-xs font-normal">
                    Total (exclude tax)
                  </div>
                </div>
                <div className="Frame54 grow w-32 self-stretch px-5 py-2  border-r border-transparent  border-opacity-20 justify-center items-center gap-2.5 flex">
                  <div className="Amount grow text-xs border-transparent font-normal">
                    {totalSalesSum}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* chart seession? */}
          <div>
            <div>
              <div className="">
                <div className="w-[713px]  md:h-[600px] justify-start items-end gap-[50px] inline-flex">
                  {uniquesectionNames.map((mode, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
