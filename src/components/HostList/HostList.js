// HostList.js
import React from 'react';
import PropTypes from 'prop-types';
import SinglHost from '../SinglHost/SinglHost';
import { HostListWrapper } from './HostList.styled';

const HostList = ({ hosts }) => (
  <HostListWrapper>
   <p>host list</p>
    {hosts.map((host) => (
      <SinglHost key={host.id} data={host} />
    ))}
  </HostListWrapper>
);

HostList.propTypes = {
  hosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other required properties for SinglHost component
    })
  ).isRequired,
};

HostList.defaultProps = {
  hosts: [],
};

export default HostList;
