import React, { FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import Temperature from './components/Temperature/Temperature';
import Indicators from './components/Indicators/Indicators';
import cls from './MainPage.module.scss';

export const MainPage: FC = () => {
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
