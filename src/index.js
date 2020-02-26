import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase.
firebase.initializeApp({
	apiKey: 'AIzaSyBUoJfHAK5lE77-2Ej1b0Wsc9P4ZoNg4YU',
	authDomain: 'evernote-clone-4490e.firebaseapp.com',
	databaseURL: 'https://evernote-clone-4490e.firebaseio.com',
	projectId: 'evernote-clone-4490e',
	storageBucket: 'evernote-clone-4490e.appspot.com',
	messagingSenderId: '404264415196',
	appId: '1:404264415196:web:41847a3c0ca08b10aaa919'
});

// Render the app.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
