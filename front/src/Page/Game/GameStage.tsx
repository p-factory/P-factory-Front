import { spannerIconGray, toryComputer, toryLook } from '@/assets';
import {
  BlankScrewTypeStyles,
  BoltsPadTypeStyles,
  StageLayoutTypeStyles,
} from '@/Model/Mapping';
import { BlankScrew, BoltsPad, StageLayout } from '@shared/components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameStage as styles } from '@/View/stylesheet';

const stages = [
  { stage: 1, img: spannerIconGray, title: '기계 고치기' },
  { stage: 2, img: spannerIconGray, title: '감시 시스템 탈출하기' },
  { stage: 3, img: spannerIconGray, title: '탈출구 찾기' },
];

const alerts = [
  <>
    탈출 도중, 토리가 단어 생산 기계를 고장 냈다!
    <br />
    기계에서 알파벳이 튀어나와 엉망이 되었다.
    <br />
    <span>이 상태로는 공장이 멈추고 경보가 울리게 된다.</span>
  </>,
  <>
    <span>공장의 감시 시스템이 토리를 추적 중이다!</span>
    토리가 탈출하는 모습을 보지 못하게
    <br />
    감시 시스템을 해킹해야 한다.
  </>,
  <>
    토리가 겨우 도착한 탈출구 앞은
    <br />
    수많은 문들로 가득하다.
    <br />
    문 옆에는 하나의 열쇠가 있는데
    <br />
    <span>열쇠엔 뜻이 적혀 있고, 문에는 영어 단어가 적혀 있다.</span>
  </>,
];

const toryAlerts = [
  {
    img: toryLook,
    text: (
      <>
        "이대로면 들키고 말 거야!
        <br />
        빨리 <span>단어를 완성해 기계를 고쳐줘!</span>"
      </>
    ),
  },
  {
    img: toryComputer,
    text: (
      <>
        "빨리 <span>뜻을 풀어서</span>
        <br />
        감시 카메라를 멈춰야 해!"
      </>
    ),
  },
  {
    img: toryLook,
    text: (
      <>
        "이 문들 중에서 <span>열쇠와 맞는</span>
        <br />
        <span>단어의 문</span>을 찾아야 해!"
      </>
    ),
  },
];

const GameStage = () => {
  const [stage, setStage] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const stageId = Number(id);
    if (stageId) {
      setStage(stageId - 1);
    }
  }, []);

  return (
    <StageLayout
      styles={StageLayoutTypeStyles}
      stage={stages[stage]}
      alertText={alerts[stage]}
      toryImg={toryAlerts[stage].img}
      toryAlertText={toryAlerts[stage].text}
    >
      {stage === 0 && (
        <div className={styles.container}>
          <div className={styles.contents}>
            <span>철자를 클릭해 단어를 완성하세요.</span>
            <div className={styles.gameContainer}>
              <BlankScrew styles={BlankScrewTypeStyles} />
              <BoltsPad styles={BoltsPadTypeStyles} bolt='bcdupi' />
            </div>
            <div className={styles.selectContainer}>
              <div className={styles.select}>
                <div className={styles.number}>
                  <span>1</span>
                </div>
                <div className={styles.bolt}>
                  <span>c</span>
                </div>
              </div>
              <div className={styles.select}>
                <div className={styles.number}>
                  <span>2</span>
                </div>
                <div className={styles.bolt}>
                  <span>u</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.toryContainer}>
            <div className={styles.image}>
              <img src={toryLook} />
            </div>
            <div className={styles.toryText}>
              "들어갈 철자를
              <br />
              순서대로 클릭하라고!"
            </div>
          </div>
        </div>
      )}
      {stage === 1 && (
        <div className={`${styles.container} ${styles.second}`}>
          <div className={`${styles.contents}`}>
            <div className={`${styles.screw} ${styles.correct}`}>
              <span>include</span>
            </div>
            <div className={`${styles.screw}`}>
              <span>제외하다</span>
            </div>
            <div className={`${styles.screw} ${styles.correct}`}>
              <span>포함하다</span>
            </div>
            <div className={`${styles.screw} ${styles.wrong}`}>
              <span>도입하다</span>
            </div>
          </div>
          <div className={`${styles.toryContainer} ${styles.bottom}`}>
            <div className={styles.image}>
              <img src={toryComputer} />
            </div>
            <div className={styles.toryText}>"뜻 좀 얼른 찾아줘"</div>
          </div>
        </div>
      )}
    </StageLayout>
  );
};

export default GameStage;
