import styles from '../View/SignUpInput.page.module.scss';
import Button from '@shared/components/Button';
import PtoryLogo from '@shared/components/PtoryLogo';
import { ButtonTypeStyles, PtoryLogoTypeStyles } from '../Model/Mapping';
import { spannerIcon } from '../assets';
import { TestSingleFunction } from '../Controller/Test.function';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

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
  const onSubmit = (data: FormData) => {
    console.log('제출된 데이터:', data);
  };

  // [비밀번호] value 수정 시 이미 입력된 [비밀번호 확인] value 도 같이 유효성 체크
  useEffect(() => {
    if (
      watch('password') !== watch('passwordCheck') &&
      watch('passwordCheck')
    ) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다',
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordCheck')]);

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
                    // required: '*아이디는 필수입니다.',
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
                    // required: '*비밀번호는 필수입니다.',
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
                    validate: {
                      matchPassword: (value) =>
                        value === getValues('password') ||
                        '비밀번호가 일치하지 않습니다',
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
                    // required: '*닉네임은 필수입니다.',
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
              image={spannerIcon}
              functions={() => {
                console.log(TestSingleFunction('test'));
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
