// todo тип получаемой погоды
export interface Weather {
  id: number;
  temp: number;
  cloudy: boolean;
}

export interface WeatherState {
  weather: Weather;
  loading: boolean;
  error: null | string;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccess {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: Weather;
}

interface FetchWeatherError {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: string;
}
export type WeatherAction = FetchWeatherAction | FetchWeatherSuccess | FetchWeatherError;
