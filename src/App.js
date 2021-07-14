import React from 'react';
import './App.css';
import DarkModeToggle from './components/toggle-theme/DarkModeToggle.js';
import './styles.css';
import {BrowserRouter as Router} from "react-router-dom";
import GetGenres from "./components/genreBadge/GetGenres";
import Links from "./components/navigation/Links";
import UserAccount from "./components/userInfo/UserInfo";
import GetMovies from "./components/moviesList/GetMovies";
import Routes from "./components/navigation/Routes";


function App() {

    return (<div className="App">
        <Router>
            <h2 style={{margin: "20px 5px", display: "flex", justifyContent: "start"}}>
                <DarkModeToggle className="navbar"/>
                <Links/><UserAccount/></h2>
            <section style={{margin: "20px 5px"}}><GetGenres/></section>
            <Routes/>}


        </Router>
    </div>);
}

export default App;