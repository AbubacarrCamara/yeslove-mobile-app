import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
} from "react-native";
import { ApiApiFactory } from "../../generated-api/api";
import { useFocusEffect } from "@react-navigation/native";

export default function ProfilePage() {
  useFocusEffect(() => {
    ApiApiFactory()
      .getUserProfile("3c99982d-56f4-49e4-901f-0704211be1df")
      .then((response) => {
        console.log(response.data);
      });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Profile Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
