import { FunctionComponent, ReactNode } from 'react';
import AuthenticationProvider from './Authentication';

type Props = {
  children: ReactNode | ReactNode[];
};

const Contexts: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <AuthenticationProvider>{children}</AuthenticationProvider>
    </>
  );
};

export default Contexts;
