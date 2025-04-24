import { z } from 'zod';

const LoginSchema = z.object({
  loginId: z
    .string()
    .email({ message: '*영문, 숫자, @, _, - 만 사용 가능합니다.' })
    .min(8, { message: '*아이디는 필수입니다.' })
    .max(20, { message: '*아이디는 최대 20자까지 가능합니다.' })
    .regex(/^[a-zA-Z0-9@_-]+$/, {
      message: '*영문, 숫자, @, _, - 만 사용 가능합니다.',
    }),

  password: z
    .string()
    .min(8, { message: '*비밀번호는 최소 8자 이상이어야 합니다.' })
    .max(20, { message: '*비밀번호는 최대 20자까지 가능합니다.' })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: '*비밀번호는 영문과 숫자만 포함해야 합니다.',
    }),
});

export default LoginSchema;
