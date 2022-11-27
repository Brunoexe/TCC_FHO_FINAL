import { View } from "react-native";
import React from "react";

import BikeIcon from "../../../../assets/icons/transportation/bike.svg";
import CarIcon from "../../../../assets/icons/transportation/car.svg";
import WalkIcon from "../../../../assets/icons/transportation/walk.svg";
import styles from "./styles";
import { ICON_WIDTH } from "../../../../assets/constants";
import theme from "../../../../theme/default";
import ETransportationTypes from "../../../../../business/enum/TransportationType";
import useAppSelector from "../../../../hooks/useAppSelector";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import trackerSlice from "../../store/slice";

const iconList = [
  { id: ETransportationTypes.WALKING, icon: WalkIcon },
  { id: ETransportationTypes.DRIVING, icon: CarIcon },
  { id: ETransportationTypes.BICYCLING, icon: BikeIcon },
];

const Transportation = () => {
  const { transportationType } = useAppSelector((stores) => stores.tracker);
  const dispatch = useAppDispatch();

  const icons = iconList.map((i) => (
    <View style={styles.iconContainer} key={i.id}>
      {i.icon({
        width: ICON_WIDTH,
        height: ICON_WIDTH,
        fill: transportationType === i.id ? theme.text : theme.inactiveText,
        onPress() {
          dispatch(trackerSlice.actions.setSelectedTransportationType(i.id));
        },
      })}
    </View>
  ));

  return <View style={styles.container}>{icons}</View>;
};

export default Transportation;
