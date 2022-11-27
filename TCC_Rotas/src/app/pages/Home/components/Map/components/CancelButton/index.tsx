import { Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";
import useAppDispatch from "../../../../../../hooks/useAppDispatch";
import trackerSlice from "../../../../store/slice";
import useAppSelector from "../../../../../../hooks/useAppSelector";

const CancelButton = () => {
  const { marker } = useAppSelector((stores) => stores.tracker);
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    dispatch(trackerSlice.actions.setDestination(undefined));
    if (marker) {
      dispatch(trackerSlice.actions.setMarker(undefined));
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.text}>Cancelar</Text>
    </TouchableOpacity>
  );
};

export default CancelButton;
