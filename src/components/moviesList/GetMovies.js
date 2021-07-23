import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAllPages, setCurrentPage, setListMovies} from "../../redux/actionCreators";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {Badge} from 'reactstrap';
import {getDiscover, getPopular, getSearch} from "../../services/api";
import Pagination from "../pagination/Pagination";

const GetMovies = ({id}) => {
    const dispatch = useDispatch();
    let ganreStatus = useSelector(({genres}) => genres.setGenre);
    const language = useSelector(({language}) => language.listLanguages)
    const searchItem = useSelector(({search}) => search.searchItem)
    const currentPage = useSelector(({pagination}) => pagination.currentPage);

    const getListOfMovies = () => (
        (id == null && searchItem === '') ? getPopular(currentPage, language) :
            (id !== null && searchItem === '') ? getDiscover(ganreStatus, currentPage, language) :
                getSearch(searchItem, language, currentPage));

    useEffect(() => {
        getListOfMovies().then(value => {
                dispatch(setListMovies([...value.data.results]))
                dispatch(setCurrentPage(value.data.page))
                dispatch(setAllPages(value.data.total_pages))
            }
        )
            .catch(e => console.log('ERROR : ', e))
            .finally(() => console.log('Get movies block performed'))
    }, [ganreStatus, currentPage, id, language, searchItem])

    const movies = useSelector(({movies}) => movies.listMovies)
    const moviesList = movies.map((value, index) => {
        const source = `https://image.tmdb.org/t/p/w300/${(value.poster_path)}`
        return (
            <div className="col-md-3" key={index}>
                <div className="card" style={{background: "none"}}>
                    <Badge color="info" pill style={{position: "absolute"}}>{value.vote_average}</Badge>
                    <Link to={`/movie/${value.id}`}>
                        <img className="img-fluid" src={source} alt={value.title}/>
                    </Link>
                </div>
                <div className="md-3">
                    <h3 className="fontBold">{value.title}</h3>
                    <h4>{(value.title !== value.original_title) && `( ${value.original_title} )`}</h4>
                    <h5 className="fontBold">Released at: {value.release_date}</h5>
                    <h5>Rated {value.vote_count} times</h5>
                    <section className="reactStar"><ReactStars
                        value={value.vote_average} count={10}
                        size={20} /*onChange(new_rating)*/
                        color1={"#f4c10f"}/></section>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            <dir className="row m-auto" style={{padding: 0}}>
                {moviesList}
            </dir>
            <Pagination/>
        </Fragment>
    )
}

export default GetMovies;