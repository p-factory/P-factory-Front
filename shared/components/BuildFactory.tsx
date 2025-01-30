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
              {...register('buildQuery', { required: true })}
              onChange={(e) => setValue('buildQuery', e.target.value)}
            />
            <div id={styles.charCounter}>(0/12)</div>
          </div>
        </div>
        <div className={isState ? styles.submit : styles.button}>
          <div onClick={handleSubmit(onSubmit)}>{`${buttonTitle}`}</div>
        </div>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BuildFactory;
