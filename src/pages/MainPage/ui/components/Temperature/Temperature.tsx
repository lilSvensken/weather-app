import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { cn } from 'shared/lib/classNames';
import cls from './Temperature.module.scss';

interface TemperatureProps {
  className?: string;
}

export const Temperature: FC<TemperatureProps> = (
  {
    className,
  },
) => {
  const {
    currentWeather,
    loading,
    error,
  } = useSelector((state: StateSchema) => state.currentWeather);

  const getWeatherIcon = () => {
    const code: string = currentWeather.weather[0].icon;
    return (
      <img
        src={ `icons/weather-animated/${code}.svg` }
        className={ cls.iconWeather }
        alt={ code }
      />
    );
  };

  return (
    <div>
      {
        loading && <div>loading</div>
      }
      {
        error && <div>error</div>
      }
      {
        currentWeather && (
          <div className={ cn([cls.temperature, className]) }>
            <div className={ cls.iconWrapper }>
              {getWeatherIcon()}
            </div>

            <div className={ cls.mainValue }>
              {`${Math.round(currentWeather.main.temp)}°С`}
            </div>
            <div className={ cls.secondaryValue }>
              {`Ощущается как ${Math.round(currentWeather.main.feels_like)}°С`}
            </div>
            <div className={ cls.weatherType }>
              {currentWeather.weather[0].description}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Temperature;
