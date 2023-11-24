// api.js
import axios from 'axios';
import config from '../config';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${config.zabbixApiEndpoint}/${endpoint}`);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error for the component to handle
  }
};

export default fetchData;
