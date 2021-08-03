import React, { useRef, useCallback } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';

import signUpValidation from '@modules/authorization/validations/signUpValidation';

import Button from '@shared/components/Button';
import Input from '@shared/components/Input';
import api from '@shared/services/api';

import logoImg from '../../../../assets/b3.png';

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInText,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const formikRef = useRef<FormikProps<SignUpFormData>>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        await api.post(`users`, data);

        Toast.show({
          type: 'success',
          text1: 'Cadastro realizado!',
          text2: 'Você já  pode fazer o seu logon no GoBarber!',
        });

        navigation.goBack();
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao cadastrar nome de usuário',
          text2: err.message,
        });
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image testID="login-image" source={logoImg} />
            <View>
              <Title>Faça seu cadastro</Title>
            </View>
            <Formik
              initialValues={{
                email: '',
                name: '',
                password: '',
              }}
              validationSchema={signUpValidation}
              innerRef={formikRef}
              onSubmit={handleSignUp}>
              {({ handleChange, values, errors, submitForm }) => (
                <>
                  <Input
                    autoCapitalize="words"
                    returnKeyType="next"
                    name="name"
                    icon="user"
                    onChangeText={handleChange('name')}
                    placeholder="Nome"
                    value={values.name}
                    error={errors.name}
                    onSubmitEditing={() => {
                      emailInputRef.current?.focus();
                    }}
                  />
                  <Input
                    autoCapitalize="none"
                    keyboardType="email-address"
                    name="email"
                    icon="mail"
                    value={values.email}
                    placeholder="E-mail"
                    onChangeText={handleChange('email')}
                    returnKeyType="next"
                    error={errors.email}
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus();
                    }}
                  />
                  <Input
                    ref={passwordInputRef}
                    onSubmitEditing={submitForm}
                    secureTextEntry
                    returnKeyType="send"
                    name="password"
                    value={values.password}
                    error={errors.password}
                    onChangeText={handleChange('password')}
                    icon="lock"
                    placeholder="Password"
                  />
                  <Button onPress={submitForm}>Entrar</Button>
                </>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignInButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para o login</BackToSignInText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
