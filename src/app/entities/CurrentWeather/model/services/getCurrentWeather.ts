import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentWeatherSchema } from 'app/entities/CurrentWeather';
import { currentWeatherActions } from 'app/entities/CurrentWeather/model/slice/currentWeatherSlice';

// todo REMOVE
const HOST = 'https://api.openweathermap.org';
const API_KEY = '08789ab932af5d6de716da1eaa4cfca7';
const CITY = 'Казань';
const LANG = 'ru';
const MY_QUERY = `?q=${CITY}&lang=${LANG}&dt=1682456400&units=metric&appid=${API_KEY}`;

export const fetchGetCurrentWeather = createAsyncThunk<CurrentWeatherSchema>(
  'typePrefix',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${HOST}/data/2.5/weather${MY_QUERY}`);

      if (response.data) {
        thunkAPI.dispatch(currentWeatherActions.setCurrentWeather(response.data));
      }

      return response.data;
    } catch (e) {
      // todo
      // eslint-disable-next-line no-console
      console.error(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
