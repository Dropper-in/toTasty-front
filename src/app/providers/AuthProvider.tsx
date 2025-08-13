'use client';

import { createContext, useEffect } from 'react';
import { useUserStore } from '@/entities/user';
import { useAccessTokenQuery } from '@/entities/access-token';

const AuthContext = createContext(null);
export function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const accessToken = useUserStore((state) => state.accessToken);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const { isPending, data } = useAccessTokenQuery(!accessToken && isLoggedIn);

  useEffect(() => {
    if (
      data &&
      isLoggedIn &&
      (!accessToken || accessToken.length === 0 || accessToken !== data.accessToken)
    ) {
      setAccessToken(data.accessToken);
    }
  }, [data, isLoggedIn, accessToken, setAccessToken]);

  if (isPending) {
    return <div />;
  }

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}
