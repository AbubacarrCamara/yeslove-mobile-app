import React from 'react'
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "../../Styles/page-styles/ProfileStyles";
import AboutSection from "./AboutSection"
import { useAppSelector } from '@/app/store/hooks';

const ProfileContent = () => {
  let activeTab = useAppSelector(state => state.profile.view.activeTab);
  return (
    <View style={styles.content}>
      {activeTab === "Timeline" && <Text>Timeline Page Content</Text>}
      {activeTab === "About" && <AboutSection/>}
      {activeTab === "Videos" && <Text>Videos Page Content</Text>}
      {activeTab === "Notifications" && <Text>Notifications Page Content</Text>}
      {activeTab === "Photos" && <Text>Photos Page Content</Text>}
      {activeTab === "Settings" && <Text>Settings Page Content</Text>}
      {activeTab === "Messages" && <Text>Messages Page Content</Text>}
      {activeTab === "Invitations" && <Text>Invitations Page Content</Text>}
    </View>
  )
}

export default ProfileContent
