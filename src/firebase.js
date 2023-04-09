// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

// export const auth = firebase.auth();
// export default firebase;





import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyCjaxLfMeAt-HiRF6XDM5pwAV6FVgC8Jd8",
//   authDomain: "auth-dev-react-c003c.firebaseapp.com",
//   projectId: "auth-dev-react-c003c",
//   storageBucket: "auth-dev-react-c003c.appspot.com",
//   messagingSenderId: "809880743035",
//   appId: "1:809880743035:web:26129ff963119b8ac406de"
// });

export const auth = app.auth();
export default app;

// REACT_APP_FIREBASE_DATABASE_URL = 