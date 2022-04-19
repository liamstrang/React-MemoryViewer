import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headline_text: {
    color: "#004ae6",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  header: {
    fontSize: 26,
    color: "#004ae6",
    fontWeight: "bold",
    paddingVertical: 14,
    justifyContent: "center",
    alignSelf: "center",
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "black",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    width: "90%",
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "white",
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
  },
  error: {
    fontSize: 14,
    color: "red",
    paddingHorizontal: 4,
    paddingTop: 4,
    textAlign: "center",
  },
  multipleButtons: {
    flexDirection:"row", 
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default styles;
