import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { addFavoriteMovie, deleteMovie, getFavoriteMovies, removeFavoriteMovie, updateMovieRating } from '../utils/firebase';
import { Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './MovieCard.module.css';
import { useSnackbar } from 'notistack';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const isFavoriteMovie = async (movieId, userId) => {
  const movies = await getFavoriteMovies(userId)

  const movieFound = movies.find(movie => movie.id === movieId);

  return Boolean(movieFound);
}

export default function MovieCard({ movie, onFavorited, onRatingChanged }) {
  const { enqueueSnackbar } = useSnackbar();

  const { title, year, poster, storyline } = movie;
  const [expanded, setExpanded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  console.log({movie})

  React.useEffect(() => {
    isFavoriteMovie(movie.id, sessionStorage.getItem('UserId')).then(
      result => {
        setIsFavorite(result)
      }
    );
  }, [movie])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggleFavoriteClick = () => {
    const userId = sessionStorage.getItem('UserId');

    if (isFavorite) {
      removeFavoriteMovie(userId, movie.id);
    }
    else {
      addFavoriteMovie(userId, movie.id);
    }

    if (onFavorited)
      onFavorited();
  }

  const handleRatingChange = async (event, newRating) => {
    await updateMovieRating(movie.id, newRating);

    if (onRatingChanged) {
      onRatingChanged();
      console.log('rating changed');
    }
  }

  const handleDeleteMovieClick = async () => {
    await deleteMovie(movie.id);

    enqueueSnackbar('Película eliminada correctamente', { variant: 'success' });
  }

  return (
    <Card sx={{ maxWidth: 345 }} className={styles.movieCard}>
      <CardHeader
        action={
          <IconButton aria-label="delete movie" onClick={handleDeleteMovieClick}>
            <DeleteIcon />
          </IconButton>
        }
        title={title}
        subheader={year}
      />
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt={`${title} poster`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap={true}>
          {storyline}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleToggleFavoriteClick} readOnly={!onFavorited}>
          <FavoriteIcon color={isFavorite ? "secondary" : "primary"} />
        </IconButton>
        <Typography component="legend">Your Rating</Typography>
        <Rating
          name="simple-controlled"
          value={movie.rating || 0}
          onChange={handleRatingChange}
          readOnly={!onRatingChanged}
        />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {storyline}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

