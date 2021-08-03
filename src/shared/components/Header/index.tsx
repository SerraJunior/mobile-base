import React from 'react';
import { ViewProps } from 'react-native';

import { HeaderComponent } from './styles';

interface HeaderProps extends ViewProps {
  height?: number;
}

const Header: React.FC<HeaderProps> = ({ height, children }) => {
  return <HeaderComponent height={height}>{children}</HeaderComponent>;
};

export default Header;
