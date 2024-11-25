import Cookies from 'js-cookie';

import axios from 'axios';
import { GetMeResponse } from '../../../pages/auth/_types/get';
import { LoginArgs, LoginResponse } from '../../../pages/auth/_types/login';
import {
  RegisterArgs,
  RegisterResponse,
} from '../../../pages/auth/_types/register';

// const accessToken = localStorage.getItem('accessToken') || '';
const accessToken = Cookies.get('accessToken') || '';

export const Request = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});

export default Request;

export const Register = async (args: RegisterArgs) => {
  const response = await Request.post<RegisterResponse>('/auth/register', args);
  console.log('Registration Successful:', response.data);
  return response.data;
};
export const Login = async (args: LoginArgs) => {
  const response = await Request.post<LoginResponse>('/auth/login', args);

  return response.data;
};
export const getMe = async () => {
  const response = await Request.get<GetMeResponse>('/auth/getme');
  return response.data;
};
