import React from "react";

const Target = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="w-[1156px] h-[76px] pt-5 pb-3.5 justify-between items-center inline-flex">
        <div className="h-[42px] justify-start items-center gap-10 flex">
          <div className="justify-start items-center flex">
            <div className="w-[26px] h-[26px] relative" />
            <div className="p-2.5 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-lg font-normal font-['Inter']">
                Target settings
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 flex">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="flex gap-2">
            <div>
            <div className="w-[113px] h-11 px-5 py-2 bg-stone-50 justify-start items-center gap-2.5 inline-flex">
              <div className="text-neutral-900 text-xs font-normal font-['Inter']">
                Branch name
              </div>
            </div>
            <div className="w-[233px] h-11 px-5 py-2 bg-stone-50 border-r border-neutral-900 border-opacity-20 justify-start items-center gap-5 inline-flex">
              <div className="grow shrink basis-0 text-neutral-900 text-opacity-20 text-xs font-normal font-['Inter']">
                Alfalah
              </div>
            </div>
            <div className="w-[127.23px] h-11 px-5 py-2 bg-stone-50 justify-start items-center gap-2.5 inline-flex">
              <div className="text-neutral-900 text-xs font-normal font-['Inter']">
                Monday
              </div>
            </div>
            </div>
         
          <div className="flex gap-3">
           

            <div className="w-[98px] h-11 px-5 py-2 bg-stone-50 rounded-lg border-r border-neutral-50 border-opacity-20 justify-start items-center gap-2.5 inline-flex">
              <div className="text-neutral-900 text-opacity-20 text-xs font-normal font-['Inter']">
                Min target
              </div>
            </div>
            <div className="w-[98px] h-11 px-5 py-2 bg-stone-50 rounded-lg border-r border-neutral-50 border-opacity-20 justify-start items-center gap-2.5 inline-flex">
              <div className="text-neutral-900 text-opacity-20 text-xs font-normal font-['Inter']">
                target
              </div>
            </div>
          <div className="w-20 h-[33px] px-5 py-1 bg-green-500 rounded-lg justify-center items-center gap-2.5 inline-flex mt-2">
            <div className="text-stone-50 text-xs font-bold font-['Poppins']">
              Create
            </div>
          </div>
          </div>
          </div>
          <br />

          <div className="overflow-hidden">
            {/* <table className="min-w-full border-gray-600 ">
              <thead className="bg-white border border-gray-800">
                <tr className="bg-black text-white text-center  border border-separate border-gray-700">
                  <th
                    className="text-sm font-medium px-6 py-4  border border-separate  border-gray-700 "
                    rowSpan="2"
                  >
                    Branch name
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2  border border-separate  border-gray-700 "
                    colSpan="2"
                  >
                    Monday
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2  border border-separate  border-gray-700"
                    colSpan="2"
                  >
                    Tuesday
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2   border border-separate  border-gray-700"
                    colSpan="2"
                  >
                    Wednesday
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2  border border-separate  border-gray-700 "
                    colSpan="2"
                  >
                    Thursday
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2  border border-separate  border-gray-700 "
                    colSpan="2"
                  >
                    Friday
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2  border border-separate  border-gray-700 "
                    colSpan="2"
                  >
                    Saturday
                  </th>
                  <th
                    className="text-sm font-medium px-6 py-2  border border-separate  border-gray-700 "
                    colSpan="2"
                  >
                    Sunday
                  </th>
                </tr>
                <tr className="bg-black text-white  border-gray-700">
                  <th className="text-xs font-light  border-gray-700  text-center  border border-separate ">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700  border border-separate">
                    Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700  border border-separate">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center   border-gray-700 border border-separate">
                    Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700 border border-separate">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700 border border-separate">
                    Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700  border border-separate">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700 border border-separate">
                    Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700  border border-separate">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700  border border-separate">
                    Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700 border border-separate">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700 border border-separate">
                    Target
                  </th>
                  <th className="text-xs font-light  text-center border-gray-700  border border-separate">
                    Min Target
                  </th>
                  <th className="text-xs font-light  text-center  border-gray-700 border border-separate">
                    Target
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate  text-gray-900">
                    Branch Name 1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    12
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-separate ">
                    Branch Name 2
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  border border-separate text-gray-900">
                    13
                  </td>
                </tr>

                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    Branch Name 3
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    12
                  </td>
                </tr>

                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    Branch Name 4
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border border-separate text-gray-900">
                    13
                  </td>
                </tr>
              </tbody>
            </table> */}
            <div className="w-[1156px] h-[284px] flex-col justify-start items-start inline-flex">
    <div className="self-stretch h-[54px] justify-start items-start inline-flex">
        <div className="w-[127px] self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-start items-center gap-2.5 flex">
            <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Branch name</div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Monday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Tuesday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Wednesday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Thursday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Friday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Saturday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
            <div className="self-stretch grow shrink basis-0 px-5 py-2 bg-neutral-900 border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Sunday</div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Min target</div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-5 py-2 bg-neutral-900 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-50 text-[10px] font-normal font-['Inter']">Target</div>
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch h-[46px] justify-start items-start inline-flex">
        <div className="w-[127px] self-stretch px-5 py-2 bg-stone-50 border-l border-r border-b border-black border-opacity-20 justify-start items-center gap-2.5 flex">
            <div className="text-neutral-700 text-[10px] font-normal font-['Inter']">Special beef bulalo</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
    </div>
    <div className="self-stretch h-[46px] justify-start items-start inline-flex">
        <div className="w-[127px] self-stretch px-5 py-2 bg-stone-50 border-l border-r border-b border-black border-opacity-20 justify-start items-center gap-2.5 flex">
            <div className="text-neutral-700 text-[10px] font-normal font-['Inter']">Special beef bulalo</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
    </div>
    <div className="self-stretch h-[46px] justify-start items-start inline-flex">
        <div className="w-[127px] self-stretch px-5 py-2 bg-stone-50 border-l border-r border-b border-black border-opacity-20 justify-start items-center gap-2.5 flex">
            <div className="text-neutral-700 text-[10px] font-normal font-['Inter']">Special beef bulalo</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
    </div>
    <div className="self-stretch h-[46px] justify-start items-start inline-flex">
        <div className="w-[127px] self-stretch px-5 py-2 bg-stone-50 border-l border-r border-b border-black border-opacity-20 justify-start items-center gap-2.5 flex">
            <div className="text-neutral-700 text-[10px] font-normal font-['Inter']">Special beef bulalo</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-gray-200 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">300</div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-1 py-2 bg-stone-50 border-r border-b border-black border-opacity-20 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-center text-neutral-700 text-[10px] font-normal font-['Inter']">1000</div>
        </div>
    </div>
   
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
