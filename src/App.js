import logo from './logo.svg';
import './App.css';

function App() {
  console.log("taha")
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <header className="App-header">
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
        <p>
          {process.env.REACT_APP_API_KEY}
        </p>
        <p>
          {process.env.REACT_APP_API_PASS}
        </p>
        <p>
          {process.env.REACT_APP_PORT}
        </p>
      </header>
    </div>
  );
}

export default App;
