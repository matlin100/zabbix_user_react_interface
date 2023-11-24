// SinglHost.js
import React from 'react';
import PropTypes from 'prop-types';
import { SinglHostWrapper } from './SinglHost.styled';

const SinglHost = ({ data }) => (
  <SinglHostWrapper>
   <p>singl host</p>
    {/* Render details of the individual host */}
    {data.name}
  </SinglHostWrapper>
);

SinglHost.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // Add other required properties for SinglHost component
  }).isRequired,
};

SinglHost.defaultProps = {};

export default SinglHost;
