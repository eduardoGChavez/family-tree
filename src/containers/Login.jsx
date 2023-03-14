import React, { useState } from 'react';

import {createUseStyles} from 'react-jss'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingIn from '../components/Login/SingIn';
import SingUp from '../components/Login/SingUp';


const useStyles = createUseStyles({
  loginRegistrerContainer: {
    justifyContent: 'space-between',
  }
});

const theme = createTheme();

const Login = () => {
  const classes = useStyles();
  const [inicioRegistrar, setInicioRegistrar] = useState(true);

  const handleClickInicioRegistrar = () => {
    setInicioRegistrar(!inicioRegistrar);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
      <Grid className={classes.loginRegistrerContainer} container>
        <Button
          disabled={inicioRegistrar}
          onClick={handleClickInicioRegistrar}
        >
          Iniciar sesión
        </Button>
        <Button
          disabled={!inicioRegistrar}
          onClick={handleClickInicioRegistrar}
        >
          Registrarse
        </Button>
      </Grid>

      {inicioRegistrar ?
        <SingIn handleClickInicioRegistrar={handleClickInicioRegistrar} />
        :
        <SingUp />
      }
      </Container>
    </ThemeProvider>
  );
}

export default Login;