import React from "react";
import {  TouchableOpacity, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeTabAction, Tab } from "../store/navigationSlice";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "../../Styles/component-styles/FooterStyles"

interface Props {
  tab: Tab;
  title: string;
  icon: string;
  clicked?: () => void;
}

const FooterButton = (props: Props) => {
  const dispatch = useAppDispatch();
  const currentActiveTab = useAppSelector(
    (state) => state.navigation.currentTab
  );

  const handlePress = () => {
    dispatch(changeTabAction(props.tab));
    props.clicked?.();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
        <FontAwesome6 style={[styles.icon, currentActiveTab == props.tab && styles.activeIcon]} name={props.icon}></FontAwesome6>
        <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};


export default FooterButton;
