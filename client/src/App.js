import './App.css';
import DrawerAppBar from './Layouts/Navbar';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import { Login } from './Layouts/Auth/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DrawerAppBar/>}/>
        <Route path="/login-admin" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
