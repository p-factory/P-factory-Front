import { Login as styles } from '../View/login';
import Button from '@shared/components/Button';
import PtoryLogo from '@shared/components/PtoryLogo';
import { ButtonTypeStyles, PtoryLogoTypeStyles } from '../Model/Mapping';
import {
  spannerIcon,
  spannerIconGray,
  openEyeIcon,
  closeEyeIcon,
} from '../assets';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  id: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  // id와 password 필드의 값을 감시
  const idValue = watch('id', '');
  const passwordValue = watch('password', '');

  const onSubmit = (data: FormData) => {
    console.log('제출된 데이터:', data);
  };

  const [showPassword, setShowPassword] = useState(false);
  // 두 입력 필드에 값이 존재하면 true, 아니면 false
  const isButtonActive = idValue.trim() !== '' && passwordValue.trim() !== '';

  return (
    <div id={styles.container}>
      <div id={styles.contents}>
        <div id={styles.logo}>
          <PtoryLogo styles={PtoryLogoTypeStyles} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id={styles.inputContainer}>
            <div className={styles.inputContents}>
              <div className={errors.id ? styles.inputError : styles.input}>
                <input
                  type='text'
                  placeholder='아이디를 입력하세요.'
                  {...register('id', {
                    required: '*아이디는 필수입니다.',
                    pattern: {
                      value: /^[a-zA-Z]{1,8}$/,
                      message: '*영문 8자 이내',
                    },
                  })}
                />
              </div>
              {errors.id && <p>{errors.id.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div
                className={errors.password ? styles.inputError : styles.input}
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='비밀번호를 입력하세요.'
                  {...register('password', {
                    required: '*비밀번호는 필수입니다.',
                    pattern: {
                      value: /^[a-zA-Z0-9]{8,20}$/,
                      message: '*영문, 숫자를 포함한 8~20자리 이내',
                    },
                  })}
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
          <button type='submit'>
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
