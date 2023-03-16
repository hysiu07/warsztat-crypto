import logo from './bitcoin.svg';
import './App.css';
import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Crypto rate</h1>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
