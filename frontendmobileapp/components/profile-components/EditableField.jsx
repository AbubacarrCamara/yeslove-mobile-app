import React, { useState } from 'react'
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "../../Styles/ProfileStyles";


const EditableField = ( { label }) => {
    const [value, setValue] = useState("")
  return (
    <View style={styles.editItemContainer}>
      <Text style={styles.editItemText}>{label}</Text>
      <TextInput style={styles.editItemInfo} value={value} onChangeText={setValue} />
    </View>
  )
}

export default EditableField
