import { Platform, Text } from 'react-native';
import { DriverStylesLocal } from '../../style';
import { useEffect, useState } from 'react';
import { useForm, UseFormRegister, useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';
// import { CreateDriver, RemoveDriver } from '../../../front/src/Controller';
import { removeIcon, cancelIcon, addIcon } from '../../../front/src/assets';
import { useApiMutation } from '../../../front/src/Model';

interface FormData {
  id: string;
  word: string;
  meanings: string[];
  pronunciation?: string;
  explanation?: string;
}

//props는 항상 객체 형태로 전달
export const InputElement = ({
  styles,
  register,
  remove,
  // point,
  index,
}: {
  styles: string;
  register: UseFormRegister<FormData>;
  remove?: () => void;
  // point: string;
  index?: number;
}) => {
  return (
    <div id={styles}>
      <input
        placeholder='의미를 입력하세요.(필수)'
        type='text'
        {...register(`meanings.${index}` as keyof FormData)}
      />
      {/* {point === 'check' ? null : ( */}
      <div>
        <img src={removeIcon} alt='' onClick={remove} />
      </div>
      {/* )} */}
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
    // const [isInputElements, setInputElements] = useState<string[]>([]); // 동적 Input 관리

    const [isState, setState] = useState<boolean>(false);

    const { register, handleSubmit, reset, setValue, control } =
      useForm<FormData>({
        defaultValues: {
          id: '',
          meanings: [''],
        },
      });

    const addMeaning = () => {
      setValue('meanings', [...meanings, '']);
    };

    const removeMeaning = (index: number) => {
      setValue(
        'meanings',
        meanings.filter((_, i) => i !== index),
      );
    };
    const { uri } = useParams();
    const { mutation, isLoading, isError, isSuccess, responseData } =
      useApiMutation('POST');

    const onSubmit = (data: FormData) => {
      const idValue = uri ?? 'error-id'; // id 값을 검증
      setValue('id', idValue);
      const meaningsValue = data.meanings.filter((item) => item.trim() !== ''); // 비어있는 meaning 제거하는 필터
      reset();

      // setInputElements([]);
      const updatedData = {
        ...data,
        id: idValue,
        meanings: meaningsValue,
      };
      mutation.mutate({
        mutateUrl: 'https://13.209.113.229.nip.io/api/word/create',
        mutateNucleus: updatedData,
      });
      console.log('제출된 데이터:', updatedData);
    };

    const word = useWatch({ name: 'word', control });
    const meanings = useWatch({ name: 'meanings', control });

    useEffect(() => {
      const wordFilled = typeof word === 'string' && word.trim() !== '';
      const anyMeaningFilled =
        Array.isArray(meanings) && meanings.some((m) => m.trim() !== '');
      setState(wordFilled && anyMeaningFilled);
    }, [word, meanings]);

    useEffect(() => {
      setState(false);
      if (uri) {
        setValue('id', uri);
        console.log(uri);
      }
    }, [uri, setValue]);

    useEffect(() => {
      // setState(false);
      if (isSuccess) {
        console.log('Response:', responseData);
        window.location.reload();
      }
      if (isLoading) {
        console.log('Response:', responseData);
      }
      if (isError) {
        console.error('Error occurred during mutation');
      }
    }, [isSuccess, isLoading, isError, responseData]);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' {...register('id')} />
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
              {/* <InputElement
                styles={styles.createInput}
                register={register}
                point={'check'}
              /> */}
              {meanings.map((_: string, index: number) => (
                <InputElement
                  key={index}
                  styles={styles.createInput}
                  register={register}
                  remove={() => removeMeaning(index)}
                  // point={''}
                  index={index}
                />
              ))}
            </div>
            <div id={styles.buttonContents} onClick={addMeaning}>
              <div id={styles.button}>
                <img src={addIcon} alt='' />
              </div>
            </div>
            {/* 현재 사용되지 않는 ui */}
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
                {...register('explanation')}
              />
            </div>
          </div>
        </div>
        <button
          type='submit'
          className={isState ? styles.submit : styles.button}
        >
          완료
        </button>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Driver;
