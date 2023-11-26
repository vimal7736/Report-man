import React from 'react'
import { useTheme } from '../../ThemeContext';

const LeastFiveSelling = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div
    style={{ boxShadow: theme.shadow }}
    className="w-[380px] grow p-2  h-[100%] px-5 pb-3 rounded-xl  flex-col justify-between items-start inline-flex"
  >
    <div class="Frame235  grow self-stretch justify-center gap-12 items-center flex">
      <div class="Frame234 p-2.5 justify-center items-center gap-[92px] flex">
        <div class="SalesWiseComparison  text-xs font-semibold font-['Poppins']">
          Least 5 selling products
        </div>
        <div class=" text-green-600 text-xs font-normal font-['Poppins']"></div>
      </div>
    </div>

    <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
      <div class="Dining w-[180px] h-[12px]  text-xs font-medium font-['Poppins'] justify-end items-end flex">
        specoial beef bulao&nbsp;&nbsp;
      </div>
      <div className="flex">
        <div class="Frame217  grow shrink basis-0 w-[207px]  justify-start items-start  inline-flex">
          <div
            class="Rectangle35 self-stretch h-[10px] rounded-e-full bg-sky-500"
            style={{ width: "63%" }}
          ></div>
          <div class=" text-xs font-medium font-['Poppins'] flex ">
            &nbsp;&nbsp;43.3 AED
          </div>
        </div>
      </div>
    </div>
    <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
      <div class="Dining w-[180px] h-[12px]  text-xs font-medium font-['Poppins'] justify-end items-end flex">
        specoial beef bulao&nbsp;&nbsp;
      </div>
      <div className="flex">
        <div class="Frame217  grow shrink basis-0 w-[207px]  justify-start items-start  inline-flex">
          <div
            class="Rectangle35 self-stretch h-[10px] rounded-e-full bg-sky-500"
            style={{ width: "63%" }}
          ></div>
          <div class=" text-xs font-medium font-['Poppins'] flex ">
            &nbsp;&nbsp;43.3 AED
          </div>
        </div>
      </div>
    </div>
    <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
      <div class="Dining w-[180px] h-[12px]  text-xs font-medium font-['Poppins'] justify-end items-end flex">
        beef bicol kare&nbsp;&nbsp;
      </div>
      <div className="flex">
        <div class="Frame217  grow shrink basis-0 w-[207px]  justify-start items-start  inline-flex">
          <div
            class="Rectangle35 self-stretch h-[10px] rounded-e-full bg-fuchsia-700"
            style={{ width: "60%" }}
          ></div>
          <div class=" text-xs font-medium font-['Poppins'] flex ">
            &nbsp;&nbsp;38.45 AED
          </div>
        </div>
      </div>
    </div>
    <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
      <div class="Dining w-[180px] h-[12px]  text-xs font-medium font-['Poppins'] justify-end items-end flex">
        beef kare kare &nbsp;&nbsp;
      </div>
      <div className="flex">
        <div class="Frame217  grow shrink basis-0 w-[207px]  justify-start items-start  inline-flex">
          <div
            class="Rectangle35 self-stretch h-[10px] rounded-e-full bg-rose-600"
            style={{ width: "30%" }}
          ></div>
          <div class=" text-xs font-medium font-['Poppins'] flex ">
            &nbsp;&nbsp;30.11 AED
          </div>
        </div>
      </div>
    </div>

    <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
      <div class="Dining w-[180px] h-[12px]  text-xs font-medium font-['Poppins'] justify-end items-end flex">
        chicken kare kea&nbsp;&nbsp;
      </div>
      <div className="flex">
        <div class="Frame217  grow shrink basis-0 w-[207px]  justify-start items-start  inline-flex">
          <div
            class="Rectangle35 self-stretch h-[10px] rounded-e-full bg-orange-500"
            style={{ width: "30%" }}
          ></div>
          <div class=" text-xs font-medium font-['Poppins'] flex ">
            &nbsp;&nbsp;30 AED
          </div>
        </div>
      </div>
    </div>
    <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
      <div class="Dining w-[180px] h-[12px]  text-xs font-medium font-['Poppins'] justify-end items-end flex">
        chicken zinger span&nbsp;&nbsp;
      </div>
      <div className="flex">
        <div class="Frame217  grow shrink basis-0 w-[207px]  justify-start items-start  inline-flex">
          <div
            class="Rectangle35 self-stretch h-[10px] rounded-e-full bg-amber-500"
            style={{ width: "40%" }}
          ></div>
          <div class=" text-xs font-medium font-['Poppins'] flex ">
            &nbsp;&nbsp;40 AED
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeastFiveSelling