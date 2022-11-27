import { StyleSheet } from "react-native";
import theme from "../../../../theme/default";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: theme.primary,
    padding: 12,
    borderRadius: 100,
    top: 20,
  },
  add: {
    backgroundColor: theme.primary,
  },
  stop: { backgroundColor: theme.red },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
