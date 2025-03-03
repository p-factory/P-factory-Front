import { Sort, Screw } from '@shared/components';
import { SortTypeStyles, ScrewTypeStyles } from '../Model/Mapping';
import { StudyFactory as styled } from './';
import { starIconChecked, backIcon, downloadIcon } from '../assets';
const StudyFactory = () => {
  return (
    <div id={styled.debug}>
      <div id={styled.header}>
        <div id={styled.navigate}>
          <div className={styled.imageGroup}>
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>토익 공부</span>
          <div className={styled.imageGroup}>
            <img src={starIconChecked} alt='starIcon' />
          </div>
        </div>
        <div id={styled.count}>단어 0개</div>
        <div id={styled.menu}>
          <div>
            <Sort styles={SortTypeStyles} />
          </div>
          <div className={styled.imageGroup}>
            <img src={downloadIcon} alt='downLoadIcon' />
          </div>
        </div>
      </div>
      <div id={styled.screws}>
        <Screw
          styles={ScrewTypeStyles}
          screwSound={'라보르'}
          bolt={'labor'}
          nuts={'노동, 일, 출산'}
          screwShape={'명사'}
        />
      </div>
    </div>
  );
};

export default StudyFactory;
