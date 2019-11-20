import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import env from '../../firebaseEnv';

const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
};

firebase.initializeApp(firebaseConfig);

export function gmailLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider).then((result) => {
    const userText = JSON.stringify(result.additionalUserInfo.profile);

    localStorage.setItem('user', userText);

    return result.additionalUserInfo.profile;
  }).catch((error) => {
    throw new Error(error);
  });
}

export function logOut() {
  firebase.auth().signOut();
  localStorage.removeItem('user');
}

export default firebase;
