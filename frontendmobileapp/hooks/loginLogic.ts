import { useState } from 'react';
import { useAppDispatch } from '../app/store/hooks';
import { logInAction } from '../app/store/authSlice';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (input: string) => setUsername(input);
  const handlePasswordChange = (input: string) => setPassword(input);

  const handleLogin = () => {
    dispatch(logInAction({ username, password }));
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
  };
};
