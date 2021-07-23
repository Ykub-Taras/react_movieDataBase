import {Route, Switch} from "react-router-dom";
import GetMovies from "../moviesList/GetMovies";

import React from "react";
import MovieInfo from "../movieInfo/MovieInfo";
import GetPopular from "../moviesList/GetPopular";
import GetDiscover from "../moviesList/GetDiscover";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={GetMovies}/>
            <Route exact path={'/popular'} component={GetPopular}/>
            <Route exact path={'/discover'} component={GetDiscover}/>
            <Route exact path={'/movie/:id'} component={MovieInfo}/>
            <Route exact path={'/search'} component={GetMovies}/>
        </Switch>
    )
}
export default Routes;
