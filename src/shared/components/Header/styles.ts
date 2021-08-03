import { RFPercentage } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

interface HeaderContainerProps {
  height?: number;
}

export const HeaderComponent = styled.View<HeaderContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 36%;
  width: 100%;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  ${(props) =>
    props.height &&
    css`
      height: ${RFPercentage(props.height)}px;
    `}
`;
