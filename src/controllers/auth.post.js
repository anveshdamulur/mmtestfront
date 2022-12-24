import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:3001/user/';

const getAllPrivatePosts = () => {
  return axios.get(API_URL + '/test', { headers: authHeader() });
};
const postService = {
  getAllPrivatePosts,
};

export default postService;
