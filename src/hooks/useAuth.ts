import { AuthenticationContext } from '@contexts/Authentication';
import { useContext } from 'react';

const useAuth = () => useContext(AuthenticationContext);

export default useAuth;
