import { useEffect, useState } from 'react';

interface Geolocation {
  lat: number;
  lon: number;
}

function useGeolocation() {
  const [geolocation, setGeolocation] = useState<Geolocation | undefined>();

  // todo заменить alerts на функционал (вывод уведомлений и поиск погоды по новой геолокации)
  const updateGeolocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeolocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      }, () => {
        // eslint-disable-next-line no-alert
        alert('Вы запретили доступ к вашей геолокации');
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Не удалось получить ваше местоположение');
    }
  };

  useEffect(() => {
    if (geolocation) {
      // eslint-disable-next-line no-alert
      alert(`Ваши координаты: широта ${geolocation.lat}, долгота ${geolocation.lon}`);
    }
  }, [geolocation]);

  return {
    geolocation,
    updateGeolocation,
  };
}

export default useGeolocation;
