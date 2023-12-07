import React, { useState, useEffect } from "react";
import "./itemgram.css";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";
import noGraphData from "../../src/images/DataGraph.png";
import { useTheme } from "../ThemeContext";
import { useTranslation } from "react-i18next";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ItemWiseGraph = ({
  totalSales,
  itemWiseSales,
  loading,
  displayMode,
  displayData,
  sortedDisplayData,
}) => {
  const [activeMode, setActiveMode] = useState("DaySummery");
  useEffect(() => {
    setActiveMode(displayMode.toLowerCase());
  }, [displayMode]);

  const dataToSort = activeMode === "DaySummery" ? totalSales : itemWiseSales;

  const sortedItemWiseSales = [...dataToSort].sort(
    (a, b) => parseFloat(b.qty) - parseFloat(a.qty)
  );

  const { t } = useTranslation();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const maxQuantity = Math.max(
    ...totalSales.map((item) => parseFloat(item.qty))
  );

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const { theme, toggleTheme } = useTheme();

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader
          css={override}
          size={20}
          color={"#123abc"}
          loading={loading}
        />{" "}
        <p className="text-gray-500 text-xs">loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className=" Frame305 grow    flex-col justify-center items-center rounded-sm  inline-flex">
        <div
          style={{ boxShadow: theme.shadow }}
          className="Frame235 self-stretch h-11 justify-between items-center shadow  inline-flex grow"
        >
          <div className="Frame234 p-3.5 justify-center items-center gap-2.5 flex">
            <div className="ItemWiseGraph    text-[13px] font-semibold ">
              {t("Item wise graph")}
            </div>
          </div>
          <div className="Frame206 p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-green-500 text-xs font-normal">3 %</div>
          </div>
        </div>
        <div className="Frame307  pt-3 self-stretch grow justify-between items-start inline-flex">
          <div className=" overflow  BillWiseGraph ItemWiseGraphContainer overflow-auto min-h-[530px] flex  flex-col max-h-[530px]">
           
            {Array.isArray(sortedDisplayData) &&
            sortedDisplayData.length > 0 ? (
              sortedDisplayData.map((item, index) => (
                <div
                  key={index}
                  className="Frame219   self-stretch justify-start items-start inline-flex"
                >
                  <div className="Frame225  grow shrink basis-0 h-[2rem] justify-start items-start gap-2 flex">
                    <div className="Frame211 w-[150px]  h-9 p-1 justify-end items-center gap-2.5 flex">
                      <div className={`${item.className} text-xs font-medium`}>
                        {item.itemName && (
                          <div
                            className={`${item.className} text-xs font-medium`}
                          >
                            {t(
                              item.itemName.charAt(0).toUpperCase() +
                                item.itemName.slice(1).toLowerCase()
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`Frame217 w-[450px] grow shrink basis-0 self-stretch flex-col justify-center items-center gap-2.5 inline-flex`}
                    >
                      <div
                        className={`Rectangle35 self-stretch h-2.5`}
                        style={{
                          width: `${Math.min(
                            (parseFloat(item?.qty) / maxQuantity) * 100,
                            100
                          )}%`,
                          maxWidth: "100%",
                          backgroundColor:
                            item.color || colorArray[index % colorArray.length],
                        }}
                      />
                    </div>
                    <div className="Frame218 p-2.5 w-[50px] gap-2.5 flex">
                      <div className="Pc text-xs font-medium">{item?.qty}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-[638px] mt-[90px] flex justify-center relative ">
                <img
                  style={{
                    boxShadow: theme.shadow,
                  }}
                  src={noGraphData}
                  className="shadow"
                  width="300px"
                  alt=""
                />
                <div className="  text-white  absolute  mt-[50px] ml-[15px] font-[10px]">
                  No Data
                </div>
              </div>
            )}
          </div>

          <div className="Frame304 w-1.5 justify-start items-start gap-2.5 flex">
            <div className="Rectangle37 w-1.5 h-96 bg-neutral-100 rounded" />
            <div className="Rectangle38 w-1 h-11 bg-neutral-900 bg-opacity-40 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemWiseGraph;

const buttonStyle = {
  height: "18px",
  width: "18px",
  fontSize: "9px",
  margin: "0 4px",

  borderRadius: "50%",
  cursor: "pointer",
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#000",
  color: "#fff",
};
