import { FC } from 'react';
import { Input } from 'shared/ui/Input';
import { cn } from 'shared/lib/helpers/classNames';
import Button from 'shared/ui/Button/ui/Button';
import GeolocationIcon from 'shared/assets/icons/geolocation.svg';
import useGeolocation from 'app/providers/GeolocationProvider/lib/useGeolocation';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (
  {
    className,
  },
) => {
  const { updateGeolocation } = useGeolocation();

  return (
    <div className={ cn([cls.header, className]) }>
      <div className="pageContent">
        <div className={ cls.content }>
          <div className={ cls.locationWrpapper }>
            <Input placeholder="Поиск города" />
            <Button className={ cls.btnGeolocation } onClick={ updateGeolocation }>
              {/* менять fill в зависимости от темы */}
              <GeolocationIcon fill="#000" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
