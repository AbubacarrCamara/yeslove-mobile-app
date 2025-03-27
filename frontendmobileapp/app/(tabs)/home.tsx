import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { setName } from "../store/userSlice"
import { useSelector } from 'react-redux';
import { State } from '../store/store';



export default function HomeScreen() {
const name = useSelector((state: State) => state.user.name);


console.log("Current name from store:", name); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page {name}!</Text>
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
