import  {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MoviesPage from './components/MoviesPage/MoviesPage';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from './components/NotFoundView/NotFoundView';
import './App.css';

function App() {
  return (
    
    <div className="App">
    <Navigation/>  
    <Routes>
    <Route path="/" element={<HomePage />} exact></Route>
    <Route path="/movies" element={<MoviesPage />} exact></Route>
    <Route path="/movies/: moviesId/*" element={<MovieDetailsPage />}> </Route>
    <Route path="*" element={<NotFoundView/>} exact></Route>
        </Routes>
    
    </div>
  );
}

export default App;
