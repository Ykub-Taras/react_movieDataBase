import {getMovieInfo} from "../../services/api";
import React, {useEffect, useState} from "react";
import ReactStars from "react-rating-stars-component";
import {useSelector} from "react-redux";

function MovieInfo({match}) {
    const id = match.params.id;
    const language = useSelector(({language}) => language.listLanguages)
    let [movieInfo, setMovieInfo] = useState({})
    let [genresInfo, setGanresInfo] = useState([])

    useEffect(() => {
        getMovieInfo(id, language).then(value => {
                setGanresInfo(value.data.genres);
                setMovieInfo(value.data)
            }
        );
    }, [id, language]);
    const source = `https://image.tmdb.org/t/p/original/${(movieInfo.poster_path)}`
    const source1 = `https://image.tmdb.org/t/p/original/${(movieInfo.backdrop_path)}`
    return (
        <div className="card mb-1" style={{maxWidth: "100vm", background: "none"}}>
            <div className="row no-gutters">
                <img className="img-fluid" src={source1} alt={movieInfo.title}/>
                <div className="col-md-4">
                    <img className="img-fluid" src={source} alt={movieInfo.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{movieInfo.title}</h1>
                        <hr/>
                        <h4 className="card-text">{movieInfo.overview}<br/><br/>Genres:</h4>
                        <div className="reactStar">
                            {genresInfo.map(value => <div key={value.id}
                                                          className="alert alert-info">{value.name}</div>)}
                        </div>
                        <h4 className="card-text">Released at: <i>{movieInfo.release_date}</i><br/>Spectators
                            rating: {movieInfo.vote_average}</h4>
                        <section className="reactStar"><ReactStars
                            value={movieInfo.vote_average} count={10} size={40} /*onChange(new_rating)*/
                            color1={"#f4c10f"}/></section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo