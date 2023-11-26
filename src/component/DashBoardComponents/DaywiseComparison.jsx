import React from 'react'
import { useTheme } from '../../ThemeContext';
import VectoGraph from '../svg/VectoGraph';

const DaywiseComparison = () => {
    const chartData = [
        { day: "1", price: 1000 },
        { day: "2", price: 2000 },
        { day: "3", price: 3000 },
      ];
  const { theme, toggleTheme } = useTheme();

  return (
    <div className=" p-[6px] grow ">
          <div
            style={{ boxShadow: theme.shadow }}
            className="  grow h-[322px] p-2.5 rounded-xl  f  "
          >
            <div className="p-2.5  gap-[60px]   flex  justify-around ">
              <div className="   text-lg  font-semibold font-['Poppins']">
                Day wise comparison
              </div>
              <div className="flex">
                <div className="px-2.5 py-[5px] bg-neutral-900 rounded-md ">
                  <div className="text-white text-[10px]  font-['Poppins']">
                    Day
                  </div>
                </div>
                <div className="px-2.5 py-[5px] rounded-md">
                  <div className=" text-[10px] font-['Poppins']">month</div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-[-webkit-fill-available] h-[240px] grow shrink basis-0 justify-center items-end gap-5 inline-flex pl-[15px]">
              <div className="self-stretch flex-col justify-between items-start inline-flex">
                <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    price
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    3000
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    2000
                  </div>
                </div>
                <div className="p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    1000
                  </div>
                </div>
                <div className="self-stretch h-[35px] p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className=" text-[10px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>
                <div className="self-stretch h-4 p-2.5 flex-col justify-center items-center gap-2.5 flex">
                  <div className="opacity-0  text-sm font-normal font-['Poppins']">
                    0
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[162px] flex-col justify-between items-start inline-flex">
                <VectoGraph data={chartData} />

                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      1
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      2
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      3
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      4
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      5
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      6
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      7
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      8
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      9
                    </div>
                  </div>
                  <div className="grow shrink basis-0 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      10
                    </div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className=" text-[10px] font-normal font-['Poppins']">
                      date
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <App/> */}
          </div>
          {/* <ChartContainer /> */}
          {/* <App/> */}
        </div>
  )
}

export default DaywiseComparison