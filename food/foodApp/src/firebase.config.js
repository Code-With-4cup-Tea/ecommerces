import { getApp,getApps,initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBWKz0yGhVgGOjyuBWdZ6l99wgzVDZVvus",
    authDomain: "efoodapp-4e3c8.firebaseapp.com",
    databaseURL: "https://efoodapp-4e3c8-default-rtdb.firebaseio.com",
    projectId: "efoodapp-4e3c8",
    storageBucket: "efoodapp-4e3c8.appspot.com",
    messagingSenderId: "678038702761",
    appId: "1:678038702761:web:439e83aef2ac524ebd37b8"
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  // this help to avoid launch new app on every single refresh 

  //below for firestore or db information

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  //for exporting below

  export {app,firestore,storage};