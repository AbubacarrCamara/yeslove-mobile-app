import React from 'react'
import { ScrollView, ImageBackground, StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from "../../Styles/ProfileStyles";
import { useDispatch, useSelector } from "react-redux";
 import { ApiApiFactory } from "../../generated-api/api";
 import { useFocusEffect } from "@react-navigation/native";
 import {setProfileInformation} from "../../app/store/profileSlice";


const ProfileHeader = () => {
  const userId = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.profile.info.username);
  const bio = useSelector((state) => state.profile.info.bio);
  const dispatch = useDispatch();

  useFocusEffect(React.useCallback(() => {
    ApiApiFactory()
      .getUserProfile(userId)
      .then((response) => {
        dispatch(setProfileInformation(response.data));
      });
  }, []));




  return (
    <View>
                <View style={styles.profileImageContainer}>
      <ImageBackground style={styles.profileBackgroundImage} imageStyle={{ borderRadius: 15 }} source={{ uri: "https://yeslove.co.uk/wp-content/themes/cirkle/assets/img/dummy-banner.jpg" }}>
        <View style={styles.overlay}></View>
        <Image style={styles.profileImage} source={{ uri: "https://yeslove.co.uk/wp-content/themes/cirkle/assets/img/avatar/bp-avatar.png" }} />
        <Text style={styles.userName}>{userName}</Text>
        <View style={styles.userStatsContainer}>
          <Text style={styles.userStats}>Posts: <Text style={styles.userStatsNumber}>0</Text></Text>
          <Text style={styles.userStats}>Comments: <Text style={styles.userStatsNumber}>0</Text></Text>
          <Text style={styles.userStats}>Views: <Text style={styles.userStatsNumber}>0</Text></Text>
        </View>
      </ImageBackground>
    </View>
    
    
    {/* User bio */}
    
            <View style={styles.userBioContainer}>
              <Text style={styles.userBioText}>{bio}</Text></View>
            </View>
    
  )
}

export default ProfileHeader
