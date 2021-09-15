import './App.css';
import { Provider, useDispatch } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'
import Routes from './routes';
import { useEffect } from 'react';
import {getAllTemperaments} from './redux/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getAllTemperaments())
  }, [dispatch])
  return (
  

    <Router>
      <Routes />
    </Router>


  );
}

export default App;
