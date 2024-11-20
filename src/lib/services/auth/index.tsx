import axios from 'axios';
import {
  GetMeResponse,
  loginType,
  registerType,
  responseType,
} from '../../type/auth';

const accessToken = localStorage.getItem('accessToken') || '';

const Request = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});

export default Request;

export const Register = async (args: registerType) => {
  const response = await Request.post<responseType>('/auth/register', args);
  return response.data;
};
export const Login = async (args: loginType) => {
  const response = await axios.post('/auth/login', args);
  return response.data;
};

export const getMe = async () => {
  const response = await Request.get<GetMeResponse>('/auth/getme');
  console.log(response.data);
  return response.data;
};
