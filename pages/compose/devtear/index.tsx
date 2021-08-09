import { FormEvent, ReactElement, useState, useEffect, DragEvent } from 'react';
import Button from 'components/Button';
import useAuth from 'hooks/useAuth';
import { devtearStyles } from 'styles/devtear';
import Image from 'next/image';
import { addDevit, uploadImage } from 'firebase/client';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import firebase from 'firebase';

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

const Devtear = (): ReactElement => {
  const user = useAuth();
  const [msg, setMsg] = useState('');
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [task, setTask] = useState<firebase.storage.UploadTask | null>(null);
  const [imgUrl, setImgUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (task) {
      const onProgress = () => {
        console.log('onProgress');
      };
      const onError = () => {
        console.log('onError');
      };

      const onComplete = () => {
        console.log('on coimplete');
        task.snapshot.ref.getDownloadURL().then(setImgUrl);
      };

      task.on('state_changed', onProgress, onError, onComplete);
    }
  }, [task]);

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setMsg(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addDevit({
      avatar: user.avatar,
      message: msg,
      userId: user.uid,
      username: user.username,
      name: user.name,
      img: imgUrl,
    });
    router.push('/');
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };
  const handleDrop = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
    const file = e.dataTransfer.files[0];
    const task = uploadImage(file);
    setTask(task);
  };

  return (
    <>
      <Head>
        <title>Crear nuevo devit /devter</title>
      </Head>
      <div>
        <form action='' onSubmit={handleSubmit}>
          <div className='devtear_header'>
            {user && (
              <Image
                src={user.avatar}
                alt={`${user.username} avatar`}
                width={48}
                height={48}
              />
            )}
            <textarea
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              name='devtear'
              id='devtear_content'
              placeholder='¿Qué está pasando?'
              onInput={handleInput}
              value={msg}
            ></textarea>
          </div>
          {imgUrl && (
            <div className='wrapper_image'>
              <button onClick={() => setImgUrl(null)}>X</button>
              <img src={imgUrl} className='uploaded_image2publish' />
            </div>
          )}
          <div>
            <Button
              disabled={msg.length === 0}
              onClick={() => {
                console.log('click');
              }}
            >
              Devitear
            </Button>
          </div>
        </form>
        <style jsx>{devtearStyles}</style>
        <style jsx>{`
          textarea {
            width: 100%;
            margin: 8px;
            min-height: 200px;
            padding: 16px;
            outline: none;
            border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
              ? '3px dashed #000a'
              : '3px solid transparent'};
            resize: none;
            font-size: 1.6rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default Devtear;
