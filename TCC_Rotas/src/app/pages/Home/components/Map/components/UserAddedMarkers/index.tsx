import { View } from "react-native";
import React from "react";
import { MapEvent, Marker } from "react-native-maps";
import useAppSelector from "../../../../../../hooks/useAppSelector";
import theme from "../../../../../../theme/default";

interface Props {
  onPress: (e: MapEvent, image?: string) => Promise<void>;
}

const UserAddedMarkers = ({ onPress }: Props) => {
  const userAddedMarkers = useAppSelector(
    (stores) => stores.tracker.userAddedMarkers,
  );

  const markers = userAddedMarkers.map((i) => {
    return (
      <Marker
        coordinate={i}
        key={i.latitude}
        onPress={(e) => onPress(e, i.image)}
        focusable={false}
        pinColor={theme.userAddedMarker}
      />
    );
  });
  return <View>{markers}</View>;
};

export default UserAddedMarkers;
