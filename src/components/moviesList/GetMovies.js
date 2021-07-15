import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setListMovies} from "../../redux/actionCreators";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {Badge} from 'reactstrap';
import {getDiscover, getPopular} from "../../services/api";


const GetMovies = ({id}) => {
    const dispatch = useDispatch();
    let ganreStatus = useSelector(({genres}) => genres.setGenre)
    const getListOfMovies = () => {
        if (id == null) {
            return getPopular()
        } else {
            return getDiscover(ganreStatus)
        }
    };
    useEffect(() => {
        getListOfMovies().then(value =>
            dispatch(setListMovies([...value.data.results]))
        )
            .catch(e => console.log('ERROR : ', e))
            .finally(() => console.log('Get movies block performed'))
    }, [ganreStatus])

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
        </Fragment>
    )
}

export default GetMovies;