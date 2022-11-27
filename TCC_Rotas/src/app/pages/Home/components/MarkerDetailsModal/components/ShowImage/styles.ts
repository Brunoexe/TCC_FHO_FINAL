import { StyleSheet } from "react-native";
import { IMAGE_WIDTH } from "../../../../../../assets/constants";

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.5625,
  },
  image: { width: "100%", height: "100%", borderRadius: 10 },
});

export default styles;
