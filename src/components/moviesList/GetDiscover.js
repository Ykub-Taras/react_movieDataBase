import {useDispatch, useSelector} from "react-redux";
import GetMovies from "./GetMovies";
import GetGenres from "../genreBadge/GetGenres";
import React from "react";
import {setSearch} from "../../redux/actionCreators";

export default function GetDiscover() {
    const dispatch = useDispatch();
    const ganreStatus = useSelector(({genres}) => genres.setGenre)
    dispatch(setSearch(''))
    return (
        <div>
            <section className="appMargin"><GetGenres/></section>
            <GetMovies id={ganreStatus}/>
        </div>
    )
}