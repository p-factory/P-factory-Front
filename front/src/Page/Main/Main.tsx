import { ButtonTypeStyles, PtoryLogoTypeStyles } from '@/Model/Mapping';
import { Button, PtoryLogo } from '@shared/components';
import { spannerIconWhite } from '@/assets';
const Main = () => {
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
        functions={() => console.log('test')}
      />
      <Button
        styles={ButtonTypeStyles}
        title='회원가입'
        state={false}
        functions={() => console.log('test')}
      />
      <Button
        styles={ButtonTypeStyles}
        title='단어 공장 작업 시작하기'
        state={true}
        functions={() => console.log('test')}
      />
    </div>
  );
};

export default Main;
