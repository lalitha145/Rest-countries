// src/components/CountryDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryDetails } from '../Services/CountryService.jsx';

const CountryDetails = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountryDetails = async () => {
      const data = await fetchCountryDetails(cca3);
      setCountry(data);
    };

    getCountryDetails();
  }, [cca3]);

  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <p>Currency: {Object.values(country.currencies).map(curr => curr.name).join(', ')}</p>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
    </div>
  );
};

export default CountryDetails;
