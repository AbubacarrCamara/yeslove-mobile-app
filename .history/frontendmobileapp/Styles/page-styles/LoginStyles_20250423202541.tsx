import { StyleSheet  } from "react-native";
import theme from "../Variables"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 480,
    backgroundColor: theme.colors.primaryBlue,
  },
  innerContainer: {
    width: theme.spacing.postWidth,
    height: 400,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles
