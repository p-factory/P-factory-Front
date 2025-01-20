//functions => multi args >> object
export namespace Functions {
  export interface CellTypes {
    string: string;
    number: number;
    boolean: boolean;
  }

  export type ExtendCellTypes = CellTypes[keyof CellTypes];

  // 함수 타입
  export interface GeneralArg {
    (): void;
  }
  export interface DefaultArg<Organism> {
    (): Organism;
  }
  export interface SingleArg<Cell, Organism> {
    (arg: Cell): Organism;
  }
  export interface MultiArg<Cells extends ExtendCellTypes[], Organism> {
    (...args: Cells): Organism;
  }
}

export type CalculatorStrategy = Functions.MultiArg<[number, number], number>;
