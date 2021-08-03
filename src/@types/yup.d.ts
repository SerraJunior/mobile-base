import { MixedSchema as YupMixedSchema } from 'yup';

declare module 'yup' {
  interface MixedSchema {
    cpf(digits: string): YupMixedSchema;
  }
}
