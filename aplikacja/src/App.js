import './App.css';
import { useState } from 'react';
import { Login } from './components/Login';
import { User } from './components/User';

const TOKEN_INITIAL_VALUE = null;
const WELCOME_LABEL = 'Witaj świecie';
const LOGOUT_LABEL = 'Wyloguj';

function App() {
  const [token, setToken] = useState(TOKEN_INITIAL_VALUE);

  const logoutHandler = () => {
    setToken(TOKEN_INITIAL_VALUE);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{WELCOME_LABEL}</h1>
        {token ?
          <>
            <User token={token} />
            <button onClick={logoutHandler}>{LOGOUT_LABEL}</button>
          </>
          : <Login setToken={setToken} />}
      </header>
    </div>
  );
}

export default App;
