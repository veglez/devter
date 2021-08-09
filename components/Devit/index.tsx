import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { GoVerified } from 'react-icons/go';
import { devitStyles } from './styles';
import useTimeAgo from 'hooks/useTimeAgo';

const Devit: FunctionComponent<firebaseFetchDevit> = ({
  username,
  name,
  avatar,
  message,
  createdAt,
  img,
  id,
}): ReactElement => {
  const timeago = useTimeAgo(createdAt);
  console.log(img);
  return (
    <>
      <article key={id}>
        <div className='picture'>
          <Image
            alt={`${username} avatar`}
            src={avatar}
            width={49}
            height={49}
            className='devit_avatar'
          />
        </div>
        <div className='body'>
          <header>
            <div className='header__info'>
              <div className='primary_data'>
                <span>{name}</span>
                <GoVerified className='verified-icon' />
              </div>
              <div className='secondary_data'>
                <span>{username}</span>
                <time>{timeago}</time>
              </div>
            </div>
            <MdMoreHoriz className='more_icon' />{' '}
          </header>
          <p>{message}</p>
          {img && <img className='post_image' src={img} />}
        </div>
      </article>
      <style jsx>{devitStyles}</style>
      <style jsx>{`
        .post_image {
          width: 90%;
          height: auto;
          display: inline-block;
          margin: 12px auto 0;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};

export default Devit;
