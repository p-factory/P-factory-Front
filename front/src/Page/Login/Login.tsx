import { useEffect, useState } from 'react';
import { Login as styles } from '../../View/stylesheet';
import Button from '@shared/components/Button';
import PtoryLogo from '@shared/components/PtoryLogo';
import { ButtonTypeStyles, PtoryLogoTypeStyles } from '../../Model/Mapping';
import {
  spannerIcon,
  spannerIconGray,
  openEyeIcon,
  closeEyeIcon,
  // backgroundMax,
  // backgroundSmall,
} from '../../assets';
import { useForm } from 'react-hook-form';
import { useApiMutation } from '../../Model';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LoginSchema } from '../../Model/Dto';

// interface FormData {
//   loginId: string;
//   password: string;
// }

// Zod 스키마 정의
type FormData = z.infer<typeof LoginSchema>;

const LoginPage = () => {
  // const isMobile = useDynamicDisplay(800);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  // id와 password 필드의 값을 감시
  const idValue = watch('loginId', '');
  const passwordValue = watch('password', '');

  const { mutation, isLoading, isError, isSuccess, responseData } =
    useApiMutation('POST');

  const onSubmit = (data: FormData) => {
    console.log('제출된 데이터:', data);
    mutation.mutate({
      mutateUrl: 'https://13.209.113.229.nip.io/api/login',
      mutateNucleus: data,
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  // 두 입력 필드에 값이 존재하면 true, 아니면 false
  const isButtonActive = idValue.trim() !== '' && passwordValue.trim() !== '';

  useEffect(() => {
    if (isSuccess) {
      console.log('Response:', responseData);
      navigate('/');
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
      {/* <picture>
        <source srcSet={backgroundSmall} media='(max-width: 500px)' />
      </picture>
      <img
        id={styles.background}
        src={!isMobile ? backgroundMax : backgroundSmall}
        alt='ptory-background'
        // width={1920}
      /> */}
      <div id={styles.contents}>
        <div id={styles.logo}>
          <PtoryLogo styles={PtoryLogoTypeStyles} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id={styles.inputContainer}>
            <div className={styles.inputContents}>
              <div
                className={errors.loginId ? styles.inputError : styles.input}
              >
                <input
                  type='text'
                  placeholder='아이디를 입력하세요.'
                  {...register('loginId')}
                />
              </div>
              {errors.loginId && <p>{errors.loginId.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div
                className={errors.password ? styles.inputError : styles.input}
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='비밀번호를 입력하세요.'
                  {...register('password')}
                />
                <img
                  id={styles.eyeIcon}
                  src={showPassword ? openEyeIcon : closeEyeIcon}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>
          <button type='submit' disabled={isLoading}>
            <Button
              styles={ButtonTypeStyles}
              title='로그인'
              image={isButtonActive ? spannerIcon : spannerIconGray}
              state={isButtonActive}
              functions={() => {
                console.log('test');
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
