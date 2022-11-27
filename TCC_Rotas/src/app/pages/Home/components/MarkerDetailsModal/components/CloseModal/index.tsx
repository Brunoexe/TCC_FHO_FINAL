import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React from "react";

interface ICloseModalProps {
  onClose(): void;
}

const CloseModal = ({ onClose }: ICloseModalProps) => {
  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.container} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default CloseModal;
