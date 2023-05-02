import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (
  {
    className,
  },
) => {
  return (
    <div className={ cn([cls.header, className]) }>
      <div className="pageContent">
        <div className={ cls.header }>
          header
        </div>
      </div>
    </div>
  );
};

export default Header;
