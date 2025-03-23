import React, { useState } from "react"
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

/*components */
import ProfileHeader from "../../components/profile-components/ProfileHeader";
import ProfileNavBar from "../../components/profile-components/ProfileNavBar";
import ProfileContent from "../../components/profile-components/ProfileContent";
import styles from "../../Styles/ProfileStyles";



export default function ProfilePage() {
const [activeTab, setActiveTab] = useState("Timeline");
const [activeAboutTab, setActiveAboutTab] = useState("View");



    return (
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
        <ProfileHeader />
        <ProfileNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProfileContent activeTab={activeTab} activeAboutTab={activeAboutTab} setActiveAboutTab={setActiveAboutTab} />
      </ScrollView>
    );
  }


