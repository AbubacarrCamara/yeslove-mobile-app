import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import FooterButton from './FooterButton';
import { Tab } from '../store/navigationSlice';




const Footer =() => {
  return (
    <View style={styles.footer}>
      <FooterButton tab={Tab.HOME} icon='house' title='Home'></FooterButton>
      <FooterButton tab={Tab.GET_HELP} icon='hand-holding-heart' title='Get help'></FooterButton>
      <FooterButton tab={Tab.EVENTS} icon='martini-glass-citrus' title='Events'></FooterButton>
      <FooterButton tab={Tab.PROFILE} icon='circle-user' title='Profile'></FooterButton>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingLeft: 20, 
    paddingTop: 5,
    marginTop: 0,
    justifyContent: 'space-between', 
  }
});

export default Footer