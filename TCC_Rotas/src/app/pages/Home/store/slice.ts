import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LatLng } from "react-native-maps";
import initialState from "./initialState";
import ETransportationTypes from "../../../../business/enum/TransportationType";
import { ISelectedMarkerProps } from "./interfaces/ITrackerProps";
import { IUserAddedMarker } from "../../../../business/interfaces/IUserAddedMarker";

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    setSelectedTransportationType: (
      state,
      action: PayloadAction<ETransportationTypes>,
    ) => {
      state.transportationType = action.payload;
    },
    setDestination: (state, action: PayloadAction<LatLng | undefined>) => {
      state.destination = action.payload;
      state.origin = state.userLocation;
    },
    setSelectedMarker: (state, action: PayloadAction<ISelectedMarkerProps>) => {
      state.selectedMarker = action.payload;
    },
    setMarker: (state, action: PayloadAction<LatLng | undefined>) => {
      state.marker = action.payload;
    },
    setUserLocation: (state, action: PayloadAction<LatLng | undefined>) => {
      state.userLocation = action.payload;
    },
    setOrigin: (state, action: PayloadAction<LatLng | undefined>) => {
      state.origin = action.payload;
    },
    setIsAddingMarker: (state, action: PayloadAction<boolean>) => {
      state.isAddingMarker = action.payload;
    },
    setUserAddedMarker: (state, action: PayloadAction<IUserAddedMarker>) => {
      state.userAddedMarkers.push(action.payload);
      state.isAddingMarker = false;
    },
    addMarkerImage: (
      state,
      action: PayloadAction<{
        uri: string;
        selectedMarker: ISelectedMarkerProps;
      }>,
    ) => {
      state.userAddedMarkers.map((marker) => {
        const { uri, selectedMarker } = action.payload;
        if (
          marker.latitude === selectedMarker.coordinate?.latitude &&
          marker.longitude === selectedMarker.coordinate.longitude
        ) {
          marker.image = uri;
        }

        return marker;
      });
    },
  },
});

export default trackerSlice;
