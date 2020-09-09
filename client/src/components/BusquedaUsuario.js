import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import swal from 'sweetalert';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#49dbf0',
    }
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/">
        fergim1
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  header: {
    background: '#49dbf0',
  },
  errors: {
    color: 'red'
  }
}));
function validate(usuario) {
  let errors = {};
  if (!/[a-z]{4,20}/.test(usuario)) {
    errors.cantMin = 'Debes ingresar 4 caracteres como mínimo';
  }
  if (usuario==='osana-salud') {
    errors.osana = 'No puedes buscar de la palabra "osana-salud"';
  }

  return errors;
}

export default function BusquedaUsuario() {
  const [usuario, setUsuario] = useState();
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [avatar, setAvatar] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [location, setLocation] = useState();
  const [github, setGithub] = useState();

  const [errors, setError] = useState({});

  const handleInputChange = e => {
    setError(validate(e.target.value));
    setUsuario(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!errors.cantMin && !errors.osana ) {
    fetch(`https://api.github.com/users/${usuario}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name)
        setLogin(data.login)
        setAvatar(data.avatar_url)
        setFollowers(data.followers)
        setFollowing(data.following)
        setLocation(data.location)
        setGithub(data.html_url)
      })
    }
    else if (errors.cantMin){
      swal({
        text: 'Debes ingresar 4 caracteres como mínimo!',
        icon: 'error',
        button: 'Aceptar'
    })
    }
    else if(errors.osana) {
      swal({
        text: 'No puedes buscar de la palabra "osana-salud!',
        icon: 'error',
        button: 'Aceptar'
    })
    }
  }


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="GitHub" src="https://siliconnews.plataformasinc.es/wp-content/uploads/2019/08/Github-qu%C3%A9-es-y-cu%C3%A1l-es-su-importancia.jpg">

        </Avatar>
        <Typography component="h1" variant="h5">
          GitHub
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usuario"
            label="Buscar Usuario"
            name="usuario"
            autoComplete="usuario"
            autoFocus
            onChange={handleInputChange}
          />
          {errors.cantMin && <p className={classes.errors}>{errors.cantMin}</p>}
          {errors.osana && <p className={classes.errors}>{errors.osana}</p>}


          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Buscar
                        </Button>
          </ThemeProvider>


        </form>
        {login ? (


        <Card className={classes.card}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar src={avatar} />
        }
        title={name}
        subheader={login}
      />
      <CardMedia className={classes.media}
        image={avatar}
      />
      <CardContent>

        <Typography variant="body1" color="textSecondary" component="p">
        <IconButton>
            <LocationOnIcon />
          </IconButton>
          Ubicación: {location} <br></br>
          <IconButton>
            <GroupIcon />
          </IconButton>
          Seguidores: {followers} <br></br>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          Seguidos: {following} <br></br>
          <IconButton>
           <GitHubIcon />
          </IconButton>
            <Link color="inherit" href={github}>
            Github
            </Link>
        </Typography>

      </CardContent>
    </Card>
        ): ('')}


      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}