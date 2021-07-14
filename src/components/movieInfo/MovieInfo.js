import {getMovieInfo} from "../../services/api";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import ReactStars from "react-rating-stars-component";

export default function MovieInfo({match}) {
    const dispatch = useDispatch;
    const id = match.params.id;
    console.log("params", id);
    let [movieInfo, setMovieInfo] = useState({})
    let [genresInfo, setGanresInfo] = useState([])

    useEffect(() => {
        getMovieInfo(id).then(value => {
                setGanresInfo(value.data.genres);
                setMovieInfo(value.data)
            }
        );
    }, [id]);
    const source = `https://image.tmdb.org/t/p/original/${(movieInfo.poster_path)}`
    const source1 = `https://image.tmdb.org/t/p/original/${(movieInfo.backdrop_path)}`
    return (
        <div className="card mb-1" style={{maxWidth: "100vm", background: "none"}}>
            <div className="row no-gutters" style={{}}>
                <img className="img-fluid" src={source1} alt={movieInfo.title}/>
                <div className="col-md-4">
                    <img className="img-fluid" src={source} alt={movieInfo.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{movieInfo.title}</h1>
                        <hr/>
                        <h4 className="card-text">{movieInfo.overview}<br/><br/>Genres:</h4>
                        <dir style={{display:"flex", justifyContent:"space-around"}}>
                            {genresInfo.map(value => <div className="alert alert-info">{value.name}</div>)}
                        </dir>

                        <h4 className="card-text">Released at: <i>{movieInfo.release_date}</i><br/>Spectators
                            rating: {movieInfo.vote_average}</h4>
                        <section style={{display: "flex", justifyContent: "space-around"}}><ReactStars
                            value={movieInfo.vote_average} count={10} size={40} /*onChange(new_rating)*/
                            color1={"#f4c10f"}/></section>

                    </div>
                </div>
            </div>
        </div>

    )
}