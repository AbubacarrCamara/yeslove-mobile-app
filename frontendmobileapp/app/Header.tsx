import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import styles from "../Styles/component-styles/HeaderStyles"

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Yeslove!</Text>
      <FontAwesome5 onClick={() => {throw Error("Not Implemented")}} style={styles.profile} size={24} name="user-alt" />
    </View>
  );
}


