import * as Yup from 'yup';

const signUpValidation = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um email válido'),
  password: Yup.string().required().min(6, 'No mínimo 6 dígitos'),
});

export default signUpValidation;
