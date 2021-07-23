import React from 'react';
import './App.css';
import DarkModeToggle from './components/toggle-theme/DarkModeToggle.js';
import './styles.css';
import {BrowserRouter as Router} from "react-router-dom";
import Links from "./components/navigation/Links";
import UserAccount from "./components/userInfo/UserInfo";
import Routes from "./components/navigation/Routes";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import SearchInput from "./components/search/SearchInput";


function App() {
    return (<div className="App">
        <Router>
            <h2 className="appMargin dFlexJustStart">
                <DarkModeToggle className="navbar"/>
                <LanguageSwitcher/>
                <SearchInput/>
                <Links/>
                <UserAccount/>
            </h2>
            <Routes/>

        </Router>
    </div>);
}

export default App;