import useAuth from '@hooks/useAuth';
import { FC, ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode | ReactNode[];
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { state } = useAuth();
  if (state === 'authenticated') {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default ProtectedRoute;
