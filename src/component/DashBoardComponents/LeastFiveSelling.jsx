import React from 'react';
import { useTheme } from '../../ThemeContext';

const LeastFiveSelling = () => {
  const { theme, toggleTheme } = useTheme();

  const leastFiveData = [
    { name: 'specoial beef bulao', color: 'sky-500', percentage: '60%', amount: '40.3 AED' },
    { name: 'chicken kare kea', color: 'orange-500', percentage: '30%', amount: '30 AED' },
    { name: 'specoial beef bulao', color: 'sky-500', percentage: '63%', amount: '43.3 AED' },
    { name: 'beef bicol kare', color: 'fuchsia-700', percentage: '59%', amount: '38.45 AED' },
    { name: 'chicken kare kea', color: 'orange-500', percentage: '30%', amount: '30 AED' },
    { name: 'chicken zinger span', color: 'amber-500', percentage: '40%', amount: '40 AED' },
  ];

  return (
    <div
      style={{ boxShadow: theme.shadow }}
      className="w-[380px] grow p-2 h-[100%] px-5 pb-3 rounded-xl flex-col justify-between items-start inline-flex"
    >
      <div className="Frame235 grow self-stretch justify-center gap-12 items-center flex">
        <div className="Frame234 p-2.5 justify-center items-center gap-[92px] flex">
          <div className="SalesWiseComparison text-xs font-semibold font-['Poppins']">
            Least 5 selling products
          </div>
          <div className="text-green-600 text-xs font-normal font-['Poppins']"></div>
        </div>
      </div>

      {/* Dynamic Rendering based on leastFiveData */}
      {leastFiveData.map((data, index) => (
        <div key={index} className="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
          <div className={`Dining w-[180px] h-[12px] text-xs font-medium font-['Poppins'] justify-end items-end flex`}>
            {data.name}&nbsp;&nbsp;
          </div>
          <div className="flex">
            <div className={` grow shrink basis-0 w-[207px] justify-start items-start inline-flex`}>
              <div
                className={`Rectangle35 self-stretch h-[10px] rounded-e-full bg-${data.color}`}
                style={{ width: data.percentage }}
              ></div>
              <div className="text-xs font-medium font-['Poppins'] flex ">&nbsp;&nbsp;{data.amount}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeastFiveSelling;
