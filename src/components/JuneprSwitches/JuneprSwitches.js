import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HostList from '../HostList/HostList';
import axios from 'axios';
import useWebSocket from '../../services/WebSocketService';
import { JuneprSwitchesWrapper } from './JuneprSwitches.styled';

const JuneprSwitches = () => {
   const switchData = useWebSocket('switchData'); // Specify the channel you need

  
   return (
     <JuneprSwitchesWrapper>
       <h3>Cisco Switches</h3>
       <HostList hosts={switchData} />
     </JuneprSwitchesWrapper>
   );
 };
 
 JuneprSwitches.propTypes = {};
 
 JuneprSwitches.defaultProps = {};
 
 export default JuneprSwitches;
 