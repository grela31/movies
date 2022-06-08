// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, deleteDoc, collection, getDocs, writeBatch, getDoc, updateDoc, addDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuVLhl44NsaHTM5L8L0ydyNxc38eZoVBc",
  authDomain: "peliculas-jesus.firebaseapp.com",
  projectId: "peliculas-jesus",
  storageBucket: "peliculas-jesus.appspot.com",
  messagingSenderId: "400362932028",
  appId: "1:400362932028:web:b1d66c54a631c9caa8c039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getMovies() {
  const moviesCol = collection(db, 'movies');
  const snapshot = await getDocs(moviesCol);
  const movies = snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data()) }));
  return movies;
}

export async function getUsers() {
  const usersCol = collection(db, 'users');
  const snapshot = await getDocs(usersCol);
  const users = snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data()) }));
  return users;
}

export async function createUser(email, name, userId) {
  await setDoc(doc(db, "users", userId), {
    name,
    email
  });
}

export async function createMovie(title, director, year, storyline, poster) {
  await addDoc(collection(db, "movies"), {
    title, director, year, storyline, poster
  });
}

export async function deleteMovie(movieId) {
  await deleteDoc(doc(db, "movies", movieId));
}

export async function addFavoriteMovie(userId, movieId) {
  const userMoviesRef = doc(db, `users/${userId}/movies/${movieId}`);
  const movieUsersRef = doc(db, `movies/${movieId}/users/${userId}`);

  const batch = writeBatch(db);
  batch.set(userMoviesRef, {});
  batch.set(movieUsersRef, {});
  await batch.commit();
}


export async function removeFavoriteMovie(userId, movieId) {
  const userMoviesRef = doc(db, `users/${userId}/movies/${movieId}`);
  const movieUsersRef = doc(db, `movies/${movieId}/users/${userId}`);

  const batch = writeBatch(db);
  batch.delete(userMoviesRef);
  batch.delete(movieUsersRef);
  await batch.commit();
}

export async function updateMovieRating(movieId, rating) {
  const movieRef = doc(db, 'movies', movieId);

  await updateDoc(movieRef, { rating });
}


export async function getFavoriteMovies(userId) {
  const favoriteMovies = collection(db, `users/${userId}/movies`);

  const snapshot = await getDocs(favoriteMovies);
  const movieIds = snapshot.docs.map(doc => doc.id);

  const movieDocs = await Promise.all(
    movieIds.map(id => getDoc(doc(db, `movies/${id}`)))
  );


  return movieDocs.filter(doc => doc.exists).map(doc => ({ id: doc.id, ...doc.data() }));
}