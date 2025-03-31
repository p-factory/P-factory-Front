const CreateModel = <Cell>(
  items: Cell[], //items를 직접 참조해야 하는 로직시 사용
  setItems: React.Dispatch<React.SetStateAction<Cell[]>>,
  cerateItemName: () => Cell,
  callBack?: (item: Cell) => void,
): void => {
  const newItem = cerateItemName();
  setItems((prev) => [...prev, newItem]);
  if (callBack) callBack(newItem);
};
export default CreateModel;

//Model은 직접 코드를 동작하는게 아니라 객체들을 주고 받기만 하기에 상태값을 전달하고 동작하게 할 수 있다.
