import { StyleSheet } from "react-native";
import theme from "../../../../../../theme/default";
import { SCREEN } from "../../../../../../assets/constants";

const styles = StyleSheet.create({
  callout: {
    padding: 5,
    width: SCREEN.width * 0.5,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.white,
  },
  calloutText: {
    maxWidth: SCREEN.width * 0.5,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
