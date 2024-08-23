// src/services/countryService.js
import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries', error);
    return [];
  }
};

export const fetchCountryDetails = async (cca3) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching country details', error);
    return {};
  }
};
