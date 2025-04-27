import { SignUpInput as styles } from '../../View/stylesheet';
import Button from '@shared/components/Button';
import Siren from '@shared/components/Siren';
import PtoryLogo from '@shared/components/PtoryLogo';
import { cancelIcon } from '../../assets';
import Modal from 'react-modal';
import {
  ButtonTypeStyles,
  PtoryLogoTypeStyles,
  SirenTypeStyles,
} from '../../Model/Mapping';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { useApiMutation } from '../../Model';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SignUpSchema } from '../../Model/Dto';
import { useNavigate } from 'react-router-dom';

type FormData = z.infer<typeof SignUpSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignUpSchema),
  });

  // const [showSiren, setShowSiren] = useState(true);

  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  // const closeModal = () => setModalOpen(false);
  const reDirAction = () => {
    navigate('/login');
  };

  const { mutation, isLoading, isError, isSuccess, responseData } =
    useApiMutation('POST');

  const onSubmit = (data: FormData) => {
    console.log('제출된 데이터:', data);
    openModal();
    mutation.mutate({
      mutateUrl: 'https://13.209.113.229.nip.io/api/signup',
      mutateNucleus: data,
    });
  };

  useEffect(() => {
    if (
      watch('password') !== watch('passwordCheck') &&
      watch('passwordCheck')
    ) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '*비밀번호가 일치하지 않아요.',
      });
    } else {
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordCheck')]);

  const memberIdValue = watch('memberId', '');
  const passwordValue = watch('password', '');
  const passwordCheckValue = watch('passwordCheck', '');
  const nameValue = watch('name', '');
  const name = useRef(nameValue);
  useEffect(() => {
    name.current = watch('name', '');
  }, [watch('name', '')]);
  const isButtonActive =
    memberIdValue.trim() !== '' &&
    passwordValue.trim() !== '' &&
    passwordCheckValue.trim() !== '' &&
    nameValue.trim() !== '';

  useEffect(() => {
    if (isSuccess) {
      console.log('Response:', responseData);
    }
    if (isLoading) {
      console.log('Response:', responseData);
    }
    if (isError) {
      console.error('Error occurred during mutation');
    }
  }, [isSuccess, isLoading, isError, responseData]);

  return (
    <div id={styles.container}>
      <div id={styles.contents}>
        <div id={styles.logo}>
          <PtoryLogo styles={PtoryLogoTypeStyles} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id={styles.inputContainer}>
            <div className={styles.inputContents}>
              <div className={styles.inputText}>
                아이디<span>*</span>
              </div>
              <div
                className={errors.memberId ? styles.inputError : styles.input}
              >
                <input
                  type='email'
                  placeholder='ptory@example.com'
                  {...register('memberId')}
                />
              </div>
              {errors.memberId && <p>{errors.memberId.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div className={styles.inputText}>
                비밀번호<span>*</span>
              </div>
              <div
                className={errors.password ? styles.inputError : styles.input}
              >
                <input
                  type='password'
                  placeholder='영문, 숫자를 포함한 8~20자리 이내'
                  {...register('password')}
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div className={styles.inputText}>
                비밀번호 확인<span>*</span>
              </div>
              <div
                className={
                  errors.passwordCheck ? styles.inputError : styles.input
                }
              >
                <input
                  type='password'
                  placeholder='비밀번호 확인'
                  {...register('passwordCheck')}
                />
              </div>
              {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div className={styles.inputText}>
                이름<span>*</span>
              </div>
              <div className={errors.name ? styles.inputError : styles.input}>
                <input
                  type='text'
                  placeholder='8자 이내'
                  {...register('name')}
                />
              </div>
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          </div>
          <button type='submit' disabled={isLoading}>
            <Button
              styles={ButtonTypeStyles}
              title='가입하기'
              image=''
              state={isButtonActive}
              functions={() => {
                console.log('test');
              }}
            />
          </button>
        </form>
      </div>
      {
        <Modal
          style={{
            content: {
              maxWidth: '350px',
              minWidth: '150px',
              width: '100%',
              maxHeight: '200px',
              minHeight: '100px',
              height: '100%',
            },
          }}
          isOpen={isModalOpen}
          onRequestClose={reDirAction}
          preventScroll
        >
          <div id={styles.siren}>
            <Siren
              styles={SirenTypeStyles}
              image={cancelIcon}
              title={name.current}
              alarm={'환영합니다!'}
              reDirAction={reDirAction}
            />
          </div>
        </Modal>
      }
    </div>
  );
};

export default LoginPage;
