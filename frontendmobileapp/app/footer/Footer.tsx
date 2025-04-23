import React from 'react';
import { View } from 'react-native';
import FooterButton from './FooterButton';
import { Tab } from '../store/navigationSlice';
import styles from "../../Styles/component-styles/FooterStyles"


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


export default Footer