import React from 'react';

import { AuthProvider } from './authorization.hooks';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
