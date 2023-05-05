import { WeatherAction, WeatherActionTypes, WeatherState } from 'app/providers/types/weather';

const initState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
};

export const weatherReducer = (state: WeatherState = initState, action: WeatherAction): WeatherState => {
  switch (action.type) {
  case WeatherActionTypes.FETCH_WEATHER:
    return { loading: true, error: null, weather: null };

  case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
    return { loading: false, error: null, weather: action.payload };

  case WeatherActionTypes.FETCH_WEATHER_ERROR:
    return { loading: false, error: action.payload, weather: null };

  default:
    return state;
  }
};
