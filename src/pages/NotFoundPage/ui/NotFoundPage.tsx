import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation('not-found-page');

  return (
    <div className={ cls.notFoundPage }>
      <h1 className={ cls.caption }>
        { t('Страница не найдена') }
      </h1>
      <img src="gif/so-so-sorry.gif" alt="" />
    </div>
  );
};

export default NotFoundPage;
