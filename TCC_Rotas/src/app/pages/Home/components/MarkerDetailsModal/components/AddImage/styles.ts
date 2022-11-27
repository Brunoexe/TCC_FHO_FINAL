import { StyleSheet } from "react-native";
import theme from "../../../../../../theme/default";

const styles = StyleSheet.create({
  addImageContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  addImageButton: {
    alignItems: "center",
    backgroundColor: theme.grey.light,
    padding: 20,
    borderRadius: 20,
  },
  icon: {
    marginTop: 20,
  },
});

export default styles;
