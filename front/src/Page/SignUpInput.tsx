import styles from '../View/SignUpInput.page.module.scss';
import Button from '@shared/components/Button';
import Siren from '@shared/components/Siren';
import PtoryLogo from '@shared/components/PtoryLogo';
import Assets from '../assets/assets';
import {
  ButtonTypeStyles,
  PtoryLogoTypeStyles,
  SirenTypeStyles,
} from '../Model/Mapping';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

interface FormData {
  id: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const [showSiren, setShowSiren] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('제출된 데이터:', data);
    setShowSiren(true);
  };

  // [비밀번호] value 수정 시 이미 입력된 [비밀번호 확인] value 도 같이 유효성 체크
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
      // 비밀번호 일치시 오류 제거
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordCheck')]);

  // id와 password 필드의 값을 감시
  const idValue = watch('id', '');
  const passwordValue = watch('password', '');
  const passwordCheckValue = watch('passwordCheck', '');
  const nicknameValue = watch('nickname', '');

  // 두 입력 필드에 값이 존재하면 true, 아니면 false
  const isButtonActive =
    idValue.trim() !== '' &&
    passwordValue.trim() !== '' &&
    passwordCheckValue.trim() !== '' &&
    nicknameValue.trim() !== '';

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
              <div className={errors.id ? styles.inputError : styles.input}>
                <input
                  type='text'
                  placeholder='영문 8자 이내'
                  {...register('id', {
                    required: '*아이디는 필수입니다.',
                    pattern: {
                      value: /^[a-zA-Z]{1,8}$/,
                      message: '*올바르게 작성해주세요.',
                    },
                  })}
                />
              </div>
              {errors.id && <p>{errors.id.message}</p>}
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
                  {...register('password', {
                    required: '*비밀번호는 필수입니다.',
                    pattern: {
                      value: /^[a-zA-Z0-9]{8,20}$/,
                      message:
                        '*영문, 숫자를 포함한 8~20자리 이내로 입력해주세요.',
                    },
                  })}
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div className={styles.inputText}>
                비밀번호 확인<span>*</span>
              </div>
              <div
                className={errors.password ? styles.inputError : styles.input}
              >
                <input
                  type='password'
                  placeholder='비밀번호 확인'
                  {...register('passwordCheck', {
                    required: '*비밀번호 확인은 필수입니다.',
                    validate: {
                      matchPassword: (value) =>
                        value === getValues('password') ||
                        '*비밀번호가 일치하지 않아요.',
                    },
                  })}
                />
              </div>
              {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
            </div>
            <div className={styles.inputContents}>
              <div className={styles.inputText}>
                닉네임<span>*</span>
              </div>
              <div
                className={errors.nickname ? styles.inputError : styles.input}
              >
                <input
                  type='text'
                  placeholder='8자 이내'
                  {...register('nickname', {
                    required: '*닉네임은 필수입니다.',
                    pattern: {
                      value: /^[a-zA-Z0-9]{1,8}$/,
                      message: '*올바르게 작성해주세요.',
                    },
                  })}
                />
              </div>
              {errors.nickname && <p>{errors.nickname.message}</p>}
            </div>
          </div>
          <button type='submit'>
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
      {showSiren && (
        <div id={styles.siren}>
          <Siren
            styles={SirenTypeStyles}
            image={Assets.cancelIcon}
            title={'토리님'}
            alarm={'환영합니다!'}
          />{' '}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
