import { spannerIconGray, toryComputer, toryLook } from '@/assets';
import { StageBannerTypeStyles } from '@/Model/Mapping';
import { StageLayout } from '@shared/components';

const stage = [
  { stage: 1, img: { spannerIconGray }, title: '기계 고치기' },
  { stage: 2, img: { spannerIconGray }, title: '감시 시스템 탈출하기' },
  { stage: 3, img: { spannerIconGray }, title: '탈출구 찾기' },
];

const alert = [
  <>
    탈출 도중, 토리가 단어 생산 기계를 고장 냈다!
    <br />
    기계에서 알파벳이 튀어나와 엉망이 되었다.
    <br />
    <span>이 상태로는 공장이 멈추고 경보가 울리게 된다.</span>
  </>,
  <>
    <span>공장의 감시 시스템이 토리를 추적 중이다!</span>
    <br />
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

const toryAlert = [
  {
    img: { toryLook },
    text: (
      <>
        "이대로면 들키고 말 거야!
        <br />
        빨리 <span>단어를 완성해 기계를 고쳐줘!</span>"
      </>
    ),
  },
  {
    img: { toryComputer },
    text: (
      <>
        "빨리 <span>뜻을 풀어서</span>
        <br />
        감시 카메라를 멈춰야 해!"
      </>
    ),
  },
  {
    img: { toryLook },
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
  return (
    <StageLayout
      styles={StageBannerTypeStyles}
      stage={stage[0]}
      alertText={alert[0]}
      toryImg={toryAlert[0].img}
      toryAlertText={toryAlert[0].text}
    >
      <div>hello</div>
    </StageLayout>
  );
};

export default GameStage;
