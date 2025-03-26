import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "../../Styles/GetHelpStyles";
import Entypo from '@expo/vector-icons/Entypo';

const GetHelpHeader = () => {
  return (
    <View>
        <View style={styles.ourProfessionalsContainer}>
        <ImageBackground source={{ uri: "https://yeslove.co.uk/wp-content/uploads/2021/04/shape_7.png" }} style={styles.backgroundImage}>

        <View style={styles.contentRow}>
        <Entypo name="megaphone" size={48} color="white" style={styles.icon}/>
        
        <View style={styles.textContainer}>
          <Text style={styles.ourProfessionalsText}>Our Professionals</Text>
          <Text style={styles.ourProfessionalsCaption}>Browse the list of our professionals</Text>
        </View>
        </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default GetHelpHeader
