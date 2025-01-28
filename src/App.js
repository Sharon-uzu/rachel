import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import ProjectScreen from './Screens/ProjectScreen';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<ProjectScreen/>} />
      </Routes>

    </div>
  );
}

export default App;
