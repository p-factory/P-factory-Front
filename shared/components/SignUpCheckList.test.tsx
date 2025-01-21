import { Platform, Text } from 'react-native';
import { SignUpCheckListStylesLocal } from '../type';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// data 객체
const data: Record<string, boolean> = {
  service: false,
  privacy: false,
  location: false,
  marketing: false,
};

const SignUpCheckListTest = ({
  styles,
}: {
  styles: SignUpCheckListStylesLocal;
}) => {
  if (Platform.OS === 'web') {
    const [isState] = useState<boolean>(false);
    const { register, setValue, watch, handleSubmit } = useForm();

    // watch로 각 체크박스 상태를 추적
    const watchCheckboxes = watch();

    // 전체 체크박스 로직
    const handleSelectAll = (e: React.FormEvent<HTMLInputElement>) => {
      const isChecked = e.currentTarget.checked;
      // data의 모든 키에 대해 값 설정
      Object.keys(data).forEach((item) => setValue(item, isChecked));
    };

    // 각 체크박스 상태에 따라 selectAll 체크박스 상태 변경
    useEffect(() => {
      const keys = Object.keys(data); // data의 키 배열
      const allChecked = keys.every((item) => watchCheckboxes[item]);
      const someChecked = keys.some((item) => watchCheckboxes[item]);
      setValue('selectAll', allChecked || someChecked);
    }, [watchCheckboxes, setValue]);

    const onSubmit = (formData: Record<string, boolean>) => {
      console.log('제출된 데이터:', formData);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id={styles.container}>
          {Object.keys(data).map((item, index) => (
            <div key={index} className={styles.contents}>
              <input
                className={styles.checkbox}
                type='checkbox'
                {...register(item)}
              />
              <span className={styles.required}>
                {item === 'marketing' ? '(선택)' : '(필수)'}
              </span>
              <span className={styles.conditions}>
                {item === 'service'
                  ? '서비스 이용약관'
                  : item === 'privacy'
                    ? '개인정보 처리방침'
                    : item === 'location'
                      ? '위치기반서비스 이용약관'
                      : '마케팅 활용동의'}
              </span>
            </div>
          ))}
          <div className={styles.contents}>
            <input
              className={styles.checkbox}
              type='checkbox'
              {...register('selectAll')}
              onChange={handleSelectAll}
            />
            <span id={styles.all}>전체동의</span>
          </div>
        </div>
        <div className={isState ? styles.submit : styles.button}>
          <button type='submit'>다음으로</button>
        </div>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default SignUpCheckListTest;
