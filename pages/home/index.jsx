import { useEffect, useState } from 'react';
import { MdCreate, MdHome, MdSearch, MdNotifications } from 'react-icons/md';
import Link from 'next/link';
import { homeStyles } from '../../styles/home';
import Devit from '../../components/Devit';
import useAuth from 'hooks/useAuth';
import { fetchLatestDevits } from 'firebase/client';
import Head from 'next/head';

const Home = () => {
  const [feed, setFeed] = useState([]);
  const user = useAuth();

  console.log(feed);
  useEffect(() => {
    user && fetchLatestDevits().then(setFeed);
  }, [user]);

  return (
    <>
      <Head>
        <title>Inicio / Devter</title>
      </Head>
      <div className='container'>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {feed.map((devit) => (
            <Devit
              key={devit.id}
              img={devit.img}
              username={devit.username}
              name={devit.name}
              createdAt={devit.createdAt}
              avatar={devit.avatar}
              message={devit.message}
              id={devit.id}
            />
          ))}
        </section>
        <Link href='/compose/devtear'>
          <a>
            <span className='createDevit'>
              <MdCreate className='svgCreate' />
            </span>
          </a>
        </Link>
        <nav>
          <Link href='/home'>
            <a>
              <MdHome />
            </a>
          </Link>
          <Link href='#'>
            <a>
              <MdSearch />
            </a>
          </Link>
          <Link href=''>
            <a>
              <MdNotifications />
            </a>
          </Link>
        </nav>
      </div>
      <style jsx>{homeStyles}</style>
    </>
  );
};

export default Home;
