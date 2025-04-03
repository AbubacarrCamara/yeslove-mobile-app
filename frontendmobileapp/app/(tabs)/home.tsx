import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import UserPostBox from '@/components/home-components/UserPostBox';7
import FeedHeader from "@/components/home-components/FeedHeader";
import styles from "../../Styles/HomeStyles"
import HomeNavBar from '@/components/home-components/HomeNavBar';



export default function HomeScreen() {

  return (
    <ScrollView  contentContainerStyle={styles.contentContainer} style={styles.container}>
      <FeedHeader />
      <UserPostBox />
      <HomeNavBar />
    </ScrollView>
  );
}

