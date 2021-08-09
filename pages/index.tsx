import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useEffect, ReactElement } from 'react';
import Button from '../components/Button';
import { loginWithGithub } from '../firebase/client';
import { Header } from '../styles/Index';

export default function Home(): ReactElement {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('/home');
  }, [user]);

  const handleLogin = () => {
    loginWithGithub().then((u) => {
      console.log('from login,', u);
    });
  };

  return (
    <>
      <header>
        <Image
          className='header__img'
          src={'https://picsum.photos/200'}
          alt='random'
          width={200}
          height={200}
        />
        <div className='headers'>
          <h1>Devter</h1>
          <h2>
            Talk about development <span>with others developers 👨‍💻👩‍💻</span>
          </h2>
        </div>
        {user === null && (
          <Button disabled={false} onClick={handleLogin}>
            <Image
              src={'/github.svg'}
              width={24}
              height={24}
              alt='github icon'
            />
            Login with github
          </Button>
        )}
        {user === undefined && (
          <Image src='/spinner.gif' alt='loading' width={50} height={50} />
        )}
      </header>

      <style jsx>{Header}</style>
    </>
  );
}
