import React from "react";

import {createUseStyles} from 'react-jss'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = createUseStyles({
  textLink: {
    cursor: 'pointer',
  }
})

const SingIn = ({handleClickInicioRegistrar}) => {
  const classes = useStyles();
  
  const handleSubmitSingIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <DialogTitle id="form-dialog-title">
        Iniciar sesión
      </DialogTitle>
      {/* <Box component="form" onSubmit={handleSubmitSingIn} noValidate sx={{ mt: 1 }}> Form */}
      
      <form onSubmit={handleSubmitSingIn}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Recordarme"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Iniciar Sesión
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link 
              className={classes.textLink}
              onClick={handleClickInicioRegistrar}
            >
              {"Registrarse"}
            </Link>
          </Grid>
        </Grid>
      </form>
      {/* </Box> */}
    </Box>
  );
}

export default SingIn;