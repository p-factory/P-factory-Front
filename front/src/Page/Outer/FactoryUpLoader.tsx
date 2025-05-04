import { Factory } from '@shared/components';
import { BaseLayout } from '@view/components';
import { FactoryTypeStyles } from '@mapping';
const FactoryUpLoader = () => {
  return (
    <BaseLayout placeholder='업로드할 공장을 1개 선택해주세요'>
      <div style={{ marginTop: '48px' }}>
        <div style={{ marginBottom: '16px' }}>
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'테스트'}
            total={'0'}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Factory
            id={0}
            styles={FactoryTypeStyles}
            outer={true}
            name={'테스트'}
            total={'0'}
            uri={0}
            handlelocal={() => {
              console.log('handlelocal');
            }}
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default FactoryUpLoader;
