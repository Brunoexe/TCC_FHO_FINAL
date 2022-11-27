import { PermissionsAndroid, Platform } from "react-native";

const checkPermission = async () => {
  if (Platform.OS === "android") {
    const permission = await PermissionsAndroid.check(
      "android.permission.ACCESS_FINE_LOCATION",
    );
    if (!permission) {
      const permissionResult = await PermissionsAndroid.request(
        "android.permission.ACCESS_FINE_LOCATION",
      );
      if (permissionResult !== "granted") {
        return false;
      }
    }
    return true;
  }
};

export default checkPermission;
