import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

interface ISetDestinationButton {
  setDestination(): void;
}

const SetDestinationButton = ({ setDestination }: ISetDestinationButton) => {
  return (
    <TouchableOpacity style={styles.container} onPress={setDestination}>
      <Text style={styles.text}>Definir destino</Text>
    </TouchableOpacity>
  );
};

export default SetDestinationButton;
