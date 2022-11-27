import ETransportationTypes from "../../../../business/enum/TransportationType";
import { ITrackerProps } from "./interfaces/ITrackerProps";

const initialState: ITrackerProps = {
  userLocation: undefined,
  selectedMarker: {
    address: "",
    isUserCreated: false,
    coordinate: undefined,
    image: undefined,
  },
  transportationType: ETransportationTypes.DRIVING,
  userAddedMarkers: [],
  isAddingMarker: false,
};

export default initialState;
