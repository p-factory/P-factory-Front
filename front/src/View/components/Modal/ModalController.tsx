import { SetMode } from '@shared/store/slice/factoryModeSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Alarm } from '@shared/components';
import { AlarmTypeStyles } from '@/Model/Mapping';

const ModalController = ({
  id,
  state,
  isModalOpen,
}: {
  id: number;
  state: string;
  isModalOpen: boolean;
}) => {
  const dispatch = useDispatch();
  const [isMethod, setMethod] = useState<'POST' | 'PUT' | 'DELETE'>();
  useEffect(() => {
    // console.log('현재 ')
    if (state) {
      if (!state) return;
      switch (state) {
        case 'deleted':
          console.log('훅으로 전달된 상태:', state);
          dispatch(SetMode('deleted'));
          setMethod('DELETE');
          break;
        case 'edit':
          console.log(state, '*edit api running in the BuildFactory');
          dispatch(SetMode('edit'));
          break;
        case 'shared':
          console.log('훅으로 전달된 상태:', state);
          dispatch(SetMode('shared'));
          break;
        case 'duplicated':
          console.log('훅으로 전달된 상태:', state);
          dispatch(SetMode('duplicated'));
          break;
        default:
          break;
      }
    }
  }, [state]);

  return (
    <Modal
      isOpen={isModalOpen}
      // onRequestClose={reDirAction}
      preventScroll
    >
      <div>
        <Alarm
          id={id}
          styles={AlarmTypeStyles}
          title='test'
          alarm={`test`}
          image=''
          method={isMethod}
        />
      </div>
    </Modal>
  );
};

export default ModalController;
