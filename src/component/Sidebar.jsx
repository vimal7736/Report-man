import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dash from "../../src/images/dash.png";
import sales from "../../src/images/sales.png";
import payment from "../../src/images/payment.png";
import tax from "../../src/images/tax.png";
import mis from "../../src/images/mis.png";
import toggle from "../../src/images/toggle.png";
import { ArrowBack, Face3Outlined } from "@mui/icons-material";

const Sidebar = ({ toggleSideDrawer }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const location = useLocation();

  return (
    <div className="h-screen bg-transparent w-32">
      <aside className="flex relative flex-col items-start shadow-2xl w-32  h-full border-r border-gray-100">
        {/* Header with company logo */}
        <div className="h-16 flex items-end px-4  border-gray-300">
          {/* <img src="your-company-logo.png" alt="Company Logo" className="w-8 h-8 mr-2" /> */}
          <span className=" text-center text-[9px] font-bold">Logo</span>
        </div>

        {/* Sidebar content */}
        <div className="py-4">
          <div className="mt-4">
            <Link
              to="/dashboard"
              className={`px-2.5 text-xs rounded-lg ${
                location.pathname === "/dashboard"
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-900 hover:text-white "
              } font-['Poppins']`}
            >
              Dashboard
            </Link>
          </div>

          <div className="mt-4">
            <Link
              to="/sales"
              className={`px-2.5 text-xs rounded-lg ${
                location.pathname === "/sales"
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-900 hover:text-white "
              } font-['Poppins']`}
            >
              Sales
            </Link>
          </div>

          <div className="mt-4">
            <Link
              to="/payment"
              className={`px-2.5 text-xs rounded-lg ${
                location.pathname === "/payment"
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-900 hover:text-white "
              } font-['Poppins']`}
            >
              Payment
            </Link>
          </div>

          <div className="mt-4">
            <Link
              to="/tax"
              className={`px-2.5 text-xs rounded-lg ${
                location.pathname === "/tax"
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-900 hover:text-white "
              } font-['Poppins']`}
            >
              Tax
            </Link>
          </div>

          <div className="mt-4">
            <div className="px-2.5 text-xs rounded-lg hover:bg-neutral-900 hover:text-white font-['Poppins']">
              MIS
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
