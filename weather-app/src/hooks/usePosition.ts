import { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationCoordinates | string>('');

  const onChange = ({ coords }: GeolocationPosition ) => {
      const { latitude, longitude } = coords;
    setPosition({ ...coords, latitude, longitude });
  };

  const onError = (error: GeolocationPositionError ) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Геолокация не поддерживается браузером");
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
