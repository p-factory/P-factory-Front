import { Platform, Text } from 'react-native';
import { removeIcon, cancelIcon, addIcon } from '../../front/src/assets';
import { DriverStylesLocal } from '../style';
import { useEffect, useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

interface FormData {
  word: string;
  meaning: string;
  pronunciation?: string;
  description?: string;
}

//props는 항상 객체 형태로 전달
export const InputElement = ({
  styles,
  register,
  remove,
  point,
  index,
}: {
  styles: string;
  register: UseFormRegister<FormData>;
  remove: () => void;
  point: string;
  index?: number;
}) => {
  return (
    <div id={styles}>
      <input
        placeholder='의미를 입력하세요.(필수)'
        type='text'
        {...register(`description_${index}` as keyof FormData)}
      />
      {point === 'check' ? null : (
        <div>
          <img src={removeIcon} alt='' onClick={remove} />
        </div>
      )}
    </div>
  );
};

const Driver = ({ styles }: { styles: DriverStylesLocal }) => {
  if (Platform.OS === 'web') {
    const [isInputElements, setInputElements] = useState<string[]>([]); // 동적 Input 관리

    const [isState, setState] = useState<boolean>(false);

    const {
      register,
      handleSubmit,
      // formState: { errors }, // -> errors는 placeholder에서 생성할 수 있도록
      reset,
      setValue,
      getValues,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log('제출된 데이터:', data);
      reset();
      setInputElements([]);
    };

    const createInputElement = () => {
      const newField = `description_${isInputElements.length + 1}`; // 유일한 이름 생성
      setInputElements((prev) => [...prev, newField]);

      // 필드 초기화
      setValue(newField as keyof FormData, ''); // 초기값 설정
    };

    const removeInputElement = (fieldName: string) => {
      // 특정 필드를 제거
      setInputElements((prev) => prev.filter((name) => name !== fieldName));

      // React Hook Form에서 해당 필드 값도 삭제
      const currentValues = getValues();
      delete currentValues[fieldName as keyof FormData]; // 값 삭제
    };

    useEffect(() => {
      setState(false);
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id={styles.container}>
          <div id={styles.title}>
            <div>단어생성</div>
            <div id={styles.image}>
              <img src={cancelIcon} alt='X' height={'24px'} />
            </div>
          </div>
          <div id={styles.contents}>
            <div className={styles.inputContents}>
              <span>단어/문장</span>
              <input
                placeholder='단어/문장을 입력하세요.(필수)'
                type='text'
                {...register('word', { required: '단어/문장은 필수입니다.' })}
              />
            </div>
            <div className={styles.inputContents}>
              <span>의미</span>
              <InputElement
                styles={styles.createInput}
                register={register}
                remove={() => removeInputElement('meaning')}
                point={'check'}
              />
              {isInputElements.map((fieldName, index) => (
                <InputElement
                  key={index}
                  styles={styles.createInput}
                  register={register}
                  remove={() => removeInputElement(fieldName)}
                  point={''}
                  index={index}
                />
              ))}
            </div>
            <div id={styles.buttonContents} onClick={createInputElement}>
              <div id={styles.button}>
                <img src={addIcon} alt='' />
              </div>
            </div>
            <div className={styles.inputContents}>
              <span>발음</span>
              <input
                placeholder='발음을 입력하세요.'
                type='text'
                {...register('pronunciation')}
              />
            </div>
            <div className={styles.inputContents}>
              <span>설명</span>
              <input
                placeholder='설명을 입력하세요.'
                type='text'
                {...register('description')}
              />
            </div>
          </div>
        </div>
        <div className={isState ? styles.submit : styles.button}>
          <button type='submit'>완료</button>
        </div>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Driver;
