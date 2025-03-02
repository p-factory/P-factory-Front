import { Platform, Text } from 'react-native';
import { BuildFactoryStylesLocal } from '../style';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface BuildFormData {
  buildQuery: string;
}

const BuildFactory = ({
  styles,
  title,
  image,
  input,
  buttonTitle,
  onClose,
}: {
  styles: BuildFactoryStylesLocal;
  title: string;
  image: string;
  input: string;
  buttonTitle: string;
  onClose: () => void;
}) => {
  if (Platform.OS === 'web') {
    const [isState, setState] = useState<boolean>(false);
    const [inInputLength, setInputLength] = useState<number>(0);
    const { register, handleSubmit, setValue } = useForm<BuildFormData>();

    const onSubmit = (data: BuildFormData) => {
      console.log('생성된 Factory:', data.buildQuery);
    };

    useEffect(() => {
      setState(false);
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id={styles.container}>
          <div id={styles.titleBar}>
            <div id={styles.title}>{`${title}`}</div>
            <div id={styles.image} onClick={onClose}>
              <img src={image} alt='X' />
            </div>
          </div>
          <div id={styles.contents}>
            <input
              id={styles.input}
              placeholder={`${input}`}
              maxLength={12}
              {...register('buildQuery', { required: true, maxLength: 12 })}
              onChange={(e) => {
                setValue('buildQuery', e.target.value);
                setInputLength(e.target.value.length);
              }}
            />
            <div id={styles.charCounter}>{`(${inInputLength}/12)`}</div>
          </div>
        </div>
        <button
          type='submit'
          className={isState ? styles.submit : styles.button}
        >
          {`${buttonTitle}`}
        </button>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BuildFactory;
