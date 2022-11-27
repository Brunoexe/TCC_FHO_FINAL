import React, { forwardRef, useLayoutEffect } from "react";
import Geolocation from "react-native-geolocation-service";
import MapView, {
  EventUserLocation,
  MapEvent,
  Marker,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { IModalRefProps } from "../..";
import getAddress from "../../../../../business/services/getAddress";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";
import theme from "../../../../theme/default";
import checkPermission from "../../../../utils/checkPermission";
import {
  API_KEY,
  LATITUDE_DELTA,
  LAT_DELTA_MAX_LIMIT,
  LONGITUDE_DELTA,
  LONG_DELTA_MAX_LIMIT,
  MAP_ANIMATION_LONGITUDE_DISPLACEMENT,
} from "../../../../assets/constants";
import trackerSlice from "../../store/slice";
import DefaultMarkers from "./components/DefaultMarkers";
import styles from "./styles";
import UserAddedMarkers from "./components/UserAddedMarkers";

interface IMapProps {
  modalRef: React.RefObject<IModalRefProps>;
}

const Map = ({ modalRef }: IMapProps, ref: any) => {
  const {
    destination,
    transportationType,
    selectedMarker,
    marker,
    userLocation,
    origin,
    isAddingMarker,
  } = useAppSelector((stores) => stores.tracker);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    (async () => {
      if (await checkPermission()) {
        Geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            dispatch(trackerSlice.actions.setOrigin({ latitude, longitude }));
          },
          (err) => {
            console.log(err);
          },
          { enableHighAccuracy: true, timeout: 50000, maximumAge: 500000 },
        );
      }
    })();
  }, [dispatch]);

  const handleOnPressDefaultMarker = async (e: MapEvent, image?: string) => {
    const latLng = e.nativeEvent.coordinate;
    const address = await getAddress(latLng.latitude, latLng.longitude);

    // eslint-disable-next-line react/destructuring-assignment
    ref.current?.animateToRegion(
      {
        latitude: latLng.latitude - MAP_ANIMATION_LONGITUDE_DISPLACEMENT,
        longitude: latLng.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      250,
    );

    dispatch(
      trackerSlice.actions.setSelectedMarker({
        address,
        image,
        coordinate: latLng,
        isUserCreated: false,
      }),
    );

    modalRef.current?.setVisible(true);
  };

  const handleOnPressUserMarker = async (e: MapEvent, image?: string) => {
    const latLng = e.nativeEvent.coordinate;
    const address = await getAddress(latLng.latitude, latLng.longitude);

    // eslint-disable-next-line react/destructuring-assignment
    ref.current?.animateToRegion(
      {
        latitude: latLng.latitude - MAP_ANIMATION_LONGITUDE_DISPLACEMENT,
        longitude: latLng.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      250,
    );

    dispatch(
      trackerSlice.actions.setSelectedMarker({
        address,
        image,
        coordinate: latLng,
        isUserCreated: true,
      }),
    );

    modalRef.current?.setVisible(true);
  };

  const handleOnPress = async (e: MapEvent, image?: string) => {
    const latLng = e.nativeEvent.coordinate;
    const address = await getAddress(latLng.latitude, latLng.longitude);

    if (isAddingMarker) {
      dispatch(
        trackerSlice.actions.setUserAddedMarker({
          latitude: latLng.latitude,
          longitude: latLng.longitude,
        }),
      );
    }

    if (!isAddingMarker) {
      // eslint-disable-next-line react/destructuring-assignment
      ref.current?.animateToRegion(
        {
          latitude: latLng.latitude - MAP_ANIMATION_LONGITUDE_DISPLACEMENT,
          longitude: latLng.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        250,
      );

      if (!image) {
        // If there is a image it is a default marker
        dispatch(trackerSlice.actions.setMarker(latLng));
      }

      dispatch(
        trackerSlice.actions.setSelectedMarker({
          address,
          image,
          coordinate: latLng,
          isUserCreated: false,
        }),
      );

      modalRef.current?.setVisible(true);
    }
  };

  const handleOnUserLocationChange = ({
    nativeEvent: {
      coordinate: { latitude, longitude },
    },
  }: EventUserLocation) => {
    dispatch(trackerSlice.actions.setUserLocation({ latitude, longitude }));

    if (destination) {
      const latitudeDelta = Math.abs(
        Math.abs(destination.latitude) - Math.abs(latitude),
      );
      const longitudeDelta = Math.abs(
        Math.abs(destination.longitude) - Math.abs(longitude),
      );

      if (
        latitudeDelta < LAT_DELTA_MAX_LIMIT &&
        longitudeDelta < LONG_DELTA_MAX_LIMIT
      ) {
        dispatch(trackerSlice.actions.setDestination(undefined));
        dispatch(trackerSlice.actions.setMarker(undefined));
      }
    }
  };

  const handleOnReady = () => {
    if (selectedMarker && selectedMarker.coordinate) {
      // eslint-disable-next-line react/destructuring-assignment
      ref.current?.fitToCoordinates([selectedMarker.coordinate, userLocation], {
        animated: true,
        edgePadding: { top: 50, bottom: 150, left: 50, right: 50 },
      });
    }
  };

  return origin ? (
    <MapView
      style={styles.map}
      ref={ref}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      zoomEnabled
      loadingIndicatorColor={theme.primary}
      showsUserLocation
      loadingEnabled
      onPress={handleOnPress}
      onUserLocationChange={handleOnUserLocationChange}
    >
      {marker && (
        <Marker coordinate={marker} onPress={handleOnPress} focusable={false} />
      )}

      <MapViewDirections
        origin={{
          latitude: origin.latitude,
          longitude: origin.longitude,
        }}
        destination={destination}
        apikey={API_KEY}
        strokeWidth={5}
        strokeColor={theme.primary}
        mode={transportationType}
        onReady={handleOnReady}
        resetOnChange
      />

      <DefaultMarkers onPress={handleOnPressDefaultMarker} />
      <UserAddedMarkers onPress={handleOnPressUserMarker} />
    </MapView>
  ) : null;
};

export default forwardRef(Map);
