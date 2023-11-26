import React from "react";
import { useTheme } from "../../ThemeContext";
import VectoGraph from "../svg/VectoGraph";
import { App } from "../../chart/DthreeLineChart";

const DaywiseComparison = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className=" p-[6px] grow ">
      <div
        style={{ boxShadow: theme.shadow }}
        className="  grow h-[322px] p-2.5 rounded-xl  f  "
      >
        
        <div className="self-stretch w-[-webkit-fill-available] h-[240px] grow shrink basis-0 justify-center relative items-end gap-5 inline-flex pl-[15px]">
          <div className="self-stretch flex-col pt-[90px] justify-between items-start inline-flex">
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
              <div className=" text-[10px] font-normal font-['Poppins']">0</div>
            </div>
            <div className="self-stretch h-4 p-2.5 flex-col justify-center items-center gap-2.5 flex">
              <div className="opacity-0  text-sm font-normal font-['Poppins']">
                0
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 h-[162px] flex-col justify-between items-start inline-flex">
            <div className="relative">
              <div className="w-80 absolute mt-[-100px] ">
              <App/>

              </div>
              {/* <svg
                width="417"
                height="85"
                viewBox="0 0 417 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 72.9044C1 72.9044 26.0881 52.7363 72.8163 21.7563C120.501 -9.85805 187.354 -3.52662 226.076 40.7259C241.796 58.6909 251.653 65.026 276.296 66.1153C314.441 67.8015 315.487 42.7123 353.619 47.2664C382.825 50.7544 415 83 415 83"
                  stroke="url(#paint0_linear_290_995)"
                  stroke-width="3"
                  />
                <defs>

                  <linearGradient
                    id="paint0_linear_290_995"
                    x1="208"
                    y1="2"
                    x2="213.976"
                    y2="168.786"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#05FF00" />
                    <stop offset="0.380208" stop-color="#DC8D00" />
                    <stop offset="0.442708" stop-color="#FF7A00" />
                    <stop offset="0.984375" stop-color="#FF0202" />
                  </linearGradient>
                </defs>
              </svg> */}
            </div>

            <div className="self-stretch justify-between items-start inline-flex pt-[180px]">
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
      </div>
    </div>
  );
};

export default DaywiseComparison;
