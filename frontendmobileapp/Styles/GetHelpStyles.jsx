import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  ourProfessionalsContainer: {
    width: 360,
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
  },
  ourProfessionalsText: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",   
  },
  ourProfessionalsCaption: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600", 
  },

  /* Search bar */
  searchBarContainer: {
    marginTop: 30,
    width: 360,
    borderRadius: 15,
    height: 85,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBar: {
    width: 340,
    height: 43,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
  },

  /* Professional profiles */
  professionalProfileContainer: {
    marginTop: 30,
    width: 370,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
  },

  professionalProfileName: {
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 18,
  },

  professionalDescription: {
    color: "#555",
    fontSize: 15,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    borderWidth: 5,
    borderColor: "#fff",
    marginBottom: 10,
  },
});

export default styles;
