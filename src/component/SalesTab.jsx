import React, { useState } from 'react';

const SalesTab = () => {
  const [activeTab, setActiveTab] = useState('DaySummery');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex'>
      <div className="Frame366 w-96 h-9 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="Frame198  justify-start items-start gap-2.5 inline-flex">
          <div className="Frame194  justify-center items-center gap-2.5 flex">
            <div
              className={`DaySummery w-[100px] text-purple-700 text-xs font-normal font-['Poppins']  p-2 rounded cursor-pointer`}
              onClick={() => handleTabClick('DaySummery')}
            >
              Day summery
            </div>
          </div>
          <div className='flex relative mb-6 h-[31px]'>
            <div className="Frame194 justify-center items-center gap-2.5 flex">
              <div
                className={`Dining text-xs text-fuchsia-600 font-['Poppins'] ${activeTab === 'Dining' ? 'bg-fuchsia-500 text-white' : 'hover:bg-fuchsia-500 hover:text-white'} p-2 rounded `}
                onClick={() => handleTabClick('Dining')}
              >
                Dining
              </div>
            </div>
            
            <div className="Frame195 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Takeaway text-pink-500 text-xs font-normal font-['Poppins'] ${activeTab === 'Takeaway' ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'} p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick('Takeaway')}
              >
                Takeaway
              </div>
            </div>
            <div className="Frame196 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Delivery text-red-400 text-xs font-normal font-['Poppins'] ${activeTab === 'Delivery' ? 'bg-red-500 text-white' : 'hover:bg-red-500 hover:text-white'} p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick('Delivery')}
              >
                Delivery
              </div>
            </div>
            <div className="Frame197 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Talabat text-sky-500 text-xs font-normal font-['Poppins'] ${activeTab === 'Talabat' ? 'bg-sky-500 text-white' : 'hover:bg-sky-500 hover:text-white'} p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick('Talabat')}
              >
                Talabat
              </div>
            </div>
            <div className="Frame201 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Zomato text-orange-500 text-xs font-normal font-['Poppins'] ${activeTab === 'Zomato' ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'} p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick('Zomato')}
              >
                Zomato
              </div>
            </div>
            <div className="Frame200 p-2.5 justify-center items-center gap-2.5 flex">
              <div
                className={`Swiggy text-fuchsia-700 text-xs font-normal font-['Poppins'] ${activeTab === 'Swiggy' ? 'bg-fuchsia-500 text-white' : 'hover:bg-fuchsia-500 hover:text-white'} p-2 rounded cursor-pointer`}
                onClick={() => handleTabClick('Swiggy')}
              >
                Swiggy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTab;
