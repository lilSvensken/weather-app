import { FC, useEffect } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import { MOCK_DATA } from 'pages/MainPage/api/getWeatherApi';
import { fetchWeather } from 'app/providers/store/action-creators/weather';
import { useActions } from 'app/hooks/useActions';
import { useTypedSelector } from 'app/hooks/useTypedSelector';
import cls from './Temperature.module.scss';

interface TemperatureProps {
  className?: string;
}

export const Temperature: FC<TemperatureProps> = (
  {
    className,
  },
) => {
  const weatherMock = MOCK_DATA;
  const { weather, error, loading } = useTypedSelector((state) => state.weather);
  const { fetchWeather } = useActions();

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherIcon = () => {
    const code: string = weatherMock.weather[0].icon;
    return (
      <img
        src={ `icons/weather-animated/${code}.svg` }
        className={ cls.iconWeather }
        alt={ code }
      />
    );
  };

  return (
    <div className={ cn([cls.temperature, className]) }>
      <div className={ cls.iconWrapper }>
        {getWeatherIcon()}
      </div>
      {weather?.id}

      <div className={ cls.mainValue }>
        {`${Math.round(weatherMock.main.temp)}°С`}
      </div>
      <div className={ cls.secondaryValue }>
        {`Ощущается как ${Math.round(weatherMock.main.feels_like)}°С`}
      </div>
      <div className={ cls.weatherType }>
        {weatherMock.weather[0].description}
      </div>
    </div>
  );
};

export default Temperature;
