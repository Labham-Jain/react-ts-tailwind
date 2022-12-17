export type TAuthenticationState = 'loading' | 'unauthenticated' | 'authenticated';

export type TAuthenticationContext = {
  state: TAuthenticationState;
};
