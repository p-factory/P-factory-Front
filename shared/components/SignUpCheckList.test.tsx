import { Platform, Text } from 'react-native';
import { SignUpCheckListStylesLocal } from '../style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpCheckList = ({
  styles,
}: {
  styles: SignUpCheckListStylesLocal;
}) => {
  if (Platform.OS === 'web') {
    const [checkStates, setCheckStates] = useState<boolean[]>([
      false,
      false,
      false,
      false,
    ]); // 각 체크박스 상태
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false); // 전체 동의 상태
    const [isButtonActive, setIsButtonActive] = useState<boolean>(false); // 버튼 활성화 여부

    const navigate = useNavigate();

    // 개별 체크박스 상태 업데이트
    const handleCheckboxChange = (index: number) => {
      const updatedCheckStates = [...checkStates];
      updatedCheckStates[index] = !updatedCheckStates[index];
      setCheckStates(updatedCheckStates);

      // 필수 항목 체크 여부 확인
      const allRequiredChecked = updatedCheckStates
        .slice(0, 3)
        .every((checked) => checked);
      setIsButtonActive(allRequiredChecked);

      // 전체 동의 상태 업데이트
      setIsAllChecked(updatedCheckStates.every((checked) => checked));
    };

    // 전체 동의 버튼 동작
    const handleAllChecked = () => {
      const newState = !isAllChecked;
      setCheckStates(checkStates.map(() => newState));
      setIsAllChecked(newState);
      setIsButtonActive(newState); // 필수 항목도 모두 선택된 상태로 변경
    };

    useEffect(() => {
      setIsAllChecked(false);
    }, []);

    const onClickButton = () => {
      if (isButtonActive) {
        navigate('/signup/input');
      }
    };

    return (
      <form action=''>
        <div id={styles.container}>
          {[
            '서비스 이용약관',
            '개인정보 처리방침',
            '위치기반서비스 이용약관',
            '마케팅 활용동의',
          ].map((label, index) => {
            const checkboxId = `checkbox-${index}`;
            return (
              <div key={index} className={styles.contents}>
                <input
                  className={styles.checkbox}
                  type='checkbox'
                  id={checkboxId}
                  checked={checkStates[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={checkboxId} // htmlFor은 html에서 사용되는 for 속성과 동일
                >
                  <span
                    className={styles.required}
                    id={index === 3 ? styles.selectedChecked : styles.selected}
                  >
                    {index < 3 ? '(필수)' : '(선택)'}
                  </span>
                  <span
                    className={
                      checkStates[index]
                        ? styles.conditionsChecked
                        : styles.conditions
                    }
                  >
                    {label}
                  </span>
                </label>
              </div>
            );
          })}
          <div className={styles.contents}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='checkbox-all'
              checked={isAllChecked}
              onChange={handleAllChecked}
            />
            <label htmlFor='checkbox-all'>
              <span id={styles.all}>전체동의</span>
            </label>
          </div>
        </div>
        <div className={isButtonActive ? styles.submit : styles.button}>
          <button
            type='button'
            onClick={onClickButton}
            disabled={!isButtonActive}
          >
            다음으로
          </button>
        </div>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default SignUpCheckList;
