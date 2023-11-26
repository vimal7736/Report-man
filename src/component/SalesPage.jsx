import React from "react";
import { useTheme } from "../ThemeContext";
import SalesTab from "./SalesTab";


const SalesPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
     <div className="flex gap-[10px] p-1">
        <div
          style={{ boxShadow: theme.shadow, overflow: "hidden" }}
          className="  p-2  rounded-xl  flex-col justify-between items-start inline-flex  h-96 "
          >
          <div class="Frame232 px-2 flex-col justify-between items-start flex">
            <div class="Frame235  self-stretch justify-center gap-12 items-center flex">
              <div class="Frame234 p-2 justify-center items-center gap-[92px] flex">
                <div class="SalesWiseComparison  text-xs font-semibold font-['Poppins']">
                  Item wise graph
                </div>
                <div class=" text-green-600 text-xs font-normal font-['Poppins']">
                  3 %
                </div>
              </div>
            </div>

            {/* Dining */}

            {/* Take Away */}
            
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20 overflow-hidden text-xs font-medium font-['Poppins'] justify-end items-end flex">
                Chicken r&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[700px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-sky-700 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;100%
                  </div>
                </div>
              </div>
            </div>
            
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                Beef bicol&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[600px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-purple-700 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;90%
                  </div>
                </div>
              </div>
            </div>
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                chicken &nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[590px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-red-700 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;90%
                  </div>
                </div>
              </div>
            </div>
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                S1&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[580px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-amber-300 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;87%
                  </div>
                </div>
              </div>
            </div>
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                C3&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[500px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-yellow-400 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;70%
                  </div>
                </div>
              </div>
            </div>
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                Dangsilog&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[400px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-purple-700 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;60%
                  </div>
                </div>
              </div>
            </div>
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                Beef brocoli&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[300px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-purple-700 "
                    style={{ width: "80%" }}
                  >
                    {" "}
                    100.09 Aed{" "}
                  </div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;30%
                  </div>
                </div>
              </div>
            </div>

            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                DungSilog&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[300px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 bg-fuchsia-600"
                    style={{ width: "60%" }}
                  ></div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;20%
                  </div>
                </div>
              </div>
            </div>
            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                Beef broc0li&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[200px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 bg-amber-300"
                    style={{ width: "50%" }}
                  ></div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;10%
                  </div>
                </div>
              </div>
            </div>

            <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
              <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
                 sising&nbsp;&nbsp;
              </div>
              <div className="flex">
                <div class="Frame217 grow shrink basis-0 w-[337px]  justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="Rectangle35 self-stretch h-3.5 bg-red-400"
                    style={{ width: "30%" }}
                  ></div>
                  <div class=" text-xs font-medium font-['Poppins'] flex">
                    &nbsp;&nbsp;10%
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SalesPage;
