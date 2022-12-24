import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/user';

const signup = (username, email, password) => {
  return axios.post(
    BASE_URL + '/signup',
    { username, email, password },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    },
  );
};

const login = (username, password) => {
  return axios
    .post(BASE_URL + '/signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.jwtAccessToken) {
        localStorage.setItem(
          'token',
          JSON.stringify(response.data.jwtAccessToken),
        );
        localStorage.setItem('user', JSON.stringify(username));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
