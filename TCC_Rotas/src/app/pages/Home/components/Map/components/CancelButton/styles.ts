import { StyleSheet } from "react-native";
import theme from "../../../../../../theme/default";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: theme.text,
  },
});

export default styles;
