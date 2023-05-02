import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './MainPage.module.scss';

export const MainPage: FC = () => {
  return (
    <div className={ classNames(cls.mainPage) }>
      <div className="pageContent">
        Заголовок
      </div>
    </div>
  );
};

export default MainPage;
