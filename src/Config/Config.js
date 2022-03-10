import * as firebase from 'firebase';

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCd5CHLWRlNxiRe1v8p4LojD1uBPcO9Cs8',
    authDomain: 'ecommerce-with-shopping-948f2.firebaseapp.com',
    projectId: 'ecommerce-with-shopping-948f2',
    storageBucket: 'ecommerce-with-shopping-948f2.appspot.com',
    messagingSenderId: '39522703598',
    appId: '1:39522703598:web:027c16c985cffbd752bbff',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
