import React from 'react'
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "../../Styles/ProfileStyles";
import EditableField from "./EditableField";

const aboutItems = ["View", "Edit"]

const AboutSection = ({ activeAboutTab, setActiveAboutTab }) => {
  return (
    <View>
      {/* About Navbar */}
      <View style={styles.aboutNavBarContainer}>
        <View style={styles.aboutNavBar}>
          {aboutItems.map((tab) => (
            <TouchableOpacity key={tab} style={[styles.aboutItem, activeAboutTab === tab && styles.activeAboutItem]} onPress={() => setActiveAboutTab(tab)}>
              <Text style={[styles.navText, activeAboutTab === tab && styles.activeAboutNavText]}>{tab}</Text>
              {activeAboutTab === tab && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content */}
      {activeAboutTab === "View" && (
        <View>
          <View style={styles.viewItemContainer}>
           <Text style={styles.viewItemText}>Name</Text>
           <Text style={styles.viewItemInfo}></Text>
         </View>
 
         <View style={styles.viewItemContainer}>
           <Text style={styles.viewItemText}>Email</Text>
           <Text style={styles.viewItemInfo}></Text>
         </View>
 
         <View style={styles.viewItemContainer}>
           <Text style={styles.viewItemText}>Phone</Text>
           <Text style={styles.viewItemInfo}></Text>
         </View>
 
         <View style={styles.viewItemContainer}>
           <Text style={styles.viewItemText}>Address</Text>
           <Text style={styles.viewItemInfo}></Text>
         </View>
 
         <View style={styles.viewItemContainer}>
           <Text style={styles.viewItemText}>Website</Text>
           <Text style={styles.viewItemInfo}></Text>
         </View>
 
         {/* Friends section */}
         <View style={styles.friendsContainer}>
           <View style={styles.friends}>
             <View style={styles.friendsItem}>
               <Text style={styles.activeFriendsText}>
                 My Friends
               </Text>
               <View style={styles.activeIndicator} />
             </View>
 
             {/* Friends */}
             <View style={styles.friend}>
               <Image 
                 source={{ uri: "https://yeslove.co.uk/wp-content/themes/cirkle/assets/img/avatar/bp-avatar.png" }} 
                 style={styles.friendImage} 
               />
               <Text style={styles.friendName}>Friend username</Text>
             </View>
           </View>
         </View>
       </View>
      )}



      {activeAboutTab === "Edit" && (
        <View>
          <EditableField label="Name" />
          <EditableField label="Email" />
        </View>
      )}
    </View>
  )
}

export default AboutSection
