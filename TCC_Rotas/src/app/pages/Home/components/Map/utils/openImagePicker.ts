import { launchImageLibrary } from "react-native-image-picker";

const openImagePicker = async () => {
  const result = await launchImageLibrary({ mediaType: "photo", quality: 1 });
  return result;
};

export default openImagePicker;
