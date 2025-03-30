import { Platform, Text } from 'react-native';
import { AlarmStylesLocal } from '../style';
import { useEffect, useState } from 'react';
import { useGlobalApiState } from '../../front/src/Model';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Alarm = ({
  id,
  styles,
  title,
  alarm,
  image,
  link = false,
}: {
  id?: number;
  styles: AlarmStylesLocal;
  title: string;
  alarm: string;
  image: string;
  link?: boolean;
}) => {
  const [isToggle, setToggle] = useState<boolean>(false);
  const mode = useSelector((state: RootState) => state.setFactoryMode.mode);

  if (link) {
    const { isLoading, isSuccess } = useGlobalApiState({
      id: id,
      method: 'DELETE',
      toggle: isToggle,
    });
    useEffect(() => {
      console.log('Alarm: ', mode, 'Toggle: ', isToggle);
      if (isSuccess) {
        console.log('🟢 삭제 성공:', isSuccess);
        setToggle(false);
        // 여기서 삭제 와료 모달 실행
      }
      if (isLoading) {
        console.log('🟢 삭제 성공:', isLoading);
      }
    }, [isLoading, isSuccess, isToggle]);
  }

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
              setToggle(true);
            }}
          >
            예
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Alarm;
