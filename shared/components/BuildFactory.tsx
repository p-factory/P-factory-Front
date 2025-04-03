import { Platform, Text } from 'react-native';
import { BuildFactoryStylesLocal } from '../style';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useApiMutation } from '../../front/src/Model';
import { useDispatch } from 'react-redux';
import { ResetMode } from '../store/slice/factoryModeSlice';

import { z } from 'zod';
import { BuildFactorySchema } from '../../front/src/Model/Dto';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof BuildFactorySchema>;

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
    // const [isState, setState] = useState<boolean>(false);
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(BuildFactorySchema),
      mode: 'onChange',
    });
    const dispatch = useDispatch();

    const sesscctionMode = sessionStorage.getItem('mode');

    const inInputLength = watch('bookName', '');

    const isButtonActive = inInputLength.trim() !== '';

    const { mutation, isLoading, isError, isSuccess, responseData } =
      useApiMutation(sesscctionMode !== 'edit' ? 'POST' : 'PUT');

    //다른 전역 상태 API 관리 방식과는 전혀 다른 특이 케이스 어떻게 관리하면 좋을지 고민이 필요하다.
    const onSubmit = (data: FormData) => {
      console.log('생성된 Factory:', data.bookName);
      mutation.mutate(
        {
          mutateUrl:
            sesscctionMode !== 'edit'
              ? 'https://13.209.113.229.nip.io/api/wordbook/create'
              : `https://13.209.113.229.nip.io/api/wordbook/update/${sessionStorage.getItem('fId')}`,
          mutateNucleus: data,
        },
        { onSuccess: () => sessionStorage.removeItem('mode') },
      );
    };

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
        <div id={styles.container}>
          <div id={styles.titleBar}>
            <div id={styles.title}>{`${title}`}</div>
            <div
              id={styles.image}
              onClick={() => {
                onClose();
                sessionStorage.removeItem('title');
                dispatch(ResetMode());
              }}
            >
              <img src={image} alt='X' />
            </div>
          </div>
          <div id={styles.contents}>
            <input
              id={styles.input}
              placeholder={`${input}`}
              maxLength={12}
              {...register('bookName')}
            />

            <div id={styles.charCounter}>
              <div>
                {errors.bookName && (
                  <p
                    id='error'
                    style={{
                      color: 'red',
                      fontSize: '12px',
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {errors.bookName.message}
                  </p>
                )}
              </div>
              <p>{`(${inInputLength.length}/12)`}</p>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className={isButtonActive ? styles.submit : styles.button}
          disabled={isLoading}
        >
          {`${buttonTitle}`}
        </button>
      </form>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BuildFactory;
