import * as Location from "expo-location";
export default async function getLocationData(defaultLocation) {
  const { granted } = await Location.requestForegroundPermissionsAsync();
  if (!granted) {
    console.log("오류");
  }
  const {
    coords: { latitude, longitude },
  } = await Location.getCurrentPositionAsync({ accuracy: 5 });
  const locationData = await Location.reverseGeocodeAsync(
    {
      latitude,
      longitude,
    },
    { useGoogleMaps: false }
  );
  if (defaultLocation) {
    let tmp = defaultLocation.split(" ");

    return [tmp[0] + tmp[1], defaultLocation];
  } else {
    return [
      locationData[0].region.concat(locationData[0].district),
      locationData[0].region.concat(" " + locationData[0].district),
    ];
  }
}
