import { View } from "react-native";
import React from "react";
import styles from "./styles";

interface Props {
  children: React.ReactNode;
}

const AbsoluteContainer = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default AbsoluteContainer;
