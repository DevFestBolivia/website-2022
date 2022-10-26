import { firestore } from '../firebase-config';

const references = [
  firestore.collection('blog'),
  firestore.collection('config'),
  firestore.collection('gallery'),
  firestore.collection('partners'),
  firestore.collection('previousSpeakers'),
  firestore.collection('schedule'),
  firestore.collection('sessions'),
  firestore.collection('speakers'),
  firestore.collection('team'),
  firestore.collection('tickets'),
  firestore.collection('videos'),
];

references.forEach((reference) => firestore.recursiveDelete(reference));
