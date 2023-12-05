import React, { useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext";

import "./salewise.css";
import { getSectionwiseTaxData } from "../../Service/Tax/Tax";

const SaleWiseComparison = () => {
  const { theme, toggleTheme } = useTheme();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const colorArray = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#33B5E5",
    "#FF8800",
    "#FFD700",
    "#8A2BE2",
    "#008080",
  ];

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

  const totalPercentage = [...sessionMap].reduce(
    (total, [, percentage]) => total + percentage,
    0
  );

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

  return (
    <div
      style={{ boxShadow: theme.shadow, overflow: "hidden" }}
      className="flex-1 w-[330px] h-[225px] p-2 rounded-xl flex-col grow justify-between items-start inline-flex"
    >
      <div className="Frame232 px-2 flex-col justify-between items-start flex">
        <div className="Frame235 self-stretch justify-center grow gap-12 items-center flex">
          <div className="Frame234 p-2 grow justify-center items-center gap-[92px] flex">
            <div className="SalesWiseComparison text-xs font-semibold font-['Poppins']">
              Sales wise comparison
            </div>
            <div className="text-green-600 text-xs font-normal font-['Poppins']">
              3%
            </div>
          </div>
        </div>

        <div className="">
          {[...sessionMap].map(([sessionName, totalQuantity], index) => (
            <div
              key={index}
              className="Frame219 py-1.5 self-stretch justify-between items-start  gap-[10px] flex"
            >
              <div class="  Dining  text-xs font-medium font-['Poppins'] items-end flex overflow-hidden">
                <span class="" title={sessionName}>
                  <div className="scrolling-text">
                    {sessionName.charAt(0).toUpperCase() +
                      sessionName.slice(1).toLowerCase()}
                    &nbsp;&nbsp;
                  </div>
                </span>
              </div>

              <div className="flex">
                <div
                  className={`Frame217 grow shrink basis-0 w-[270px] md:w-[300px] sm:w-[100px] justify-start items-start gap-2.5 inline-flex`}
                >
                  <div
                    className="self-stretch h-3.5"
                    style={{
                      width: `${(totalQuantity / totalPercentage) * 100}%`,
                      backgroundColor: colorArray[index % colorArray.length],
                    }}
                  >
                    <div className="text-[8px] pt-[2px] shadow-2xl text-neutral-50 font-medium ">
                   &nbsp; {totalQuantity}
                    </div>
                   
                  </div>
                  <div className="text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;
                    {Math.round((totalQuantity / totalPercentage) * 100)}%{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleWiseComparison;
