import React from "react";
import { useTheme } from "../../ThemeContext";

const SaleWiseComparison = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{ boxShadow: theme.shadow, overflow: "hidden" }}
      className=" flex-1 w-[330px] h-[225px] p-2  rounded-xl  flex-col justify-between items-start inline-flex"
    >
      <div class="Frame232 px-2 flex-col justify-between items-start flex">
        <div class="Frame235  self-stretch justify-center gap-12 items-center flex">
          <div class="Frame234 p-2 justify-center items-center gap-[92px] flex">
            <div class="SalesWiseComparison  text-xs font-semibold font-['Poppins']">
              Sales wise comparison
            </div>
            <div class=" text-green-600 text-xs font-normal font-['Poppins']">
              3 %
            </div>
          </div>
        </div>

        {/* Dining */}

        {/* Take Away */}
        <div className="overflow-auto">
          <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
            <div class="Dining  w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
              Dining&nbsp;&nbsp;
            </div>
            <div className="flex">
              <div class="Frame217 grow shrink basis-0 w-[207px]  justify-start items-start gap-2.5 inline-flex">
                <div
                  class="Rectangle35 self-stretch h-3.5 text-[10px] text-white bg-purple-700 "
                  style={{ width: "100%" }}
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
            <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
              Take Away&nbsp;&nbsp;
            </div>
            <div className="flex">
              <div class="Frame217 grow shrink basis-0 w-[207px]  justify-start items-start gap-2.5 inline-flex">
                <div
                  class="Rectangle35 self-stretch h-3.5 bg-fuchsia-600"
                  style={{ width: "60%" }}
                ></div>
                <div class=" text-xs font-medium font-['Poppins'] flex">
                  &nbsp;&nbsp;60%
                </div>
              </div>
            </div>
          </div>
          <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
            <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
              Take Away&nbsp;&nbsp;
            </div>
            <div className="flex">
              <div class="Frame217 grow shrink basis-0 w-[207px]  justify-start items-start gap-2.5 inline-flex">
                <div
                  class="Rectangle35 self-stretch h-3.5 bg-fuchsia-600"
                  style={{ width: "60%" }}
                ></div>
                <div class=" text-xs font-medium font-['Poppins'] flex">
                  &nbsp;&nbsp;60%
                </div>
              </div>
            </div>
          </div>
          <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
            <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
              Delivery&nbsp;&nbsp;
            </div>
            <div className="flex">
              <div class="Frame217 grow shrink basis-0 w-[207px]  justify-start items-start gap-2.5 inline-flex">
                <div
                  class="Rectangle35 self-stretch h-3.5 bg-amber-300"
                  style={{ width: "50%" }}
                ></div>
                <div class=" text-xs font-medium font-['Poppins'] flex">
                  &nbsp;&nbsp;50%
                </div>
              </div>
            </div>
          </div>

          <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
            <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
              Swiggy&nbsp;&nbsp;
            </div>
            <div className="flex">
              <div class="Frame217 grow shrink basis-0 w-[207px]  justify-start items-start gap-2.5 inline-flex">
                <div
                  class="Rectangle35 self-stretch h-3.5 bg-red-400"
                  style={{ width: "30%" }}
                ></div>
                <div class=" text-xs font-medium font-['Poppins'] flex">
                  &nbsp;&nbsp;30%
                </div>
              </div>
            </div>
          </div>
          <div class="Frame219 py-1.5 self-stretch justify-start items-start inline-flex">
            <div class="Dining w-20  text-xs font-medium font-['Poppins'] justify-end items-end flex">
              Take Away&nbsp;&nbsp;
            </div>
            <div className="flex">
              <div class="Frame217 grow shrink basis-0 w-[207px]  justify-start items-start gap-2.5 inline-flex">
                <div
                  class="Rectangle35 self-stretch h-3.5 bg-red-500"
                  style={{ width: "10%" }}
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
  );
};

export default SaleWiseComparison;
