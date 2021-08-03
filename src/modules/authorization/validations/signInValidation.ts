import * as Yup from 'yup';

const signInValidation = Yup.object().shape({
  email: Yup.string()
    .required('O Email é obrigatório')
    .email('O e-mail não está válido'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(8, 'A senha precisa ter no mínimo 8 caracteres'),
});

export default signInValidation;
