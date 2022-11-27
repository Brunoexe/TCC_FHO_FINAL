import { StyleSheet } from "react-native";
import { SCREEN } from "../../../../assets/constants";

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  callout: {
    padding: 5,
  },
  calloutText: {
    maxWidth: SCREEN.width * 0.5,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
