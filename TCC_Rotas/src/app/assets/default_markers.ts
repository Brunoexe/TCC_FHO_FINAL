import { Image } from "react-native";
import { IDefaultMarkers } from "../../business/interfaces/IDefaultMarkers";
import exampleImage from "./markerImages/example.jpg";

const DEFAULT_MARKERS: IDefaultMarkers[] = [
  {
    latitude: 37.4247309688603,
    longitude: -122.08632599562405,
    image: Image.resolveAssetSource(exampleImage).uri,
  },
  {
    latitude: 37.41869317235676,
    longitude: -122.08048749715091,
    image: Image.resolveAssetSource(exampleImage).uri,
  },
  {
    latitude: 37.41853846246864,
    longitude: -122.08535470068456,
    image: Image.resolveAssetSource(exampleImage).uri,
  },
];

export default DEFAULT_MARKERS;
