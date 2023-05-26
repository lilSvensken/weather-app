import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentWeatherSchema, CurrentWeatherModel } from 'app/entities/CurrentWeather';
import { fetchGetCurrentWeather } from '../services/getCurrentWeather';

const initialState: CurrentWeatherSchema = {
  currentWeather: undefined,
  loading: false,
  error: false,
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<CurrentWeatherModel>) => {
      state.currentWeather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // pending — начал выполняться async action, но данные ещё не пришли
      .addCase(fetchGetCurrentWeather.pending, (state) => {
        console.log('pending');
        state.error = undefined;
        state.loading = true;
      })
      // fulfilled — успех
      .addCase(fetchGetCurrentWeather.fulfilled, (state, action) => {
        console.log('успех');
        console.log(action);
        state.loading = false;
        state.error = undefined;
      })
      // rejected — ошибка
      .addCase(fetchGetCurrentWeather.rejected, (state, action) => {
        console.log('ошибка');
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: currentWeatherActions } = currentWeatherSlice;
export const { reducer: currentWeatherReducer } = currentWeatherSlice;

export default currentWeatherSlice.reducer;
