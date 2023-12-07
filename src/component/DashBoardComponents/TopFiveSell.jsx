import React, { useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext";
import { getTopSellingData } from "../../Service/SelllingItem/service";

const TopFiveSell = () => {
  const { theme, toggleTheme } = useTheme();
  const [topFiveData, setTopFiveData] = useState([]);
  const [randomColors, setRandomColors] = useState([]);
  const maxTotal = Math.max(...topFiveData.map((item) => item.total));

  // Reusing the shouldAnimateOverflow function
  const shouldAnimateOverflow = (itemName) => {
    const containerWidth = 100; // Set your specific width here
    const element = document.createElement("div");
    element.style.visibility = "hidden";
    element.style.position = "absolute";
    element.style.whiteSpace = "nowrap";
    element.style.width = `${containerWidth}px`;
    element.textContent = itemName;

    document.body.appendChild(element);

    const doesOverflow = element.scrollWidth > element.clientWidth;

    document.body.removeChild(element);

    return doesOverflow;
  };

  useEffect(() => {
    const fetchTopSellingData = async () => {
      try {
        const { topSelling } = await getTopSellingData();

        const groupedData = topSelling.reduce((accumulator, currentItem) => {
          const existingItem = accumulator.find(
            (item) => item.itemName === currentItem.itemName
          );
          if (existingItem) {
            existingItem.total += currentItem.total;
          } else {
            accumulator.push({
              itemName: currentItem.itemName,
              total: currentItem.total,
            });
          }
          return accumulator;
        }, []);

        const sortedTopFiveData = groupedData
          .sort((a, b) => b.total - a.total)
          .slice(0, 5);

        setTopFiveData(sortedTopFiveData);
      } catch (error) {
        console.error("Error fetching top selling data:", error);
      }
    };

    const generateRandomColors = () => {
      const colors = shuffleArray([
        "#0084F7",
        "#F7A500",
        "#F77300",
        "#F70031",
        "#9410A5",
      ]);
      setRandomColors(colors);
    };

    const shuffleArray = (array) => {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };

    fetchTopSellingData();
    generateRandomColors();
  }, []);

  return (
    <div
      style={{ boxShadow: theme.shadow }}
      className=" overflow-y-scroll  BillWiseGraph grow  h-[220px] w-96  p-2  px-5 pb-3 rounded-xl flex-col justify-between items-start inline-flex"
    >
      <div className="Frame235 grow self-stretch justify-center gap-12  items-center flex">
        <div className="Frame234 p-2.5 grow justify-center items-center  flex">
          <div className="SalesWiseComparison grow text-xs font-semibold flex justify-center  font-['Poppins']">
            Top 5 selling products
          </div>
          <div className="text-green-600 text-xs font-normal grow font-['Poppins']"></div>
        </div>
      </div>

      {topFiveData.map((data, index) => (
        <div
          key={index}
          className="Frame219 py-1.5  w-auto justify-evenly self-stretch flex items-start grow   "
        >
          <div
            className={`scrolling-text grow h-[12px] text-xs font-medium overflow-hidden font-['Poppins'] justify-end items-end flex`}
          >
            {`${data.itemName.charAt(0).toUpperCase()}${data.itemName
              .slice(1)
              .toLowerCase()}`}
            &nbsp;&nbsp;
          </div>
          <div className="flex">
            <div
              className={`grow shrink FiveProducts   basis-0 w-[300px] pt-1 justify-start items-start inline-flex`}
            >
              <div
                className={`Rectangle35 grow  h-[10px] rounded-e-full o `}
                style={{
                  width: `${(data.total / maxTotal) * 100}%`,
                  backgroundColor: randomColors[index],
                }}
              ></div>
              <div className="text-xs font-medium grow font-['Poppins'] flex ">
                &nbsp;&nbsp;{data.total}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFiveSell;
