import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { CLOSE_MODAL_ICON_WIDTH } from "../../../../../../assets/constants";
import CloseIcon from "../../../../../../assets/icons/buttons/close.svg";

interface IHeaderProps {
  data: {
    address: string;
  };
  handleOnClose(): void;
}

const Header = ({ data: { address }, handleOnClose }: IHeaderProps) => {
  return (
    <>
      <Text style={styles.title}>Informações</Text>
      <CloseIcon
        width={CLOSE_MODAL_ICON_WIDTH}
        height={CLOSE_MODAL_ICON_WIDTH}
        fill="black"
        style={styles.closeIcon}
        onPress={handleOnClose}
      />
      <View>
        <Text style={styles.bold} numberOfLines={2}>
          Endereço: <Text style={styles.text}>{address}</Text>
        </Text>
      </View>
    </>
  );
};

export default Header;
