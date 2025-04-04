import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Footer from "./footer/Footer";
import Header from "./Header";
import { useAppSelector } from "./store/hooks";
import ProfilePage from "./tabs/profile";
import HomeScreen from "./tabs/home";
import GetHelpPage from "./tabs/gethelp";
import LoginScreen from "./login-screen/LoginScreen";

const App = () => {
  const currentActiveTab = useAppSelector(
    (state) => state.navigation.currentTab
  );
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  return (
    <>
      {!loggedIn && (
        <View style={styles.container}>
          <LoginScreen></LoginScreen>
        </View>
      )}
      {loggedIn && (
        <View style={styles.container}>
          <Header></Header>
          {
            {
              HOME: <HomeScreen></HomeScreen>,
              GET_HELP: <GetHelpPage></GetHelpPage>,
              EVENTS: <Text>Events</Text>,
              PROFILE: <ProfilePage></ProfilePage>,
            }[currentActiveTab]
          }
          <Footer></Footer>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
