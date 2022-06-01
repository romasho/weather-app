import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationCoordinates | string>('');

  const onChange = ({ coords }: GeolocationPosition) => {
    const { latitude, longitude } = coords;
    setPosition({ ...coords, latitude, longitude });
  };

  const onError = (errorMes: GeolocationPositionError) => {
    setError(errorMes.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};

export default usePosition;
