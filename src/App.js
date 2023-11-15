// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Mainpage from "./pages/Mainpage";
import Sales from "./component/Sales";
import TargetTable from "./component/Target";
import Payment from "./component/Payment";
import Tax from "./component/Tax";
import './App.css'
import Dashnew from "./component/Dashnew";


const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <header className="shadow rounded-sm` w-screen ">
          <div className=" h-[71  px] pt-[19px] pb-2.5 justify-between items-center bg-white shadow border border-fuchsia-50 flex flex-wrap ">
            <div className="h-[42px] justify-start items-center gap-10 flex flex-wrap">
              <div className="justify-start items-center flex flex-wrap">
                <div className="w-[26px] h-[26px] relative" />
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-neutral-900 text-lg font-normal font-['Inter']">
                    Branch name
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-[35px] flex">
                <Link to="/dashboard">
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-normal font-['Poppins']">
                      Dashboard
                    </div>
                  </div>
                </Link>
                <Link to="/sales">
                  <div className="p-2.5 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-normal font-['Poppins']">
                      Sales
                    </div>
                  </div>
                </Link>

                <Link to="/payment" >
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-normal font-['Poppins']">
                      Payment
                    </div>
                  </div>
                </Link>
                <Link to = "/tax" >
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-normal font-['Poppins']">
                      Tax
                    </div>
                  </div>
                </Link>
                <Link>
                  <div className="p-2.5 justify-center items-center gap-2.5 flex">
                    <div className="text-black text-xs font-normal font-['Poppins']">
                      MIS
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="justify-start items-center gap-[15px] flex">
              <div className="self-stretch pb-0.5 opacity-0 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="w-10 self-stretch text-red-600 text-xs font-normal font-['Inter']">
                    Logout
                  </div>
                </div>
              </div>
              <div className="justify-start items-center flex">
                <div className="h-[30px] pl-2.5 py-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-10 text-neutral-900 text-[12px] font-normal font-['Inter']">
                    Last updated time 09-Aug-2023 08:09 AM
                  </div>
                </div>
                <div className="w-[18px] h-[18px] relative" />
              </div>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashnew />
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
        <Route path="/targetsetting" element={<TargetTable />} />
      </Routes>
    </Router>
  );
};

export default App;
