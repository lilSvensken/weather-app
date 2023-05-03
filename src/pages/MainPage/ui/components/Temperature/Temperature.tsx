import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import { MOCK_DATA } from 'pages/MainPage/api/getWeatherApi';
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
