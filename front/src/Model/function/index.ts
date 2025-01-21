import { Functions } from '@shared/function';

export const TestSingleFunction: Functions.SingleArg<string, string> = (
  arg,
) => {
  return arg;
};

export const TestMultiFunction: Functions.MultiArg<[number, string], string> = (
  numberArg,
  stringArg,
) => {
  return `${numberArg} and ${stringArg}`;
};
