import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { getLeastSellingData } from '../../Service/SelllingItem/service';

const TopFiveSell = () => {
  const { theme, toggleTheme } = useTheme();
  const [topFiveData, setTopFiveData] = useState([]);
  const [randomColors, setRandomColors] = useState([]);
  const maxTotal = Math.max(...topFiveData.map(item => item.total));

  useEffect(() => {
    const fetchTopSellingData = async () => {
      try {
        const { topSelling } = await getLeastSellingData();

        const groupedData = topSelling.reduce((accumulator, currentItem) => {
          const existingItem = accumulator.find(item => item.itemName === currentItem.itemName);
          if (existingItem) {
            existingItem.total += currentItem.total;
          } else {
            accumulator.push({ itemName: currentItem.itemName, total: currentItem.total });
          }
          return accumulator;
        }, []);

        const sortedTopFiveData = groupedData
          .sort((a, b) => b.total - a.total)
          .slice(0, 5);

        setTopFiveData(sortedTopFiveData);
      } catch (error) {
        console.error('Error fetching top selling data:', error);
      }
    };

    const generateRandomColors = () => {
      const colors = Array.from({ length: 5 }, () => getRandomColor());
      setRandomColors(colors);
    };

    const getRandomColor = () => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    fetchTopSellingData();
    generateRandomColors();

  }, []); 
  
  

    
  return (
    <div
      style={{ boxShadow: theme.shadow }}
      className=" overflow-y-scroll  BillWiseGraph   h-[220px] w-[380px] grow p-2  px-5 pb-3 rounded-xl flex-col justify-between items-start inline-flex"
    >
      <div className="Frame235 grow self-stretch justify-center gap-12 items-center flex">
        <div className="Frame234 p-2.5 justify-center items-center gap-[92px] flex">
          <div className="SalesWiseComparison text-xs font-semibold font-['Poppins']">
            Least 5 selling products
          </div>
          <div className="text-green-600 text-xs font-normal font-['Poppins']"></div>
        </div>
      </div>

      {topFiveData.map((data, index) => (
        <div key={index} className="Frame219 py-1.5 self-stretch justify-start items-start inline-flex   ">
          <div className={`Dining w-[180px] h-[12px] text-xs font-medium font-['Poppins'] justify-end items-end flex`}>
            {data.itemName}&nbsp;&nbsp;
          </div>
          <div className="flex">
            <div className={` grow FiveProducts  shrink basis-0 w-[207px] justify-start items-start inline-flex`}>
              <div
                className={`Rectangle35 self-stretch  h-[10px] rounded-e-full `}
                style={{
                  width: `${(data.total / maxTotal) * 100}%`,
                  backgroundColor: randomColors[index],
                }}
              ></div>
              <div className="text-xs font-medium font-['Poppins'] flex ">&nbsp;&nbsp;{data.total}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFiveSell;
