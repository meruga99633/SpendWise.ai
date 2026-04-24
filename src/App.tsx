import { Login } from './pages/Auth/Login';
import "./styles/login.css";
import { Box } from '@mui/material';
import logo from "./assets/logo.png";
function App() {
  return (
    <>
    <Box component="img" src={logo} alt="logo" className='Sp-logo'/>
      <Login />
    </>
  )
}

export default App;
