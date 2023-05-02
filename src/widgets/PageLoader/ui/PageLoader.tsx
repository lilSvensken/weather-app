import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (
  {
    className,
  },
) => {
  return (
    <div className={ cn([cls.pageLoader, className]) }>
      loading...
    </div>
  );
};

export default PageLoader;
