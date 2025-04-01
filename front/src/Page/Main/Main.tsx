import { ButtonTypeStyles, PtoryLogoTypeStyles } from '@/Model/Mapping';
import { Button, PtoryLogo } from '@shared/components';
import { spannerIconWhite } from '@/assets';
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PtoryLogo styles={PtoryLogoTypeStyles} />
      <div>
        <div>토리와 함께 내가 만들어가는</div>
        <div>
          나만의 <span>단어 공장</span>
        </div>
      </div>
      <Button
        styles={ButtonTypeStyles}
        title='ㅍ토리 사용법'
        state={null}
        image={spannerIconWhite}
        functions={() => navigate('/error')}
      />
      <Button
        styles={ButtonTypeStyles}
        title='회원가입'
        state={false}
        functions={() => navigate('/signUp')}
      />
      <Button
        styles={ButtonTypeStyles}
        title='단어 공장 작업 시작하기'
        state={true}
        functions={() => navigate('/login')}
      />
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
