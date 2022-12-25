import axios from 'axios';
import authHeader from './auth.header';

const API_URL = process.env.REACT_APP_BASE_URL;

const getAllPrivatePosts = () => {
  return axios.get(API_URL + '/test', { headers: authHeader() });
};
const postService = {
  getAllPrivatePosts,
};

export default postService;
