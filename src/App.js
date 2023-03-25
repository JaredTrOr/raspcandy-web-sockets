import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//PAGES
import ShowUsers from './pages/users/ManageUsers';
import Sidebar from './components/Sidebar';
import CreateUser from './pages/users/CreateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<ShowUsers/>}/>
          <Route path='/createUser' element={<CreateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
