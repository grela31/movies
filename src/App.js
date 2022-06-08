import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app, createUser } from './utils/firebase';
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SnackbarProvider} from 'notistack';

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FavoriteMovies from './pages/FavoriteMovies';
import Users from './pages/Users';
import AddMovie from './pages/AddMovie';


function App() {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const authentication = getAuth();

    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        sessionStorage.setItem('Email', email);
        sessionStorage.setItem('UserId', response.user.uid);
        navigate('/')
      })
  }

  const handleRegister = (email, password, name) => {
    const authentication = getAuth();

    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log('registered');
        createUser(email, name, response.user.uid).then(() => {
          console.log('created');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          sessionStorage.setItem('Email', email);
          sessionStorage.setItem('UserId', response.user.uid);
          navigate('/');
        })

      })
      .catch((err) => { console.log({ err }) })
  }
  return (
    <div className="App">
      <Navbar />
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/add-movie' element={<AddMovie />} />
          <Route path='/peliculas' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/my-favorites' element={<FavoriteMovies />} />
          <Route path='/login' element={<Form onSubmit={handleLogin} title="Login" />} />
          <Route path='/register' element={<Form isRegister={true} onSubmit={handleRegister} title="Register" />} />
        </Routes>
      </SnackbarProvider>
      <Footer />

    </div>
  );
}

export default App;