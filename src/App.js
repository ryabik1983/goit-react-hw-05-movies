import  {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MoviesPage from './components/Movies/MoviesPage';
import HomePage from './components/HomePage/HomePage';

// npm ci
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route path="/">
        <HomePage/>
      </Route>
      <Route path="/movies">
        <MoviesPage/>
      </Route>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
