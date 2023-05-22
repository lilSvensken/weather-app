import React, { FC, useEffect } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import { useDispatch } from 'react-redux';
import {
  fetchGetCurrentWeather,
} from 'app/entities/CurrentWeather/model/services/getCurrentWeather';
import { Dispatch } from '@reduxjs/toolkit';
import Temperature from './components/Temperature/Temperature';
import Indicators from './components/Indicators/Indicators';
import cls from './MainPage.module.scss';

export const MainPage: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchGetCurrentWeather());
  }, [dispatch]);

  return (
    <div className={ cls.mainPage }>
      <div className="pageContent">
        <div className={ cn([cls.content, 'pageContent']) }>
          <Temperature className={ cls.temperature } />
          <Indicators />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
