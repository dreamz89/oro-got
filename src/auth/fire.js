import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAGCCyTNh5wyL948Wdn9-1FvpXfDOtyf24',
  authDomain: "oro-got.firebaseapp.com",
  databaseURL: "https://oro-got.firebaseio.com",
  projectId: 'oro-got',
  storageBucket: '',
  messagingSenderId: "184367287906"
}

firebase.initializeApp(config)

export const firebaseAuth = firebase.auth
export const ref = firebase.database().ref()
