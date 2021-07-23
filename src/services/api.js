import axios from "axios";


let axiosInstance = axios.create({baseURL: "https://api.themoviedb.org/3"});

const apiKey = '?api_key=406f642cd695381dbe8d24a9595d56df';
const page = '&page=';
const getDiscover = (genreId, currentPage, langCode) => axiosInstance.get('/discover/movie' + apiKey + '&language=' + langCode + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreId + '&with_watch_monetization_types=free' + page + currentPage);
const getGenres = (langCode) => axiosInstance.get('/genre/movie/list' + apiKey + '&language=' + langCode);
const getPopular = (pageNumber, langCode) => axiosInstance.get('/movie/top_rated' + apiKey + '&language=' + langCode + page + pageNumber);
const getMovieInfo = (id, langCode) =>
    axiosInstance.get('/movie/' + id + apiKey + '&language=' + langCode);
const getSearch = (query, langCode, pageNumber) => axiosInstance.get('/search/movie' + apiKey + '&language=' + langCode + '&query=' + query + '&page=' + pageNumber + '&include_adult=false');


export {
    getDiscover, getGenres, getPopular, getMovieInfo, getSearch
}
