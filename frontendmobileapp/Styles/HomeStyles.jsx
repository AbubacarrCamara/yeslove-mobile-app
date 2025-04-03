import { StyleSheet } from "react-native"
import { vw } from "@/ts/viewport-units"

const styles = StyleSheet.create({

    /* Header */

    container: {
        flex: 1,
        marginTop: 10,
    },

    contentContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
      },

    feedHeaderContainer: {
        width: 380,
        height: 115,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E49114",
    },

    contentRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        borderLeftWidth: 5,
        borderLeftColor: "#fff",
        paddingHorizontal: 10
    },

    imageBackground: {
        position: "absolute",  
        top: 0,
        left: 0,
        right: 0,
        bottom: 0, 
        width: "100%",  
        height: "100%", 
    },

    feedHeaderText: {
        fontSize: 23,
        color: "#fff",
        fontWeight: "bold",
    },

    feedHeaderCaption: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "600",
    },

    /*User post box*/

    /* decor Box */

    decorBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: "100%",
        top: 0, 
        borderBottomWidth: 3,
        borderBottomColor: "#2d5be3",
        opacity: 0.7,
    },

    userPostBoxContainer: {
        marginTop: 30,
        width: 380,
        borderRadius: 10,
        height: 265,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    userPostBox: {
        padding: 10,
        width: "100%",
        height: 100,
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 10,
        marginBottom: 15
    },

    /*User post box button*/

    postButton: {
       width: 80,
       height: 30,
       backgroundColor: "#2d5be3",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       paddingVertical: 20,
       borderRadius: 5,
       opacity: 0.95
    },

    postButtonText: {
      color: "#fff"
    },

    /* post icons / */

    postIcons: {
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        opacity: 0.8,
        marginBottom: 15
    },

    /* Home navbar styles*/
    
    homeNavBarContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20
    },
    homeNavBar: {
      flexDirection: "row",
      flexWrap: "wrap", 
      width: vw(90), 
      justifyContent: "center",
      backgroundColor: "#fff",
      paddingVertical: 3,
      borderRadius: 10, 
      elevation: 3, 
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    homeItem: {
      width: "50%",
      paddingVertical: 15,
      alignItems: "center",
    },
    activeHomeItem: {
      position: "relative",
    },
    activeHomeNavText: {
      fontWeight: "bold",
      color: "#000",
    },
    navText: {
        fontSize: 16,
        color: "#666",
        fontWeight: "500",
      },
      activeIndicator: {
        width: 40,
        height: 3,
        backgroundColor: "#2d5be3", 
        position: "absolute",
        bottom: -2, 
      },
    
      /* */

  allUpdatesContainer: {
    marginTop: 20,
    width: 380,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  profileName: {
    marginBottom: 7,
    fontWeight: "600",
    fontSize: 16,
  },

  postContent: {
    color: "#555",
    fontSize: 15,
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 60, 
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },

  profileImageContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "row"
  },

  profileInfoContainer: {
    display: "flex",
    marginStart: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    flexDirection: "column"
  },

  timePosted: {
    color: "#888"
  }

})

export default styles