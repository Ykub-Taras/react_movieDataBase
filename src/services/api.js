import axios from "axios";

let axiosInstance = axios.create({baseURL: "https://api.themoviedb.org/3"});

const language = '&language=en-US';
const apiKey = '?api_key=406f642cd695381dbe8d24a9595d56df';
const page = '&page=';

const getDiscover = (genreId) => {console.log('*getDiscover*'); return(
    axiosInstance.get('/discover/movie' + apiKey + language + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreId + '&with_watch_monetization_types=free'))
};
const getGenres = () => {console.log('*getGenres*'); return(
    axiosInstance.get('/genre/movie/list' + apiKey + language))
};
const getPopular = () => {
    console.log('*getPopular*'); return(
    axiosInstance.get('/movie/top_rated' + apiKey + language))
};const getMovieInfo = (id) => {
    console.log('*getMovieInfo*', id); return(
    axiosInstance.get('/movie/' +id+ apiKey + language))
};


export {
    getDiscover, getGenres, getPopular, getMovieInfo

    // getDiscoverUA, getGenresUA, getPopularUA
}
