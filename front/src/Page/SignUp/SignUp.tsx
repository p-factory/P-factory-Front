import { SignUp as styles } from '../../View/stylesheet';
import { SignUpCheckList } from '@shared/components';
import PtoryLogo from '@shared/components/PtoryLogo';
import {
  SignUpCheckListTypeStyles,
  PtoryLogoTypeStyles,
} from '../../Model/Mapping';
import { Link } from 'react-router-dom';

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '24px',
          }}
        >
          <span>
            이미 회원이신가요?&nbsp;
            <Link style={{ fontWeight: 'bold' }} to='/login'>
              로그인
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
