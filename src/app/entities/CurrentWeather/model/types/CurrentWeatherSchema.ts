import { CurrentWeatherModel } from './CurrentWeatherModel';

export interface CurrentWeatherSchema {
  currentWeather: CurrentWeatherModel,
  loading: any,
  error: any,
}
