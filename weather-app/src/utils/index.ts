import { tokenMapbox } from "../constants";

export const Geocoding = (longitude: number, latitude: number) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?limit=1&types=place&access_token=${tokenMapbox}`;

export function getTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return tomorrow;
}

export function getToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate() );

  return today;
}
