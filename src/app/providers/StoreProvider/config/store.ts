import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { currentWeatherReducer, CurrentWeatherSchema } from 'app/entities/CurrentWeather';

export interface StateSchema {
  currentWeather: CurrentWeatherSchema,
}

export default function createReduxStore(initialState?: StateSchema) {
  const reducer: ReducersMapObject<StateSchema> = {
    currentWeather: currentWeatherReducer,
  };

  return configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
