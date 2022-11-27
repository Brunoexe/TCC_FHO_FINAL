import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import useAppSelector from "../../../../hooks/useAppSelector";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import trackerSlice from "../../store/slice";

const AddHomeMarker = () => {
  const isAddingMarker = useAppSelector(
    (stores) => stores.tracker.isAddingMarker,
  );
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    dispatch(trackerSlice.actions.setIsAddingMarker(!isAddingMarker));
  };

  return (
    <TouchableOpacity
      style={[styles.container, isAddingMarker ? styles.stop : styles.add]}
      onPress={handleOnPress}
    >
      <Text style={styles.text}>
        {isAddingMarker ? "Cancelar adição" : "Adicionar marcador"}
      </Text>
    </TouchableOpacity>
  );
};

export default AddHomeMarker;
