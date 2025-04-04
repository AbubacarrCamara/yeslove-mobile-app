import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeTabAction, Tab } from "../store/navigationSlice";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
        <FontAwesome6 name={props.icon}></FontAwesome6>
        <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeIcon: {},
});

export default FooterButton;
