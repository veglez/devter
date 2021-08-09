import { onAuthUserStateChanged } from 'firebase/client';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const useAuth = (): user => {
  const [user, setUser] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthUserStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === null && router.replace('/');
  }, [user]);

  return user;
};

export default useAuth;
