// ZabbixDashboard.js
import React, { useState } from 'react';
import SidBar from '../side_bar/SidBar/SidBar';
import CiscoSwitchs from '../CiscoSwitchs/CiscoSwitchs';
import JuneprSwitches from '../JuneprSwitches/JuneprSwitches';
import Information from '../info/Information/Information';
import { ZabbixDashboardtWrapper } from './ZabbixDashboardt.styled';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ZabbixDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ZabbixDashboardtWrapper sidebarOpen={sidebarOpen}>
      <div className="sidebar">
        <button className="toggle-button" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <i className="bi bi-arrow-bar-left"></i>
          ) : (
            <i className="bi bi-arrow-bar-right"></i>
          )}
        </button>
        <aside>
          <SidBar />
        </aside>
      </div>

      <main>
        <h1>Zabbix Dashboard</h1>
        <CiscoSwitchs />
        <JuneprSwitches />
        <Information />
      </main>
    </ZabbixDashboardtWrapper>
  );
};

export default ZabbixDashboard;
