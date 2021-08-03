import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.roboto.medium};
  margin: 64px 0 24px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.roboto.regular};
  margin-left: 16px;
`;

export const Image = styled.Image`
  width: 156px;
  height: 156px;
`;
