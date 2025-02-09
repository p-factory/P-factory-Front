import { RemoveModel } from '../Model';

export const RemoveDriver = (
  field: string,
  fields: string[],
  //React 상태 업데이트 함수 타입
  setFields: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  RemoveModel<string>(field, fields, setFields, (removedField) =>
    console.log('removeItems:', removedField),
  );
};

export default RemoveDriver;

//Controller은 상태값을 변경할 수 있다. 다만, props와는 동작방식이 전혀 다르다. props는 읽기 전용으로 되어 있기 때문에 그렇다.
