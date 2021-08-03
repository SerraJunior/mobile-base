import React, { useCallback, useRef } from 'react';
import {
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
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import signInValidation from '@modules/authorization/validations/signInValidation';

import Button from '@shared/components/Button';
import Input from '@shared/components/Input';

import { useAuth } from '@hooks/authorization.hooks';

import logoImg from '../../../../assets/b3.png';

import {
  Container,
  Title,
  CreateAccountButton,
  CreateAccountText,
  Image,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const theme = useTheme();
  const passwordInputRef = useRef<TextInput>(null);
  const formikRef = useRef<FormikProps<SignInFormData>>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          Toast.show({
            type: 'error',
            text1: 'Erro ao realizar login',
            text2: err.message,
          });

          return;
        }
      }
    },
    [signIn],
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
              <Title>Faça seu logon</Title>
            </View>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={signInValidation}
              innerRef={formikRef}
              onSubmit={handleSignIn}>
              {({ handleChange, values, errors, isValid, submitForm }) => (
                <>
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
      <CreateAccountButton onPress={() => navigation.navigate('Cadastro')}>
        <Icon name="log-in" size={20} color={theme.colors.secondary} />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
