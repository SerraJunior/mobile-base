import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
`;
