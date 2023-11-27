import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Mainpage from "./pages/Mainpage";
import Sales from "./component/Sales";
import TargetTable from "./component/Target";
import Payment from "./component/Payment";
import Tax from "./component/Tax";
import Dashboard from "./component/Dashboard";
import DoorDelivery from "./component/DoorDelivery";
import "./App.css";

import { MainLayout } from "./Layouts/MainLayout";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
  }, [theme.backgroundColor]);

  return (
    <div 
    style={{
      backgroundColor: "#CCC",
      color: theme.textColor,
    }}>

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
        <Route path="/targetsetting" element={<TargetTable />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
