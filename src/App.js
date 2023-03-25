import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//PAGES
import ManageUsers from './pages/ManageUsers';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<ManageUsers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
