import { View } from "react-native";
import React from "react";
import { MapEvent, Marker } from "react-native-maps";
import theme from "../../../../../../theme/default";
import DEFAULT_MARKERS from "../../../../../../assets/default_markers";

interface IDefaultMarkersProps {
  onPress: (e: MapEvent, image?: string) => Promise<void>;
}

const DefaultMarkers = ({ onPress }: IDefaultMarkersProps) => {
  const markers = DEFAULT_MARKERS.map((i) => (
    <Marker
      coordinate={i}
      key={i.latitude}
      onPress={(e) => onPress(e, i.image)}
      focusable={false}
      pinColor={theme.defaultMarkerColor}
    />
  ));
  return <View>{markers}</View>;
};

export default DefaultMarkers;
