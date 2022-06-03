import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:423958071031:web:8571d53e43a6e6223175f2",
    measurementId: "G-E4P92749Z8"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };






// database.ref('notes/-dsafads').update({
//     body: 'Buy food'
// })






// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });



// const firebaseNotes = {
//     notes: {
//         sedfa: {
//             title: 'first note',
//             body: 'this my first note'
//         },
//         asdfjsiadji: {
//             title: 'another note',
//             body: 'this my second note'
//         }
//     }
// };



// database().ref().set({
//     name: 'Conan Pan',
//     age: 18,
//     isSingle: false,
//     location: {
//         city: 'Chicago',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(() => {
//     console.log('failed');
// });

// // database.ref().set('This is my data');

// database.ref('age').set(19);
// database.ref('location/city')


// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data removed')
//     }).catch((e) => {
//         console.log('data not removed', e)
//     });

// database.ref('isSingle').set(null);

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// });


// database.ref()
//     .once('value')
//     .then(() => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('error',e)
//     })

