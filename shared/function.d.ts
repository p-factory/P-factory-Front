//functions => multi args >> object
export namespace Functions {
  export interface GeneralArg {
    (): void;
  }
  export interface DefaultArg<Organism> {
    (): Organism;
  }
  export interface SingleArg<Cell, Organism> {
    (arg: Cell): Organism;
  }
  export interface MultiArg<Cell extends any[], Organism> {
    (...args: Cell): Organism;
  }
}

export type CalculatorStrategy = Functions.MultiArg<[number, number], number>;
