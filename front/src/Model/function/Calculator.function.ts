import { Functions } from '@shared/function';

export const AdditionFunction: Functions.MultiArg<[number, number], number> = (
  a,
  b,
) => {
  return a + b;
};

export const SubtractionFunction: Functions.MultiArg<
  [number, number],
  string
> = (a, b) => {
  return `${a - b} 결과 입니다.`;

export const MultiplicationFunction: Functions.MultiArg<
  [number, number],
  number
> = (a, b) => {
  return a * b;
};

export const DivisionFunction: Functions.MultiArg<[number, number], number> = (
  a,
  b,
) => {
  if (b === 0) throw new Error('0으로 나눌 수 없습니다.');
  return a / b;
};
