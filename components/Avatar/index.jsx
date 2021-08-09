import Image from 'next/image';
import { AvatarImage, AvatarStyles } from './styles';

const Avatar = ({ src, username }) => {
  return (
    <>
      <div>
        <Image
          className='avatar'
          width={50}
          height={50}
          src={src}
          alt="user's avatar"
        />
        {username && <p>{username}</p>}
      </div>
      <style jsx>{AvatarStyles}</style>
      <style global jsx>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default Avatar;
