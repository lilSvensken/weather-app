import { FC } from 'react';
import { Popup, POPUP_THEME } from 'shared/ui/Popup';
import { cn } from 'shared/lib/classNames';
import cls from './StatusPopup.module.scss';

interface statusPopupProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const StatusPopup: FC<statusPopupProps> = (
  {
    className,
    isOpen,
    onClose,
  },
) => {
  return (
    <Popup
      className={ cn([className, cls.statusPopup]) }
      isOpen={ isOpen }
      onClose={ onClose }
      theme={ POPUP_THEME.CORNER }
      lazy
    >
      <div className={ cls.statusPopupContent }>
        Popup
        <button onClick={ onClose }>x</button>
      </div>
    </Popup>
  );
};

export default StatusPopup;
