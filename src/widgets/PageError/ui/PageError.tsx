import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (
  {
    className,
  },
) => {
  const { t } = useTranslation();

  const onReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={ cn([cls.pageError, className]) }>
      <div>{t('Произошла непредвиденная ошибка')}</div>
      <button type="button" onClick={ onReload }>
        {t('Обновить страницу')}
      </button>
    </div>
  );
};

export default PageError;
