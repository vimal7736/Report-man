import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Mainpage from "./pages/Mainpage";
import Sales from "./component/Sales";
import { useTheme } from "./ThemeContext";
import TargetTable from "./component/Target";
import Payment from "./component/Payment";
import Tax from "./component/Tax";
import "./App.css";
import Dashboard from "./component/Dashboard";
import ThemeLD from "./component/svg/ThemeLD";
import Excelsvg from "./component/svg/Excelsvg";
import DoorDelivery from "./component/DoorDelivery";
import Vimal from "./pages/Maindash";
import drawer from "../src/images/drawer.png";
import Sidebar from "./component/Side";
// import Sidebar from "./component/Side";
// import Sidebar from "./component/Sidebar";

const MainLayout = ({ children }) => {
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
            className="h-20 items-center flex flex-grow"
          >
            <div className="h-[42px]  items-center gap-[162px] flex flex-grow ">
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

                <div className="justify-center items-center sales gap-2.5 flex">
                  <div className="p-2.5 text-xs rounded-lg hover:bg-neutral-900 hover:text-white  ">
                    MIS
                  </div>
                </div>
                <div className="justify-center items-center sales gap-2.5 flex">
                  <div className="p-2.5 text-xs rounded-lg hover:bg-neutral-900 hover:text-white  ">
                    Purchase Entry
                  </div>
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
                
                <div className=" relative ">
                 
                  <div className=" h-[18px]   absolute  " />
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
                    <img width="20px" height="10px" src={drawer}  />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <SideDrawer /> */}

          {children}

          {/* Add the media query to hide the nav-links below 800px */}
          <style jsx>{`
            

           

         

            }
          `}</style>
          <style jsx>{`
            .main-layout {
            }

            .side-drawer {
              position: fixed;
              top: 0;
              right: 0; // Change left to right
              height: 100vh;
              background-color: #fff;
              box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); // Change the shadow side
              z-index: 999;
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

const App = () => {
  const { theme } = useTheme();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/sales"
          element={
            <MainLayout>
              <Sales />
            </MainLayout>
          }
        />
        <Route
          path="/door"
          element={
            <MainLayout>
              <DoorDelivery />
            </MainLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <MainLayout>
              <Payment />
            </MainLayout>
          }
        />
        <Route
          path="/tax"
          element={
            <MainLayout>
              <Tax />
            </MainLayout>
          }
        />

        <Route path="/branch" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vimal" element={<Vimal />} />
        <Route path="/targetsetting" element={<TargetTable />} />
      </Routes>
    </Router>
  );
};

export default App;
