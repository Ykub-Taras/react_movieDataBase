import {Route, Switch} from "react-router-dom";
import GetMovies from "../moviesList/GetMovies";
import {useDispatch, useSelector} from "react-redux";
import {setGenre, setMovieId} from "../../redux/actionCreators";
import React from "react";
import MovieInfo from "../movieInfo/MovieInfo";
import GetPopular from "../moviesList/GetPopular";
import GetDiscover from "../moviesList/GetDiscover";

const Routes = () => {
    // const dispatch = useDispatch();
    // const ganreStatus = useSelector(({genres}) => genres.setGenre)

    // function popular() {
    //     dispatch(setGenre([]));
    //     console.log("ganreStatus", ganreStatus);
    //     return (<GetMovies/>)
    // }
    return (
        <Switch>
            <Route exact path={'/'} component={GetMovies}/>
            <Route exact path={'/popular'} component={GetPopular}/>
            <Route exact path={'/discover'} component={GetDiscover}/>
            <Route exact path={'/movie/:id'} component={MovieInfo}/>

        </Switch>
    )
}
export default Routes;
//    <Route exact path={'/popular'} render={() =>  <GetMovies/>}/>
//             <Route exact path={'/discover'} render={() => <GetMovies/>}/>
//             <Route exact path={'/movie/:id'} render={() => <MovieInfo/>}/>