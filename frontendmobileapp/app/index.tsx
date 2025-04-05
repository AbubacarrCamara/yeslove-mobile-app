import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import { TOKEN_REFRESH_SERVICE } from "@/ts/token-service";
import { Provider, useDispatch } from "react-redux";
import { setName, setUserId } from "./store/userSlice";
import { AuthApiFactory, ProfileApiFactory } from "@/generated-api";
import store from "./store/store";
import { useAppDispatch } from "./store/hooks";
import { logInAction } from "./store/authSlice";
import App from "./App";

const Login = () => {
  axios.defaults.baseURL = "http://localhost:5000";

  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

export default Login;
