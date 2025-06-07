import { Platform, Text } from 'react-native';
import { FooterTypeStyles, StageBannerTypeStyles } from '@/Model/Mapping';
import { Footer, StageBanner } from '@shared/components';
import {
  alertIcon,
  cancelIcon,
  cancelIconGray,
} from '../../../front/src/assets';
import { useState } from 'react';
import { StageLayoutStyles } from '../../style';
import { useNavigate } from 'react-router-dom';

const StageLayout = ({
  styles,
  stage,
  tory,
  children,
}: {
  styles: StageLayoutStyles;
  stage: {
    stage: number;
    image: string;
    title: string;
    alert: React.ReactNode;
  };
  tory: { img: string; text: React.ReactNode };
  children?: React.ReactNode;
}) => {
  const [isOpenBanner, setIsOpenBanner] = useState<boolean>(true);
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [isOpenToryAlert, setIsOpenToryAlert] = useState<boolean>(false);
  const [isOpenClose, setIsOpenClose] = useState<boolean>(false);
  const navigate = useNavigate();

  const touchHandle = () => {
    if (isOpenBanner) {
      setIsOpenBanner(false);
      setIsOpenAlert(true);
    } else if (isOpenAlert) {
      setIsOpenAlert(false);
      setIsOpenToryAlert(true);
    } else setIsOpenToryAlert(false);
  };

  if (Platform.OS === 'web') {
    {
      return (
        <div className={styles.container}>
          {isOpenClose && (
            <div className={styles.closeModal}>
              <div className={styles.modalContents}>
                <div
                  className={styles.closeIcon}
                  onClick={() => setIsOpenClose(false)}
                >
                  <img src={cancelIcon} alt='닫기' />
                </div>
                <div className={styles.closeModalContainer}>
                  <div className={styles.closeText}>탈출을 멈추시겠습니까?</div>
                  <div className={styles.closeButtonContainer}>
                    <button
                      className={styles.closeButton}
                      onClick={() => setIsOpenClose(false)}
                    >
                      아니오
                    </button>
                    <button
                      className={styles.closeButton}
                      onClick={() => {
                        setIsOpenClose(false);
                        navigate('/game');
                      }}
                    >
                      네
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.contents}>
            <div className={styles.close} onClick={() => setIsOpenClose(true)}>
              <img src={cancelIconGray} alt='닫기' />
            </div>
            {isOpenBanner || isOpenAlert || isOpenToryAlert ? (
              <div className={styles.touchContainer} onClick={touchHandle}>
                {isOpenBanner && (
                  <StageBanner
                    styles={StageBannerTypeStyles}
                    stage={{
                      round: stage.stage,
                      image: stage.image,
                      title: stage.title,
                    }}
                  />
                )}
                {isOpenAlert && (
                  <div className={styles.alertContainer}>
                    <div className={styles.image}>
                      <img src={alertIcon} />
                    </div>
                    <div className={styles.alertText}>{stage.alert}</div>
                  </div>
                )}
                {isOpenToryAlert && (
                  <div className={styles.toryContainer}>
                    <div className={styles.image}>
                      <img src={tory.img} alt='토리' />
                    </div>
                    <div className={styles.toryText}>{tory.text}</div>
                  </div>
                )}
                <div className={styles.touchText}>화면을 터치하세요</div>
              </div>
            ) : (
              children
            )}
          </div>
          <Footer styles={FooterTypeStyles} />
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default StageLayout;
