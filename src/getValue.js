import parse from 'date-fns/parse';
import format from 'date-fns/format';

export default function getValue(inputProps) {
  const {
    children,
    format: formatter,
    value: inputValue,
    filter,
  } = inputProps;
  let value = children || inputValue;

  value = typeof formatter === 'function'
    ? formatter(parse(value))
    : format(parse(value), formatter);

  return filter(value);
}