const RemoveModel = <Cell>(
  removeItem: Cell, // 제거를 할때는 특정 대상을 지정해야해서 매개변수로 전달
  items: Cell[], //items를 직접 참조해야 하는 로직시 사용
  setItems: React.Dispatch<React.SetStateAction<Cell[]>>,
  callBack?: (item: Cell) => void,
): void => {
  setItems((prev) => prev.filter((i) => i !== removeItem));
  if (callBack) callBack(removeItem);
};

export default RemoveModel;

//Model은 직접 코드를 동작하는게 아니라 객체들을 주고 받기만 하기에 상태값을 전달하고 동작하게 할 수 있다.
