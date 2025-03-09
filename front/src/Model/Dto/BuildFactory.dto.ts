import { z } from 'zod';

const BuildFactorySchema = z.object({
  bookName: z
    .string()
    .min(1, { message: '*최소 1자 이상부터 가능합니다.' })
    .max(12, { message: '*최대 12자까지 가능합니다.' }),
});

export default BuildFactorySchema;
