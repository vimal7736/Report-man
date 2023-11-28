import { Link, useLocation } from "react-router-dom";
import Sidebar from "../component/Side";
import { useTheme } from "../ThemeContext";
import { useState } from "react";
import Excelsvg from "../component/svg/Excelsvg";
import ThemeLD from "../component/svg/ThemeLD";
import drawer from "../../src/images/drawer.png";

export const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleSideDrawer = () => {
    setIsSideDrawerOpen((prev) => !prev);
  };

  return (
    <div className="main-layout">
      <div
        className={`side-drawer ${
          isSideDrawerOpen ? "" : "side-drawer-closed"
        }`}
      >
        <Sidebar toggleSideDrawer={toggleSideDrawer} />
      </div>
      <div
        className={`main-content ${
          isSideDrawerOpen ? "main-layout-drawer-open" : ""
        }`}
      >
        <div
          className="bg-stone-50 pl-[30px] pr-[30px] w-auto"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        >
          <div
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
            }}
            className=" headerAdjust h-20 items-center flex flex-grow  sm:gap-[450px] sm:pr-5 md:gap-[450px] md:pr-5   "
          >
            <div className="h-[42px]  items-center  flex flex-grow ">
              <div className="justify-start items-center flex">
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="justify-center items-center sales gap-2.5 flex"></div>
                  <div
                    style={{
                      backgroundColor: theme.backgroundColor,
                      color: theme.textColor,
                    }}
                    className="flex w-[150px]"
                  >
                    <Link to="/branch">
                      <Excelsvg />
                    </Link>
                    &nbsp;&nbsp; Branch name
                  </div>
                </div>
                <div className=" text-xs rounded-lg hover:bg-neutral-900 hover:text-white  "></div>
              </div>
              <div className="justify-start items-start gap-[35px] nav-links flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <Link
                    to="/dashboard"
                    className={`p-2.5 text-xs rounded-lg ${
                      location.pathname === "/dashboard"
                        ? "bg-neutral-900 text-white"
                        : "hover:bg-neutral-900 hover:text-white "
                    } `}
                  >
                    Dashboard
                  </Link>
                </div>

                <div className="justify-center sales items-center gap-2.5 flex">
                  <Link
                    to="/sales"
                    className={`p-2.5 text-xs rounded-lg ${
                      location.pathname === "/sales"
                        ? "bg-neutral-900 text-white"
                        : "hover:bg-neutral-900 hover:text-white "
                    } `}
                  >
                    Sales
                  </Link>
                </div>

                <div className="justify-center  sales items-center gap-2.5 flex">
                  <Link
                    to="/payment"
                    className={`p-2.5 text-xs rounded-lg ${
                      location.pathname === "/payment"
                        ? "bg-neutral-900 text-white"
                        : "hover:bg-neutral-900 hover:text-white "
                    } `}
                  >
                    Payment
                  </Link>
                </div>

                <div className="justify-center sales items-center gap-2.5 flex">
                  <Link
                    to="/tax"
                    className={`p-2.5 text-xs rounded-lg ${
                      location.pathname === "/tax"
                        ? "bg-neutral-900 text-white"
                        : "hover:bg-neutral-900 hover:text-white "
                    } `}
                  >
                    Tax
                  </Link>
                </div>
              </div>
              <div className="justify-end items-center   flex">
                <div className="self-stretch pb-0.5 opacity-0 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-10 self-stretch text-red-600 text-xs font-normal font-['Inter']">
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className=" h-[18px] " />
              <button
                className=" text-black p-2 rounded-full"
                onClick={toggleTheme}
              >
                <ThemeLD />
              </button>
              <button
                className="  sideTogglee text-black  p-2 rounded-full"
                onClick={toggleSideDrawer}
              >
                <img width="20px" height="10px" src={drawer} />
              </button>
            </div>
          </div>
          {children}
          <style jsx>{`
            .main-layout {
            }
            .side-drawer {
              position: fixed;
              width: min-content;
              top: 0;
              right: 0; // Change left to right
              height: 100vh;
              background-color: #fff;
              box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); // Change the shadow side
              z-index: 99999999999999999;
              overflow: hidden;
              transition: transform 0.3s ease-in-out;
            }
            .side-drawer-closed {
              transform: translateX(400px);
            }
            // ... (Your existing styles remain unchanged)
          `}</style>
        </div>
      </div>
    </div>
  );
};
