import { Box } from '@mui/material'
import "../../styles/login.css";
import {Typography } from '@mui/material'
import { APP_STRINGS } from '../../utils/constants'
import logo from "../../assets/logo.png";
export function Login() {
    return (
        <>
            <Box className='login-container'>
                <Box className='welcome-message'>
                <Typography variant="h5"><center>{APP_STRINGS.MESSAGES.WELLCOME_MESSAGE}</center></Typography>
                <Typography variant="body1"><center>{APP_STRINGS.MESSAGES.SUB_WELCOME_MESSAGE}</center></Typography>
                </Box>
            </Box>
        </>
    )
}
