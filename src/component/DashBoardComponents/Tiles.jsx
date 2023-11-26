
import React from 'react'
import { useTheme } from '../../ThemeContext';
import Calender from '../svg/Calender';
import Arrow from '../svg/Arrow';

const Tiles = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div className=" gap-[10px] p-[4px]  grow justify-start items-center ">
    <div className="w-[626px] h-[90px] flex justify-start items-start gap-[10px]  grow">
      <div
        style={{ boxShadow: theme.shadow }}
        className={`px-5 bg-opacity-95 rounded-xl shadow flex-col justify-start items-start inline-flex`}
      >
        <div className=" h-[30px] self-stretch justify-start items-center gap-[19px] inline-flex">
          <div className="py-2.5 justify-start items-center gap-2.5 flex">
            <div className="  relative text-[8px] font-normal  font-['Poppins'] flex">
              <div>Today sales</div>
              <div className="absolute ml-[70px]">
                <Calender />
              </div>
            </div>
          </div>

          <div className="w-[18px] h-[18px] relative" />
        </div>
        <div className="h-[23px] justify-start items-end inline-flex">
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" h-[27px] text-yellow-400 text-xl font-normal font-['Poppins']">
              322.61
            </div>
          </div>
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" text-xs mb-1 font-normal font-['Poppins']">
              AED
            </div>
          </div>
        </div>

        <div className="p-2.5 justify-center items-center gap-1 inline-flex">
          <Arrow />
          <div className="text-green-400 text-[10px] flex font-medium font-['Poppins']">
            8 %
          </div>
          <div className="text-green-400 text-[6px] font-nfont-mediumfont-['Poppins']">
            than yesterday
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: theme.shadow }}
        className="px-5  bg-opacity-95 rounded-xl  flex-col justify-start items-start inline-flex"
      >
        <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
          <div className="py-2.5 justify-start items-center gap-2.5 flex">
            <div className=" text-[8px] font-normal font-['Poppins']">
              Top sale time
            </div>
          </div>
          <div className="w-[18px] h-[18px] px-[3px] pt-[2.08px] pb-[2.25px] opacity-0 justify-center items-center flex" />
        </div>
        <div className="h-[23px] justify-start items-end inline-flex">
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" h-[27px] text-pink-400 text-xl font-normal font-['Poppins']">
              322.61
            </div>
          </div>
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" text-xs mb-1 font-normal font-['Poppins']">
              AED
            </div>
          </div>
        </div>
        <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className=" text-[10px] font-normal font-['Poppins']">
            12 pm - 3 pm
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: theme.shadow }}
        className="px-5  bg-opacity-95 rounded-xl flex-col justify-start items-start inline-flex"
      >
        <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
          <div className="py-2.5 justify-start items-center gap-2.5 flex">
            <div className=" text-[8px] font-normal font-['Poppins']">
              Door delivery sales
            </div>
          </div>
        </div>
        <div className="h-[23px] justify-start items-end inline-flex">
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" h-[27px] text-orange-500 text-xl font-normal font-['Poppins']">
              322.61
            </div>
          </div>
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" mb-1 text-xs font-normal font-['Poppins']">
              AED
            </div>
          </div>
        </div>
        <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className=" text-[10px] font-normal font-['Poppins']">
            Bills 08
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          boxShadow: theme.shadow,
        }}
        className="px-5  bg-opacity-95 rounded-xl shadow flex-col justify-start items-start inline-flex"
      >
        <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
          <div className="py-2.5 justify-start items-center gap-2.5 flex">
            <div className=" text-[8px] font-normal font-['Poppins']">
              Bills & Pax
            </div>
          </div>
        </div>
        <div className="h-[23px] justify-start items-end inline-flex">
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" h-[27px] text-rose-600 text-xl font-normal font-['Poppins']">
              11/25
            </div>
          </div>
        </div>
        <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="opacity-0  text-[10px] font-normal font-['Poppins']">
            Bills 08
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: theme.shadow }}
        className="grow shrink basis-0 px-5  bg-opacity-95 rounded-xl  flex-col justify-start items-start inline-flex"
      >
        <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
          <div className="py-2.5 justify-start items-center gap-2.5 flex">
            <div className=" text-[8px] font-normal font-['Poppins']">
              Void
            </div>
          </div>
        </div>
        <div className="h-[23px] justify-start items-end inline-flex">
          <div className="justify-center items-end gap-2.5 flex">
            <div className=" h-[27px] text-sky-500 text-xl font-normal font-['Poppins']">
              0/0
            </div>
          </div>
        </div>
        <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className=" text-[10px] font-normal font-['Poppins']">
            Bills/Memos
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tiles