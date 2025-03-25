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

export { default as useApiMutation } from './Hook/useApiMutation';
export { default as useApiQuery } from './Hook/useApiQuery';
export { default as CreateModel } from './CreateModel';
export { default as RemoveModel } from './RemoveModel';
export { default as useGlobalApiState } from './Hook/useGlobalApiState';
export { default as useDynamicDisplay } from './Hook/useDynamicDisplay';
