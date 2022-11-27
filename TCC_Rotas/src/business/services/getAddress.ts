import { Client } from "@googlemaps/google-maps-services-js";
import { API_KEY } from "../../app/assets/constants";

const getAddress = async (latitude: number, longitude: number) => {
  const client = new Client();

  try {
    const result = await client.reverseGeocode({
      params: { key: API_KEY, latlng: { latitude, longitude } },
    });

    return result.data.results[0].formatted_address;
  } catch (error: any) {
    console.log(error.response);
    return "Error loading address";
  }
};

export default getAddress;
