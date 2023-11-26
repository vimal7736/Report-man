// Sidebar.js
// Sidebar.js
import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import { ChefHat, ChefHatIcon } from 'lucide-react';
import chef from "../../src/images/chef-hat.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} ref={sidebarRef}>
      <div className="title logo flex ">
        <img  width="45px" height="50px" src={chef} alt="" />
        <div></div>
      </div>
      <div className="title">iChef</div>
      <ul>
        <Link to = "/dashboard">
        <li
          className={activeTab === 'Dashboard' ? 'active' : ''}
          onClick={() => handleTabClick('Dashboard')}
        >
          Dashboard
        </li>
        </Link>
        <Link to = "/sales" >
        <li
          className={activeTab === 'Sales' ? 'active' : ''}
          onClick={() => handleTabClick('Sales')}
        >
          Sales
        </li>
        
        </Link>
        <li
          className={activeTab === 'Payment' ? 'active' : ''}
          onClick={() => handleTabClick('Payment')}
        >
          Payment
        </li>
        <li
          className={activeTab === 'Tax' ? 'active' : ''}
          onClick={() => handleTabClick('Tax')}
        >
          Tax
        </li>
        <li
          className={activeTab === 'NewOption' ? 'active' : ''}
          onClick={() => handleTabClick('NewOption')}
        >
          Logout 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


