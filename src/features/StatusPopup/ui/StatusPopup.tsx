import { FC } from 'react';
import { cn } from 'shared/lib/classNames';
import { Popup, POPUP_THEME } from 'shared/ui/Popup';
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
      className={ cls.statusPopup }
      isOpen={ isOpen }
      onClose={ onClose }
      theme={ POPUP_THEME.CORNER }
      lazy
    >
      Popup
    </Popup>
  );
};

export default StatusPopup;
