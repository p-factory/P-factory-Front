import { SignUp as styles } from '../../View/stylesheet';
import SignUpCheckList from '@shared/components/signup/SignUpCheckList.test';
import PtoryLogo from '@shared/components/PtoryLogo';
import {
  SignUpCheckListTypeStyles,
  PtoryLogoTypeStyles,
} from '../../Model/Mapping';

const SignUpPage = () => {
  return (
    <div id={styles.container}>
      <div id={styles.contents}>
        <div id={styles.logo}>
          <PtoryLogo styles={PtoryLogoTypeStyles} />
        </div>
        <div id={styles.textContainer}>
          <div id={styles.textTitle}>회원가입</div>
          <div id={styles.textContent}>이용약관 동의</div>
        </div>
        <div id={styles.signUpCheckList}>
          <SignUpCheckList styles={SignUpCheckListTypeStyles} />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
