import React, { FC } from 'react';
import cls from './MainPage.module.scss';

export const MainPage: FC = () => {
  return (
    <div className={ cls.mainPage }>
      <div className="pageContent">
        Заголовок
      </div>
    </div>
  );
};

export default MainPage;
