import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import GroupIcon from '@material-ui/icons/Group';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  header: {
    background: '#49dbf0',
  },
}));


export default function CardUser(props) {
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [avatar, setAvatar] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [location, setLocation] = useState();
  const [github, setGithub] = useState();


  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user.login}`)
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
  }, []);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar src={avatar} />
        }
        action={
          <IconButton onClick={props.abrirCerrarModalDetails}>
            <CloseIcon />
          </IconButton>
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
  );
}
