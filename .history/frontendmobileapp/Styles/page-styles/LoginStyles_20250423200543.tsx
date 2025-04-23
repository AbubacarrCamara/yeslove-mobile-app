import { StyleSheet  } from "react-native";
import theme from "../Variables"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: 400,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    width: theme.spacing.postWidth,
    height: 400,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 105
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles
