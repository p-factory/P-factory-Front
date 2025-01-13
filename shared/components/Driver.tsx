import { Platform, Text } from 'react-native';
import Assets from '../../front/src/assets/assets';
import { DriverStylesLocal } from '../type';

const Alarm = ({ styles }: { styles: DriverStylesLocal }) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.title}>
          <div>단어생성</div>
          <div id={styles.image}>
            <img src={Assets.cancelIcon} alt='X' height={'24px'} />
          </div>
        </div>
        <div id={styles.contents}>
          <div className={styles.inputContents}>
            <span>단어/문장</span>
            <input placeholder='단어/문장을 입력하세요.(필수)' type='text' />
          </div>
          <div className={styles.inputContents}>
            <span>의미</span>
            <input placeholder='의미를 입력하세요.(필수)' type='text' />
          </div>
          <div id={styles.buttonContents} onClick={() => console.log('test')}>
            <img src={Assets.addIcon} alt='' />
          </div>
          <div className={styles.inputContents}>
            <span>발음</span>
            <input placeholder='발음을 입력하세요.' type='text' />
          </div>
          <div className={styles.inputContents}>
            <span>설명</span>
            <input placeholder='' type='text' />
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Alarm;
