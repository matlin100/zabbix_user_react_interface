// HostContext.js
import React, { createContext, useContext, useState } from 'react';

const HostContext = createContext();

export const HostProvider = ({ children }) => {
  const [selectedHosts, setSelectedHosts] = useState([]);

  const selectHost = (hostData) => {
    setSelectedHosts([...selectedHosts, hostData]);
  };

  return (
    <HostContext.Provider value={{ selectedHosts, selectHost }}>
      {children}
    </HostContext.Provider>
  );
};

export const useHostContext = () => {
  const context = useContext(HostContext);
  if (!context) {
    throw new Error('useHostContext must be used within a HostProvider');
  }
  return context;
};
