import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Yeslove!</Text>
      <FontAwesome5 onClick={() => {throw Error("Not Implemented")}} style={styles.profile} size={24} name="user-alt" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingLeft: 20, 
    paddingTop: 5,
    marginTop: 0,
    justifyContent: 'space-between', 
  },
  title: {
    color: '#2d5be3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    marginRight: 15,
  }
});


