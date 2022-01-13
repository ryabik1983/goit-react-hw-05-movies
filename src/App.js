import  {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MoviesPage from './components/Movies/MoviesPage';
import HomePage from './components/HomePage/HomePage';
import MoviesDescriptionPage from './components/MoviesDescriptionPage/MoviesDescriptionPage';
import NotFoundView from './components/NotFoundView/NotFoundView';
import './App.css';

function App() {
  return (
    
    <div className="App">
    <Navigation/>  
    <Routes>
    <Route path="/" element={<HomePage />} exact></Route>
    <Route path="/movies" element={<MoviesPage />} exact></Route>
    <Route path="/movies/: moviesId/*" element={<MoviesDescriptionPage />}> </Route>
    <Route path="*" element={<NotFoundView/>} exact></Route>
        </Routes>
    
    </div>
  );
}

export default App;
