import { SharedFactoryTypeStyles } from '@mapping';
import { SharedFactory } from '@shared/components';
import { BaseLayout } from '@view/components';

const HotFactory = () => {
  return (
    <BaseLayout>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '24px 0 12px 0',
            fontSize: 'var(--font-size-regular)',
            fontWeight: 'var(--font-weight-bold)',
          }}
        >
          요즘 핫한 단어 공장 🔥
        </div>
        <div>
          <div style={{ marginBottom: '16px' }}>
            <SharedFactory styles={SharedFactoryTypeStyles} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <SharedFactory styles={SharedFactoryTypeStyles} />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default HotFactory;
