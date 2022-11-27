import { GestureResponderEvent, TouchableOpacity } from "react-native";
import React from "react";

import AddImage from "../../../../../../assets/icons/buttons/add_image.svg";

import styles from "./styles";

interface ILoadImage {
  onPress: (event: GestureResponderEvent) => void;
}

const LoadImage: React.FC<ILoadImage> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AddImage width={40} height={40} fill="black" />
    </TouchableOpacity>
  );
};

export default LoadImage;
