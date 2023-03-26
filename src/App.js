import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//PAGES
import ManageUsers from './pages/ManageUsers';
import Sidebar from './components/Sidebar';
import ManageAdministrators from './pages/ManageAdministrators';
import ManagePurchases from './pages/ManagePurchases';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<ManageUsers/>}/>
          <Route path='/userProfile/:id' element={<UserProfile/>}/>
          <Route path='/administrators' element={<ManageAdministrators/>}/>
          <Route path='/purchases' element={<ManagePurchases/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
