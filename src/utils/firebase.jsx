import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDEQ5siZmOUY-lI-N04yprxYHwwfqgnSS8',
  authDomain: 'image-gallery-394400.firebaseapp.com',
  projectId: 'image-gallery-394400',
  storageBucket: 'image-gallery-394400.appspot.com',
  messagingSenderId: '703934404327',
  appId: '1:703934404327:web:02c506f863344cf51df442',
  measurementId: 'G-RWTX3YQ4WG',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app);
export const storage = getStorage(app);