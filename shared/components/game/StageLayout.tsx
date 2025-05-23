import { Platform, Text } from 'react-native';
import { FooterTypeStyles, StageBannerTypeStyles } from '@/Model/Mapping';
import { Footer, StageBanner } from '@shared/components';
import { alertIcon, cancelIconGray } from '../../../front/src/assets';
import { useState } from 'react';
import { StageLayoutStyles } from '../../style';

const StageLayout = ({
  styles,
  stage,
  alertText,
  toryImg,
  toryAlertText,
  children,
}: {
  styles: StageLayoutStyles;
  stage: { stage: number; img: string; title: string };
  alertText: React.ReactNode;
  toryImg: string;
  toryAlertText: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [isOpenBanner, setIsOpenBanner] = useState<boolean>(true);
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [isOpenToryAlert, setIsOpenToryAlert] = useState<boolean>(false);

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
          <div className={styles.contents}>
            <div className={styles.close}>
              <img src={cancelIconGray} alt='닫기' />
            </div>
            {isOpenBanner || isOpenAlert || isOpenToryAlert ? (
              <div className={styles.touchContainer} onClick={touchHandle}>
                {isOpenBanner && (
                  <StageBanner
                    styles={StageBannerTypeStyles}
                    stage={{
                      round: stage.stage,
                      image: stage.img,
                      title: stage.title,
                    }}
                  />
                )}
                {isOpenAlert && (
                  <div className={styles.alertContainer}>
                    <div className={styles.image}>
                      <img src={alertIcon} />
                    </div>
                    <div className={styles.alertText}>{alertText}</div>
                  </div>
                )}
                {isOpenToryAlert && (
                  <div className={styles.toryContainer}>
                    <div className={styles.image}>
                      <img src={toryImg} alt='토리' />
                    </div>
                    <div className={styles.toryText}>{toryAlertText}</div>
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
