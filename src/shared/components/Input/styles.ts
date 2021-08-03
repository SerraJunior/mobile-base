import FeatherIcon from 'react-native-vector-icons/Feather';

import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 8px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.danger};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `}
    flex-direction:row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const InitialText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0% 4% 0% 0%;
`;
