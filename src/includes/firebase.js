import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA31J7CNaIEPHGDtmMQQwufS53zDKBuoHs',
  authDomain: 'music-aa167.firebaseapp.com',
  projectId: 'music-aa167',
  storageBucket: 'music-aa167.appspot.com',
  messagingSenderId: '945024920510',
  appId: '1:945024920510:web:70dc0eccbfff1a94d227ef'
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
