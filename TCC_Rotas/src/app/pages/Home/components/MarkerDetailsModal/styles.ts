import { StyleSheet } from "react-native";
import { SCREEN } from "../../../../assets/constants";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  modalContentContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    height: SCREEN.height * 0.5,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  modalHeaderContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
});

export default styles;
