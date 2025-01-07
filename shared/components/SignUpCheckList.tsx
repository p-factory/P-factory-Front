import { Platform, Text } from 'react-native';
import { SignUpCheckListStylesLocal } from '../type';

const SignUpCheckList = ({
  styles,
}: {
  styles: SignUpCheckListStylesLocal;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div className={styles.contents}>
          <input className={styles.checkbox} type='checkbox' value='option1' />
          <span className={styles.required}>(필수)</span>
          <span className={styles.conditions}>서비스 이용약관</span>
        </div>
        <div className={styles.contents}>
          <input className={styles.checkbox} type='checkbox' value='option1' />
          <span className={styles.required}>(필수)</span>
          <span className={styles.conditions}>개인정보 처리방침</span>
        </div>
        <div className={styles.contents}>
          <input className={styles.checkbox} type='checkbox' value='option1' />
          <span className={styles.required}>(필수)</span>
          <span className={styles.conditions}>위치기반서비스 이용약관</span>
        </div>
        <div className={styles.contents}>
          <input className={styles.checkbox} type='checkbox' value='option1' />
          <span id={styles.selected}>(선택)</span>
          <span className={styles.conditions}>마켓팅 활용동의</span>
        </div>
        <div className={styles.contents}>
          <input className={styles.checkbox} type='checkbox' value='option1' />
          <span id={styles.all}>전체동의</span>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default SignUpCheckList;
