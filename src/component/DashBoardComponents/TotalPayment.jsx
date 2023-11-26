import React from 'react'
import { useTheme } from '../../ThemeContext';

const TotalPayment = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div
    style={{ boxShadow: theme.shadow }}
    className=" w-[138px] px-5 py-2.5  bg-opacity-95 rounded-xl  flex-col justify-start items-start inline-flex"
  >
    <div className="self-stretch justify-start items-center gap-[19px] inline-flex">
      <div className="py-2.5 justify-start items-center gap-2.5 flex">
        <div className=" text-[10px] font-semibold font-['Poppins'] w-[]91px">
          Total payments
        </div>
      </div>
    </div>
    <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
      <div className=" text-[10px] font-normal font-['Poppins']">
        Cash / 12
      </div>
    </div>
    <div className="h-[23px] justify-start items-end inline-flex">
      <div className="justify-center items-end gap-2.5 flex">
        <div className=" h-[27px] text-red-400 text-xl font-normal font-['Poppins']">
          322.61
        </div>
      </div>
      <div className="justify-center items-end gap-2.5 flex">
        <div className=" mb-1 text-xs font-normal font-['Poppins']">
          AED
        </div>
      </div>
    </div>
    <div className="h-[23px] opacity-0 justify-start items-end inline-flex">
      <div className="justify-center items-end gap-2.5 flex">
        <div className=" h-[27px]  text-xl font-normal font-['Poppins']">
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
        Cheque / 2
      </div>
    </div>
    <div className="h-[23px] justify-start items-end inline-flex">
      <div className="justify-center items-end gap-2.5 flex">
        <div className=" h-[27px] text-orange-300 text-xl font-normal font-['Poppins']">
          322.61
        </div>
      </div>
      <div className="justify-center items-end gap-2.5 flex">
        <div className=" mb-1 text-xs font-normal font-['Poppins']">
          AED
        </div>
      </div>
    </div>
  </div>
  )
}

export default TotalPayment