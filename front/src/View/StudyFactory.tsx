import { Sort } from '@shared/components';
import { SortTypeStyles } from '../Model/Mapping';
import styled from './StudyFactory.Layout.module.scss';
const StudyFactory = () => {
  return (
    <div id={styled.debug}>
      <div id={styled.header}>
        <div>
          <img src='' alt='backIcon' />
        </div>
        <span>토익 공부</span>
        <div>
          <img src='' alt='starIcon' />
        </div>
      </div>
      <div id={styled.count}>단어 0개</div>
      <div id={styled.menu}>
        <div>
          <Sort styles={SortTypeStyles} />
        </div>
        <div>
          <img src='' alt='downLoadIcon' />
        </div>
      </div>
    </div>
  );
};

export default StudyFactory;
