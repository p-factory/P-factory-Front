import { Platform, Text } from 'react-native';
import { DriverStylesLocal } from '../../style';
import { useEffect, useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { CreateDriver, RemoveDriver } from '../../../front/src/Controller';
import { removeIcon, cancelIcon, addIcon } from '../../../front/src/assets';

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
  fieldName,
}: {
  styles: string;
  register: UseFormRegister<FormData>;
  remove?: () => void;
  point: string;
  index?: number;
  fieldName: string;
}) => {
  return (
    <div id={styles}>
      <input
        placeholder='의미를 입력하세요.(필수)'
        type='text'
        {...register(`description_${fieldName}` as keyof FormData)}
      />
      {point === 'check' ? null : (
        <div>
          <img src={removeIcon} alt='' onClick={remove} />
        </div>
      )}
    </div>
  );
};

const Driver = ({
  styles,
  onClose,
}: {
  styles: DriverStylesLocal;
  onClose: () => void;
}) => {
  if (Platform.OS === 'web') {
    const [isInputElements, setInputElements] = useState<string[]>([]); // 동적 Input 관리

    const [isState, setState] = useState<boolean>(false);

    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log('제출된 데이터:', data);
      reset();
      setInputElements([]);
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
              <img src={cancelIcon} alt='X' height={'24px'} onClick={onClose} />
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
                // remove={() => removeInputElement('meaning')}
                point={'check'}
                fieldName='meaning'
              />
              {isInputElements.map((el, index) => (
                <InputElement
                  key={index}
                  styles={styles.createInput}
                  register={register}
                  remove={() => {
                    RemoveDriver(el, isInputElements, setInputElements);
                  }}
                  point={''}
                  fieldName={el}
                />
              ))}
            </div>
            <div
              id={styles.buttonContents}
              onClick={() => {
                CreateDriver(isInputElements, setInputElements);
              }}
            >
              <div id={styles.button}>
                <img src={addIcon} alt='' />
              </div>
            </div>
            // 현재 사용되지 않는 ui
            {/* <div className={styles.inputContents}>
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
            </div> */}
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
