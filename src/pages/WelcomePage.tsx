import { Signin } from '../pages/LoginPage';
import "../styles/global.css";
import "../styles/welcome.css";
import "../styles/login.css";
import { AppBar, Container   } from '@mui/material';
import logo from "../assets/logo.png";
import manworkonlaptop  from "../assets/manworkonlaptop.png";
import { APP_STRINGS } from "../utils/constants"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';
import PixRoundedIcon from '@mui/icons-material/PixRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';

export const WelcomePage = () => {
    return (  
<>
    <div className='welcome-container'>
        <AppBar position="static">
            <Container maxWidth="xl" className='AppBarContainer'>
                <img src={logo} alt="MUI logo" className="SpAi-logo" />
            </Container>
        </AppBar>

        <div className='welcome-content-body'>
            <div className='information-section'>
                <p className='about_sw'> {APP_STRINGS.INFROMATION_MESSAGES.ABOUT_SW}</p>
                <div className='features-list'>
                <div className='feature-item'>
                    <CurrencyRupeeIcon />
                    <span className='features'>{APP_STRINGS.INFROMATION_MESSAGES.FEATURES.TRACK_EXPENSES}</span>
                </div>

                <div className='feature-item'>
                    <CardTravelRoundedIcon />
                    <span className='features'>{APP_STRINGS.INFROMATION_MESSAGES.FEATURES.PLAN_BUDGETS}</span>
                </div>

                <div className='feature-item'>
                    <CreditScoreRoundedIcon />
                    <span className='features'>{APP_STRINGS.INFROMATION_MESSAGES.FEATURES.ACHIEVE_GOALS}</span>
                </div>

                <div className='feature-item'>
                    <PixRoundedIcon />
                    <span className='features'>{APP_STRINGS.INFROMATION_MESSAGES.FEATURES.BUILD_WEALTH}</span>
                </div>

                <div className='feature-item'>
                    <HttpsRoundedIcon />
                    <span className='features'>{APP_STRINGS.INFROMATION_MESSAGES.FEATURES.SECURE_PRIVATE}</span>
                </div>
                </div>
            </div>
            <img src={manworkonlaptop} alt="Man working on laptop" className="manworkonlaptop" />
            <Signin/>
        </div>
    </div>
    </>
     )
}