import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ADD_IMAGE_ICON_WIDTH } from "../../../../../../assets/constants";
import theme from "../../../../../../theme/default";
import styles from "./styles";
import openImagePicker from "../../../Map/utils/openImagePicker";
import AddImageIcon from "../../../../../../assets/icons/buttons/add_image.svg";

interface IAddImage {
  handleAddImage: (uri: string) => void;
}

const AddImage = ({ handleAddImage }: IAddImage) => {
  const handleOnAddImage = async () => {
    const res = await openImagePicker();
    const image = res.assets?.[0].uri;
    if (image) {
      handleAddImage(image);
    }
  };
  return (
    <View style={styles.addImageContainer}>
      <TouchableOpacity
        style={styles.addImageButton}
        onPress={handleOnAddImage}
      >
        <Text>Clique para adicionar uma imagem</Text>
        <AddImageIcon
          width={ADD_IMAGE_ICON_WIDTH}
          height={ADD_IMAGE_ICON_WIDTH}
          fill={theme.add_image_icon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddImage;
