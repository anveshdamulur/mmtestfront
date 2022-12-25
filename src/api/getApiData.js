import axios from 'axios';
const GEO_API = process.env.REACT_APP_RAPID_API;
const getApiData = async () => {
  const options = {
    method: 'GET',
    url: GEO_API,
    headers: {
      'X-RapidAPI-Key': '981d735acamsh5536aa1deb95991p19c190jsn32bee44da6c9',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };
  try {
    const apiData = await axios.request(options);
    return apiData;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

export default getApiData;
