import { FooterTypeStyles } from '@mapping';
import { Footer } from '@shared/components';
import { Account as styled } from '@view/stylesheet';
import { backIcon } from '@assets';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <div className={styled.navigate}>
          <div
            className={styled.imageGroup}
            onClick={() => navigate('/myPage')}
          >
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>정보 수정</span>
          <div className={styled.imageGroup}></div>
        </div>
      </div>
      <div id={styled.contents}>
        <form>
          <div className={styled.inputContainer}>
            <div className={styled.inputContents}>
              <div className={styled.inputText}>
                현재 비밀번호<span>*</span>
              </div>
              <div className={styled.input}>
                <input
                  type='password'
                  placeholder='비밀번호를 입력해주세요.'
                  // {...register('password')}
                />
              </div>
              {/* <p>*올바르게 작성해주세요.</p> */}
              {/* {errors.password && <p>{errors.password.message}</p>} */}
            </div>
            <div className={styled.inputContents}>
              <div className={styled.inputText}>
                변경 비밀번호<span>*</span>
              </div>
              <div className={styled.input}>
                <input
                  type='password'
                  placeholder='영문, 숫자를 포함한 8~20자리 이내'
                  // {...register('password')}
                />
              </div>
              {/* <p>*올바르게 작성해주세요.</p> */}
              {/* {errors.password && <p>{errors.password.message}</p>} */}
            </div>
            <div className={styled.inputContents}>
              <div className={styled.inputText}>
                변경 비밀번호 확인<span>*</span>
              </div>
              <div className={styled.input}>
                <input
                  type='password'
                  placeholder='비밀번호 확인'
                  // {...register('passwordCheck')}
                />
              </div>
              {/* <p>*올바르게 작성해주세요.</p> */}
              {/* {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>} */}
            </div>
          </div>
          <div className={styled.buttonContainer}>
            <button
              type='submit'
              // onClick={handleSubmit(onSubmit)}
            >
              확인
            </button>
          </div>
        </form>
        <div id={styled.nickname}>닉네임 수정</div>
        <form>
          <div className={styled.inputContainer}>
            <div className={styled.inputContents}>
              <div className={styled.inputText}>
                변경 닉네임<span>*</span>
              </div>
              {/* <div className={errors.name ? styled.inputError : styled.input}> */}
              <div className={styled.input}>
                <input
                  type='text'
                  placeholder='8자 이내'
                  // {...register('name')}
                />
              </div>
              {/* <p>*올바르게 작성해주세요.</p> */}
              {/* {errors.name && <p>{errors.name.message}</p>} */}
            </div>
          </div>
          <div className={styled.buttonContainer}>
            <button
              type='submit'
              // style={{ backgroundColor: 'var(--primary-color)' }} // 추후 조건 부여
              // onClick={handleSubmit(onSubmit)}
            >
              확인
            </button>
          </div>
        </form>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default Account;
