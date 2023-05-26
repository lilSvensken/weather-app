import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentWeatherActions,
  CurrentWeatherModel,
  CurrentWeatherSchema,
} from 'app/entities/CurrentWeather';
import { HTTP_METHOD, makeAxiosRequest } from 'shared/lib/makeRequest';
import { WEATHER_API_ID } from 'shared/consts/localStorageKeys';

// todo REMOVE
const CITY = 'Казань';
const LANG = 'ru';

export const fetchGetCurrentWeather = createAsyncThunk<CurrentWeatherSchema>(
  'weather/getCurrentWeather',
  (_, thunkAPI) => {
    return makeAxiosRequest({
      url: '/data/2.5/weather11',
      method: HTTP_METHOD.GET,
      params: {
        q: CITY,
        lang: LANG,
        dt: '1682456400',
        units: 'metric',
        appid: WEATHER_API_ID,
      },
    })
      .then((response) => {
        if (response.data) {
          thunkAPI.dispatch(currentWeatherActions.setCurrentWeather(response.data));
        }
        return response.data;
      })
      .catch((error) => {
        console.log(2, error);
        return thunkAPI.rejectWithValue(error);
      });
  },
);
