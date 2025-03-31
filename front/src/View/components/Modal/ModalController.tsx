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
  isModalClose,
  title,
}: {
  id: number;
  state: string;
  isModalOpen: boolean;
  isModalClose: () => void;
  title: string;
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
      <div style={{ width: '350px', height: '200px' }}>
        <Alarm
          id={id}
          styles={AlarmTypeStyles}
          title={title}
          alarm={`공장을 삭제하시겠습니까?`}
          // image=''
          method={isMethod}
          isModalCloase={isModalClose}
        />
      </div>
    </Modal>
  );
};

export default ModalController;
