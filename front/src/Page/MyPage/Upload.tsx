import { FooterTypeStyles, SharedFactoryTypeStyles } from '@mapping';
import { Footer, SharedFactory } from '@shared/components';
import { Upload as styled } from '@view/stylesheet';
import { backIcon } from '@assets';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate();
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <div className={styled.navigate}>
          <div
            className={styled.imageGroup}
            onClick={() => navigate('/myPage')}
          >
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>외부공장 업로드 내역</span>
          <div className={styled.imageGroup}></div>
        </div>
      </div>
      <div className={styled.factoryContainer}>
        {/* filter 조건에 따라 데이터를 불러오는 것이 좋을 것 같다. */}
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
        <div className={styled.factory}>
          <SharedFactory styles={SharedFactoryTypeStyles} />
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default Upload;
