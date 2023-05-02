import { FC } from 'react';
import { Options } from 'shared/interfaces/Options.interfaces';
import { Select } from 'shared/ui/Select';

export enum MetricTemperature {
  Fahrenheit = 'Fahrenheit',
  Celsius = 'Celsius',
  Kelvin = 'Kelvin',
}

const METRIC_TEMPERATURE_OPTIONS: Options[] = [
  {
    text: MetricTemperature.Fahrenheit,
    value: MetricTemperature.Fahrenheit,
  },
  {
    text: MetricTemperature.Celsius,
    value: MetricTemperature.Celsius,
  },
  {
    text: MetricTemperature.Kelvin,
    value: MetricTemperature.Kelvin,
  },
];

interface MetricTemperatureSelectProps {
  className?: string;
}

export const MetricTemperatureSelect: FC<MetricTemperatureSelectProps> = (
  {
    className,
  },
) => {
  return (
    <Select
      className={ className }
      options={ METRIC_TEMPERATURE_OPTIONS }
      defaultValue={ MetricTemperature.Celsius }
    />
  );
};

export default MetricTemperatureSelect;
