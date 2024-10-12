import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "services/movie_api";
import { MovieList } from "components/MovieList/MovieList";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";


const MoviePage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchPrams, setSearchParams] = useSearchParams();
    const movieName = searchPrams.get('query') ?? '';
    const [isLoading, setIsLoading] = useState(false);

    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const fetchedMovies = await fetchMovieByQuery(movieName);
                setSearchResults(fetchedMovies);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
    })();
    }, [movieName]);

    return (
        <div>
            <SearchBar value={movieName} onChange={updateQueryString} />
            {isLoading ? (
                <Loader />
            ) : movieName && searchResults.length === 0 ? (
                <h2> Nothing found </h2>
            ) : (
                <MovieList movies={searchResults} />
            )}
        </div>
    )
}

export default MoviePage;