import { MovieListItem } from './MovieListItem/MovieListItem';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
    console.log(`moviesList ${movies}`);
    return (
        <>
            <ul className={css.movieList}>
                {movies.map(({id, title})=> (
                    <MovieListItem
                        key={id}
                        id={id}
                        title={title}
                    />
                ))}
            </ul>
        </>

    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};