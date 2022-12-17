import { createContext, FC, ReactNode, useState } from 'react';
import type { TAuthenticationContext, TAuthenticationState } from './Authentication.d';

export const AuthenticationContext = createContext<TAuthenticationContext>({ state: 'loading' });

type Props = {
  children: ReactNode | ReactNode[];
};

const AuthenticationProvider: FC<Props> = ({ children }) => {
  const [state] = useState<TAuthenticationState>('loading');

  return (
    <AuthenticationContext.Provider value={{ state }}>{children}</AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
