import { ButtonTypeStyles, PtoryLogoTypeStyles } from '@mapping';
import { Button, PtoryLogo } from '@shared/components';
import { spannerIconWhite } from '@/assets';
import { useNavigate } from 'react-router-dom';
import { Main as styles } from '@/View/stylesheet';
import { spannerIcon } from '../../assets';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.debug}>
      <PtoryLogo styles={PtoryLogoTypeStyles} />
      <div className={styles.contents}>
        <div>토리와 함께 내가 만들어가는</div>
        <div>
          나만의 <span>단어 공장</span>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          styles={ButtonTypeStyles}
          title='ㅍ토리 사용법'
          state={null}
          image={spannerIconWhite}
          functions={() => navigate('/error')}
        />
      </div>
      <div className={styles.button}>
        <Button
          styles={ButtonTypeStyles}
          title='회원가입'
          state={false}
          image={spannerIcon}
          functions={() => navigate('/signUp')}
          style={{ color: 'var(--black-color)' }}
        />
      </div>
      <div className={styles.button}>
        <Button
          styles={ButtonTypeStyles}
          title='단어 공장 작업 시작하기'
          state={true}
          image={spannerIcon}
          functions={() => navigate('/login')}
        />
      </div>
      {/* <picture>
        <source
          srcSet='https://p-tory-cdn-807801802.imgix.net/img/test.png?fm=webp'
          type='image/webp'
        />
        <img
          src='https://p-tory-cdn-807801802.imgix.net/img/test.png'
          alt='test'
        />
      </picture> */}
    </div>
  );
};

export default Main;
