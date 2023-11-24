// CiscoSwitchs.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HostList from '../HostList/HostList';
import axios from 'axios';
import useWebSocket from '../../services/WebSocketService';
import { CiscoSwitchsWrapper } from './CiscoSwitchs.styled';

const CiscoSwitchs = () => {
 const switchData = useWebSocket('switchData'); // Specify the channel you need

  return (
    <CiscoSwitchsWrapper>
      <h3>Cisco Switches</h3>
      <HostList hosts={switchData} />
    </CiscoSwitchsWrapper>
  );
};

CiscoSwitchs.propTypes = {};

CiscoSwitchs.defaultProps = {};

export default CiscoSwitchs;
