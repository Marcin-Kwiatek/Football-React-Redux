import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Logo from './Logo';
import Menu from './Menu'
import Home from './Home'
import BallonWinners from './BallonWinners';

function App() {
    return (
        <Router>    
            <Switch>
                <Route exact path='/'>
                    <Logo></Logo>
                    <Menu></Menu>
                    <Home></Home>
                </Route>
                <Route path='/ballon'>
                    <Logo></Logo>
                    <Menu></Menu>
                    <BallonWinners></BallonWinners>
                </Route>
                <Route path='/championsLeague'>
                    <Logo></Logo>
                    <Menu></Menu>
                </Route>
                <Route path='/worldChampionship'>
                    <Logo></Logo>
                    <Menu></Menu>
                </Route>
                <Route path='/europeanChampionship'>
                    <Logo></Logo>
                    <Menu></Menu>
                </Route>
            </Switch>
    </Router>
    );
}

export default App;