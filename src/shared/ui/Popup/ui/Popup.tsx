import React, {
  FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal';
import { cn } from 'shared/lib/classNames';
import cls from './Popup.module.scss';

export enum POPUP_THEME {
  CORNER = 'corner',
  CENTER = 'center',
}

interface PopupProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  theme?: POPUP_THEME;
  lazy?: boolean;
}

export const Popup: FC<PopupProps> = ({
  className,
  children,
  isOpen,
  onClose,
  theme,
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
      setIsClosing(true);
    }
  }, [onClose]);

  const onContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  // не рендерить модалку, если стоит флаг ленивой загрузки она не открыта
  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={ cn([className, cls.popup, cls[theme]], { [cls.isOpen]: isOpen && !isClosing }) }
        onClick={ closeHandler }
      >
        <div className={ cls.content } onClick={ onContentClick }>
          <div>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
