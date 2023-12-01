import{getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAdgFXzK4yq2wepZPI08RP8USgn2CKFw5s",
    authDomain: "movies-villa-1c044.firebaseapp.com",
    databaseURL: "https://movies-villa-1c044-default-rtdb.firebaseio.com",
    projectId: "movies-villa-1c044",
    storageBucket: "movies-villa-1c044.appspot.com",
    messagingSenderId: "210684666920",
    appId: "1:210684666920:web:f3892af1bd879d0089811d"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
//app store if app open than return open app other wise open new app

const firestore = getFirestore(app);

const storage = getStorage(app);

export {app,firestore,storage}

