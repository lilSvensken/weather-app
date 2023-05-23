import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentWeatherSchema } from 'app/entities/CurrentWeather';
import { currentWeatherActions } from 'app/entities/CurrentWeather/model/slice/currentWeatherSlice';
import { HTTP_METHOD, makeAxiosRequest } from 'shared/lib/makeRequest';
import { WEATHER_API_ID } from 'shared/consts/localStorageKeys';

// todo REMOVE
const CITY = 'Казань';
const LANG = 'ru';

export const fetchGetCurrentWeather = createAsyncThunk<CurrentWeatherSchema>(
  'weather/getCurrentWeather',
  (_, thunkAPI) => {
    return makeAxiosRequest({
      url: '/data/2.5/weather',
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
      .catch((e) => {
        // todo
        // eslint-disable-next-line no-console
        console.error(e);
        return thunkAPI.rejectWithValue('error');
      });
  },
);
