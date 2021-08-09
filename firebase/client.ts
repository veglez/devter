import firebase from 'firebase';
import React from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyBB9E_4R-aeoKfrUzbge-XaSNUYp64DPHo',
  authDomain: 'devter-d5abf.firebaseapp.com',
  projectId: 'devter-d5abf',
  storageBucket: 'devter-d5abf.appspot.com',
  messagingSenderId: '430910504610',
  appId: '1:430910504610:web:913333ce69210b36b061fb',
  measurementId: 'G-DN6CD5B101',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuth = (user): user => {
  const { photoURL, email, displayName, uid } = user;
  return {
    avatar: photoURL,
    name: displayName,
    username: '@test_username',
    email,
    uid,
  };
};

export const Logout = (): Promise<void> => {
  return firebase.auth().signOut();
};

export const onAuthUserStateChanged = (
  onChange: React.Dispatch<React.SetStateAction<user>>
) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};

export const addDevit = (o: firebaseDevit) => {
  const data: firebasePostDevit = {
    ...o,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  };
  return db.collection('devits').add(data);
};

export const fetchLatestDevits = () => {
  return db
    .collection('devits')
    .orderBy('createdAt', 'desc')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const devit = doc.data();
        const { createdAt } = devit;
        const id = doc.id;
        const data = {
          ...devit,
          id,
          createdAt: +createdAt.toDate(),
        };
        return data;
      });
    })
    .catch(console.log);
};

export const uploadImage = (file): firebase.storage.UploadTask => {
  const ref = firebase.storage().ref(`image/${file.name}`);
  const task = ref.put(file);

  return task;
};
