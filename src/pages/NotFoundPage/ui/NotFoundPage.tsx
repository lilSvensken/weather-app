import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation('not-found-page');

  return (
    <div className={ classNames(cls.notFoundPage) }>
      { t('Страница не найдена') }
    </div>
  );
};

export default NotFoundPage;
