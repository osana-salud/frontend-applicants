import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListadoUsuarios from './ListadoUsuarios'
import GraficoSeguidores from './GraficoSeguidores'
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import GitHubIcon from '@material-ui/icons/GitHub';
import BusquedaUsuario from './BusquedaUsuario'

import { getAllUsers } from '../actions/index'
import { connect } from 'react-redux'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    backgroundColor: '#49dbf0'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  welcome: {
    margin: '100px',
    display: 'flex',
    justifyContent: 'center',

  }
}));

function Dashboard(props) {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    props.getAllUsers()
  }, []);
  
  
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };



  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              GitHub
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <div>
            <Link to='/users' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Listado" />
              </ListItem>
            </Link>

            <Link to='/seguidores' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Seguidores" />
              </ListItem>
            </Link>

            <Link to='/user' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Búsqueda" />
              </ListItem>
            </Link>

          </div>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Switch>

            <Route exact path="/">
              <Container>
              <div className={classes.welcome}>
                <img alt='' width='30%' height='30%'
                  src='https://camo.githubusercontent.com/f991b3432f988f2fe400e8134cdbeccc72d3e668/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646576706f73742f696d6167652f66657463682f732d2d3373526c393931582d2d2f68747470733a2f2f6769746875622e636f6d2f6e70656e7472656c2f6f63746f636c697070792f626c6f622f6d61737465722f676966732f74656e7461636c65732e67696625334672617725334474727565'/>
              </div>
              </Container>
            </Route>

            <Route exact path="/users">
              <Container>
                <ListadoUsuarios />
              </Container>
            </Route>

            <Route exact path="/seguidores">
              <Container>
                <GraficoSeguidores />
              </Container>
            </Route>

            <Route exact path="/user">
              <Container>
                <BusquedaUsuario />
              </Container>
            </Route>

          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return { };
}



export default connect(mapStateToProps, { getAllUsers })(Dashboard);
