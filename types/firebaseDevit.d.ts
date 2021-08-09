type firebaseDevit = {
  avatar: string;
  message: string;
  name: string;
  userId: string;
  username: string;
  img: string;
};

type firebasePostDevit = {
  avatar: string;
  createdAt: firebase.firestore.Timestamp;
  likesCount: number;
  message: string;
  name: string;
  sharedCount: number;
  userId: string;
  username: string;
};

type firebaseFetchDevit = {
  avatar: string;
  createdAt: firebase.firestore.Timestamp;
  id: string;
  likesCount: number;
  message: string;
  name: string;
  sharedCount: number;
  userId: string;
  username: string;
  img: string;
};
