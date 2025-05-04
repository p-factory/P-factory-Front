import { Footer, Screw, Sort } from '@shared/components';
import { FooterTypeStyles, ScrewTypeStyles, SortTypeStyles } from '@mapping';
import { backIcon, downloadIcon } from '@/assets';
import { DownLoadFactory as styled } from '@view/stylesheet';
import { useNavigate } from 'react-router-dom';
const DownLoadFactory = () => {
  const navigate = useNavigate();
  return (
    <div className={styled.container}>
      {/* API를 최상 단에서 값을 가져올 수 있게 해야한다. */}
      <div className={styled.header}>
        <div className={styled.navigate}>
          <div className={styled.imageGroup} onClick={() => navigate('/outer')}>
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>토익 공부</span>
          <div className={styled.imageGroup}>
            <img src={downloadIcon} alt='downloadIcon' />
          </div>
        </div>
        <div id={styled.count}>단어 0개</div>
        <div id={styled.menu}>
          <div>
            <Sort styles={SortTypeStyles} />
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '16px' }}>
          <Screw
            id={1}
            styles={ScrewTypeStyles}
            screwSound={'test'}
            bolt={'test'}
            nuts={['test']}
            screwShape={'test'}
            highlight={false}
            check={false}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Screw
            id={1}
            styles={ScrewTypeStyles}
            screwSound={'test'}
            bolt={'test'}
            nuts={['test']}
            screwShape={'test'}
            highlight={false}
            check={false}
          />
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default DownLoadFactory;
