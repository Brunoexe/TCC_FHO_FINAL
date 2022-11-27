import { StyleSheet } from "react-native";
import theme from "../../../../../../theme/default";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    marginTop: 20,
    padding: 15,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    color: theme.text,
  },
});

export default styles;
