import React, { useState } from "react";

const Target = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("Branch 1");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [minTarget, setMinTarget] = useState("");
  const [target, setTarget] = useState("");

  const handleCreate = () => {
    // Update the tableData with the new values
    const newEntry = {
      branch: selectedBranch,
      day: selectedDay,
      minTarget: minTarget,
      target: target,
    };
    setTableData((prevData) => [...prevData, newEntry]);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleMinTargetChange = (e) => {
    setMinTarget(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
  };

  const getFilteredData = () => {
    return tableData.filter((entry) => entry.branch === selectedBranch && entry.day === selectedDay);
  };

  return (
    <div className="bg-gray-100 h-screen ">
      <div className=" h-[76px] pt-5 pb-3.5 justify-between items-center inline-flex">
        <div className="h-[42px] justify-start items-center gap-10 flex">
          <div className="justify-start items-center flex">
            <div className="w-[26px] h-[26px] relative" />
            <div className="p-2.5 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-900 text-lg font-normal ">
                Target settings
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex">
        <div className=" inline-block   lg:px- ">
          <div className="flex gap-2">
            <div className="">
              <div className=" h-11 px-5 py-2 bg-stone-50 justify-start items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-xs font-normal ">
                  Branch name
                </div>
              </div>
              <select
                value={selectedBranch}
                onChange={handleBranchChange}
                className="h-11 px-5 py-2 bg-stone-50 border-r border-neutral-900 text-neutral-900 text-xs font-normal border-opacity-20 justify-start items-center gap-5 inline-flex"
              >
                <option value="Branch 1">Branch 1</option>
                <option value="Branch 2">Branch 2</option>
                <option value="Branch 3">Branch 3</option>
              </select>

              <select
                value={selectedDay}
                onChange={handleDayChange}
                className="h-11 px-5 py-2 bg-stone-50 border-r text-neutral-900 text-xs font-normal border-neutral-900 border-opacity-20 justify-start items-center gap-5 inline-flex"
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
              </select>
            </div>

            <input
              placeholder="min target"
              value={minTarget}
              onChange={handleMinTargetChange}
              className=" h-11 px-5 py-2 bg-stone-50 border-r border-neutral-900 border-opacity-20 justify-start items-center gap-5 text-neutral-900 text-xs font-normal inline-flex"
            />

            <input
              placeholder="target"
              value={target}
              onChange={handleTargetChange}
              className=" h-11 px-5 py-2 bg-stone-50 border-r text-neutral-900 text-xs font-normal border-neutral-900 border-opacity-20 justify-start items-center gap-5 inline-flex"
            />

            <div
              onClick={handleCreate}
              className="Frame55 w-20 h-8 px-5 py-1 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-orange-300 rounded-lg justify-center items-center gap-2.5 inline-flex"
            >
              <div className="Create text-stone-50 text-xs font-bold font-['Poppins']">
                Create
              </div>
            </div>
          </div>
          <br />

          <div className="overflow-hidden">
            <div className="w-screen h-[284px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[54px] justify-start items-start inline-flex">
                <div className="self-stretch px-5 py-2 bg-neutral-900 border-r  border-opacity-20 justify-start items-center gap-2.5 flex">
                  <div className="text-stone-50 text-[10px] font-normal ">
                    Branch name
                  </div>
                </div>

                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="self-stretch grow shrink basis-0  bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-stone-50 text-[10px] font-normal ">
                      {selectedDay}Monday
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Min target
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Target
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="self-stretch grow shrink basis-0  bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-stone-50 text-[10px] font-normal ">
                      {selectedDay}Tuesday
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Min target
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Target
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="self-stretch grow shrink basis-0  bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-stone-50 text-[10px] font-normal ">
                      {selectedDay}Wednesday
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Min target
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Target
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="self-stretch grow shrink basis-0  bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-stone-50 text-[10px] font-normal ">
                      {selectedDay}Thursday
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Min target
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Target
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                  <div className="self-stretch grow shrink basis-0  bg-neutral-900 border-r border-b border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-stone-50 text-[10px] font-normal ">
                      {selectedDay}Friday
                    </div>
                  </div>
                  <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-white border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Min target
                      </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch  bg-neutral-900 border-r border-stone-50 border-opacity-20 justify-center items-center gap-2.5 flex">
                      <div className="text-stone-50 text-[10px] font-normal ">
                        Target
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {getFilteredData().map((entry, index) => (
                
                <div key={index} className="self-stretch h-[54px] justify-start items-start inline-flex">
                  <div className=" w-[100px] self-stretch px-5 py-2  border-stone-600 border-opacity-20 justify-start items-center gap-2.5 flex">
                    <div className=" text-[10px] font-normal ">{entry.branch}</div>
                  </div>

                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.minTarget}
                        </div>
                      </div>
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.target}
                        </div>
                      </div>
                    </div>
                  </div>
                 

                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.minTarget}
                        </div>
                      </div>
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.target}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.minTarget}
                        </div>
                      </div>
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.target}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.minTarget}
                        </div>
                      </div>
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.target}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.minTarget}
                        </div>
                      </div>
                      <div className="grow shrink basis-0 self-stretch   border-r  border-opacity-20 justify-center items-center gap-2.5 flex">
                        <div className=" text-[10px] font-normal ">
                          {entry.target}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
