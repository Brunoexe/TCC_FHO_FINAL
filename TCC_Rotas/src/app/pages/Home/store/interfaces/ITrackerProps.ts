import { LatLng } from "react-native-maps";
import ETransportationTypes from "../../../../../business/enum/TransportationType";
import { IUserAddedMarker } from "../../../../../business/interfaces/IUserAddedMarker";

export interface ISelectedMarkerProps {
  address: string;
  isUserCreated: boolean;
  coordinate?: LatLng;
  image?: string;
}
export interface ITrackerProps {
  userLocation: LatLng | undefined;
  selectedMarker: ISelectedMarkerProps;
  transportationType: ETransportationTypes;
  isAddingMarker: boolean;
  userAddedMarkers: IUserAddedMarker[];
  destination?: LatLng;
  origin?: LatLng;
  marker?: LatLng;
}
