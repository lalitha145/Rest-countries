// src/components/CountryList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../Services/CountryService';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    getCountries();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Countries</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
      }}>
        {filteredCountries.map(country => (
          <Link to={`/country/${country.cca3}`} key={country.cca3} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              textAlign: 'center',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}>
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                style={{ width: '100%', borderRadius: '4px', maxHeight: '100px', objectFit: 'cover' }}
              />
              <p>{country.name.common}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
