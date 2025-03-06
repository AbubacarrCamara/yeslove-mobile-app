import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from "react-redux"; 
import { setName } from "../store/userSlice"



export default function HomeScreen() {
const router = useRouter()
const dispatch = useDispatch();
const name = useSelector((state) => state.user.name)

const handleChangeName = () => {
  dispatch(setName("Test user"))
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page {name}!</Text>
      <TouchableOpacity onPress={handleChangeName}>
        <Text>change name</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: "center",
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
