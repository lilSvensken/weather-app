import { Dispatch } from 'redux';
import { WeatherAction, WeatherActionTypes } from 'app/providers/types/weather';
import axios from 'axios';

export const fetchWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER });
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'Казань', lang: 'ru', dt: 1682456400, units: 'metric', appid: '08789ab932af5d6de716da1eaa4cfca7',
        },
      });

      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: error || 'Непредвиденная ошибка',
      });
    }
  };
};
