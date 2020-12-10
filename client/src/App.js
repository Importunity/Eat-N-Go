import { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/header/Navbar';
import { loadUser } from './flux/actions/auth';
import store from './flux/store.js';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <div className="main-container">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
