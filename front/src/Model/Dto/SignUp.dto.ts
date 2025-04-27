import { z } from 'zod';

const SignUpSchema = z
  .object({
    memberId: z
      .string()
      .email({ message: '*영문, 숫자, @, _, - 만 사용 가능합니다.' })
      .min(8, { message: '*아이디는 필수입니다. 최소 8자부터 입니다.' })
      .max(20, { message: '*아이디는 최대 20자까지 가능합니다.' })
      .regex(/^[a-zA-Z0-9@_\-.]+$/, {
        message: '*영문, 숫자, @, _, - 만 사용 가능합니다.',
      }),

    password: z
      .string()
      .min(8, { message: '*비밀번호는 필수입니다. 최소 8자부터 입니다.' })
      .max(20, { message: '*비밀번호는 최대 20자까지 가능합니다.' })
      .regex(/^[a-zA-Z0-9]+$/, {
        message: '*영문, 숫자를 포함한 8~20자리 이내로 입력해주세요.',
      }),

    passwordCheck: z
      .string()
      .min(1, { message: '*비밀번호 확인은 필수입니다.' }),

    name: z
      .string()
      .min(1, { message: '*닉네임은 필수입니다.' })
      .max(20, { message: '*닉네임은 최대 20자까지 가능합니다.' })
      .regex(/^[a-zA-Z0-9]+$/, {
        message: '*올바르게 작성해주세요.',
      }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '*비밀번호가 일치하지 않아요.',
  });

export default SignUpSchema;
