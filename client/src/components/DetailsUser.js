import React, { useEffect } from 'react';
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
import FolderIcon from '@material-ui/icons/Folder';
import { getFollowers, getFollowing, getRepos } from '../actions/index'
import { connect } from 'react-redux'


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


function DetailsUser(props) {
  useEffect(() => {
    props.getFollowers(props.user.followers_url)
    props.getFollowing(props.user.login)
    props.getRepos(props.user.repos_url)
  }, []);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar src={props.user.avatar_url} />
        }
        action={
          <IconButton onClick={props.abrirCerrarModalDetails}>
            <CloseIcon />
          </IconButton>
        }
        title={props.user.login}
        subheader={props.user.id}
      />
      <CardMedia className={classes.media}
        image={props.user.avatar_url}
      />
      <CardContent>

        <Typography variant="body1" color="textSecondary" component="p">
          <IconButton>
            <GroupIcon />
          </IconButton>
          Seguidores: {props.followers.length} <br></br>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          Seguidos: {props.following.length} <br></br>
          <IconButton>
            <FolderIcon />
          </IconButton>
          Repositorios: {props.repos.length} <br></br>
        </Typography>

      </CardContent>
    </Card>
  );
}


function mapStateToProps(state) {
  return {
    ...state,
    followers: state.followers,
    following: state.following,
    repos: state.repos
  };
}



export default connect(mapStateToProps, { getFollowers, getFollowing, getRepos })(DetailsUser);