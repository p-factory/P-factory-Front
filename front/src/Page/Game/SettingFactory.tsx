import { backIcon } from '@/assets';
import {
  ButtonTypeStyles,
  FactoryTypeStyles,
  FooterTypeStyles,
} from '@/Model/Mapping';
import { SettingFactory as styles } from '@/View/stylesheet';
import { Button, Factory, Footer } from '@shared/components';

const SettingFactory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={backIcon} alt='back' />
          </div>
          <div className={styles.title}>공장 선택</div>
          <div className={styles.img}></div>
        </div>
        <span className={styles.description}>
          대탈출에 나올 공장을 선택해주세요!
        </span>
      </div>

      <div className={styles.contents}>
        <div className={styles.factoryContainer}>
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={false}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'토익 공부'}
            favorite={true}
            total={0}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
        </div>
      </div>
      <div className={styles.choiceContainer}>
        {/* 버튼 컴포넌트의 title에 기본적으로 margin-right가 들어가 있음. */}
        <Button
          styles={ButtonTypeStyles}
          state={true}
          title='전체 선택'
          functions={() => {
            console.log('all choice');
          }}
        />
        <Button
          styles={ButtonTypeStyles}
          state={true}
          title='완료'
          functions={() => {
            console.log('complate');
          }}
        />
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default SettingFactory;
