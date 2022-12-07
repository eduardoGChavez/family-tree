// import React, { useState } from "react";

// import '../styles/containers/Login.css'

// const Login = () => {
//   const [iniciar, setIniciar] = useState(true);

//   return (
//     <div className="Login-container">
//       <div className="Login-content">


//         <ul className="nav nav-pills nav-justified mb-3">
//           <li className="nav-item">
//             <a className={iniciar ? "nav-link active" : "nav-link"}
//               // onClick={e => handleClickInicioRegistrar(e, true)}
//               href="">
//               Iniciar sesión
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className={!iniciar ? "nav-link active" : "nav-link"}
//               // onClick={e => handleClickInicioRegistrar(e, false)}
//               href="">
//               Registrar
//             </a>
//           </li>
//         </ul>

//         <div className="Login-form-container">
//           {iniciar ? (
//             <div className="Login-form-content-singin">
//               <form className="Login-form-singin" /*onSubmit={handleSubmitSingin}*/>
//                 <div className="form-outline mb-4">
//                   <label className="form-label">Correo electrónico</label>
//                   <input type="email"
//                     id="loginName"
//                     placeholder="mi_correo@ejemplo.com"
//                     className="form-control"
//                     name="correo"
//                     // value={formSingin.correo}
//                     // onChange={handleChangeFormSingin} />
//                     />
//                 </div>

//                 <div className="form-outline mb-4">
//                   <label className="form-label">Contraseña</label>
//                   <input type="password"
//                     id="loginPassword"
//                     placeholder="Contraseña"
//                     className="form-control"
//                     name="contrasena"
//                     // value={formSingin.contrasena}
//                     // onChange={handleChangeFormSingin}
//                   />
//                 </div>

//                 <div className="Login-form-singin--forgotPassword-container row mb-4">
//                   <div className="Login-form-singin--forgotPassword-content col-md-6 d-flex">
//                     <a href="#!">¿Olvidaste tu contraseña?</a>
//                   </div>
//                 </div>

//                 <button type="submit"
//                   className="btn btn-primary btn-block mb-4"
//                   // onClick={handleSubmitSingin}
//                 >
//                   Acceder
//                 </button>

//                 <div className="text-center">
//                   <p>¿No eres miembro?
//                     <a href="" /*onClick={ e => handleClickInicioRegistrar(e, false) }*/ >¡Regístrate!</a>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           ) : (
//             <div className="Login-form-content-singin">
//               <form className="Login-form-singup">
//                 <div className="form-outline mb-4">
//                   <label className="form-label">Nombre</label>
//                   <input type="text"
//                     id="registerName"
//                     placeholder="Nombre"
//                     className="form-control"
//                     name="nombre"
//                     // value={formSingup.nombre}
//                     // onChange={handleChangeFormSingup} 
//                   />
//                 </div>

//                 <div className="form-outline mb-4">
//                   <label className="form-label">Correo electrónico</label>
//                   <input type="email"
//                     id="registerEmail"
//                     placeholder="mi_correo@ejemplo.com"
//                     className="form-control"
//                     name="correo"
//                     // value={formSingup.correo}
//                     // onChange={handleChangeFormSingup} 
//                   />
//                 </div>

//                 <div className="form-outline mb-4">
//                   <label className="form-label">Contraseña</label>
//                   <input type="password"
//                     id="registerPassword"
//                     placeholder="Contraseña"
//                     className="form-control"
//                     name="contrasena"
//                     // value={formSingup.contrasena}
//                     // onChange={handleChangeFormSingup} 
//                   />
//                 </div>

//                 <div className="form-outline mb-4">
//                   <label className="form-label">Repetir contraseña</label>
//                   <input type="password"
//                     id="registerRepeatPassword"
//                     placeholder="Repetir contraseña"
//                     className="form-control"
//                     name="repContrasena"
//                     // value={formSingup.repContrasena}
//                     // onChange={handleChangeFormSingup} 
//                   />
//                 </div>

//                 <div className="Login-form-singin--terms-container form-check d-flex justify-content-center mb-4">
//                   <input className="form-check-input me-2"
//                     type="checkbox"
//                     // checked={termsChecked}
//                     // onClick={handleClickCheckbox} 
//                   />
//                   <label className="Login-form-singin--terms-content form-check-label"
//                     // onClick={handleClickCheckbox}
//                   >
//                     Estoy seguro de querer crear una sesión
//                   </label>
//                 </div>

//                 <button type="submit"
//                   className="btn btn-primary btn-block mb-3"
//                   // disabled={!termsChecked}
//                   // onClick={handleSubmitSingup}
//                 >
//                   Registrarme
//                 </button>
//               </form>
//             </div>
//           )
//           }
//         </div>








//       </div>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from 'react';

import {createUseStyles} from 'react-jss'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingIn from '../components/Login/SingIn';


const useStyles = createUseStyles({
  loginRegistrerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const classes = useStyles();
  const [inicioRegistrar, setInicioRegistrar] = useState(true);

  const handleClickInicioRegistrar = () => {
    setInicioRegistrar(!inicioRegistrar);
  }

  const handleSubmitSingUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
      <Grid className={classes.loginRegistrerContainer}>
        <Button
          disabled={inicioRegistrar}
          onClick={handleClickInicioRegistrar}
          // type="submit"
          // fullWidth
          // variant="contained"
          // sx={{ mt: 3, mb: 2 }}
        >
          Iniciar sesión
        </Button>
        <Button
          disabled={!inicioRegistrar}
          onClick={handleClickInicioRegistrar}
          // type="submit"
          // fullWidth
          // variant="contained"
          // sx={{ mt: 3, mb: 2 }}
        >
          Registrarse
        </Button>
      </Grid>

      {inicioRegistrar ?
        <SingIn />
        :
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box component="form" onSubmit={handleSubmitSingUp} noValidate sx={{ mt: 1 }}> {/* Form */}
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
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      }
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;