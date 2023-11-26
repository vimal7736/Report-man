import React from 'react'
import { DChart } from '../../chart/DonutChart';
import { useTheme } from '../../ThemeContext';

const Collection = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div
    style={{ boxShadow: theme.shadow }}
    className="w-[429px] h-[220px] px-5 py-2.5  grow  rounded-xl  justify-center items-center gap-5 inline-flex"
  >
    <div className=" flex-col justify-start items-start inline-flex">
      <div className="flex-col justify-start items-start flex">
        <div className=" justify-center items-center gap-2.5 inline-flex">
          <div className=" text-sm font-semibold font-['Inter']">
            Collection distribution
          </div>
        </div>
        <div className=" justify-center items-center gap-2.5 inline-flex">
          <div className=" text-xs font-normal font-['Inter']">
            Total amount
          </div>
        </div>
        <div className=" justify-center items-center gap-2.5 inline-flex">
          <div>
            <span className=" text-xl font-semibold font-['Inter']">
              365.61
            </span>
            <span className=" text-xl font-normal font-['Inter']">
              {" "}
              AED
            </span>
          </div>
        </div>
      </div>
      <div className="justify-start items-start inline-flex">
        <div className="flex-col justify-start items-start inline-flex">
          <div className="justify-start items-center inline-flex">
            <div className="p-2.5 justify-start items-start gap-2.5 flex">
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-sm" />
            </div>
            <div className="py-2.5 justify-center items-center gap-2.5 flex">
              <div className=" text-[10px] font-semibold font-['Inter']">
                Cash 40%
              </div>
            </div>
          </div>
          <div className="justify-start items-center inline-flex">
            <div className="p-2.5 justify-start items-start gap-2.5 flex">
              <div className="w-2.5 h-2.5 bg-orange-400 rounded-sm" />
            </div>
            <div className="py-2.5 justify-center items-center gap-2.5 flex">
              <div className=" text-opacity-25 text-[10px] font-semibold font-['Inter']">
                Credit card 30%
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="justify-start items-center inline-flex">
            <div className="p-2.5 justify-start items-start gap-2.5 flex">
              <div className="w-2.5 h-2.5 bg-amber-300 rounded-sm" />
            </div>
            <div className="py-2.5 justify-center items-center gap-2.5 flex">
              <div className=" text-opacity-25 text-[10px] font-semibold font-['Inter']">
                Google pay 25%
              </div>
            </div>
          </div>
          <div className="justify-start items-center inline-flex">
            <div className="p-2.5 justify-start items-start gap-2.5 flex">
              <div className="w-2.5 h-2.5 bg-pink-700 rounded-sm" />
            </div>
            <div className="py-2.5 justify-center items-center gap-2.5 flex">
              <div className=" text-opacity-25 text-[10px] font-semibold font-['Inter']">
                Credit 15%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-[126px] flex-col justify-between items-start inline-flex relative">
      <div className="text-white text-[8px] font-semibold font-['Poppins'] hidden">
        40%
      </div>
      <div className="opacity-0  text-opacity-50 text-[8px] font-semibold font-['Poppins']">
        15%
      </div>
      <DChart />

      <div className="w-[59px] h-[49px] flex-col absolute mt-[59px] ml-[34px] justify-center items-center flex">
        <div className=" justify-center items-center gap-2.5 inline-flex">
          <div className=" text-[8px] font-semibold font-['Inter']">
            Cash
          </div>
        </div>
        <div className="px-2.5 pt-[5px] pb-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className=" text-[10px] font-semibold font-['Inter']">
            900 AED
          </div>
        </div>
      </div>
      <div className="opacity-0 text-neutral-950 text-opacity-50 text-[8px] font-semibold font-['Poppins']">
        25%
      </div>
      <div className="opacity-0  text-opacity-50 text-[8px] font-semibold font-['Poppins']">
        30%
      </div>
    </div>
  </div>
  )
}

export default Collection