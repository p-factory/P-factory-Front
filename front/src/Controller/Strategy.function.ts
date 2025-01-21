import { CalculatorStrategy } from '@shared/function';

export const CalculatorOperation = (
  strategy: CalculatorStrategy,
  a: number,
  b: number,
): number => {
  return strategy(a, b);
};
