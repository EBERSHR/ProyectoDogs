import './App.css';
import Landing from './components/Landing';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPaginationServer } from './redux/actions';

function App() {
  const page = 0;
  const limit = 8;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginationServer(page, limit))
  }, [dispatch]);

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
