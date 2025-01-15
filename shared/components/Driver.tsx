import { Platform, Text } from 'react-native';
import Assets from '../../front/src/assets/assets';
import { DriverStylesLocal } from '../type';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  word: string;
  meaning: string;
  pronunciation?: string;
  description?: string;
}

const Driver = ({ styles }: { styles: DriverStylesLocal }) => {
  if (Platform.OS === 'web') {
    const [isState, setState] = useState<boolean>(false);

    const {
      register,
      handleSubmit,
      // formState: { errors }, // -> errors는 placeholder에서 생성할 수 있도록
      reset,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
      console.log('제출된 데이터:', data);
      reset();
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
              <img src={Assets.cancelIcon} alt='X' height={'24px'} />
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
              <input
                placeholder='의미를 입력하세요.(필수)'
                type='text'
                {...register('meaning', { required: '의미는 필수입니다.' })}
              />
            </div>
            <div id={styles.buttonContents} onClick={() => console.log('test')}>
              <div id={styles.button}>
                <img src={Assets.addIcon} alt='' />
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
