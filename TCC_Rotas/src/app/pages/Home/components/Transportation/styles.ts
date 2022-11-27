import { StyleSheet } from "react-native";
import theme from "../../../../theme/default";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    padding: 5,
    flexDirection: "row",
    borderRadius: 100,
  },
  iconContainer: {
    padding: 10,
  },
});

export default styles;
