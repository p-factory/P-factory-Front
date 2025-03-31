import { Platform, Text } from 'react-native';
import { AlarmStylesLocal } from '../style';
import { useEffect, useState } from 'react';
import { useGlobalApiState } from '../../front/src/Model';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Siren from './Siren';
import Modal from 'react-modal';
import { SirenTypeStyles } from '../../front/src/Model/Mapping';

const Alarm = ({
  id,
  styles,
  title,
  alarm,
  image,
  method,
}: {
  id?: number;
  styles: AlarmStylesLocal;
  title: string;
  alarm: string;
  image: string;
  link?: boolean;
  method?: 'POST' | 'PUT' | 'DELETE';
}) => {
  // const [isToggle, setToggle] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const mode = useSelector((state: RootState) => state.setFactoryMode.mode);

  const { isLoading, isSuccess, active } = useGlobalApiState({
    id: id,
    method: 'DELETE',
  });

  useEffect(() => {
    console.log('Alarm: ', mode);
    if (isSuccess) {
      console.log('🟢 삭제 성공:', isSuccess);
      setModalOpen(true);
    }
    if (isLoading) {
      console.log('🟢 삭제 성공:', isLoading);
    }
  }, [isLoading, isSuccess]);
  // }

  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.image}>
          <img src={image} alt='X' />
        </div>
        <div className={styles.contents}>
          <div id={styles.title}>{`‘${title}’`}</div>
          <div>{alarm}</div>
        </div>
        <div className={styles.buttonContents}>
          <div id={styles.buttonCancel}>아니요</div>
          <div
            id={styles.buttonApprove}
            onClick={() => {
              //여기에 매개변수로 전달
              if (method) active('deleted');
            }}
          >
            예
          </div>
        </div>
        <Modal isOpen={isModalOpen}>
          <div style={{ width: '350px', height: '200px' }}>
            <Siren
              styles={SirenTypeStyles}
              image='x'
              title='test'
              alarm='test'
              reDirAction={() => window.location.reload()}
            />
          </div>
        </Modal>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Alarm;
