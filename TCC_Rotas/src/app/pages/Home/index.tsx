import { ModalProps, View } from "react-native";
import React, { useRef } from "react";

import MapView, { LatLng } from "react-native-maps";
import styles from "./styles";
import Transportation from "./components/Transportation";
import Map from "./components/Map";
import MarkerDetailsModal from "./components/MarkerDetailsModal";
import CancelButton from "./components/Map/components/CancelButton";
import useAppSelector from "../../hooks/useAppSelector";
import AddHomeMarker from "./components/AddHomeMarker";
import AbsoluteContainer from "./components/AbsoluteContainer";

export interface IMarkerInfoProps {
  address: string;
  distance: string;
  origin?: LatLng;
  coordinate?: LatLng;
  image?: string;
}

export interface IModalRefProps extends ModalProps {
  setVisible(visible: boolean): void;
}

const Home = () => {
  const { destination } = useAppSelector((stores) => stores.tracker);

  const modalRef = useRef<IModalRefProps>(null);
  const mapRef = useRef<MapView | null>(null);

  return (
    <View style={styles.container}>
      <MarkerDetailsModal ref={modalRef} />
      <Map modalRef={modalRef} ref={mapRef} />

      <AddHomeMarker />
      <AbsoluteContainer>
        {destination && <CancelButton />}
        <Transportation />
      </AbsoluteContainer>
    </View>
  );
};

export default Home;
