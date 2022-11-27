import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";

const ShowImage = ({ image }: { image: string }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ShowImage;
