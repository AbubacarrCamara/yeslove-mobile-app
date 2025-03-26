import React from 'react'
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "../../Styles/ProfileStyles";

const navBarItems = ["Timeline", "About", "Videos", "Notifications", "Photos", "Settings", "Messages", "Invitations"]

const ProfileNavBar = ({ activeTab, setActiveTab }) => {
    return (
        <View style={styles.navBarContainer}>
          <View style={styles.navBar}>
            {navBarItems.map((tab) => (
              <TouchableOpacity key={tab} style={[styles.navItem, activeTab === tab && styles.activeNavItem]} onPress={() => setActiveTab(tab)}>
                <Text style={[styles.navText, activeTab === tab && styles.activeNavText]}>{tab}</Text>
                {activeTab === tab && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
}

export default ProfileNavBar
