import { FC } from 'react';
import { cn } from 'shared/lib/helpers/classNames';
import cls from './Indicators.module.scss';

interface IndicatorsProps {
  className?: string;
}

export const Indicators: FC<IndicatorsProps> = (
  {
    className,
  },
) => {
  return (
    <div className={ cn([cls.indicators, className]) }>
      <div className={ cls.indicatorsItem }>
        <span className={ cls.iconFake } />
        <div className={ cls.itemInfo }>
          <div className={ cls.itemInfoTitle }>
            давление
          </div>
          <div className={ cls.itemInfoValue }>
            751 мм рт. ст.
          </div>
        </div>
      </div>
      <div className={ cls.indicatorsItem }>
        <span className={ cls.iconFake } />
        <div className={ cls.itemInfo }>
          <div className={ cls.itemInfoTitle }>
            давление
          </div>
          <div className={ cls.itemInfoValue }>
            751 мм рт. ст.
          </div>
        </div>
      </div>
      <div className={ cls.indicatorsItem }>
        <span className={ cls.iconFake } />
        <div className={ cls.itemInfo }>
          <div className={ cls.itemInfoTitle }>
            давление
          </div>
          <div className={ cls.itemInfoValue }>
            751 мм рт. ст.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicators;
