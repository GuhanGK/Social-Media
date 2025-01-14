import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Components/Pages/Profile';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
