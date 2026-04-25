import "../styles/login.css";
import { signIn } from "../services/authService";
import { SignInPage, AppProvider} from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import  logo  from '../assets/logo.png';
import { APP_STRINGS } from "../utils/constants"

export function Signin() {
    const slotProps ={ emailField: { autoFocus: true }, form: { noValidate: true } };
     const theme = useTheme();
    return (
        <>
        <div className='login-container'>
        <AppProvider branding={SpendWise_Logo} theme={theme}>
            <SignInPage 
             signIn={signIn}
             providers={providers}
             slotProps={slotProps}
             />
        </AppProvider>
        </div>
        </>
    )
}

const providers = [
  { id: 'credentials', name: 'Email and Password' },
  { id: 'google', name: 'Google' }];

const SpendWise_Logo = 
{
  logo: (<img src={logo} alt="MUI logo" className="Sp-logo"/>),
  title: APP_STRINGS.APP_NAME,
};
