import React, { useEffect, useState } from 'react';
import getApiData from '../api/getApiData';
import AuthController from '../controllers/auth.controller';
import Cities from './Cities';
import Form from 'react-bootstrap/Form';
const Welcome = () => {
  const [cityData, setCityData] = useState([]);
  const [searchIp, setSearchIp] = useState('');
  const user = AuthController.getCurrentUser();

  const fetchApi = async () => {
    const res = await getApiData();
    setCityData(await res.data.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <h1>Welcome to home {user}</h1>
      <Form.Label htmlFor="inputPassword5">Search</Form.Label>
      <Form.Control
        type="text"
        id="search"
        placeholder="filter by country"
        aria-describedby="search"
        value={searchIp}
        onChange={(e) => setSearchIp(e.target.value)}
      />
      {cityData
        // eslint-disable-next-line array-callback-return
        .filter((val) => {
          if (!searchIp) {
            return val;
          } else if (
            val.country.trim().toLowerCase().includes(searchIp.toLowerCase())
          ) {
            return val;
          }
        })
        .map((city, id) => (
          <div key={id}>
            <Cities data={city} />
          </div>
        ))}
    </div>
  );
};

export default Welcome;
