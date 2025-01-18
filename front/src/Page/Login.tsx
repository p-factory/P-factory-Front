import styles from '../View/Login.page.module.scss';
import Button from '@shared/components/Button';
import PtoryLogo from '@shared/components/PtoryLogo';
import { ButtonTypeStyles, PtoryLogoTypeStyles } from '../Model/Mapping';
import { spannerIcon } from '../assets';
import { TestSingleFunction } from '../Controller/Test.function';
import { useForm } from 'react-hook-form';

interface FormData {
  id: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log('제출된 데이터:', data);
  };
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
                  type='password'
                  placeholder='비밀번호를 입력하세요.'
                  {...register('password', {
                    required: '*비밀번호는 필수입니다.',
                    pattern: {
                      value: /^[a-zA-Z0-9]{8,20}$/,
                      message: '*영문, 숫자를 포함한 8~20자리 이내',
                    },
                  })}
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>
          <button type='submit'>
            <Button
              styles={ButtonTypeStyles}
              title='로그인'
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
