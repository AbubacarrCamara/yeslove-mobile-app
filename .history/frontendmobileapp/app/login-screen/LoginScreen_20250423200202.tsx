import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { logInAction } from '../store/authSlice';
import { useAppDispatch } from '../store/hooks';
import styles from "../../Styles/page-styles/LoginStyles"



const LoginScreen = () => {
const dispatch = useAppDispatch();
const [password, setPassword] = useState("");
const [username, setUsername] = useState("")

const handleLogin = () => {
  testLogin(username, password)
}

const handlePasswordChange = (input: React.SetStateAction<string>) => {
  setPassword(input)
}

const handleUsernameChange = (input: React.SetStateAction<string>) => {
  setUsername(input)
}

const testLogin = (username: string, password: string) => {
  dispatch(logInAction({username, password}))
};

axios.defaults.baseURL = "http://localhost:5000";

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput onChangeText={handleUsernameChange} value={username} style={styles.input} placeholder="Enter username" />

      <Text style={styles.label}>Password</Text>
      <TextInput onChangeText={handlePasswordChange} value={password} style={styles.input} placeholder="Enter password" secureTextEntry={true} />
    
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}


export default LoginScreen